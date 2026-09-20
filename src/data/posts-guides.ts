// High-volume informational formats — "Top N", "Why", "What is" — written for
// business buyers, each ending in a build CTA. Same rules: title ≤ 60, desc ≤ 160.
import { unsplash, type Post } from './post-types';

const TALK = {
  title: 'Want to talk it through with an engineer?',
  body: 'A 30-minute call, no sales deck. You describe the problem, we tell you what we would build and what it would cost.',
};

export const guidePosts: Post[] = [
  // ───────────────────────────── TOP ─────────────────────────────
  {
    slug: 'top-ai-agent-use-cases-for-business',
    title: 'Top 10 AI Agent Use Cases for Business in 2026',
    description:
      'The ten AI agent use cases that are actually paying off for businesses in 2026 — with what each one does, typical ROI, and build cost — ranked by payback.',
    date: '2026-09-19',
    updated: '2026-09-19',
    cover: unsplash('photo-1460925895917-afdab827c52f'),
    coverAlt: 'Business dashboard on a laptop showing growth charts',
    tags: ['AI agents', 'Use cases', 'Automation'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'We get asked "what should we automate first?" every week. This list is our answer, ranked by how fast each use case pays back across the businesses we have built for — not by how impressive it looks in a demo.',
    cta: TALK,
    sections: [
      {
        id: 'ranked',
        heading: 'The ten, ranked by payback',
        blocks: [
          {
            type: 'table',
            caption: 'AI agent use cases ranked by typical payback period',
            headers: ['#', 'Use case', 'What it does', 'Typical payback', 'Build cost'],
            rows: [
              ['1', 'Inbound lead qualification', 'Answers, qualifies and routes leads on web, WhatsApp and phone in seconds', '1–2 months', '$6k – $20k'],
              ['2', 'Support ticket triage & drafting', 'Reads tickets, tags, drafts replies, escalates the hard ones', '1–3 months', '$15k – $40k'],
              ['3', 'Appointment booking & reminders', 'Voice and chat booking into the real calendar; no-show reduction', '1–3 months', '$8k – $18k'],
              ['4', 'Invoice & document processing', 'Extracts, validates and enters data from PDFs, emails, portals', '2–4 months', '$12k – $35k'],
              ['5', 'Sales research & outreach prep', 'Builds account briefs and first-draft outreach from public data', '2–4 months', '$10k – $30k'],
              ['6', 'Internal knowledge assistant', 'Answers staff questions from policies, docs and past tickets', '3–6 months', '$6k – $18k'],
              ['7', 'Recruiting screen & scheduling', 'Screens applications against criteria, schedules interviews', '3–6 months', '$10k – $25k'],
              ['8', 'Back-office reconciliation', 'Matches records across systems, flags exceptions for a human', '3–6 months', '$15k – $45k'],
              ['9', 'Engineering agents', 'Code review, test writing, migrations, on-call triage', '3–9 months', '$20k – $60k'],
              ['10', 'Autonomous ops workflows', 'End-to-end processes with approvals — procurement, onboarding', '6–12 months', '$60k – $200k'],
            ],
          },
          {
            type: 'p',
            text: 'Costs are 2026 studio fixed-price ranges. Payback assumes the process already exists and is done by people today — an agent that automates something nobody was doing has no payback to measure.',
          },
        ],
      },
      {
        id: 'first',
        heading: 'Which one to do first',
        blocks: [
          {
            type: 'ul',
            items: [
              'Pick the process with the most volume and the least judgement. High volume gives fast payback; low judgement gives high pass rates.',
              'Pick one where the data already lives in a system with an API. Half of every agent budget is integration.',
              'Pick one where a mistake is cheap and reversible. Earn trust on refunds later, not first.',
              'Avoid the "AI strategy" project. Ship use case #1 in six weeks and let the results write the strategy.',
            ],
          },
        ],
      },
      {
        id: 'skip',
        heading: 'Three that look good and usually are not',
        blocks: [
          {
            type: 'ul',
            items: [
              'The general-purpose company chatbot. No owner, no metric, no integration — it answers nothing well.',
              'Fully autonomous sales outreach. Deliverability and brand risk outweigh the savings; keep a human on send.',
              'Replacing a deterministic workflow with an agent. If the steps never vary, write normal automation; it is cheaper and never hallucinates.',
            ],
          },
        ],
      },
    ],
    faq: [
      { q: 'How long does the first agent take?', a: 'Four to eight weeks for use cases 1–6, including two weeks of shadow mode where the agent proposes and a human approves.' },
      { q: 'Do we need our own AI team?', a: 'Not to start. You need one owner on your side who knows the process. We build, hand over, and train whoever will maintain it.' },
      { q: 'What ROI should we expect?', a: 'For the top five use cases, 3–8× the build cost in the first year is typical when the process has real volume. We measure your baseline first so the number is real.' },
    ],
    related: ['ai-agent-development-cost', 'why-ai-agents-fail-in-production', 'what-is-an-ai-agent'],
  },

  {
    slug: 'top-mistakes-founders-make-building-an-mvp',
    title: 'Top 10 Mistakes Founders Make Building an MVP',
    description:
      'The ten MVP mistakes we see most — from over-scoping to hiring on price — what each one costs in money and months, and the fix for each.',
    date: '2026-09-19',
    updated: '2026-09-19',
    cover: unsplash('photo-1542744173-8e7e53415bb0'),
    coverAlt: 'Founders in a planning meeting around a conference table',
    tags: ['MVP', 'Startups', 'Founders'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'We have rescued enough late, over-budget MVPs to know that the failures are not random. The same ten mistakes show up again and again, and every one of them is avoidable before the first line of code.',
    cta: {
      title: 'Building an MVP? Get a second opinion on the scope.',
      body: 'Send us what you plan to build. We will tell you what to cut, what it should cost and how long it should take — free, within 48 hours.',
    },
    sections: [
      {
        id: 'list',
        heading: 'The ten mistakes',
        blocks: [
          {
            type: 'table',
            caption: 'MVP mistakes, cost and fix',
            headers: ['#', 'Mistake', 'What it costs', 'The fix'],
            rows: [
              ['1', 'Building for three user types at once', '+40% scope, +6 weeks', 'One buyer, one core flow. Admin is a database view.'],
              ['2', 'No one-sentence job statement', 'Endless feature debates', 'Write the sentence; cut everything that does not serve it.'],
              ['3', 'Hiring on lowest price', 'Rebuild within a year', 'Hire on live references and named engineers.'],
              ['4', 'Hourly billing with vague scope', 'Budget overruns you absorb', 'Fixed scope, fixed price, milestone payments.'],
              ['5', 'Custom design system for v1', '+3–5 weeks', 'A tuned component library. Brand later.'],
              ['6', 'Integrating three payment providers', '+2 weeks each', 'One provider. Add the second when a customer demands it.'],
              ['7', 'Skipping the clickable prototype', 'Design changes mid-build at 5× cost', 'Test a prototype on three users in week two, then freeze.'],
              ['8', 'Founder disappears for two weeks', '+2 weeks, every time', 'One decision-maker, answering within 24 hours.'],
              ['9', 'No analytics at launch', 'Blind for the first month', 'Events on the five actions that matter, before launch.'],
              ['10', 'No budget for month two', 'MVP rots', '15–20% of build cost per year for upkeep.'],
            ],
          },
        ],
      },
      {
        id: 'expensive',
        heading: 'The most expensive one',
        blocks: [
          {
            type: 'p',
            text: 'Number three. A cheap build is not cheap; it is a deposit on a rebuild. The pattern is always the same: it ships late, it works in the demo, it falls over with the first hundred real users, and the second team spends the first month understanding what the first team did. Price matters, but pay for people you can name.',
          },
        ],
      },
      {
        id: 'avoid',
        heading: 'How to avoid all ten in one move',
        blocks: [
          {
            type: 'p',
            text: 'Get the scope written down and priced before anyone codes. A proper proposal — architecture, screens, integrations, timeline, fixed price — forces every one of these decisions into the open while they are still cheap. We produce that document in 48 hours from a three-sentence brief; whether you build with us or not, it will save you a month.',
          },
        ],
      },
    ],
    faq: [
      { q: 'What is the ideal MVP scope?', a: 'One user type, one core flow done well, authentication, a way to pay you, analytics. Six to ten screens. Anything past that is version two.' },
      { q: 'Should I use no-code for the MVP?', a: 'For a validator, yes. For a product you expect to scale or raise on, a real codebase from the start avoids a rebuild at exactly the wrong moment.' },
      { q: 'How much should an MVP cost?', a: 'A core MVP with a professional team lands between $25k and $60k in 2026. See our full cost breakdown for the tiers.' },
    ],
    related: ['mvp-development-cost-2026', 'mvp-timeline-how-long', 'how-to-choose-software-development-company-india'],
  },

  {
    slug: 'top-ai-automation-ideas-small-business-india',
    title: 'Top 10 AI Automation Ideas for Small Businesses in India',
    description:
      'Ten practical AI automations Indian small businesses use in 2026 — WhatsApp agents, voice booking, invoice extraction and more — with costs in rupees.',
    date: '2026-09-19',
    updated: '2026-09-19',
    cover: unsplash('photo-1556740758-90de374c12ad'),
    coverAlt: 'Small shop owner using a phone at the counter',
    tags: ['Automation', 'India', 'Small business'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'Most AI advice is written for companies with a data team. This list is for a clinic, a coaching institute, a D2C brand, a CA firm or a dealership — businesses where one owner makes the call and the budget has to pay back in months. Every item here is something we have built for a business that size.',
    cta: {
      title: 'Which of these fits your business?',
      body: 'Tell us what you do and where the hours go. We reply within 24 hours with the one automation to start with and what it would cost.',
    },
    sections: [
      {
        id: 'list',
        heading: 'The ten, with costs',
        blocks: [
          {
            type: 'table',
            caption: 'AI automations for Indian SMBs, 2026',
            headers: ['#', 'Automation', 'Best for', 'Build cost', 'Monthly'],
            rows: [
              ['1', 'WhatsApp lead & booking agent', 'Any business with a WhatsApp number', '₹3.5L – ₹8L', '₹7k – ₹25k'],
              ['2', 'Voice agent for missed calls', 'Clinics, salons, dealerships, institutes', '₹7L – ₹15L', '₹25k – ₹75k'],
              ['3', 'Invoice & receipt extraction', 'CA firms, distributors, traders', '₹5L – ₹12L', '₹5k – ₹20k'],
              ['4', 'Review & reputation responder', 'Restaurants, hotels, clinics', '₹1.5L – ₹4L', '₹3k – ₹8k'],
              ['5', 'Catalogue & listing writer', 'D2C brands, marketplaces sellers', '₹2L – ₹5L', '₹3k – ₹10k'],
              ['6', 'Student / patient follow-up agent', 'Coaching institutes, clinics', '₹3L – ₹7L', '₹7k – ₹20k'],
              ['7', 'Hiring screener', 'Any business hiring 5+ people a month', '₹3L – ₹6L', '₹5k – ₹12k'],
              ['8', 'Vendor email & PO triage', 'Manufacturing, distribution', '₹4L – ₹10L', '₹7k – ₹20k'],
              ['9', 'Daily sales & stock summary', 'Retail chains, restaurants', '₹2L – ₹5L', '₹3k – ₹8k'],
              ['10', 'Owner’s assistant (email, calendar, reports)', 'Founder-led businesses', '₹3L – ₹8L', '₹7k – ₹20k'],
            ],
          },
          {
            type: 'p',
            text: 'Rupee figures are 2026 estimates at roughly ₹84/$; monthly includes model usage and messaging fees but not your own staff time. Everything on this list runs on the official WhatsApp Business API, your existing phone number and your existing software.',
          },
        ],
      },
      {
        id: 'start',
        heading: 'Where most businesses should start',
        blocks: [
          {
            type: 'p',
            text: 'Number one. Almost every Indian SMB already runs its customer conversations on WhatsApp, and almost every one of them misses messages after hours. A WhatsApp agent that answers in seconds, in Hindi or English, and books or qualifies before a human wakes up pays for itself in the first month for most of the businesses we have deployed it in.',
          },
        ],
      },
      {
        id: 'avoid',
        heading: 'What to avoid',
        blocks: [
          {
            type: 'ul',
            items: [
              'Unofficial WhatsApp gateways. The number gets banned, usually during a festival sale.',
              'Generic chatbot subscriptions with no integration. If it cannot see your calendar or stock, it is just a FAQ page.',
              'Automating a process you have not written down. Document the manual version first; it takes an afternoon.',
            ],
          },
        ],
      },
    ],
    faq: [
      { q: 'Do I need technical staff to run these?', a: 'No. We build, connect to your existing tools, and train whoever answers the phone today. You get a dashboard and a weekly summary.' },
      { q: 'Will it work in Hindi and regional languages?', a: 'Yes — Hindi, Hinglish and most major regional languages, switching as the customer does. We test in your languages before launch.' },
      { q: 'How fast can the first one go live?', a: 'A WhatsApp agent in three weeks; a voice agent in four. Both start in shadow mode with a human watching.' },
    ],
    related: ['whatsapp-ai-agent-for-business-india', 'ai-voice-agent-for-clinics', 'top-ai-agent-use-cases-for-business'],
  },

  // ───────────────────────────── WHY ─────────────────────────────
  {
    slug: 'why-ai-agents-fail-in-production',
    title: 'Why AI Agents Fail in Production (and How to Fix It)',
    description:
      'The seven reasons AI agents that pass the demo fail in production — context, tools, evals, permissions, latency, cost, ownership — and the fix for each.',
    date: '2026-09-19',
    updated: '2026-09-19',
    cover: unsplash('photo-1504384308090-c894fdcc538d'),
    coverAlt: 'Server room with warning lights, representing production failures',
    tags: ['AI agents', 'Reliability', 'Production'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'Most AI agents never make it from the demo to the daily workflow, and the ones that do often get quietly switched off within a quarter. Having rescued a fair number of them, we can say the causes are boringly consistent — and none of them are "the model is not smart enough".',
    cta: {
      title: 'Have an agent that works in the demo but not in production?',
      body: 'We diagnose and fix agents other teams built. Send us a description of what it does and where it breaks; we reply within 24 hours.',
    },
    sections: [
      {
        id: 'seven',
        heading: 'The seven failure modes',
        blocks: [
          {
            type: 'table',
            caption: 'Why agents fail after launch',
            headers: ['Failure', 'What it looks like', 'Root cause', 'Fix'],
            rows: [
              ['Context rot', 'Great for 10 steps, confused by step 30', 'Nothing manages what stays in context', 'Compaction, clearing stale tool results, memory'],
              ['Tool misuse', 'Wrong tool, wrong arguments, invented tools', 'Vague descriptions, loose schemas', 'Task-shaped tools, strict schemas, examples'],
              ['No evals', 'Every prompt change breaks something else', 'Quality measured by vibes', '150+ real scenarios in CI'],
              ['Prompt-only guardrails', 'Agent does the thing it was told not to', 'Rules in the prompt, not the harness', 'Enforceable permissions and approval gates'],
              ['Latency', 'Users stop waiting', 'Serial tool calls, wrong model per step', 'Parallel calls, cheaper models for simple steps'],
              ['Cost surprise', 'Bill triples in month two', 'No caching, no per-task budget', 'Prompt caching, effort tuning, budgets'],
              ['No owner', 'Slowly degrades, nobody notices', 'Treated as a project, not a product', 'Named owner, weekly review of failures'],
            ],
          },
        ],
      },
      {
        id: 'common',
        heading: 'The one that hides behind the others',
        blocks: [
          {
            type: 'p',
            text: 'No evals. Every other failure is survivable if you can see it. Without an eval suite you find out about context rot from a customer, about tool misuse from a refund, about cost from finance. With one, you find out in CI, before deploy, with the failing scenario in front of you. If you fix one thing on this list, fix that.',
          },
        ],
      },
      {
        id: 'rescue',
        heading: 'How we rescue a failing agent',
        blocks: [
          {
            type: 'ul',
            items: [
              'Week 1: instrument it. Traces on every run, a failure taxonomy, cost per task. Usually this alone explains 70% of the complaints.',
              'Week 2: build the eval set from the traces — the real failures become the regression suite.',
              'Weeks 3–4: fix in order of measured impact. Tool descriptions and permissions first; they are cheap and move the number most.',
              'Handover: the suite runs in your CI, an owner is named, and the weekly failure review is on someone’s calendar.',
            ],
          },
        ],
      },
    ],
    faq: [
      { q: 'Should we switch models?', a: 'Rarely the first fix. Nine times out of ten the harness is the problem. Swap the model only after evals exist to measure the swap.' },
      { q: 'Can a failing agent be saved or should we rebuild?', a: 'Usually saved. Rebuilds without evals fail the same way. Instrument, measure, fix — and rebuild only if the architecture itself is wrong.' },
      { q: 'How long does a rescue take?', a: 'Four to six weeks to a measurably reliable agent, in most cases.' },
    ],
    related: ['what-is-an-agent-harness', 'ai-agent-evals-before-production', 'top-ai-agent-use-cases-for-business'],
  },

  {
    slug: 'why-your-business-needs-a-voice-ai-agent',
    title: 'Why Your Business Needs a Voice AI Agent in 2026',
    description:
      'Missed calls, after-hours silence, staff stuck on the phone — why a voice AI agent fixes all three, what it costs, and which businesses see the fastest return.',
    date: '2026-09-19',
    updated: '2026-09-19',
    cover: unsplash('photo-1423666639041-f56000c27a9a'),
    coverAlt: 'Person on a phone call at a desk',
    tags: ['Voice agents', 'Customer experience', 'Sales'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'Phones did not go away. For clinics, dealerships, property, home services and education, the phone is still where the highest-intent customers show up — and it is the channel most businesses handle worst. A voice AI agent answers every call, in seconds, in the caller’s language, and books or qualifies before a human is involved.',
    cta: {
      title: 'How many calls are you missing?',
      body: 'Tell us your daily call volume and your top three call reasons. We reply within 24 hours with what an agent would handle and what it would cost.',
    },
    sections: [
      {
        id: 'problem',
        heading: 'The problem with the phone today',
        blocks: [
          {
            type: 'table',
            caption: 'What happens to inbound calls at a typical service business',
            headers: ['Situation', 'Share of calls', 'What happens now'],
            rows: [
              ['Answered within 30 seconds', '50 – 65%', 'Handled, often while the desk is busy'],
              ['Rings out during peak hours', '15 – 25%', 'Caller tries a competitor'],
              ['After hours / weekends', '20 – 35%', 'Voicemail — converts near zero'],
              ['Callback requested', 'Varies', 'Returned late or never'],
            ],
          },
          {
            type: 'p',
            text: 'Every unanswered call is a customer who already decided to buy and is now deciding from whom. The maths is brutal: a business that answers 60% of calls and converts a third of them is leaving as much revenue on the table as it is booking.',
          },
        ],
      },
      {
        id: 'agent',
        heading: 'What changes with a voice agent',
        blocks: [
          {
            type: 'ul',
            items: [
              'Every call answered, first ring, 24/7 — the biggest single gain, before any cleverness.',
              'Bookings and reschedules made directly in your calendar or CRM, with confirmations sent.',
              'Leads qualified with the five questions your best salesperson asks, then transferred live if hot.',
              'Language switching mid-call — English, Hindi, regional languages — without a menu.',
              'Front-desk staff freed from three to five hours of phone a day to look after the people in front of them.',
              'Warm hand-off to a human, with a spoken summary, the moment the call needs one.',
            ],
          },
        ],
      },
      {
        id: 'who',
        heading: 'Who sees the fastest return',
        blocks: [
          {
            type: 'p',
            text: 'Appointment-driven and lead-driven businesses. Clinics and dental practices, car dealerships, real-estate and rental agencies, coaching institutes, home services, salons and spas, and any B2B with an inbound sales line. If your revenue depends on someone picking up, the return is measured in weeks.',
          },
        ],
      },
      {
        id: 'cost',
        heading: 'What it costs',
        blocks: [
          {
            type: 'p',
            text: 'A voice agent integrated with your booking or CRM system is $8k–$25k to build and $300–$1,200 a month to run, depending on call volume. We deploy in four weeks, starting on overflow and after-hours so nothing about your current operation changes until the numbers prove it.',
          },
        ],
      },
    ],
    faq: [
      { q: 'Will callers hate talking to an AI?', a: 'They hate voicemail more. With sub-second responses, honest disclosure and instant transfer when needed, satisfaction in our deployments is at or above the human-answered baseline.' },
      { q: 'Does it replace my receptionist?', a: 'It replaces the calls your receptionist misses and the hours they spend on routine bookings. Most businesses keep the same staff and redeploy the time.' },
      { q: 'What about my existing number and phone system?', a: 'It works with your existing number via forwarding or SIP. No hardware, no new number.' },
    ],
    related: ['voice-agent-vs-ivr', 'ai-voice-agent-for-clinics', 'top-ai-automation-ideas-small-business-india'],
  },

  {
    slug: 'why-hire-a-software-studio-instead-of-freelancers',
    title: 'Why Hire a Software Studio Instead of Freelancers?',
    description:
      'Freelancers vs a software studio for your MVP or product build — cost, speed, risk and accountability compared, including when freelancers are the right call.',
    date: '2026-09-19',
    updated: '2026-09-19',
    cover: unsplash('photo-1521737711867-e3b97375f902'),
    coverAlt: 'Small engineering team working together at a shared table',
    tags: ['Hiring', 'Startups', 'Outsourcing'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'A freelancer is cheaper per hour and a studio is more accountable per outcome. Which one you want depends on what you are building and how much of the risk you can carry yourself. Here is the comparison we give founders who ask — including the cases where we tell them to hire a freelancer.',
    cta: TALK,
    sections: [
      {
        id: 'compare',
        heading: 'Side by side',
        blocks: [
          {
            type: 'table',
            caption: 'Freelancers vs software studio for a product build',
            headers: ['Dimension', 'Freelancers', 'Studio'],
            rows: [
              ['Hourly cost', 'Lower', 'Higher'],
              ['Cost to a finished, working product', 'Often higher after rework', 'Predictable with fixed scope'],
              ['Design + engineering + QA together', 'You coordinate three people', 'One accountable team'],
              ['Continuity if someone leaves', 'Project stalls', 'Team absorbs it'],
              ['Speed', 'Fast on small, defined tasks', 'Fast on whole products'],
              ['Accountability', 'Per task', 'Per outcome, in a contract'],
              ['Post-launch support', 'Ad hoc', 'Retainer, warranty window'],
              ['Best for', 'Features, fixes, validators', 'MVPs, platforms, AI products'],
            ],
          },
        ],
      },
      {
        id: 'freelancer',
        heading: 'When a freelancer is the right call',
        blocks: [
          {
            type: 'ul',
            items: [
              'You have a technical co-founder who can specify, review and integrate the work.',
              'The task is well-defined and bounded — a feature, an integration, a landing page.',
              'You are validating an idea and a rough version is fine.',
              'Budget is under $10k and you can absorb the risk of it not working.',
            ],
          },
        ],
      },
      {
        id: 'studio',
        heading: 'When a studio is the right call',
        blocks: [
          {
            type: 'ul',
            items: [
              'You are non-technical and need someone accountable for the whole result.',
              'The product needs design, engineering and QA to work together from day one.',
              'You are raising money or signing customers on the strength of the build.',
              'The product has AI in it. Agents, evals, voice — these need people who ship them weekly.',
              'You want a fixed price and a date, in writing.',
            ],
          },
        ],
      },
      {
        id: 'middle',
        heading: 'The hybrid that often works',
        blocks: [
          {
            type: 'p',
            text: 'Studio for the first release — the architecture, the core flows, the launch — then a freelancer or your own hire for iteration once the shape is clear. We set clients up for this deliberately: clean repo in your organisation, documentation, and a handover session for whoever comes next.',
          },
        ],
      },
    ],
    faq: [
      { q: 'How much more does a studio cost?', a: 'Per hour, 30–60% more than a freelancer of the same seniority. Per finished product, frequently less, because rework and coordination are where freelancer projects lose money.' },
      { q: 'Can I meet the actual engineers?', a: 'With any studio worth hiring, yes, on the first call. If you cannot, walk away.' },
      { q: 'What should the contract include?', a: 'Fixed scope and price, milestone payments, IP assignment on payment, a warranty window, and the right to stop at any milestone and keep the work.' },
    ],
    related: ['how-to-choose-software-development-company-india', 'mvp-development-cost-2026', 'top-mistakes-founders-make-building-an-mvp'],
  },

  // ───────────────────────────── WHAT IS ─────────────────────────────
  {
    slug: 'what-is-an-ai-agent',
    title: 'What Is an AI Agent? A Plain-English Guide for Business',
    description:
      'What an AI agent actually is, how it differs from a chatbot and from automation, what it can and cannot do in 2026, and what one costs — no jargon.',
    date: '2026-09-19',
    updated: '2026-09-19',
    cover: unsplash('photo-1526374965328-7f61d4dc18c5'),
    coverAlt: 'Streams of code on a dark screen',
    tags: ['AI agents', 'Explainer', 'Business'],
    kind: 'Explainer',
    author: 'hassan',
    intro:
      'An AI agent is software that is given a goal, works out the steps, uses tools to take them, checks the results and keeps going until the goal is met — or asks a human when it should. That is the whole idea. Everything else is detail, and the detail is what decides whether it works.',
    cta: {
      title: 'Wondering whether an agent fits your business?',
      body: 'Describe a process that eats your team’s time. We reply within 24 hours with whether an agent is the right answer — and we will say no when it is not.',
    },
    sections: [
      {
        id: 'vs',
        heading: 'Agent vs chatbot vs automation',
        blocks: [
          {
            type: 'table',
            caption: 'Three things that get confused',
            headers: ['', 'Automation (RPA, scripts)', 'Chatbot', 'AI agent'],
            rows: [
              ['Follows', 'Fixed steps', 'A conversation', 'A goal'],
              ['Handles variation', 'No', 'In wording only', 'Yes, within limits'],
              ['Takes actions in systems', 'Yes, fixed ones', 'Rarely', 'Yes, chosen per situation'],
              ['Knows when to ask a human', 'No', 'No', 'Yes, if built properly'],
              ['Best for', 'Repetitive, unchanging work', 'Answering questions', 'Messy, multi-step work with judgement'],
            ],
          },
        ],
      },
      {
        id: 'parts',
        heading: 'What is inside one',
        blocks: [
          {
            type: 'ul',
            items: [
              'A model — the reasoning engine, rented from a provider. It decides what to do next.',
              'Tools — the actions it can take: look up an order, send an email, update the CRM, run a calculation.',
              'A harness — the loop that runs the model, executes tools, manages memory and enforces the rules. This is the part you own and the part that decides quality.',
              'Guardrails — which actions run alone and which need a person to click approve.',
              'Evals — a test set of real scenarios so you know it works before customers do.',
            ],
          },
        ],
      },
      {
        id: 'cando',
        heading: 'What agents can do well in 2026',
        blocks: [
          {
            type: 'ul',
            items: [
              'Qualify and route leads across chat, WhatsApp and phone.',
              'Triage and draft replies to support tickets, escalating the hard ones.',
              'Read documents and enter or reconcile the data across systems.',
              'Book, reschedule and remind — by voice or message.',
              'Research a company, a market or a codebase and write a brief.',
            ],
          },
          {
            type: 'p',
            text: 'What they still do badly: anything requiring sub-second decisions, tasks where a single mistake is catastrophic and cannot be gated, and open-ended jobs with no way to check the result.',
          },
        ],
      },
      {
        id: 'cost',
        heading: 'What one costs',
        blocks: [
          {
            type: 'p',
            text: 'A first agent for a real business process is $6k–$40k to build and $100–$800 a month to run, depending on how many systems it touches. Timeline four to eight weeks, including a period where it proposes and a person approves. See our full cost breakdown for the tiers.',
          },
        ],
      },
    ],
    faq: [
      { q: 'Is ChatGPT an AI agent?', a: 'The chat product is a chatbot. Agents are built on top of models like the ones behind it, with tools, a harness and guardrails added. The model alone does not act on your systems.' },
      { q: 'Will an agent replace my staff?', a: 'It replaces the repetitive part of their day. In our deployments the same people end up doing more valuable work, and the business handles more volume without hiring.' },
      { q: 'How do I know it will not make things up?', a: 'By constraining it to your data and tools, gating risky actions behind approval, and testing it against hundreds of real scenarios before launch. "Making things up" is a harness problem, not a law of nature.' },
    ],
    related: ['top-ai-agent-use-cases-for-business', 'ai-agent-development-cost', 'what-is-an-agent-harness'],
  },

  {
    slug: 'what-is-mcp-model-context-protocol',
    title: 'What Is MCP (Model Context Protocol)? Explained Simply',
    description:
      'The Model Context Protocol explained for product and business leaders: what it is, why AI tools are adopting it, and what it means for your product.',
    date: '2026-09-19',
    updated: '2026-09-19',
    cover: unsplash('photo-1544197150-b99a580bb7a8'),
    coverAlt: 'USB cables and connectors laid out on a table',
    tags: ['MCP', 'Explainer', 'Integrations'],
    kind: 'Explainer',
    author: 'hassan',
    intro:
      'Before USB, every device needed its own cable. MCP — the Model Context Protocol — is the USB for AI: one open standard that lets any AI assistant or agent discover and use any product’s capabilities. If you build software, it is the most important integration decision of the next two years.',
    cta: {
      title: 'Should your product have an MCP server?',
      body: 'Tell us what your product does. We reply within 24 hours with what an MCP server would expose, how long it would take and what it would cost.',
    },
    sections: [
      {
        id: 'what',
        heading: 'What it is, in one paragraph',
        blocks: [
          {
            type: 'p',
            text: 'MCP is an open protocol that defines how an AI model’s host — a coding assistant, a desktop app, an agent — talks to external "servers" that expose tools (actions), resources (data) and prompts. A product ships one MCP server; every MCP-compatible AI can then use that product without a custom integration. The protocol handles discovery, typed inputs, results and permissions.',
          },
        ],
      },
      {
        id: 'why',
        heading: 'Why it matters',
        blocks: [
          {
            type: 'table',
            caption: 'Before and after MCP',
            headers: ['', 'Before', 'With MCP'],
            rows: [
              ['Connecting a product to one AI tool', 'Custom integration, weeks', 'Configure the server, minutes'],
              ['Connecting to ten AI tools', 'Ten integrations', 'Still one server'],
              ['Who controls what the AI can do', 'Whoever wrote the integration', 'You, in the server'],
              ['Discovery', 'Hard-coded', 'The AI reads your tool list and descriptions'],
              ['Your own internal agents', 'Separate plumbing', 'Same server'],
            ],
          },
          {
            type: 'p',
            text: 'The commercial point: AI assistants are becoming the interface through which people use software. A product without an MCP server is invisible to that interface. A product with a good one gets used from inside every tool its customers already open.',
          },
        ],
      },
      {
        id: 'server',
        heading: 'What an MCP server actually contains',
        blocks: [
          {
            type: 'ul',
            items: [
              'Tools: named actions with typed inputs — "create_invoice", "find_customer", "book_slot".',
              'Descriptions written for a model to read, so it picks the right tool.',
              'Authentication scoped per connection, so an agent can only do what its user could.',
              'Resources: read-only data the AI can pull into context — a document, a record, a report.',
              'Logging and rate limits, because untrusted model output is calling your API.',
            ],
          },
        ],
      },
      {
        id: 'you',
        heading: 'What it means for your product',
        blocks: [
          {
            type: 'p',
            text: 'If you sell software, build a server — a first production version is two to four weeks. If you buy software, ask vendors for one; it is how your future agents will reach their systems. If you are building agents, look for servers before you write integrations. We build MCP servers for SaaS products and internal systems, and run a one-day design workshop for teams doing it themselves.',
          },
        ],
      },
    ],
    faq: [
      { q: 'Is MCP tied to one AI company?', a: 'It was introduced by Anthropic as an open standard and is now supported across major AI tools and SDKs. Servers you build work with any compatible host.' },
      { q: 'Does MCP replace APIs?', a: 'No. An MCP server sits on top of your API and reshapes it for agents: fewer, task-shaped tools with model-readable descriptions.' },
      { q: 'Is it secure?', a: 'As secure as you build it. Scope auth tightly, validate every input, log every call, and require confirmation for destructive actions. The protocol gives you the hooks; you have to use them.' },
    ],
    related: ['mcp-server-development', 'what-is-an-ai-agent', 'claude-agent-sdk-development'],
  },

  {
    slug: 'agentic-ai-vs-generative-ai',
    title: 'Agentic AI vs Generative AI: The Difference That Matters',
    description:
      'Generative AI produces content; agentic AI gets things done. What separates them, why the distinction changes what you should build, and what each costs.',
    date: '2026-09-19',
    updated: '2026-09-19',
    cover: unsplash('photo-1620641788421-7a1c342ea42e'),
    coverAlt: 'Abstract gradient waves representing generative and agentic AI',
    tags: ['Agentic AI', 'Generative AI', 'Explainer'],
    kind: 'Explainer',
    author: 'hassan',
    intro:
      'Generative AI writes the email. Agentic AI reads the thread, checks the order system, writes the email, sends it and updates the ticket. Same underlying models, completely different products — and most businesses are still buying the first when they need the second.',
    cta: TALK,
    sections: [
      {
        id: 'compare',
        heading: 'The difference in one table',
        blocks: [
          {
            type: 'table',
            caption: 'Generative vs agentic AI',
            headers: ['', 'Generative AI', 'Agentic AI'],
            rows: [
              ['Output', 'Content: text, images, code', 'Outcomes: tasks completed in systems'],
              ['Interaction', 'One prompt, one response', 'Goal in, many steps, result out'],
              ['Uses tools', 'No', 'Yes — APIs, databases, browsers, phones'],
              ['Needs a human in the loop', 'Always — someone acts on the output', 'Only where you decide it should'],
              ['Measured by', 'Quality of the content', 'Task success rate, cost per task'],
              ['Typical build', 'Days', 'Weeks, with evals and guardrails'],
              ['Examples', 'Draft a proposal; summarise a call', 'Qualify every lead; process every invoice; answer every call'],
            ],
          },
        ],
      },
      {
        id: 'why',
        heading: 'Why the distinction changes what you build',
        blocks: [
          {
            type: 'p',
            text: 'Generative AI makes individuals faster: each person does the same job with less typing. Agentic AI changes the job: the process runs without the person for the routine cases. The first is a productivity tool you buy per seat. The second is a system you build once around a specific process, and it is where the measurable return lives.',
          },
          {
            type: 'ul',
            items: [
              'If your goal is "help staff write faster", buy generative tools. Do not build.',
              'If your goal is "this process should run itself for 80% of cases", build an agent.',
              'If you are not sure, list the processes where the same steps happen fifty times a week. Those are agent candidates.',
            ],
          },
        ],
      },
      {
        id: 'risk',
        heading: 'The trade-off',
        blocks: [
          {
            type: 'p',
            text: 'Agentic AI acts, so it can act wrongly. That is why an agent build spends a quarter of its budget on evals, permissions and monitoring that a generative tool never needs. Skip that and you get an agent that works in the demo and fails in production. Fund it and you get a system that takes work off your team’s desk every day.',
          },
        ],
      },
      {
        id: 'cost',
        heading: 'What each costs',
        blocks: [
          {
            type: 'p',
            text: 'Generative tools: $20–$60 per seat per month. Agentic systems: $6k–$60k to build for a single process, $100–$1,500 a month to run, four to twelve weeks to production. We build the second kind, and we start every engagement by checking whether you actually need it.',
          },
        ],
      },
    ],
    faq: [
      { q: 'Is agentic AI just a buzzword?', a: 'The word is overused; the thing is real. Models that plan, use tools and check results are in production across support, sales, finance and operations in 2026.' },
      { q: 'Can we start with generative and move to agentic?', a: 'Yes, and it is a sensible path: generative tools show you where the volume is, and that becomes the first agent.' },
      { q: 'Which is safer?', a: 'Generative, because a person reviews every output. Agentic can be made as safe as you need with approval gates — at the cost of some of the automation.' },
    ],
    related: ['what-is-an-ai-agent', 'top-ai-agent-use-cases-for-business', 'why-ai-agents-fail-in-production'],
  },
];
