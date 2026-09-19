// Explainer cluster — "What is X" posts on AI building blocks, written for buyers and
// non-specialist engineers. Plain language first, then what it means for a project.
import { unsplash, type Block, type Post, type Section } from './post-types';

const P = (text: string): Block => ({ type: 'p', text });
const UL = (...items: string[]): Block => ({ type: 'ul', items });
const OL = (...items: string[]): Block => ({ type: 'ol', items });
const T = (caption: string, headers: string[], rows: string[][]): Block => ({ type: 'table', caption, headers, rows });
const S = (id: string, heading: string, ...blocks: Block[]): Section => ({ id, heading, blocks });
const D = '2026-09-19';

export const explainerPosts: Post[] = [
  {
    slug: 'what-is-rag-retrieval-augmented-generation',
    title: 'What Is RAG? Retrieval-Augmented Generation, Simply',
    description:
      'Retrieval-augmented generation explained in plain English: how RAG lets an LLM answer from your own documents, when to use it, and where it goes wrong.',
    date: D,
    updated: D,
    cover: unsplash('photo-1505664194779-8beaceb93744'),
    coverAlt: 'Library shelves with classical busts',
    tags: ['RAG', 'Explainer', 'LLM'],
    kind: 'Explainer',
    author: 'engineering',
    intro:
      'A language model knows a lot about the world and nothing about your company. Retrieval-augmented generation — RAG — is the standard way to fix that without retraining anything.',
    sections: [
      S(
        'what',
        'The one-sentence version',
        P('RAG means: before the model answers, search your documents for the most relevant passages and put them in the prompt, so the model answers from those passages instead of from memory.'),
      ),
      S(
        'how',
        'How it works, step by step',
        OL(
          'Ingest: split your documents into chunks — a few paragraphs each.',
          'Index: turn each chunk into an embedding (a numeric fingerprint of its meaning) and store it in a search index.',
          'Retrieve: when a question arrives, find the chunks whose meaning is closest to the question, often combined with keyword search.',
          'Generate: give the model the question plus those chunks, with instructions to answer only from them and cite them.',
        ),
      ),
      S(
        'when',
        'When RAG is the right tool',
        UL(
          'Answers must come from your own, changing content: policies, product docs, contracts, tickets.',
          'You need citations so people can check the source.',
          'Content changes often — re-indexing is cheap; retraining a model is not.',
        ),
      ),
      S(
        'wrong',
        'Where RAG goes wrong',
        T(
          'Common RAG failures and fixes',
          ['Failure', 'Cause', 'Fix'],
          [
            ['Right document, wrong answer', 'Chunk cut mid-table or mid-thought', 'Structure-aware chunking'],
            ['Wrong document retrieved', 'Pure semantic search misses exact terms', 'Hybrid keyword + semantic search, reranking'],
            ['Outdated answer', 'Old versions still indexed', 'Source-of-truth sync and deletion'],
            ['Confident answer, no source', 'Weak instructions', 'Require citations; refuse when nothing relevant is found'],
          ],
        ),
      ),
    ],
    faq: [
      { q: 'Is RAG the same as training on my data?', a: 'No. RAG looks information up at question time; training changes the model itself. RAG is cheaper, faster to update and easier to audit.' },
      { q: 'Do I need a vector database?', a: 'You need some search index. Small projects can use the database you already have; larger ones benefit from a dedicated vector store.' },
      { q: 'How accurate can RAG get?', a: 'With clean data, hybrid search and a proper eval set, production assistants routinely answer the large majority of in-scope questions correctly — and refuse the rest.' },
    ],
    related: ['rag-chatbot-development-cost', 'what-is-a-vector-database', 'rag-vs-fine-tuning'],
  },
  {
    slug: 'what-is-a-vector-database',
    title: 'What Is a Vector Database (and Do You Need One)?',
    description:
      'Vector databases explained: how they store embeddings and find similar meaning, when a dedicated one is worth it, and when Postgres is enough.',
    date: D,
    updated: D,
    cover: unsplash('photo-1639322537228-f710d846310a'),
    coverAlt: 'Network of connected glowing cubes',
    tags: ['RAG', 'Explainer', 'Infrastructure'],
    kind: 'Explainer',
    author: 'engineering',
    intro:
      'Vector databases went from obscure to mandatory-sounding in two years. You may need one. You may also already have one hiding inside the database you run today.',
    sections: [
      S(
        'what',
        'What it stores',
        P('A vector database stores embeddings — lists of numbers that represent the meaning of a piece of text or an image — and finds the stored items closest to a query vector. "Closest" means "most similar in meaning", which is what makes semantic search work.'),
      ),
      S(
        'options',
        'Your options',
        T(
          'Vector storage options',
          ['Option', 'Good for', 'Trade-off'],
          [
            ['Vector extension on Postgres', 'Up to millions of vectors, apps already on Postgres', 'One less system; tuning needed at scale'],
            ['Managed vector database', 'Large scale, many tenants, high query volume', 'Another vendor and bill'],
            ['Search engine with vector support', 'Hybrid keyword + semantic search', 'Heavier to operate'],
            ['In-memory index', 'Prototypes, small static sets', 'Not durable'],
          ],
        ),
      ),
      S(
        'need',
        'Do you need a dedicated one?',
        P('For most business assistants — tens of thousands to a few million chunks — a vector extension on the Postgres you already run is enough and keeps permissions, backups and joins in one place. A dedicated vector database earns its place at very large scale, very high query rates, or when you need features like multi-tenant isolation out of the box.'),
      ),
      S(
        'matters',
        'What matters more than the database',
        UL(
          'Chunking quality — bad chunks cannot be rescued by a fast index.',
          'Hybrid search — combining keyword and vector search fixes exact-term misses.',
          'Reranking — a second pass that reorders the top results improves answer quality.',
          'Permission filtering — every query must respect who can see what.',
        ),
      ),
    ],
    faq: [
      { q: 'Is a vector database a replacement for my main database?', a: 'No. It is a search index. Your source of truth stays where it is.' },
      { q: 'How much does one cost?', a: 'Postgres extensions add little cost. Managed services charge by storage and queries; at business-assistant scale it is usually modest.' },
      { q: 'Can I switch later?', a: 'Yes, if embeddings and chunking live in your own pipeline. We keep them portable by design.' },
    ],
    related: ['what-are-embeddings', 'what-is-rag-retrieval-augmented-generation', 'supabase-vs-firebase-for-startups'],
  },
  {
    slug: 'what-are-embeddings',
    title: 'What Are Embeddings? A Non-Mathematical Guide',
    description:
      'Embeddings explained without the maths: how text becomes numbers that capture meaning, what they power — search, recommendations, clustering — and their limits.',
    date: D,
    updated: D,
    cover: unsplash('photo-1488590528505-98d2b5aba04b'),
    coverAlt: 'Code on a laptop screen in a dark room',
    tags: ['Embeddings', 'Explainer', 'LLM'],
    kind: 'Explainer',
    author: 'engineering',
    intro:
      'Embeddings are the quiet workhorse behind AI search, recommendations and RAG. The idea is simpler than the name.',
    sections: [
      S(
        'idea',
        'The idea',
        P('An embedding model reads a piece of text and outputs a list of numbers — its coordinates in a "meaning space". Texts about similar things land close together. "How do I reset my password?" and "I forgot my login" end up near each other even though they share no words.'),
      ),
      S(
        'uses',
        'What they power',
        UL(
          'Semantic search: find documents by meaning, not exact words.',
          'RAG: pick the right passages to show a language model.',
          'Recommendations: "customers who read this also read".',
          'Clustering: group thousands of tickets or reviews into themes automatically.',
          'Deduplication: spot near-identical records.',
        ),
      ),
      S(
        'limits',
        'Their limits',
        UL(
          'They blur exact details: product codes, numbers and names can be matched poorly — pair them with keyword search.',
          'They are model-specific: vectors from different embedding models are not comparable; switching models means re-embedding.',
          'They carry the model’s language coverage: check quality for Hindi, Marathi or mixed-language text.',
        ),
      ),
      S(
        'choose',
        'Choosing an embedding model',
        P('Test two or three candidates on your own data with a small labelled set of queries and expected results. The best model on a public leaderboard is often not the best on your documents, and a smaller, cheaper model sometimes wins.'),
      ),
    ],
    faq: [
      { q: 'Are embeddings expensive?', a: 'Embedding text is cheap per document and done once per change; the ongoing cost is usually small.' },
      { q: 'Can embeddings leak my data?', a: 'Embeddings can partially reveal source text, so protect them like the documents themselves.' },
      { q: 'Do images have embeddings too?', a: 'Yes — multimodal models embed images and text in the same space, enabling search across both.' },
    ],
    related: ['what-is-a-vector-database', 'what-is-rag-retrieval-augmented-generation', 'how-to-evaluate-a-rag-system'],
  },
  {
    slug: 'what-is-tool-calling-in-llms',
    title: 'What Is Tool Calling in LLMs? How Agents Act',
    description:
      'Tool calling explained: how an LLM asks your code to run actions like lookups, bookings and updates — and how to design tools that work reliably.',
    date: D,
    updated: D,
    cover: unsplash('photo-1485827404703-89b55fcc595e'),
    coverAlt: 'Friendly white humanoid robot',
    tags: ['AI agents', 'Explainer', 'Tool use'],
    kind: 'Explainer',
    author: 'engineering',
    intro:
      'A model that can only write text is a chatbot. A model that can call tools is an agent. Tool calling is the mechanism that makes the difference.',
    sections: [
      S(
        'how',
        'How it works',
        OL(
          'You describe tools to the model: a name, a description and the parameters each takes.',
          'The model, reading the conversation, decides a tool would help and outputs a structured request: which tool, with which arguments.',
          'Your code — not the model — runs the tool, e.g. looks up an order.',
          'The result goes back to the model, which continues: answers, or calls another tool.',
        ),
        P('The model never touches your systems directly. Your code decides whether to execute each request, which is where permissions and approvals live.'),
      ),
      S(
        'design',
        'Designing tools that work',
        UL(
          'Few, clear tools beat many overlapping ones. The model picks better from ten well-named tools than forty similar ones.',
          'Descriptions are prompts: say when to use the tool and when not to.',
          'Return concise, structured results — not a raw 5,000-line API response.',
          'Make errors informative: "order not found, check the number format" lets the model recover.',
          'Make risky tools require confirmation or human approval.',
        ),
      ),
      S(
        'mcp',
        'Where MCP fits',
        P('The Model Context Protocol standardises how tools are described and served, so one tool server can be used by many AI applications. If you are building tools that several agents or clients will use, packaging them as an MCP server saves repeated integration work.'),
      ),
    ],
    faq: [
      { q: 'Can the model call tools I did not give it?', a: 'No. It can only request tools you defined, and your code decides whether to run them.' },
      { q: 'How many tools is too many?', a: 'Accuracy tends to drop as overlapping tools pile up. Group rarely used tools or load them only when relevant.' },
      { q: 'Is tool calling reliable?', a: 'With clear tool design and evals, very. Most failures trace back to vague descriptions or messy outputs.' },
    ],
    related: ['what-is-mcp-model-context-protocol', 'what-is-an-ai-agent', 'structured-outputs-from-llms'],
  },
  {
    slug: 'what-are-ai-guardrails',
    title: 'What Are AI Guardrails? The Layers That Matter',
    description:
      'AI guardrails explained: the layers that keep an AI system safe in production — input checks, tool permissions, output validation, approvals and monitoring.',
    date: D,
    updated: D,
    cover: unsplash('photo-1601597111158-2fceff292cdc'),
    coverAlt: 'Hand entering a code on a secure keypad',
    tags: ['Guardrails', 'Explainer', 'Security'],
    kind: 'Explainer',
    author: 'engineering',
    intro:
      'Guardrails are not a single filter you bolt on. They are layers, and most of them live outside the model. A prompt that says "be careful" is not a guardrail.',
    sections: [
      S(
        'layers',
        'The five layers',
        T(
          'Guardrail layers, from outermost to innermost',
          ['Layer', 'What it does', 'Example'],
          [
            ['Input', 'Screens what comes in', 'Detect prompt injection, strip secrets, block off-topic abuse'],
            ['Permissions', 'Limits what the agent can do', 'Read-only tools by default; scoped API keys'],
            ['Approvals', 'Puts a human on risky actions', 'Refunds above a threshold need sign-off'],
            ['Output', 'Checks what goes out', 'Schema validation, PII redaction, policy checks'],
            ['Monitoring', 'Catches what slipped through', 'Alerts on unusual actions, sampled human review'],
          ],
        ),
      ),
      S(
        'code',
        'Put guardrails in code, not prompts',
        P('Instructions in a prompt are suggestions the model usually follows. Permissions in code are rules it cannot break. If an action must never happen — deleting records, paying out above a limit — enforce it in the tool layer where the model has no say.'),
      ),
      S(
        'balance',
        'Balancing safety and usefulness',
        P('Over-strict guardrails produce an assistant that refuses everything and gets abandoned. The goal is proportionate control: light touch on low-risk answers, hard stops on irreversible actions. We tune thresholds using evals that include both attacks and normal questions.'),
      ),
    ],
    faq: [
      { q: 'Do guardrails slow the system down?', a: 'Well-designed checks add little latency. Heavy checks can run only on risky actions.' },
      { q: 'Can a model be fully jailbreak-proof?', a: 'No model is. That is why permissions and approvals, which do not depend on the model, carry the real weight.' },
      { q: 'Are guardrails needed for internal tools?', a: 'Yes — internal tools often have more powerful access. Scope permissions to the user’s own rights.' },
    ],
    related: ['prompt-injection-defense-for-agents', 'ai-agent-security-checklist', 'human-in-the-loop-ai-agents'],
  },
  {
    slug: 'what-is-prompt-caching',
    title: 'What Is Prompt Caching and How Much It Saves',
    description:
      'Prompt caching explained: how providers reuse the unchanged start of your prompt to cut cost and latency, how to structure prompts for it, and savings.',
    date: D,
    updated: D,
    cover: unsplash('photo-1587620962725-abab7fe55159'),
    coverAlt: 'Laptop showing code beside a small plant',
    tags: ['LLM', 'Cost', 'Explainer'],
    kind: 'Explainer',
    author: 'engineering',
    intro:
      'Most agent prompts repeat the same thousands of tokens on every call: instructions, tool definitions, reference material. Prompt caching stops you paying full price for that repetition.',
    sections: [
      S(
        'how',
        'How it works',
        P('When the beginning of a prompt is identical to a recent request, providers that support caching can reuse their internal processing of that prefix. You pay a reduced rate for the cached part, and the response starts faster.'),
      ),
      S(
        'structure',
        'Structure prompts for caching',
        OL(
          'Put stable content first: system instructions, tool definitions, fixed reference documents.',
          'Put variable content last: the user’s message, retrieved passages, the current date.',
          'Avoid tiny changes at the start — a timestamp at the top breaks the cache for everything after it.',
          'Keep tool definitions in a fixed order.',
        ),
      ),
      S(
        'savings',
        'What it saves',
        P('For agents with long system prompts and many turns, caching commonly cuts input-token cost by half or more and noticeably reduces time to first token. The exact discount and cache lifetime depend on the provider, so check their current documentation when modelling costs.'),
      ),
      S(
        'limits',
        'Limits',
        UL(
          'Caches expire after a period of inactivity, so very low-traffic apps benefit less.',
          'Only exact prefix matches count.',
          'Some providers charge a small premium to write the cache, repaid on reuse.',
        ),
      ),
    ],
    faq: [
      { q: 'Does caching change the model’s answers?', a: 'No. It changes how the provider processes the input, not the output.' },
      { q: 'Is my data stored longer?', a: 'Caches are short-lived and scoped to your account per provider terms; check them for your compliance needs.' },
      { q: 'Should every project use it?', a: 'Any project with a long, stable prompt prefix and repeat traffic should.' },
    ],
    related: ['how-we-cut-llm-costs-without-losing-quality', 'how-to-estimate-llm-api-costs', 'what-are-tokens-in-llms'],
  },
  {
    slug: 'what-are-llm-hallucinations',
    title: 'Why LLMs Hallucinate and How to Reduce It',
    description:
      'Why LLMs make things up, which tasks are most at risk, and the techniques — grounding, citations, refusals, evals — that reduce hallucinations.',
    date: D,
    updated: D,
    cover: unsplash('photo-1535378620166-273708d44e4c'),
    coverAlt: 'Humanoid robot with a glowing visor',
    tags: ['LLM', 'Reliability', 'Explainer'],
    kind: 'Explainer',
    author: 'engineering',
    intro:
      'A hallucination is a confident answer that is wrong. It is not a bug that will be patched out; it is a property of how these models work. The job is to design around it.',
    sections: [
      S(
        'why',
        'Why it happens',
        P('A language model generates the most plausible continuation of text. Plausible and true usually overlap — but when the model lacks the fact, a plausible-sounding invention is still the most likely continuation. It has no built-in sense of "I do not know" unless you give it one.'),
      ),
      S(
        'risk',
        'Where risk is highest',
        UL(
          'Specific facts: numbers, dates, names, citations, prices.',
          'Niche or recent topics the model saw little of.',
          'Questions that assume something false.',
          'Long answers, where errors compound.',
        ),
      ),
      S(
        'reduce',
        'How to reduce it',
        T(
          'Techniques that measurably reduce hallucination',
          ['Technique', 'What it does'],
          [
            ['Grounding (RAG / tools)', 'Answers come from retrieved data, not memory'],
            ['Required citations', 'Every claim points to a source that can be checked'],
            ['Permission to refuse', 'Explicitly allow and reward "I don’t know"'],
            ['Structured outputs', 'Constrain answers to known fields and values'],
            ['Verification step', 'A second check compares the answer to the sources'],
            ['Evals', 'Measure hallucination rate on real questions every release'],
          ],
        ),
      ),
      S(
        'accept',
        'Design for the residual',
        P('No technique drives the rate to zero. For high-stakes outputs — legal, medical, financial — keep a human check. For lower-stakes ones, make sources visible so users can verify with one click.'),
      ),
    ],
    faq: [
      { q: 'Do bigger models hallucinate less?', a: 'Generally less on common knowledge, but all models do it. Grounding matters more than model size.' },
      { q: 'Can we measure hallucination?', a: 'Yes — with an eval set of questions and correct answers, including questions the system should refuse.' },
      { q: 'Is temperature the fix?', a: 'Lower temperature makes output more consistent, not more truthful. It helps a little; grounding helps a lot.' },
    ],
    related: ['what-is-rag-retrieval-augmented-generation', 'how-to-evaluate-a-rag-system', 'why-ai-agents-fail-in-production'],
  },
  {
    slug: 'agent-memory-explained',
    title: 'Agent Memory Explained: Short-Term, Long-Term, Files',
    description:
      'How AI agents remember: conversation context, summaries, long-term memory stores and files — what each is for, what it costs, and the privacy rules to follow.',
    date: D,
    updated: D,
    cover: unsplash('photo-1434030216411-0b793f4b4173'),
    coverAlt: 'Person writing notes on paper beside a coffee cup',
    tags: ['AI agents', 'Memory', 'Explainer'],
    kind: 'Explainer',
    author: 'engineering',
    intro:
      'Language models are stateless: each call starts from nothing. Everything an agent "remembers" is something your system chose to put back in front of it.',
    sections: [
      S(
        'kinds',
        'Four kinds of memory',
        T(
          'Agent memory types',
          ['Type', 'What it holds', 'Lifetime'],
          [
            ['Context window', 'The current conversation and working data', 'One session'],
            ['Summaries', 'Compressed history of long conversations', 'Session or across sessions'],
            ['Long-term store', 'Facts and preferences about a user or account', 'Persistent'],
            ['Files / scratchpad', 'Notes, plans and intermediate results the agent writes', 'Task or project'],
          ],
        ),
      ),
      S(
        'design',
        'Design choices',
        UL(
          'Summarise long conversations instead of re-sending everything — it is cheaper and often more accurate.',
          'Store facts as structured records (preferred language, account tier) rather than free text where you can.',
          'Let long-running agents write plans and progress to files, so work survives restarts.',
          'Retrieve memories by relevance, not all at once.',
        ),
      ),
      S(
        'privacy',
        'Privacy rules',
        OL(
          'Tell users what is remembered and let them delete it.',
          'Never store secrets or payment data in agent memory.',
          'Scope memory per user or account — never share across customers.',
          'Set retention periods and enforce them.',
        ),
      ),
    ],
    faq: [
      { q: 'Does the model learn from conversations?', a: 'Not by itself. Memory is data your system stores and re-supplies; the model weights do not change.' },
      { q: 'Why does my agent forget in long chats?', a: 'The context fills up or older turns get truncated. Summaries and structured memory fix it.' },
      { q: 'Is long-term memory always useful?', a: 'Not always. For one-off support queries it adds little; for account managers and assistants it adds a lot.' },
    ],
    related: ['what-is-a-context-window', 'what-is-an-agent-harness', 'what-is-an-ai-agent'],
  },
  {
    slug: 'what-are-tokens-in-llms',
    title: 'What Are Tokens? LLM Pricing and Limits Explained',
    description:
      'Tokens explained: how language models split text into tokens, why pricing and context limits are measured in them, and why Indian languages can cost more.',
    date: D,
    updated: D,
    cover: unsplash('photo-1515879218367-8466d910aaa4'),
    coverAlt: 'Close-up of Python code on a dark screen',
    tags: ['LLM', 'Cost', 'Explainer'],
    kind: 'Explainer',
    author: 'engineering',
    intro:
      'Every LLM price, limit and speed figure is quoted in tokens. Understanding them takes five minutes and makes every AI budget conversation clearer.',
    sections: [
      S(
        'what',
        'What a token is',
        P('Models do not read words or letters; they read tokens — chunks of text from a fixed vocabulary. Common English words are often one token; rare words split into several. As a rough rule for English, 100 tokens is about 75 words.'),
      ),
      S(
        'why',
        'Why it matters',
        UL(
          'Pricing: you pay per input token (what you send) and per output token (what the model writes), with output usually priced higher.',
          'Limits: the context window — how much the model can consider at once — is measured in tokens.',
          'Speed: output is generated token by token, so long answers take longer.',
        ),
      ),
      S(
        'languages',
        'The Indian-language factor',
        P('Tokenisers are often trained mostly on English. Text in Hindi, Marathi or other Indian scripts can take noticeably more tokens for the same meaning, which raises cost and uses more context. Measure on your real content before budgeting, and compare models — tokenisers differ.'),
      ),
      S(
        'control',
        'Controlling token use',
        OL(
          'Trim instructions to what changes behaviour.',
          'Retrieve fewer, better passages.',
          'Summarise long histories.',
          'Ask for concise answers.',
          'Cache the stable prefix.',
        ),
      ),
    ],
    faq: [
      { q: 'How do I count tokens?', a: 'Providers offer tokenizer tools and return token counts with every API response. Log them.' },
      { q: 'Are images and audio tokens too?', a: 'Yes — multimodal inputs are converted to tokens and billed accordingly.' },
      { q: 'Why is output more expensive?', a: 'Generating each output token requires a full model step, while input is processed in parallel.' },
    ],
    related: ['how-to-estimate-llm-api-costs', 'what-is-a-context-window', 'what-is-prompt-caching'],
  },
  {
    slug: 'what-is-ai-observability',
    title: 'What Is AI Observability? Tracing Agents in Prod',
    description:
      'AI observability explained: tracing every model call and tool step, tracking quality, cost and latency, and catching agent failures before customers do.',
    date: D,
    updated: D,
    cover: unsplash('photo-1487058792275-0ad4aaf24ca7'),
    coverAlt: 'Code scrolling on a computer monitor',
    tags: ['Observability', 'AI agents', 'Explainer'],
    kind: 'Explainer',
    author: 'engineering',
    intro:
      'Traditional monitoring tells you a server is up. It cannot tell you an agent gave a wrong answer politely and quickly. AI observability fills that gap.',
    sections: [
      S(
        'traces',
        'Traces: the core',
        P('A trace records everything that happened for one task: the prompt, each model call, every tool call with inputs and outputs, retrieved documents, the final answer, tokens and timings. When something goes wrong, the trace shows exactly where.'),
      ),
      S(
        'metrics',
        'What to track',
        T(
          'Core AI observability metrics',
          ['Metric', 'Why it matters'],
          [
            ['Task success rate', 'The number that matters to the business'],
            ['Escalation / hand-off rate', 'Rising rates signal quality drift'],
            ['Cost per task', 'Catches prompt bloat and loops'],
            ['Latency (p50, p95)', 'Slow agents get abandoned'],
            ['Tool error rate', 'Integrations break silently'],
            ['User feedback', 'Thumbs, ratings, complaints'],
          ],
        ),
      ),
      S(
        'quality',
        'Quality in production',
        P('Sample real traces daily and grade them — automatically with an LLM grader calibrated against human judgement, plus a small human-reviewed sample. Failures become new eval cases, so the same mistake is caught before the next release.'),
      ),
      S(
        'privacy',
        'Privacy',
        P('Traces contain customer data. Redact sensitive fields, restrict access, and set retention periods — observability should not become your biggest data-protection risk.'),
      ),
    ],
    faq: [
      { q: 'Do we need a special tool?', a: 'Dedicated AI tracing tools help, but OpenTelemetry-based tracing into your existing stack works well too.' },
      { q: 'How much data should we keep?', a: 'Full traces for a short window, aggregated metrics for longer, and redacted samples for evals.' },
      { q: 'When should observability be set up?', a: 'Before launch. Retrofitting it after an incident is slower and you lose the evidence.' },
    ],
    related: ['monitoring-ai-agents-in-production', 'how-we-build-agent-evals-tutorial', 'why-ai-agents-fail-in-production'],
  },
  {
    slug: 'what-is-a-context-window',
    title: 'What Is a Context Window and Why It Fills Up',
    description:
      'The context window explained: how much an LLM can read at once, why bigger is not always better, and how agents manage context on long tasks.',
    date: D,
    updated: D,
    cover: unsplash('photo-1550439062-609e1531270e'),
    coverAlt: 'Developer working at a desk with three curved monitors',
    tags: ['LLM', 'AI agents', 'Explainer'],
    kind: 'Explainer',
    author: 'engineering',
    intro:
      'The context window is the model’s working memory: everything it can consider when producing an answer. Windows have grown enormous, but filling them is rarely the best strategy.',
    sections: [
      S(
        'what',
        'What goes in it',
        UL(
          'System instructions and tool definitions.',
          'The conversation so far.',
          'Retrieved documents and tool results.',
          'The model’s own output as it writes.',
        ),
      ),
      S(
        'bigger',
        'Why bigger is not always better',
        UL(
          'Cost: every token in the window is billed on every call.',
          'Latency: more input means slower responses.',
          'Attention: models can miss details buried in very long contexts.',
        ),
        P('A focused context of the right few thousand tokens usually beats a huge context of everything.'),
      ),
      S(
        'manage',
        'How agents manage context',
        OL(
          'Retrieve only what the current step needs.',
          'Summarise or clear old tool results once used.',
          'Write progress and notes to files, and read back only what is needed.',
          'Split big tasks across sub-agents, each with a clean context.',
        ),
      ),
    ],
    faq: [
      { q: 'What happens when the window is full?', a: 'Older content must be dropped or summarised; otherwise the request fails. Good harnesses handle this automatically.' },
      { q: 'Should we paste whole documents in?', a: 'For one-off analysis, sometimes. For repeated questions, retrieval is cheaper and more accurate.' },
      { q: 'Does a larger window mean better reasoning?', a: 'No — it means more capacity to read. Reasoning quality depends on the model and on what you put in.' },
    ],
    related: ['agent-memory-explained', 'what-are-tokens-in-llms', 'single-agent-vs-multi-agent'],
  },
];
