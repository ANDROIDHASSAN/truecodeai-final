import { renderToString } from 'react-dom/server';
import App from './App';
import { routes } from './seo';
import { sortedPosts } from './data/posts';
export { postsPayload, checkPosts } from './data/posts';

/** Used only by scripts/prerender.mjs at build time. */
export function render(url: string) {
  return renderToString(<App url={url} />);
}

export { routes };
export { checkEstimate } from './data/estimate';

/** RSS items (blog posts only) */
export const feedItems = sortedPosts.map((p) => ({
  slug: p.slug,
  title: p.title,
  description: p.description,
  date: p.date,
  updated: p.updated,
  tags: p.tags,
  kind: p.kind ?? 'Guide',
}));
