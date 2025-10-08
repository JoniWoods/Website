# Copilot Instructions for Joni Woods Website

This guide enables AI coding agents to work productively in the Joni Woods website codebase. It summarizes architecture, workflows, conventions, and integration points unique to this project.

## 🏗️ Architecture Overview
- **Static Site**: Built with Next.js 14, exported to static HTML for deployment (see `index.html`, `404.html`).
- **Source Directory**: All development occurs in `/app` (Next.js app directory). Production files are minified and placed at root.
- **Assets**: Images in `/images/`, fonts in `/fonts/`, compiled assets in `/_next/static/`.
- **Component Structure**: React components in `/app/components/`, organized by feature (e.g., `sections/hero.tsx`, `ui/`).
- **Styling**: Tailwind CSS, with custom brand colors in CSS variables. Main styles in `/app/globals.css`.

## 🔧 Developer Workflows
- **Content/Code Changes**:
  1. Edit source files in `/app` (e.g., `/app/page.tsx`, `/app/components/`).
  2. Run Next.js build and static export (see `build-with-postbuild.sh` for custom build steps).
  3. Replace `index.html` and assets at root with new exports.
- **Quick Fixes**:
  - Images: Replace in `/images/`.
  - Styles: Edit `/app/globals.css` and rebuild.
  - Content: Update `/app/page.tsx` and rebuild.
- **Deployment**: Push to `main` branch; Cloudflare Pages auto-deploys. See deployment docs in `../joniwoods-deployment-docs/`.

## 🧩 Project-Specific Conventions
- **No Backend**: All interactivity is client-side or via external services (Calendly, social media, etc.).
- **Minified Output**: Production HTML is minified and not human-readable by design.
- **Branding**: Use CSS variables for colors; Myriad Pro font family for typography.
- **Section Organization**: Major site sections (Hero, Book, Media, Services, etc.) are React components in `/app/components/sections/`.
- **Responsive Design**: Mobile-first, Tailwind breakpoints.

## 🔗 Integrations & External Services
- **Calendly**: For booking/consultations.
- **YouTube, Instagram, TikTok, Facebook**: Social integration.
- **Books2Read**: Book purchase links.
- **Analytics**: Google Analytics and social pixel tracking (ready for integration).

## 🛠 Key Files & Directories
- `/app/components/` — React components (feature and UI)
- `/app/page.tsx` — Main page content
- `/app/globals.css` — Global styles
- `/images/` — All images/media
- `/fonts/` — Custom fonts
- `/404.html`, `/index.html` — Production static files
- `build-with-postbuild.sh` — Custom build script
- `../joniwoods-deployment-docs/` — Deployment guides

## ⚡ Examples of Patterns
- **Hero Section**: See `/app/components/sections/hero.tsx` for book banner and intro.
- **Transformation Form**: Lead capture in `/functions/api/transformation-form.js`.
- **Navigation**: Responsive menu in `/app/components/navigation.tsx`.

## 🚨 Cautions
- Do not edit minified production files directly; always update source in `/app` and rebuild.
- Keep repository size <25MB for fast deployment.
- All interactivity must be client-side or via external APIs.

---

For questions or unclear conventions, consult `README.md` or deployment docs. Please suggest improvements if any section is incomplete or unclear.
