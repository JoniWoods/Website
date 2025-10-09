const fs = require('fs');
const path = require('path');

function generateImageSitemap() {
  const baseUrl = 'https://joniwoods.com';
  const currentDate = new Date().toISOString();
  
  const images = [
    {
      loc: `${baseUrl}/images/Joni_Woods_Author_Portrait_Optimized.jpg`,
      caption: 'Joni Woods, certified life coach and author of Burned, Blocked, and Better Than Ever',
      title: 'Joni Woods Professional Portrait',
      license: `${baseUrl}`,
    },
    {
      loc: `${baseUrl}/images/JoniWoods_SideView.webp`,
      caption: 'Joni Woods, founder of Journey Coaching, professional certified life coach and author',
      title: 'Joni Woods Professional Side Portrait',
      license: `${baseUrl}`,
    },
    {
      loc: `${baseUrl}/images/Woods_FrontCover_3D.png`,
      caption: 'Burned, Blocked, and Better Than Ever book cover by Joni Woods featuring inspiring design for healing and transformation',
      title: 'Burned, Blocked, and Better Than Ever Book Cover',
      license: `${baseUrl}`,
    },
    {
      loc: `${baseUrl}/images/JoniWoods_logo.png`,
      caption: 'Joni Woods logo - certified life coach, author and transformation expert',
      title: 'Joni Woods Official Logo',
      license: `${baseUrl}`,
    },
    {
      loc: `${baseUrl}/images/book-banner.png`,
      caption: 'Burned, Blocked, and Better Than Ever - A Raw Journey of Healing by Joni Woods, available on all platforms',
      title: 'Book Banner - Burned, Blocked, and Better Than Ever',
      license: `${baseUrl}`,
    }
  ];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>`;

  images.forEach(image => {
    sitemap += `
    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:caption>${image.caption}</image:caption>
      <image:title>${image.title}</image:title>
      <image:license>${image.license}</image:license>
    </image:image>`;
  });

  sitemap += `
  </url>
</urlset>`;

  const sitemapPath = path.join(__dirname, '..', 'image-sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('✓ Image sitemap generated at', sitemapPath);
}

if (require.main === module) {
  generateImageSitemap();
}

module.exports = { generateImageSitemap };