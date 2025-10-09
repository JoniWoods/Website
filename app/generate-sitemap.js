const fs = require('fs');
const path = require('path');

function generateSitemap() {
  const baseUrl = 'https://joniwoods.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/#about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/#services</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/#contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

  const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('✓ Sitemap generated at', sitemapPath);
}

// Run if called directly
if (require.main === module) {
  generateSitemap();
}

module.exports = { generateSitemap };