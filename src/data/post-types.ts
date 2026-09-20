// Shared blog content types.

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'table'; caption: string; headers: string[]; rows: string[][] };

export type Section = { id: string; heading: string; blocks: Block[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO, first published
  updated: string; // ISO, last edited
  cover: string;
  coverAlt: string;
  tags: string[];
  intro: string;
  sections: Section[];
  faq: { q: string; a: string }[];
  related: string[]; // slugs
  /** optional CTA copy for the mid-article banner */
  cta?: { title: string; body: string };
  /** author id from src/data/authors.ts; defaults to 'team' */
  author?: string;
  /** shown as a label on cards and in the article header */
  kind?: 'Guide' | 'Tutorial' | 'Comparison' | 'Explainer' | 'News';
  /** for News posts: the primary reporting we cite */
  source?: { name: string; url: string; date: string };
  /** precomputed reading time — set on the lightweight client index, where bodies are stripped */
  minutes?: number;
};

/** words → minutes, rounded up; deterministic so SSR and client agree */
export function readingTime(p: Post) {
  if (p.minutes) return p.minutes;
  let words = p.intro.split(/\s+/).length;
  for (const s of p.sections)
    for (const b of s.blocks) {
      if (b.type === 'p' || b.type === 'h3') words += b.text.split(/\s+/).length;
      else if (b.type === 'ul' || b.type === 'ol') words += b.items.join(' ').split(/\s+/).length;
      else words += b.rows.flat().join(' ').split(/\s+/).length;
    }
  for (const f of p.faq) words += (f.q + ' ' + f.a).split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 220));
}

export const unsplash = (id: string) => `https://images.unsplash.com/${id}?q=80&w=1400&auto=format&fit=crop`;

