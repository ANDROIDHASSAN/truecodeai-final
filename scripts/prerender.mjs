// Runs after `vite build`. For every route in src/seo.ts:
//   • renders the React tree to static HTML (crawlers and no-JS clients get full content)
//   • swaps in per-page <title>, description, canonical, Open Graph and JSON-LD
//   • writes dist/<path>/index.html AND dist/<path>.html so any static host resolves clean URLs
// Then emits sitemap.xml and feed.xml from the same route list.
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve('dist');
const ORIGIN = 'https://truecodeai.com';

execFileSync('npx', ['vite', 'build', '--ssr', 'src/entry-server.tsx', '--outDir', 'dist/server', '--logLevel', 'error'], {
  stdio: 'inherit',
});
const { render, routes, feedItems, checkEstimate, checkPosts, postsPayload } = await import(resolve(dist, 'server/entry-server.js'));
checkEstimate(); // throws if calculator pricing logic regressed
checkPosts(); // throws on duplicate slugs or dangling related links
const template = readFileSync(resolve(dist, 'index.html'), 'utf8');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const abs = (p) => (p === '/' ? `${ORIGIN}/` : `${ORIGIN}${p}`);
// replacer fn, not a template string: values like "$8k" would otherwise be read as group refs
// post data the client hydrates from (src/data/posts.client.ts) — bodies are not in the JS bundle
const withPosts = (html, path) =>
  html.replace('</body>', () => `  <script type="application/json" id="posts-data">${postsPayload(path)}</script>\n  </body>`);
const setMeta = (html, attr, key, value) =>
  html.replace(new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`), (_, a, b) => `${a}${esc(value)}${b}`);

for (const r of routes) {
  const url = abs(r.path);
  let html = template
    .replace('<div id="root"></div>', () => `<div id="root">${render(r.path)}</div>`)
    .replace(/<title>[^<]*<\/title>/, () => `<title>${esc(r.title)}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, (_, a, b) => `${a}${url}${b}`);
  html = setMeta(html, 'name', 'description', r.description);
  html = setMeta(html, 'property', 'og:url', url);
  html = setMeta(html, 'property', 'og:title', r.title);
  html = setMeta(html, 'property', 'og:description', r.description);
  html = setMeta(html, 'property', 'og:type', r.ogType);
  html = setMeta(html, 'property', 'og:image', r.image);
  html = setMeta(html, 'property', 'og:image:alt', r.title);
  html = setMeta(html, 'name', 'twitter:title', r.title);
  html = setMeta(html, 'name', 'twitter:description', r.description);
  html = setMeta(html, 'name', 'twitter:image', r.image);
  if (r.ogType !== 'article') {
    // og:image dims only hold for our own 1200×630 card
  } else {
    html = html.replace(/\s*<meta property="og:image:(width|height)" content="[^"]*" \/>/g, '');
  }

  // page-specific JSON-LD graph (Organization + WebSite live in index.html)
  const ld = JSON.stringify({ '@context': 'https://schema.org', '@graph': r.jsonLd }).replace(/</g, '\\u003c');
  html = html.replace('</head>', () => `    <script type="application/ld+json">${ld}</script>\n  </head>`);

  html = withPosts(html, r.path);

  const outDir = r.path === '/' ? dist : resolve(dist, r.path.slice(1));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, 'index.html'), html);
  if (r.path !== '/') writeFileSync(resolve(dist, `${r.path.slice(1)}.html`), html);
  console.log(`prerendered ${r.path}`);
}

// 404.html — served by Netlify, Cloudflare Pages, Vercel and GitHub Pages for unknown paths
{
  const html = template
    .replace('<div id="root"></div>', () => `<div id="root">${render('/404')}</div>`)
    .replace(/<title>[^<]*<\/title>/, () => '<title>Page not found — TrueCodeAI</title>')
    .replace('<meta name="robots" content="index, follow, max-image-preview:large" />', '<meta name="robots" content="noindex, follow" />');
  writeFileSync(resolve(dist, '404.html'), withPosts(html, '/404'));
}

// sitemap.xml
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
  routes
    .map(
      (r) =>
        `  <url>\n    <loc>${abs(r.path)}</loc>\n    <lastmod>${r.lastmod}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n    <image:image><image:loc>${esc(r.image)}</image:loc></image:image>\n  </url>`,
    )
    .join('\n') +
  '\n</urlset>\n';
writeFileSync(resolve(dist, 'sitemap.xml'), sitemap);

// sitemap-news.xml — Google News format, only articles from the last 2 days (Google's window)
const twoDaysAgo = Date.now() - 2 * 86400e3;
const fresh = feedItems.filter((p) => p.kind === 'News' && new Date(p.updated || p.date).getTime() >= twoDaysAgo);
const newsSitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">\n` +
  fresh
    .map(
      (p) =>
        `  <url>\n    <loc>${ORIGIN}/blog/${p.slug}</loc>\n    <news:news>\n      <news:publication><news:name>TrueCodeAI</news:name><news:language>en</news:language></news:publication>\n      <news:publication_date>${p.date}</news:publication_date>\n      <news:title>${esc(p.title)}</news:title>\n      <news:keywords>${esc(p.tags.join(', '))}</news:keywords>\n    </news:news>\n  </url>`,
    )
    .join('\n') +
  '\n</urlset>\n';
writeFileSync(resolve(dist, 'sitemap-news.xml'), newsSitemap);

// sitemap-index.xml — one entry point for Search Console / Bing
writeFileSync(
  resolve(dist, 'sitemap-index.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap><loc>${ORIGIN}/sitemap.xml</loc></sitemap>\n  <sitemap><loc>${ORIGIN}/sitemap-news.xml</loc></sitemap>\n</sitemapindex>\n`,
);

// feed.xml (RSS 2.0)
const rss =
  `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n<channel>\n` +
  `  <title>TrueCodeAI Blog</title>\n  <link>${ORIGIN}/blog</link>\n  <description>Guides on MVP cost, AI agents, voice agents and custom ML from the engineers who build them.</description>\n  <language>en</language>\n` +
  `  <atom:link href="${ORIGIN}/feed.xml" rel="self" type="application/rss+xml" />\n` +
  feedItems
    .map(
      (p) =>
        `  <item>\n    <title>${esc(p.title)}</title>\n    <link>${ORIGIN}/blog/${p.slug}</link>\n    <guid isPermaLink="true">${ORIGIN}/blog/${p.slug}</guid>\n    <pubDate>${new Date(p.date).toUTCString()}</pubDate>\n    <description>${esc(p.description)}</description>\n${p.tags.map((t) => `    <category>${esc(t)}</category>`).join('\n')}\n  </item>`,
    )
    .join('\n') +
  '\n</channel>\n</rss>\n';
writeFileSync(resolve(dist, 'feed.xml'), rss);

rmSync(resolve(dist, 'server'), { recursive: true, force: true });
console.log(`sitemap: ${routes.length} urls · news: ${fresh.length} · feed: ${feedItems.length} items`);
