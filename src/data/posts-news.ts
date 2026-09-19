// Newsjacking series — a funded company or launch, reported within days,
// framed as "what it signals + how you'd build that capability". Every post
// cites its primary source; facts come from that source, nothing invented.
// Freshness is the ranking lever here: publish within 24–72h of the news.
import { unsplash, type Post } from './post-types';

const NEWS_CTA = {
  title: 'Want the same capability, without raising a round?',
  body: 'We build agent, voice and security systems for businesses that cannot wait for a Series B. Tell us the problem; scoped plan and fixed price within 48 hours.',
};

export const newsPosts: Post[] = [
  {
    slug: 'ai-funding-this-week',
    title: 'AI Funding This Week: Agents, Security & Voice (Sept 2026)',
    description:
      'This week’s AI funding rounds that matter to businesses — AIR, HiddenLayer, Treble, Runable — what each signals, and what you can build now. Updated weekly.',
    date: '2026-09-19',
    updated: '2026-09-19',
    cover: unsplash('photo-1611974789855-9c2a0a7236a3'),
    coverAlt: 'Stock market chart on a screen',
    tags: ['Funding', 'AI agents', 'Weekly'],
    kind: 'News',
    author: 'hassan',
    source: { name: 'TechCrunch', url: 'https://techcrunch.com/tag/funding/', date: '2026-09-19' },
    intro:
      'Every week we pick the AI rounds that tell a business owner something useful — not the biggest cheques, the clearest signals about what is being bought. This week: agent security gets serious money, voice AI goes physics-based, and an Indian agent startup hits 1.7 million users. Updated every Friday.',
    cta: NEWS_CTA,
    sections: [
      {
        id: 'rounds',
        heading: 'The rounds',
        blocks: [
          {
            type: 'table',
            caption: 'Rounds we tracked, late August – mid September 2026 (per TechCrunch)',
            headers: ['Company', 'Raised', 'Round', 'Lead', 'What they do', 'Signal'],
            rows: [
              ['AIR', '$50M', 'Two seed rounds', 'Sequoia; Greenoaks', 'Vets the skills and add-ons AI agents use', 'Agent supply-chain security is a category'],
              ['HiddenLayer', '$100M', 'Series B', 'Delta-v Capital', 'Runtime security for models, agents, workflows', 'ARR up 10×; enterprises are deploying agents at scale'],
              ['Treble', '$18M', 'Series A ext.', 'Paladin Capital', 'Physics-based acoustic simulation for voice AI', 'Voice AI quality is a data problem'],
              ['Runable', '$21M', 'Series A', 'Susquehanna; Nexus', 'Agent that builds and grows small businesses', '1.7M users; Indian AI agents go global'],
            ],
          },
        ],
      },
      {
        id: 'signals',
        heading: 'What it signals for businesses',
        blocks: [
          {
            type: 'ul',
            items: [
              'Agents are in production at scale — otherwise nobody funds two $50M+ security rounds in a week to protect them. If you are still at "should we?", the market has moved to "how safely?".',
              'The money is in the plumbing: security, evaluation, simulation data. The agent itself is becoming the easy part; the harness, evals and guardrails around it are where value sits.',
              'Voice is being taken seriously as infrastructure. Simulation-grade testing for voice models means the bar for a production voice agent — latency, noise, accents — is rising.',
              'India ships. Runable reached 1.7 million registered users and a $2M run rate within weeks of turning on payments, per TechCrunch. Global AI products are being built and priced from Bengaluru.',
            ],
          },
        ],
      },
      {
        id: 'build',
        heading: 'What you can build now',
        blocks: [
          {
            type: 'ul',
            items: [
              'An agent with the security posture the funded companies are selling: vetted tool list, scoped credentials, approval gates, full tracing. We build this in from week one — see our harness guide.',
              'A voice agent tested against the noise, accents and interruptions your callers actually produce — the same idea Treble is industrialising, at the scale a single business needs.',
              'A WhatsApp or web agent that qualifies and books — the small-business outcome Runable is chasing, integrated with your own systems rather than a platform’s.',
            ],
          },
          {
            type: 'p',
            text: 'Next update: Friday. Bookmark this page or subscribe to the RSS feed.',
          },
        ],
      },
    ],
    faq: [
      { q: 'Where do these numbers come from?', a: 'Primary reporting, linked at the top of the page — TechCrunch for this week’s rounds. We do not add figures that are not in the source.' },
      { q: 'Why do you cover funding at all?', a: 'Because where the money goes is the cheapest signal of what enterprises are actually buying — and that is what our clients ask us to build next.' },
      { q: 'Can you build what these companies build?', a: 'Not their platforms — their capabilities, at the scale of one business: agent security, voice testing, growth agents. That is exactly our work.' },
    ],
    related: ['air-raises-50m-ai-agent-security', 'hiddenlayer-100m-series-b-ai-security', 'runable-21m-series-a-india-ai-agents'],
  },

  {
    slug: 'air-raises-50m-ai-agent-security',
    title: 'AIR Raises $50M to Vet AI Agent Skills: What It Means',
    description:
      'AIR came out of stealth with $50M from Sequoia and Greenoaks to vet the skills AI agents use. Why agent security is now a category and how to get it in-house.',
    date: '2026-09-19',
    updated: '2026-09-19',
    cover: unsplash('photo-1614064641938-3bbee52942c7'),
    coverAlt: 'Padlock on a keyboard under red and green light, representing agent security',
    tags: ['Funding', 'AI security', 'AI agents'],
    kind: 'News',
    author: 'engineering',
    source: {
      name: 'TechCrunch',
      url: 'https://techcrunch.com/2026/09/01/air-raises-50m-to-help-companies-vet-the-skills-and-add-ons-ai-agents-use/',
      date: '2026-09-01',
    },
    intro:
      'On 1 September TechCrunch reported that AIR, founded by Unit 8200 veterans Yair Saban and Niv Hoffman, raised $50 million across two seed rounds — $10M led by Sequoia, then $40M led by Greenoaks — to discover the AI agents running inside companies and continuously vet the skills, tools and add-ons those agents use. Here is why that matters if you run agents, and what to do about it this month.',
    cta: NEWS_CTA,
    sections: [
      {
        id: 'news',
        heading: 'What was announced',
        blocks: [
          {
            type: 'table',
            caption: 'AIR funding, per TechCrunch (1 Sept 2026)',
            headers: ['Item', 'Detail'],
            rows: [
              ['Raised', '$50M across two seed rounds ($10M, then $40M)'],
              ['Leads', 'Sequoia (first round), Greenoaks Capital (second)'],
              ['Founders', 'Yair Saban (CEO), Niv Hoffman (CTO)'],
              ['Product', 'Discovers agents in the enterprise; vets skills, tools and add-ons; blocks unapproved behaviour; marketplace of vetted add-ons'],
              ['Traction', '20+ customers, ~25% large enterprises; strongest demand in financial services and pharma'],
              ['Claim', 'Filters roughly 27% of the add-ons and skills it finds online'],
              ['Use of funds', 'Hiring researchers; go-to-market in the U.S. and Europe'],
            ],
          },
        ],
      },
      {
        id: 'why',
        heading: 'Why this is a category now',
        blocks: [
          {
            type: 'p',
            text: 'Agents do not just answer — they install capabilities. A "skill" or plug-in is code and instructions the agent will follow, and, as AIR’s founders put it to TechCrunch, attackers can poison the content an agent consumes instead of attacking it directly. The number that should worry every CTO is the 27%: roughly one in four add-ons AIR finds fails its checks. If your agents can pull tools from the open internet, a quarter of what they might pull is suspect.',
          },
          {
            type: 'ul',
            items: [
              'Every tool an agent can call is part of your attack surface. Descriptions, not just code — a tool description can carry an injection.',
              'Regulated industries are buying first because their auditors are asking the question; everyone else’s auditors will ask next year.',
              'A whitelist beats detection. AIR’s model — vet, then allow — is the right shape whether you buy it or build it.',
            ],
          },
        ],
      },
      {
        id: 'build',
        heading: 'How to get 80% of this without a vendor',
        blocks: [
          {
            type: 'ol',
            items: [
              'Inventory: list every agent in the company and every tool, MCP server or skill each one can reach. Most teams cannot do this today; it takes a day and is the whole foundation.',
              'Allow-list: agents may only load tools from a repository you control. No fetching skills from the open web at runtime.',
              'Review gate: a new tool or skill goes through the same review as a dependency — who wrote it, what it can do, what it sends where.',
              'Scoped credentials: each agent gets the minimum access its job needs, per environment, never a shared admin token.',
              'Trace everything: every tool call logged with arguments. This is also what makes evals and incident response possible.',
            ],
          },
          {
            type: 'p',
            text: 'We build these controls into every agent we ship and retrofit them onto agents other teams built. If your agents are in production and nobody can answer "what tools can they call?", that is the first engagement to run.',
          },
        ],
      },
    ],
    faq: [
      { q: 'Should we buy an agent security product?', a: 'If you run agents in a regulated industry with a large tool surface, evaluate one. For most businesses running a handful of agents, an inventory, an allow-list and scoped credentials get most of the risk down at a fraction of the cost.' },
      { q: 'Does this apply to MCP servers?', a: 'Directly. An MCP server is a set of tools an agent will trust; vet it like a dependency and scope its credentials.' },
      { q: 'What is the single most common gap you see?', a: 'Agents allowed to fetch tools or instructions from the web at runtime. Close that and you remove the class of attack AIR is built around.' },
    ],
    related: ['hiddenlayer-100m-series-b-ai-security', 'what-is-an-agent-harness', 'mcp-server-development'],
  },

  {
    slug: 'hiddenlayer-100m-series-b-ai-security',
    title: 'HiddenLayer’s $100M Series B: AI Security Goes Mainstream',
    description:
      'HiddenLayer raised $100M with ARR up 10× — a signal that enterprises are deploying agents at scale and paying to secure them. The runtime controls to copy.',
    date: '2026-09-19',
    updated: '2026-09-19',
    cover: unsplash('photo-1550751827-4bd374c3f58b'),
    coverAlt: 'Abstract cybersecurity visual with a shield and network lines',
    tags: ['Funding', 'AI security', 'Enterprise'],
    kind: 'News',
    author: 'engineering',
    source: {
      name: 'TechCrunch',
      url: 'https://techcrunch.com/2026/09/02/hiddenlayer-nabs-100m-as-enterprises-rush-to-secure-their-ai-deployments/',
      date: '2026-09-02',
    },
    intro:
      'TechCrunch reported on 2 September that HiddenLayer closed a $100 million Series B led by Delta-v Capital, with Ten Eleven Ventures, Morgan Stanley, Microsoft’s M12 and Booz Allen Hamilton participating. The headline number is not the round — it is that annual recurring revenue grew more than 10× in a year, over 90% of it from new customers. Enterprises are not piloting agents any more; they are deploying them and buying protection.',
    cta: NEWS_CTA,
    sections: [
      {
        id: 'news',
        heading: 'What was announced',
        blocks: [
          {
            type: 'table',
            caption: 'HiddenLayer Series B, per TechCrunch (2 Sept 2026)',
            headers: ['Item', 'Detail'],
            rows: [
              ['Raised', '$100M Series B'],
              ['Lead', 'Delta-v Capital'],
              ['Also in', 'Ten Eleven Ventures, Morgan Stanley, Microsoft M12, Booz Allen Hamilton'],
              ['Product', 'Discovery, runtime protection, attack simulation and supply-chain security for models, agents and workflows; scans ~50 AI file frameworks'],
              ['Threats covered', 'Prompt injection, agent manipulation, malicious tool use, supply chain'],
              ['Traction', 'ARR up 10×+ in a year, "tens of millions"; >90% of growth from new customers'],
              ['Customers', 'Financial services, large tech, U.S. DoD and intelligence community; a frontier model provider with 700M+ weekly users'],
              ['Use of funds', 'Sales and distribution, engineering and research, expansion into Europe/EMEA'],
            ],
          },
        ],
      },
      {
        id: 'read',
        heading: 'How to read it',
        blocks: [
          {
            type: 'ul',
            items: [
              'Runtime is the new perimeter. HiddenLayer’s CEO framed the product to TechCrunch as endpoint detection and response for AI — protection while the agent runs, not just a scan before deploy.',
              '10× ARR from new logos means the buyers are new to the category. Security teams that had no AI line item last year have one now.',
              'The threat list — prompt injection, agent manipulation, malicious tool use — is the same list a good agent harness defends against by design. Buying a product and building it right are complements, not alternatives.',
            ],
          },
        ],
      },
      {
        id: 'build',
        heading: 'The runtime controls every agent should have',
        blocks: [
          {
            type: 'table',
            caption: 'Minimum runtime security for a production agent',
            headers: ['Control', 'What it stops', 'Cost to add'],
            rows: [
              ['Input treated as untrusted (documents, tool results, web)', 'Prompt injection via content', 'Design decision, ~free'],
              ['Approval gates on irreversible actions', 'Manipulated agent doing damage', '1–2 days'],
              ['Allow-listed tools with scoped credentials', 'Malicious tool use, privilege creep', '2–3 days'],
              ['Full call tracing + anomaly alerts', 'Silent compromise', '2–4 days'],
              ['Adversarial eval set in CI', 'Regressions that reopen a hole', '1 week'],
            ],
          },
          {
            type: 'p',
            text: 'That table is roughly two weeks of work on an existing agent, and it is what we install first when a client asks us to harden something already in production. If a vendor product comes later, it lands on a system that was built to be defended.',
          },
        ],
      },
    ],
    faq: [
      { q: 'Is AI security only an enterprise problem?', a: 'The attackers do not check company size. Any agent that reads external content and can take actions needs the basics in the table above.' },
      { q: 'Do these controls slow the agent down?', a: 'Tracing and allow-lists add negligible latency. Approval gates add human time by design — scope them to irreversible actions only.' },
      { q: 'Can you audit an agent we already run?', a: 'Yes. A one-week review produces the tool inventory, the gaps against the table above, and a fixed-price plan to close them.' },
    ],
    related: ['air-raises-50m-ai-agent-security', 'why-ai-agents-fail-in-production', 'ai-agent-evals-before-production'],
  },

  {
    slug: 'treble-18m-voice-ai-simulation',
    title: 'Treble’s $18M for Voice AI Simulation: The Bar Just Rose',
    description:
      'Treble raised $18M to simulate acoustics for training and testing voice AI, with Amazon and Logitech as customers. What it means if you deploy a voice agent.',
    date: '2026-09-19',
    updated: '2026-09-19',
    cover: unsplash('photo-1478737270239-2f02b77fc618'),
    coverAlt: 'Studio microphone in a recording booth',
    tags: ['Funding', 'Voice agents', 'Audio AI'],
    kind: 'News',
    author: 'engineering',
    source: {
      name: 'TechCrunch',
      url: 'https://techcrunch.com/2026/09/16/iceland-based-treble-raises-18-million-for-its-voice-simulation-platform/',
      date: '2026-09-16',
    },
    intro:
      'On 16 September TechCrunch reported that Reykjavík-based Treble raised an $18 million Series A extension led by Paladin Capital Group, taking total funding past $40 million. Treble uses physics-based acoustic simulation to generate synthetic training data and test voice AI, smart devices and robots in varied sound environments; Amazon and Logitech are customers. "Audio AI is really a data challenge," co-founder Finnur Pind told TechCrunch. For anyone shipping a voice agent, that sentence is the whole story.',
    cta: {
      title: 'Deploying a voice agent? Test it like the big players do.',
      body: 'We build voice agents with a latency budget and an eval set covering noise, accents and interruptions. Four weeks to a phone line that is answered every time.',
    },
    sections: [
      {
        id: 'news',
        heading: 'What was announced',
        blocks: [
          {
            type: 'table',
            caption: 'Treble Series A extension, per TechCrunch (16 Sept 2026)',
            headers: ['Item', 'Detail'],
            rows: [
              ['Raised', '$18M Series A extension; $40M+ total'],
              ['Lead', 'Paladin Capital Group'],
              ['Also in', 'KOMPAS VC, Frumtak Ventures, EIC, Omega ehf'],
              ['Founders', 'Finnur Pind, Jesper Pedersen — acoustic engineers'],
              ['Product', 'Physics-based acoustic simulation to create synthetic training data and test voice models, devices and robots'],
              ['Customers / partners', 'Amazon, Logitech; Hugging Face partnership on speech-recognition benchmarking'],
            ],
          },
        ],
      },
      {
        id: 'why',
        heading: 'Why it matters to a business deploying voice',
        blocks: [
          {
            type: 'p',
            text: 'The companies with the most voice traffic in the world are paying to test their models against simulated rooms, distances, echoes and background noise — because real-world audio is what breaks voice AI. Your clinic’s or dealership’s voice agent faces the same physics: a caller on speakerphone in a car, a reception desk with a TV on, an accent the demo never heard. If the model makers need synthetic acoustic data to be robust, a business deploying their models needs, at minimum, to test in the conditions its callers actually produce.',
          },
        ],
      },
      {
        id: 'build',
        heading: 'The practical version for one business',
        blocks: [
          {
            type: 'ol',
            items: [
              'Record or collect 100+ real calls. Tag the audio conditions, not just the intent: noise, speakerphone, accent, crosstalk.',
              'Build the eval set from those recordings and add synthetic variants — the same call with traffic noise, with a poor line, with an interruption at each step.',
              'Set a latency budget under 800 ms per turn and measure it on every call; slow feels broken faster than wrong does.',
              'Confirm critical details — names, dates, numbers — by reading them back. It is the cheapest robustness you can buy.',
              'Run a week of shadow mode before going live, and keep adding failed calls to the eval set forever.',
            ],
          },
          {
            type: 'p',
            text: 'This is the process in our voice agent tutorial, and it is why the agents we ship hold up on real lines. The funded infrastructure is a signal of where the bar is; the discipline to test against reality is available to anyone.',
          },
        ],
      },
    ],
    faq: [
      { q: 'Do we need simulation software to deploy a voice agent?', a: 'No. You need real recordings from your own callers and a test set built from them. Simulation is how model makers scale that; a single business can do it by hand.' },
      { q: 'How much does robust testing add to a voice agent project?', a: 'About a week inside a four-week build. It is the week that decides whether callers stay on the line.' },
      { q: 'Which languages hold up best?', a: 'English, Hindi and most major languages are production-grade in 2026; accents and code-switching are where testing earns its keep.' },
    ],
    related: ['how-we-build-a-voice-ai-agent-tutorial', 'ai-voice-agent-for-clinics', 'voice-agent-vs-ivr'],
  },

  {
    slug: 'runable-21m-series-a-india-ai-agents',
    title: 'Runable’s $21M Series A: India’s AI Agents Go Global',
    description:
      'Bengaluru’s Runable raised $21M with 1.7M users and a $2M run rate weeks after launching payments. What it says about Indian AI, and the SMB lesson.',
    date: '2026-09-19',
    updated: '2026-09-19',
    cover: unsplash('photo-1504639725590-34d0984388bd'),
    coverAlt: 'Developer workstation with code on multiple screens',
    tags: ['Funding', 'India', 'AI agents'],
    kind: 'News',
    author: 'hassan',
    source: {
      name: 'TechCrunch',
      url: 'https://techcrunch.com/2026/08/26/runable-hits-21m-to-bet-ai-agents-can-go-from-building-businesses-to-growing-them/',
      date: '2026-08-26',
    },
    intro:
      'TechCrunch reported on 26 August that Bengaluru-based Runable raised a $21 million Series A co-led by Susquehanna Venture Capital and Nexus Venture Partners at a $65 million post-money valuation. The product is an agent that lets non-technical users build websites, apps and presentations from prompts — and now run ads, social and SEO for them. The numbers: 1.7 million registered users, a $2 million annualised run rate within three weeks of switching on payments, and a trillion-plus tokens consumed in 90 days. Two things are true at once here: Indian AI products are winning globally, and the hard part is still what comes after the demo.',
    cta: {
      title: 'Want an agent that grows your business, built for your business?',
      body: 'Lead qualification, WhatsApp, bookings, follow-ups — integrated with your systems, not a platform’s. From ₹3.5L, live in three weeks.',
    },
    sections: [
      {
        id: 'news',
        heading: 'What was announced',
        blocks: [
          {
            type: 'table',
            caption: 'Runable Series A, per TechCrunch (26 Aug 2026)',
            headers: ['Item', 'Detail'],
            rows: [
              ['Raised', '$21M Series A at $65M post-money'],
              ['Leads', 'Susquehanna Venture Capital, Nexus Venture Partners'],
              ['Also in', 'Together Fund, Array VC'],
              ['Founders', 'Umesh Kumar (CEO), Saksham Sarda'],
              ['Product', 'Agent that builds sites, apps and decks from prompts; expanding to ad campaigns, social, SEO and chatbot presence'],
              ['Traction', '1.7M registered users; $2M ARR within 3 weeks of launching payments; 1T+ tokens in 90 days, 60–70% from paying customers'],
              ['Markets', 'U.S., U.K., Japan, Brazil'],
              ['Watch-outs', 'Negative gross margins from subsidised AI usage; competition from labs building their own agents'],
            ],
          },
        ],
      },
      {
        id: 'read',
        heading: 'What it says about Indian AI',
        blocks: [
          {
            type: 'ul',
            items: [
              'The customers are global from day one. Runable’s largest markets are the U.S., U.K., Japan and Brazil — built and priced from Bengaluru.',
              'Distribution beats model access. "A business doesn’t require Codex or Claude Code," Umesh Kumar told TechCrunch. "They require real outcomes." The winning layer is the one closest to the customer’s job.',
              'Margins are the open question. Subsidised tokens buy users; the business model has to catch up. Anyone building an agent product should price the tokens in from the start.',
            ],
          },
        ],
      },
      {
        id: 'build',
        heading: 'What a small business should take from it',
        blocks: [
          {
            type: 'p',
            text: 'Runable’s pivot — from building a business’s website to growing the business — is the tell. The demand is not for another website; it is for customers. For a single business the highest-return version of that is not a general platform but an agent wired to your own channels: WhatsApp and phone answered instantly, leads qualified and routed, bookings and follow-ups automated, and a weekly report of what customers asked for. That is a three-week build, it runs on your systems, and its margins are yours.',
          },
          {
            type: 'ul',
            items: [
              'If you sell to consumers in India: a WhatsApp agent first. See our cost breakdown.',
              'If you are appointment-driven: a voice agent on your existing number, after-hours first.',
              'If you are building an AI product: price usage in from day one, and build the eval suite before the growth features.',
            ],
          },
        ],
      },
    ],
    faq: [
      { q: 'Is Runable a competitor to a studio like yours?', a: 'No — it is a self-serve platform for people building their own sites. We build integrated systems for businesses that want it done, on their own infrastructure.' },
      { q: 'What does this round mean for Indian AI funding?', a: 'Inc42 reported Indian AI startups raised about $676M across 57 deals in H1 2026 — over 4× H1 2025. Runable is part of that curve, and a sign that agent products, not just models, are getting funded here.' },
      { q: 'Can we build an agent product ourselves?', a: 'Yes, and we help teams do it — harness, evals, cost control. The tutorials on this site are the playbook.' },
    ],
    related: ['whatsapp-ai-agent-for-business-india', 'top-ai-automation-ideas-small-business-india', 'ai-funding-this-week'],
  },
];
