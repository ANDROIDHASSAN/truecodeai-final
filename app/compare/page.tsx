import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TrueCodeAI vs. Alternatives — Custom Automation Comparisons',
  description:
    'See how TrueCodeAI custom automation compares to off-the-shelf tools like Zapier, HubSpot, and industry-specific SaaS — and when custom beats generic.',
  alternates: { canonical: 'https://truecodeai.com/compare' },
  // noindex until comparison content is ready — prevents GSC thin-content penalty
  robots: { index: false, follow: true },
};

export default function CompareHubPage() {
  return (
    <main className="min-h-screen bg-[#060607] text-white">
      <section className="max-w-5xl mx-auto px-6 md:px-10 pt-36 pb-20">
        <div className="label flex items-center gap-3 mb-6">
          <span className="accent">✦</span> comparisons
        </div>
        <h1 className="display-xl text-5xl md:text-7xl font-medium text-gradient max-w-3xl">
          Custom vs.
          <br />
          <span className="font-serif-i accent font-normal">off-the-shelf.</span>
        </h1>
        <p className="mt-6 max-w-xl text-white/55 text-lg">
          Generic automation tools solve generic problems. If your workflow doesn't fit the template, you're stuck working around the tool instead of the tool working for you.
        </p>
        <div className="mt-16 glass rounded-3xl p-12 text-center">
          <p className="font-display text-2xl text-white/70">Comparison guides coming soon.</p>
          <p className="mt-4 text-white/40">
            Questions now?{' '}
            <Link href="/#contact" className="text-[#ff6a1a] underline">Talk to us directly</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
