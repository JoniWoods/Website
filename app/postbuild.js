
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { generateSitemap } = require('./generate-sitemap');
const { generateImageSitemap } = require('./generate-image-sitemap');

const distDir = process.env.NEXT_DIST_DIR || '.next';
const standalonePath = path.join(distDir, 'standalone', 'app');

// Create standalone directory
fs.mkdirSync(standalonePath, { recursive: true });

// Generate sitemaps
try {
  generateSitemap();
  console.log('✓ Sitemap generated');
} catch (error) {
  console.warn('⚠️  Failed to generate sitemap:', error.message);
}

try {
  generateImageSitemap();
  console.log('✓ Image sitemap generated');
} catch (error) {
  console.warn('⚠️  Failed to generate image sitemap:', error.message);
}

// Copy all build artifacts
try {
  const files = ['_next', 'fonts', 'images', '*.html', '*.txt', '*.pdf'];
  files.forEach(pattern => {
    try {
      execSync(`cp -r ${path.join(distDir, pattern)} ${standalonePath}/ 2>/dev/null`);
    } catch (e) {
      // Ignore errors for optional files
    }
  });
  
  // Create static directory copy for backward compatibility
  const staticSrc = path.join(distDir, '_next', 'static');
  const staticDest = path.join(distDir, 'static');
  if (fs.existsSync(staticSrc) && !fs.existsSync(staticDest)) {
    try {
      execSync(`cp -r "${staticSrc}" "${staticDest}"`);
    } catch (e) {
      // Ignore if already exists
    }
  }
  
  console.log('✓ Build artifacts copied to standalone directory');
} catch (error) {
  console.error('Error copying build artifacts:', error.message);
}
