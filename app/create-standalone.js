const fs = require('fs');
const path = require('path');

const distDir = process.env.NEXT_DIST_DIR || '.next';
const standalonePath = path.join(distDir, 'standalone', 'app');

try {
  fs.mkdirSync(standalonePath, { recursive: true });
  console.log('✓ Created standalone directory structure');
} catch (error) {
  console.error('Failed to create standalone directory:', error);
}
