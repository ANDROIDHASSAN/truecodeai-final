// Project cost estimator. Base ranges match the pricing tables on the service
// pages; multipliers reflect the drivers in the MVP / agent cost articles.
// ponytail: linear multipliers, not a pricing model — the form produces the real quote.

export const PROJECT_TYPES = {
  mvp: { label: 'MVP / web or mobile app', low: 25000, high: 60000, weeks: [4, 8] },
  agent: { label: 'AI agent (support, sales, ops)', low: 20000, high: 55000, weeks: [4, 8] },
  voice: { label: 'Voice AI agent (phone)', low: 8000, high: 18000, weeks: [4, 4] },
  whatsapp: { label: 'WhatsApp AI agent', low: 4000, high: 9000, weeks: [2, 3] },
  automation: { label: 'Back-office automation', low: 12000, high: 25000, weeks: [3, 4] },
  ml: { label: 'Custom ML model', low: 8000, high: 20000, weeks: [3, 5] },
  mcp: { label: 'MCP server for your product', low: 12000, high: 30000, weeks: [2, 4] },
} as const;

export type ProjectType = keyof typeof PROJECT_TYPES;

export type EstimateInput = {
  type: ProjectType;
  integrations: number; // 0–10 external systems
  roles: number; // 1–4 user roles
  languages: number; // 1–4 languages
  customDesign: boolean;
  highRisk: boolean; // actions that move money / regulated data
  rush: boolean; // needs it faster than standard timeline
};

export type Estimate = { low: number; high: number; weeksLow: number; weeksHigh: number };

const round = (n: number) => Math.round(n / 500) * 500;

export function estimate(i: EstimateInput): Estimate {
  const base = PROJECT_TYPES[i.type];
  let m = 1;
  m *= 1 + Math.max(0, i.integrations - 1) * 0.12; // each system beyond the first ≈ +12%
  m *= 1 + Math.max(0, i.roles - 2) * 0.2; // roles beyond two multiply screens and tests
  m *= 1 + Math.max(0, i.languages - 1) * 0.06; // eval coverage per language
  if (i.customDesign) m *= 1.15;
  if (i.highRisk) m *= 1.2; // approval gates, audit, deeper evals
  if (i.rush) m *= 1.25; // a second pod in parallel
  const extraWeeks = Math.ceil(Math.max(0, i.integrations - 2) / 2) + (i.highRisk ? 1 : 0);
  const weeksLow = Math.max(1, Math.round((base.weeks[0] + extraWeeks) * (i.rush ? 0.75 : 1)));
  const weeksHigh = Math.max(weeksLow, Math.round((base.weeks[1] + extraWeeks) * (i.rush ? 0.75 : 1)));
  return { low: round(base.low * m), high: round(base.high * m), weeksLow, weeksHigh };
}

/** Build-time sanity check (called from scripts/prerender.mjs). Throws on regression. */
export function checkEstimate() {
  const plain = estimate({ type: 'mvp', integrations: 1, roles: 2, languages: 1, customDesign: false, highRisk: false, rush: false });
  if (plain.low !== 25000 || plain.high !== 60000) throw new Error(`estimate: baseline drifted ${JSON.stringify(plain)}`);
  const heavy = estimate({ type: 'mvp', integrations: 6, roles: 4, languages: 2, customDesign: true, highRisk: true, rush: true });
  if (!(heavy.low > plain.low && heavy.weeksLow <= heavy.weeksHigh)) throw new Error(`estimate: multipliers broken ${JSON.stringify(heavy)}`);
  for (const t of Object.keys(PROJECT_TYPES) as ProjectType[]) {
    const e = estimate({ type: t, integrations: 0, roles: 1, languages: 1, customDesign: false, highRisk: false, rush: false });
    if (!(e.low > 0 && e.low <= e.high)) throw new Error(`estimate: bad range for ${t}`);
  }
}
