import type { LegalPage } from '../data/legal';
import { routeFor } from '../seo';
import PageShell from '../components/PageShell';

export default function Legal({ page }: { page: LegalPage }) {
  const route = routeFor(page.path)!;
  return (
    <PageShell crumbs={route.crumbs}>
      <article className="max-w-3xl mx-auto px-6 md:px-10 pt-8 pb-16">
        <div className="label">
          <span className="accent">✦</span> legal · updated {page.updated}
        </div>
        <h1 className="mt-6 display-xl text-5xl md:text-6xl font-medium text-white">{page.title}</h1>
        <p className="mt-6 text-lg text-white/65">{page.description}</p>

        <div className="prose-dark mt-4">
          {page.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </PageShell>
  );
}
