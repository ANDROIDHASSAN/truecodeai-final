// Bylines. Shown in the article header and footer, and emitted as schema.org
// Person / Organization authors. Replace placeholder names/roles with the real
// people who sign off on each piece — bylines are a trust signal, keep them true.

export type Author = {
  id: string;
  name: string;
  role: string;
  bio: string;
  /** schema.org type */
  type: 'Person' | 'Organization';
  /** optional public profile (LinkedIn / GitHub) — used for sameAs */
  url?: string;
};

export const authors: Record<string, Author> = {
  hassan: {
    id: 'hassan',
    name: 'Hassan Kazi',
    role: 'Founder, TrueCodeAI',
    bio: 'Leads TrueCodeAI’s 50-engineer studio. Writes about what it actually costs and takes to ship MVPs, AI agents and voice systems for real businesses.',
    type: 'Person',
  },
  engineering: {
    id: 'engineering',
    name: 'TrueCodeAI Engineering',
    role: 'Agents, Voice & ML practice',
    bio: 'The engineers who build and evaluate our agent, voice and ML systems. Tutorials are written by the people who shipped the thing described.',
    type: 'Organization',
  },
  team: {
    id: 'team',
    name: 'TrueCodeAI Team',
    role: 'Studio',
    bio: 'A 50-engineer studio in Nashik, India, building startups, MVPs, AI agents, voice agents and custom ML for clients worldwide.',
    type: 'Organization',
  },
};

export const authorFor = (id?: string): Author => authors[id ?? 'team'] ?? authors.team;

export const initials = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
