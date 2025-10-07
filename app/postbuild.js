
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const distDir = process.env.NEXT_DIST_DIR || '.next';
const standalonePath = path.join(distDir, 'standalone', 'app');

// Create standalone directory
fs.mkdirSync(standalonePath, { recursive: true });

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
