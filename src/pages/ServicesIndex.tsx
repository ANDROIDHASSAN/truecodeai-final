import { services } from '../data/services';
import { routeFor } from '../seo';
import PageShell from '../components/PageShell';

export default function ServicesIndex() {
  const route = routeFor('/services')!;
  return (
    <PageShell crumbs={route.crumbs} wide>
      <header className="max-w-6xl mx-auto px-6 md:px-10 pt-8">
        <div className="label">
          <span className="accent">✦</span> services
        </div>
        <h1 className="mt-6 display-xl text-5xl md:text-6xl font-medium text-white">
          What we build,
          <br />
          <span className="font-serif-i accent font-normal">and what it costs.</span>
        </h1>
        <p className="mt-6 text-lg text-white/65 max-w-2xl">
          Fixed scope, fixed price, a date in writing. Pick the closest match — or describe something new and we will scope it in 48 hours.
        </p>
      </header>
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid gap-6 md:grid-cols-2" aria-label="Services">
        {services.map((s) => (
          <a
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 hover:border-white/25 transition-colors"
            data-hover
          >
            <h2 className="font-display text-2xl font-medium text-white group-hover:text-[#ff6a1a] transition-colors">
              {s.name}
            </h2>
            <p className="mt-3 text-white/65 leading-relaxed">{s.lede}</p>
            <div className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-white/60">
              live in <span className="text-white">{s.pricing[0].timeline}</span> · fixed price in 48h
            </div>
          </a>
        ))}
      </section>
    </PageShell>
  );
}
