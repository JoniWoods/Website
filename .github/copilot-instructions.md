# Copilot Instructions for Joni Woods Website

This guide enables AI coding agents to work productively in the Joni Woods website codebase. It summarizes architecture, workflows, conventions, and integration points unique to this project.

## 🏗️ Architecture Overview
- **Static Site**: Built with Next.js 14, exported to static HTML for deployment (see `index.html`, `404.html`).
- **Nested Structure**: Development in `/app/app/` (Next.js app directory), production at repo root.
- **Assets**: Images in `/images/` (shared), fonts in `/fonts/`, compiled assets in `/_next/static/`.
- **Component Structure**: React components in `/app/components/`, organized by feature (`sections/hero.tsx`, `ui/` with shadcn components).
- **Styling**: Tailwind CSS with custom Joni Woods brand colors (`jw-burgundy`, `jw-rust`, `jw-yellow`) defined in `tailwind.config.ts`. CSS variables in `/app/app/globals.css`.
- **Forms**: Lead capture via Cloudflare Functions (`/functions/api/transformation-form.js`) using Web3Forms service.

## 🔧 Developer Workflows
- **Build System**: 
  ```bash
  cd /app && npm run build  # Runs next build + postbuild.js
  # OR use the shell script:
  ./build-with-postbuild.sh
  ```
- **Content/Code Changes**:
  1. Edit source files in `/app/app/` (Next.js app directory structure: `/app/app/page.tsx`, `/app/components/`).
  2. Run build command from `/app` directory.
  3. Built files automatically exported to `/app/.next/` then copied to root by `postbuild.js`.
- **Critical Build Process**: 
  - `postbuild.js` copies static exports from `.next/` to root directory
  - Production files end up as `index.html`, `404.html` at repo root
  - Static assets copied to `/_next/static/` structure
- **Quick Fixes**:
  - Images: Replace in `/images/` (shared by both dev and production).
  - Styles: Edit `/app/app/globals.css` and rebuild.
  - Content: Update `/app/app/page.tsx` and rebuild.
- **Deployment**: Push to `main` branch; Cloudflare Pages auto-deploys from root files.

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
- `/app/app/` — Next.js app directory (main page, layout, globals.css)
- `/app/components/` — React components (feature and UI)
- `/app/components/sections/` — Page sections (hero, about, services, etc.)
- `/app/components/ui/` — Reusable shadcn/ui components
- `/images/` — All images/media (shared between dev and prod)
- `/fonts/` — Custom fonts (Myriad Pro family)
- `/functions/api/` — Cloudflare Functions for form handling
- `/404.html`, `/index.html` — Production static files
- `build-with-postbuild.sh` — Custom build script
- `postbuild.js` — Copies static exports to root after Next.js build

## ⚡ Examples of Patterns
- **Page Structure**: Single-page app in `/app/app/page.tsx` importing all section components
- **Section Components**: Each major site section is a React component in `/sections/` (Hero, Book, Media, Services, etc.)
- **Brand Colors**: Use `jw-burgundy`, `jw-rust`, `jw-yellow` classes or CSS variables (`--primary`, `--accent`, `--secondary`)
- **Form Handling**: Client-side forms submit to Cloudflare Functions (`/functions/api/transformation-form.js`) which forward to Web3Forms
- **Static Export**: `next.config.js` configured with `output: 'export'` for static site generation

## 🚨 Cautions
- Do not edit minified production files directly; always update source in `/app` and rebuild.
- Keep repository size <25MB for fast deployment.
- All interactivity must be client-side or via external APIs.

---

For questions or unclear conventions, consult `README.md` or deployment docs. Please suggest improvements if any section is incomplete or unclear.
