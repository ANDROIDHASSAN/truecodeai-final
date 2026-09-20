import type { Crumb } from '../seo';

/** Visible breadcrumb trail. The matching BreadcrumbList JSON-LD is emitted per route in seo.ts. */
export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/60">
      <ol className="flex flex-wrap items-center gap-2">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-2 min-w-0">
              {last ? (
                <span aria-current="page" className="text-white/85 truncate max-w-[60vw]">
                  {c.name}
                </span>
              ) : (
                <a href={c.path} className="hover:text-[#ff6a1a] transition-colors">
                  {c.name}
                </a>
              )}
              {!last && <span aria-hidden className="accent">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
