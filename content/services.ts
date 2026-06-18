export type ServicePage = {
  slug: string;
  title: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  features: { title: string; desc: string }[];
  outcomes: { value: string; label: string }[];
  faq: { q: string; a: string }[];
  relatedSolutions: string[];
  cta: string;
};

export const services: ServicePage[] = [
  {
    slug: 'ai',
    title: 'AI Development Services — Agents, Voice AI & Custom ML',
    metaDescription:
      'TrueCodeAI builds production-grade AI systems: AI agents, voice AI phone agents, LLM applications, custom ML models and MLOps pipelines. 50 engineers. Ships in weeks.',
    headline: 'AI that ships to production. Not just a demo.',
    subheadline:
      'We build AI agents, voice AI, RAG systems and custom ML models that run in your production environment under real workload — not proofs of concept that fall apart after the demo.',
    features: [
      {
        title: 'AI Agents',
        desc: 'Autonomous agents that qualify leads, answer support, route tickets, process documents and run multi-step workflows — connected to your CRM, helpdesk and communication tools.',
      },
      {
        title: 'Voice AI',
        desc: 'Phone agents that answer calls, book appointments, qualify callers and handle follow-ups in a natural human-sounding voice — 24/7, on your existing phone number.',
      },
      {
        title: 'LLM Applications',
        desc: 'RAG systems on your private data, LLM-powered search, document summarisation, contract analysis and intelligent Q&A — built on GPT-4, Claude or open-source models.',
      },
      {
        title: 'Custom ML Models',
        desc: 'Forecasting, classification, anomaly detection, computer vision and NLP models trained on your proprietary data and deployed to production with full monitoring.',
      },
      {
        title: 'Fine-Tuning & Prompting',
        desc: 'Fine-tune foundation models on your domain vocabulary. Structured prompt engineering and evaluation frameworks for reliable, consistent outputs at scale.',
      },
      {
        title: 'MLOps & Monitoring',
        desc: 'Model deployment, versioning, A/B testing, drift detection and automated retraining pipelines — so your AI keeps performing after launch.',
      },
    ],
    outcomes: [
      { value: '3 wks', label: 'avg. to first production AI system' },
      { value: '80%', label: 'reduction in manual routing & classification' },
      { value: '24/7', label: 'AI voice and support coverage' },
    ],
    faq: [
      {
        q: 'What AI models does TrueCodeAI use?',
        a: 'We are model-agnostic and choose the best fit per project: OpenAI GPT-4o, Anthropic Claude, Google Gemini, Meta Llama, Mistral, Whisper for voice transcription, and specialised open-source models where appropriate. We also fine-tune models on client data.',
      },
      {
        q: 'How long does an AI agent take to build?',
        a: 'A focused AI agent — a sales qualification agent or a phone booking agent — typically takes 2–4 weeks from kickoff to production deployment, including integrations with your existing tools.',
      },
      {
        q: 'Can TrueCodeAI train a model on my private data?',
        a: 'Yes. We handle the full ML pipeline: data cleaning and preparation, model selection, training, evaluation, deployment and ongoing monitoring. We have worked with structured databases, PDF document sets, call transcripts and image libraries.',
      },
      {
        q: 'What is the difference between an AI agent and traditional automation?',
        a: 'Traditional automation follows fixed rules: if X then Y. AI agents understand natural language, handle ambiguity, reason over context and make decisions — they handle the edge cases that rule-based systems cannot.',
      },
    ],
    relatedSolutions: [
      'ai-voice-receptionist-small-business',
      'custom-ai-support-chatbot-business',
      'ai-lead-qualification-agent',
      'ai-answering-service-hvac',
    ],
    cta: 'Scope your AI system',
  },
  {
    slug: 'automation',
    title: 'Business Process Automation — AI Workflows & Zero-Touch Ops',
    metaDescription:
      'TrueCodeAI maps your manual workflows and automates them: document processing, follow-ups, scheduling, reporting and data pipelines. From idea to live automation in weeks.',
    headline: 'Your busywork, automated. Your team, freed.',
    subheadline:
      'We analyse your operations, identify where your team is doing repetitive work, and replace that work with automated systems — without disrupting the existing tools they already use.',
    features: [
      {
        title: 'Workflow Automation',
        desc: 'End-to-end process automation: lead routing, approval chains, onboarding sequences, billing triggers and notification workflows — triggered by events in your existing systems.',
      },
      {
        title: 'Document AI',
        desc: 'Automated extraction from invoices, contracts, intake forms, insurance documents and permits — structured data out, manual data entry eliminated.',
      },
      {
        title: 'Scheduled Tasks & Triggers',
        desc: 'Time-based and event-based automation: appointment reminders, renewal notices, report generation, follow-up sequences and data sync jobs that run without anyone touching them.',
      },
      {
        title: 'Reporting Automation',
        desc: 'Automated dashboards and scheduled reports delivered to your team via email or Slack — operational data visible without anyone pulling it manually.',
      },
      {
        title: 'Zero-Touch Data Pipelines',
        desc: 'ETL pipelines that move, transform and sync data between your CRM, ERP, accounting system and other tools automatically — no more copy-paste between tabs.',
      },
      {
        title: 'Custom Automation Stack',
        desc: 'Where off-the-shelf tools hit limits, we build custom automation infrastructure: event queues, retry logic, audit trails and failure alerting.',
      },
    ],
    outcomes: [
      { value: '70%', label: 'avg. reduction in manual data entry' },
      { value: '48 hrs', label: 'typical first automation live' },
      { value: '99.9%', label: 'pipeline uptime on production builds' },
    ],
    faq: [
      {
        q: 'Do you use Zapier or Make for automation?',
        a: 'We start with the right tool for the job — sometimes that is Zapier, Make or n8n for standard integrations. When off-the-shelf tools hit limits (volume, complex logic, custom APIs), we build custom automation infrastructure that gives you full control and lower long-term cost.',
      },
      {
        q: 'How do you choose which processes to automate first?',
        a: 'We start with an audit of your operations — mapping every manual step by volume, error rate and time cost. We prioritise the highest-impact automations first (typically the ones that happen most often and take the most time) and build from there.',
      },
      {
        q: 'Will automation break if our existing software updates?',
        a: 'We build with API versioning and error handling in mind. All automations include failure alerting, retry logic and an audit trail so you know exactly what ran, when, and what failed. We also provide ongoing monitoring.',
      },
      {
        q: 'Can you automate processes that involve physical documents?',
        a: 'Yes. Using document AI (OCR + LLM extraction), we can process PDFs, scanned documents, email attachments and web forms — extracting structured data and routing it to the right system automatically.',
      },
    ],
    relatedSolutions: [
      'dental-appointment-reminder-automation',
      'automated-invoicing-electricians',
      'client-document-collection-accounting-firms',
      'renewal-automation-insurance-agencies',
    ],
    cta: 'Map your automation opportunities',
  },
  {
    slug: 'crm',
    title: 'Custom CRM Development — Built Around Your Sales Process',
    metaDescription:
      'Generic CRMs force your team to work around the tool. TrueCodeAI builds custom CRMs shaped to your exact pipeline, terminology and workflow. Ships in 4–6 weeks.',
    headline: 'A CRM that fits your business. Not the other way around.',
    subheadline:
      'Salesforce makes you adapt to its logic. We build a CRM around yours — your pipeline stages, your terminology, your workflow, your team size. You own the code.',
    features: [
      {
        title: 'Custom Pipeline Builder',
        desc: 'Pipeline stages, deal properties and status transitions built around your actual sales process — not a generic template you have to shoehorn your deals into.',
      },
      {
        title: 'Lead & Contact Management',
        desc: 'Lead capture from all your sources (website, ads, referrals), de-duplication, scoring, assignment rules and activity tracking in one clean interface.',
      },
      {
        title: 'Client Portal',
        desc: 'A branded portal where clients can view project status, upload documents, sign contracts, approve work and message your team — without logging into your internal tools.',
      },
      {
        title: 'Automated Follow-Ups',
        desc: 'Sequence-based follow-up automation: email, SMS and WhatsApp triggered by pipeline stage, time elapsed or client action — so no lead falls through the cracks.',
      },
      {
        title: 'Reporting & Dashboards',
        desc: 'Real-time dashboards showing pipeline value, conversion rates, team performance and forecast — built on your actual data, not sample reports.',
      },
      {
        title: 'Third-Party Integrations',
        desc: 'Bi-directional sync with your email, calendar, phone system, accounting software and any tools your team already uses — the CRM fits into your existing stack.',
      },
    ],
    outcomes: [
      { value: '4–6 wks', label: 'typical CRM delivery timeline' },
      { value: '10k+', label: 'users on our largest CRM deployment' },
      { value: '$0/mo', label: 'SaaS licence fees on custom builds' },
    ],
    faq: [
      {
        q: 'Why build a custom CRM instead of using Salesforce or HubSpot?',
        a: 'Generic CRMs charge $50–200+ per seat per month and force your team to adapt to their logic. A custom CRM is a one-time build cost with zero per-seat fees, matches your exact workflow, and you own the code. For teams of 5–50, a custom CRM typically breaks even within 12–18 months.',
      },
      {
        q: 'Can you migrate data from our current CRM?',
        a: 'Yes. Data migration is part of every CRM project — we clean, map and import your existing contacts, deals, notes and activity history from Salesforce, HubSpot, Pipedrive, spreadsheets, or any exportable source.',
      },
      {
        q: 'How long does a CRM build take?',
        a: 'A focused CRM for a team of 10–30 users typically takes 4–6 weeks from kickoff to production — including data model, pipeline, integrations, reporting and team training.',
      },
      {
        q: 'Does TrueCodeAI provide ongoing CRM support?',
        a: 'Yes. Post-launch, we offer a monthly retainer that covers new features, integrations, performance tuning and ongoing support as your team grows and your process evolves.',
      },
    ],
    relatedSolutions: [
      'lead-routing-crm-real-estate-teams',
      'b2b-ordering-portal-distributors',
      'candidate-tracking-software-staffing-agencies',
      'client-intake-automation-law-firms',
    ],
    cta: 'Scope your custom CRM',
  },
  {
    slug: 'integrations',
    title: 'System Integrations & API Development — Connect Your Tech Stack',
    metaDescription:
      'TrueCodeAI connects your disconnected tools: CRM, ERP, accounting, scheduling, payment processors and third-party APIs. Custom integrations built to replace manual data transfer.',
    headline: 'Your tools should talk to each other. We make that happen.',
    subheadline:
      "When your CRM doesn't talk to your accounting system, someone on your team is copying data between them every day. We build the integrations that make that disappear.",
    features: [
      {
        title: 'REST & GraphQL APIs',
        desc: 'Custom API development — RESTful or GraphQL — for your internal services, mobile apps or partner integrations. Full documentation, versioning and rate limiting included.',
      },
      {
        title: 'Third-Party API Integrations',
        desc: 'Integrations with payment processors (Stripe, Razorpay), communication platforms (Twilio, WhatsApp Business, SendGrid), mapping (Google Maps), storage (AWS S3) and any API with documentation.',
      },
      {
        title: 'Webhook Systems',
        desc: 'Real-time event-driven integration: when something happens in System A, System B is updated instantly — no polling, no lag, no manual sync.',
      },
      {
        title: 'Zapier & Make Alternatives',
        desc: 'When Zapier hits its limits (volume, logic, cost), we build the same workflow as custom code — faster, cheaper at scale, with full control and no per-task pricing.',
      },
      {
        title: 'ERP & Accounting Sync',
        desc: 'Bi-directional sync between your CRM, ERP, accounting platform (QuickBooks, Xero, Tally) and fulfilment systems — inventory, invoices and orders always in sync.',
      },
      {
        title: 'Data Migration & ETL',
        desc: 'One-time or ongoing ETL pipelines that move, transform and load data between systems — including legacy databases, spreadsheets, CSV feeds and proprietary formats.',
      },
    ],
    outcomes: [
      { value: '0 hrs', label: 'manual data re-entry after integration' },
      { value: '<200ms', label: 'avg. webhook latency on our integrations' },
      { value: '50+', label: 'third-party platforms integrated' },
    ],
    faq: [
      {
        q: 'Our current system has no API — can you still integrate it?',
        a: 'In many cases, yes. Where a formal API is absent, we can often use browser automation, email parsing, CSV file monitoring or database-level access to create an effective integration. We assess the options during scoping.',
      },
      {
        q: 'How do you handle integration failures?',
        a: 'Every integration we build includes retry logic, dead letter queues for failed events, alerting when thresholds are exceeded, and an audit log of every record transferred. You always know what moved, when, and whether it succeeded.',
      },
      {
        q: 'Can you replace our Zapier workflows?',
        a: 'Yes, and it typically reduces cost at scale. We analyse your existing Zap flows, rebuild them as custom code, and deploy on infrastructure you control. For high-volume workflows, the payback period is usually under 6 months.',
      },
      {
        q: 'What does integration development cost?',
        a: 'A standard two-system integration (CRM to accounting, for example) typically takes 1–3 weeks and is priced as a fixed project. Complex multi-system integrations are scoped individually — reach out and we will scope it for free within 48 hours.',
      },
    ],
    relatedSolutions: [
      'b2b-ordering-portal-distributors',
      'inventory-sync-software-auto-parts',
      'load-tracking-software-trucking',
      'client-document-collection-accounting-firms',
    ],
    cta: 'Scope your integration',
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return services.find((s) => s.slug === slug);
}
