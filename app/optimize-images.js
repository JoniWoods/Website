#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Images to optimize with priority (above fold)
const priorityImages = [
  '/images/Joni_Woods_Author_Portrait_Optimized.jpg',
  '/images/JoniWoods_logo.webp'
];

// Large images that need lazy loading
const lazyLoadImages = [
  '/images/Woods_FrontCover_3D.png',
  '/images/JoniWoods_SideView.webp',
  '/images/book-banner.png'
];

console.log('Image Optimization Recommendations:');
console.log('\n✅ Priority (eager load):');
priorityImages.forEach(img => console.log(`  - ${img}`));
console.log('\n⏳ Lazy load (below fold):');
lazyLoadImages.forEach(img => console.log(`  - ${img}`));

// Check if large unoptimized image exists
const largeImage = path.join(__dirname, '..', 'images', 'Joni_Woods_Author_Portrait-1.jpg');
if (fs.existsSync(largeImage)) {
  const stats = fs.statSync(largeImage);
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`\n⚠️  WARNING: Unused large image found: Joni_Woods_Author_Portrait-1.jpg (${sizeMB}MB)`);
  console.log('   Consider deleting this file as the optimized version is used instead.');
}

console.log('\n📊 Performance Tips:');
console.log('  1. Use WebP format for all images');
console.log('  2. Set priority=true for above-fold images');
console.log('  3. Use loading="lazy" for below-fold images');
console.log('  4. Specify width/height to prevent layout shift');
