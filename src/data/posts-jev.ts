// Jev / System One cluster — TypeSafe AI's decision model (early access, Sept 2026).
// Facts are from the reporting and docs cited in each post; vendor benchmarks are
// labelled as vendor claims. The "what we'd build" parts are our own engineering view.
import { unsplash, type Block, type Post, type Section } from './post-types';

const P = (text: string): Block => ({ type: 'p', text });
const UL = (...items: string[]): Block => ({ type: 'ul', items });
const OL = (...items: string[]): Block => ({ type: 'ol', items });
const T = (caption: string, headers: string[], rows: string[][]): Block => ({ type: 'table', caption, headers, rows });
const S = (id: string, heading: string, ...blocks: Block[]): Section => ({ id, heading, blocks });
const D = '2026-09-21';

const CTA_BUILD = {
  title: 'Want a Jev-powered pilot in two weeks?',
  body: 'We scope a decision point in your product, wire Jev behind it with an eval set from your real data, and hand over code in your repo. Fixed price in 48 hours.',
};

export const jevPosts: Post[] = [
  {
    slug: 'what-is-jev-ai-system-one-model',
    title: 'What Is Jev? TypeSafe AI’s System One Model, Explained',
    description:
      'Jev is a new kind of AI model that returns typed, calibrated decisions instead of text. What a System One model is, how the API works, and what it is for.',
    date: D,
    updated: D,
    cover: unsplash('photo-1593508512255-86ab42a8e620'),
    coverAlt: 'Close-up of a circuit board with a glowing processor',
    tags: ['Jev', 'System One models', 'Explainer'],
    kind: 'Explainer',
    author: 'engineering',
    intro:
      'On 15 September 2026, TypeSafe AI opened early access to Jev, a transformer model that does not write text at all. You give it your application state and a set of typed questions; it returns a decision for each, with probabilities. This is what it is, why it exists, and where it fits next to the LLMs you already use.',
    sections: [
      S(
        'what',
        'The one-line version',
        P(
          'Jev is a “System One model”: a model built for fast, intuitive decisions rather than reasoning or writing. It evaluates a state — a string, a JSON object or an array of text — and answers only the questions you define, in the types you define. It cannot return a value outside your schema, because there is no free-text output path.',
        ),
        P(
          'The name is a nod to William Stanley Jevons, the 19th-century economist. The company, TypeSafe AI, was founded in 2024 by Diogo Almeida — a former OpenAI researcher and co-author of the InstructGPT paper — with Erik Gafni and Sasha Sheng. It came out of stealth with a reported $40 million seed round.',
        ),
      ),
      S(
        'api',
        'How the API works',
        P('There is one endpoint: POST /v1/systemone. The body carries a model (currently jev-latest), a state, and a map of named questions. Three question types exist:'),
        T(
          'Jev question types',
          ['Type', 'You ask', 'You get back'],
          [
            ['Choice', 'Pick one of up to 255 labelled options', 'choice, a probability per option, an overall confidence'],
            ['Score', 'Rate the state against ordered levels (e.g. calm → very frustrated)', 'score, probabilities, confidence'],
            ['Noul', 'Is this statement true?', 'A single probability from 0 to 1'],
          ],
        ),
        P(
          'Questions run in parallel and in isolation against the same state. TypeSafe says adding questions barely changes response time and costs only the tokens for the extra questions. A typical call answers in 70–500 ms end to end.',
        ),
        P('Official SDKs exist for Python (typesafe-sdk) and JavaScript (@typesafe-ai/sdk), plus cURL and a Claude Code agent skill. The model is hosted only — no open weights — and is also reachable through Vercel’s AI Gateway.'),
      ),
      S(
        'why',
        'Why it is not just a small LLM',
        UL(
          'It is trained with Reinforcement Learning for Calibrated Decisions (RLCD): probabilities are optimised against outcomes, so a 0.8 should be right about 80% of the time across a group of predictions.',
          'Output tokens are free and input is priced at $0.042 per million tokens, because the model never generates prose.',
          'It does not explain itself. You get a decision and a confidence, not a paragraph — which is the point for a routing or gating step, and a limitation everywhere else.',
          'It only takes text today. No images, audio or video input.',
        ),
        P(
          'Almeida’s own framing is honest about the trade: a model that only fills in your schema “delegates the hallucination problem a little bit to the user.” If your options are wrong, Jev will confidently pick among wrong options.',
        ),
      ),
      S(
        'fit',
        'Where it fits in a real product',
        P('Think of every place your code currently asks an LLM a question whose answer is a label, a number or a yes/no — then throws away the prose. Ticket routing. “Is this tool call dangerous?” “Which model should handle this request?” “Does this message ask for a refund?” Those are System One jobs.'),
        P('Everything that needs words — the reply to the customer, the summary, the generated code — still belongs to an LLM. The pattern we expect to become standard is Jev deciding, an LLM writing.'),
      ),
    ],
    faq: [
      { q: 'Is Jev open source?', a: 'No. It is proprietary and hosted by TypeSafe AI; there are no published weights or self-hosting option as of September 2026.' },
      { q: 'Can Jev hallucinate?', a: 'It cannot produce a value outside your schema. It can still pick the wrong option or be over-confident on data unlike its training, so you still need an eval set.' },
      { q: 'How do I get access?', a: 'Early access is via a waitlist on typesafe.ai; Vercel AI Gateway lists it without a waitlist. Demand briefly exceeded API capacity in launch week.' },
    ],
    related: ['jev-vs-llm-when-to-use-a-decision-model', '10-things-you-can-build-with-jev', 'what-is-an-agent-harness'],
    cta: CTA_BUILD,
    source: { name: 'TechCrunch', url: 'https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/', date: '2026-09-18' },
  },

  {
    slug: 'jev-vs-llm-when-to-use-a-decision-model',
    title: 'Jev vs LLMs: When a Decision Model Beats GPT or Claude',
    description:
      'A decision model like Jev does not replace GPT or Claude. The split we use: what goes to a System One model, what stays with an LLM, and the numbers.',
    date: D,
    updated: D,
    cover: unsplash('photo-1562813733-b31f71025d54'),
    coverAlt: 'Bundles of network cables plugged into a switch',
    tags: ['Jev', 'LLM', 'Comparison', 'AI agents'],
    kind: 'Comparison',
    author: 'engineering',
    intro:
      'The question we have been asked most since Jev launched is “does this replace our LLM?” No. It replaces the part of your LLM usage that was never a language task. This is how to tell the two apart, with the published figures and the caveats that come with them.',
    sections: [
      S(
        'split',
        'The split in one table',
        T(
          'What goes where',
          ['Job', 'Jev (System One)', 'LLM (GPT, Claude, Gemini)'],
          [
            ['Route a ticket to a team', 'Yes — Choice', 'Overkill'],
            ['Rate urgency 0–2', 'Yes — Score', 'Overkill'],
            ['Is this tool call risky?', 'Yes — Noul', 'Slow in the hot path'],
            ['Pick which model handles a request', 'Yes — Choice', 'Circular'],
            ['Write the reply to the customer', 'No', 'Yes'],
            ['Summarise a thread', 'No', 'Yes'],
            ['Explain why it decided', 'No', 'Yes'],
            ['Read a screenshot or audio', 'No (text only)', 'Yes, multimodal models'],
          ],
        ),
      ),
      S(
        'numbers',
        'The published numbers — and who published them',
        UL(
          'TypeSafe’s own workflow evaluations: up to 193.6× faster and 444.6× cheaper than a frontier LLM on narrow decision tasks; one demo call took 0.114 s and cost $0.000081. TypeSafe’s team wrote those workflows, so treat them as a ceiling, not a forecast.',
          'Vercel, testing on command-safety review, told TechCrunch it got results five to 18 times faster than the OpenAI model it compared against, with greater accuracy.',
          'Bryo AI, classifying business email, found Gemini slightly more accurate but 10 to 20 times more expensive.',
          'Pricing: $0.042 per million input tokens, output free. Latency: 70–500 ms.',
        ),
        P('The pattern across all three: on classification-shaped work, Jev is roughly as accurate, dramatically cheaper, and fast enough to sit inside a request instead of behind a queue.'),
      ),
      S(
        'when-llm',
        'When you should still use the LLM for the decision',
        OL(
          'The options are not known up front. Jev needs a fixed schema; if the set of valid answers changes per request, an LLM with structured output is simpler.',
          'You need the reasoning as a product feature — an audit trail a human will read.',
          'The input is not text. Jev accepts strings, JSON and arrays of text only.',
          'Volume is tiny. Below a few thousand decisions a month, the cost difference is pocket change and one fewer vendor wins.',
        ),
      ),
      S(
        'pattern',
        'The pattern we ship: Jev decides, the LLM writes',
        P('In practice the two sit in series. A message arrives; Jev answers four questions in one 100-ms call (department, urgency, refund request, abuse). Code branches on the confidence. Only then does an LLM draft a reply — with the right prompt for the right department, instead of one giant prompt that tries to do everything.'),
        P('That order also fixes a cost problem you may not have noticed: today many teams pay an LLM to classify and then pay it again to respond. Moving the classification to a $0.042-per-million model makes the second call the only expensive one.'),
      ),
    ],
    faq: [
      { q: 'Can I use Jev with Claude or GPT in the same pipeline?', a: 'Yes; that is the intended pattern. Jev handles routing, gating and scoring; the LLM handles anything that needs words. LangChain has already published a harness example.' },
      { q: 'Is Jev more accurate than an LLM?', a: 'On the published tests it is comparable — Vercel reported higher accuracy, Bryo reported Gemini slightly ahead. Run your own eval set; results vary by task.' },
    ],
    related: ['what-is-jev-ai-system-one-model', 'how-we-cut-llm-costs-without-losing-quality', 'custom-ml-model-vs-llm-api'],
    cta: CTA_BUILD,
  },

  {
    slug: '10-things-you-can-build-with-jev',
    title: '10 Things You Can Build With Jev (Ranked by Payback)',
    description:
      'Ten products and features a System One model like Jev makes cheap enough to ship — from tool-call gating to WhatsApp triage — ranked by how fast they pay back.',
    date: D,
    updated: D,
    cover: unsplash('photo-1507146153580-69a1fe6d8aa1'),
    coverAlt: 'Small white robot toy on a table',
    tags: ['Jev', 'AI agents', 'Guide', 'Top 10'],
    kind: 'Guide',
    author: 'hassan',
    intro:
      'A model that answers a typed question in 100 ms for a fraction of a cent changes which features are worth building. These are the ten we would ship first for clients, ranked by payback — fastest return at the top. Each one is a single Jev call plus ordinary code.',
    sections: [
      S(
        'list',
        'The list',
        OL(
          'Tool-call gating for agents. Before an agent runs a shell command, sends an email or touches a database, ask Noul: “Is this action destructive or irreversible?” Block above a threshold, log everything. Vercel is using Jev for exactly this in its command-safety review.',
          'Support ticket triage. One call, four questions: department (Choice), urgency (Score), refund request (Noul), abusive (Noul). Route on confidence; send the low-confidence tail to a human queue.',
          'Model routing. Ask Choice which tier of LLM a request needs — cheap, standard, frontier — and stop paying frontier prices for lookups. Payback is immediate at any volume.',
          'WhatsApp and voice intent detection. Intent as Choice, sentiment as Score, “wants a human” as Noul — inside the turn budget of a live conversation, which a full LLM round-trip often is not.',
          'Lead scoring on inbound forms. Score the brief against your ideal-customer levels the moment it lands; page the sales lead only for the top band.',
          'Jailbreak and prompt-injection screening. Run every inbound message and every retrieved document through a Noul “does this attempt to override instructions?” check before it reaches the agent’s context.',
          'Agent trace monitoring. Score each step of an autonomous run for drift from the task; stop the run when confidence that it is off-track crosses your line.',
          'Content moderation at write time. Choice across your policy categories on every user post, comment or listing — cheap enough to run on all of them, not a sample.',
          'Document classification in back-office pipelines. Invoice, contract, KYC, complaint: Choice on the extracted text, then the right extractor. Replaces the slowest LLM call in most automation flows.',
          'Feature flags by intent. In-product: “Is this user about to churn?” “Is this a power-user workflow?” as Noul from session state, driving which UI to show — a use LLM latency never allowed.',
        ),
      ),
      S(
        'why-ranked',
        'Why this order',
        P('The top four sit inside paths you already have — agent loops, support queues, LLM gateways, chat turns — so the build is a wrapper, the eval set already exists in your logs, and the saving shows up on next month’s invoice. The bottom entries are new product surface: higher upside, more design work, slower payback.'),
      ),
      S(
        'what-not',
        'What not to build with it',
        UL(
          'Anything that must explain its decision to a regulator. Jev returns numbers, not reasons.',
          'Anything multimodal. It reads text only today.',
          'Anything with an open-ended answer set. Fixed schema or nothing.',
        ),
      ),
    ],
    faq: [
      { q: 'How long does one of these take to build?', a: 'The wrapper itself is a day. Two weeks is realistic for a pilot with an eval set from your real data, thresholds tuned, and a human-review path for the low-confidence band.' },
      { q: 'Do we need our own training data?', a: 'No training — Jev is instruction-driven. You do need 100–300 labelled examples to measure it before you trust it, which is true of any classifier.' },
    ],
    related: ['what-is-jev-ai-system-one-model', 'jev-in-an-agent-harness-tool-gating', 'jev-support-ticket-triage-tutorial'],
    cta: CTA_BUILD,
  },

  {
    slug: 'jev-in-an-agent-harness-tool-gating',
    title: 'How We’d Use Jev Inside an Agent Harness',
    description:
      'A practical design for a System One model inside an AI agent loop: gating tool calls, routing models and stopping runaway runs, with the questions to ask.',
    date: D,
    updated: D,
    cover: unsplash('photo-1531297484001-80022131f5a1'),
    coverAlt: 'Open laptop glowing in a dark room',
    tags: ['Jev', 'Agent harness', 'Tutorial', 'AI safety'],
    kind: 'Tutorial',
    author: 'engineering',
    intro:
      'An agent harness is the code around the model: tool permissions, retries, stop conditions, logging. Most of the decisions inside it are yes/no or pick-one, and today teams either hard-code them or pay an LLM to make them slowly. This is how we would wire Jev into the three places it earns its keep.',
    sections: [
      S(
        'places',
        'Three decision points in every harness',
        T(
          'Where Jev sits in the loop',
          ['Point', 'Question type', 'What the harness does with the answer'],
          [
            ['Before a tool executes', 'Noul: “This action is destructive or irreversible”', '> 0.7 block and ask a human; 0.3–0.7 log and continue with a dry-run flag; < 0.3 run'],
            ['Before a model call', 'Choice: cheap / standard / frontier', 'Route the step to the smallest model that can do it'],
            ['After each step', 'Score: on-task 0 → off-task 2', 'Two consecutive scores ≥ 1.5 stop the run and hand back to the user'],
          ],
        ),
      ),
      S(
        'steps',
        'The build, step by step',
        OL(
          'Export 200 real tool calls from your agent logs and label them destructive / safe. This is your eval set; do not skip it.',
          'Write the Noul question with clear criteria: what counts as destructive in your system (deletes, payments, outbound messages, prod writes).',
          'Call Jev with the tool name, arguments and the last user message as state. One call, under 200 ms, in the hot path.',
          'Measure calibration on the eval set: at a 0.7 threshold, how many destructive calls slipped through, how many safe calls were blocked? Move the thresholds, not the prompt, first.',
          'Add the routing Choice and the drift Score as extra questions in the same call — TypeSafe says extra questions barely change latency.',
          'Log every answer with its probabilities. Review the 0.3–0.7 band weekly; that is where your criteria are unclear.',
        ),
      ),
      S(
        'why-not-llm',
        'Why not ask the agent’s own LLM?',
        P('You can, and many harnesses do. Two problems: latency, because a frontier round-trip on every tool call doubles run time, and independence, because the model that wants to run the command is a poor judge of whether it should. A separate, calibrated decision model is the same idea as a code reviewer who did not write the code.'),
        P('LangChain’s published harness example uses Jev for both model routing and tool-risk gating; Vercel’s command-safety review is the same pattern in production.'),
      ),
      S(
        'pitfalls',
        'Pitfalls we would plan for',
        UL(
          'Over-trusting confidence on inputs unlike anything in your eval set. Calibration is a property of groups, not single answers.',
          'Putting sensitive state in the request. Strip secrets and PII from the tool arguments before they leave your network.',
          'No fallback. Jev had capacity problems in launch week; the harness must degrade to “ask a human” when the API is down, never to “allow”.',
        ),
      ),
    ],
    faq: [
      { q: 'Does this work with Claude Agent SDK or OpenAI agents?', a: 'Yes. The gate is a function you call before executing a tool; it is framework-agnostic. TypeSafe also ships a Claude Code skill.' },
      { q: 'What does it add to run cost?', a: 'At $0.042 per million input tokens, a 1,000-token gate call costs about four thousandths of a cent. The LLM step it protects costs hundreds of times more.' },
    ],
    related: ['what-is-an-agent-harness', 'prompt-injection-defense-for-agents', 'human-in-the-loop-ai-agents'],
    cta: CTA_BUILD,
  },

  {
    slug: 'jev-support-ticket-triage-tutorial',
    title: 'Support Ticket Triage With Jev: A One-Day Build',
    description:
      'Step-by-step: route support tickets by department, urgency and refund intent with a single Jev call. Schema, thresholds, eval set and the human-review path.',
    date: D,
    updated: D,
    cover: unsplash('photo-1580894732444-8ecded7900cd'),
    coverAlt: 'Person working at a desk with a laptop and phone',
    tags: ['Jev', 'Customer support', 'Tutorial'],
    kind: 'Tutorial',
    author: 'engineering',
    intro:
      'Ticket triage is the canonical System One job: a fixed set of departments, an ordered urgency scale, a few yes/no flags. TypeSafe uses it as the docs example for a reason. This is the build we would run for a client in a day, and the week of measurement that follows.',
    sections: [
      S(
        'schema',
        'The schema',
        T(
          'Four questions, one call',
          ['Name', 'Type', 'Definition'],
          [
            ['department', 'Choice', 'billing: payments, invoices, refunds · technical: bugs, outages, integrations · account: login, access, data'],
            ['urgency', 'Score', '0 calm · 1 frustrated · 2 very frustrated / threatening to leave'],
            ['wants_refund', 'Noul', 'The message asks for money back'],
            ['is_abusive', 'Noul', 'The message contains threats or abuse toward staff'],
          ],
        ),
        P('State is the ticket subject, body and the customer’s plan tier as a JSON object. Everything Jev needs to decide, nothing it does not.'),
      ),
      S(
        'steps',
        'The day',
        OL(
          'Morning: pull 300 recent tickets with their final department and a quick urgency label from the support lead. This is the eval set.',
          'Write the criteria text for each Choice option. Vague criteria are the number-one cause of low confidence.',
          'Call Jev on all 300; record choice, probabilities and confidence per question.',
          'Pick thresholds from the data: at what confidence is department accuracy above 95%? That is your auto-route line; below it, a human picks.',
          'Wire it into the helpdesk webhook: high confidence auto-routes and sets priority; middle band routes with a “check me” tag; low band goes to a triage queue.',
          'Afternoon: ship behind a flag for one department. Tomorrow, compare first-response time against last week.',
        ),
      ),
      S(
        'confidence',
        'Reading confidence correctly',
        P('Confidence comes from the shape of the probability distribution, not from the top probability alone. A ticket that is 0.84 billing and 0.16 technical is a confident billing call; one that is 0.45 / 0.40 is a coin flip and should be treated as one. The middle band is where you learn what your departments actually disagree about.'),
      ),
      S(
        'after',
        'What changes after triage is instant',
        UL(
          'Priority is set before a human opens the ticket, so “very frustrated + refund” reaches the right person first.',
          'The LLM that drafts replies gets a department-specific prompt instead of one generic prompt, which improves drafts more than any prompt tuning did.',
          'Abusive tickets never reach a junior agent unfiltered.',
        ),
      ),
    ],
    faq: [
      { q: 'Does this replace our helpdesk automation?', a: 'No, it plugs into it. Zendesk, Freshdesk, HubSpot and Intercom all take routing decisions via webhook or app.' },
      { q: 'What accuracy should we expect?', a: 'On well-defined departments, the published tests put Jev on par with LLM classifiers. Your eval set tells you the real number; do not deploy without it.' },
    ],
    related: ['10-things-you-can-build-with-jev', 'whatsapp-ai-agent-for-business-india', 'ai-agent-evals-before-production'],
    cta: CTA_BUILD,
  },

  {
    slug: 'jev-for-voice-and-whatsapp-agents',
    title: 'Jev for Voice and WhatsApp Agents: Sub-Second Intent',
    description:
      'Voice and chat agents live or die on turn latency. How a 70–500 ms decision model changes intent detection, hand-off and sentiment in live conversations.',
    date: D,
    updated: D,
    cover: unsplash('photo-1556155092-490a1ba16284'),
    coverAlt: 'Hand holding a phone with a chat app open',
    tags: ['Jev', 'Voice agents', 'WhatsApp', 'Guide'],
    kind: 'Guide',
    author: 'engineering',
    intro:
      'In a voice call, anything over about a second of silence feels broken. Most voice and WhatsApp agents therefore make one big LLM call per turn and cram intent, sentiment and the reply into it. A model that answers typed questions in 70–500 ms lets you pull the decisions out of that call — and the conversation gets both faster and safer.',
    sections: [
      S(
        'turn',
        'Anatomy of a turn, before and after',
        T(
          'Where the time goes',
          ['Step', 'Today', 'With Jev in front'],
          [
            ['Detect intent and whether to hand off', 'Inside the LLM reply call', 'Jev, ~100 ms, in parallel with retrieval'],
            ['Decide which prompt / flow applies', 'Giant prompt with every branch', 'Choice → small, specific prompt'],
            ['Detect frustration / escalation', 'Often skipped — too slow', 'Score on every turn'],
            ['Generate the spoken reply', 'LLM', 'LLM, shorter prompt, faster'],
          ],
        ),
      ),
      S(
        'questions',
        'The questions we would ask on every turn',
        UL(
          'intent (Choice): book, reschedule, cancel, price, complaint, other — matched to the flows the agent actually has.',
          'wants_human (Noul): the caller is asking for a person or has asked the same thing twice.',
          'frustration (Score): 0 calm to 2 angry; hand off above a threshold you tune per client.',
          'off_policy (Noul): the message tries to make the agent do something outside its remit.',
        ),
        P('All four in one call against the transcript so far. The state is text — the transcript — which is the one input type Jev accepts today, so voice works via your speech-to-text step, not raw audio.'),
      ),
      S(
        'whatsapp',
        'Why WhatsApp benefits even more',
        P('WhatsApp conversations are asynchronous, so latency matters less — but volume and cost matter more. Every inbound message currently costs an LLM call even when it is “ok thanks”. Running Jev first lets you answer trivial turns from templates, reserve the LLM for turns that need it, and keep a running frustration score so hot leads and unhappy customers get a human before they go quiet.'),
      ),
      S(
        'caveats',
        'Caveats',
        UL(
          'Multilingual and Hinglish transcripts: test them. Published evaluations are English; your eval set must include your real mix.',
          'Speech-to-text errors flow straight into the decision. A Noul on “transcript looks garbled” is a cheap guard.',
          'Do not send phone numbers or payment details as state. Redact before the call.',
        ),
      ),
    ],
    faq: [
      { q: 'Does Jev listen to audio?', a: 'No. It takes text only. Your STT layer produces the transcript; Jev decides on it.' },
      { q: 'Will this make the agent sound better?', a: 'Indirectly, yes: a shorter, flow-specific prompt produces tighter replies, and faster turns reduce the awkward pauses that make agents sound robotic.' },
    ],
    related: ['voice-agent-latency', 'how-we-build-a-voice-ai-agent-tutorial', 'how-we-build-a-whatsapp-ai-agent-step-by-step'],
    cta: CTA_BUILD,
  },

  {
    slug: 'jev-pricing-and-latency-explained',
    title: 'Jev Pricing and Latency: $0.042 per Million, 70–500 ms',
    description:
      'What Jev actually costs to run, how its latency compares with LLM classifiers, and a worked example for a million decisions a month. Vendor claims labelled.',
    date: D,
    updated: D,
    cover: unsplash('photo-1483817101829-339b08e8d83f'),
    coverAlt: 'Long-exposure light trails on a night road',
    tags: ['Jev', 'LLM costs', 'Explainer'],
    kind: 'Explainer',
    author: 'hassan',
    intro:
      'The headline figures on Jev are unusual enough that clients are asking whether they are real: input at $0.042 per million tokens, output free, responses in 70–500 ms. Here is what those numbers mean for a real workload, which of them are vendor claims, and where the cost actually moves to.',
    sections: [
      S(
        'price',
        'The price list',
        T(
          'Jev pricing as published, September 2026',
          ['Item', 'Price'],
          [
            ['Input tokens', '$0.042 per million'],
            ['Output tokens', 'Free — the model does not generate text'],
            ['Extra questions in the same call', 'Only the tokens of the question text'],
            ['Example call in TypeSafe’s demo', '$0.000081, 0.114 s'],
          ],
        ),
        P('For comparison, the same demo workflow on a frontier LLM took 8.566 s and cost $0.01388 per run in TypeSafe’s own evaluation — the source of the “193.6× faster, 444.6× cheaper” claim. The workflows were written by TypeSafe, so treat the multiple as an upper bound.'),
      ),
      S(
        'worked',
        'Worked example: one million decisions a month',
        P('Assume a support pipeline with 1,000,000 inbound messages a month, average 600 tokens of state plus 100 tokens of questions.'),
        UL(
          'Tokens: 700 million input per month.',
          'Jev cost: 700 × $0.042 ≈ $29 a month.',
          'Same classification on a mid-tier LLM at roughly $1 per million input plus output tokens: several hundred to a few thousand dollars, depending on model and prompt length.',
          'Latency budget: ~100–300 ms per decision versus 1–3 s for an LLM round-trip.',
        ),
        P('The saving is real but small in absolute terms at this scale. The bigger effect is what you stop paying an LLM to do — and what becomes possible when a decision costs less than a database query.'),
      ),
      S(
        'latency',
        'What drives latency',
        UL(
          'State size: fewer tokens, faster. Send the ticket, not the whole customer history.',
          'Region and network: the model is hosted only, with no on-prem option. Measure from your region.',
          'Capacity: early-access demand briefly outran the API in launch week. Build in timeouts and a safe default.',
        ),
      ),
      S(
        'independent',
        'Independent numbers so far',
        UL(
          'Vercel (command safety): 5–18× faster than the OpenAI model it compared, with higher accuracy, per TechCrunch.',
          'Bryo AI (email classification): Gemini slightly more accurate, 10–20× more expensive.',
          'Vercel said Jev became the fastest-adopted model in AI Gateway history within three days of launch.',
        ),
      ),
    ],
    faq: [
      { q: 'Is there a free tier?', a: 'Early access is waitlisted; TypeSafe has not published tier details beyond the per-token price. Vercel AI Gateway offers access without a waitlist.' },
      { q: 'Are the 193× / 444× numbers real?', a: 'They come from TypeSafe’s own workflows. Independent reports (Vercel, Bryo) show 5–20× speed or cost advantages, which is the range to plan around.' },
    ],
    related: ['how-to-estimate-llm-api-costs', 'how-we-cut-llm-costs-without-losing-quality', 'jev-vs-llm-when-to-use-a-decision-model'],
    cta: CTA_BUILD,
  },

  {
    slug: 'why-system-one-models-are-the-next-shift-in-ai',
    title: 'Why System One Models Are the Next Shift in AI',
    description:
      'LLMs made AI write. System One models make AI decide — fast, cheap and calibrated. Why this split will reshape agent architecture, and what to do about it now.',
    date: D,
    updated: D,
    cover: unsplash('photo-1607799279861-4dd421887fb3'),
    coverAlt: 'Rocket launch trail against a dark sky',
    tags: ['Jev', 'System One models', 'AI strategy'],
    kind: 'Explainer',
    author: 'hassan',
    intro:
      'For four years every AI problem has been solved with the same tool: a large language model, prompted to produce text, parsed by code. Jev is the first credible sign that the stack is splitting into two kinds of model — one that writes and one that decides. Here is why I think that split sticks, and what it means for anyone building agents this year.',
    sections: [
      S(
        'kahneman',
        'The metaphor is doing real work',
        P('Kahneman’s “System 1” is fast, intuitive, pattern-based; “System 2” is slow and deliberate. LLMs, especially reasoning models, are System 2 machines: they think in tokens and you pay for every one. Most decisions inside software are System 1: which queue, which model, safe or not, yes or no. Using a reasoning model for those is like hiring a lawyer to sort your post.'),
        P('A model class that only does System 1 — typed answers, calibrated probabilities, no prose — is not a worse LLM. It is a different instrument, and the price and latency gap (hundreds of times, per the vendor; 5–20× per early independent reports) is what makes it a category rather than a feature.'),
      ),
      S(
        'why-now',
        'Why it is happening now',
        UL(
          'Agents made decisions the bottleneck. A ten-step agent run has ten routing and safety decisions; at LLM latency they dominate wall-clock time.',
          'Structured output from LLMs solved the format problem but not the cost problem. You still pay reasoning prices for a label.',
          'Calibration became measurable. RLCD-style training optimises probabilities against outcomes, so a confidence number finally means something you can threshold on.',
          'The people involved know the LLM playbook. TypeSafe’s founder co-authored InstructGPT; this is a deliberate departure, not an outsider’s guess.',
        ),
      ),
      S(
        'architecture',
        'What agent architecture looks like after the split',
        OL(
          'A decision layer in front: intent, routing, risk, drift — one cheap call per step.',
          'A language layer behind: the smallest LLM that can write what is needed, with a prompt chosen by the decision layer.',
          'A harness that thresholds on confidence, not on parsed prose, with humans on the low-confidence band.',
          'Evals for both layers — calibration curves for the decider, quality grading for the writer.',
        ),
        P('This is also cheaper to reason about. When something goes wrong you know whether the decision or the writing failed, because they are different calls to different models.'),
      ),
      S(
        'what-to-do',
        'What to do this quarter',
        UL(
          'Inventory every LLM call whose output is a label, number or boolean. That is your migration list.',
          'Build one eval set of 200–300 labelled decisions. It is useful whether you adopt Jev or a competitor.',
          'Pilot on the safest, highest-volume decision — usually model routing or ticket triage — and measure cost and latency for a month.',
          'Expect competitors. A category this obvious will not have one vendor for long; keep the decision layer behind an interface you own.',
        ),
      ),
    ],
    faq: [
      { q: 'Is “System One model” a standard term?', a: 'It is TypeSafe’s term for the class, borrowed from Kahneman. Whether the industry adopts it or something like “decision model” remains to be seen; the architecture is what matters.' },
      { q: 'Will LLMs get fast enough to make this unnecessary?', a: 'Small LLMs keep getting faster, but they still generate tokens and still cannot give calibrated probabilities natively. The gap narrows; the separation of concerns stays useful.' },
    ],
    related: ['what-is-jev-ai-system-one-model', 'single-agent-vs-multi-agent', 'claude-agent-sdk-development'],
    cta: CTA_BUILD,
  },

  {
    slug: 'jev-limitations-and-risks',
    title: 'Jev’s Limits: What a System One Model Cannot Do',
    description:
      'Before you put Jev in production: text-only input, no explanations, fixed schemas, hosted-only, launch-week capacity limits and the calibration trap.',
    date: D,
    updated: D,
    cover: unsplash('photo-1517433456452-f9633a875f6f'),
    coverAlt: 'Red warning light glowing in a dark corridor',
    tags: ['Jev', 'AI safety', 'Guide'],
    kind: 'Guide',
    author: 'engineering',
    intro:
      'The launch coverage is glowing and the numbers are striking, so this is the counterweight: everything we would put on the risk register before letting Jev make a decision that touches a customer or a production system. None of it is a reason not to use it. All of it is a reason to design for it.',
    sections: [
      S(
        'hard',
        'Hard limits (as of September 2026)',
        T(
          'What Jev does not do',
          ['Limit', 'Consequence', 'Design around it'],
          [
            ['Text input only', 'No images, audio, PDFs as pixels', 'Put STT / OCR / extraction in front'],
            ['No explanations', 'You get a number, not a reason', 'Log inputs + probabilities; keep an LLM for audit narratives'],
            ['Fixed schema per question', 'Cannot invent an option', 'Include an explicit “other” option and route it to humans'],
            ['Hosted only, proprietary', 'No on-prem, no weights, vendor lock-in', 'Wrap it behind your own decision interface'],
            ['Early access', 'Capacity was exceeded in launch week', 'Timeouts, and a safe default that is never “allow”'],
          ],
        ),
      ),
      S(
        'soft',
        'Soft risks',
        UL(
          'The calibration trap. Calibration is measured across groups of predictions. A single 0.9 on an input unlike anything the model was trained on can still be wrong; distribution shift is your problem, not the model’s.',
          'Garbage options in, confident garbage out. Almeida’s own words: the model “delegates the hallucination problem a little bit to the user.” If your Choice options overlap or miss a case, the confident answer will be confidently wrong.',
          'Vendor-authored benchmarks. The 193× / 444× figures come from workflows TypeSafe wrote. Independent numbers so far are 5–20×.',
          'Language coverage. Published tests are English. Hinglish, Arabic, code-switched chat — test before you trust.',
          'Data leaving your network. State goes to a third-party API; strip PII and secrets, and check your contracts.',
        ),
      ),
      S(
        'checklist',
        'Pre-production checklist',
        OL(
          'An eval set of 200+ labelled real examples, including the weird ones.',
          'Calibration curve plotted; thresholds chosen from it, not from a default.',
          'An explicit human path for the low-confidence band, with volume you can staff.',
          'A safe failure mode when the API is slow or down.',
          'Redaction of sensitive fields before the call.',
          'Weekly review of disagreements between Jev and humans; update option criteria, then re-run the evals.',
          'The decision layer behind an interface so a second vendor can be swapped in.',
        ),
      ),
    ],
    faq: [
      { q: 'Is Jev safe for financial or medical decisions?', a: 'Use it to route and flag, not to decide outcomes. Any regulated decision needs an explainable, auditable path — which means a human or an LLM narrative on top.' },
      { q: 'What happens if TypeSafe changes the model?', a: 'The model id is jev-latest; pin behaviour with your eval set and re-run it on every version change, as you would for any LLM.' },
    ],
    related: ['what-are-ai-guardrails', 'ai-agent-evals-before-production', 'jev-in-an-agent-harness-tool-gating'],
    cta: CTA_BUILD,
  },

  {
    slug: 'typesafe-ai-launches-jev-40m-seed',
    title: 'TypeSafe AI Launches Jev After $40M Seed: What Happened',
    description:
      'Ex-OpenAI researcher Diogo Almeida’s TypeSafe AI left stealth with Jev, a decision model, and a reported $40M seed. Timeline, adoption and what it signals.',
    date: D,
    updated: D,
    cover: unsplash('photo-1535378917042-10a22c95931a'),
    coverAlt: 'Robot hand reaching toward a human hand',
    tags: ['Jev', 'Funding', 'News', 'AI startups'],
    kind: 'News',
    author: 'hassan',
    intro:
      'A week is a long time in a launch. Here is the Jev story so far — dates, money, adoption, and the two-line take from a studio that builds agents for a living.',
    sections: [
      S(
        'timeline',
        'Timeline',
        T(
          'Jev launch week',
          ['Date', 'Event'],
          [
            ['2024', 'TypeSafe AI founded by Diogo Almeida (ex-OpenAI, InstructGPT co-author), Erik Gafni and Sasha Sheng; two years in stealth'],
            ['15 Sep 2026', 'Emerges from stealth; early access to Jev opens via hosted API; reported $40M seed led by DCVC'],
            ['16 Sep 2026', 'Demos circulate of Jev-driven agents playing Doom and StarCraft; community projects from Browser Use and Droidrun'],
            ['18 Sep 2026', 'Vercel says Jev is the fastest-adopted model in AI Gateway history; TechCrunch reports launch demand briefly exceeded API capacity'],
            ['19 Sep 2026', 'Docs and SDKs (Python, JavaScript, Claude Code skill) widely covered; LangChain publishes a harness example'],
          ],
        ),
      ),
      S(
        'what',
        'What was launched',
        P('Jev is a transformer-based “System One model” that returns typed, calibrated decisions — Choice, Score and yes/no “Noul” questions — instead of text. It is trained with Reinforcement Learning for Calibrated Decisions, priced at $0.042 per million input tokens with free output, and answers in 70–500 ms. It accepts text only, is hosted only, and does not explain its answers.'),
      ),
      S(
        'adoption',
        'Adoption and early results',
        UL(
          'Vercel: using Jev for command-safety review in agent workflows; reports 5–18× faster results than the OpenAI model it compared, with greater accuracy.',
          'Bryo AI: email classification; Gemini slightly more accurate, 10–20× more expensive.',
          'TypeSafe’s own evaluation: up to 193.6× faster and 444.6× cheaper than a frontier LLM on vendor-written workflows.',
        ),
      ),
      S(
        'take',
        'Our take',
        P('The interesting part is not the speed; it is that a credible lab is betting that decisions and language are different products. If that holds, every agent harness gains a cheap decision layer, and the LLM bill shrinks to the parts that actually need words. We are building pilots on it now, with the caveats in our limits post firmly attached.'),
      ),
    ],
    faq: [
      { q: 'Who invested in TypeSafe AI?', a: 'Reports cite a $40 million seed round led by DCVC. TypeSafe has not published a full investor list.' },
      { q: 'Can I use Jev today?', a: 'Via the early-access waitlist at typesafe.ai or through Vercel AI Gateway, which lists it without a waitlist.' },
    ],
    related: ['what-is-jev-ai-system-one-model', 'jev-limitations-and-risks', 'treble-18m-voice-ai-simulation'],
    cta: CTA_BUILD,
    source: { name: 'heise online', url: 'https://www.heise.de/en/news/AI-model-Jev-to-make-machines-decide-faster-11457071.html', date: '2026-09-17' },
  },
];
