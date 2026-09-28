import { defineConfig } from 'astro/config';

// Static output -> Cloudflare Pages. Build: npm run build, Output: dist.
// Math is rendered client-side from $..$ and $$..$$ (see Docs.astro) so we
// don't depend on any SSR plugin — works the same in dev, prod, and Pages.
export default defineConfig({
  output: 'static',
  site: 'https://physicsminor.pages.dev',
});
