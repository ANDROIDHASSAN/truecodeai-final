/** Inline call-to-action. Used mid-article and above the footer on every non-home page. */
export default function CtaBanner({
  title = 'Got an idea? We’ve got fifty engineers.',
  body = 'Describe it in three sentences. You get a scoped plan — architecture, pod, timeline, fixed price — within 48 hours.',
  href = '#contact',
  label = 'Start a build',
}: {
  title?: string;
  body?: string;
  href?: string;
  label?: string;
}) {
  return (
    <aside className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-8 md:px-10 md:py-10">
      <div className="orb h-[260px] w-[260px] bg-[#ff6a1a] opacity-[0.12] -right-20 -top-24" />
      <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="label">
            <span className="accent">✦</span> your move
          </div>
          <h2 className="mt-3 font-display text-2xl md:text-3xl font-medium text-white">{title}</h2>
          <p className="mt-2 text-white/65 max-w-xl">{body}</p>
        </div>
        <a
          href={href}
          className="shrink-0 inline-flex items-center gap-3 bg-[#ff6a1a] text-black font-medium rounded-full px-7 h-12 text-sm transition-transform duration-500 hover:scale-105"
        >
          {label} <span>↗</span>
        </a>
      </div>
    </aside>
  );
}
