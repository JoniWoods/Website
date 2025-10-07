
export default function imageLoader({ src, width, quality }) {
  // For external URLs (starting with http:// or https://), return as-is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  // For GitHub Pages deployment, check if we're in that context
  if (typeof window !== 'undefined' && window.location.hostname === 'joniwoods.github.io') {
    // Ensure the src starts with a slash
    const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
    return `/joniwoods-transformation${normalizedSrc}`;
  }
  
  // For production builds with basePath set
  if (typeof process !== 'undefined' && process.env.NODE_ENV === 'production') {
    // Check if we have a basePath in the config
    if (src.startsWith('/') && !src.startsWith('/joniwoods-transformation')) {
      return `/joniwoods-transformation${src}`;
    }
  }
  
  // Default behavior for development and other cases
  return src;
}
