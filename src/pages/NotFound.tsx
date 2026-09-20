import { services } from '../data/services';
import { sortedPosts } from '../data/posts';
import PageShell from '../components/PageShell';

/** Served as dist/404.html by every static host. Never a dead end: services, guides, form. */
export default function NotFound() {
  return (
    <PageShell crumbs={[{ name: 'Home', path: '/' }, { name: 'Page not found', path: '/404' }]} wide>
      <header className="max-w-6xl mx-auto px-6 md:px-10 pt-8">
        <div className="label">
          <span className="accent">✦</span> 404
        </div>
        <h1 className="mt-6 display-xl text-5xl md:text-6xl font-medium text-white">
          That page moved.
          <br />
          <span className="font-serif-i accent font-normal">Your project didn’t.</span>
        </h1>
        <p className="mt-6 text-lg text-white/65 max-w-2xl">Here is where most people were heading — or tell us what you need below.</p>
      </header>
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-14 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="label">services</h2>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <a href={`/services/${s.slug}`} className="text-white/80 hover:text-[#ff6a1a] transition-colors">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="label">latest guides</h2>
          <ul className="mt-4 space-y-2">
            {sortedPosts.slice(0, 8).map((p) => (
              <li key={p.slug}>
                <a href={`/blog/${p.slug}`} className="text-white/80 hover:text-[#ff6a1a] transition-colors">
                  {p.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
