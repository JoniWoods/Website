// Inject Google Analytics gtag.js into static HTML after export
const fs = require('fs');
const path = require('path');

const htmlPath = path.resolve(__dirname, '../index.html');
const gtagScript = `\n<script async src="https://www.googletagmanager.com/gtag/js?id=G-15GL881LLP"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n  gtag('config', 'G-15GL881LLP');\n</script>\n`;

if (fs.existsSync(htmlPath)) {
  let html = fs.readFileSync(htmlPath, 'utf8');
  if (!html.includes('googletagmanager.com/gtag/js?id=G-15GL881LLP')) {
    // Insert before closing </head>
    html = html.replace('</head>', `${gtagScript}</head>`);
    fs.writeFileSync(htmlPath, html, 'utf8');
    console.log('Google Analytics gtag.js injected into index.html');
  } else {
    console.log('Google Analytics gtag.js already present in index.html');
  }
} else {
  console.error('index.html not found.');
}
