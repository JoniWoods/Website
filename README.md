
# Joni Woods — Static Site (final deployable build)

This repository contains the final static build of the Joni Woods website (the same one validated locally at http://localhost:8008/). It’s ready to deploy to GitHub Pages and Cloudflare Pages with no build step.

## What’s included

- index.html — Canonical homepage (Next.js static output)
- 404.html — Custom not-found page
- _next/ — Next.js static assets (css/chunks/media + buildId folder)
- images/ — All site imagery (logos, hero, media, featured-in, book)
- fonts/ — Local font files used by the compiled CSS
- Joni Woods Media Kit_Final.pdf — Book preview asset
- .nojekyll — Required for GitHub Pages so the `_next` folder is served as-is
- index.txt — Present by design; safe to keep

Note: The source Next.js app folder may be present for reference, but is not used at runtime. Only the files above are required to serve the site.

## Key meta + favicon

- Open Graph/Twitter images reference /images/JoniWoods_logo.png (no localhost URLs)
- A favicon link is included in both pages to avoid 404s:
	<link rel="icon" href="/images/JoniWoods_logo.png" type="image/png" sizes="any" />

## Deploy to GitHub Pages

Prereqs: Any public or private repository is fine. No build is needed.

1) Push this folder’s contents to your repository’s default branch (usually main).
2) In your repo, go to Settings → Pages.
3) Build and deployment → Source: “Deploy from a branch”.
4) Branch: main, Folder: / (root). Save.
5) Ensure .nojekyll exists in the repository root so the _next folder is not processed.

Custom domain (optional): Add a Pages custom domain and configure DNS per GitHub’s instructions. If you add a CNAME, commit a CNAME file at the repo root with your domain.

## Deploy to Cloudflare Pages

Option A — From GitHub
- Create a new Cloudflare Pages project and connect this repo.
- Framework preset: None
- Build command: leave empty
- Output directory: /
- Deploy.

Option B — Drag-and-drop
- Zip the files in this folder and upload to Cloudflare Pages (Direct Upload).

After deploy, set your custom domain in Cloudflare Pages and update DNS if desired.

## Notes and constraints

- Do not rename or move the `_next` directory; asset paths are absolute.
- Keep `.nojekyll` for GitHub Pages. Cloudflare Pages does not require it but it’s harmless.
- If you update images or fonts, keep file names/paths stable unless you also update references in index.html or the compiled CSS under `_next/static/css/`.

## License

This project is private and proprietary to Joni Woods.
