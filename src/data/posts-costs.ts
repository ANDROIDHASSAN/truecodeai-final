// Cost & pricing cluster — buyer-intent posts. Numbers match the service pages and the
// calculator (src/data/estimate.ts); third-party prices are described structurally, not quoted.
import { unsplash, type Block, type Post, type Section } from './post-types';

const P = (text: string): Block => ({ type: 'p', text });
const UL = (...items: string[]): Block => ({ type: 'ul', items });
const OL = (...items: string[]): Block => ({ type: 'ol', items });
const T = (caption: string, headers: string[], rows: string[][]): Block => ({ type: 'table', caption, headers, rows });
const S = (id: string, heading: string, ...blocks: Block[]): Section => ({ id, heading, blocks });
const D = '2026-09-19';

export const costPosts: Post[] = [
  {
    slug: 'voice-ai-agent-cost-per-minute',
    title: 'Voice AI Agent Cost Per Minute: The Real Math',
    description:
      'What a voice AI agent really costs per minute of call — telephony, speech-to-text, the LLM, text-to-speech — plus the build cost and when it beats a human.',
    date: D,
    updated: D,
    cover: unsplash('photo-1553484771-371a605b060b'),
    coverAlt: 'Person reading a printed report with charts',
    tags: ['Voice agents', 'Pricing', 'Cost'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'Vendors love quoting a single "per minute" price for voice agents. That number hides five separate meters, and which one dominates depends on your call pattern. Here is how we break it down for clients before they commit.',
    sections: [
      S(
        'meters',
        'The five meters running on every call',
        P('A voice agent call is a pipeline, and every stage bills separately. Knowing the stages lets you see which lever actually moves your bill.'),
        OL(
          'Telephony — the phone number and the per-minute carrier charge for inbound or outbound calls.',
          'Speech-to-text — streaming transcription of the caller, billed per audio minute.',
          'The language model — billed per token, so it scales with how much the agent says and how much context it re-reads each turn.',
          'Text-to-speech — the synthetic voice, billed per character or per minute of generated audio.',
          'Orchestration and hosting — the server that glues it together, plus logging and recordings storage.',
        ),
        P('On a typical booking call, speech-to-text and text-to-speech together are usually the largest share. The LLM becomes the largest share only when prompts are long and the conversation runs many turns — which is exactly what prompt caching and tighter prompts fix.'),
      ),
      S(
        'ranges',
        'Typical all-in running cost',
        T(
          'Indicative per-minute running cost ranges, 2026 (varies by provider and region)',
          ['Setup', 'What it uses', 'Relative cost', 'When it fits'],
          [
            ['Budget stack', 'Standard STT, compact LLM, standard voice', 'Lowest', 'High-volume reminders, simple FAQs'],
            ['Balanced stack', 'Low-latency STT, mid-tier LLM, natural voice', 'Medium', 'Bookings, qualification, most clinics'],
            ['Premium stack', 'Best STT, frontier LLM, cloned brand voice', 'Highest', 'Sales calls where tone converts'],
          ],
        ),
        P('Provider prices change several times a year, so we price every project against the current rate cards at kickoff and give you a per-minute figure in the proposal. What does not change is the shape: the balanced stack is right for most businesses, and the premium stack only pays back on calls where the voice itself sells.'),
      ),
      S(
        'build',
        'The build cost sits on top',
        P('Running cost is only half of it. Building the agent — call flows, calendar or CRM integration, the eval suite, human hand-off and consent handling — is a one-time project. Our fixed-price ranges are $8k–$18k for a booking line, $12k–$25k for a sales line that qualifies and routes hot leads, and $20k–$40k for combined inbound and outbound with reminders.'),
        P('Integrations are the swing factor. A clean calendar API is a day of work; a legacy practice-management system with no API can be two weeks.'),
      ),
      S(
        'vs-human',
        'When it beats a human receptionist',
        UL(
          'After-hours and overflow calls: the agent answers calls that would otherwise go to voicemail — which is pure recovered revenue.',
          'Repetitive, structured calls: bookings, reschedules, order status, reminders.',
          'Volume spikes: a campaign or a festival weekend does not need extra hiring.',
        ),
        P('It does not beat a skilled human on complaints, negotiations or emotionally loaded calls. The right design routes those to a person within seconds — the agent handles the routine so your people handle the rest.'),
      ),
    ],
    faq: [
      { q: 'Is a cheaper per-minute rate always better?', a: 'No. A cheaper speech model that mishears names or dates causes failed bookings, and one failed booking costs more than thousands of minutes of the better model.' },
      { q: 'Can we cap the monthly bill?', a: 'Yes. We set per-call time limits, daily spend alerts and a hard monthly ceiling at the orchestration layer, so a runaway loop can never surprise you.' },
      { q: 'Do recordings add cost?', a: 'Storage is cheap, but retention has compliance implications. We store what your consent notice covers and delete on schedule.' },
    ],
    related: ['ai-voice-agent-for-clinics', 'voice-agent-vs-ivr', 'how-we-build-a-voice-ai-agent-tutorial'],
    cta: { title: 'Want your per-minute number?', body: 'Tell us your call volume and call types — we reply with a running-cost estimate and a fixed build price within 48 hours.' },
  },
  {
    slug: 'whatsapp-business-api-cost-india',
    title: 'WhatsApp Business API Cost in India, Explained',
    description:
      'How WhatsApp Business API pricing works in India — message categories, the free service window, provider fees — and what an AI agent on top costs to build.',
    date: D,
    updated: D,
    cover: unsplash('photo-1509395176047-4a66953fd231'),
    coverAlt: 'Hand holding a phone showing a minimal messaging app',
    tags: ['WhatsApp', 'Pricing', 'India'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'Most WhatsApp cost confusion comes from mixing up three separate bills: what Meta charges, what your Business Solution Provider charges, and what it costs to build the agent. Separate them and the numbers get simple.',
    sections: [
      S(
        'meta',
        'Bill one: what Meta charges',
        P('Meta prices WhatsApp Business messages by category and by the recipient’s country. Business-initiated template messages fall into categories — marketing, utility (order updates, reminders) and authentication (OTPs) — and each has its own rate for Indian numbers. Marketing is the most expensive category; utility and authentication are much cheaper.'),
        P('The important part for support agents: when a customer messages you first, you can reply freely within the customer service window. An AI agent that mostly answers inbound questions therefore spends very little on Meta fees. The bill grows when you send outbound marketing templates at scale.'),
        P('Meta revises the rate card periodically, so check the current Indian rates on Meta’s pricing page before you budget a campaign.'),
      ),
      S(
        'bsp',
        'Bill two: the provider fee',
        P('Unless you connect directly to the Cloud API, you go through a Business Solution Provider (BSP). BSPs charge a platform fee — monthly, per message markup, or both — in exchange for a dashboard, template approval help and support.'),
        UL(
          'Direct Cloud API: no BSP markup, but your team or studio handles setup, webhooks and template management.',
          'BSP with dashboard: faster start and a UI for your team, at a monthly cost.',
          'Hybrid: a BSP for the shared inbox, with the AI agent connected through their API.',
        ),
      ),
      S(
        'build',
        'Bill three: building the AI agent',
        T(
          'Our WhatsApp AI agent tiers',
          ['Tier', 'Scope', 'Timeline', 'Price'],
          [
            ['FAQ + lead capture', 'Answers from your docs, collects leads', '2–3 weeks', '₹3.5L – ₹8L'],
            ['Bookings / orders', 'Calendar, POS or store integration', '3 weeks', '₹8L – ₹17L'],
            ['Full support agent', 'Status, returns, tickets, CRM, hand-off', '4–6 weeks', '₹17L – ₹38L'],
          ],
        ),
        P('Running the agent adds LLM usage per conversation, which for a well-built support agent is typically a small fraction of the value of a resolved query.'),
      ),
      S(
        'save',
        'Four ways to keep the total low',
        OL(
          'Design for inbound: let customers start the chat from your website, ads and packaging — replies inside the service window are free.',
          'Use utility templates for order and appointment updates instead of marketing templates.',
          'Keep the agent’s prompts short and cached so LLM cost per chat stays flat as volume grows.',
          'Hand off to humans early on complex cases instead of letting the agent loop.',
        ),
      ),
    ],
    faq: [
      { q: 'Do I need a BSP?', a: 'No. The Cloud API is available directly from Meta. A BSP is worth it if your team wants a ready-made shared inbox and campaign tools.' },
      { q: 'Can the agent send promotional messages?', a: 'Only through approved templates to users who opted in. We build opt-in capture and opt-out handling into every agent.' },
      { q: 'Will my number get banned?', a: 'Numbers get restricted for spam-like behaviour and low quality ratings. Opt-in discipline and useful, non-spammy templates keep the rating healthy.' },
    ],
    related: ['whatsapp-ai-agent-for-business-india', 'how-we-build-a-whatsapp-ai-agent-step-by-step', 'top-ai-automation-ideas-small-business-india'],
  },
  {
    slug: 'app-maintenance-cost-per-year',
    title: 'How Much Does App Maintenance Cost Per Year?',
    description:
      'Budget 15–25% of the build cost per year to keep an app healthy. What that money buys — hosting, updates, security, OS changes — and how to keep it down.',
    date: D,
    updated: D,
    cover: unsplash('photo-1558618666-fcd25c85cd64'),
    coverAlt: 'Engineer repairing electronic hardware with a soldering iron',
    tags: ['Maintenance', 'Pricing', 'Startups'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'Launch is not the finish line; it is the point where the meter starts. Founders who budget only for the build get surprised in month four. Here is what maintenance really costs and what it buys.',
    sections: [
      S(
        'rule',
        'The 15–25% rule',
        P('Across the products we run for clients, annual maintenance lands between 15% and 25% of the original build cost. A $40k MVP costs roughly $6k–$10k a year to keep healthy — before any new features.'),
        P('The low end applies to simple apps on managed infrastructure with few integrations. The high end applies to apps with payments, many third-party APIs, mobile apps on both stores, or AI features whose models and prompts need re-evaluation.'),
      ),
      S(
        'what',
        'What the money buys',
        T(
          'Where a typical maintenance budget goes',
          ['Item', 'What it covers', 'Share'],
          [
            ['Hosting & services', 'Servers, database, email, storage, monitoring', '20–35%'],
            ['Dependency & OS updates', 'Framework upgrades, iOS/Android releases, store policy changes', '20–30%'],
            ['Bug fixes & support', 'Issues found by real users, small tweaks', '20–30%'],
            ['Security', 'Patches, audits, certificate and key rotation', '10–15%'],
            ['AI upkeep', 'Model version changes, eval re-runs, prompt tuning', '0–20%'],
          ],
        ),
      ),
      S(
        'lower',
        'How to keep it at the low end',
        UL(
          'Choose boring, popular technology. Obscure frameworks cost more to upgrade and to hire for.',
          'Use managed services for databases, auth and email instead of self-hosting.',
          'Ship with automated tests and CI from day one — they make every future update cheaper.',
          'Keep integrations behind a thin adapter layer so a vendor change touches one file.',
          'For AI features, keep an eval suite so model upgrades are a test run, not a gamble.',
        ),
      ),
      S(
        'models',
        'Retainer or pay-as-you-go?',
        P('A monthly retainer buys guaranteed response times and a team that already knows your code. Pay-as-you-go is cheaper for quiet apps but slower when something breaks. Most of our clients start with a small retainer in the first six months after launch — when most issues surface — and scale it down once the product settles.'),
      ),
    ],
    faq: [
      { q: 'Can I skip maintenance for a year?', a: 'You can, but deferred updates compound. Skipping a year of framework and OS updates often turns a routine upgrade into a mini-rebuild.' },
      { q: 'Is maintenance included in your build price?', a: 'Every build includes a warranty period for defects. Ongoing maintenance is a separate, optional retainer.' },
      { q: 'Do app store updates really force work?', a: 'Yes. Apple and Google raise minimum SDK and privacy requirements regularly; apps that fall behind can be blocked from updating.' },
    ],
    related: ['mvp-development-cost-2026', 'software-project-handover-checklist', 'hidden-costs-of-ai-projects'],
  },
  {
    slug: 'rag-chatbot-development-cost',
    title: 'RAG Chatbot Cost: From $6k Pilots to Enterprise',
    description:
      'What a retrieval-augmented (RAG) chatbot costs to build and run in 2026 — by tier — and the four factors that move the price: data, accuracy, access and scale.',
    date: D,
    updated: D,
    cover: unsplash('photo-1427504494785-3a9ca7044f45'),
    coverAlt: 'Person walking down a library aisle lined with books',
    tags: ['RAG', 'Pricing', 'AI agents'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'A chatbot that answers from your own documents is the most common first AI project we build. The price range is wide because "answer from our docs" hides very different amounts of work. Here is how it splits.',
    sections: [
      S(
        'tiers',
        'Cost by tier',
        T(
          'RAG assistant tiers, 2026 studio pricing',
          ['Tier', 'What you get', 'Timeline', 'Typical cost'],
          [
            ['Pilot', 'One clean document set, web widget, basic evals', '2–3 weeks', '$6k – $12k'],
            ['Production assistant', 'Several sources, citations, feedback loop, analytics', '3–5 weeks', '$12k – $25k'],
            ['Enterprise knowledge', 'Permissions per user, many connectors, audit, SSO', '6–10 weeks', '$30k – $70k'],
          ],
        ),
      ),
      S(
        'drivers',
        'What moves the price',
        OL(
          'Data mess. Clean PDFs and a help centre are cheap. Scanned documents, spreadsheets with meaning in the layout, and wikis full of outdated pages need cleaning and parsing work.',
          'Accuracy bar. An internal assistant can be right 90% of the time with citations. A customer-facing bot for regulated products needs a higher bar and a much larger eval set.',
          'Access control. If different users may see different documents, retrieval must respect permissions — this is often the single biggest cost jump.',
          'Freshness. A nightly re-index is simple; real-time sync with a CRM or ticketing system is not.',
        ),
      ),
      S(
        'running',
        'Running cost',
        P('Running cost has three parts: the LLM per question, embeddings when documents change, and the vector database. For most business assistants this is modest compared with the build, and it scales with usage — a quiet internal bot costs very little; a public bot on a busy site needs caching and a cheaper model for simple questions.'),
      ),
      S(
        'avoid',
        'The expensive mistake',
        P('The costliest mistake is skipping evaluation. Without a set of real questions and expected answers, nobody can tell whether a change made the bot better or worse, and teams burn weeks tweaking prompts by feel. We build the eval set in week one, before the first prompt.'),
      ),
    ],
    faq: [
      { q: 'Can we start with the pilot and grow?', a: 'Yes — that is what we recommend. The pilot’s ingestion pipeline and eval set carry straight into the production tier.' },
      { q: 'Does the data leave our control?', a: 'We deploy in your cloud account where required, and use model providers with no-training-on-your-data terms.' },
      { q: 'How accurate will it be?', a: 'We agree a target on your own question set before building, and report against it every week.' },
    ],
    related: ['what-is-rag-retrieval-augmented-generation', 'how-we-build-a-rag-assistant-on-company-docs', 'rag-vs-fine-tuning'],
  },
  {
    slug: 'custom-ml-model-cost',
    title: 'How Much Does a Custom ML Model Cost in 2026?',
    description:
      'Custom machine learning model costs by type — classifiers, forecasting, vision — from $8k to $120k, with the data, accuracy and MLOps factors behind each.',
    date: D,
    updated: D,
    cover: unsplash('photo-1581093588401-fbb62a02f120'),
    coverAlt: 'Scientist in safety glasses looking closely at an experiment',
    tags: ['Machine learning', 'Pricing', 'Custom ML'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'A custom model is the right call when an off-the-shelf LLM cannot learn your specific pattern — your demand curve, your defect types, your risk signals. Here is what one costs, and why the data usually matters more than the model.',
    sections: [
      S(
        'tiers',
        'Cost by model type',
        T(
          'Custom ML project tiers',
          ['Type', 'Examples', 'Timeline', 'Typical cost'],
          [
            ['Classifier / extractor', 'Ticket routing, lead scoring, document fields', '3–5 weeks', '$8k – $20k'],
            ['Forecast / ranking', 'Demand forecasting, recommendations, pricing', '5–8 weeks', '$20k – $45k'],
            ['Vision / multi-model', 'Defect detection, shelf audits, pipelines', '8–14 weeks', '$45k – $120k'],
          ],
        ),
      ),
      S(
        'data',
        'Data is the real budget line',
        P('Roughly half of every ML project is data work: finding it, cleaning it, labelling it and agreeing on what "correct" means. If you have two years of clean sales history, a forecast model is quick. If the history lives in spreadsheets with changing column names, budget extra time for the cleanup.'),
        UL(
          'Labelled examples: classifiers usually need a few hundred to a few thousand examples per class.',
          'History: forecasting needs enough seasons to learn from — ideally two or more years.',
          'Images: vision models need examples of every defect type, in the real lighting of your line.',
        ),
      ),
      S(
        'mlops',
        'Deployment and upkeep',
        P('A model in a notebook is not a product. Production means an API or batch job, monitoring for drift, and a retraining schedule. We include deployment and monitoring in every tier, and budget retraining as part of maintenance — typically quarterly for forecasting and whenever the input distribution shifts for classifiers.'),
      ),
      S(
        'llm-first',
        'Check whether you need one at all',
        P('Before building a custom model we test whether a general LLM with good prompts solves the problem. For text tasks with little data it often does, and it is cheaper to start. Custom models win on volume, latency, cost per prediction and on numeric or visual patterns LLMs are poor at.'),
      ),
    ],
    faq: [
      { q: 'We have very little data. Can we still do this?', a: 'Sometimes. Pre-trained models plus a small labelled set go a long way. We run a two-week feasibility sprint before committing to the full build.' },
      { q: 'Who owns the trained model?', a: 'You do — weights, code and training pipeline are handed over at the end.' },
      { q: 'How is accuracy guaranteed?', a: 'We agree a metric and a hold-out test set up front, and the model ships only if it meets the agreed bar.' },
    ],
    related: ['custom-ml-model-vs-llm-api', 'how-to-prepare-data-for-ml', 'ai-for-manufacturing'],
  },
  {
    slug: 'how-to-estimate-llm-api-costs',
    title: 'How to Estimate LLM API Costs Before You Build',
    description:
      'A simple, repeatable method to estimate LLM API spend before launch: tokens per task, tasks per month, caching and model mix — with a worked example.',
    date: D,
    updated: D,
    cover: unsplash('photo-1554224155-6726b3ff858f'),
    coverAlt: 'Receipts, a calculator and documents on a desk',
    tags: ['LLM', 'Cost', 'Planning'],
    kind: 'Tutorial',
    author: 'engineering',
    intro:
      'Teams usually discover their LLM bill after launch. It is predictable in advance with four numbers and a spreadsheet. This is the method we use in every proposal.',
    sections: [
      S(
        'formula',
        'The formula',
        P('Monthly cost ≈ tasks per month × (input tokens × input price + output tokens × output price), adjusted for caching. Everything else is estimating those inputs honestly.'),
        OL(
          'Count tasks: conversations, documents, tickets — whatever one unit of work is.',
          'Measure tokens per task: run 20 realistic examples through a prototype and log input and output tokens. Do not guess.',
          'Apply caching: the stable part of your prompt (instructions, tool definitions) can be cached, which cuts the cost of those tokens sharply on providers that support it.',
          'Choose the model mix: route easy tasks to a smaller model and hard ones to a larger model.',
        ),
      ),
      S(
        'example',
        'A worked example',
        P('A support agent handles 20,000 conversations a month. Measured on a prototype: 6,000 input tokens and 400 output tokens per conversation across all turns, of which 4,000 input tokens are the stable system prompt and tool definitions.'),
        UL(
          'Without caching, every turn re-sends the full 6,000 tokens at the normal input price.',
          'With caching, 4,000 of those tokens are billed at the discounted cached rate, so the effective input cost drops by more than half.',
          'Routing the 60% of simple questions to a smaller model cuts the remaining cost again.',
        ),
        P('Plug in your provider’s current per-token prices and you have a monthly figure that is usually within 20–30% of reality — close enough to make a build-or-don’t decision.'),
      ),
      S(
        'traps',
        'Where estimates go wrong',
        UL(
          'Conversation history: every turn re-reads earlier turns, so long chats cost far more than short ones. Summarise or trim history.',
          'Retrieval bloat: stuffing ten documents into context when two would do.',
          'Retries and loops: an agent that retries tool calls can multiply cost. Cap steps per task.',
          'Output length: verbose answers cost more and read worse. Ask for concise output.',
        ),
      ),
      S(
        'monitor',
        'After launch',
        P('Log tokens and cost per task from day one and chart them weekly. Cost per resolved task is the number to watch — not total spend, which should grow with usage.'),
      ),
    ],
    faq: [
      { q: 'Should we always use the cheapest model?', a: 'No. A cheaper model that fails more often costs more in retries, escalations and lost customers. Choose per task based on eval results.' },
      { q: 'How accurate is this method?', a: 'With measured token counts from a prototype, typically within 20–30%. With guessed counts, it can be off by several times.' },
      { q: 'Can you estimate ours?', a: 'Yes — send us a description of the task and expected volume and we will build the estimate with you.' },
    ],
    related: ['how-we-cut-llm-costs-without-losing-quality', 'what-are-tokens-in-llms', 'what-is-prompt-caching'],
  },
  {
    slug: 'software-development-cost-india-vs-us',
    title: 'Software Development Cost: India vs US vs Europe',
    description:
      'How much the same software project costs with a studio in India, Eastern Europe or the US — rates, total cost, and the delivery risks each option carries.',
    date: D,
    updated: D,
    cover: unsplash('photo-1582407947304-fd86f028f716'),
    coverAlt: 'Glass office towers against a blue sky',
    tags: ['Outsourcing', 'Pricing', 'India'],
    kind: 'Comparison',
    author: 'hassan',
    intro:
      'Location still drives software cost more than any other single factor. But the cheapest hourly rate rarely produces the cheapest project. Here is a fair comparison from a studio that competes with all three.',
    sections: [
      S(
        'compare',
        'Same scope, three regions',
        T(
          'A core MVP (auth, 5 screens, admin, deploy) quoted by region — indicative 2026 ranges',
          ['Region', 'Typical project price', 'Time-zone overlap with US', 'Notes'],
          [
            ['US agency', '2–3× the India price', 'Full', 'Easiest communication, highest cost'],
            ['Eastern Europe', '1.3–2× the India price', 'Partial', 'Strong engineering, overlap with EU'],
            ['India studio', '$25k – $60k', '2–4 hours', 'Best value if process is disciplined'],
            ['Solo freelancer (any region)', '40–60% below studio', 'Varies', 'Cheapest, highest delivery risk'],
          ],
        ),
      ),
      S(
        'why',
        'Why the gap exists',
        P('Salaries and office costs explain most of it. Engineering quality does not track price neatly: every region has excellent and poor teams. What differs is how much process you get — and process is what keeps a remote project on time.'),
      ),
      S(
        'risk',
        'Where offshore projects fail',
        UL(
          'Vague scope: a fixed price on a vague brief guarantees change requests.',
          'No shared visibility: if you cannot see a staging link every week, you do not know where the project is.',
          'Hand-offs between strangers: sales promises, a different team builds.',
          'Missing ownership terms: code, accounts and credentials must be in your name from day one.',
        ),
        P('None of these are about geography. They are about process — and you can check for them before signing.'),
      ),
      S(
        'choose',
        'How to choose',
        P('If budget is the constraint and you can invest an hour a week in reviews, an Indian studio with fixed-price milestones and weekly demos gives the most product per dollar. If you need constant real-time collaboration during US hours, pay for overlap — either a US team or a studio that staffs an overlapping shift.'),
      ),
    ],
    faq: [
      { q: 'Is quality lower with Indian studios?', a: 'Quality varies by team, not country. Ask for code samples, references and a paid discovery sprint to judge directly.' },
      { q: 'How do you handle time zones?', a: 'We keep a 2–4 hour overlap with US and EU clients, a weekly demo, and async updates in a shared channel.' },
      { q: 'What about IP protection?', a: 'Contracts assign all IP to you, and repositories and cloud accounts are created in your name.' },
    ],
    related: ['how-to-choose-software-development-company-india', 'why-hire-a-software-studio-instead-of-freelancers', 'who-owns-the-code-ip-and-handover'],
  },
  {
    slug: 'fixed-price-vs-time-and-materials',
    title: 'Fixed Price vs Time & Materials: Which to Choose',
    description:
      'Fixed-price and time-and-materials contracts compared for software projects: risk, flexibility, total cost, and the hybrid model most successful builds use.',
    date: D,
    updated: D,
    cover: unsplash('photo-1454165804606-c3d57bc86b40'),
    coverAlt: 'Two people reviewing a contract next to a laptop',
    tags: ['Contracts', 'Outsourcing', 'Startups'],
    kind: 'Comparison',
    author: 'hassan',
    intro:
      'The contract model shapes behaviour on both sides of a software project. Pick the wrong one and you pay for it in change-request fights or in an open-ended bill. Here is how to choose.',
    sections: [
      S(
        'compare',
        'Side by side',
        T(
          'Fixed price vs time & materials',
          ['', 'Fixed price', 'Time & materials'],
          [
            ['Who carries overrun risk', 'The studio', 'You'],
            ['Flexibility to change scope', 'Low — changes need a change request', 'High — reprioritise any week'],
            ['Budget certainty', 'High', 'Low unless capped'],
            ['Best for', 'Well-defined scope, first builds', 'Evolving products, R&D, AI experimentation'],
            ['Hidden risk', 'Studio pads the quote or cuts corners', 'No incentive to finish'],
          ],
        ),
      ),
      S(
        'fixed',
        'When fixed price works',
        P('Fixed price works when the scope can be written down: screens, flows, integrations and acceptance criteria. That is why we run a short discovery phase first — it turns an idea into a scope that can be priced honestly, without padding.'),
      ),
      S(
        'tm',
        'When time & materials works',
        P('Time and materials suits work where the answer is unknown up front: tuning an AI agent to hit an accuracy target, exploring a new market, or ongoing product development after launch. It needs trust and visibility — weekly demos and a burn report.'),
      ),
      S(
        'hybrid',
        'The hybrid most good projects use',
        OL(
          'Paid discovery at a fixed price: one to two weeks, producing a scope, architecture and plan.',
          'Build at a fixed price per milestone: each milestone has a demo and acceptance criteria.',
          'Post-launch iteration on a capped monthly retainer.',
        ),
        P('This gives you budget certainty where it matters and flexibility where it is useful.'),
      ),
    ],
    faq: [
      { q: 'Which model do you use?', a: 'Fixed-price milestones after a discovery phase for builds; capped retainers for ongoing work and AI tuning.' },
      { q: 'What happens if the scope changes mid-build?', a: 'We estimate the change, you approve it or swap it for something of equal size, and the milestone plan updates.' },
      { q: 'Is T&M always more expensive?', a: 'Not necessarily — fixed quotes include a risk margin. T&M with a disciplined team can cost less, but carries more budget risk.' },
    ],
    related: ['red-flags-in-software-development-quotes', 'how-to-write-mvp-requirements', 'what-happens-in-a-discovery-workshop'],
  },
  {
    slug: 'hidden-costs-of-ai-projects',
    title: 'The Hidden Costs of AI Projects Nobody Quotes',
    description:
      'Seven AI project costs that rarely appear in the first quote — evals, data cleanup, human review, model changes, monitoring — and how to budget for each.',
    date: D,
    updated: D,
    cover: unsplash('photo-1586473219010-2ffc57b0d282'),
    coverAlt: 'Man covered in sticky notes looking overwhelmed',
    tags: ['AI agents', 'Cost', 'Planning'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'An AI demo costs a few days. An AI product costs a lot more, and the difference is made of line items nobody put in the first quote. Budget for these seven and you will not be surprised.',
    sections: [
      S(
        'seven',
        'The seven hidden costs',
        OL(
          'Evaluation sets. Someone has to write the questions and correct answers that prove the system works. Budget days, not hours.',
          'Data cleanup. Documents, CRM records and spreadsheets are messier than anyone admits.',
          'Human review. Early on, a person checks a share of outputs. That is a staffing cost.',
          'Integrations. The agent is only useful connected to your systems — and legacy systems fight back.',
          'Model changes. Providers retire and change models; each change needs an eval run and sometimes prompt work.',
          'Monitoring. Tracing, dashboards and alerting for quality, cost and latency.',
          'Change management. Training your team and updating processes so the tool actually gets used.',
        ),
      ),
      S(
        'size',
        'How big are they?',
        P('On the agent projects we deliver, these items together are typically 25–40% of the total first-year cost. The build quote covers evals, integrations and monitoring; human review and change management sit on your side, and model upkeep sits in maintenance.'),
      ),
      S(
        'plan',
        'How to budget for them',
        UL(
          'Ask every vendor which of the seven their quote includes, in writing.',
          'Plan a 4–8 week supervised period after launch with a human reviewing outputs.',
          'Keep 15–20% of the build budget per year for model upkeep and improvements.',
          'Name an internal owner — a person, not a department — for the AI system.',
        ),
      ),
    ],
    faq: [
      { q: 'Are these costs avoidable?', a: 'They are reducible, not avoidable. Skipping evals or monitoring just moves the cost into production incidents.' },
      { q: 'Does your quote include evals?', a: 'Yes — every agent build includes an eval suite built on your real cases, and it is handed over with the code.' },
      { q: 'How long is the supervised period?', a: 'Usually four to eight weeks, tapering as measured quality holds.' },
    ],
    related: ['ai-agent-development-cost', 'why-ai-agents-fail-in-production', 'ai-pilot-to-production-90-day-plan'],
  },
  {
    slug: 'ai-automation-roi-calculation',
    title: 'How to Calculate ROI on AI Automation',
    description:
      'A practical ROI model for AI automation: hours saved, errors avoided, revenue recovered, minus build and running cost — with a worked example.',
    date: D,
    updated: D,
    cover: unsplash('photo-1579621970563-ebec7560ff3e'),
    coverAlt: 'Small plant growing out of a pile of coins',
    tags: ['Automation', 'ROI', 'Planning'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'Every automation pitch promises savings. Few show the arithmetic. This is the simple model we build with clients before they commit, and it often talks them out of the wrong project.',
    sections: [
      S(
        'model',
        'The three value sources',
        OL(
          'Time saved: hours per task × tasks per month × loaded hourly cost of the person doing it today.',
          'Errors avoided: error rate today × cost per error (rework, refunds, penalties) × volume.',
          'Revenue recovered: leads answered after hours, faster quotes, fewer missed calls.',
        ),
        P('Then subtract the build cost, the running cost (LLM usage, hosting) and the human review time the automation still needs.'),
      ),
      S(
        'example',
        'A worked example',
        P('An accounts team processes 3,000 supplier invoices a month. Each takes about 6 minutes of manual entry and checking — 300 hours a month. Automated extraction with human review of exceptions cuts that to about 1.5 minutes per invoice on average.'),
        T(
          'Illustrative ROI for invoice automation',
          ['Line', 'Monthly'],
          [
            ['Hours saved', '~225 hours'],
            ['Value at loaded cost', 'Hours saved × your hourly cost'],
            ['Errors avoided', 'Fewer duplicate and mis-keyed payments'],
            ['Running cost', 'Small per-invoice model and hosting cost'],
            ['Build cost (one-time)', '$12k – $25k for a single-process automation'],
          ],
        ),
        P('At typical loaded costs, projects like this pay back within a few months. If your volume were 300 invoices instead of 3,000, the same build might take years to pay back — and we would tell you not to do it.'),
      ),
      S(
        'honest',
        'Keep the model honest',
        UL(
          'Measure today’s baseline for two weeks before building — guesses are always optimistic.',
          'Count only hours that turn into something: reduced overtime, avoided hires, or redeployed work.',
          'Include the review time — automation at 95% accuracy still needs someone on the other 5%.',
        ),
      ),
    ],
    faq: [
      { q: 'What payback period is good?', a: 'Under 12 months is a strong case. Under 6 is excellent. Over 24, look for a cheaper approach or a bigger process.' },
      { q: 'What if savings are hard to measure?', a: 'Pick a proxy you already track — tickets closed per person, days to invoice, calls answered — and baseline it before launch.' },
      { q: 'Can you help build the business case?', a: 'Yes. We build the ROI model with you in discovery, before any build commitment.' },
    ],
    related: ['top-ai-automation-ideas-small-business-india', 'invoice-extraction-with-ai', 'how-to-choose-first-ai-use-case'],
  },
  {
    slug: 'mobile-app-development-cost-india',
    title: 'Mobile App Development Cost in India (2026)',
    description:
      'What a mobile app costs to build in India in 2026 — by tier, native vs cross-platform — plus the backend, design and store costs people forget.',
    date: D,
    updated: D,
    cover: unsplash('photo-1556742049-0cfed4f6a45d'),
    coverAlt: 'Customer paying with a phone at a shop counter',
    tags: ['Mobile apps', 'Pricing', 'India'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'Mobile app quotes in India range from ₹2 lakh to ₹2 crore for apps that look similar in a pitch deck. The difference is in the parts you do not see. Here is how the price actually breaks down.',
    sections: [
      S(
        'tiers',
        'Cost by complexity',
        T(
          'Indicative mobile app costs with a studio in India, 2026',
          ['Tier', 'Example', 'Timeline', 'Typical cost'],
          [
            ['Simple', 'Content app, booking app with one role', '6–8 weeks', '₹8L – ₹20L'],
            ['Standard', 'Marketplace or SaaS app, payments, notifications', '10–14 weeks', '₹20L – ₹50L'],
            ['Complex', 'Real-time features, multiple roles, offline sync, AI', '14–24 weeks', '₹50L – ₹1Cr+'],
          ],
        ),
      ),
      S(
        'platform',
        'iOS, Android or cross-platform?',
        P('For most business apps we build once with React Native or Flutter and ship to both stores. That typically saves 30–40% versus two native apps. Native only wins for apps that push hardware hard — advanced camera, AR, heavy background processing.'),
      ),
      S(
        'forgotten',
        'The costs people forget',
        UL(
          'The backend: APIs, database, admin panel. Often 40% of the total.',
          'Design: a real design system, not just screens.',
          'Store setup and review cycles: Apple review can take days per release.',
          'Push notifications, analytics and crash reporting.',
          'Maintenance: 15–25% of the build per year.',
        ),
      ),
      S(
        'cut',
        'How to cut the cost safely',
        P('Start with one platform’s most important flow, validated with a web version if possible. Cut roles and features, not quality: an app with three solid screens beats one with twelve fragile ones, and the architecture can still be production-grade from day one.'),
      ),
    ],
    faq: [
      { q: 'Is a ₹2 lakh app realistic?', a: 'For a template-based app with minimal custom logic, perhaps. For a real product with a backend, admin and payments, no.' },
      { q: 'Do you build the admin panel too?', a: 'Yes — every app ships with an admin panel for your team.' },
      { q: 'Can the app later add AI features?', a: 'Yes, if the backend is designed with clean APIs. We plan for it in architecture even if AI comes later.' },
    ],
    related: ['react-native-vs-flutter-2026', 'mvp-development-cost-2026', 'app-maintenance-cost-per-year'],
  },
];
