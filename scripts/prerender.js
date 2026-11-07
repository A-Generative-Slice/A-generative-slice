/**
 * Build-time body pre-render.
 *
 * Serves the freshly built dist with `vite preview`, then loads every public
 * route in headless Chrome and writes the fully rendered DOM back into the
 * route's index.html. Crawlers and link unfurlers therefore receive real body
 * content (H1s, copy, FAQs, JSON-LD) instead of an empty CSR root.
 *
 * Graceful degradation: if no Chrome/Chromium binary exists (e.g. a minimal
 * local machine), the script logs a skip and exits 0 — the head-swapped shells
 * from generate-routes.js still ship. GitHub Actions ubuntu runners include
 * google-chrome, so production builds always pre-render.
 *
 * Run AFTER: vite build && generate-routes.js && cp dist/index.html dist/404.html
 * (404.html must stay an empty shell so unknown URLs render client-side).
 */
import fs from 'fs';
import path from 'path';
import { execFileSync, spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { ROUTES, canonicalUrl } from './routes-manifest.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const PORT = 4173;
const BASE = `http://127.0.0.1:${PORT}`;

function findChrome() {
  for (const bin of ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser']) {
    try {
      execFileSync('command', ['-v', bin], { stdio: 'pipe', shell: '/bin/bash' });
      return bin;
    } catch { /* try next */ }
  }
  return null;
}

async function waitForServer(timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(`${BASE}/`);
      if (res.ok) return true;
    } catch { /* not up yet */ }
    await new Promise((r) => setTimeout(r, 400));
  }
  return false;
}

const chrome = findChrome();
if (!chrome) {
  console.log('[prerender] No Chrome/Chromium found — skipping body pre-render (head-swapped shells still ship).');
  process.exit(0);
}
if (!fs.existsSync(path.join(distDir, 'index.html'))) {
  console.error('[prerender] dist/index.html missing — run vite build first.');
  process.exit(1);
}

console.log(`[prerender] Using ${chrome}. Starting vite preview on :${PORT}...`);
const server = spawn(process.execPath, [path.join(root, 'node_modules', 'vite', 'bin', 'vite.js'), 'preview', '--port', String(PORT), '--strictPort', '--host', '127.0.0.1'], {
  cwd: root,
  stdio: ['ignore', 'pipe', 'pipe']
});
let serverLog = '';
server.stdout.on('data', (d) => { serverLog += d.toString(); });
server.stderr.on('data', (d) => { serverLog += d.toString(); });

const stopServer = () => new Promise((resolve) => {
  server.once('exit', resolve);
  server.kill('SIGTERM');
  setTimeout(() => { server.kill('SIGKILL'); resolve(); }, 3000).unref();
});

if (!(await waitForServer())) {
  console.error('[prerender] Preview server never became ready:\n' + serverLog);
  await stopServer();
  process.exit(1);
}

let rendered = 0;
let skipped = 0;
const t0 = Date.now();

// Benchmark mode: PRERENDER_ONLY=/some/path renders just that route.
const only = process.env.PRERENDER_ONLY;
const targets = only ? ROUTES.filter((r) => r.path === only) : ROUTES;

for (const route of targets) {
  const url = `${BASE}${route.path === '/' ? '/' : `${route.path}/`}`;
  const dest = route.path === '/'
    ? path.join(distDir, 'index.html')
    : path.join(distDir, route.path, 'index.html');

  const start = Date.now();
  try {
    const dom = execFileSync(chrome, [
      '--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
      '--disable-dev-shm-usage', '--dump-dom', '--virtual-time-budget=8000',
      '--timeout=25000', url
    ], { timeout: 60000, maxBuffer: 128 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'] }).toString('utf-8');

    // Sanity: rendered React body must be present, not the empty CSR shell.
    const rootMatch = dom.match(/<div id="root">([\s\S]*?)<\/div>\s*<script/i);
    const hasBody = dom.includes('<main') && dom.length > 8000 && (!rootMatch || rootMatch[1].trim().length > 500);
    if (!hasBody) {
      console.warn(`  ! ${route.path}: dump lacked rendered body — keeping head-swap shell.`);
      skipped++;
      continue;
    }
    // Headless virtual time can freeze Framer Motion mid-fade, leaving inline
    // opacity/transform styles in the dump. Strip animation-only style attrs so
    // the shipped HTML is fully visible to no-JS crawlers and unfurlers; React
    // re-renders and re-animates normally for real browsers.
    const cleaned = dom.replace(/ style="[^"]*"/g, (attr) => {
      const decls = attr.slice(8, -1).split(';').map((d) => d.trim()).filter(Boolean);
      const motionOnly = decls.length > 0 && decls.every((d) => /^(opacity|transform|transform-origin|will-change)\s*:/.test(d));
      return motionOnly ? '' : attr;
    });
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, cleaned, 'utf-8');
    rendered++;
    console.log(`  ✓ ${route.path || '/'} → rendered body (${((Date.now() - start) / 1000).toFixed(1)}s, ${(cleaned.length / 1024).toFixed(0)} kB)`);
  } catch (err) {
    console.warn(`  ! ${route.path}: Chrome failed (${err.message.split('\n')[0]}) — keeping head-swap shell.`);
    skipped++;
  }
}

await stopServer();
console.log(`[prerender] Done in ${((Date.now() - t0) / 1000).toFixed(1)}s: ${rendered} rendered, ${skipped} skipped. Canonical base: ${canonicalUrl('/')}`);
if (rendered === 0) process.exit(1);