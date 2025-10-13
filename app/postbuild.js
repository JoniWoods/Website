
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { generateSitemap } = require('./generate-sitemap');

const distDir = process.env.NEXT_DIST_DIR || '.next';
const standalonePath = path.join(distDir, 'standalone', 'app');
const outDir = path.join(__dirname, 'out');
const repoRoot = path.resolve(__dirname, '..');

// Create standalone directory
fs.mkdirSync(standalonePath, { recursive: true });

// Generate sitemap
try {
  generateSitemap();
  console.log('✓ Sitemap generated');
} catch (error) {
  console.warn('⚠️  Failed to generate sitemap:', error.message);
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

// Inject Google Analytics gtag.js into index.html after export
try {
  require('./inject-gtag');
} catch (e) {
  console.error('Failed to inject Google Analytics:', e);
}

// Copy static export (out) to repository root so production files are up to date
try {
  if (fs.existsSync(outDir)) {
    // Ensure _next at root matches the latest build
    const rootNext = path.join(repoRoot, '_next');
    if (fs.existsSync(rootNext)) {
      try {
        fs.rmSync(rootNext, { recursive: true, force: true });
      } catch (e) {
        // If removal fails, fallback to copying over
      }
    }

    // Copy _next directory
    if (fs.existsSync(path.join(outDir, '_next'))) {
      execSync(`cp -R "${path.join(outDir, '_next')}" "${repoRoot}/_next"`);
    }

    // Copy top-level exported files (html, xml, txt, pdf)
    // Use Node APIs to avoid shell glob + whitespace path issues
    const exts = new Set(['.html', '.xml', '.txt', '.pdf']);
    try {
      const entries = fs.readdirSync(outDir, { withFileTypes: true });
      entries
        .filter((ent) => ent.isFile() && exts.has(path.extname(ent.name)))
        .forEach((ent) => {
          const src = path.join(outDir, ent.name);
          const dest = path.join(repoRoot, ent.name);
          try {
            fs.copyFileSync(src, dest);
            // console.log(`Copied ${ent.name} -> ${dest}`);
          } catch (copyErr) {
            console.warn(`⚠️  Failed to copy ${ent.name}:`, copyErr.message);
          }
        });
    } catch (dirErr) {
      console.warn('⚠️  Could not read static export directory:', dirErr.message);
    }

    console.log('✓ Static export copied to repository root');
  } else {
    console.warn('⚠️  Static export directory not found:', outDir);
  }
} catch (error) {
  console.error('Error copying static export to root:', error.message);
}
