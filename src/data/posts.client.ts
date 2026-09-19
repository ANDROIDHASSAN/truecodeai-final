// Client-side stand-in for posts.ts — vite.config.ts swaps it in for the browser build,
// so post bodies never ship in the JS bundle. Each prerendered page embeds
// <script id="posts-data"> (scripts/prerender.mjs): a card-level index of every post
// plus the full body of the post that page renders. Same exports as posts.ts.
import { readingTime, type Post } from './post-types';

export type { Block, Section, Post } from './post-types';
export { readingTime };

const el = document.getElementById('posts-data');
const data: { index: Post[]; post?: Post } = el ? JSON.parse(el.textContent || '{}') : { index: [] };

export const posts: Post[] = data.index.map((p) => (data.post && p.slug === data.post.slug ? data.post : p));

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

export const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
