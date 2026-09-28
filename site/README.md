# PHYS7021 site (Astro, Cloudflare-ready)

Syllabus + question-oriented notes: each section is one page (theory just enough to solve PYQs, then fully solved PYQs with year + ×n).

## Run locally
```bash
cd site
npm install
npm run dev
```
Open http://localhost:4321

## Build / preview
```bash
cd site
npm run build
npm run preview
```

## Deploy on Cloudflare Pages
1. Push this repo to GitHub.
2. Cloudflare Dashboard → Pages → Create → Connect repo.
3. Settings: Framework preset **Astro**, Root directory `site`, Build command `npm run build`, Output `dist`.
4. Deploy. `wrangler.toml` is included for reference; Pages needs only the settings above.

## Skills used (in ../.opencode/skills)
deep-research, physics-note-maker, data-finder, physics-image-finder, frontend-design, indian-physics-writer.
References prefer Brij Lal / Subrahmanyam / Avadhanulu / S.L. Arora / H.C. Verma / Ajoy Ghatak (via TinyFish); fallback Griffiths/Hecht marked.
