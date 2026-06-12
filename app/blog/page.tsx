import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — Business Automation Insights — TrueCodeAI',
  description:
    'Practical guides on business automation, AI agents, and operational efficiency for small business owners, operators, and founders.',
  alternates: { canonical: 'https://truecodeai.com/blog' },
};

export default function BlogHubPage() {
  return (
    <main className="min-h-screen bg-[#060607] text-white">
      <section className="max-w-5xl mx-auto px-6 md:px-10 pt-36 pb-20">
        <div className="label flex items-center gap-3 mb-6">
          <span className="accent">✦</span> insights
        </div>
        <h1 className="display-xl text-5xl md:text-7xl font-medium text-gradient max-w-3xl">
          Automation
          <br />
          <span className="font-serif-i accent font-normal">without the jargon.</span>
        </h1>
        <p className="mt-6 max-w-xl text-white/55 text-lg">
          Practical guides for business owners who want to automate more and do less manual work. No fluff — just what works.
        </p>
        <div className="mt-16 glass rounded-3xl p-12 text-center">
          <p className="font-display text-2xl text-white/70">Articles coming soon.</p>
          <p className="mt-4 text-white/40">
            In the meantime,{' '}
            <Link href="/solutions" className="text-[#ff6a1a] underline">browse our solutions</Link>{' '}
            or{' '}
            <Link href="/tools/automation-roi-calculator" className="text-[#ff6a1a] underline">try the ROI calculator</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
