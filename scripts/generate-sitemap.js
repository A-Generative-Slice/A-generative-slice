import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ROUTES, LASTMOD, canonicalUrl } from './routes-manifest.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dest = path.resolve(__dirname, '../public/sitemap.xml');

const entries = ROUTES.filter((r) => r.sitemap).map((r) => `  <url>
    <loc>${canonicalUrl(r.path)}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${entries}
</urlset>
`;

fs.writeFileSync(dest, xml, 'utf-8');
console.log(`[sitemap] Wrote ${ROUTES.filter((r) => r.sitemap).length} URLs to public/sitemap.xml (lastmod ${LASTMOD}).`);