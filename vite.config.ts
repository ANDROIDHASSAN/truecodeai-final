import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// `vite preview` falls back to index.html (the home page) for unknown URLs.
// Serve the prerendered 404.html with a real 404 instead — same as Netlify/Vercel/Cloudflare do.
// Runs after Vite's html fallback: a URL it resolved to a page already ends in .html.
const notFound = (): Plugin => ({
  name: 'preview-404',
  configurePreviewServer(server) {
    return () => {
      server.middlewares.use((req: { url?: string }, res: object, next: () => void) => {
        if (!req.url || /\.html(\?|$)/.test(req.url)) return next();
        req.url = '/404.html'; // Vite's html middleware serves it next
        // ponytail: that middleware's send() hard-sets 200, so pin 404 on this response (304 still passes)
        let code = 404;
        Object.defineProperty(res, 'statusCode', {
          get: () => code,
          set: (v: number) => void (v !== 200 && (code = v)),
          configurable: true,
        });
        next();
      });
    };
  },
});

// Browser build only: resolve src/data/posts.ts → posts.client.ts so 100+ post bodies stay out
// of the JS bundle (the page's own data is embedded by prerender). Dev and SSR keep the full file.
const clientPosts = (): Plugin => ({
  name: 'client-posts',
  enforce: 'pre',
  apply: 'build',
  async resolveId(source, importer, options) {
    if (options?.ssr || !/(^|\/)posts$/.test(source)) return null;
    const r = await this.resolve(source, importer, { ...options, skipSelf: true });
    return r && /\/src\/data\/posts\.ts$/.test(r.id) ? r.id.replace(/posts\.ts$/, 'posts.client.ts') : null;
  },
});

export default defineConfig(({ isPreview }) => ({
  // preview only: no SPA fallback, so unknown paths reach the 404 handler above.
  // dev keeps the SPA fallback — routes there aren't files yet.
  appType: isPreview ? 'mpa' : 'spa',
  plugins: [clientPosts(), react(), notFound()],
}));
