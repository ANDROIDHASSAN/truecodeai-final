// Comparison cluster — "X vs Y" decision posts. Each ends with a clear recommendation
// and the conditions that flip it, not a both-sides shrug.
import { unsplash, type Block, type Post, type Section } from './post-types';

const P = (text: string): Block => ({ type: 'p', text });
const UL = (...items: string[]): Block => ({ type: 'ul', items });
const OL = (...items: string[]): Block => ({ type: 'ol', items });
const T = (caption: string, headers: string[], rows: string[][]): Block => ({ type: 'table', caption, headers, rows });
const S = (id: string, heading: string, ...blocks: Block[]): Section => ({ id, heading, blocks });
const D = '2026-09-19';

export const comparePosts: Post[] = [
  {
    slug: 'rag-vs-fine-tuning',
    title: 'RAG vs Fine-Tuning: Which One Your Project Needs',
    description:
      'RAG vs fine-tuning compared on cost, freshness, accuracy and effort — with a simple rule for choosing, and the cases where you need both.',
    date: D,
    updated: D,
    cover: unsplash('photo-1620712943543-bcc4688e7485'),
    coverAlt: 'Abstract render of an artificial intelligence concept',
    tags: ['RAG', 'Fine-tuning', 'Comparison'],
    kind: 'Comparison',
    author: 'engineering',
    intro:
      'Clients often ask us to "train the model on our data". Nine times out of ten, what they need is retrieval, not training. Here is how to tell which is which.',
    sections: [
      S(
        'rule',
        'The rule of thumb',
        P('Use RAG when the model needs to know things — facts, policies, documents. Use fine-tuning when the model needs to behave differently — a format, a style, a narrow classification task at high volume.'),
      ),
      S(
        'compare',
        'Side by side',
        T(
          'RAG vs fine-tuning',
          ['', 'RAG', 'Fine-tuning'],
          [
            ['Teaches', 'Knowledge, looked up at query time', 'Behaviour, baked into the model'],
            ['Updating content', 'Re-index in minutes', 'Retrain and re-evaluate'],
            ['Citations', 'Natural — sources are retrieved', 'Not available'],
            ['Upfront effort', 'Ingestion pipeline + evals', 'Curated training set + evals'],
            ['Best for', 'Q&A over documents, support', 'Consistent formats, classification, cost reduction at scale'],
          ],
        ),
      ),
      S(
        'both',
        'When you need both',
        P('High-volume systems sometimes fine-tune a smaller model to follow a specific output format or tone cheaply, and use RAG to feed it current facts. That combination is an optimisation, not a starting point: begin with RAG and a strong model, measure, then fine-tune if cost or latency demands it.'),
      ),
      S(
        'mistakes',
        'Common mistakes',
        UL(
          'Fine-tuning to add facts — the model still guesses and cannot cite.',
          'Fine-tuning before prompts and retrieval are properly engineered.',
          'Skipping evals — without them, nobody knows if the fine-tune helped.',
        ),
      ),
    ],
    faq: [
      { q: 'Is fine-tuning expensive?', a: 'Training itself is often affordable; the real cost is building a high-quality training set and evaluating it.' },
      { q: 'Can we fine-tune on customer conversations?', a: 'Only with appropriate consent and after removing personal data.' },
      { q: 'What do you recommend for a first project?', a: 'RAG with a capable model and a proper eval set. Fine-tune later only if the numbers justify it.' },
    ],
    related: ['what-is-rag-retrieval-augmented-generation', 'custom-ml-model-vs-llm-api', 'rag-chatbot-development-cost'],
  },
  {
    slug: 'n8n-vs-custom-code-for-ai-automation',
    title: 'n8n vs Custom Code for AI Automation',
    description:
      'Workflow tools like n8n and Zapier vs custom code for AI automation: speed, cost, reliability and control — and the point where each one stops working.',
    date: D,
    updated: D,
    cover: unsplash('photo-1557804506-669a67965ba0'),
    coverAlt: 'Team reviewing a plan on a wall of sticky notes',
    tags: ['Automation', 'No-code', 'Comparison'],
    kind: 'Comparison',
    author: 'engineering',
    intro:
      'Workflow builders are the fastest way to automate a process. They are also a common source of fragile, invisible systems. Both statements are true; here is where the line falls.',
    sections: [
      S(
        'compare',
        'Side by side',
        T(
          'Workflow tools vs custom code',
          ['', 'Workflow tool (n8n, Zapier, Make)', 'Custom code'],
          [
            ['Time to first version', 'Hours to days', 'Days to weeks'],
            ['Who can change it', 'Ops team', 'Engineers'],
            ['Testing', 'Manual, limited', 'Automated tests and evals'],
            ['Version control', 'Limited or add-on', 'Native'],
            ['Complex logic', 'Gets tangled fast', 'Handles it cleanly'],
            ['Cost at volume', 'Per-task pricing can climb', 'Mostly infrastructure'],
          ],
        ),
      ),
      S(
        'tool',
        'When the workflow tool wins',
        UL(
          'Simple, linear flows between SaaS tools: form → CRM → email.',
          'Low volume, where per-task pricing stays small.',
          'Processes still changing weekly, owned by the ops team.',
          'Prototyping an automation before investing in code.',
        ),
      ),
      S(
        'code',
        'When custom code wins',
        UL(
          'AI agents with branching logic, retries and tool use.',
          'Anything that needs evals — you cannot trust an AI step without them.',
          'High volume, where per-task fees exceed hosting costs.',
          'Workflows touching money or regulated data, which need audit and tests.',
        ),
      ),
      S(
        'path',
        'A sensible path',
        OL(
          'Prototype in a workflow tool to prove the process is worth automating.',
          'Measure volume, failure rate and cost for a month.',
          'Move the core to code when it becomes business-critical, keeping the tool for simple edges.',
        ),
      ),
    ],
    faq: [
      { q: 'Is self-hosted n8n free?', a: 'The software can be, but hosting, upgrades, backups and security are your responsibility.' },
      { q: 'Can workflow tools call LLMs?', a: 'Yes. They are fine for simple single-step AI tasks; multi-step agents usually outgrow them.' },
      { q: 'Can you migrate our existing workflows?', a: 'Yes — we map what each workflow does, then rebuild the critical ones in code with tests.' },
    ],
    related: ['rpa-vs-ai-agents', 'top-ai-automation-ideas-small-business-india', 'ai-automation-roi-calculation'],
  },
  {
    slug: 'no-code-vs-custom-mvp',
    title: 'No-Code vs Custom MVP: When No-Code Stops Working',
    description:
      'No-code vs custom-built MVPs: what each is good for, the warning signs you have outgrown no-code, and how to migrate without losing users.',
    date: D,
    updated: D,
    cover: unsplash('photo-1559526324-4b87b5e36e44'),
    coverAlt: 'Laptop showing a website builder on a desk',
    tags: ['MVP', 'No-code', 'Comparison'],
    kind: 'Comparison',
    author: 'hassan',
    intro:
      'No-code tools let founders test ideas without engineers. That is valuable. The trap is staying on them after the idea is proven, when every new feature fights the platform.',
    sections: [
      S(
        'good',
        'What no-code is great for',
        UL(
          'Validating demand before spending on engineering.',
          'Internal tools with few users.',
          'Simple marketplaces and directories at small scale.',
          'Landing pages, waitlists and forms.',
        ),
      ),
      S(
        'signs',
        'Signs you have outgrown it',
        OL(
          'Pages slow down as data grows.',
          'Features need workarounds stacked on workarounds.',
          'Platform fees rise faster than revenue.',
          'You cannot meet a customer’s security or data-residency requirement.',
          'Investors ask about technical ownership and the answer is uncomfortable.',
        ),
      ),
      S(
        'compare',
        'Cost comparison',
        T(
          'No-code vs custom over the first two years (typical)',
          ['', 'No-code', 'Custom MVP'],
          [
            ['Upfront', 'Low', '$25k – $60k for a core MVP'],
            ['Monthly platform cost', 'Grows with users and features', 'Hosting, usually modest'],
            ['Speed of change', 'Fast early, slow later', 'Steady'],
            ['Ownership', 'Platform-dependent', 'Full code ownership'],
          ],
        ),
      ),
      S(
        'migrate',
        'Migrating without losing users',
        P('Rebuild the core flows in code, migrate data in a rehearsed cutover, and keep URLs and logins working. Run both in parallel for a short period if possible. A good migration is invisible to users.'),
      ),
    ],
    faq: [
      { q: 'Should I start with no-code?', a: 'If you have not validated demand yet, often yes. Once paying users arrive, plan the custom build.' },
      { q: 'Can you build on top of our no-code app?', a: 'Sometimes we extend it through APIs; when the platform is the bottleneck we rebuild the core.' },
      { q: 'Will we lose our data?', a: 'No. Most platforms export data, and we script and test the migration before cutover.' },
    ],
    related: ['mvp-development-cost-2026', 'how-to-validate-a-startup-idea', 'top-mistakes-founders-make-building-an-mvp'],
  },
  {
    slug: 'react-native-vs-flutter-2026',
    title: 'React Native vs Flutter in 2026: Our Pick',
    description:
      'React Native vs Flutter for business apps in 2026: performance, hiring, code sharing with web, and the project types where each framework wins.',
    date: D,
    updated: D,
    cover: unsplash('photo-1512486130939-2c4f79935e4f'),
    coverAlt: 'Laptop and phone on a white desk with a plant',
    tags: ['Mobile apps', 'React Native', 'Flutter'],
    kind: 'Comparison',
    author: 'engineering',
    intro:
      'Both frameworks ship excellent cross-platform apps in 2026. The deciding factors are rarely performance — they are your team, your web stack and the kind of app you are building.',
    sections: [
      S(
        'compare',
        'Side by side',
        T(
          'React Native vs Flutter for business apps',
          ['', 'React Native', 'Flutter'],
          [
            ['Language', 'TypeScript / JavaScript', 'Dart'],
            ['Code sharing with web', 'Strong, with a React web app', 'Possible, less common'],
            ['UI approach', 'Native components', 'Own rendering engine, pixel-identical'],
            ['Hiring pool', 'Very large', 'Large and growing'],
            ['Best at', 'Apps alongside a React web product', 'Highly custom, animated UIs'],
          ],
        ),
      ),
      S(
        'pick',
        'Our default',
        P('For most clients we choose React Native, because the same TypeScript team builds the web app, the admin panel and the mobile app, and business logic can be shared. We pick Flutter when the design is heavily custom and must look identical on every device, or when the client’s team already knows Dart.'),
      ),
      S(
        'native',
        'When to go fully native',
        UL(
          'Heavy use of device hardware: AR, advanced camera, Bluetooth peripherals.',
          'Apps where platform-specific polish is the product.',
          'Very tight performance budgets, such as complex real-time graphics.',
        ),
      ),
    ],
    faq: [
      { q: 'Is performance a concern with cross-platform?', a: 'For typical business apps, no. Both frameworks deliver smooth performance when built properly.' },
      { q: 'Can we switch frameworks later?', a: 'It means rewriting the UI layer. Choose based on your long-term team, not a trend.' },
      { q: 'Do cross-platform apps pass store review?', a: 'Yes — thousands of major apps use them. Review depends on content and policy, not the framework.' },
    ],
    related: ['mobile-app-development-cost-india', 'web-app-vs-mobile-app-first', 'mvp-timeline-how-long'],
  },
  {
    slug: 'supabase-vs-firebase-for-startups',
    title: 'Supabase vs Firebase for Startups in 2026',
    description:
      'Supabase vs Firebase for startup backends: SQL vs NoSQL, pricing behaviour, vendor lock-in, AI and vector features, and which to choose for your MVP.',
    date: D,
    updated: D,
    cover: unsplash('photo-1560472354-b33ff0c44a43'),
    coverAlt: 'Analytics dashboard with a traffic chart',
    tags: ['Backend', 'Startups', 'Comparison'],
    kind: 'Comparison',
    author: 'engineering',
    intro:
      'Backend-as-a-service platforms let an MVP ship without building auth, database and storage from scratch. The two most popular take very different approaches to data.',
    sections: [
      S(
        'compare',
        'Side by side',
        T(
          'Supabase vs Firebase',
          ['', 'Supabase', 'Firebase'],
          [
            ['Database', 'Postgres (relational, SQL)', 'Firestore (document, NoSQL)'],
            ['Queries', 'Joins, SQL, views', 'Denormalised documents, simpler queries'],
            ['Vector search', 'Postgres vector extension', 'Via extensions or separate services'],
            ['Lock-in', 'Lower — standard Postgres underneath', 'Higher — proprietary data model'],
            ['Realtime & offline mobile', 'Good', 'Excellent, mature offline sync'],
          ],
        ),
      ),
      S(
        'pick',
        'How we choose',
        UL(
          'Business apps with relational data — orders, invoices, users, roles: Supabase.',
          'AI apps needing vector search next to app data: Supabase.',
          'Mobile-first apps with heavy offline use and simple data shapes: Firebase.',
          'Teams already deep in Google Cloud: Firebase is a natural fit.',
        ),
      ),
      S(
        'pricing',
        'Pricing behaviour',
        P('Both have generous free tiers. Firebase bills heavily on document reads, so chatty apps can surprise you; Supabase bills more on compute and storage. Model your expected read patterns before choosing.'),
      ),
    ],
    faq: [
      { q: 'Can we migrate off later?', a: 'From Supabase, relatively easily — it is Postgres. From Firebase, it takes a data-model redesign.' },
      { q: 'Are they production-ready?', a: 'Yes, both run large production apps. Design security rules and row-level policies carefully.' },
      { q: 'Do we need one at all?', a: 'Not always. For complex products a conventional backend on managed Postgres gives more control.' },
    ],
    related: ['what-is-a-vector-database', 'mvp-development-cost-2026', 'no-code-vs-custom-mvp'],
  },
  {
    slug: 'in-house-team-vs-agency',
    title: 'In-House Team vs Agency: The Real Trade-Offs',
    description:
      'Hiring an in-house engineering team vs working with a studio: cost, speed, control and knowledge retention — and the hybrid model that works for most startups.',
    date: D,
    updated: D,
    cover: unsplash('photo-1556761175-b413da4baf72'),
    coverAlt: 'Open-plan office with developers at their desks',
    tags: ['Hiring', 'Outsourcing', 'Startups'],
    kind: 'Comparison',
    author: 'hassan',
    intro:
      'Founders are often told "never outsource your core product". It is good advice at the wrong stage. Here is the honest trade-off, from a studio that also helps clients hire their own teams.',
    sections: [
      S(
        'compare',
        'Side by side',
        T(
          'In-house vs studio',
          ['', 'In-house team', 'Studio'],
          [
            ['Time to start', '2–4 months to hire', 'Days to weeks'],
            ['Cost structure', 'Salaries, benefits, tools, management', 'Project or retainer fee'],
            ['Range of skills', 'What you can hire', 'Design, backend, mobile, AI, DevOps on demand'],
            ['Product knowledge', 'Deep and retained', 'Deep during the engagement'],
            ['Control', 'Full', 'Shared, via process'],
          ],
        ),
      ),
      S(
        'when',
        'When each wins',
        UL(
          'Studio: before product-market fit, when speed and breadth matter and the roadmap is uncertain.',
          'In-house: after product-market fit, when the product is the company and iteration never stops.',
          'Studio for specialist work at any stage: AI agents, security audits, ML models, migrations.',
        ),
      ),
      S(
        'hybrid',
        'The hybrid that works',
        OL(
          'Studio builds the MVP with a founder or CTO closely involved.',
          'You hire a small in-house core as traction arrives.',
          'The studio pairs with the new hires and hands over deliberately.',
          'The studio stays on for specialist projects as needed.',
        ),
      ),
    ],
    faq: [
      { q: 'Will we be dependent on you?', a: 'Not if handover is planned. Code, accounts and documentation are yours, and we train your hires.' },
      { q: 'Can you help us hire?', a: 'Yes — we help define roles, run technical interviews and onboard hires onto the codebase.' },
      { q: 'Is a studio more expensive than hiring?', a: 'Per month, often similar to a small team. The difference is speed to start and no long-term fixed cost.' },
    ],
    related: ['why-hire-a-software-studio-instead-of-freelancers', 'software-project-handover-checklist', 'how-to-choose-software-development-company-india'],
  },
  {
    slug: 'chatbot-vs-ai-agent',
    title: 'Chatbot vs AI Agent: What’s the Difference?',
    description:
      'Chatbots answer; AI agents act. The practical difference between rule-based bots, LLM chatbots and AI agents — and which one your business actually needs.',
    date: D,
    updated: D,
    cover: unsplash('photo-1531746790731-6c087fecd65a'),
    coverAlt: 'White robotic hand reaching forward',
    tags: ['AI agents', 'Chatbots', 'Comparison'],
    kind: 'Comparison',
    author: 'engineering',
    intro:
      '"Chatbot" and "AI agent" are used interchangeably in sales decks. They are different products with different costs, and buying the wrong one is common.',
    sections: [
      S(
        'three',
        'Three generations',
        T(
          'Bots compared',
          ['Type', 'How it works', 'Can take actions?', 'Best for'],
          [
            ['Rule-based bot', 'Menus and keyword triggers', 'Only scripted ones', 'Simple, fixed flows'],
            ['LLM chatbot', 'Answers from a model and your documents', 'No', 'FAQs and knowledge Q&A'],
            ['AI agent', 'Model decides and calls tools in a loop', 'Yes — lookups, bookings, updates', 'Resolving requests end to end'],
          ],
        ),
      ),
      S(
        'difference',
        'The real difference',
        P('A chatbot tells a customer how to return an item. An agent checks the order, confirms eligibility, books the pickup and sends the label. Resolution, not information, is what reduces workload — and it requires tools, permissions and evals, which is why agents cost more to build.'),
      ),
      S(
        'choose',
        'Which one you need',
        UL(
          'Mostly repeated questions with answers in documents: an LLM chatbot with retrieval.',
          'Requests that need data from your systems or an action taken: an agent.',
          'Strict, regulated scripts: a rule-based flow, possibly with an LLM for understanding free text.',
        ),
      ),
    ],
    faq: [
      { q: 'Can a chatbot be upgraded to an agent later?', a: 'Yes, if built on a solid foundation. Adding tools and evals to a retrieval assistant is a common second phase.' },
      { q: 'Are agents riskier?', a: 'They can do more, so they need permissions, approvals and monitoring. Designed properly, they are safe.' },
      { q: 'What does each cost?', a: 'Retrieval assistants start around $6k–$18k; workflow agents around $20k–$55k.' },
    ],
    related: ['what-is-an-ai-agent', 'agentic-ai-vs-generative-ai', 'ai-agent-development-cost'],
  },
  {
    slug: 'open-source-llm-vs-api',
    title: 'Open-Source LLMs vs APIs: Cost, Privacy, Quality',
    description:
      'Self-hosted open-weight LLMs vs hosted APIs: cost at different volumes, privacy, quality gaps and operational burden — and when each makes sense.',
    date: D,
    updated: D,
    cover: unsplash('photo-1555255707-c07966088b7b'),
    coverAlt: 'Close-up of a humanoid robot',
    tags: ['LLM', 'Infrastructure', 'Comparison'],
    kind: 'Comparison',
    author: 'engineering',
    intro:
      '"We’ll just run our own model" sounds cheaper and more private. Sometimes it is. Often the GPU bill and the operations work say otherwise.',
    sections: [
      S(
        'compare',
        'Side by side',
        T(
          'Self-hosted open-weight models vs hosted APIs',
          ['', 'Self-hosted open weights', 'Hosted API'],
          [
            ['Cost at low volume', 'High — GPUs idle', 'Low — pay per token'],
            ['Cost at very high volume', 'Can be lower', 'Scales linearly'],
            ['Top-end quality', 'Behind the frontier on hard tasks', 'Frontier models available'],
            ['Data control', 'Full', 'Governed by provider terms and region'],
            ['Operations', 'You run GPUs, scaling, updates', 'None'],
          ],
        ),
      ),
      S(
        'when-self',
        'When self-hosting makes sense',
        UL(
          'Very high, steady volume of a narrow task a smaller model handles well.',
          'Strict requirements that data never leaves your infrastructure.',
          'Offline or edge deployment.',
          'A fine-tuned small model that replaces a large general one.',
        ),
      ),
      S(
        'when-api',
        'When APIs make sense',
        UL(
          'Most business applications, especially early.',
          'Tasks that need strong reasoning or tool use.',
          'Variable or unpredictable traffic.',
          'Teams without GPU operations experience.',
        ),
        P('Many providers also offer enterprise terms, regional hosting and no-training guarantees, which answer most privacy concerns without self-hosting.'),
      ),
    ],
    faq: [
      { q: 'Can we start with an API and move later?', a: 'Yes. Keep the model behind an interface and an eval suite, and switching is a measured change.' },
      { q: 'Are open-weight models safe for business?', a: 'Yes, with the same guardrails as any model. Check the licence terms for commercial use.' },
      { q: 'What about hybrid?', a: 'Common and sensible: a small self-hosted model for high-volume simple tasks, an API model for the hard ones.' },
    ],
    related: ['custom-ml-model-vs-llm-api', 'managed-agents-vs-self-hosted', 'how-to-estimate-llm-api-costs'],
  },
  {
    slug: 'single-agent-vs-multi-agent',
    title: 'Single Agent vs Multi-Agent: When to Split',
    description:
      'When one AI agent is enough and when a multi-agent system pays off: complexity, cost, reliability and the orchestrator–worker pattern explained.',
    date: D,
    updated: D,
    cover: unsplash('photo-1519389950473-47ba0277781c'),
    coverAlt: 'Team working on laptops around a shared table',
    tags: ['Multi-agent', 'AI agents', 'Architecture'],
    kind: 'Comparison',
    author: 'engineering',
    intro:
      'Multi-agent systems are fashionable. They are also more expensive, harder to debug and sometimes less accurate than one well-built agent. Start single; split for a reason.',
    sections: [
      S(
        'single',
        'Why start with one agent',
        UL(
          'One context, one trace — easy to debug.',
          'Lower token cost: no coordination overhead.',
          'Most business workflows fit comfortably in one agent with good tools.',
        ),
      ),
      S(
        'split',
        'Reasons to split',
        OL(
          'Parallel work: researching many sources at once is faster with several workers.',
          'Context overload: one task’s material no longer fits cleanly in a single context.',
          'Different permissions: a read-only researcher and a write-capable executor.',
          'Different specialisations that genuinely need different instructions and tools.',
        ),
      ),
      S(
        'pattern',
        'The pattern that works',
        P('Orchestrator–worker: one agent plans and delegates; workers run focused sub-tasks in clean contexts and return concise results; the orchestrator combines them. Keep workers stateless, give each a narrow toolset, and trace every hand-off.'),
      ),
      S(
        'costs',
        'The costs to expect',
        T(
          'Single vs multi-agent trade-offs',
          ['', 'Single agent', 'Multi-agent'],
          [
            ['Token cost per task', 'Lower', 'Often several times higher'],
            ['Latency', 'Sequential', 'Can be lower with parallel workers'],
            ['Debugging', 'Straightforward', 'Needs good tracing'],
            ['Best for', 'Most workflows', 'Broad research, large parallel tasks'],
          ],
        ),
      ),
    ],
    faq: [
      { q: 'Is multi-agent more accurate?', a: 'On broad, parallelisable tasks it can be. On focused tasks, a single agent is often as good and cheaper.' },
      { q: 'Can we convert later?', a: 'Yes. A single agent with good tools becomes a worker in a larger system without a rewrite.' },
      { q: 'How do agents communicate?', a: 'Through structured messages via the orchestrator, not free-form chat — it keeps results predictable.' },
    ],
    related: ['multi-agent-systems-for-business', 'what-is-an-agent-harness', 'what-is-a-context-window'],
  },
  {
    slug: 'rpa-vs-ai-agents',
    title: 'RPA vs AI Agents: Which Automates Your Back Office?',
    description:
      'Robotic process automation vs AI agents: rules vs judgement, brittleness, cost and maintenance — and how the two work together in back-office automation.',
    date: D,
    updated: D,
    cover: unsplash('photo-1513828583688-c52646db42da'),
    coverAlt: 'Industrial pipes and machinery in a plant',
    tags: ['Automation', 'RPA', 'Comparison'],
    kind: 'Comparison',
    author: 'engineering',
    intro:
      'RPA automates clicks. AI agents automate judgement. Most back offices need both, and the mistake is using either one for the other’s job.',
    sections: [
      S(
        'compare',
        'Side by side',
        T(
          'RPA vs AI agents',
          ['', 'RPA', 'AI agent'],
          [
            ['Handles', 'Fixed, rule-based steps', 'Variable inputs needing interpretation'],
            ['Input types', 'Structured screens and fields', 'Emails, documents, free text, images'],
            ['When the screen changes', 'Breaks', 'Adapts with APIs or computer use'],
            ['Predictability', 'Very high', 'High with evals and guardrails'],
            ['Best for', 'Stable, high-volume data entry', 'Triage, extraction, exception handling'],
          ],
        ),
      ),
      S(
        'together',
        'How they work together',
        OL(
          'An AI agent reads an incoming email and attachment, classifies it and extracts the data.',
          'Validation rules check the extracted data.',
          'A deterministic step — API call or RPA bot — enters it into the system.',
          'Exceptions go to a person with the agent’s summary.',
        ),
      ),
      S(
        'choose',
        'Choosing',
        P('If the process is fully rule-based and the systems are stable, RPA or a plain API integration is cheaper and more predictable. If the inputs vary — different document layouts, free-text requests — you need AI for the understanding step. Wherever an API exists, prefer it over screen automation of either kind.'),
      ),
    ],
    faq: [
      { q: 'Should we replace our RPA bots?', a: 'Not wholesale. Replace the ones that break constantly or that handle variable inputs poorly.' },
      { q: 'Are computer-use agents a replacement for RPA?', a: 'For low-volume, variable tasks on systems without APIs, they can be. For high-volume stable tasks, RPA or APIs are cheaper.' },
      { q: 'What does a combined automation cost?', a: 'A single-process automation is typically $12k–$25k; cross-system reconciliation $25k–$45k.' },
    ],
    related: ['computer-use-agents-back-office-automation', 'n8n-vs-custom-code-for-ai-automation', 'invoice-extraction-with-ai'],
  },
  {
    slug: 'web-app-vs-mobile-app-first',
    title: 'Web App or Mobile App First? How to Decide',
    description:
      'Should your MVP be a web or mobile app first? Decide by user behaviour, distribution, cost and iteration speed — plus the cases where mobile must lead.',
    date: D,
    updated: D,
    cover: unsplash('photo-1580894894513-541e068a3e2b'),
    coverAlt: 'Desk from above with monitors, a laptop and a keyboard',
    tags: ['MVP', 'Mobile apps', 'Startups'],
    kind: 'Comparison',
    author: 'hassan',
    intro:
      'Founders often assume "app" means mobile app. For most MVPs, a responsive web app ships faster, costs less and teaches you more. Most, not all.',
    sections: [
      S(
        'web',
        'Why web usually comes first',
        UL(
          'One codebase for every device.',
          'Ship updates instantly, no store review.',
          'Shareable links: easier onboarding from ads, email and WhatsApp.',
          'Typically 30–50% cheaper than launching on both stores.',
        ),
      ),
      S(
        'mobile',
        'When mobile must come first',
        OL(
          'The core experience needs device features: camera, GPS in the background, push-driven engagement.',
          'Users open it many times a day — habit apps, field-worker tools, delivery apps.',
          'Your audience is mobile-only and expects an app from the store.',
          'Offline use is essential.',
        ),
      ),
      S(
        'middle',
        'The middle path',
        P('A progressive web app can be installed to the home screen, work offline and send notifications on many devices. For B2B tools and marketplaces it often covers the first year. When you move to native later, a clean API backend makes the mobile app a front-end project, not a rebuild.'),
      ),
    ],
    faq: [
      { q: 'Will investors expect a mobile app?', a: 'They expect traction. A web app with engaged users beats a store app with few.' },
      { q: 'Can the web and mobile apps share code?', a: 'With React and React Native, business logic and types can be shared.' },
      { q: 'How long does adding mobile take later?', a: 'With a good API backend, a first mobile version is often 6–10 weeks.' },
    ],
    related: ['react-native-vs-flutter-2026', 'mvp-timeline-how-long', 'mobile-app-development-cost-india'],
  },
];
