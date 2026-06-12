import type { Metadata } from 'next';
import RoiCalculatorWidget from './RoiCalculatorWidget';

export const metadata: Metadata = {
  title: 'Automation ROI Calculator — TrueCodeAI Free Tool',
  description:
    'Calculate your 12-month ROI from business automation. Enter your current manual workflow costs and see how much time and money you save by automating with TrueCodeAI.',
  alternates: { canonical: 'https://truecodeai.com/tools/automation-roi-calculator' },
  openGraph: {
    title: 'Automation ROI Calculator — Free Tool by TrueCodeAI',
    description: 'See exactly how much time and money you can recover by automating your business workflows.',
    url: 'https://truecodeai.com/tools/automation-roi-calculator',
    siteName: 'TrueCodeAI',
    type: 'website',
  },
};

export default function RoiCalculatorPage() {
  return (
    <main className="min-h-screen bg-[#060607] text-white">
      <section className="max-w-5xl mx-auto px-6 md:px-10 pt-36 pb-20">
        <div className="label flex items-center gap-3 mb-6">
          <span className="accent">✦</span> free tool
        </div>
        <h1 className="display-xl text-4xl md:text-6xl font-medium text-gradient max-w-3xl">
          Automation ROI Calculator
        </h1>
        <p className="mt-6 max-w-xl text-white/55 text-lg">
          Enter your current manual workflow numbers. We'll show you exactly how much time and money automation saves — month by month.
        </p>
        <div className="mt-12">
          <RoiCalculatorWidget />
        </div>
      </section>

      {/* SEO content block (server-rendered) */}
      <section className="bg-[#0a0a0c] border-t border-white/10 py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-10 prose-dark">
          <h2>How to use this calculator</h2>
          <p>
            This Automation ROI Calculator helps small business owners, operations managers, and agency teams understand the financial return on investing in business process automation.
          </p>
          <h3>What inputs does it need?</h3>
          <ul>
            <li><strong>Hours per week</strong> spent on repetitive manual tasks (data entry, follow-up calls, reporting, scheduling).</li>
            <li><strong>Hourly staff cost</strong> — the fully-loaded cost per hour including salary, benefits, and overhead.</li>
            <li><strong>Estimated automation cost</strong> — the one-time build fee and/or monthly platform cost.</li>
            <li><strong>Expected automation coverage</strong> — what percentage of the manual task can be automated (typically 60–90%).</li>
          </ul>
          <h3>What does it calculate?</h3>
          <p>
            The calculator produces a 12-month projection showing monthly and cumulative time savings (in hours), cost savings (in dollars), and the break-even point where your automation investment is fully repaid.
          </p>
          <h3>What kinds of workflows can be automated?</h3>
          <p>
            The most commonly automated workflows for small and mid-sized businesses include: appointment reminders, lead follow-up, invoice generation, document collection, inventory updates, customer support FAQs, employee scheduling, and report generation. TrueCodeAI builds custom automations across all of these categories.
          </p>
        </div>
      </section>
    </main>
  );
}
