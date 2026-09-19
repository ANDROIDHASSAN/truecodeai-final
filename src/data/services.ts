// Service landing pages — the "money pages". Each targets a commercial query
// ("AI voice agent development company"), states scope, timeline and price
// range plainly, and links into the blog posts that support it.
// Prerendered to /services/<slug>. Titles ≤ 60, descriptions ≤ 160.

export type Service = {
  slug: string;
  name: string; // schema.org Service name
  title: string;
  description: string;
  h1: string;
  lede: string;
  outcomes: string[];
  deliverables: string[];
  process: { step: string; detail: string }[];
  pricing: { tier: string; scope: string; timeline: string; price: string }[];
  faq: { q: string; a: string }[];
  posts: string[]; // related blog slugs
};

export const services: Service[] = [
  {
    slug: 'ai-agent-development',
    name: 'AI agent development',
    title: 'AI Agent Development Company | TrueCodeAI',
    description:
      'We design, build and evaluate production AI agents that qualify leads, triage tickets and run back-office work — fixed price, evals included, live in 4–8 weeks.',
    h1: 'AI agents that do the work, not the demo.',
    lede: 'We build agents with the harness, evals and guardrails that keep them reliable after launch — on the Claude Agent SDK, managed agents or your own stack.',
    outcomes: [
      'Leads answered and qualified in seconds, 24/7',
      'Support tickets triaged and drafted, hard ones escalated',
      'Documents read, validated and entered across systems',
      'Every run traced, every change tested before deploy',
    ],
    deliverables: [
      'Agent with task-shaped tools and scoped credentials',
      'Eval suite of 150+ real scenarios, running in your CI',
      'Approval gates on every irreversible action',
      'Tracing, cost-per-task dashboard and alerts',
      'Runbook and a handover session for your team',
    ],
    process: [
      { step: 'Scope', detail: 'One process, its volume, its systems, its cost of error. Fixed price in 48 hours.' },
      { step: 'Build', detail: 'Tools, harness, permissions and the eval set from your real data.' },
      { step: 'Shadow', detail: 'Agent proposes, your team approves, for one to two weeks.' },
      { step: 'Launch', detail: 'Live on a slice of traffic, then all of it as the numbers hold.' },
    ],
    pricing: [
      { tier: 'Retrieval assistant', scope: 'Answers from your docs and helpdesk', timeline: '2–4 weeks', price: '$6k – $18k' },
      { tier: 'Workflow agent', scope: 'Triage, drafting, CRM updates', timeline: '4–8 weeks', price: '$20k – $55k' },
      { tier: 'Multi-tool agent', scope: '5–15 tools, approvals, evals', timeline: '8–14 weeks', price: '$55k – $120k' },
    ],
    faq: [
      { q: 'Which model do you build on?', a: 'The current frontier model that passes your eval set at the lowest cost, with cheaper models routed in for simple steps. The eval suite makes switching safe.' },
      { q: 'Do we own the code?', a: 'Yes — repository in your organisation from the first commit, IP assigned on payment.' },
      { q: 'What if the agent makes a mistake?', a: 'Irreversible actions sit behind approval gates until the eval pass rate earns autonomy, and every run is traced so mistakes are visible and fixable.' },
    ],
    posts: ['ai-agent-development-cost', 'what-is-an-ai-agent', 'why-ai-agents-fail-in-production', 'top-ai-agent-use-cases-for-business'],
  },
  {
    slug: 'voice-ai-agent-development',
    name: 'Voice AI agent development',
    title: 'Voice AI Agent Development | Calls Answered 24/7',
    description:
      'Voice AI agents that answer every call, book into your calendar and hand off to staff with a summary. Sub-second latency, your existing number, live in 4 weeks.',
    h1: 'Every call answered. First ring. Any hour.',
    lede: 'Voice agents built on a streaming stack with an 800 ms latency budget, barge-in, and warm hand-off to your team — on the number you already have.',
    outcomes: [
      '99%+ of calls answered, including after hours',
      'Bookings and reschedules straight into your calendar',
      'Fewer no-shows from confirmed reminder calls',
      'Front-desk hours back for the people in the room',
    ],
    deliverables: [
      'Voice agent on your existing number (forwarding or SIP)',
      'Integration with your calendar, CRM or practice software',
      'Eval set covering noise, accents and interruptions',
      'Transfer-with-summary to staff for anything sensitive',
      'Weekly report: answer rate, containment, bookings',
    ],
    process: [
      { step: 'Listen', detail: '100+ real calls tagged by reason; flows written for the top three.' },
      { step: 'Build', detail: 'Streaming STT → model → TTS, tools, escalation rules in code.' },
      { step: 'Shadow', detail: 'Agent proposes on live calls; staff compare for a week.' },
      { step: 'Launch', detail: 'After-hours and overflow first, full line once numbers hold.' },
    ],
    pricing: [
      { tier: 'Booking line', scope: 'Book, reschedule, FAQs, transfer', timeline: '4 weeks', price: '$8k – $18k' },
      { tier: 'Sales line', scope: 'Qualify, route hot leads live, CRM sync', timeline: '4–6 weeks', price: '$12k – $25k' },
      { tier: 'Outbound + inbound', scope: 'Reminders, follow-ups, consent handling', timeline: '6–8 weeks', price: '$20k – $40k' },
    ],
    faq: [
      { q: 'Do callers know it is an AI?', a: 'Yes — a one-line disclosure at call start. It does not hurt containment; surprising people does.' },
      { q: 'What languages?', a: 'English, Hindi and most major languages, switching mid-call as the caller does.' },
      { q: 'What does it cost to run?', a: 'Typically $300–$1,200 a month depending on call volume, including telephony and model usage.' },
    ],
    posts: ['why-your-business-needs-a-voice-ai-agent', 'how-we-build-a-voice-ai-agent-tutorial', 'ai-voice-agent-for-clinics', 'voice-agent-vs-ivr'],
  },
  {
    slug: 'whatsapp-ai-agent-development',
    name: 'WhatsApp AI agent development',
    title: 'WhatsApp AI Agent Development | Official Business API',
    description:
      'WhatsApp AI agents on the official Business API that answer, qualify, book and hand off in Hindi and English. Your number, your systems, live in 3 weeks.',
    h1: 'Your WhatsApp, answered in five seconds.',
    lede: 'Agents on the official WhatsApp Business API that answer from your catalogue, check your calendar or stock, and pass hot leads to a person — with the whole thread.',
    outcomes: [
      'No message unanswered after hours',
      'Leads qualified and tagged before your team wakes up',
      'Bookings and order-status handled end to end',
      'A weekly list of what customers asked that you do not offer',
    ],
    deliverables: [
      'Agent on your existing number via the official API',
      'Template approvals and opt-in compliance handled',
      'Integrations with calendar, POS, store or CRM',
      'Eval set in Hindi, Hinglish and English',
      'Owner dashboard and weekly summary',
    ],
    process: [
      { step: 'Export', detail: '500–2,000 real conversations clustered into message types.' },
      { step: 'Build', detail: 'Tools per action, short system prompt, eval set from the export.' },
      { step: 'Shadow', detail: 'Agent drafts, staff approve, every edit becomes a test.' },
      { step: 'Launch', detail: 'After-hours first, then all traffic, reviewed weekly.' },
    ],
    pricing: [
      { tier: 'FAQ + lead capture', scope: 'Answers from docs, collects leads', timeline: '2–3 weeks', price: '₹3.5L – ₹8L' },
      { tier: 'Bookings / orders', scope: 'Calendar, POS or store integration', timeline: '3 weeks', price: '₹8L – ₹17L' },
      { tier: 'Full support agent', scope: 'Status, returns, tickets, CRM, hand-off', timeline: '4–6 weeks', price: '₹17L – ₹38L' },
    ],
    faq: [
      { q: 'Can you use my current number?', a: 'Yes, migrated to the Business API. The number and its history stay yours.' },
      { q: 'Is it the official API?', a: 'Always. Unofficial gateways get numbers banned.' },
      { q: 'What are the monthly costs?', a: 'Model usage is usually under ₹8,000 a month for a few thousand chats; WhatsApp conversation fees are billed by Meta on top.' },
    ],
    posts: ['whatsapp-ai-agent-for-business-india', 'how-we-build-a-whatsapp-ai-agent-step-by-step', 'top-ai-automation-ideas-small-business-india'],
  },
  {
    slug: 'mvp-development',
    name: 'MVP development',
    title: 'MVP Development Company | Fixed Price, 6–12 Weeks',
    description:
      'Production-grade MVPs from a 50-engineer studio — fixed scope, fixed price, weekly demos on staging, code in your repo from day one. Scoped plan in 48 hours.',
    h1: 'An MVP you won’t have to rebuild.',
    lede: 'A dedicated pod — product lead, designer, two engineers, QA — shipping weekly to a staging link you can click, against a fixed price and a launch date.',
    outcomes: [
      'Launch in 6–12 weeks, on a date agreed in week one',
      'A codebase the next team can extend, not rewrite',
      'Analytics on the actions that matter from day one',
      'No surprises: fixed scope, fixed price, milestone payments',
    ],
    deliverables: [
      'Scope doc, user flows and architecture',
      'Clickable prototype tested on real users',
      'Production app, admin, integrations, emails',
      'QA pass, security review, load test, monitoring',
      'Repository, docs and a handover session',
    ],
    process: [
      { step: 'Discover', detail: 'Week 1: scope, flows, architecture, fixed price.' },
      { step: 'Design', detail: 'Week 2: clickable prototype, tested, then frozen.' },
      { step: 'Build', detail: 'Weeks 3–6: weekly demos on staging.' },
      { step: 'Ship', detail: 'Weeks 7–8: hardening, launch, monitoring.' },
    ],
    pricing: [
      { tier: 'Validator', scope: 'Landing, waitlist, one manual flow', timeline: '1–2 weeks', price: '$5k – $12k' },
      { tier: 'Core MVP', scope: 'Auth, 3–5 core screens, admin', timeline: '4–8 weeks', price: '$25k – $60k' },
      { tier: 'Marketplace / SaaS', scope: 'Multi-role, payments, dashboards', timeline: '8–14 weeks', price: '$60k – $120k' },
    ],
    faq: [
      { q: 'Why a studio and not freelancers?', a: 'Design, engineering and QA as one accountable team with a fixed price. Freelancers are great for defined tasks; whole products need a team.' },
      { q: 'What stack?', a: 'React / Next, Node or Python, Postgres, on AWS or GCP — opinionated, because that is where we are fastest.' },
      { q: 'Can we add AI features?', a: 'Yes — about a third of our MVPs now ship with an agent or model inside. Budget two to eight extra weeks for evals.' },
    ],
    posts: ['mvp-development-cost-2026', 'mvp-timeline-how-long', 'top-mistakes-founders-make-building-an-mvp', 'why-hire-a-software-studio-instead-of-freelancers'],
  },
  {
    slug: 'mcp-server-development',
    name: 'MCP server development',
    title: 'MCP Server Development | Make Your Product Agent-Ready',
    description:
      'Production MCP servers that expose your SaaS to every AI assistant and agent — tool design, model-readable descriptions, scoped auth, security. 2–4 weeks.',
    h1: 'Make your product usable by every AI agent.',
    lede: 'A remote MCP server with ten to twenty task-shaped tools, written for models to read, secured like the public API it is.',
    outcomes: [
      'Your product usable from inside AI assistants your customers already use',
      'Control over exactly which actions agents can take',
      'One integration instead of one per AI tool',
      'The same server powering your own internal agents',
    ],
    deliverables: [
      'Tool surface design and model-readable descriptions',
      'Remote MCP server on top of your existing API',
      'Per-connection scoped auth, rate limits, logging',
      'Prompt-injection and security test pass',
      'Agent eval on 50+ real customer tasks, listing-ready README',
    ],
    process: [
      { step: 'Design', detail: 'Top ten customer jobs become ten tools.' },
      { step: 'Build', detail: 'Thin server on your API with the official SDK.' },
      { step: 'Secure', detail: 'Scoped auth, validation, injection testing.' },
      { step: 'Evaluate', detail: 'An agent runs real tasks; descriptions fixed until it passes.' },
    ],
    pricing: [
      { tier: 'Read-only server', scope: 'Search and fetch tools', timeline: '1–2 weeks', price: '$5k – $12k' },
      { tier: 'Full server', scope: 'Read + write tools, auth, evals', timeline: '2–4 weeks', price: '$12k – $30k' },
      { tier: 'Platform', scope: 'Multi-tenant, versioning, analytics', timeline: '4–8 weeks', price: '$30k – $70k' },
    ],
    faq: [
      { q: 'Does it replace our API?', a: 'No — it sits on top and reshapes it for agents.' },
      { q: 'Local or remote?', a: 'Remote for customers; local for developer tools.' },
      { q: 'How do we version it?', a: 'Add tools, never change a tool’s meaning; deprecate with notice.' },
    ],
    posts: ['what-is-mcp-model-context-protocol', 'mcp-server-development', 'how-we-build-an-mcp-server-tutorial'],
  },
  {
    slug: 'custom-ml-model-development',
    name: 'Custom ML model development',
    title: 'Custom ML Model Development | Train on Your Data',
    description:
      'Custom ML models trained on your data — classification, extraction, forecasting, vision — deployed, monitored, retrained. Often far cheaper than an API.',
    h1: 'A model that knows your business.',
    lede: 'When an LLM API is too slow, too costly at volume or not allowed to see your data, we train a model you own — and keep it accurate.',
    outcomes: [
      'Per-prediction cost down by one to two orders of magnitude at volume',
      '30 ms responses instead of seconds',
      'Data that never leaves your infrastructure',
      'Accuracy that improves every retrain',
    ],
    deliverables: [
      'Labelled dataset (LLM-assisted labelling with human review)',
      'Trained model with a held-out evaluation report',
      'Deployment on your infrastructure with monitoring',
      'Hybrid routing: small model for the bulk, LLM for edge cases',
      'Retraining pipeline and drift alerts',
    ],
    process: [
      { step: 'Assess', detail: 'Volume, metric, data — train, call an API, or hybrid?' },
      { step: 'Label', detail: 'LLM-assisted labelling of 5–20k examples, sampled for quality.' },
      { step: 'Train', detail: 'Model, eval against a held-out set, compare with API baseline.' },
      { step: 'Deploy', detail: 'Serve, monitor, retrain monthly.' },
    ],
    pricing: [
      { tier: 'Classifier / extractor', scope: 'One task, your labels', timeline: '3–5 weeks', price: '$8k – $20k' },
      { tier: 'Forecast / ranking', scope: 'Time series or recommendations', timeline: '5–8 weeks', price: '$20k – $45k' },
      { tier: 'Vision / multi-model', scope: 'Images, pipelines, MLOps', timeline: '8–14 weeks', price: '$45k – $120k' },
    ],
    faq: [
      { q: 'How much data do we need?', a: 'Two to five thousand clean labelled examples for most classifiers.' },
      { q: 'When is an API better?', a: 'Below roughly 100k predictions a month, or when the task changes weekly.' },
      { q: 'Who retrains it?', a: 'We set up the pipeline and can run it on retainer, or hand it to your team.' },
    ],
    posts: ['custom-ml-model-vs-llm-api', 'how-we-cut-llm-costs-without-losing-quality', 'agentic-ai-vs-generative-ai'],
  },
  {
    slug: 'ai-automation-services',
    name: 'AI automation services',
    title: 'AI Automation Services | Back-Office on Autopilot',
    description:
      'AI automation for invoices, portals, reconciliation and onboarding — computer-use agents where there is no API. Fixed price, live in 3–6 weeks.',
    h1: 'The copy-paste work, done by software.',
    lede: 'API integrations where they exist, computer-use agents where they do not, and a human approval queue for anything that moves money.',
    outcomes: [
      'Hours of manual data entry removed per person per week',
      'Legacy portals and desktop apps automated without an API',
      'Exceptions flagged to a person instead of silently wrong',
      'A full audit trail of every automated run',
    ],
    deliverables: [
      'Process mapping from a screen recording',
      'Automation via API, computer-use agent or RPA — whichever fits',
      'Isolated run environment with scoped logins',
      'Approval gates, screen recordings and step logs',
      'Shadow-mode comparison against your team’s output',
    ],
    process: [
      { step: 'Record', detail: 'You send a 2-minute screen recording of the process.' },
      { step: 'Choose', detail: 'API, computer use or RPA — we say which and why in 48 hours.' },
      { step: 'Build', detail: 'Automation, gates and logging in 2–4 weeks.' },
      { step: 'Prove', detail: 'Shadow mode against your team before it runs alone.' },
    ],
    pricing: [
      { tier: 'Single process', scope: 'One workflow, one or two systems', timeline: '3–4 weeks', price: '$12k – $25k' },
      { tier: 'Cross-system', scope: 'Reconciliation across 3+ systems', timeline: '4–6 weeks', price: '$25k – $45k' },
      { tier: 'Programme', scope: 'Several processes, shared platform', timeline: '8+ weeks', price: 'From $45k' },
    ],
    faq: [
      { q: 'Is a computer-use agent reliable?', a: 'With approval gates and evals, yes for entry and reconciliation. We keep a human on submit for anything financial until the error rate is measured.' },
      { q: 'Does it run on our machines?', a: 'On isolated virtual desktops we or you control, never on an employee’s laptop.' },
      { q: 'What does a run cost?', a: 'Cents to a few dollars per task depending on length.' },
    ],
    posts: ['computer-use-agents-back-office-automation', 'top-ai-agent-use-cases-for-business', 'top-ai-automation-ideas-small-business-india'],
  },
  {
    slug: 'ai-training-for-teams',
    name: 'AI engineering training',
    title: 'AI Training for Engineering Teams | Claude Code & Agents',
    description:
      'Hands-on workshops for engineering teams: Claude Code rollout, Agent SDK, MCP, evals and multi-agent design — on your codebase, taught by engineers who ship it.',
    h1: 'We teach what we build.',
    lede: 'One- and two-day workshops on your codebase, in your hours, by the engineers who ship agents for clients. Your team leaves with a configured repo, not a slide deck.',
    outcomes: [
      'Engineers productive with AI coding agents in a day',
      'Team-wide conventions: instructions, permissions, hooks, skills',
      'The ability to build and evaluate your own agents',
      'Measured before-and-after on cycle time and throughput',
    ],
    deliverables: [
      'Pre-workshop audit of your repo and workflow',
      'Configured project instructions, permissions and hooks',
      'Starter agent or MCP server built during the session',
      'Eval-suite template for your own agents',
      'Six weeks of async support in a shared channel',
    ],
    process: [
      { step: 'Audit', detail: 'We review your repo, stack and goals in advance.' },
      { step: 'Day 1', detail: 'Mental model, instructions, permissions, test-driven prompting.' },
      { step: 'Day 2', detail: 'Hooks, skills, subagents, Agent SDK, evals.' },
      { step: 'Follow-up', detail: 'Six weeks of support and a metrics review.' },
    ],
    pricing: [
      { tier: 'Half-day briefing', scope: 'Leadership + tech leads', timeline: '1 session', price: '$1.5k – $3k' },
      { tier: 'Two-day workshop', scope: 'Up to 20 engineers', timeline: '2 days + 6 weeks support', price: '$6k – $12k' },
      { tier: 'Rollout programme', scope: '20–200 engineers, metrics', timeline: '6–10 weeks', price: 'From $18k' },
    ],
    faq: [
      { q: 'Remote or on-site?', a: 'Both. Most are remote; on-site in India and on request elsewhere.' },
      { q: 'Which tools do you cover?', a: 'Claude Code and the Claude Agent SDK in depth, MCP, and the evaluation practices that apply to any model.' },
      { q: 'Is it only for senior engineers?', a: 'No — we split tracks by experience in larger teams.' },
    ],
    posts: ['claude-code-for-engineering-teams', 'claude-agent-sdk-development', 'what-is-an-agent-harness', 'how-we-build-agent-evals-tutorial'],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
