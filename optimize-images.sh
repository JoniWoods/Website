#!/bin/bash
set -e

echo "🖼️  Optimizing images for better performance..."

# Create optimized versions of large images
cd "/Users/ebonyirismedia/Clients/Joni Woods/Current Website/Website/images"

# Function to convert and optimize images
optimize_image() {
    local input="$1"
    local base_name=$(basename "$input" | sed 's/\.[^.]*$//')
    local dir_name=$(dirname "$input")
    
    echo "Optimizing: $input"
    
    # Create WebP version (smaller, better compression)
    if command -v cwebp >/dev/null 2>&1; then
        cwebp -q 85 -m 6 "$input" -o "${dir_name}/${base_name}.webp"
        echo "  ✓ Created WebP: ${base_name}.webp"
    else
        echo "  ⚠️  cwebp not found, skipping WebP conversion"
    fi
    
    # Create AVIF version (best compression)
    if command -v avifenc >/dev/null 2>&1; then
        avifenc --min 20 --max 50 "$input" "${dir_name}/${base_name}.avif"
        echo "  ✓ Created AVIF: ${base_name}.avif"
    else
        echo "  ⚠️  avifenc not found, skipping AVIF conversion"
    fi
}

# Optimize large images that are causing performance issues
if [ -f "JoniWoods_SideView.webp" ] && [ $(stat -f%z "JoniWoods_SideView.webp") -gt 1000000 ]; then
    echo "JoniWoods_SideView.webp is large ($(stat -f%z "JoniWoods_SideView.webp" | numfmt --to=iec))"
    # We'll create smaller versions
fi

if [ -f "Joni_Woods_Author_Portrait-1.jpg" ]; then
    optimize_image "Joni_Woods_Author_Portrait-1.jpg"
fi

if [ -f "media-appearances/podcast2.jpeg" ]; then
    optimize_image "media-appearances/podcast2.jpeg"
fi

echo "✓ Image optimization script completed"
echo "💡 To install optimization tools:"
echo "   brew install webp libavif"