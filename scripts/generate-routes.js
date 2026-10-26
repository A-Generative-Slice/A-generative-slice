import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const ROUTES = [
  {
    path: 'projects',
    title: 'Client Deliverables & Case Studies — A Generative Slice',
    description: 'Explore real-world client deliverables across hospitality, industrial manufacturing, luxury e-commerce, architecture, and couture by A Generative Slice.'
  },
  {
    path: 'products',
    title: 'ProdX & Slice Suite — A Generative Slice',
    description: 'Explore the Slice Suite: Slice3D, SliceLeads, SliceMail, SliceInbox, SlicePPT, SliceDAM, and SliceClass by A Generative Slice.'
  },
  {
    path: 'about',
    title: 'Our Story & Chennai Headquarters — A Generative Slice',
    description: 'Learn about A Generative Slice, our founding mission by Mohammed Hussain, student mentorship initiatives, and our Chennai AI laboratory.'
  },
  {
    path: 'services',
    title: 'Bespoke AI Engineering Services — A Generative Slice',
    description: 'Full-cycle AI architecture, custom enterprise ERPs, RAG pipelines, high-conversion web platforms, and automated workflow integrations.'
  },
  {
    path: 'contact',
    title: 'Schedule a Free Strategic Consultation — A Generative Slice',
    description: 'Get in touch with A Generative Slice for 100% free initial project scoping, NDA-backed consultations, and custom architecture blueprints.'
  },
  {
    path: 'careers',
    title: 'Careers & Engineering Openings — A Generative Slice',
    description: 'Join our high-agency team of AI engineers, full-stack builders, and creative problem solvers building the future of software.'
  }
];

if (!fs.existsSync(distDir)) {
  console.error('[SEO Pre-renderer] Dist directory does not exist! Run vite build first.');
  process.exit(1);
}

const templatePath = path.join(distDir, 'index.html');
if (!fs.existsSync(templatePath)) {
  console.error('[SEO Pre-renderer] dist/index.html not found!');
  process.exit(1);
}

const baseHtml = fs.readFileSync(templatePath, 'utf-8');

console.log('[SEO Pre-renderer] Generating static route directories for GitHub Pages HTTP 200 responses...');

for (const route of ROUTES) {
  const routeDir = path.join(distDir, route.path);
  fs.mkdirSync(routeDir, { recursive: true });

  let routeHtml = baseHtml;
  // Replace Title
  routeHtml = routeHtml.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);
  routeHtml = routeHtml.replace(/<meta name="title" content=".*?" \/>/i, `<meta name="title" content="${route.title}" />`);
  routeHtml = routeHtml.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${route.title}" />`);
  routeHtml = routeHtml.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${route.title}" />`);

  // Replace Description
  routeHtml = routeHtml.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${route.description}" />`);
  routeHtml = routeHtml.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${route.description}" />`);
  routeHtml = routeHtml.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${route.description}" />`);

  // Replace Canonical & OG URL
  const canonicalUrl = `https://agenerativeslice.com/${route.path}`;
  routeHtml = routeHtml.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${canonicalUrl}" />`);
  routeHtml = routeHtml.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${canonicalUrl}" />`);
  routeHtml = routeHtml.replace(/<meta name="twitter:url" content=".*?" \/>/i, `<meta name="twitter:url" content="${canonicalUrl}" />`);

  const destPath = path.join(routeDir, 'index.html');
  fs.writeFileSync(destPath, routeHtml, 'utf-8');
  console.log(`  ✓ Generated: dist/${route.path}/index.html (HTTP 200 direct response)`);
}

console.log('[SEO Pre-renderer] Complete! All inner pages will now return HTTP 200 OK to search engine crawlers.');
