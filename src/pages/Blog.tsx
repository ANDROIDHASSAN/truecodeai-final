import { sortedPosts } from '../data/posts';
import { routeFor, PER_PAGE, blogPageCount, blogPagePath } from '../seo';
import PageShell from '../components/PageShell';
import PostCard from '../components/PostCard';

/** 1 … 4 5 6 … 11 — first, last, current ±1; null = gap */
function pageList(current: number, total: number): (number | null)[] {
  const out: (number | null)[] = [];
  for (let n = 1; n <= total; n++) {
    if (n === 1 || n === total || Math.abs(n - current) <= 1) out.push(n);
    else if (out[out.length - 1] !== null) out.push(null);
  }
  return out;
}

const pill = 'inline-grid place-items-center min-w-11 h-11 px-4 rounded-full font-mono text-xs uppercase tracking-[0.14em] transition-colors';

function Pagination({ page }: { page: number }) {
  if (blogPageCount < 2) return null;
  return (
    <nav aria-label="Blog pages" className="mt-16 flex flex-wrap items-center justify-center gap-2">
      {page > 1 ? (
        <a href={blogPagePath(page - 1)} rel="prev" className={`${pill} border border-white/15 text-white/80 hover:border-[#ff6a1a] hover:text-[#ff6a1a]`}>
          ← Newer
        </a>
      ) : (
        <span aria-hidden className={`${pill} border border-dashed border-white/10 text-white/50`}>← Newer</span>
      )}
      {pageList(page, blogPageCount).map((n, i) =>
        n === null ? (
          <span key={`gap${i}`} aria-hidden className="px-1 text-white/40">…</span>
        ) : n === page ? (
          <span key={n} aria-current="page" className={`${pill} bg-[#ff6a1a] text-black font-medium`}>
            {n}
          </span>
        ) : (
          <a key={n} href={blogPagePath(n)} aria-label={`Page ${n}`} className={`${pill} border border-white/15 text-white/80 hover:border-[#ff6a1a] hover:text-[#ff6a1a]`}>
            {n}
          </a>
        ),
      )}
      {page < blogPageCount ? (
        <a href={blogPagePath(page + 1)} rel="next" className={`${pill} border border-white/15 text-white/80 hover:border-[#ff6a1a] hover:text-[#ff6a1a]`}>
          Older →
        </a>
      ) : (
        <span aria-hidden className={`${pill} border border-dashed border-white/10 text-white/50`}>Older →</span>
      )}
    </nav>
  );
}

export default function Blog({ page }: { page: number }) {
  const route = routeFor(blogPagePath(page))!;
  const start = (page - 1) * PER_PAGE;
  const [lead, ...rest] = sortedPosts.slice(start, start + PER_PAGE);
  const end = start + rest.length + 1;

  return (
    <PageShell crumbs={route.crumbs} wide>
      <header className="max-w-6xl mx-auto px-6 md:px-10 pt-8">
        <div className="label">
          <span className="accent">✦</span> from the studio{page > 1 && ` · page ${page} of ${blogPageCount}`}
        </div>
        {page === 1 ? (
          <>
            <h1 className="mt-6 display-xl text-5xl md:text-6xl font-medium text-white">
              Guides from the people
              <br />
              <span className="font-serif-i accent font-normal">who ship the builds.</span>
            </h1>
            <p className="mt-6 text-lg text-white/65 max-w-2xl">
              Real numbers on MVP cost and timelines, AI agents, voice agents and custom ML — written by the engineers, not the
              sales team.
            </p>
          </>
        ) : (
          <h1 className="mt-6 display-xl text-4xl md:text-6xl font-medium text-white">
            The blog, <span className="font-serif-i accent font-normal">page {page}.</span>
          </h1>
        )}
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-white/55">
          {end === start + 1 ? `Article ${end}` : `Articles ${start + 1}–${end}`} of {sortedPosts.length}
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-10 pb-20" aria-label="Articles">
        <PostCard post={lead} eager featured as="h2" />
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <PostCard key={p.slug} post={p} as="h2" />
          ))}
        </div>
        <Pagination page={page} />
      </section>
    </PageShell>
  );
}
