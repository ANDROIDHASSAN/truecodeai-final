import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Automation Tools — TrueCodeAI',
  description:
    'Free calculators and tools for small business owners: Automation ROI Calculator, hiring vs. automating comparison, and more. Built by TrueCodeAI.',
  alternates: { canonical: 'https://truecodeai.com/tools' },
};

const tools = [
  {
    slug: 'automation-roi-calculator',
    title: 'Automation ROI Calculator',
    description:
      'Calculate exactly how much time and money you could save by automating your most repetitive business workflows. Enter your numbers and see a 12-month projection.',
    tag: 'Calculator',
    time: '3 min',
  },
];

export default function ToolsHubPage() {
  return (
    <main className="min-h-screen bg-[#060607] text-white">
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-20">
        <div className="label flex items-center gap-3 mb-6">
          <span className="accent">✦</span> free tools
        </div>
        <h1 className="display-xl text-5xl md:text-7xl font-medium text-gradient max-w-3xl">
          Tools that
          <br />
          <span className="font-serif-i accent font-normal">pay for themselves.</span>
        </h1>
        <p className="mt-6 max-w-xl text-white/55 text-lg">
          Free calculators and resources to help you make smarter decisions about automation, hiring, and operations.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group glass rounded-2xl p-8 transition-all duration-500 hover:border-[#ff6a1a]/40 hover:-translate-y-1.5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest bg-[#ff6a1a]/10 text-[#ff6a1a] rounded-full px-3 py-1">
                  {tool.tag}
                </span>
                <span className="font-mono text-[10px] text-white/30">{tool.time}</span>
              </div>
              <h2 className="font-display text-2xl font-medium text-white group-hover:text-[#ff6a1a] transition-colors">
                {tool.title}
              </h2>
              <p className="mt-3 text-sm text-white/50 leading-relaxed">{tool.description}</p>
              <div className="mt-5 font-mono text-[10px] uppercase tracking-widest text-white/30 group-hover:text-[#ff6a1a] transition-colors">
                Open tool →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
