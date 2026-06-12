'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { site } from '@/data/site';

type Inputs = {
  hoursPerWeek: number;
  hourlyCost: number;
  automationBuildCost: number;
  monthlyPlatformCost: number;
  automationCoverage: number;
};

const DEFAULT: Inputs = {
  hoursPerWeek: 20,
  hourlyCost: 25,
  automationBuildCost: 5000,
  monthlyPlatformCost: 150,
  automationCoverage: 75,
};

function Field({
  label,
  hint,
  name,
  value,
  onChange,
  prefix,
  suffix,
  min,
  max,
  step,
}: {
  label: string;
  hint?: string;
  name: keyof Inputs;
  value: number;
  onChange: (name: keyof Inputs, v: number) => void;
  prefix?: string;
  suffix?: string;
  min: number;
  max: number;
  step?: number;
}) {
  return (
    <div>
      <label className="block font-display text-sm font-medium text-white mb-1">{label}</label>
      {hint && <p className="text-xs text-white/40 mb-2">{hint}</p>}
      <div className="flex items-center gap-2">
        {prefix && <span className="text-white/40 text-sm">{prefix}</span>}
        <input
          type="number"
          min={min}
          max={max}
          step={step ?? 1}
          value={value}
          onChange={(e) => onChange(name, Math.min(max, Math.max(min, Number(e.target.value))))}
          className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#ff6a1a] transition-colors"
        />
        {suffix && <span className="text-white/40 text-sm">{suffix}</span>}
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step ?? 1}
        value={value}
        onChange={(e) => onChange(name, Number(e.target.value))}
        className="mt-2 w-full accent-[#ff6a1a]"
      />
    </div>
  );
}

export default function RoiCalculatorWidget() {
  const [inputs, setInputs] = useState<Inputs>(DEFAULT);

  const update = (name: keyof Inputs, v: number) =>
    setInputs((prev) => ({ ...prev, [name]: v }));

  const results = useMemo(() => {
    const weeklyHoursSaved = inputs.hoursPerWeek * (inputs.automationCoverage / 100);
    const monthlyHoursSaved = weeklyHoursSaved * 4.33;
    const monthlyDollarSaved = monthlyHoursSaved * inputs.hourlyCost;
    const totalFirstYearCost = inputs.automationBuildCost + inputs.monthlyPlatformCost * 12;
    const firstYearGross = monthlyDollarSaved * 12;
    const firstYearNet = firstYearGross - totalFirstYearCost;
    const breakEvenMonths =
      monthlyDollarSaved > inputs.monthlyPlatformCost
        ? Math.ceil(inputs.automationBuildCost / (monthlyDollarSaved - inputs.monthlyPlatformCost))
        : null;
    return { weeklyHoursSaved, monthlyHoursSaved, monthlyDollarSaved, firstYearGross, firstYearNet, breakEvenMonths };
  }, [inputs]);

  const fmt = (n: number) =>
    n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Inputs */}
      <div className="glass rounded-3xl p-8 space-y-7">
        <h2 className="font-display text-xl font-medium text-white">Your current situation</h2>
        <Field
          label="Hours per week on manual tasks"
          hint="Scheduling, follow-up calls, invoicing, data entry, reporting, etc."
          name="hoursPerWeek"
          value={inputs.hoursPerWeek}
          onChange={update}
          suffix="hrs/wk"
          min={1}
          max={80}
        />
        <Field
          label="Fully-loaded hourly staff cost"
          hint="Salary + benefits + overhead ÷ hours. Use your own rate or an employee's."
          name="hourlyCost"
          value={inputs.hourlyCost}
          onChange={update}
          prefix="$"
          suffix="/hr"
          min={10}
          max={250}
        />
        <Field
          label="Estimated automation build cost"
          hint="One-time development fee. TrueCodeAI projects typically range $3k–$25k."
          name="automationBuildCost"
          value={inputs.automationBuildCost}
          onChange={update}
          prefix="$"
          min={500}
          max={50000}
          step={500}
        />
        <Field
          label="Monthly platform / hosting cost"
          hint="Ongoing SaaS fees, API costs, or maintenance retainer."
          name="monthlyPlatformCost"
          value={inputs.monthlyPlatformCost}
          onChange={update}
          prefix="$"
          suffix="/mo"
          min={0}
          max={2000}
          step={25}
        />
        <Field
          label="Automation coverage"
          hint="What percentage of the manual task can realistically be automated? (60–90% is typical)"
          name="automationCoverage"
          value={inputs.automationCoverage}
          onChange={update}
          suffix="%"
          min={10}
          max={100}
          step={5}
        />
      </div>

      {/* Results */}
      <div className="flex flex-col gap-5">
        <div className="glass rounded-3xl p-8">
          <h2 className="font-display text-xl font-medium text-white mb-6">Your 12-month projection</h2>
          <div className="space-y-5">
            <Stat label="Hours saved per week" value={`${results.weeklyHoursSaved.toFixed(1)} hrs`} />
            <Stat label="Hours saved per month" value={`${results.monthlyHoursSaved.toFixed(0)} hrs`} />
            <Stat label="Cost saved per month" value={fmt(results.monthlyDollarSaved)} highlight />
            <Stat label="Gross savings — year 1" value={fmt(results.firstYearGross)} />
            <Stat
              label="Net ROI — year 1 (after all costs)"
              value={fmt(results.firstYearNet)}
              highlight
              positive={results.firstYearNet > 0}
            />
            <Stat
              label="Break-even point"
              value={
                results.breakEvenMonths === null
                  ? 'Platform cost exceeds savings'
                  : results.breakEvenMonths <= 0
                  ? 'Immediate'
                  : `Month ${results.breakEvenMonths}`
              }
            />
          </div>
        </div>

        {results.firstYearNet > 0 && (
          <div className="glass rounded-3xl p-8 border border-[#ff6a1a]/30">
            <p className="font-display text-lg font-medium text-white">
              Your automation could pay for itself
              {results.breakEvenMonths !== null && results.breakEvenMonths > 0
                ? ` in ${results.breakEvenMonths} month${results.breakEvenMonths === 1 ? '' : 's'}`
                : ' immediately'}.
            </p>
            <p className="mt-2 text-sm text-white/50">
              Ready to see a real scope and quote for your specific workflow?
            </p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-[#ff6a1a] text-black font-medium rounded-full px-7 h-12 text-sm transition-transform duration-300 hover:scale-105"
            >
              Get a free scoping call ↗
            </a>
          </div>
        )}

        <p className="text-xs text-white/25 px-1">
          This calculator provides estimates for planning purposes. Actual results vary by workflow complexity, adoption rate, and implementation scope.{' '}
          <Link href="/solutions" className="underline hover:text-white/50 transition-colors">Browse specific solutions</Link> for real outcome benchmarks.
        </p>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  highlight,
  positive,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  positive?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-3 border-b border-white/10 last:border-0">
      <span className="text-sm text-white/55">{label}</span>
      <span
        className={`font-mono font-semibold text-base ${
          highlight
            ? positive === false
              ? 'text-red-400'
              : 'text-[#ff6a1a]'
            : 'text-white'
        }`}
      >
        {value}
      </span>
    </div>
  );
}
