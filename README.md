
# Joni Woods - Official Website

A professional website for Joni Woods - certified life coach, culture strategist, speaker, and author of "Burned, Blocked, and Better Than Ever."

## 🌟 Live Site
- **Production URL**: https://joniwoods.com
- **GitHub Repository**: https://github.com/JoniWoods/JoniWoods-Website100625

## 📁 Project Structure

```
/
├── index.html                 # Main website (Next.js static export)
├── 404.html                   # Custom branded error page
├── .nojekyll                  # Prevents Jekyll processing on static hosts
├── README.md                  # This documentation
├── _next/                     # Next.js compiled assets
│   └── static/
│       ├── css/               # Compiled CSS files
│       ├── chunks/            # JavaScript bundles
│       └── media/             # Font files
├── images/                    # Website images and media
│   ├── book-banner.png
│   ├── JoniWoods_logo.png
│   ├── Joni_Woods_Author_Portrait_Optimized.jpg
│   ├── featured-in/           # Media logos
│   ├── hero/                  # Hero section images
│   └── media-appearances/     # Podcast/interview thumbnails
├── fonts/                     # Custom fonts
│   ├── Arial Unicode.ttf
│   ├── MyriadPro Light.otf
│   ├── MyriadPro LightIt.otf
│   └── MyriadPro-Semibold.otf
└── app/                       # Next.js development files (not deployed)
    ├── components/
    ├── lib/
    └── ...
```

## 🏗️ Technical Architecture

### Framework
- **Next.js 14** - Static export for optimal performance
- **Tailwind CSS** - Utility-first CSS framework
- **React Components** - Compiled to static HTML

### Key Files
1. **`index.html`** - Complete website in a single file (minified Next.js export)
2. **`404.html`** - Custom error page with brand styling
3. **`/_next/static/`** - All compiled assets (CSS, JS, fonts)
4. **`/images/`** - Optimized images and media files

### Build Information
- **Build ID**: `5NStRg6vzHOaat8MR5NHm`
- **CSS Bundle**: `006e2f8ab4c2c0fd.css`
- **Main Chunks**: webpack, polyfills, main-app, page components

## 🎨 Brand Colors

```css
:root {
  --jw-burgundy: #9a1b1f;    /* Primary brand color */
  --jw-rust: #c04334;        /* Secondary accent */
  --jw-yellow: #f6c126;      /* Highlight color */
  --jw-yellow-light: #fff467;/* Light accent */
  --jw-charcoal: #545454;    /* Text/neutral */
  --jw-gray: #9a9a9a;        /* Muted text */
  --jw-blue: #4A90E2;        /* CTA buttons */
}
```

## 📱 Features

### Website Sections
- **Hero** - Book banner and main introduction
- **About** - Joni's background and credentials
- **Services** - Coaching programs and offerings
- **Book** - "Burned, Blocked, and Better Than Ever"
- **Testimonials** - Client success stories
- **Media Appearances** - Podcasts and interviews
- **Resources** - Blog articles and content
- **Contact** - Social links and booking

### Custom Components
- **Responsive Navigation** - Mobile-friendly menu
- **Transformation Form** - Lead capture with personalized roadmap
- **Media Gallery** - Podcast and interview showcase
- **Social Integration** - YouTube, Instagram, TikTok, Facebook
- **Calendly Integration** - Direct booking for consultations

### SEO & Performance
- **Meta Tags** - Complete OpenGraph and Twitter cards
- **Image Optimization** - WebP and optimized formats
- **Font Preloading** - Myriad Pro and system fonts
- **Lazy Loading** - Images load as needed
- **Responsive Design** - Mobile-first approach

## 🚀 Deployment

### Current Hosting
- **Platform**: Cloudflare Pages
- **Domain**: joniwoods.com
- **SSL**: Automatic via Cloudflare
- **CDN**: Global edge network

### Deployment Process
1. Push changes to `main` branch
2. Cloudflare automatically deploys
3. Changes live within 1-2 minutes

### File Size Optimization
- Removed duplicate assets in `app/public/`
- Eliminated large development dependencies
- Total repository size under 25MB for fast deployments

## 🔧 Development Notes

### File Format
The `index.html` file is **minified** for production performance. This is normal for Next.js static exports and provides:
- ✅ Faster loading times
- ✅ Smaller file sizes
- ✅ Optimized performance
- ⚠️ Not human-readable (by design)

### Making Changes
**For content updates:**
1. Modify files in `/app` directory
2. Run Next.js build process
3. Export new static files
4. Replace `index.html` with new export

**For quick fixes:**
- Images: Replace files in `/images/`
- Styles: Modify `/app/globals.css` and rebuild
- Content: Update `/app/page.tsx` and rebuild

### Brand Assets
- **Logo**: `/images/JoniWoods_logo.png`
- **Author Photo**: `/images/Joni_Woods_Author_Portrait_Optimized.jpg`
- **Book Cover**: `/images/Woods_FrontCover_3D.png`
- **Fonts**: Myriad Pro family in `/fonts/`

## 📧 Integrations

### External Services
- **Calendly**: Virtual coffee meetings and consultations
- **YouTube**: Content and media appearances
- **Social Media**: Instagram, TikTok, Facebook
- **Books2Read**: Universal book purchase links
- **Journey Life Coaching**: Blog and additional content

### Analytics & Tracking
- Ready for Google Analytics
- Social media pixel tracking
- Conversion tracking setup

## �️ Security & Best Practices

### Security Features
- **HTTPS**: Enforced via Cloudflare
- **Content Security**: Static files only
- **No Server**: Client-side only for security
- **Regular Updates**: Dependencies kept current

### Performance
- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized
- **Mobile Performance**: Excellent
- **SEO**: Fully optimized

## 🔄 Maintenance

### Regular Tasks
- Update social media links as needed
- Add new media appearances
- Update testimonials and success stories
- Refresh blog content links

### Content Management
- Book links and pricing
- Service descriptions and pricing
- Contact information
- Speaking topics and availability

## 👥 Handoff Information

### For Developers
- This is a **static site** - no backend required
- All interactivity handled via external services
- Mobile-first responsive design
- Accessibility compliant (WCAG 2.1)

### For Content Managers
- Contact Joni for content updates
- Social media links may need periodic updates
- Book availability and pricing should be monitored
- Calendly links should be tested regularly

### For Designers
- Brand colors defined in CSS variables
- Typography uses Myriad Pro font family
- Component library available in `/app/components/`
- Responsive breakpoints follow Tailwind standards

---

## � Support & Contact

**Website Owner**: Joni Woods  
**Email**: joniwoods@gmail.com  
**Business**: Journey Coaching  
**Location**: Ann Arbor, Michigan

**Development**: This site was optimized for performance, security, and maintainability.  
**Last Updated**: October 2025

## 🚀 Live Sites

- **GitHub Pages**: https://joniwoods.github.io/joniwoods-transformation/
- **Abacus.AI**: https://joniwoods.abacusai.app/

Both versions look **identical** and showcase the complete Joni Woods transformation website.

## 📁 File Structure

```
/
├── index.html          # Main website file
├── styles.css          # Compiled Tailwind CSS
├── images/            # All images and media
│   ├── hero/          # Hero background images
│   ├── media-appearances/  # Podcast/media images
│   ├── JoniWoods_logo.png
│   ├── Joni_Woods_Author_Portrait-1.jpg
│   └── Woods_FrontCover_3D.png
├── fonts/             # Custom fonts
├── app/               # Next.js application source
└── _next/             # Next.js build output
```

## 📋 Deployment Documentation

Deployment guides and documentation have been moved to a separate folder:
`../joniwoods-deployment-docs/`

This includes:
- Cloudflare deployment checklist
- GitHub Pages setup instructions
- General deployment updates
- PDF versions of all guides

## 🎯 Sections Included

1. **Navigation** - Smooth scroll to sections
2. **Hero** - Book announcement with hero image
3. **Media Appearances** - Recent podcast features
4. **Transformation Form** - Call-to-action section
5. **Book Section** - Detailed book information
6. **About** - Professional bio with highlights under author photo
7. **Services** - Coaching programs (Individual, Corporate, Speaking, Relationship)
8. **Testimonials** - Client success stories
9. **Blog** - Latest articles
10. **Contact** - Multiple contact methods
11. **Footer** - Links and social media

## 🛠 Technical Details

- **Pure HTML/CSS/JS** - No build process required
- **Tailwind CSS** - Pre-compiled for optimal performance
- **Custom Fonts** - Myriad Pro family loaded locally
- **Optimized Images** - All formats supported (PNG, JPG, WebP)
- **Mobile-First** - Responsive design principles
- **Cross-Browser** - Works in all modern browsers

## 📝 License

This project is private and proprietary to Joni Woods.

## 📞 Contact

For questions about this website, please contact Joni Woods through the contact form on the website or visit [joniwoods.com](https://joniwoods.com).
