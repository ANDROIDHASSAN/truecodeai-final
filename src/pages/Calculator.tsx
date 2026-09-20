import { useState } from 'react';
import { estimate, PROJECT_TYPES, type EstimateInput, type ProjectType } from '../data/estimate';
import { routeFor } from '../seo';
import PageShell from '../components/PageShell';

const INR = 84;
const usd = (n: number) => `$${(n / 1000).toFixed(n % 1000 ? 1 : 0)}k`;
const inr = (n: number) => `₹${((n * INR) / 100000).toFixed(1)}L`;

const field = 'w-full rounded-xl bg-[#0a0a0c] border border-white/15 px-4 py-3 text-sm text-white outline-none focus:border-[#ff6a1a]';

export default function Calculator() {
  const route = routeFor('/tools/ai-project-cost-calculator')!;
  const [input, setInput] = useState<EstimateInput>({
    type: 'agent',
    integrations: 2,
    roles: 2,
    languages: 1,
    customDesign: false,
    highRisk: false,
    rush: false,
  });
  const set = <K extends keyof EstimateInput>(k: K, v: EstimateInput[K]) => setInput((s) => ({ ...s, [k]: v }));
  const e = estimate(input);

  // hand the estimate to the contact form below, then scroll to it
  const sendEstimate = () => {
    const msg = document.getElementById('contact-message') as HTMLTextAreaElement | null;
    if (msg && !msg.value)
      msg.value = `Estimate from the calculator: ${PROJECT_TYPES[input.type].label}, ${input.integrations} integrations, ${input.roles} user roles, ${input.languages} language(s)${input.customDesign ? ', custom design' : ''}${input.highRisk ? ', high-risk actions' : ''}${input.rush ? ', rush' : ''} → ${usd(e.low)}–${usd(e.high)}, ${e.weeksLow}–${e.weeksHigh} weeks.\n\nWhat we want to build: `;
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    msg?.focus();
  };

  return (
    <PageShell crumbs={route.crumbs}>
      <header className="max-w-3xl mx-auto px-6 md:px-10 pt-8">
        <div className="label">
          <span className="accent">✦</span> free tool
        </div>
        <h1 className="mt-6 display-xl text-4xl md:text-6xl font-medium text-white">AI & app project cost calculator</h1>
        <p className="mt-6 text-lg text-white/70 leading-relaxed">
          Six questions, an honest range. Based on the fixed-price quotes our 50-engineer studio actually sends in 2026 — then get the exact number in 48 hours.
        </p>
      </header>

      <section className="max-w-3xl mx-auto px-6 md:px-10 py-12" aria-label="Calculator">
        <div className="grid gap-5 sm:grid-cols-2 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <label className="block sm:col-span-2">
            <span className="label">what are you building?</span>
            <select className={`mt-2 ${field}`} value={input.type} onChange={(ev) => set('type', ev.target.value as ProjectType)}>
              {Object.entries(PROJECT_TYPES).map(([k, v]) => (
                <option key={k} value={k}>
                  {v.label}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="label">systems to integrate: {input.integrations}</span>
            <input type="range" min={0} max={10} value={input.integrations} onChange={(ev) => set('integrations', +ev.target.value)} className="mt-4 w-full accent-[#ff6a1a]" />
          </label>
          <label className="block">
            <span className="label">user roles: {input.roles}</span>
            <input type="range" min={1} max={4} value={input.roles} onChange={(ev) => set('roles', +ev.target.value)} className="mt-4 w-full accent-[#ff6a1a]" />
          </label>
          <label className="block">
            <span className="label">languages: {input.languages}</span>
            <input type="range" min={1} max={4} value={input.languages} onChange={(ev) => set('languages', +ev.target.value)} className="mt-4 w-full accent-[#ff6a1a]" />
          </label>
          <fieldset className="space-y-3 text-sm text-white/80">
            <legend className="label mb-2">extras</legend>
            {(
              [
                ['customDesign', 'Custom design system'],
                ['highRisk', 'Handles money or regulated data'],
                ['rush', 'Need it faster than standard'],
              ] as const
            ).map(([k, l]) => (
              <label key={k} className="flex items-center gap-3">
                <input type="checkbox" checked={input[k]} onChange={(ev) => set(k, ev.target.checked)} className="h-4 w-4 accent-[#ff6a1a]" />
                {l}
              </label>
            ))}
          </fieldset>
        </div>

        <output
          aria-live="polite"
          className="mt-6 block rounded-2xl border border-[#ff6a1a]/40 bg-[#ff6a1a]/[0.06] p-6 md:p-8"
        >
          <div className="label">estimated range</div>
          <div className="mt-3 font-display text-4xl md:text-5xl font-medium text-white">
            {usd(e.low)} – {usd(e.high)}
          </div>
          <div className="mt-2 text-white/70">
            ≈ {inr(e.low)} – {inr(e.high)} · {e.weeksLow === e.weeksHigh ? e.weeksLow : `${e.weeksLow}–${e.weeksHigh}`} weeks
          </div>
          <button
            type="button"
            onClick={sendEstimate}
            className="mt-6 inline-flex items-center gap-3 bg-[#ff6a1a] text-black font-medium rounded-full px-7 h-12 text-sm transition-transform duration-500 hover:scale-105"
          >
            Get the exact fixed price <span>↗</span>
          </button>
          <p className="mt-4 text-xs text-white/55">
            Ranges are indicative, for a dedicated studio pod billing in USD. Your fixed quote comes after a 30-minute call.
          </p>
        </output>
      </section>

      <section className="max-w-3xl mx-auto px-6 md:px-10 pb-12 prose-dark">
        <h2>What moves the number</h2>
        <ul>
          <li>Each external system beyond the first adds roughly 12% — integrations are half of most budgets.</li>
          <li>User roles beyond two multiply screens, permissions and tests.</li>
          <li>Handling money or regulated data adds approval gates, audit logs and deeper evals.</li>
          <li>Rushing means a second pod in parallel: faster, not cheaper.</li>
        </ul>
        <p>
          Full breakdowns: <a href="/blog/mvp-development-cost-2026">MVP cost in 2026</a> and{' '}
          <a href="/blog/ai-agent-development-cost">AI agent development cost</a>.
        </p>
      </section>
    </PageShell>
  );
}
