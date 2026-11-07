import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ROUTES, canonicalUrl, esc } from './routes-manifest.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('[routes] Dist directory does not exist! Run vite build first.');
  process.exit(1);
}

const templatePath = path.join(distDir, 'index.html');
if (!fs.existsSync(templatePath)) {
  console.error('[routes] dist/index.html not found!');
  process.exit(1);
}

const baseHtml = fs.readFileSync(templatePath, 'utf-8');

console.log('[routes] Generating static route shells with per-route SEO heads (GitHub Pages HTTP 200)...');

for (const route of ROUTES) {
  // The home shell already carries the correct head from index.html.
  if (route.path === '/') continue;

  const routeDir = path.join(distDir, route.path);
  fs.mkdirSync(routeDir, { recursive: true });

  const title = esc(route.title);
  const description = esc(route.description);
  const url = canonicalUrl(route.path);

  let routeHtml = baseHtml;
  routeHtml = routeHtml.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);
  routeHtml = routeHtml.replace(/<meta name="title" content=".*?"\s*\/>/i, `<meta name="title" content="${title}" />`);
  routeHtml = routeHtml.replace(/<meta property="og:title" content=".*?"\s*\/>/i, `<meta property="og:title" content="${title}" />`);
  routeHtml = routeHtml.replace(/<meta name="twitter:title" content=".*?"\s*\/>/i, `<meta name="twitter:title" content="${title}" />`);

  routeHtml = routeHtml.replace(/<meta name="description" content=".*?"\s*\/>/i, `<meta name="description" content="${description}" />`);
  routeHtml = routeHtml.replace(/<meta property="og:description" content=".*?"\s*\/>/i, `<meta property="og:description" content="${description}" />`);
  routeHtml = routeHtml.replace(/<meta name="twitter:description" content=".*?"\s*\/>/i, `<meta name="twitter:description" content="${description}" />`);

  routeHtml = routeHtml.replace(/<link rel="canonical" href=".*?"\s*\/>/i, `<link rel="canonical" href="${url}" />`);
  routeHtml = routeHtml.replace(/<meta property="og:url" content=".*?"\s*\/>/i, `<meta property="og:url" content="${url}" />`);
  routeHtml = routeHtml.replace(/<meta name="twitter:url" content=".*?"\s*\/>/i, `<meta name="twitter:url" content="${url}" />`);

  fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml, 'utf-8');
  console.log(`  ✓ dist/${route.path}/index.html`);
}

console.log('[routes] Complete. Inner pages return HTTP 200 with route-specific heads.');
