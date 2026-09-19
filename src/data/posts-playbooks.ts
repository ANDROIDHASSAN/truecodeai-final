// Founder & buyer playbooks — how to brief, hire, contract and hand over a software or AI
// project. Written from the studio side of the table, including what to demand from us.
import { unsplash, type Block, type Post, type Section } from './post-types';

const P = (text: string): Block => ({ type: 'p', text });
const UL = (...items: string[]): Block => ({ type: 'ul', items });
const OL = (...items: string[]): Block => ({ type: 'ol', items });
const T = (caption: string, headers: string[], rows: string[][]): Block => ({ type: 'table', caption, headers, rows });
const S = (id: string, heading: string, ...blocks: Block[]): Section => ({ id, heading, blocks });
const D = '2026-09-19';

export const playbookPosts: Post[] = [
  {
    slug: 'how-to-write-mvp-requirements',
    title: 'How to Write an MVP Spec a Studio Can Quote',
    description:
      'A one-page MVP spec template that gets you accurate quotes: users, core flows, must-haves vs later, integrations and success metrics — with an example.',
    date: D,
    updated: D,
    cover: unsplash('photo-1581092160562-40aa08e78837'),
    coverAlt: 'Person sketching technical drawings on paper',
    tags: ['MVP', 'Planning', 'Founders'],
    kind: 'Tutorial',
    author: 'hassan',
    intro:
      'Vague briefs get padded quotes. A one-page spec gets honest ones, and it forces decisions you would otherwise make expensively mid-build. Here is the template we wish every founder sent us.',
    sections: [
      S(
        'template',
        'The one-page template',
        OL(
          'The problem, in two sentences, from the user’s point of view.',
          'Users and roles: who uses it, and what each role can do.',
          'The three to five core flows, each as numbered steps.',
          'Must-have for launch vs later — two explicit lists.',
          'Integrations: payments, email, SMS, CRM, anything external.',
          'Platforms: web, iOS, Android, admin panel.',
          'What success looks like in 90 days, as a number.',
          'Constraints: deadline, budget range, compliance needs.',
        ),
      ),
      S(
        'flows',
        'Writing flows that can be priced',
        P('A good flow is concrete: "Customer searches by city, sees a list of tutors with price and rating, books a 30-minute slot, pays by UPI, gets a WhatsApp confirmation." Every noun is a screen or a data field; every verb is a feature. That is what a studio prices.'),
      ),
      S(
        'later',
        'The "later" list is your best friend',
        P('Everything you move to "later" lowers the price and speeds up launch. Chat, reviews, referral programmes, multiple languages and advanced analytics are the usual candidates. Launch with the flows that prove people want the product, then let real usage decide the rest.'),
      ),
      S(
        'example',
        'What to leave out',
        UL(
          'Technology choices, unless you have a strong reason — let the studio justify theirs.',
          'Pixel-perfect designs before flows are settled.',
          'Feature lists copied from competitors.',
        ),
      ),
    ],
    faq: [
      { q: 'What if I don’t know the flows yet?', a: 'That is what a discovery phase is for. One to two weeks turns an idea into flows, designs and a fixed quote.' },
      { q: 'Should I include wireframes?', a: 'Rough sketches help. Polished designs are not needed to get a quote.' },
      { q: 'Will you sign an NDA first?', a: 'Yes, before any detailed discussion if you prefer.' },
    ],
    related: ['mvp-development-cost-2026', 'what-happens-in-a-discovery-workshop', 'fixed-price-vs-time-and-materials'],
  },
  {
    slug: 'questions-to-ask-a-software-agency',
    title: '20 Questions to Ask a Software Agency Before Signing',
    description:
      'The 20 questions that separate good software agencies from risky ones — on team, process, ownership, quality, AI experience and what happens after launch.',
    date: D,
    updated: D,
    cover: unsplash('photo-1600880292203-757bb62b4baf'),
    coverAlt: 'Business people celebrating with a high-five at a desk',
    tags: ['Hiring', 'Outsourcing', 'Founders'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'Every agency has a polished portfolio. These twenty questions get past it. We answer all of them in our proposals; ask any studio you consider to do the same.',
    sections: [
      S(
        'team',
        'Team',
        OL(
          'Who exactly will work on my project, and can I meet them?',
          'Are they employees or subcontractors?',
          'Who is my single point of contact?',
          'What happens if a key person leaves mid-project?',
        ),
      ),
      S(
        'process',
        'Process',
        OL(
          'How often will I see working software?',
          'How do you handle scope changes?',
          'What does a typical week of communication look like?',
          'How do you estimate, and how accurate were your last three estimates?',
        ),
      ),
      S(
        'ownership',
        'Ownership',
        OL(
          'Who owns the code, designs and data?',
          'Are repositories and cloud accounts in my name from day one?',
          'Will you hand over credentials and documentation?',
          'Do you reuse proprietary components I would need to license?',
        ),
      ),
      S(
        'quality',
        'Quality and AI',
        OL(
          'What automated testing do you do?',
          'How do you handle security reviews?',
          'For AI features: how do you evaluate accuracy before launch?',
          'Can I see an eval report or test suite from a past project?',
        ),
      ),
      S(
        'after',
        'After launch',
        OL(
          'What is covered by warranty, and for how long?',
          'What do maintenance and support cost?',
          'Can you help me hire and hand over to an in-house team?',
          'Can I speak to two past clients?',
        ),
      ),
    ],
    faq: [
      { q: 'Which answers are red flags?', a: 'Vague answers on ownership, no working demos until the end, and no way to measure AI quality.' },
      { q: 'Should I choose the cheapest quote?', a: 'Only if the answers to these questions are as good as the others’. Usually they are not.' },
      { q: 'Will you answer these for us?', a: 'Yes — send us the list and we will answer in writing with the proposal.' },
    ],
    related: ['how-to-choose-software-development-company-india', 'red-flags-in-software-development-quotes', 'who-owns-the-code-ip-and-handover'],
  },
  {
    slug: 'red-flags-in-software-development-quotes',
    title: 'Red Flags in Software Development Quotes',
    description:
      'Nine warning signs in a software or AI development quote — from no discovery phase to vague ownership terms — and what a trustworthy quote includes instead.',
    date: D,
    updated: D,
    cover: unsplash('photo-1553729459-efe14ef6055d'),
    coverAlt: 'Hands counting a stack of banknotes',
    tags: ['Pricing', 'Outsourcing', 'Founders'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'A quote is a preview of how a project will go. Read it for what it leaves out as much as for the number at the bottom.',
    sections: [
      S(
        'flags',
        'Nine red flags',
        OL(
          'A fixed price for a vague idea, with no discovery phase.',
          'No breakdown — one number, no milestones.',
          'Payment mostly upfront.',
          'No mention of testing, QA or security.',
          'Ownership and IP terms missing or vague.',
          'Hosting and third-party costs unmentioned.',
          'For AI projects: no evaluation plan or accuracy target.',
          'A timeline that ignores your own review time.',
          'A price far below every other quote without an explanation.',
        ),
      ),
      S(
        'good',
        'What a good quote includes',
        T(
          'Anatomy of a trustworthy quote',
          ['Section', 'What it says'],
          [
            ['Scope', 'Flows, screens, integrations — and what is excluded'],
            ['Milestones', 'Each with a demo and acceptance criteria'],
            ['Payments', 'Tied to milestones'],
            ['Quality', 'Testing, security review, AI evals'],
            ['Ownership', 'All IP assigned to you; accounts in your name'],
            ['Running costs', 'Hosting, APIs, model usage estimates'],
            ['After launch', 'Warranty period, maintenance options'],
          ],
        ),
      ),
      S(
        'compare',
        'Comparing quotes fairly',
        P('Line up quotes by scope, not price. The cheapest quote often excludes the admin panel, testing or deployment. Ask each vendor to confirm the same list of inclusions in writing, then compare.'),
      ),
    ],
    faq: [
      { q: 'Is a big upfront payment always bad?', a: 'A small deposit is normal. Paying most of the price before seeing working software is the risk.' },
      { q: 'Why do quotes vary so much?', a: 'Different assumptions about scope, quality and risk. Aligning assumptions narrows the range fast.' },
      { q: 'Can you review a quote we received?', a: 'Yes. We will tell you honestly what is missing, even if we are not the right fit.' },
    ],
    related: ['questions-to-ask-a-software-agency', 'fixed-price-vs-time-and-materials', 'hidden-costs-of-ai-projects'],
  },
  {
    slug: 'who-owns-the-code-ip-and-handover',
    title: 'Who Owns the Code? IP, NDAs and Handover',
    description:
      'How to make sure you own your software: IP assignment, NDAs, repositories and accounts in your name, open-source licences and a clean handover at the end.',
    date: D,
    updated: D,
    cover: unsplash('photo-1450101499163-c8848c66ca85'),
    coverAlt: 'Person signing a document at a desk',
    tags: ['Contracts', 'Outsourcing', 'Founders'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'Founders discover ownership problems at the worst moments: due diligence, a vendor dispute, a hiring handover. Five minutes on these points at signing avoids all of them. This is general guidance, not legal advice — have your lawyer review your contract.',
    sections: [
      S(
        'contract',
        'In the contract',
        UL(
          'An explicit assignment of all IP created for the project to you, on payment.',
          'A licence for any pre-existing components the vendor reuses, perpetual and transferable.',
          'Confidentiality covering your data, ideas and business information.',
          'A clause listing third-party and open-source components and their licences.',
        ),
      ),
      S(
        'accounts',
        'Accounts in your name from day one',
        OL(
          'Code repositories under your organisation.',
          'Cloud hosting account owned and billed to you.',
          'Domain names and DNS.',
          'App store developer accounts.',
          'Third-party API and AI provider accounts.',
        ),
        P('The vendor gets access as a member, which you can revoke. Nothing important should live in the vendor’s personal accounts.'),
      ),
      S(
        'oss',
        'Open-source licences',
        P('Almost every product uses open-source libraries. Most licences are permissive; a few impose obligations if you distribute the software. Ask for a list of dependencies and their licences at handover, which also helps in due diligence.'),
      ),
      S(
        'handover',
        'At handover',
        P('You should receive the source code, documentation, environment configuration, credentials transfer and a walkthrough recording. We cover this in detail in our handover checklist.'),
      ),
    ],
    faq: [
      { q: 'When does IP transfer?', a: 'Commonly on payment for each milestone. Make sure the clause says so explicitly.' },
      { q: 'Can the vendor reuse my code?', a: 'Not code specific to your product, if the assignment is written properly. Generic utilities may be licensed back to them.' },
      { q: 'Do you sign NDAs?', a: 'Yes, before detailed discussions, and every team member is bound by confidentiality.' },
    ],
    related: ['software-project-handover-checklist', 'questions-to-ask-a-software-agency', 'in-house-team-vs-agency'],
  },
  {
    slug: 'how-to-choose-first-ai-use-case',
    title: 'How to Pick Your First AI Use Case',
    description:
      'A scoring method to choose your company’s first AI project: volume, clarity, data access, risk and measurability — with examples of good and bad first picks.',
    date: D,
    updated: D,
    cover: unsplash('photo-1557426272-fc759fdf7a8d'),
    coverAlt: 'Team gathered around a whiteboard covered in notes',
    tags: ['AI strategy', 'Planning', 'AI agents'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'The first AI project sets the tone for every one after it. Pick one that succeeds visibly and the organisation leans in. Pick an ambitious moonshot and it becomes the reason AI "doesn’t work here".',
    sections: [
      S(
        'score',
        'Score each candidate',
        T(
          'First-project scoring (1–5 each)',
          ['Criterion', 'What a 5 looks like'],
          [
            ['Volume', 'Happens hundreds or thousands of times a month'],
            ['Clarity', 'Everyone agrees what a correct result is'],
            ['Data access', 'Inputs are already digital and reachable'],
            ['Low risk', 'Mistakes are cheap and reversible'],
            ['Measurable', 'Today’s baseline is known or easy to measure'],
          ],
        ),
        P('Add the scores. Pick from the top three the one with an enthusiastic internal owner.'),
      ),
      S(
        'good',
        'Good first picks',
        UL(
          'Answering repetitive customer questions from your documents.',
          'Extracting data from invoices or forms into your system.',
          'Triaging and routing inbound emails or tickets.',
          'Booking and rescheduling appointments.',
        ),
      ),
      S(
        'bad',
        'Poor first picks',
        UL(
          'Anything where one mistake is very costly: pricing decisions, medical advice.',
          'Tasks nobody does consistently today, so there is no baseline.',
          'Projects that depend on data you do not yet collect.',
          'A company-wide "AI assistant for everything".',
        ),
      ),
    ],
    faq: [
      { q: 'How big should the first project be?', a: 'Small enough to show results in 4–8 weeks, real enough that people notice.' },
      { q: 'Who should own it internally?', a: 'The manager of the team whose work changes — not IT alone.' },
      { q: 'Can you help us choose?', a: 'Yes — a short discovery session scores your candidates and recommends one.' },
    ],
    related: ['top-ai-agent-use-cases-for-business', 'ai-automation-roi-calculation', 'ai-pilot-to-production-90-day-plan'],
  },
  {
    slug: 'ai-pilot-to-production-90-day-plan',
    title: 'From AI Pilot to Production: A 90-Day Plan',
    description:
      'A practical 90-day plan to take an AI pilot to production: evals, integrations, supervised launch, monitoring and handover — with the gates between each phase.',
    date: D,
    updated: D,
    cover: unsplash('photo-1504868584819-f8e8b4b6d7e3'),
    coverAlt: 'Laptop showing charts and analytics on a sofa',
    tags: ['AI strategy', 'AI agents', 'Process'],
    kind: 'Tutorial',
    author: 'hassan',
    intro:
      'Most AI pilots never reach production. Not because the demo failed — because nobody planned the unglamorous middle. Here is the plan we run.',
    sections: [
      S(
        'phase1',
        'Days 1–30: prove it on real data',
        OL(
          'Collect 100–300 real examples and agree what a correct outcome is for each.',
          'Build the eval suite before tuning anything.',
          'Iterate prompts, retrieval and tools until the target is met.',
        ),
        P('Gate: the system meets the agreed accuracy on the eval set, including cases it should refuse.'),
      ),
      S(
        'phase2',
        'Days 31–60: make it real',
        OL(
          'Integrate with production systems — read access first, then writes behind approvals.',
          'Add guardrails, logging, tracing and cost controls.',
          'Security review and data-protection check.',
        ),
        P('Gate: end-to-end tests pass in a staging environment with production-like data.'),
      ),
      S(
        'phase3',
        'Days 61–90: supervised launch',
        OL(
          'Launch to a slice of traffic with a human reviewing outputs.',
          'Grade real traces daily; turn failures into new eval cases.',
          'Widen traffic as measured quality holds.',
          'Hand over dashboards, runbooks and the eval suite to the owning team.',
        ),
        P('Gate: quality holds at full traffic for two weeks and the owning team can run it.'),
      ),
    ],
    faq: [
      { q: 'Can it be faster than 90 days?', a: 'Simple assistants can go live in 3–5 weeks. Agents with write actions in regulated settings take the full 90.' },
      { q: 'What kills most pilots?', a: 'No eval set, no production owner, and integrations left until the end.' },
      { q: 'Who owns the system afterwards?', a: 'Your team, with our support if wanted. Handover is part of the plan, not an afterthought.' },
    ],
    related: ['why-ai-agents-fail-in-production', 'hidden-costs-of-ai-projects', 'monitoring-ai-agents-in-production'],
  },
  {
    slug: 'how-to-prepare-data-for-ml',
    title: 'How to Prepare Your Data for a Custom ML Model',
    description:
      'What data a custom ML model needs and how to prepare it: history, cleaning, labelling, defining the target and avoiding leakage — before you hire anyone.',
    date: D,
    updated: D,
    cover: unsplash('photo-1543286386-2e659306cd6c'),
    coverAlt: 'Hand-drawn line chart on paper with a pen and ruler',
    tags: ['Machine learning', 'Data', 'Custom ML'],
    kind: 'Tutorial',
    author: 'engineering',
    intro:
      'Better data beats a better model almost every time. You can do most of this preparation before a single ML engineer is involved, and it will cut the project time and cost.',
    sections: [
      S(
        'target',
        'Define the target first',
        P('Write down exactly what the model should predict and how you would check it: "units of each SKU sold per store per week" or "whether this ticket is a billing issue". An ambiguous target produces an ambiguous model.'),
      ),
      S(
        'collect',
        'Collect and consolidate',
        UL(
          'Pull history from every system into one place with consistent IDs and dates.',
          'Keep raw exports untouched; clean in copies.',
          'Note known gaps: outages, system migrations, periods with unusual events.',
        ),
      ),
      S(
        'clean',
        'Clean and label',
        OL(
          'Remove duplicates and test records.',
          'Standardise units, currencies and categories.',
          'Label examples consistently — write a labelling guide and have two people label a sample to check agreement.',
          'Keep a hold-out set aside that nobody tunes on.',
        ),
      ),
      S(
        'leakage',
        'Avoid leakage',
        P('Leakage is when training data includes information that would not be available at prediction time — like a "refund issued" flag when predicting refunds. It produces models that look brilliant in testing and fail in production. For every input, ask: would we know this at the moment we need the prediction?'),
      ),
    ],
    faq: [
      { q: 'How much data is enough?', a: 'It depends on the task. We run a feasibility check on your data before quoting the full build.' },
      { q: 'Can we use synthetic data?', a: 'Sometimes to supplement, rarely to replace real data. Evaluation must use real data.' },
      { q: 'Is personal data a problem?', a: 'Minimise it, pseudonymise where possible, and make sure you have a lawful basis for use.' },
    ],
    related: ['custom-ml-model-cost', 'custom-ml-model-vs-llm-api', 'ai-for-manufacturing'],
  },
  {
    slug: 'how-to-validate-a-startup-idea',
    title: 'How to Validate a Startup Idea Before Building',
    description:
      'Validate a startup idea in 2–4 weeks before paying for an MVP: customer interviews, a landing page test, a concierge version and the signals that mean go.',
    date: D,
    updated: D,
    cover: unsplash('photo-1472851294608-062f824d29cc'),
    coverAlt: 'Open sign hanging in a shop window',
    tags: ['Startups', 'Founders', 'MVP'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'We build MVPs for a living, and we still tell founders to validate first. A few weeks of cheap tests either give you confidence to build or save you the entire budget.',
    sections: [
      S(
        'interviews',
        'Week 1: talk to customers',
        P('Interview 10–15 people who have the problem. Ask about the last time it happened, what they did, and what it cost them — not whether they like your idea. Past behaviour predicts purchases; compliments do not.'),
      ),
      S(
        'landing',
        'Week 2: the landing page test',
        UL(
          'One page: the problem, your promise, a price, a sign-up or pre-order button.',
          'Drive a small amount of targeted traffic.',
          'Measure sign-up rate, and follow up with everyone who signs up.',
        ),
      ),
      S(
        'concierge',
        'Weeks 3–4: the concierge version',
        P('Deliver the outcome manually for a handful of customers — spreadsheets, WhatsApp, your own time. If they will pay for the manual version, software will make it scale. If they will not pay even for that, software will not fix it.'),
      ),
      S(
        'signals',
        'Go signals',
        T(
          'What "validated" looks like',
          ['Signal', 'Strong', 'Weak'],
          [
            ['Interviews', 'Specific recent pain, workarounds, money spent', 'Polite interest'],
            ['Landing page', 'Clear sign-ups from targeted traffic', 'Clicks, no sign-ups'],
            ['Concierge', 'Customers pay and come back', 'Free users drift away'],
          ],
        ),
      ),
    ],
    faq: [
      { q: 'Can’t I just build the MVP and see?', a: 'You can, but a failed MVP costs months and tens of thousands. Validation costs weeks and very little.' },
      { q: 'Do you help with validation?', a: 'Yes — our Validator tier ($5k–$12k) builds the landing page, waitlist and one manual flow in one to two weeks.' },
      { q: 'What if the results are mixed?', a: 'Narrow the audience or the problem and run another round. Mixed results usually mean too broad a target.' },
    ],
    related: ['top-mistakes-founders-make-building-an-mvp', 'how-to-write-mvp-requirements', 'no-code-vs-custom-mvp'],
  },
  {
    slug: 'dpdp-act-and-ai-compliance-india',
    title: 'DPDP Act and AI: A Compliance Primer for India',
    description:
      'What India’s DPDP Act means for AI projects: consent, purpose limits, data minimisation, processors and breach duties — in plain terms.',
    date: D,
    updated: D,
    cover: unsplash('photo-1521737604893-d14cc237f11d'),
    coverAlt: 'Team meeting around a table in an office',
    tags: ['Compliance', 'India', 'Data protection'],
    kind: 'Explainer',
    author: 'team',
    intro:
      'India’s Digital Personal Data Protection Act, 2023 applies to any business processing personal data of people in India — including every AI system that touches customer data. This primer covers the principles; it is not legal advice, and the implementing rules should be checked with counsel for your specific case.',
    sections: [
      S(
        'principles',
        'The core principles',
        UL(
          'Consent: clear, specific consent for a stated purpose, or another lawful ground the Act allows.',
          'Purpose limitation: use data only for the purpose you collected it for.',
          'Data minimisation: collect only what the purpose needs.',
          'Accuracy and retention: keep data accurate and delete it when the purpose is served.',
          'Security: reasonable safeguards, and notification of breaches.',
          'Rights: individuals can access, correct and erase their data, and withdraw consent.',
        ),
      ),
      S(
        'ai',
        'What it means for AI projects',
        T(
          'DPDP considerations in AI systems',
          ['AI component', 'Question to answer'],
          [
            ['Chat / voice agent', 'Is the privacy notice shown and consent captured before collecting data?'],
            ['Model provider', 'Is the provider a processor under a contract with appropriate terms?'],
            ['Training / fine-tuning', 'Was the data collected for a purpose that covers this use?'],
            ['Logs and traces', 'Is personal data redacted and retention limited?'],
            ['Memory features', 'Can users see and erase what is remembered?'],
          ],
        ),
      ),
      S(
        'practical',
        'Practical steps',
        OL(
          'Map what personal data each AI feature processes and why.',
          'Update privacy notices and consent flows.',
          'Sign processor agreements with AI and hosting providers.',
          'Redact personal data from logs and eval sets.',
          'Build erasure into every store: database, vector index, memory, backups.',
        ),
      ),
    ],
    faq: [
      { q: 'Does DPDP stop us using foreign AI providers?', a: 'The Act allows cross-border transfers except to countries the government restricts. Check current notifications and your sector’s rules.' },
      { q: 'Are chat logs personal data?', a: 'Often, yes — they usually contain names, numbers and details that identify people.' },
      { q: 'Do you build compliance in?', a: 'Yes — consent capture, redaction, retention and erasure are standard in our builds. Legal sign-off stays with your counsel.' },
    ],
    related: ['ai-agent-security-checklist', 'agent-memory-explained', 'what-is-ai-observability'],
  },
  {
    slug: 'software-project-handover-checklist',
    title: 'Software Handover Checklist: What You Must Receive',
    description:
      'The software handover checklist: code, credentials, infrastructure, docs, test suites, AI evals and a recorded walkthrough — before the final payment.',
    date: D,
    updated: D,
    cover: unsplash('photo-1498050108023-c5249f4df085'),
    coverAlt: 'Laptop with code on a desk in a bright room',
    tags: ['Handover', 'Outsourcing', 'Process'],
    kind: 'Tutorial',
    author: 'engineering',
    intro:
      'A handover is only complete when someone who was not on the project could run, change and deploy it. Use this checklist before the final payment, with any vendor, including us.',
    sections: [
      S(
        'code',
        'Code and infrastructure',
        UL(
          'All repositories under your organisation, with full history.',
          'Infrastructure as code or a written record of every cloud resource.',
          'Environment variables documented (values transferred securely, not in docs).',
          'CI/CD pipelines running under your accounts.',
        ),
      ),
      S(
        'access',
        'Access and credentials',
        UL(
          'Admin access to cloud, domains, app stores, email, analytics and third-party APIs.',
          'Vendor access reduced or removed on your schedule.',
          'Secrets rotated after the vendor’s access is removed.',
        ),
      ),
      S(
        'docs',
        'Documentation',
        OL(
          'How to run it locally in under an hour.',
          'Architecture overview: components, data flow, integrations.',
          'Deployment and rollback steps.',
          'Runbook for common incidents.',
          'List of dependencies and licences.',
        ),
      ),
      S(
        'quality',
        'Quality assets',
        UL(
          'Automated tests, passing in CI.',
          'For AI features: the eval suite, datasets, latest results and how to re-run them.',
          'Monitoring dashboards and alert configuration.',
        ),
      ),
      S(
        'walkthrough',
        'The walkthrough',
        P('A recorded session where the vendor walks your team through the codebase, deploys a small change and answers questions. It is the cheapest insurance you will ever buy.'),
      ),
    ],
    faq: [
      { q: 'When should handover planning start?', a: 'On day one — accounts in your name and documentation as you go make the final handover a formality.' },
      { q: 'What if the vendor refuses some items?', a: 'Check the contract. Code and credentials for work you paid for should be yours.' },
      { q: 'Do you offer support after handover?', a: 'Yes, optionally — a retainer or ad-hoc support while your team settles in.' },
    ],
    related: ['who-owns-the-code-ip-and-handover', 'in-house-team-vs-agency', 'app-maintenance-cost-per-year'],
  },
  {
    slug: 'what-happens-in-a-discovery-workshop',
    title: 'What Happens in a Discovery Workshop (and Why Pay)',
    description:
      'What a paid discovery phase includes — workshops, user flows, architecture, risks, a fixed quote — and why it saves more than it costs.',
    date: D,
    updated: D,
    cover: unsplash('photo-1516534775068-ba3e7458af70'),
    coverAlt: 'Woman thinking with a pencil at her laptop',
    tags: ['Process', 'Planning', 'Founders'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'Paying before the build feels like a delay. In practice, one to two weeks of discovery is the cheapest way to make sure the build is the right one, and to get a price you can trust.',
    sections: [
      S(
        'what',
        'What happens',
        OL(
          'Kickoff workshop: goals, users, constraints, success metrics.',
          'User flows and rough screens for every core path.',
          'Technical review: integrations, data, security and — for AI — a feasibility test on real data.',
          'Architecture and plan: components, milestones, risks.',
          'A fixed quote for the build, with scope and exclusions.',
        ),
      ),
      S(
        'why',
        'Why it pays for itself',
        UL(
          'Surfaces the expensive surprises — a missing API, messy data — before they cost build time.',
          'Replaces a padded, risk-loaded quote with an honest one.',
          'Gives you documents you own and can take to any vendor.',
        ),
      ),
      S(
        'deliverables',
        'Deliverables you keep',
        T(
          'Typical discovery outputs',
          ['Deliverable', 'Use'],
          [
            ['Scope document', 'What is in and out of the build'],
            ['User flows and wireframes', 'Shared understanding of the product'],
            ['Architecture outline', 'Technical plan and risks'],
            ['AI feasibility results', 'Evidence the AI part will work on your data'],
            ['Milestone plan and quote', 'Fixed price and timeline'],
          ],
        ),
      ),
    ],
    faq: [
      { q: 'How long does discovery take?', a: 'One to two weeks for most MVPs and agent projects.' },
      { q: 'Is it credited against the build?', a: 'Ask your vendor; many credit part of it. We tell you our terms upfront.' },
      { q: 'What if we decide not to build?', a: 'You keep all deliverables. Sometimes discovery’s best result is a decision not to build.' },
    ],
    related: ['how-to-write-mvp-requirements', 'fixed-price-vs-time-and-materials', 'mvp-timeline-how-long'],
  },
];
