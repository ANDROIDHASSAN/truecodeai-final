// Tutorials — "how we build X", "how we improve Y". Written from the delivery
// playbook, step by step, with the decisions and numbers we actually use.
import { unsplash, type Post } from './post-types';

const TUTORIAL_CTA = {
  title: 'Want this done for you — or taught to your team?',
  body: 'This is our playbook. We run it for clients in weeks, and we teach it in a hands-on workshop on your codebase. Reply within 24 hours.',
};

export const howtoPosts: Post[] = [
  {
    slug: 'how-we-build-a-whatsapp-ai-agent-step-by-step',
    title: 'How We Build a WhatsApp AI Agent, Step by Step',
    description:
      'Our three-week process for building a WhatsApp AI agent on the official Business API — message analysis, tool design, evals, shadow mode and launch.',
    date: '2026-09-19',
    updated: '2026-09-19',
    cover: unsplash('photo-1512941937669-90a1b58e7e9c'),
    coverAlt: 'Phone with a messaging app open on a wooden desk',
    tags: ['WhatsApp', 'Tutorial', 'AI agents'],
    kind: 'Tutorial',
    author: 'engineering',
    intro:
      'This is the playbook we run every time a business asks for a WhatsApp agent. Three weeks, nine steps, no magic. If you follow it yourself you will end up with something that works; if you want it done, it is what you are paying for.',
    cta: TUTORIAL_CTA,
    sections: [
      {
        id: 'week1',
        heading: 'Week 1 — understand the conversations',
        blocks: [
          {
            type: 'ol',
            items: [
              'Export the last 500–2,000 real WhatsApp conversations. Not the ones the owner remembers — all of them. This is the only honest picture of what customers ask.',
              'Cluster them into message types. Nearly every business lands on 6–12: price enquiry, availability, booking, order status, complaint, location, "are you open", and a long tail. Count each one.',
              'Decide, per type, what the agent does: answer fully, collect details and hand off, or hand off immediately. Complaints and anything emotional are always immediate hand-off.',
              'List the systems the agent needs to read or write for the top types — calendar, POS, order system, CRM. Confirm each has an API or a workable export. This list is the real scope.',
            ],
          },
          {
            type: 'table',
            caption: 'Typical message-type split for a service business',
            headers: ['Message type', 'Share', 'Agent action'],
            rows: [
              ['Price / service enquiry', '25 – 35%', 'Answer from catalogue, offer booking'],
              ['Availability / booking', '20 – 30%', 'Check calendar, book, confirm'],
              ['Order or appointment status', '10 – 20%', 'Look up, answer'],
              ['Location / hours', '5 – 10%', 'Answer with pin and hours'],
              ['Complaint / problem', '5 – 10%', 'Acknowledge, hand off with summary'],
              ['Everything else', '10 – 20%', 'Collect details, hand off'],
            ],
          },
        ],
      },
      {
        id: 'week2',
        heading: 'Week 2 — build it and run it in the shadows',
        blocks: [
          {
            type: 'ol',
            items: [
              'Set up the official WhatsApp Business API on the business’s existing number, with message templates submitted for approval on day one — approval takes days and blocks launch if left late.',
              'Write the agent’s tools, one per action from step 3: check_availability, book_slot, get_order_status, create_lead, handoff_to_human. Strict input schemas; descriptions written for the model with an example each.',
              'Write the system prompt last, and keep it short: who the business is, tone, languages, what to do when unsure ("say you will connect them to a person, then call handoff_to_human"). Every rule that can be enforced in code goes in code, not the prompt.',
              'Build the eval set from the week-1 export: 150+ real conversations with the expected action and, where relevant, the expected tool call. Run it on every change. Target 95%+ on booking and status, 100% on hand-off for complaints.',
              'Shadow mode: the agent drafts every reply, a staff member approves or edits before it sends. Every edit becomes a new eval case. Run for 5–7 working days.',
            ],
          },
        ],
      },
      {
        id: 'week3',
        heading: 'Week 3 — launch and measure',
        blocks: [
          {
            type: 'ol',
            items: [
              'Go live on after-hours traffic first, then overflow, then everything — each step gated on the shadow-mode numbers holding.',
              'Ship the dashboard the owner will actually open: conversations handled, bookings made, hand-offs, and the list of questions the agent could not answer. That last list is the roadmap.',
              'Weekly for the first month: review hand-offs and misses, add eval cases, adjust tools. Most agents gain 5–10 points of containment in month one from this loop alone.',
            ],
          },
          {
            type: 'p',
            text: 'Total: three weeks, roughly 120–200 engineer-hours, and an agent that answers most messages in under five seconds in the customer’s language. We build these for $4k–$20k depending on integrations, or teach the process in a one-day workshop.',
          },
        ],
      },
    ],
    faq: [
      { q: 'Which model do you use?', a: 'A current frontier model for the conversation and tool selection, with adaptive thinking on and a modest effort setting for latency; a cheaper model for simple classification steps. The eval set makes swapping safe.' },
      { q: 'What about languages?', a: 'The eval set must include Hindi, Hinglish and regional-language conversations in the real proportions from the export. That is where bots built on English-only tests fail.' },
      { q: 'How do you handle spam and abuse?', a: 'Rate limits per number, a short-circuit for abusive messages, and a rule that the agent never argues — it hands off or ends politely.' },
    ],
    related: ['whatsapp-ai-agent-for-business-india', 'how-we-build-agent-evals-tutorial', 'top-ai-automation-ideas-small-business-india'],
  },

  {
    slug: 'how-we-build-a-voice-ai-agent-tutorial',
    title: 'How We Build a Voice AI Agent: Our 4-Week Process',
    description:
      'How we build a production voice AI agent in four weeks — call-reason analysis, streaming stack, latency budget, barge-in, escalation, shadow mode, launch.',
    date: '2026-09-19',
    updated: '2026-09-19',
    cover: unsplash('photo-1478737270239-2f02b77fc618'),
    coverAlt: 'Studio microphone in a recording booth',
    tags: ['Voice agents', 'Tutorial', 'AI agents'],
    kind: 'Tutorial',
    author: 'engineering',
    intro:
      'Voice is the least forgiving agent surface: a slow or clumsy reply and the caller hangs up. This is the process we use to ship voice agents that people actually stay on the line with, with the latency numbers and design rules we hold ourselves to.',
    cta: TUTORIAL_CTA,
    sections: [
      {
        id: 'design',
        heading: 'Week 1 — call reasons and the latency budget',
        blocks: [
          {
            type: 'ol',
            items: [
              'Listen to 100+ real calls or read their transcripts. Tag each by reason. Like WhatsApp, it collapses to 6–10 types — and the top three are usually 70% of volume.',
              'Write the call flows for the top three only. Each flow is a short script of what the agent must collect and what it must never say. Everything else hands off.',
              'Set the latency budget and design to it: under 800 ms from the caller finishing to the agent starting to speak. That budget is split across speech-to-text, model, and text-to-speech, and it rules out slow retrieval mid-turn.',
              'Confirm integrations: the calendar or CRM the agent books into, and how transfers reach staff (SIP, forwarding, a queue).',
            ],
          },
          {
            type: 'table',
            caption: 'Our latency budget per turn',
            headers: ['Stage', 'Target', 'How we hit it'],
            rows: [
              ['End-of-speech detection', '< 150 ms', 'Tuned VAD, no fixed silence timers'],
              ['Speech-to-text', '< 200 ms', 'Streaming STT, partials used early'],
              ['Model first token', '< 300 ms', 'Short context, cached system prompt, right model per step'],
              ['Text-to-speech first audio', '< 150 ms', 'Streaming TTS, sentence-level chunking'],
              ['Total', '< 800 ms', 'Measured on every call, alerted above 1 s'],
            ],
          },
        ],
      },
      {
        id: 'build',
        heading: 'Week 2 — the streaming stack',
        blocks: [
          {
            type: 'ol',
            items: [
              'Wire telephony to a streaming pipeline: audio in → streaming STT → model with tools → streaming TTS → audio out. Everything streams; nothing waits for a full sentence.',
              'Implement barge-in properly: when the caller speaks, cut TTS within 100 ms, keep what was said, and let the model recover the thread. Callers interrupt constantly.',
              'Build the tools: check_availability, book, reschedule, lookup, transfer_with_summary, take_message. Same rules as any agent — strict schemas, model-readable descriptions.',
              'Write the escalation rules in code: any clinical, legal, financial or emotional content transfers. The agent says it is transferring, and the human receives a spoken and written summary.',
              'Add the disclosure line at call start and make sure the agent never pretends to be human if asked.',
            ],
          },
        ],
      },
      {
        id: 'test',
        heading: 'Weeks 3–4 — evals, shadow mode, launch',
        blocks: [
          {
            type: 'ol',
            items: [
              'Build an eval set of 150+ scripted calls covering each flow, accents, background noise, interruptions and the emotional edge cases. Grade on the action taken (booked, transferred, message taken), not on wording.',
              'Shadow mode: the agent listens to live calls and proposes what it would do, staff see it, nobody hears it. Compare against what staff actually did for a week.',
              'Launch on after-hours and overflow first. Every call is recorded and transcribed; the first-week review is where the last 10% of quality comes from.',
              'Instrument the three numbers that matter: answer rate, containment (calls completed without a human), and bookings made. Report them weekly to the owner.',
            ],
          },
          {
            type: 'p',
            text: 'Four weeks, and a phone line that is answered every time. We build voice agents for $8k–$25k, integrated with your systems, and we teach the streaming stack and latency engineering in a two-day workshop.',
          },
        ],
      },
    ],
    faq: [
      { q: 'Which speech and language models do you use?', a: 'We pick per deployment for latency and language coverage, and we keep the stack swappable. The eval set is what lets us change a component without regressions.' },
      { q: 'Can the agent make outbound calls?', a: 'Yes — reminders, confirmations, follow-ups. Outbound needs consent handling and calling-hours rules, which we build in from the start.' },
      { q: 'How do you handle poor audio or strong accents?', a: 'They are in the eval set from day one, and the agent is designed to confirm critical details — names, dates, numbers — by reading them back.' },
    ],
    related: ['ai-voice-agent-for-clinics', 'voice-agent-vs-ivr', 'how-we-build-agent-evals-tutorial'],
  },

  {
    slug: 'how-we-build-agent-evals-tutorial',
    title: 'How We Build an Eval Suite for an AI Agent (Tutorial)',
    description:
      'Step-by-step tutorial for building an AI agent eval suite: sourcing scenarios, defining expected actions, choosing graders, wiring into CI, keeping it alive.',
    date: '2026-09-19',
    updated: '2026-09-19',
    cover: unsplash('photo-1551288049-bebda4e38f71'),
    coverAlt: 'Analytics dashboard with pass and fail metrics',
    tags: ['Evals', 'Tutorial', 'AI agents'],
    kind: 'Tutorial',
    author: 'engineering',
    intro:
      'The eval suite is the part of an agent build that separates a product from a demo. This is the exact sequence we use to build one — for agents we wrote and for agents we inherited — in about two weeks of focused work.',
    cta: TUTORIAL_CTA,
    sections: [
      {
        id: 'source',
        heading: 'Step 1–3 — source the scenarios',
        blocks: [
          {
            type: 'ol',
            items: [
              'Collect real inputs: transcripts, tickets, documents, tool logs. If the agent is not live yet, use the human process it replaces — the last 500 tickets your team handled are the best test set you will ever get.',
              'Sample 150–300 across the distribution, then deliberately over-weight the expensive failures: refunds, cancellations, anything irreversible, anything with a compliance angle.',
              'Add adversarial cases by hand: prompt injection inside a document or a tool result, requests for secrets, out-of-scope tasks, contradictory instructions. Twenty to thirty is enough to start.',
            ],
          },
        ],
      },
      {
        id: 'expect',
        heading: 'Step 4–5 — define what "correct" means',
        blocks: [
          {
            type: 'ol',
            items: [
              'For each scenario, write the expected outcome as something checkable: the tool that should be called and its key arguments, the final state in the system, or a hand-off. Avoid "a good response" — that is not a test.',
              'Where a judgement call is unavoidable (tone, completeness), write a three-to-five-line rubric with concrete criteria and a pass bar. A model grades against it; a human audits a sample weekly.',
            ],
          },
          {
            type: 'table',
            caption: 'Scenario record we use',
            headers: ['Field', 'Example'],
            rows: [
              ['id', 'refund-partial-014'],
              ['input', 'Customer message + order record + policy snippet'],
              ['expected_action', 'call issue_refund with amount ≤ 40% of order; then handoff'],
              ['grader', 'structured (tool + args) + rubric (tone)'],
              ['class', 'high-risk'],
              ['pass_bar', '100% for class; 95% overall'],
            ],
          },
        ],
      },
      {
        id: 'run',
        heading: 'Step 6–8 — run it, wire it in, keep it honest',
        blocks: [
          {
            type: 'ol',
            items: [
              'Write a runner that executes each scenario against the agent with tools mocked or sandboxed, records the trace, grades it and produces a per-class pass rate and a diff against the last run.',
              'Put it in CI. A prompt, tool or model change that drops any high-risk class below its bar blocks the merge. This single rule prevents most production regressions.',
              'Split a held-out set — 20% — that nobody tunes against. Report the held-out number as the real one; the rest is for development.',
            ],
          },
        ],
      },
      {
        id: 'maintain',
        heading: 'Step 9 — keep it alive',
        blocks: [
          {
            type: 'ol',
            items: [
              'Every production failure becomes a scenario the same day. Every shadow-mode edit becomes a scenario. Prune cases that no longer reflect the business.',
              'Re-audit model grades monthly: sample 30, grade by hand, compare. If agreement drops, fix the rubric.',
            ],
          },
          {
            type: 'p',
            text: 'A suite built this way costs 15–25% of the agent budget and pays for itself the first time it stops a bad deploy. We build suites for agents we did not write, and we teach this method in a one-day workshop.',
          },
        ],
      },
    ],
    faq: [
      { q: 'How many scenarios before it is useful?', a: 'Fifty, honestly sourced, beats five hundred invented ones. Start at 150 if you can; grow from production.' },
      { q: 'How much does running it cost?', a: 'Cents to a few dollars per full run for most agents; model-graded rubrics are the main cost. Run the structured checks on every commit and the rubric set nightly if budget matters.' },
      { q: 'Can the eval set be used to compare models?', a: 'That is one of its best uses. Swap the model, run the suite, read the per-class diff. No opinions required.' },
    ],
    related: ['ai-agent-evals-before-production', 'why-ai-agents-fail-in-production', 'how-we-cut-llm-costs-without-losing-quality'],
  },

  {
    slug: 'how-we-build-an-mcp-server-tutorial',
    title: 'How We Build an MCP Server for a SaaS Product',
    description:
      'Our process for shipping a production MCP server in two to four weeks — tool surface design, descriptions, auth, security testing, evals and handover.',
    date: '2026-09-19',
    updated: '2026-09-19',
    cover: unsplash('photo-1555949963-aa79dcee981c'),
    coverAlt: 'Close-up of source code on a monitor',
    tags: ['MCP', 'Tutorial', 'Integrations'],
    kind: 'Tutorial',
    author: 'engineering',
    intro:
      'An MCP server is a small amount of code and a large amount of design. Most of the two to four weeks goes on deciding what to expose and how to describe it so an agent picks the right tool every time. This is how we do it.',
    cta: TUTORIAL_CTA,
    sections: [
      {
        id: 'design',
        heading: 'Steps 1–4 — design the tool surface',
        blocks: [
          {
            type: 'ol',
            items: [
              'List the ten things a customer most often does in the product. Not endpoints — jobs. "Create an invoice for a customer", "find overdue accounts", "reschedule a delivery".',
              'Turn each job into one tool with a verb_noun name and the smallest input that gets it done. Ten to twenty tools is the sweet spot; a tool per REST route is the classic mistake.',
              'Separate read tools from write tools, and mark anything destructive so the host can require confirmation.',
              'Write each description for a model: what the tool does, when to use it instead of its neighbours, one example call. Then test the descriptions by giving an agent five tasks and watching which tools it reaches for.',
            ],
          },
          {
            type: 'table',
            caption: 'Before and after: turning an API into tools',
            headers: ['API endpoints', 'MCP tool', 'Why'],
            rows: [
              ['POST /customers, POST /invoices, POST /invoice_lines', 'create_invoice(customer, lines)', 'One job, one call'],
              ['GET /invoices?status=…&due<…', 'find_overdue_invoices(days)', 'Model-shaped input'],
              ['DELETE /invoices/{id}', 'void_invoice(id) — destructive', 'Host asks for confirmation'],
            ],
          },
        ],
      },
      {
        id: 'build',
        heading: 'Steps 5–7 — build and secure it',
        blocks: [
          {
            type: 'ol',
            items: [
              'Implement as a remote (HTTP) server using the official MCP SDK for your language, on top of the existing API — the server should be thin.',
              'Auth per connection, scoped to what that user could do in the UI. Never a shared admin token. Rate-limit per connection; log every call with arguments.',
              'Security pass: treat every input as hostile, validate strictly, and run prompt-injection scenarios where a tool result tries to instruct the agent. The server must never be the path by which an agent is tricked into a destructive action.',
            ],
          },
        ],
      },
      {
        id: 'ship',
        heading: 'Steps 8–9 — evaluate and hand over',
        blocks: [
          {
            type: 'ol',
            items: [
              'Eval: an agent runs 50+ real customer tasks through the server. Grade on correct tool, correct arguments, correct result. Fix descriptions first when it fails — that is usually the cause.',
              'Handover: the server in your repo, a test harness, a README written for the registries and app directories your customers use, and a one-hour session for your team.',
            ],
          },
          {
            type: 'p',
            text: 'Two to four weeks from kickoff to a server your customers’ AI tools can use. We build them for SaaS products and internal platforms, and run a one-day MCP design workshop for teams building their own.',
          },
        ],
      },
    ],
    faq: [
      { q: 'Local or remote server?', a: 'Remote for anything customers use — central auth, versioning and rate limits. Local for developer tooling that runs beside a codebase.' },
      { q: 'How do we version tools without breaking agents?', a: 'Add tools, never change a tool’s meaning. Deprecate with a description note, remove after a notice period. Keep the eval running against every version.' },
      { q: 'What about resources and prompts, not just tools?', a: 'Resources (read-only data) are worth exposing for documents and records; prompts are optional. Start with tools — that is what drives usage.' },
    ],
    related: ['mcp-server-development', 'what-is-mcp-model-context-protocol', 'claude-agent-sdk-development'],
  },

  {
    slug: 'how-we-cut-llm-costs-without-losing-quality',
    title: 'How We Cut LLM Costs 40–70% Without Losing Quality',
    description:
      'Our step-by-step method for cutting LLM API spend on a production agent — measure, cache, trim inputs, tune effort, route models, batch — with typical savings.',
    date: '2026-09-19',
    updated: '2026-09-19',
    cover: unsplash('photo-1563986768609-322da13575f3'),
    coverAlt: 'Laptop and phone showing usage and cost dashboards',
    tags: ['LLM', 'Cost', 'Tutorial'],
    kind: 'Tutorial',
    author: 'engineering',
    intro:
      'Every agent we inherit is spending more than it needs to, and the fix is rarely "use a cheaper model". This is the order we work through — free wins first, quality trade-offs last, everything measured against the eval suite so nothing gets worse.',
    cta: {
      title: 'Is your AI bill higher than it should be?',
      body: 'Send us a month of usage and the agent’s job. We reply within 48 hours with the savings we would expect from each step, before you spend anything.',
    },
    sections: [
      {
        id: 'measure',
        heading: 'Step 1 — measure before touching anything',
        blocks: [
          {
            type: 'ol',
            items: [
              'Pull a month of usage: tokens in, tokens out, cached vs uncached, per route or task type. If the app logs per-response usage, use that; otherwise the provider’s usage reports.',
              'Compute cost per completed task, not per request. A cheaper request that needs three retries is not cheaper.',
              'Confirm an eval suite exists. If not, build one first — cost work without evals is how quality quietly dies.',
            ],
          },
        ],
      },
      {
        id: 'free',
        heading: 'Steps 2–5 — the free wins',
        blocks: [
          {
            type: 'table',
            caption: 'Cost levers in the order we apply them',
            headers: ['Step', 'Lever', 'Typical saving', 'Quality risk'],
            rows: [
              ['2', 'Prompt caching: stable prefix first, volatile content last, no timestamps up top', '30 – 60% of input cost', 'None'],
              ['3', 'Input hygiene: trim tool results, clear stale context, stop resending whole documents', '10 – 30%', 'None if evals hold'],
              ['4', 'Loop hygiene: step caps, parallel tool calls, return errors instead of retrying blindly', '10 – 25%', 'None'],
              ['5', 'Batch the non-urgent: nightly jobs through the batch API', '50% on that traffic', 'None'],
              ['6', 'Effort tuning per route: low for classification, high only for reasoning-heavy steps', '15 – 40% of output cost', 'Low — measure'],
              ['7', 'Model routing: small model for extraction and classification, frontier model for judgement', '20 – 50%', 'Medium — measure'],
            ],
          },
          {
            type: 'ol',
            items: [
              'Caching. Render order is tools → system → messages; anything that changes per request must sit after the cache breakpoint. Verify with the cache-read token count — zero means something is invalidating the prefix.',
              'Input hygiene. Most agents resend far more context than the model needs. Clear old tool results, summarise long histories, send the paragraph, not the document.',
              'Loop hygiene. Cap steps, budget tokens per task, run independent tool calls in parallel and return all results in one message.',
              'Batch. Anything that can wait an hour goes through the batch endpoint at half price.',
            ],
          },
        ],
      },
      {
        id: 'tradeoffs',
        heading: 'Steps 6–7 — the trade-offs, measured',
        blocks: [
          {
            type: 'ol',
            items: [
              'Effort. Most routes do not need maximum reasoning. Sweep effort levels per route against the eval suite and keep the lowest that holds the bar — on current models a lower effort setting often matches the previous generation at full effort.',
              'Routing. Send extraction, classification and summarisation to a smaller model; keep the frontier model for planning and judgement. Measure the split on the suite; keep one model per route so caches stay warm.',
            ],
          },
          {
            type: 'p',
            text: 'Across the agents we have done this on, the free steps alone land 30–50% and the full sequence 40–70%, with the eval pass rate unchanged or better. It takes one to two weeks. We do it as a fixed-price engagement or teach it in a half-day session.',
          },
        ],
      },
    ],
    faq: [
      { q: 'Should we just switch to a cheaper model?', a: 'Last, not first. Caching and input hygiene usually save more with zero quality risk. Switch models only with an eval suite that measures the change.' },
      { q: 'Does caching really work for agents?', a: 'Very well, if the prefix is stable. Long system prompts and tool lists are exactly what caching is for. The common bug is a timestamp or request ID at the top invalidating everything.' },
      { q: 'How fast do savings show up?', a: 'Caching and hygiene changes show in the next day’s usage. Effort and routing take a week of measuring to do safely.' },
    ],
    related: ['how-we-build-agent-evals-tutorial', 'ai-agent-development-cost', 'why-ai-agents-fail-in-production'],
  },
];
