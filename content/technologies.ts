export type Technology = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  description: string;
  useCases: { title: string; desc: string }[];
  outcomes: { value: string; label: string }[];
  faq: { q: string; a: string }[];
  related: string[];
};

export const technologies: Technology[] = [
  {
    slug: 'claude-code',
    name: 'Claude Code',
    category: 'AI Coding Agent',
    tagline: 'Anthropic\'s agentic coding tool for production software',
    metaDescription: 'TrueCodeAI uses Claude Code — Anthropic\'s autonomous coding agent — to build production software faster. See what we build with it and how it accelerates delivery.',
    headline: 'We Build with Claude Code',
    subheadline: 'Anthropic\'s terminal-based coding agent lets our engineers navigate codebases, edit multiple files, run tests, and ship features faster than any previous tooling.',
    description: 'Claude Code is not an autocomplete tool — it is an autonomous agent that understands your entire codebase, plans multi-file changes, runs tests, and iterates until the code works. Our engineers use it for feature development, refactoring, debugging complex systems, and infrastructure work. The result is 2–3× faster delivery on well-defined tasks without sacrificing code quality.',
    useCases: [
      { title: 'Multi-file feature implementation', desc: 'Claude Code writes coordinated changes across components, API routes, types, and tests in a single pass — reducing the back-and-forth that slows down development.' },
      { title: 'Codebase refactoring', desc: 'Safely rename, restructure, or replace patterns across large codebases with full understanding of where each reference is used.' },
      { title: 'Test generation', desc: 'Generate unit tests, integration tests, and edge case coverage automatically — covering scenarios developers often miss.' },
      { title: 'Bug diagnosis and fixing', desc: 'Provide Claude Code with an error, a failing test, or a bug description — it traces the root cause and fixes it, often in one pass.' },
      { title: 'Documentation generation', desc: 'Turn complex code into clear technical documentation, API references, and inline comments automatically.' },
      { title: 'Infrastructure as code', desc: 'Write Terraform, Docker Compose, GitHub Actions, and deployment configurations from plain English descriptions of the infrastructure.' },
    ],
    outcomes: [
      { value: '2–3×', label: 'faster feature delivery' },
      { value: '40%', label: 'less time debugging' },
      { value: '95%+', label: 'test coverage on AI-generated code' },
    ],
    faq: [
      { q: 'Does using Claude Code mean lower quality code?', a: 'No — Claude Code generates production-quality code that our engineers review, test, and approve before shipping. It handles the boilerplate and scaffolding; our engineers focus on architecture, security, and correctness.' },
      { q: 'Is Claude Code being used in your client projects?', a: 'Yes. We use Claude Code on every project where it accelerates delivery — particularly for well-defined features, refactoring tasks, and test generation. Your code is never shared with Anthropic (we use the API, not the consumer product).' },
      { q: 'What does Claude Code change about your pricing?', a: 'We pass the efficiency gains to clients through faster delivery and competitive pricing — not inflated margins. You get more delivered in less time, at a lower total cost.' },
    ],
    related: ['cursor-ai', 'anthropic-api', 'github-actions'],
  },
  {
    slug: 'cursor-ai',
    name: 'Cursor',
    category: 'AI Code Editor',
    tagline: 'The AI-native code editor our frontend team uses daily',
    metaDescription: 'TrueCodeAI\'s engineers use Cursor — the AI-powered VS Code fork — for UI development, rapid iteration, and inline code editing. See what it enables.',
    headline: 'Frontend Development Powered by Cursor',
    subheadline: 'Cursor\'s inline AI editing lets our frontend engineers describe changes in English and see them applied instantly across components, styles, and logic.',
    description: 'Cursor is a VS Code fork with AI deeply integrated — not an extension, but a purpose-built AI code editor. Our frontend team uses it for React and Next.js development, inline refactoring, and rapid iteration on UI components. When combined with Claude Code for backend work, the two tools cover the full development stack with AI assistance at every layer.',
    useCases: [
      { title: 'Component development', desc: 'Describe a UI component in plain English, watch Cursor build the JSX, styles, and state logic, then iterate inline.' },
      { title: 'Inline refactoring', desc: 'Select a block of code, describe what to change, and Cursor applies the transformation in place — no copy-paste.' },
      { title: 'TypeScript type generation', desc: 'Generate accurate TypeScript types from API responses, database schemas, or plain English descriptions of data structures.' },
      { title: 'Codebase chat', desc: 'Ask questions about any part of the codebase — "where is the auth middleware wired up?" — and get precise answers with file references.' },
    ],
    outcomes: [
      { value: '50%', label: 'faster UI iteration' },
      { value: '3×', label: 'more components per sprint' },
      { value: '80%', label: 'reduction in boilerplate time' },
    ],
    faq: [
      { q: 'How is Cursor different from GitHub Copilot?', a: 'Cursor is purpose-built for AI-first development — the entire interface is designed around AI editing, not just autocompletion. Copilot suggests the next line; Cursor can rewrite a file based on a description.' },
      { q: 'Do you use Cursor for all frontend work?', a: 'Our frontend engineers default to Cursor for component and feature work. For complex architecture decisions and cross-file changes, we combine it with Claude Code.' },
    ],
    related: ['claude-code', 'nextjs', 'typescript'],
  },
  {
    slug: 'openai-api',
    name: 'OpenAI API',
    category: 'AI Model API',
    tagline: 'GPT-4o and o-series models for production AI applications',
    metaDescription: 'TrueCodeAI builds AI applications using the OpenAI API — GPT-4o for fast response, o4-mini for reasoning tasks. See what we build and why we choose each model.',
    headline: 'Production AI Applications on the OpenAI API',
    subheadline: 'We use GPT-4o for fast, cost-effective responses and the o-series models for complex reasoning — routing between them to optimise quality and cost for every task.',
    description: 'The OpenAI API gives access to GPT-4o (fast, multimodal, excellent for customer-facing applications) and the o-series reasoning models (exceptional for multi-step analysis, code, and math). We build production applications that route intelligently between models — simple queries go to the cheap, fast models; complex reasoning goes to the powerful ones. This keeps costs manageable without sacrificing quality where it counts.',
    useCases: [
      { title: 'Customer support AI', desc: 'GPT-4o handles natural conversation, intent detection, and response generation for support chatbots — fast enough for real-time use and capable enough to handle nuanced requests.' },
      { title: 'Document analysis', desc: 'Extract key information from contracts, invoices, and reports using structured output mode — accurate, deterministic, and ready to write to your database.' },
      { title: 'Complex reasoning tasks', desc: 'o4-mini handles multi-step analysis, financial modelling assistance, and code debugging where careful step-by-step reasoning is required.' },
      { title: 'Vision and image analysis', desc: 'GPT-4o Vision processes images, screenshots, and documents — enabling AI that sees what your customers send, not just what they type.' },
      { title: 'Function calling and agents', desc: 'Build agents that call your APIs, update your database, and take real-world actions using OpenAI\'s function calling interface.' },
    ],
    outcomes: [
      { value: '<500ms', label: 'typical GPT-4o latency' },
      { value: '85–95%', label: 'accuracy on structured extraction' },
      { value: '70%', label: 'support tickets auto-resolved' },
    ],
    faq: [
      { q: 'Do you use OpenAI or Anthropic for client projects?', a: 'Both — we choose based on the task. Claude is better for long documents and reliable instruction-following; GPT-4o is better for speed and multimodal inputs; o-series for reasoning. Most production systems use more than one model.' },
      { q: 'How do you manage costs on the OpenAI API at scale?', a: 'We use prompt caching, model routing (cheap models for simple tasks), output length control, and batching where possible. A well-architected system typically costs 10× less than a naive implementation at the same quality level.' },
    ],
    related: ['anthropic-api', 'langchain', 'vercel-ai-sdk'],
  },
  {
    slug: 'anthropic-api',
    name: 'Anthropic Claude API',
    category: 'AI Model API',
    tagline: 'Claude 3.7 Sonnet and Opus for reliable, safe production AI',
    metaDescription: 'TrueCodeAI builds with the Anthropic Claude API — the most reliable, instruction-following AI model for customer-facing applications and document analysis.',
    headline: 'Building with Anthropic\'s Claude API',
    subheadline: 'Claude 3.7 Sonnet is our default model for customer-facing AI — the best instruction following, lowest hallucination rate, and built-in safety for production applications.',
    description: 'Anthropic\'s Claude API offers access to Claude 3.7 Sonnet (fast, highly capable, excellent safety) and Claude 3 Opus (maximum capability for complex tasks). We default to Claude for customer-facing applications where reliability matters most — Claude follows instructions more consistently than other models and is significantly less likely to produce harmful or incorrect outputs. Claude\'s 200K token context window also enables use cases that are impossible with shorter-context models.',
    useCases: [
      { title: 'Customer-facing AI chatbots', desc: 'Claude reliably does what it is told and declines to do what it should not — critical for any AI touching customers directly.' },
      { title: 'Document intelligence (long documents)', desc: 'Claude\'s 200K token window enables analysis of entire contracts, research papers, or codebases in a single prompt.' },
      { title: 'AI agents with tool use', desc: 'Claude\'s function calling is precise and reliable — it calls the right tools with the right arguments, making it the best choice for multi-step agent systems.' },
      { title: 'Extended thinking for complex reasoning', desc: 'Claude 3.7 Sonnet with extended thinking mode provides step-by-step reasoning for complex analysis, giving you visibility into how conclusions are reached.' },
      { title: 'Content moderation and classification', desc: 'Claude\'s safety training makes it excellent at classifying sensitive content, detecting policy violations, and applying nuanced judgement in moderation tasks.' },
    ],
    outcomes: [
      { value: '200K', label: 'token context window' },
      { value: '#1', label: 'instruction-following accuracy' },
      { value: '<1%', label: 'hallucination rate on grounded tasks' },
    ],
    faq: [
      { q: 'Why choose Claude over GPT-4o?', a: 'Claude is better for: long documents (200K vs 128K context), instruction-following reliability, safety-critical applications, and agent systems where precise tool calling is required. GPT-4o is better for speed, cost, and multimodal inputs.' },
      { q: 'Is Claude data used for training by Anthropic?', a: 'No — API calls are not used to train Anthropic\'s models. Your data stays private. We use the API, not the consumer product.' },
    ],
    related: ['openai-api', 'claude-code', 'langchain'],
  },
  {
    slug: 'langchain',
    name: 'LangChain',
    category: 'AI Framework',
    tagline: 'The orchestration framework for building production LLM applications',
    metaDescription: 'TrueCodeAI uses LangChain and LangGraph to build production AI agents, RAG pipelines, and multi-step LLM workflows. See how we architect reliable AI systems.',
    headline: 'AI Agents and RAG Pipelines Built on LangChain',
    subheadline: 'LangChain provides the orchestration layer for our AI applications — connecting models, tools, memory, and retrieval into coherent, reliable workflows.',
    description: 'LangChain is the most widely-used Python/TypeScript framework for building LLM-powered applications. It provides abstractions for prompt management, model switching, memory, RAG pipelines, and agent execution. We use LangChain for its ecosystem maturity and LangGraph for complex stateful agent workflows. Together they handle the plumbing so we can focus on the application logic that creates real business value.',
    useCases: [
      { title: 'RAG (Retrieval-Augmented Generation) systems', desc: 'LangChain\'s document loaders, text splitters, vector store integrations, and retrieval chains make it the fastest way to build production-grade RAG.' },
      { title: 'Multi-step LLM workflows', desc: 'Chain multiple model calls, tool uses, and conditional logic into coherent workflows — with proper error handling and retry logic at each step.' },
      { title: 'LangGraph agent systems', desc: 'LangGraph (LangChain\'s agent framework) provides stateful, graph-based agent execution — the most reliable way to build complex multi-step agents.' },
      { title: 'Model provider abstraction', desc: 'Switch between OpenAI, Anthropic, and other providers without rewriting your application — LangChain abstracts the API differences.' },
    ],
    outcomes: [
      { value: '60%', label: 'faster agent development' },
      { value: '3×', label: 'more reliable than custom loops' },
      { value: '100+', label: 'integrations available' },
    ],
    faq: [
      { q: 'Do you use LangChain or build custom agent systems?', a: 'We use LangChain/LangGraph for most agent work — the ecosystem maturity and reliability are better than custom implementations for production systems. For very simple tasks, we build lightweight custom wrappers.' },
      { q: 'What is the difference between LangChain and LangGraph?', a: 'LangChain handles individual chains and RAG pipelines. LangGraph adds stateful, graph-based control flow for complex agent systems where the execution path depends on previous results.' },
    ],
    related: ['anthropic-api', 'openai-api', 'pinecone'],
  },
  {
    slug: 'pinecone',
    name: 'Pinecone',
    category: 'Vector Database',
    tagline: 'Production vector database for semantic search and RAG systems',
    metaDescription: 'TrueCodeAI uses Pinecone as the vector database for RAG systems and semantic search — enabling AI that answers questions from your private business data.',
    headline: 'Semantic Search and RAG Powered by Pinecone',
    subheadline: 'Pinecone stores your documents as semantic embeddings, enabling AI to search by meaning — not just keywords — and answer questions grounded in your actual data.',
    description: 'Pinecone is the leading managed vector database for AI applications. It stores document embeddings and performs millisecond-latency semantic similarity search — the backbone of any RAG (Retrieval-Augmented Generation) system. We use Pinecone for client knowledge bases, product catalogues, and document libraries that need to be searchable by meaning, not just keywords.',
    useCases: [
      { title: 'Internal knowledge base AI', desc: 'Index your Notion, Confluence, or Google Drive documents in Pinecone — your AI assistant finds the right page even if the exact keywords are not there.' },
      { title: 'Customer support RAG', desc: 'Index your product documentation, FAQs, and policy documents so your support AI retrieves accurate answers from your own content.' },
      { title: 'E-commerce semantic search', desc: 'Customers search by description ("blue dress for a beach wedding") and find matching products — even without matching the catalogue\'s exact keywords.' },
      { title: 'Legal and contract Q&A', desc: 'Index contracts and legal documents for semantic Q&A — "which contracts have a 30-day termination clause?" finds the right documents by meaning.' },
    ],
    outcomes: [
      { value: '<100ms', label: 'search latency at scale' },
      { value: '10M+', label: 'vectors per index' },
      { value: '95%', label: 'retrieval accuracy on quality data' },
    ],
    faq: [
      { q: 'Do you always use Pinecone or are there alternatives?', a: 'Pinecone is our default for production at scale. For smaller systems (under 100K documents) or where cost is a constraint, we use pgvector (PostgreSQL extension) — it adds vector search to your existing database with no additional service.' },
      { q: 'How much does Pinecone cost?', a: 'Pinecone has a generous free tier and scales from ~$70/month for a standard pod. For most business RAG applications, the cost is well under $200/month.' },
    ],
    related: ['langchain', 'anthropic-api', 'openai-api'],
  },
  {
    slug: 'vercel-ai-sdk',
    name: 'Vercel AI SDK',
    category: 'AI Framework',
    tagline: 'Stream AI responses in Next.js apps with the official Vercel SDK',
    metaDescription: 'TrueCodeAI builds streaming AI chat interfaces, AI-powered Next.js features, and real-time LLM applications using the Vercel AI SDK.',
    headline: 'Real-Time AI Features in Next.js Using the Vercel AI SDK',
    subheadline: 'The Vercel AI SDK provides unified streaming, tool calling, and React hooks for building AI chat interfaces and AI-powered features in Next.js applications.',
    description: 'The Vercel AI SDK simplifies building AI-powered web applications — especially streaming chat interfaces, AI that calls tools and functions, and React components that react to streaming LLM output. It works with all major AI providers (OpenAI, Anthropic, Google, etc.) through a unified interface. We use it as the integration layer between our Next.js frontend and the LLM backend for any application that needs a chat interface or real-time AI output.',
    useCases: [
      { title: 'Streaming chat interfaces', desc: 'Build ChatGPT-style streaming interfaces in Next.js with < 50 lines of code — tokens appear as they are generated, creating a responsive user experience.' },
      { title: 'AI tool calling in the browser', desc: 'AI agents that call tools (search, database queries, API calls) with the results streaming back to the user in real time.' },
      { title: 'Structured AI output', desc: 'Use the AI SDK\'s structured output mode to extract typed data from LLM responses — no parsing, no validation code.' },
      { title: 'Multi-model switching', desc: 'Switch between OpenAI, Anthropic, and other providers by changing one line — useful for A/B testing models or providing fallback when a provider is unavailable.' },
    ],
    outcomes: [
      { value: '10×', label: 'faster chat interface development' },
      { value: 'Unified', label: 'API across all AI providers' },
      { value: 'First-token', label: 'streaming to the browser' },
    ],
    faq: [
      { q: 'Do I need the Vercel AI SDK if I am not deploying on Vercel?', a: 'No — the Vercel AI SDK works on any Node.js backend. The "Vercel" in the name refers to the company, not the platform.' },
      { q: 'Is the Vercel AI SDK suitable for production?', a: 'Yes — it is actively maintained by Vercel, used in production by thousands of companies, and designed with production concerns (streaming, retries, error handling) built in.' },
    ],
    related: ['nextjs', 'openai-api', 'anthropic-api'],
  },
  {
    slug: 'elevenlabs',
    name: 'ElevenLabs',
    category: 'Voice AI',
    tagline: 'Neural text-to-speech for voice agents that sound human',
    metaDescription: 'TrueCodeAI uses ElevenLabs for voice AI deployments — creating AI phone agents and voice features with natural-sounding, customisable neural voices.',
    headline: 'Voice AI Applications Powered by ElevenLabs',
    subheadline: 'ElevenLabs neural TTS produces voices indistinguishable from human speech — enabling voice agents, interactive voice response, and audio content generation at scale.',
    description: 'ElevenLabs is the leading text-to-speech platform for AI voice applications. Its neural voices are the most realistic available in 2026 — indistinguishable from human speech on most samples. We use ElevenLabs in AI phone agent systems, voice assistants, and any application where the AI needs to speak rather than type. Custom voice cloning lets us create a branded voice that matches your company identity.',
    useCases: [
      { title: 'AI phone agents', desc: 'The TTS layer in our voice AI systems — inbound call handling, appointment booking, outbound follow-up — all powered by ElevenLabs voices that callers accept as human.' },
      { title: 'Custom brand voice', desc: 'Clone a human voice (with consent) to create a consistent brand identity across all AI voice touchpoints — phone, IVR, app features.' },
      { title: 'Multilingual voice AI', desc: 'ElevenLabs supports 29+ languages with natural pronunciation — enabling voice AI to serve Spanish, French, Hindi, and other language speakers without a separate system.' },
      { title: 'Audio content generation', desc: 'Convert written content (blog posts, product descriptions, help docs) to audio automatically — making your content accessible and enabling podcast-style formats.' },
    ],
    outcomes: [
      { value: '29+', label: 'languages supported' },
      { value: '<200ms', label: 'first audio chunk latency' },
      { value: '95%+', label: 'caller acceptance rate' },
    ],
    faq: [
      { q: 'Do callers know they are speaking with an AI?', a: 'Callers are typically surprised when told the agent was AI — ElevenLabs voices are that natural. We recommend disclosing at the start ("Hi, this is Alex, an AI assistant") — transparency builds trust and is increasingly required by regulation.' },
      { q: 'What is voice cloning and how does it work?', a: 'Voice cloning creates a custom TTS voice from audio samples of a real speaker (with their consent). The result is a unique voice for your brand — not a generic AI voice.' },
    ],
    related: ['vapi', 'twilio', 'openai-api'],
  },
  {
    slug: 'vapi',
    name: 'Vapi',
    category: 'Voice AI Platform',
    tagline: 'End-to-end voice AI platform for AI phone agents',
    metaDescription: 'TrueCodeAI builds AI phone agents on Vapi — the infrastructure for real-time voice AI including STT, LLM, TTS, and call handling in one platform.',
    headline: 'AI Phone Agents Built on Vapi',
    subheadline: 'Vapi provides the complete voice AI stack — speech recognition, AI reasoning, voice synthesis, and phone call infrastructure — so we can focus on building your AI agent, not managing telephony.',
    description: 'Vapi is an infrastructure platform for AI phone agents. It handles the complete technical stack: inbound and outbound calls via phone numbers, real-time speech-to-text, LLM integration for reasoning, text-to-speech with multiple voice providers (ElevenLabs, Deepgram), and calendar/CRM integrations. We build on Vapi because it solves the hard telephony and streaming problems — leaving us to focus on the agent design, business logic, and integrations that actually differentiate your system.',
    useCases: [
      { title: 'Inbound call handling', desc: 'Answer every call on the first ring, qualify the caller, answer questions from your knowledge base, and book appointments — automatically, 24/7.' },
      { title: 'Outbound lead follow-up', desc: 'Call new leads within 60 seconds of form submission, qualify them, and book discovery calls — before they sign up with a competitor.' },
      { title: 'Appointment reminders', desc: 'Automated outbound calls to remind patients, clients, or customers about upcoming appointments — with natural conversation for rescheduling if needed.' },
      { title: 'After-hours coverage', desc: 'Handle everything your receptionist would during business hours — bookings, emergencies, enquiries — at 2am on a Sunday.' },
    ],
    outcomes: [
      { value: '<5%', label: 'missed call rate' },
      { value: '25%', label: 'bookings from after-hours calls' },
      { value: '2 weeks', label: 'typical deployment time' },
    ],
    faq: [
      { q: 'Does Vapi work for non-US phone numbers?', a: 'Yes — Vapi supports UK, Australian, Canadian, and dozens of other country numbers. International deployments require language configuration and sometimes local voice provider adjustments.' },
      { q: 'Can the AI agent transfer calls to a human?', a: 'Yes — call transfer to a human is a standard feature. You define the conditions: emergency keywords, request for a human, or specific enquiry types trigger a warm transfer to your team.' },
    ],
    related: ['elevenlabs', 'twilio', 'anthropic-api'],
  },
  {
    slug: 'n8n',
    name: 'n8n',
    category: 'Workflow Automation',
    tagline: 'Self-hosted, code-capable workflow automation for technical teams',
    metaDescription: 'TrueCodeAI builds n8n workflows for businesses that need powerful automation with full code access — connecting AI models, APIs, databases, and business tools without coding limits.',
    headline: 'Powerful Automation Built on n8n',
    subheadline: 'n8n is the workflow automation platform for teams that have outgrown Zapier — self-hosted, code-capable, and able to connect to any system with an API.',
    description: 'n8n is an open-source workflow automation platform that lets you connect any application or API — with the option to write code in JavaScript or Python when visual blocks are not enough. Unlike Zapier or Make, n8n can be self-hosted (important for data-sensitive industries), handles complex branching logic, and runs code directly inside workflows. We use n8n for business process automation that requires the flexibility of code without the overhead of a custom-built automation system.',
    useCases: [
      { title: 'AI-powered email processing', desc: 'Read incoming emails, use an LLM to classify and extract data, route to the right team, and generate AI-drafted responses — all in one workflow.' },
      { title: 'Multi-system data synchronisation', desc: 'Keep your CRM, ERP, spreadsheets, and communication tools in sync automatically — even when the systems do not have native integrations.' },
      { title: 'AI agent orchestration', desc: 'Use n8n as the orchestration layer for AI agent workflows — triggering agents, passing data, handling results, and routing based on agent output.' },
      { title: 'Document processing pipelines', desc: 'PDFs arrive by email or webhook, n8n extracts content, passes to an AI for analysis, writes results to your database, and notifies your team.' },
    ],
    outcomes: [
      { value: '400+', label: 'built-in integrations' },
      { value: 'Self-hosted', label: 'for data sovereignty' },
      { value: '0 per task', label: 'cost once deployed' },
    ],
    faq: [
      { q: 'When do you choose n8n over Zapier or Make?', a: 'n8n when: you need self-hosting (HIPAA, GDPR), you need JavaScript/Python code in workflows, you need complex branching logic, or your volumes would make Zapier/Make expensive. Zapier/Make for simpler, lower-volume workflows where setup speed matters most.' },
      { q: 'What does n8n deployment look like?', a: 'n8n runs on any server — we typically deploy it on a small cloud VM (DigitalOcean, AWS, or your own infrastructure). Setup takes about a day; the workflow is separate from deployment.' },
    ],
    related: ['make', 'zapier', 'anthropic-api'],
  },
  {
    slug: 'nextjs',
    name: 'Next.js',
    category: 'Frontend Framework',
    tagline: 'Production React framework for fast, SEO-optimised web applications',
    metaDescription: 'TrueCodeAI builds client-facing products on Next.js — the React framework that gives you SSG, ISR, Server Components, and best-in-class SEO performance out of the box.',
    headline: 'Production Web Applications on Next.js',
    subheadline: 'Next.js powers our client-facing products — combining static generation for SEO performance with server-side capabilities for dynamic, authenticated features.',
    description: 'Next.js is the React framework of choice for production web applications. Its App Router (Next.js 13+) combines server components for fast initial loads and SEO with client components for interactive features. Static site generation (SSG) and incremental static regeneration (ISR) give us marketing and content pages that load in milliseconds and rank well in search engines. We use Next.js for AI-powered SaaS products, marketing websites, and e-commerce applications.',
    useCases: [
      { title: 'AI-powered SaaS products', desc: 'Server components for data-heavy pages, client components for interactive AI features, API routes for backend logic — all in one framework.' },
      { title: 'SEO-optimised marketing sites', desc: 'Static generation ensures every page loads fast and is fully crawlable — critical for businesses that rely on organic search traffic.' },
      { title: 'E-commerce with AI features', desc: 'Product catalogues with AI-powered search, personalised recommendations, and dynamic pricing — all rendered efficiently with Next.js.' },
      { title: 'Customer portals and dashboards', desc: 'Authenticated user-facing applications with real-time data, AI chat features, and complex interactive UI built on the same Next.js codebase.' },
    ],
    outcomes: [
      { value: '<1s', label: 'typical page load (SSG)' },
      { value: '95+', label: 'Lighthouse performance score' },
      { value: '1 codebase', label: 'for marketing + app' },
    ],
    faq: [
      { q: 'Why Next.js over plain React?', a: 'Next.js adds routing, SSG/SSR, image optimisation, and a backend (API routes / Server Actions) on top of React. Building these yourself with plain React takes weeks; Next.js gives you a production-ready framework from day one.' },
      { q: 'Is Next.js good for SEO?', a: 'Yes — Next.js is among the best choices for SEO. Static generation means pages are pre-rendered HTML that search engines can crawl instantly. Server components enable metadata generation, JSON-LD injection, and proper canonical URL management.' },
    ],
    related: ['vercel-ai-sdk', 'typescript', 'supabase'],
  },
  {
    slug: 'supabase',
    name: 'Supabase',
    category: 'Backend as a Service',
    tagline: 'Open-source Firebase alternative with PostgreSQL and real-time features',
    metaDescription: 'TrueCodeAI uses Supabase as the backend database, auth, and storage layer for SaaS products and AI applications — real-time, scalable, and open source.',
    headline: 'Scalable Backends Built on Supabase',
    subheadline: 'Supabase gives us PostgreSQL with real-time subscriptions, built-in auth, row-level security, and storage — everything a SaaS backend needs without managing infrastructure.',
    description: 'Supabase is an open-source Firebase alternative built on PostgreSQL. It provides a hosted Postgres database with real-time capabilities (live data via WebSocket), user authentication, file storage, and edge functions — all in one platform. We use Supabase for the backend of AI-powered SaaS products, internal tools, and applications that need reliable, scalable data storage with minimal infrastructure overhead.',
    useCases: [
      { title: 'SaaS application backend', desc: 'User accounts, subscription data, feature flags, and application data — all in a single Supabase project with row-level security for data isolation.' },
      { title: 'AI application data storage', desc: 'Store conversation history, user preferences, RAG pipeline data, and AI-generated content with pgvector for vector search.' },
      { title: 'Real-time collaboration features', desc: 'Supabase Realtime subscriptions enable live updates — users see changes from others instantly without polling.' },
      { title: 'Authentication and user management', desc: 'Email, password, OAuth (Google, GitHub, etc.), magic links, and enterprise SSO — Supabase auth handles all of it.' },
    ],
    outcomes: [
      { value: 'PostgreSQL', label: 'full power, managed' },
      { value: 'pgvector', label: 'built-in vector search' },
      { value: '99.9%', label: 'uptime SLA' },
    ],
    faq: [
      { q: 'Is Supabase suitable for production?', a: 'Yes — Supabase powers hundreds of production SaaS applications at scale. It is backed by serious infrastructure (AWS regions globally) and has a strong uptime track record.' },
      { q: 'Can we export our data if we want to move off Supabase?', a: 'Yes — Supabase is PostgreSQL, the most portable database format in the world. Your data is always yours and exportable at any time.' },
    ],
    related: ['nextjs', 'typescript', 'vercel-ai-sdk'],
  },
  {
    slug: 'twilio',
    name: 'Twilio',
    category: 'Communications Platform',
    tagline: 'SMS, voice, and WhatsApp integrations for AI-powered communication systems',
    metaDescription: 'TrueCodeAI integrates Twilio for AI applications that send SMS, make and receive calls, and communicate via WhatsApp — enabling real business communication workflows.',
    headline: 'AI Communication Systems Built on Twilio',
    subheadline: 'Twilio is the communications layer for AI systems that need to send SMS, make calls, or integrate with WhatsApp — reliable, global, and developer-friendly.',
    description: 'Twilio is the most widely-deployed cloud communications platform — providing programmable SMS, voice, WhatsApp, email, and video. We use Twilio as the communication layer for AI systems that need to interact with humans through real channels: AI phone agents, SMS follow-up automations, appointment reminders, and WhatsApp business integrations.',
    useCases: [
      { title: 'AI phone agent telephony', desc: 'Twilio provides the phone numbers, call routing, and SIP trunking that our AI phone agents use to receive and make calls.' },
      { title: 'SMS marketing and notifications', desc: 'AI-drafted SMS messages sent automatically based on customer actions, appointments, or sales triggers — with proper opt-in management.' },
      { title: 'WhatsApp Business integration', desc: 'AI-powered WhatsApp bots for customer support, appointment booking, and lead qualification — through Twilio\'s WhatsApp Business API.' },
      { title: 'Two-factor authentication', desc: 'Twilio Verify provides OTP SMS and phone verification for application authentication systems.' },
    ],
    outcomes: [
      { value: '180+', label: 'countries covered' },
      { value: '99.95%', label: 'message delivery rate' },
      { value: 'Sub-second', label: 'SMS delivery typical' },
    ],
    faq: [
      { q: 'Does Twilio handle WhatsApp compliance?', a: 'Twilio manages the WhatsApp Business API relationship with Meta — you build through Twilio\'s API without dealing directly with Meta\'s complex approval process.' },
      { q: 'Is Twilio expensive for high-volume SMS?', a: 'At scale, Twilio negotiates custom pricing. For most businesses (under 100K messages/month), the cost is under $100/month. Volume discounts kick in at higher tiers.' },
    ],
    related: ['vapi', 'elevenlabs', 'n8n'],
  },
  {
    slug: 'typescript',
    name: 'TypeScript',
    category: 'Programming Language',
    tagline: 'Typed JavaScript for production-grade, maintainable AI applications',
    metaDescription: 'TrueCodeAI writes all production JavaScript code in TypeScript — providing type safety, better tooling, and fewer production bugs for AI applications and web products.',
    headline: 'Every Product We Build is TypeScript-First',
    subheadline: 'TypeScript\'s static typing catches bugs at compile time, enables better tooling for AI codebases, and makes large codebases maintainable over time.',
    description: 'TypeScript is JavaScript with types — and it is now the standard for serious web and Node.js development. Every client project we build uses TypeScript throughout. The type system catches entire classes of bugs before code ships, enables precise autocomplete and refactoring tools, and makes the codebase understandable to any engineer picking it up for the first time. For AI applications in particular, TypeScript\'s ability to type LLM outputs and tool definitions is invaluable.',
    useCases: [
      { title: 'Type-safe AI integrations', desc: 'TypeScript types for LLM outputs, tool definitions, and API responses make AI integrations far more reliable — mismatches are caught at compile time, not in production.' },
      { title: 'Full-stack type sharing', desc: 'Share types between your Next.js frontend and Node.js backend — ensuring the client and server always agree on data shapes.' },
      { title: 'Large codebase maintainability', desc: 'As AI applications grow, TypeScript keeps the codebase understandable — every function signature is self-documenting.' },
      { title: 'Better AI-assisted development', desc: 'Claude Code and Cursor both produce better code in TypeScript — the type context helps the AI understand what is expected and generate correct implementations.' },
    ],
    outcomes: [
      { value: '40%', label: 'fewer production bugs' },
      { value: '3×', label: 'faster onboarding for new devs' },
      { value: '100%', label: 'of our client projects' },
    ],
    faq: [
      { q: 'Is TypeScript worth the overhead?', a: 'For any project lasting more than a few weeks — yes, unambiguously. The type errors TypeScript catches in development are exactly the bugs that cause production incidents. The overhead at the start pays back many times over.' },
      { q: 'Do you ever use plain JavaScript?', a: 'For scripts, quick automations, and infrastructure tooling, sometimes. For any client-facing product, always TypeScript.' },
    ],
    related: ['nextjs', 'supabase', 'vercel-ai-sdk'],
  },
];

export function getTechnologyBySlug(slug: string): Technology | undefined {
  return technologies.find((t) => t.slug === slug);
}

export function getTechnologiesByCategory(category: string): Technology[] {
  return technologies.filter((t) => t.category === category);
}
