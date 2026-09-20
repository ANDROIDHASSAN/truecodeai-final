import { postBySlug, readingTime, type Block, type Post as PostT } from '../data/posts';
import { routeFor } from '../seo';
import PageShell from '../components/PageShell';
import PostCard, { fmtDate } from '../components/PostCard';
import CtaBanner from '../components/CtaBanner';
import { authorFor, initials } from '../data/authors';

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if (b.type === 'p') return <p key={i}>{b.text}</p>;
        if (b.type === 'h3') return <h3 key={i}>{b.text}</h3>;
        if (b.type === 'ul' || b.type === 'ol') {
          const List = b.type;
          return (
            <List key={i} className={b.type === 'ol' ? 'steps' : undefined}>
              {b.items.map((it, j) => (
                <li key={j}>{it}</li>
              ))}
            </List>
          );
        }
        return (
          <div key={i} className="table-wrap">
            <table>
              <caption>{b.caption}</caption>
              <thead>
                <tr>
                  {b.headers.map((h) => (
                    <th key={h} scope="col">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.rows.map((r, ri) => (
                  <tr key={ri}>
                    {r.map((c, ci) => (ci === 0 ? <th key={ci} scope="row">{c}</th> : <td key={ci}>{c}</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
}

export default function Post({ post }: { post: PostT }) {
  const route = routeFor(`/blog/${post.slug}`)!;
  const related = post.related.map(postBySlug).filter(Boolean) as PostT[];
  const ctaAfter = Math.min(1, post.sections.length - 1); // CTA after the 2nd section
  const author = authorFor(post.author);

  return (
    <PageShell crumbs={route.crumbs}>
      <article className="max-w-3xl mx-auto px-6 md:px-10 pt-8 pb-16">
        <header>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em] text-white/60">
            <span className="accent">{post.kind ?? 'Guide'}</span>
            <span aria-hidden>·</span>
            <span>{readingTime(post)} min read</span>
          </div>
          <h1 className="mt-5 display-xl text-4xl md:text-6xl font-medium text-white leading-[1.02]">{post.title}</h1>
          <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed">{post.intro}</p>

          {/* byline */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 border-y border-white/10 py-5">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="grid h-11 w-11 place-items-center rounded-full bg-[#ff6a1a]/15 border border-[#ff6a1a]/40 font-display font-semibold text-sm text-[#ff6a1a]"
              >
                {initials(author.name)}
              </span>
              <div>
                <div className="font-medium text-white text-sm">{author.name}</div>
                <div className="text-xs text-white/60">{author.role}</div>
              </div>
            </div>
            <dl className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
              <div>
                <dt className="font-mono uppercase tracking-[0.16em] text-white/50">Published</dt>
                <dd className="mt-0.5 text-white/85">
                  <time dateTime={post.date}>{fmtDate(post.date)}</time>
                </dd>
              </div>
              {post.updated !== post.date && (
                <div>
                  <dt className="font-mono uppercase tracking-[0.16em] text-white/50">Updated</dt>
                  <dd className="mt-0.5 text-white/85">
                    <time dateTime={post.updated}>{fmtDate(post.updated)}</time>
                  </dd>
                </div>
              )}
            </dl>
            <div className="flex flex-wrap gap-2 md:ml-auto">
              {post.tags.map((t) => (
                <span key={t} className="font-mono text-[10px] uppercase tracking-wider rounded-full border border-white/15 px-3 py-1 text-white/70">
                  {t}
                </span>
              ))}
            </div>
          </div>
          {post.source && (
            <p className="mt-5 text-sm text-white/60">
              Primary source:{' '}
              <a
                href={post.source.url}
                target="_blank"
                rel="noopener"
                className="text-white/85 underline decoration-[#ff6a1a]/50 underline-offset-4 hover:text-[#ff6a1a]"
              >
                {post.source.name}, {fmtDate(post.source.date)}
              </a>
              . Figures below are as reported there; our analysis follows.
            </p>
          )}

          <figure className="mt-10 rounded-2xl overflow-hidden border border-white/10">
            <img
              src={post.cover.replace(/w=\d+/, 'w=1000')}
              srcSet={`${post.cover.replace(/w=\d+/, 'w=640')} 640w, ${post.cover.replace(/w=\d+/, 'w=1000')} 1000w, ${post.cover} 1400w`}
              sizes="(min-width: 768px) 768px, 100vw"
              alt={post.coverAlt}
              width={1400}
              height={788}
              loading="eager"
              {...{ fetchpriority: 'high' }}
              decoding="async"
              className="w-full aspect-[16/9] object-cover"
            />
          </figure>
        </header>

        <nav aria-label="Table of contents" className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <div className="label">in this article</div>
          <ol className="mt-4 space-y-2 list-decimal list-inside marker:text-[#ff6a1a] marker:font-mono marker:text-xs">
            {post.sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-white/80 hover:text-[#ff6a1a] transition-colors">
                  {s.heading}
                </a>
              </li>
            ))}
            <li>
              <a href="#faq" className="text-white/80 hover:text-[#ff6a1a] transition-colors">
                Frequently asked questions
              </a>
            </li>
          </ol>
        </nav>

        <div className="prose-dark mt-12">
          {post.sections.map((s, i) => (
            <div key={s.id}>
              <section id={s.id} className="scroll-mt-28">
                <h2>{s.heading}</h2>
                <Blocks blocks={s.blocks} />
              </section>
              {i === ctaAfter && (
                <div className="not-prose my-12">
                  <CtaBanner
                    title={post.cta?.title ?? 'Want a number for your build?'}
                    body={post.cta?.body ?? 'Three sentences about your product gets you a scoped plan with a fixed price in 48 hours.'}
                  />
                </div>
              )}
            </div>
          ))}

          <section id="faq" className="scroll-mt-28">
            <h2>Frequently asked questions</h2>
            {post.faq.map((f) => (
              <details key={f.q} className="faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </section>
        </div>

        {/* author card */}
        <aside className="mt-14 flex gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6" aria-label="About the author">
          <span
            aria-hidden
            className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#ff6a1a]/15 border border-[#ff6a1a]/40 font-display font-semibold text-[#ff6a1a]"
          >
            {initials(author.name)}
          </span>
          <div>
            <div className="label">written by</div>
            <div className="mt-1 font-display text-lg font-medium text-white">{author.name}</div>
            <div className="text-sm text-white/60">{author.role}</div>
            <p className="mt-3 text-sm text-white/65 leading-relaxed">{author.bio}</p>
          </div>
        </aside>
      </article>

      {related.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 md:px-10 pb-20" aria-labelledby="related-heading">
          <h2 id="related-heading" className="label mb-6">
            keep reading
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </PageShell>
  );
}
