import type { Service } from '../data/services';
import { postBySlug, type Post } from '../data/posts';
import { routeFor } from '../seo';
import PageShell from '../components/PageShell';
import PostCard from '../components/PostCard';

export default function ServicePage({ service }: { service: Service }) {
  const route = routeFor(`/services/${service.slug}`)!;
  const posts = service.posts.map(postBySlug).filter(Boolean) as Post[];

  return (
    <PageShell crumbs={route.crumbs} wide>
      <header className="max-w-6xl mx-auto px-6 md:px-10 pt-8">
        <div className="label">
          <span className="accent">✦</span> {service.name}
        </div>
        <h1 className="mt-6 display-xl text-5xl md:text-6xl font-medium text-white max-w-4xl">{service.h1}</h1>
        <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">{service.lede}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#ff6a1a] text-black font-medium rounded-full px-7 h-12 text-sm transition-transform duration-500 hover:scale-105"
          >
            Get a fixed price in 48h <span>↗</span>
          </a>
          <a href="/tools/ai-project-cost-calculator" className="btn-fill inline-flex items-center rounded-full border border-white/25 px-6 h-12 text-sm text-white">
            Estimate the cost
          </a>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid gap-6 md:grid-cols-2" aria-label="Outcomes and deliverables">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
          <h2 className="label">what changes</h2>
          <ul className="mt-5 space-y-3">
            {service.outcomes.map((o) => (
              <li key={o} className="flex gap-3 text-white/85">
                <span className="accent mt-0.5">✦</span>
                {o}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
          <h2 className="label">what you get</h2>
          <ul className="mt-5 space-y-3">
            {service.deliverables.map((d) => (
              <li key={d} className="flex gap-3 text-white/85">
                <span className="accent mt-0.5">→</span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 pb-16" aria-labelledby="process-h">
        <h2 id="process-h" className="font-display text-3xl md:text-4xl font-medium text-white">
          How it runs
        </h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {service.process.map((p, i) => (
            <li key={p.step} className="rounded-2xl border border-white/10 p-6">
              <div className="font-mono text-xs accent">0{i + 1}</div>
              <div className="mt-3 font-display text-xl font-medium text-white">{p.step}</div>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{p.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 pb-16 prose-dark" aria-labelledby="pricing-h">
        <h2 id="pricing-h">Pricing</h2>
        <div className="table-wrap">
          <table>
            <caption>Fixed-price ranges, 2026</caption>
            <thead>
              <tr>
                <th scope="col">Tier</th>
                <th scope="col">Scope</th>
                <th scope="col">Timeline</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {service.pricing.map((p) => (
                <tr key={p.tier}>
                  <th scope="row">{p.tier}</th>
                  <td>{p.scope}</td>
                  <td>{p.timeline}</td>
                  <td className="text-white">{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>Every project starts with a written scope and a fixed price, delivered within 48 hours of your brief.</p>

        <h2>Frequently asked questions</h2>
        {service.faq.map((f) => (
          <details key={f.q} className="faq">
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </section>

      {posts.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 md:px-10 pb-20" aria-labelledby="reading-h">
          <h2 id="reading-h" className="label mb-6">
            read before you brief us
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </PageShell>
  );
}
