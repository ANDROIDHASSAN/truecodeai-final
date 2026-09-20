// Blog content. One object per post; rendered by src/pages/Post.tsx and
// prerendered to /blog/<slug>/ at build time. Keep titles ≤ 60 chars and
// descriptions ≤ 160 chars — they become <title> / meta description verbatim.
import { unsplash, readingTime, type Post } from './post-types';
import { aiPosts } from './posts-ai';
import { guidePosts } from './posts-guides';
import { howtoPosts } from './posts-howto';
import { newsPosts } from './posts-news';
import { costPosts } from './posts-costs';
import { industryPosts } from './posts-industries';
import { explainerPosts } from './posts-explainers';
import { comparePosts } from './posts-compare';
import { playbookPosts } from './posts-playbooks';
import { aiEngPosts } from './posts-ai-eng';

export type { Block, Section, Post } from './post-types';

const corePosts: Post[] = [
  {
    slug: 'mvp-development-cost-2026',
    title: 'How Much Does It Cost to Build an MVP in 2026?',
    description:
      'Real MVP development costs in 2026 by tier — from $8k landing-page validators to $120k+ AI products — plus what drives the price up or down.',
    date: '2026-09-02',
    updated: '2026-09-15',
    cover: unsplash('photo-1553877522-43269d4ea984'),
    coverAlt: 'Founders reviewing an MVP roadmap on a whiteboard',
    tags: ['MVP', 'Pricing', 'Startups'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'Every founder asks the same first question, and most agencies dodge it. Here are the numbers we actually quote, what moves them, and how to keep your build in the lower band without shipping something embarrassing.',
    sections: [
      {
        id: 'tiers',
        heading: 'MVP cost by tier',
        blocks: [
          {
            type: 'p',
            text: 'An MVP is not one thing. A waitlist page that validates demand and a two-sided marketplace with payments are both "MVPs", and they differ by 15× in cost. We scope every build into one of four tiers.',
          },
          {
            type: 'table',
            caption: 'Typical MVP tiers, 2026 studio pricing',
            headers: ['Tier', 'What you get', 'Timeline', 'Typical cost'],
            rows: [
              ['Validator', 'Landing page, waitlist, analytics, one manual flow', '1–2 weeks', '$5k – $12k'],
              ['Core MVP', 'Auth, 3–5 core screens, database, admin, deploy', '4–8 weeks', '$25k – $60k'],
              ['Marketplace / SaaS', 'Multi-role, payments, notifications, dashboards', '8–14 weeks', '$60k – $120k'],
              ['AI-native product', 'Core MVP + LLM pipeline, evals, retrieval, guardrails', '8–16 weeks', '$80k – $180k'],
            ],
          },
          {
            type: 'p',
            text: 'These are fixed-price ranges for a dedicated pod (product lead, designer, two engineers, QA) at an Indian studio billing in USD. A US or Western European agency typically lands 2–3× higher for the same scope; a solo freelancer 40–60% lower, with correspondingly higher delivery risk.',
          },
        ],
      },
      {
        id: 'drivers',
        heading: 'What actually moves the price',
        blocks: [
          {
            type: 'p',
            text: 'Four variables explain almost all of the variance between quotes. If you control them before you brief a studio, you control the cost.',
          },
          {
            type: 'ul',
            items: [
              'Number of user roles. Every extra role (buyer, seller, admin, moderator) multiplies screens, permissions and test cases. Two roles is the sweet spot for a first release.',
              'Integrations. Each third-party system — payments, KYC, maps, calendar, CRM — adds a week of edge cases. Ship with one payment provider, not three.',
              'Real-time features. Chat, live location, collaborative editing. All doable, all 2–3× the cost of their request-response equivalent.',
              'Design fidelity. A custom design system costs more than a tuned component library, but pays back if brand is a moat. Most B2B MVPs should start with the library.',
            ],
          },
        ],
      },
      {
        id: 'hidden',
        heading: 'The costs nobody puts in the proposal',
        blocks: [
          {
            type: 'p',
            text: 'Build cost is the headline number, but three line items routinely surprise first-time founders after launch.',
          },
          {
            type: 'table',
            caption: 'Post-launch costs for a Core MVP',
            headers: ['Item', 'Monthly range', 'Notes'],
            rows: [
              ['Cloud hosting', '$50 – $400', 'Serverless keeps this low until real traffic'],
              ['Third-party APIs', '$0 – $800', 'LLM tokens, email, SMS, maps — usage-based'],
              ['Maintenance retainer', '$1.5k – $6k', 'Bug fixes, dependency upgrades, small features'],
              ['App-store & compliance', '$100 – $500', 'Apple/Google fees, SSL, privacy tooling'],
            ],
          },
          {
            type: 'p',
            text: 'Budget 15–20% of the build cost per year for upkeep. An MVP that nobody maintains is a liability within six months.',
          },
        ],
      },
      {
        id: 'cheaper',
        heading: 'How to land in the lower band',
        blocks: [
          {
            type: 'ul',
            items: [
              'Write the one-sentence job of the product before the feature list. Everything that does not serve that sentence is version two.',
              'Bring a competitor teardown. Showing "like X but with Y" saves a week of discovery.',
              'Accept an opinionated stack. Studios are fastest on what they ship every week; exotic requests cost you their learning curve.',
              'Fix scope, not hours. A fixed-price, fixed-scope proposal aligns incentives — the studio eats overruns, not you.',
            ],
          },
          {
            type: 'p',
            text: 'When you are ready for a number, describe the product in three sentences and send it through the form below. We return a scoped plan — architecture, pod, timeline, fixed price — within 48 hours.',
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Can I build an MVP for under $5,000?',
        a: 'Yes, if it is a validator: a landing page, a waitlist and one flow you run manually behind the scenes. A working product with accounts and a database rarely lands under $20k with a professional team.',
      },
      {
        q: 'Is fixed-price or hourly better for an MVP?',
        a: 'Fixed-price with a written scope. Hourly billing pushes risk onto the founder and rewards slow delivery. Reserve hourly for post-launch iteration where scope genuinely cannot be fixed.',
      },
      {
        q: 'How much cheaper is building an MVP in India?',
        a: 'For the same team quality, roughly 50–65% less than a US agency. The gap comes from cost of living, not skill — India ships a large share of the world’s production software.',
      },
      {
        q: 'Do I own the code?',
        a: 'With any reputable studio, yes — fully, on final payment. Get it in the contract, and make sure the repository lives in your GitHub organisation from day one.',
      },
    ],
    related: ['mvp-timeline-how-long', 'ai-agent-development-cost', 'how-to-choose-software-development-company-india'],
  },

  {
    slug: 'ai-agent-development-cost',
    title: 'AI Agent Development Cost: What You Actually Pay For',
    description:
      'What AI agent development costs in 2026 — by agent type, from $6k support bots to $150k+ autonomous workflows — and the four line items that drive it.',
    date: '2026-09-05',
    updated: '2026-09-16',
    cover: unsplash('photo-1677442136019-21780ecad995'),
    coverAlt: 'Abstract visualisation of an AI agent orchestrating tasks',
    tags: ['AI agents', 'Pricing', 'LLM'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      '"AI agent" now covers everything from a FAQ bot to a system that reads your inbox and books freight. The price spread is as wide as the definition. This is how we break it down when a client asks for a quote.',
    sections: [
      {
        id: 'types',
        heading: 'Cost by agent type',
        blocks: [
          {
            type: 'table',
            caption: 'AI agent build cost by type, 2026',
            headers: ['Agent type', 'Example', 'Build', 'Typical cost'],
            rows: [
              ['Retrieval assistant', 'Answers questions over your docs / helpdesk', '2–4 weeks', '$6k – $18k'],
              ['Workflow agent', 'Triages tickets, drafts replies, updates CRM', '4–8 weeks', '$20k – $55k'],
              ['Multi-tool agent', 'Plans, calls 5–15 tools, asks for approval', '8–14 weeks', '$55k – $120k'],
              ['Autonomous system', 'Runs a business process end to end with evals + monitoring', '12–20 weeks', '$120k – $250k'],
            ],
          },
          {
            type: 'p',
            text: 'Notice that model choice barely appears. In 2026 the frontier models are interchangeable for most tasks; what you pay for is the scaffolding around them — tools, memory, evaluation and the failure handling that keeps an agent from confidently doing the wrong thing.',
          },
        ],
      },
      {
        id: 'lineitems',
        heading: 'The four line items',
        blocks: [
          {
            type: 'h3',
            text: '1. Tool integration',
          },
          {
            type: 'p',
            text: 'Every system the agent can act on — Salesforce, Stripe, your internal API — is a tool that needs a schema, permissions, rate-limit handling and tests. Budget 2–4 engineer-days per tool. A ten-tool agent is a month of integration work before any "AI" begins.',
          },
          { type: 'h3', text: '2. Evaluation harness' },
          {
            type: 'p',
            text: 'The part most vendors skip and the part that decides whether the agent survives contact with real users. A proper eval set — 200+ real scenarios, graded automatically, run on every change — is 15–25% of the budget and the best money in the project.',
          },
          { type: 'h3', text: '3. Guardrails and approvals' },
          {
            type: 'p',
            text: 'Which actions can the agent take alone, which need a human click, what happens when it is unsure. This is product design, not prompt engineering, and it is where an agent earns or loses trust inside your company.',
          },
          { type: 'h3', text: '4. Observability' },
          {
            type: 'p',
            text: 'Traces of every run, cost per task, drift alerts. Without it, the first bad week in production is invisible until a customer complains.',
          },
        ],
      },
      {
        id: 'running',
        heading: 'Running costs: tokens are the small part',
        blocks: [
          {
            type: 'p',
            text: 'A workflow agent handling 5,000 tasks a month typically spends $150–$600 on model tokens. The larger recurring costs are the ones that look like ordinary software.',
          },
          {
            type: 'ul',
            items: [
              'Vector store and retrieval infrastructure: $50–$300/month at small scale.',
              'Monitoring and tracing: $0–$200/month depending on tooling.',
              'Prompt and eval maintenance: 2–4 engineer-days a month as models, APIs and your business change.',
              'Human review time for the approval queue — count it, because it is the real cost of a conservative guardrail policy.',
            ],
          },
        ],
      },
      {
        id: 'when',
        heading: 'When an agent is the wrong answer',
        blocks: [
          {
            type: 'p',
            text: 'If the process is deterministic — same inputs, same steps, same output — write ordinary automation. It is cheaper, faster and never hallucinates. Agents earn their cost when inputs are messy, judgement is needed and the volume is too high for humans. If you are not sure which side your problem sits on, describe it in the form below and we will tell you honestly, including when the answer is "you do not need us".',
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Which LLM should the agent use?',
        a: 'Usually the one your team can evaluate best. We default to the strongest available frontier model for reasoning-heavy steps and a smaller, cheaper model for classification and extraction, routed per step. The choice is reversible; the eval harness is what makes switching safe.',
      },
      {
        q: 'Can you build on my existing chatbot?',
        a: 'Often yes. Most chatbots are a retrieval assistant without tools or evals. Upgrading one to a workflow agent is typically 60–70% of a fresh build.',
      },
      {
        q: 'How long until the agent is reliable enough for customers?',
        a: 'Plan on two to four weeks of shadow mode — the agent proposes, a human approves — before it acts alone. The eval pass rate you need depends on the cost of a mistake.',
      },
    ],
    related: ['custom-ml-model-vs-llm-api', 'voice-agent-vs-ivr', 'mvp-development-cost-2026'],
  },

  {
    slug: 'voice-agent-vs-ivr',
    title: 'Voice AI Agents vs IVR: Which Should You Use in 2026?',
    description:
      'Voice AI agents vs traditional IVR compared on cost, containment rate, setup time and customer experience — with a decision table for your call volume.',
    date: '2026-09-08',
    updated: '2026-09-17',
    cover: unsplash('photo-1590602847861-f357a9332bbc'),
    coverAlt: 'Headset on a desk beside a laptop showing a call dashboard',
    tags: ['Voice agents', 'Customer support', 'Comparison'],
    kind: 'Comparison',
    author: 'hassan',
    intro:
      'Press 1 for sales, press 2 for support, press 0 to scream. IVR trees were the best we had for twenty years. Voice agents that hold a real conversation changed that — but they are not the right call for every business. Here is the honest comparison.',
    sections: [
      {
        id: 'compare',
        heading: 'Side by side',
        blocks: [
          {
            type: 'table',
            caption: 'IVR vs voice AI agent, typical mid-size deployment',
            headers: ['Dimension', 'Traditional IVR', 'Voice AI agent'],
            rows: [
              ['Setup time', '1–3 weeks', '3–8 weeks'],
              ['Upfront cost', '$3k – $15k', '$15k – $60k'],
              ['Per-minute cost', '$0.01 – $0.03', '$0.06 – $0.15'],
              ['Handles open-ended requests', 'No', 'Yes'],
              ['Containment rate (no human needed)', '15 – 35%', '45 – 75%'],
              ['Caller satisfaction', 'Low', 'High, if latency < 800 ms'],
              ['Books / changes appointments', 'Only with rigid scripting', 'Natively'],
              ['Works after hours', 'Yes, poorly', 'Yes, identically to daytime'],
            ],
          },
          {
            type: 'p',
            text: 'The per-minute cost looks worse for the agent until you weigh it against containment. A call that an IVR passes to a human costs $4–$9 of agent time. If the voice agent resolves an extra 30% of calls, it pays for itself in the first month at almost any volume above 1,000 calls.',
          },
        ],
      },
      {
        id: 'ivr-wins',
        heading: 'When IVR still wins',
        blocks: [
          {
            type: 'ul',
            items: [
              'Fewer than ~500 calls a month. The setup cost of a voice agent needs volume to amortise.',
              'Every call is one of three things. If callers only ever check a balance, pay a bill or reach a department, a menu is faster than a conversation.',
              'Strict regulatory scripting. Some financial and medical flows must read fixed wording; a menu guarantees it.',
              'No integration budget. A voice agent without access to your booking system or CRM is just an expensive IVR.',
            ],
          },
        ],
      },
      {
        id: 'agent-wins',
        heading: 'When a voice agent wins',
        blocks: [
          {
            type: 'ul',
            items: [
              'Appointment-driven businesses: clinics, salons, dealerships, property viewings. Booking, rescheduling and reminders are the killer use case.',
              'Inbound lead qualification. The agent asks the five questions your SDR would, then routes hot leads live.',
              'Multilingual callers. Switching language mid-call is trivial for an agent and impossible for a menu.',
              'Overflow and after-hours. The agent answers the 40% of calls that today go to voicemail — and voicemail converts at nearly zero.',
            ],
          },
        ],
      },
      {
        id: 'quality',
        heading: 'What makes or breaks a voice agent',
        blocks: [
          {
            type: 'p',
            text: 'Three technical decisions decide whether callers hang up or convert.',
          },
          {
            type: 'ul',
            items: [
              'Latency. Response under 800 ms feels human; over 1.5 s feels broken. This constrains model choice, hosting region and how much retrieval happens mid-turn.',
              'Interruption handling. Callers talk over the agent constantly. Barge-in must cut speech instantly and the agent must recover the thread.',
              'Graceful escalation. The moment the agent is unsure, it should say so and hand off with a warm summary — not loop. This is where most DIY builds fail.',
            ],
          },
          {
            type: 'p',
            text: 'We build voice agents on a streaming stack tuned for sub-second turns, with escalation designed in from the first call flow. Tell us your call volume and top three call reasons through the form below and we will tell you which side of the table you are on.',
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Do callers know they are talking to an AI?',
        a: 'They should be told, and in several jurisdictions must be. A one-line disclosure at the start does not measurably hurt containment; a mid-call surprise does.',
      },
      {
        q: 'Can a voice agent use my existing phone number?',
        a: 'Yes. Calls are forwarded from your carrier or routed via SIP; the number, and your ability to take it back, stay with you.',
      },
      {
        q: 'What languages are supported?',
        a: 'Any language the underlying speech and language models support well — English, Hindi, Spanish, Arabic, Portuguese and most European languages are production-grade in 2026. Accent-heavy or code-switched speech needs a short tuning phase.',
      },
    ],
    related: ['ai-agent-development-cost', 'custom-ml-model-vs-llm-api', 'mvp-development-cost-2026'],
  },

  {
    slug: 'how-to-choose-software-development-company-india',
    title: 'How to Choose a Software Development Company in India',
    description:
      'A 2026 checklist for hiring a software development company in India — green flags, red flags, the questions to ask, and how to structure the contract.',
    date: '2026-09-10',
    updated: '2026-09-18',
    cover: unsplash('photo-1522071820081-009f0129c71c'),
    coverAlt: 'Engineering team collaborating around a table with laptops',
    tags: ['Hiring', 'Outsourcing', 'India'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'India produces excellent software teams and dreadful ones, and their websites look identical. After a decade on both sides of these engagements, here is the checklist we would use to hire us — or someone else.',
    sections: [
      {
        id: 'flags',
        heading: 'Green flags and red flags',
        blocks: [
          {
            type: 'table',
            caption: 'Signals to look for in the first two calls',
            headers: ['Topic', 'Green flag', 'Red flag'],
            rows: [
              ['Scoping', 'Asks what the product must do; pushes back on features', 'Says yes to everything'],
              ['Pricing', 'Fixed price with written scope, milestone payments', 'Hourly only, or a large upfront deposit'],
              ['Team', 'Names the engineers, shows their GitHub', '"Our team of 500"'],
              ['Process', 'Weekly demos on a live staging link', 'Screenshots and slide decks'],
              ['Code ownership', 'Repo in your org from day one', 'Handover "at the end"'],
              ['Past work', 'Live products you can click, clients you can call', 'Logos without links'],
              ['Communication', 'A named lead, overlapping hours, async written updates', 'Account manager relay'],
            ],
          },
        ],
      },
      {
        id: 'questions',
        heading: 'Seven questions to ask on the first call',
        blocks: [
          {
            type: 'ul',
            items: [
              '"Who exactly will write the code, and can I speak to them?" — The answer tells you whether you are hiring a team or a sales funnel.',
              '"Show me a product you shipped that is still live." — Then open it on your phone during the call.',
              '"What would you cut from my scope?" — A good team has an opinion within minutes.',
              '"What happens if you miss a milestone?" — Look for a concrete answer: credits, extended hours, a kill clause.',
              '"How do you handle security and secrets?" — Expect a real answer about secret management, access review and dependency scanning.',
              '"What is your typical bug rate after launch?" — Nobody has a precise number; the good ones have a process for it.',
              '"Can I talk to a client whose project went badly?" — The best studios have one and will tell you what they learned.',
            ],
          },
        ],
      },
      {
        id: 'contract',
        heading: 'How to structure the contract',
        blocks: [
          {
            type: 'ul',
            items: [
              'Fixed scope, fixed price, milestone-based payment: 20–30% to start, the rest on demonstrated milestones, never more than 30% in advance.',
              'IP assignment on payment, with the repository in your organisation from the first commit.',
              'A change-request process with a price list — small changes should be cheap and fast, not a renegotiation.',
              'A warranty window: 30–60 days of bug fixes at no cost after launch.',
              'Exit terms: you can stop at any milestone and keep everything delivered.',
            ],
          },
        ],
      },
      {
        id: 'cost',
        heading: 'What it should cost',
        blocks: [
          {
            type: 'p',
            text: 'In 2026 a senior Indian engineer through a studio bills $30–$60 an hour equivalent; a full pod (lead, designer, two engineers, QA) runs $18k–$35k a month. If a quote is far below that, someone junior is doing the work; far above it, you are paying for the sales team. See our MVP cost breakdown for the project-level view.',
          },
          {
            type: 'p',
            text: 'If you want to run this checklist on us, use the form below. We will introduce you to the engineers who would work on your build on the first call.',
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Is it safe to outsource to India in 2026?',
        a: 'As safe as hiring anywhere, provided you check the same things: live references, named engineers, code in your repo, milestone payments. The country is not the risk; the vetting is.',
      },
      {
        q: 'Should I hire freelancers or a studio?',
        a: 'Freelancers for a validator or a well-defined feature; a studio when you need design, engineering and QA together and someone accountable for the whole result.',
      },
      {
        q: 'How do time zones work?',
        a: 'India overlaps the European morning fully and the US morning partially. Insist on a fixed daily overlap window and written async updates for the rest.',
      },
    ],
    related: ['mvp-development-cost-2026', 'mvp-timeline-how-long', 'ai-agent-development-cost'],
  },

  {
    slug: 'custom-ml-model-vs-llm-api',
    title: 'Custom ML Model vs LLM API: When to Train Your Own',
    description:
      'When a custom-trained ML model beats calling an LLM API — cost per prediction, latency, data privacy and accuracy compared, with a decision table.',
    date: '2026-09-12',
    updated: '2026-09-18',
    cover: unsplash('photo-1591453089816-0fbb971b454c'),
    coverAlt: 'Typewriter with a page reading Machine Learning',
    tags: ['Machine learning', 'LLM', 'Architecture'],
    kind: 'Comparison',
    author: 'hassan',
    intro:
      'The default in 2026 is to call an API and move on. It is usually right. But there is a large class of problems where a small model you own is 100× cheaper, 10× faster and more accurate — and teams reach for the API anyway because nobody told them.',
    sections: [
      {
        id: 'decision',
        heading: 'The decision table',
        blocks: [
          {
            type: 'table',
            caption: 'LLM API vs custom model, by problem shape',
            headers: ['Problem', 'LLM API', 'Custom model', 'Usually pick'],
            rows: [
              ['Open-ended text generation', 'Excellent', 'Poor unless huge', 'API'],
              ['Classification with 10k+ labelled examples', 'Good, expensive at scale', 'Excellent, near-free', 'Custom'],
              ['Extraction from structured documents', 'Good', 'Excellent after fine-tune', 'Custom at volume'],
              ['Recommendation / ranking', 'Weak', 'Excellent', 'Custom'],
              ['Forecasting, anomaly detection', 'Not applicable', 'Excellent', 'Custom'],
              ['Vision on your own imagery', 'Good, costly per image', 'Excellent, cheap', 'Custom at volume'],
              ['Low-volume, changing tasks', 'Excellent', 'Overhead not worth it', 'API'],
              ['Strict data residency', 'Needs enterprise contract', 'Runs on your metal', 'Custom'],
            ],
          },
        ],
      },
      {
        id: 'economics',
        heading: 'The unit economics',
        blocks: [
          {
            type: 'p',
            text: 'Take a support-ticket classifier handling one million tickets a month. Through a frontier LLM API at ~500 tokens per call, that is roughly $1,500–$5,000 a month, forever, with 1–3 s latency. A fine-tuned small model on the same task costs $8k–$20k to build, runs on a $150/month instance, answers in 30 ms and — with 20k labelled tickets — is more accurate, because it has seen your labels and the API has not.',
          },
          {
            type: 'p',
            text: 'The crossover is usually between 100k and 500k predictions a month. Below it, pay the API and spend your engineering on product. Above it, the custom model pays for itself inside two quarters.',
          },
        ],
      },
      {
        id: 'hybrid',
        heading: 'The hybrid most teams should build',
        blocks: [
          {
            type: 'p',
            text: 'The best production systems we ship are rarely one or the other.',
          },
          {
            type: 'ul',
            items: [
              'Use the LLM API to label your first 5–10k examples, with human review on a sample. This turns weeks of annotation into days.',
              'Train a small model on those labels. Route the confident 90% of traffic to it.',
              'Send the uncertain 10% to the LLM, log the answer, and fold it back into the training set monthly.',
              'Keep an eval set that never changes so you can see whether each retrain actually helped.',
            ],
          },
          {
            type: 'p',
            text: 'This pattern gives you API-level coverage on hard cases and custom-model economics on the bulk, and it compounds: every month the small model gets a little better and the API bill gets a little smaller.',
          },
        ],
      },
      {
        id: 'needs',
        heading: 'What you need to train your own',
        blocks: [
          {
            type: 'ul',
            items: [
              'Data: a few thousand labelled examples for classification or extraction; tens of thousands for anything generative.',
              'A clear metric that maps to business value — not "accuracy" but "tickets mis-routed per thousand".',
              'A deployment target you can monitor. A model nobody watches drifts silently.',
              'Someone accountable for retraining. Models are not software; they decay.',
            ],
          },
          {
            type: 'p',
            text: 'Not sure which side of the crossover you are on? Send us the task and your monthly volume through the form below. We will run the numbers and tell you whether to train, call or hybrid — before you spend anything.',
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Does fine-tuning an LLM count as a custom model?',
        a: 'It sits between the two. Fine-tuning a hosted LLM improves format and tone cheaply but keeps API pricing and latency. Fine-tuning an open-weights model you host yourself gets you the custom-model economics.',
      },
      {
        q: 'How much data do I really need?',
        a: 'For a classifier with a handful of classes, 2–5k clean examples typically beats a prompted LLM. Quality matters more than quantity — 2k consistent labels beat 20k noisy ones.',
      },
      {
        q: 'What about data privacy?',
        a: 'A model you host never sends data outside your infrastructure. For regulated data that alone can decide the question.',
      },
    ],
    related: ['ai-agent-development-cost', 'voice-agent-vs-ivr', 'mvp-development-cost-2026'],
  },

  {
    slug: 'mvp-timeline-how-long',
    title: 'How Long Does It Take to Build an MVP? Week by Week',
    description:
      'A realistic week-by-week MVP timeline — discovery, design, build and launch, where projects slip, and how to ship in eight weeks instead of twenty.',
    date: '2026-09-14',
    updated: '2026-09-19',
    cover: unsplash('photo-1506784983877-45594efa4cbe'),
    coverAlt: 'A wall calendar with a sprint schedule pinned to it',
    tags: ['MVP', 'Process', 'Startups'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'Six to twelve weeks for a real product with a real team. Longer than that and either the scope is not an MVP or the team is not shipping. This is the week-by-week plan we run, including the two weeks where projects usually die.',
    sections: [
      {
        id: 'timeline',
        heading: 'The eight-week plan',
        blocks: [
          {
            type: 'table',
            caption: 'Core MVP, dedicated pod of five',
            headers: ['Week', 'Phase', 'What ships', 'Your job'],
            rows: [
              ['1', 'Discovery', 'Scope doc, user flows, architecture, fixed price', 'Decide fast; answer within 24h'],
              ['2', 'Design', 'Clickable prototype of every core screen', 'Test it on 3 real users'],
              ['3–4', 'Build I', 'Auth, data model, first two flows on staging', 'Use staging weekly, file bugs'],
              ['5–6', 'Build II', 'Remaining flows, admin, integrations, emails', 'Prepare launch list & content'],
              ['7', 'Hardening', 'QA pass, security review, load test, analytics', 'Recruit first 20 users'],
              ['8', 'Launch', 'Production deploy, monitoring, handover docs', 'Ship it. Watch the dashboard'],
            ],
          },
          {
            type: 'p',
            text: 'Add two to four weeks for marketplaces and two to eight for AI-native products, where the evaluation loop is its own workstream. Anything past sixteen weeks should be re-scoped into two releases.',
          },
        ],
      },
      {
        id: 'slips',
        heading: 'Where projects slip',
        blocks: [
          {
            type: 'p',
            text: 'Almost every late MVP we have rescued lost its time in the same three places.',
          },
          {
            type: 'ul',
            items: [
              'Week 1 decisions dragging into week 4. Every unanswered question in discovery costs three days downstream. A founder who answers in an hour ships a month earlier than one who answers in a week.',
              'Design revisited during build. Once engineering starts, design changes are 5× the cost. Test the prototype hard in week 2 and then freeze it.',
              'Integration surprises. The third-party API that "definitely supports that" does not. Spike every integration in week 3, not week 6.',
            ],
          },
        ],
      },
      {
        id: 'faster',
        heading: 'How to ship faster',
        blocks: [
          {
            type: 'ul',
            items: [
              'One decision-maker on your side, with the authority to say no.',
              'A component library, not a custom design system, for v1.',
              'Two user roles maximum. Admin can be a database view.',
              'Deploy to staging from day one. Momentum is visible progress.',
              'Cut the last 20% of scope in week 5 if it threatens week 8. You can add it back in week 9.',
            ],
          },
          {
            type: 'p',
            text: 'We commit to a launch date in the week-1 proposal and price the build fixed against it. Describe your product in the form below and we will send that proposal — timeline, pod, price — within 48 hours.',
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Can an MVP be built in two weeks?',
        a: 'A validator — landing page, waitlist, one manually-run flow — yes. A product with accounts and data, no, not by a team you would want to keep.',
      },
      {
        q: 'What if I already have designs?',
        a: 'That saves most of week 2, provided the designs are complete and tested. Incomplete designs cost more time than no designs, because engineering fills gaps by guessing.',
      },
      {
        q: 'How much of my time does it take?',
        a: 'Plan on 3–5 hours a week: one review call, testing on staging, and fast answers in the shared channel. Founders who go quiet for a fortnight add a fortnight.',
      },
    ],
    related: ['mvp-development-cost-2026', 'how-to-choose-software-development-company-india', 'ai-agent-development-cost'],
  },
];

// Server/build-time source of truth. The client bundle never imports this file:
// vite.config.ts swaps it for posts.client.ts, which reads the per-page payload below.
export const posts: Post[] = [
  ...newsPosts,
  ...corePosts,
  ...aiPosts,
  ...guidePosts,
  ...howtoPosts,
  ...costPosts,
  ...industryPosts,
  ...explainerPosts,
  ...comparePosts,
  ...playbookPosts,
  ...aiEngPosts,
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

export { readingTime };

export const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

/** Build-time check (called from scripts/prerender.mjs): related slugs are dropped silently at render, so fail here. */
export function checkPosts() {
  const seen = new Set<string>();
  for (const p of posts) {
    if (seen.has(p.slug)) throw new Error(`posts: duplicate slug ${p.slug}`);
    seen.add(p.slug);
  }
  for (const p of posts) for (const r of p.related) if (!seen.has(r)) throw new Error(`posts: ${p.slug} → unknown related ${r}`);
}

/** Card-level fields only — what listings, related-post cards and breadcrumbs need. */
const stub = (p: Post): Post => ({
  slug: p.slug,
  title: p.title,
  description: p.description,
  date: p.date,
  updated: p.updated,
  cover: p.cover,
  coverAlt: p.coverAlt,
  tags: p.tags,
  kind: p.kind,
  author: p.author,
  minutes: readingTime(p),
  intro: '',
  sections: [],
  faq: [],
  related: [],
});

/** JSON embedded in each prerendered page: index of every post + the full post rendered at `path`. */
export function postsPayload(path: string) {
  const post = path.startsWith('/blog/') ? postBySlug(path.slice(6)) : undefined;
  return JSON.stringify({ index: posts.map(stub), post }).replace(/</g, '\\u003c');
}
