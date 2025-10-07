
#!/bin/bash
set -e

# Run the normal Next.js build
yarn run build

# Run the postbuild script
node postbuild.js

echo "✓ Build complete with postbuild hook"
