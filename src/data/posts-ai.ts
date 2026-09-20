// "We build it, we teach it" series — one post per current AI trend, each aimed
// at a specific long-tail search term with low competition. Every post ends in
// a build-or-train CTA. Product facts (Claude Agent SDK, Managed Agents, MCP,
// tool runner, computer use) follow Anthropic's public docs as of Sep 2026.
import { unsplash, type Post } from './post-types';

const BUILD_OR_TRAIN = {
  title: 'Want it built — or want your team to build it?',
  body: 'We ship this for clients and we run hands-on workshops for engineering teams. Tell us which, and we reply within 24 hours.',
};

export const aiPosts: Post[] = [
  {
    slug: 'what-is-an-agent-harness',
    title: 'What Is an AI Agent Harness? Why Agents Fail Without One',
    description:
      'An agent harness is the loop, context management, tools and guardrails around the model. What it contains, why most agent failures live there, how we build one.',
    date: '2026-09-15',
    updated: '2026-09-19',
    cover: unsplash('photo-1518770660439-4636190af475'),
    coverAlt: 'Close-up of a circuit board representing the scaffolding around an AI model',
    tags: ['Agent harness', 'AI agents', 'Architecture'],
    kind: 'Guide',
    author: 'engineering',
    intro:
      'Everyone talks about the model. Almost nobody talks about the harness — the code that wraps the model, feeds it context, runs its tools and decides when to stop. In our experience that is where 80% of agent failures live. Here is what a harness actually is and what a good one contains.',
    cta: BUILD_OR_TRAIN,
    sections: [
      {
        id: 'definition',
        heading: 'The harness is everything except the model',
        blocks: [
          {
            type: 'p',
            text: 'Strip an AI agent down and you find two parts. The model, which reasons and picks the next action. And the harness: the loop that calls the model, executes the tool it asked for, appends the result, manages what stays in context, enforces permissions and decides when the task is done. The model is rented. The harness is what you own — and it is where quality is decided.',
          },
          {
            type: 'table',
            caption: 'What a production harness contains',
            headers: ['Layer', 'Job', 'Common failure if missing'],
            rows: [
              ['Agent loop', 'Call model → run tool → append result → repeat', 'Infinite loops, silent stops'],
              ['Tool plumbing', 'Schemas, execution, timeouts, error results', 'Agent hallucinates a tool that does not exist'],
              ['Context management', 'Compaction, clearing stale results, memory', 'Context overflow mid-task; forgotten instructions'],
              ['Permissions', 'Which actions run alone, which need approval', 'Agent emails a customer it should not have'],
              ['Observability', 'Traces, cost per task, failure taxonomy', 'You learn about failures from users'],
              ['Evals', 'Regression suite of real scenarios', 'Every prompt change is a gamble'],
            ],
          },
        ],
      },
      {
        id: 'options',
        heading: 'Build, borrow or rent the harness',
        blocks: [
          {
            type: 'p',
            text: 'In 2026 you have three realistic options, and the right one depends on how much of the loop you need to control.',
          },
          {
            type: 'ul',
            items: [
              'Write the loop yourself against the model API. Maximum control, most code to own. Right when your control flow is unusual or you cannot depend on a vendor helper.',
              'Use a vendor harness on your own infrastructure. Anthropic’s SDK tool runner drives the request-execute-loop cycle over tools you define; the Claude Agent SDK goes further and ships a full harness with built-in file, shell and search tools plus subagents and hooks. You still host and deploy.',
              'Rent the harness and the sandbox. Managed agents run the loop server-side in a per-session container, with persisted agent configs, scheduled runs and multi-agent sessions. Least code to own; least control over the runtime.',
            ],
          },
          {
            type: 'p',
            text: 'Our default recommendation: start with a vendor harness on your infrastructure, add your own evals and observability from week one, and only drop to a hand-written loop when you hit a real limitation. Teams that start by hand-rolling the loop spend their first month rebuilding what the SDK already does.',
          },
        ],
      },
      {
        id: 'mistakes',
        heading: 'The five harness mistakes we fix most often',
        blocks: [
          {
            type: 'ul',
            items: [
              'Splitting parallel tool results across messages, which quietly trains the model to stop calling tools in parallel.',
              'Dropping a failed tool call instead of returning an error result — the agent then believes the action succeeded.',
              'No stop condition beyond "the model said done". Add a step cap, a token budget and a wall-clock limit.',
              'Timestamps or request IDs at the top of the system prompt, which silently break prompt caching and double the bill.',
              'Approval gates implemented in the prompt ("ask before sending email") instead of in the harness, where they are enforceable.',
            ],
          },
        ],
      },
      {
        id: 'ours',
        heading: 'How we build one',
        blocks: [
          {
            type: 'p',
            text: 'A harness engagement with us is four to eight weeks: loop and tool layer in week one, permissions and observability in week two, then evals and hardening until the pass rate holds on real traffic. We also run a two-day harness workshop for teams who want to own it themselves — same material, your codebase.',
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Is an agent harness the same as an agent framework?',
        a: 'A framework is one way to get a harness. The harness is the thing itself — the loop, context management and guardrails — whether it comes from a framework, a vendor SDK, a managed service or your own code.',
      },
      {
        q: 'Do I need a harness for a simple chatbot?',
        a: 'No. A chatbot without tools is a single model call in a loop with the user. Harnesses matter the moment the model can take actions.',
      },
      {
        q: 'Can you improve an existing harness rather than rebuild it?',
        a: 'Usually, and it is cheaper. Most harness work is adding evals, observability and enforceable permissions to a loop that already exists.',
      },
    ],
    related: ['multi-agent-systems-for-business', 'ai-agent-evals-before-production', 'ai-agent-development-cost'],
  },

  {
    slug: 'claude-agent-sdk-development',
    title: 'Claude Agent SDK Development: What It Is & How We Use It',
    description:
      'What the Claude Agent SDK is (Claude Code as a library), what it gives you out of the box, when to use it over the plain API, and how we ship agents on it.',
    date: '2026-09-16',
    updated: '2026-09-19',
    cover: unsplash('photo-1555066931-4365d14bab8c'),
    coverAlt: 'Code on a monitor in a dark room',
    tags: ['Claude Agent SDK', 'Claude', 'AI agents'],
    kind: 'Guide',
    author: 'engineering',
    intro:
      'The Claude Agent SDK is the harness behind Claude Code, packaged as a library you can run on your own infrastructure. If you want a coding-style agent that can read files, run commands and search the web without writing the loop yourself, this is the shortest path. Here is what it is and how we use it for clients.',
    cta: BUILD_OR_TRAIN,
    sections: [
      {
        id: 'what',
        heading: 'What the Agent SDK gives you',
        blocks: [
          {
            type: 'p',
            text: 'The SDK ships as a Python and a TypeScript package. You give it a prompt and options; it drives the full agent loop with a set of built-in tools — file read, write and edit, shell, glob and grep, web search and fetch — plus MCP connections, subagents, hooks and a permission system. It is the same machinery that runs Claude Code in a terminal, minus the terminal.',
          },
          {
            type: 'table',
            caption: 'Agent SDK vs plain API tool use vs managed agents',
            headers: ['', 'Claude Agent SDK', 'API + tool runner', 'Managed agents'],
            rows: [
              ['Who writes the loop', 'SDK', 'SDK helper (tools you define)', 'Anthropic, server-side'],
              ['Built-in tools', 'Files, shell, search, web', 'None — yours only', 'Sandbox: bash, files, code exec'],
              ['Where it runs', 'Your infra', 'Your infra', 'Anthropic-hosted container'],
              ['Subagents', 'Built in', 'You build them', 'Multi-agent sessions'],
              ['Best for', 'Filesystem / coding / research agents', 'Custom business tools', 'Hosted, scheduled, long-running agents'],
            ],
          },
        ],
      },
      {
        id: 'when',
        heading: 'When we reach for it',
        blocks: [
          {
            type: 'ul',
            items: [
              'Internal engineering agents: codebase Q&A, migration bots, test writers, PR reviewers wired to your repos.',
              'Research and document agents that need to read a folder of files, search the web and write a report.',
              'Ops automation where the "tools" are really shell commands and files — log triage, config generation, data cleanup.',
              'Anything where you would otherwise script Claude Code in CI. The SDK is the supported way to do that.',
            ],
          },
          {
            type: 'p',
            text: 'When the tools are business APIs rather than files — CRM, payments, your product’s backend — we usually go to the plain API with the tool runner instead. It is thinner and you do not carry tools you will never call.',
          },
        ],
      },
      {
        id: 'howwe',
        heading: 'How we ship on it',
        blocks: [
          {
            type: 'ul',
            items: [
              'Week 1: define the job, the allowed tools and the permission policy. Most agents need far fewer tools than teams expect.',
              'Week 2: hooks for logging and approval, MCP servers for the systems the agent must touch, first eval set from real tasks.',
              'Weeks 3–4: subagents where the work fans out, cost tuning with effort levels, hardening against the failure cases the evals expose.',
              'Handover: your repo, your infra, a runbook and a training session for the engineers who will own it.',
            ],
          },
        ],
      },
      {
        id: 'training',
        heading: 'We also teach it',
        blocks: [
          {
            type: 'p',
            text: 'Our one-day Agent SDK workshop takes an engineering team from zero to a working agent on their own codebase: loop, tools, hooks, permissions, evals. Teams leave with a starter repo and the judgement to know when the SDK is the wrong tool. Ask for it through the form below.',
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Is the Claude Agent SDK the same as the Anthropic SDK?',
        a: 'No. The Anthropic SDK is the API client (messages, tools, batches, files). The Claude Agent SDK is a separate package that bundles the Claude Code harness and built-in tools. Both run on your infrastructure.',
      },
      {
        q: 'Can the SDK agent use my internal tools?',
        a: 'Yes — through MCP servers or custom tools registered alongside the built-ins. That is how we connect it to ticketing systems, databases and internal APIs.',
      },
      {
        q: 'Which model should it run on?',
        a: 'For agentic work we default to the current Opus-tier model with adaptive thinking and a high effort setting, and drop cheaper models in for subagents that only read and summarise.',
      },
    ],
    related: ['what-is-an-agent-harness', 'managed-agents-vs-self-hosted', 'mcp-server-development'],
  },

  {
    slug: 'multi-agent-systems-for-business',
    title: 'Multi-Agent Systems for Business: When You Need Them',
    description:
      'Orchestrator–worker multi-agent systems explained for business owners: what they are, when one agent is enough, what they cost, and how we build them.',
    date: '2026-09-16',
    updated: '2026-09-19',
    cover: unsplash('photo-1552664730-d307ca884978'),
    coverAlt: 'Team of people coordinating around a table, representing multiple agents working together',
    tags: ['Multi-agent', 'AI agents', 'Architecture'],
    kind: 'Guide',
    author: 'engineering',
    intro:
      '"Multi-agent" is the most over-sold phrase in AI right now. Most businesses do not need one, and the ones that do are usually told they need something far more complicated than the pattern that actually works. Here is the honest version.',
    cta: BUILD_OR_TRAIN,
    sections: [
      {
        id: 'when',
        heading: 'When one agent stops being enough',
        blocks: [
          {
            type: 'p',
            text: 'A single agent with a good harness handles more than people expect. It stops being enough in exactly three situations.',
          },
          {
            type: 'ul',
            items: [
              'The work fans out. "Research these forty suppliers" or "process each file in this folder" — one agent doing it serially fills its context with reading and gets slower and dumber as it goes.',
              'The steps need different skills or permissions. The agent that drafts the contract should not be the one with write access to the CRM.',
              'The task is longer than one context window. A multi-day project with dozens of sub-tasks needs a coordinator that keeps the plan and workers that do the pieces.',
            ],
          },
        ],
      },
      {
        id: 'pattern',
        heading: 'The pattern that works: orchestrator and workers',
        blocks: [
          {
            type: 'p',
            text: 'Nearly every successful multi-agent system we have shipped is the same shape. One orchestrator holds the plan, splits the task, delegates and merges. Workers each receive a narrow brief, a small tool set and return a short result. The orchestrator never reads raw data; the workers never see the whole plan.',
          },
          {
            type: 'table',
            caption: 'Orchestrator–worker roles',
            headers: ['Role', 'Model tier', 'Context', 'Tools'],
            rows: [
              ['Orchestrator', 'Most capable, high effort', 'Plan + worker summaries only', 'Delegate, merge, ask human'],
              ['Reader / researcher worker', 'Cheaper, low effort', 'One document or source', 'Read, search, summarise'],
              ['Actor worker', 'Capable, medium effort', 'One task brief', 'A few write actions, with approval'],
              ['Reviewer worker', 'Capable, high effort', 'One artefact + rubric', 'Grade, comment'],
            ],
          },
          {
            type: 'p',
            text: 'Tooling has caught up with the pattern. Vendor SDKs ship subagents natively, and managed agent platforms support multi-agent sessions where an agent delegates to copies of itself or to a cheaper worker agent by ID. You rarely need to build the delegation plumbing from scratch any more.',
          },
        ],
      },
      {
        id: 'cost',
        heading: 'What it costs and what it saves',
        blocks: [
          {
            type: 'p',
            text: 'A multi-agent build runs 1.5–2.5× the cost of a single-agent build on the same task, mostly in evals and observability — you now have to trace failures across hand-offs. Running cost is often lower than a single agent, because readers run on cheap models and the expensive orchestrator sees only summaries.',
          },
          {
            type: 'ul',
            items: [
              'Build: $40k – $150k depending on the number of worker types and the systems they touch.',
              'Run: typically 30–60% cheaper per task than one large agent doing everything, once tuned.',
              'Timeline: 8–14 weeks including two weeks of shadow mode.',
            ],
          },
        ],
      },
      {
        id: 'ours',
        heading: 'How we build and teach it',
        blocks: [
          {
            type: 'p',
            text: 'We start every multi-agent project by building the single-agent version first and measuring where it breaks. Then we split only along the measured seams. For teams who want to own it, our multi-agent workshop covers orchestration patterns, cross-agent tracing and the eval design that makes hand-offs testable.',
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Do agents talk to each other freely?',
        a: 'Not in systems that work. Free-form agent-to-agent chat is expensive and hard to debug. Use structured delegation — a brief goes down, a result comes back — with the orchestrator as the only coordinator.',
      },
      {
        q: 'Can workers run in parallel?',
        a: 'Yes, and that is the main speed win. Ten reader workers on ten sources finish in the time one would take.',
      },
      {
        q: 'What is the biggest risk?',
        a: 'Losing the thread across hand-offs. Every brief and result must be logged, and the eval set must include multi-step scenarios, not just single-worker tasks.',
      },
    ],
    related: ['what-is-an-agent-harness', 'claude-agent-sdk-development', 'ai-agent-evals-before-production'],
  },

  {
    slug: 'mcp-server-development',
    title: 'MCP Server Development: Make Your Product Agent-Ready',
    description:
      'Why building an MCP server for your product matters in 2026, what a good one exposes, how long it takes, and how we build and secure them.',
    date: '2026-09-17',
    updated: '2026-09-19',
    cover: unsplash('photo-1558494949-ef010cbdcc31'),
    coverAlt: 'Network cables plugged into a switch, representing integrations',
    tags: ['MCP', 'Integrations', 'AI agents'],
    kind: 'Guide',
    author: 'engineering',
    intro:
      'The Model Context Protocol is becoming the USB port for AI: one standard way for agents to discover and call your product’s capabilities. If your customers use AI assistants and your product has no MCP server, you are invisible to their agents. Here is what building one involves.',
    cta: BUILD_OR_TRAIN,
    sections: [
      {
        id: 'why',
        heading: 'Why an MCP server, and why now',
        blocks: [
          {
            type: 'p',
            text: 'An MCP server exposes your product as tools an agent can call, with typed inputs and descriptions the model can read. Coding assistants, desktop AI apps, agent SDKs and hosted agent platforms all speak it. Ship one and every one of those surfaces can act on your product without a custom integration.',
          },
          {
            type: 'ul',
            items: [
              'Distribution: your product becomes usable from inside the tools your customers already live in.',
              'Control: you define exactly which actions are exposed, with what permissions, instead of agents scraping your UI.',
              'Internal leverage: the same server lets your own agents act on your own systems.',
            ],
          },
        ],
      },
      {
        id: 'good',
        heading: 'What a good MCP server exposes',
        blocks: [
          {
            type: 'table',
            caption: 'Designing the tool surface',
            headers: ['Do', 'Don’t'],
            rows: [
              ['8–20 task-shaped tools ("create_invoice")', 'A tool per REST endpoint'],
              ['Descriptions written for a model, with examples', 'Descriptions copied from API docs'],
              ['Strict input schemas', 'Free-form JSON blobs'],
              ['Read tools separate from write tools', 'One "do_anything" tool'],
              ['Short, structured results', 'Full database rows'],
              ['Scoped auth per connection', 'One admin token for everyone'],
            ],
          },
          {
            type: 'p',
            text: 'The biggest quality lever is the descriptions. Agents choose tools by reading them; a vague description means the wrong tool gets called, and every wrong call costs your customer money.',
          },
        ],
      },
      {
        id: 'security',
        heading: 'Security is the whole job',
        blocks: [
          {
            type: 'p',
            text: 'An MCP server is an API that untrusted model output will call. Treat every input as hostile, scope tokens to the minimum, rate-limit per connection, log every call, and never expose a destructive action without an explicit confirmation step in the client. We also test each server against prompt-injection scenarios before release.',
          },
        ],
      },
      {
        id: 'ours',
        heading: 'Timeline and how we work',
        blocks: [
          {
            type: 'p',
            text: 'A first production MCP server for a SaaS product is typically two to four weeks: tool design and descriptions in week one, implementation and auth in week two, then an eval pass where an agent runs real customer tasks against it. We hand over the server, a test harness and a listing-ready README. For teams building their own, we run a one-day MCP design workshop.',
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Does an MCP server replace my REST API?',
        a: 'No. It sits on top of it, shaped for agents rather than developers. Most of the work is deciding which capabilities to expose and describing them well.',
      },
      {
        q: 'Local or remote server?',
        a: 'Remote (HTTP) for anything your customers use; it lets you manage auth, versioning and rate limits centrally. Local servers suit developer tooling.',
      },
      {
        q: 'How do we get listed where agents find servers?',
        a: 'Registries and app directories vary by platform and change often. We prepare the metadata and documentation each one needs as part of the handover.',
      },
    ],
    related: ['claude-agent-sdk-development', 'what-is-an-agent-harness', 'ai-agent-development-cost'],
  },

  {
    slug: 'managed-agents-vs-self-hosted',
    title: 'Managed Agents vs Self-Hosted Agent Loops: How to Choose',
    description:
      'Server-managed agents (hosted loop and sandbox) vs running the loop on your own infrastructure — control, cost, compliance and speed compared.',
    date: '2026-09-17',
    updated: '2026-09-19',
    cover: unsplash('photo-1451187580459-43490279c0fa'),
    coverAlt: 'Earth from orbit with city lights, representing cloud infrastructure',
    tags: ['Managed agents', 'Infrastructure', 'AI agents'],
    kind: 'Comparison',
    author: 'engineering',
    intro:
      'In 2026 you can rent the entire agent runtime — the loop, the container it acts in, scheduling, even a grader that keeps the agent working until the output meets your rubric. Or you can host all of it yourself. The choice is less about capability than about who you want holding the keys.',
    cta: BUILD_OR_TRAIN,
    sections: [
      {
        id: 'compare',
        heading: 'Side by side',
        blocks: [
          {
            type: 'table',
            caption: 'Managed agents vs self-hosted loop',
            headers: ['Dimension', 'Managed agents', 'Self-hosted (SDK on your infra)'],
            rows: [
              ['Loop and sandbox', 'Vendor runs both', 'You run both'],
              ['Time to first working agent', 'Days', 'Weeks'],
              ['Scheduling / cron', 'Built in', 'You build it'],
              ['Persisted, versioned agent configs', 'Built in', 'Your repo and CI'],
              ['Outcome grading against a rubric', 'Built in', 'You build the grader'],
              ['Data residency', 'Vendor region options', 'Anywhere you choose'],
              ['Custom runtime / private network', 'Limited', 'Unlimited'],
              ['Cost model', 'Session-based plus tokens', 'Tokens plus your compute and engineers'],
            ],
          },
        ],
      },
      {
        id: 'managed',
        heading: 'Choose managed when',
        blocks: [
          {
            type: 'ul',
            items: [
              'You want an agent that runs on a schedule — nightly reports, weekly reconciliations — without maintaining a scheduler.',
              'The task is long-running and file-heavy, and you would rather not operate containers.',
              'You need "work until it is right" behaviour and want a grader you did not have to write.',
              'Your team is small and speed to production matters more than runtime control.',
            ],
          },
        ],
      },
      {
        id: 'self',
        heading: 'Choose self-hosted when',
        blocks: [
          {
            type: 'ul',
            items: [
              'The agent must reach systems inside a private network with no public route.',
              'Compliance dictates where data and compute live, down to the rack.',
              'You need a custom tool runtime — GPUs, proprietary binaries, unusual languages.',
              'You already run agent infrastructure and the marginal agent is cheap for you.',
            ],
          },
          {
            type: 'p',
            text: 'A common middle path: managed for the loop, with sensitive actions implemented as custom tools whose execution stays on your side. Credentials never enter the sandbox; the managed runtime only sees results.',
          },
        ],
      },
      {
        id: 'ours',
        heading: 'What we recommend',
        blocks: [
          {
            type: 'p',
            text: 'For most businesses shipping their first serious agent: managed. You will learn what the agent needs to do in weeks instead of months, and the config is portable enough to move later. We build on both, migrate between them, and teach teams the trade-offs in a half-day session before they commit. Describe the agent and its data constraints below and we will tell you which side we would put it on.',
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Is a managed agent locked in?',
        a: 'The agent definition — system prompt, tools, model — is portable. The scheduling, sandbox and grading features are what you would need to rebuild if you moved.',
      },
      {
        q: 'Can a managed agent call my internal APIs?',
        a: 'Yes, through custom tools where the execution happens on your side, or through MCP servers you expose. Secrets can be held in a vault and substituted at the edge rather than placed in the sandbox.',
      },
      {
        q: 'Which is cheaper?',
        a: 'For a handful of agents, managed — the engineering time saved dominates. At large scale with existing infrastructure, self-hosted can win on unit cost.',
      },
    ],
    related: ['claude-agent-sdk-development', 'what-is-an-agent-harness', 'ai-agent-development-cost'],
  },

  {
    slug: 'ai-agent-evals-before-production',
    title: 'AI Agent Evals: How We Test an Agent Before Launch',
    description:
      'How to evaluate an AI agent before it touches customers: building the scenario set, choosing graders, setting a pass bar, and running evals on every change.',
    date: '2026-09-18',
    updated: '2026-09-19',
    cover: unsplash('photo-1516321318423-f06f85e504b3'),
    coverAlt: 'Person reviewing charts on a laptop, representing evaluation results',
    tags: ['Evals', 'AI agents', 'Quality'],
    kind: 'Guide',
    author: 'engineering',
    intro:
      'Ask a vendor how they know their agent works and most will show you a demo. A demo is one scenario, chosen by the person who built it. An eval is two hundred scenarios, chosen from what your users actually do, graded automatically, run on every change. It is the difference between an agent you hope works and one you know works.',
    cta: {
      title: 'Want your agent evaluated before it ships?',
      body: 'We build eval sets for agents we did not write, and we train teams to maintain them. Reply within 24 hours.',
    },
    sections: [
      {
        id: 'set',
        heading: 'Build the scenario set from reality',
        blocks: [
          {
            type: 'p',
            text: 'The eval set is the product. Source it from real transcripts, support tickets and the tasks people actually attempt — not from what the team imagines. Aim for 150–300 scenarios on a first pass, weighted toward the cases where a mistake is expensive.',
          },
          {
            type: 'ul',
            items: [
              'Happy paths: the ten most common tasks, several phrasings each.',
              'Edge cases: missing information, contradictory instructions, out-of-scope requests.',
              'Adversarial: prompt injection inside a document or tool result, attempts to extract secrets.',
              'Multi-step: tasks that need three or more tool calls in the right order.',
            ],
          },
        ],
      },
      {
        id: 'graders',
        heading: 'Choose the grader per scenario',
        blocks: [
          {
            type: 'table',
            caption: 'Grading methods',
            headers: ['Method', 'Use for', 'Cost', 'Reliability'],
            rows: [
              ['Exact / structured match', 'Tool called with right arguments, correct final state', 'Free', 'Highest'],
              ['Rubric via a model', 'Tone, completeness, correctness of prose', 'Cents per case', 'High if rubric is concrete'],
              ['Pairwise comparison', 'Choosing between two agent versions', 'Cents per case', 'Good for relative calls'],
              ['Human review', 'Sampling model grades; ambiguous cases', 'Expensive', 'Ground truth'],
            ],
          },
          {
            type: 'p',
            text: 'Wherever a tool call or database state can be checked, check it directly. Save model graders for judgement calls, and audit a sample of their grades by hand each week.',
          },
        ],
      },
      {
        id: 'bar',
        heading: 'Set the bar by cost of error',
        blocks: [
          {
            type: 'p',
            text: 'A 92% pass rate is excellent for an internal research agent and unacceptable for one that issues refunds. Set the bar per scenario class, gate the risky classes behind human approval until they pass, and treat every regression as a blocking bug. Keep a held-out set the team never tunes against, so you can trust the number.',
          },
        ],
      },
      {
        id: 'ours',
        heading: 'How we run it',
        blocks: [
          {
            type: 'p',
            text: 'Every agent we ship carries its eval suite in the repo, running in CI. We build suites for agents other teams wrote, and we teach the method in a one-day workshop so your engineers can keep it alive as the model, the tools and the business change.',
          },
        ],
      },
    ],
    faq: [
      {
        q: 'How many scenarios are enough?',
        a: 'Enough that the pass rate stops moving when you add more — usually 150–300 for a focused agent. Breadth across failure types matters more than raw count.',
      },
      {
        q: 'How much does an eval suite cost to build?',
        a: 'Typically 15–25% of the agent build, or $8k–$30k standalone for an existing agent. Running it costs cents to a few dollars per full pass.',
      },
      {
        q: 'Do evals go stale?',
        a: 'Yes. Models change, tools change, users change. Budget a few engineer-hours a month to add fresh scenarios from production and prune obsolete ones.',
      },
    ],
    related: ['what-is-an-agent-harness', 'multi-agent-systems-for-business', 'custom-ml-model-vs-llm-api'],
  },

  {
    slug: 'whatsapp-ai-agent-for-business-india',
    title: 'WhatsApp AI Agent for Indian Businesses: Cost & How It Works',
    description:
      'What a WhatsApp AI agent does for an Indian business — leads, bookings, Hindi and English support — what it costs to build and run, and how we ship it fast.',
    date: '2026-09-18',
    updated: '2026-09-19',
    cover: unsplash('photo-1611746872915-64382b5c76da'),
    coverAlt: 'Phone showing a messaging app conversation',
    tags: ['WhatsApp', 'AI agents', 'India'],
    kind: 'Guide',
    author: 'engineering',
    intro:
      'For most Indian businesses WhatsApp is the front door — leads, orders, complaints, all land there, and most go unanswered after hours. A WhatsApp AI agent answers in seconds, in the customer’s language, and hands off to a human the moment it should. Here is what one actually does and costs.',
    cta: {
      title: 'Want a WhatsApp agent on your number?',
      body: 'Three weeks from brief to live, on the official WhatsApp Business API. Tell us your top five message types.',
    },
    sections: [
      {
        id: 'does',
        heading: 'What it does on day one',
        blocks: [
          {
            type: 'ul',
            items: [
              'Qualifies leads: asks the questions your sales team would, tags hot ones, and pings a human on WhatsApp or CRM immediately.',
              'Takes bookings and orders: checks availability in your system, confirms, sends reminders, handles reschedules.',
              'Answers support questions from your own documents, and escalates with a full summary when it cannot.',
              'Switches between Hindi, English, Hinglish and regional languages mid-conversation without being told.',
              'Sends catalogue items, payment links and location pins natively — not as pasted text.',
            ],
          },
        ],
      },
      {
        id: 'cost',
        heading: 'What it costs',
        blocks: [
          {
            type: 'table',
            caption: 'WhatsApp AI agent, 2026',
            headers: ['Tier', 'Scope', 'Build', 'Monthly run'],
            rows: [
              ['FAQ + lead capture', 'Answers from your docs, collects lead details', '$4k – $9k', '$80 – $250 + WhatsApp fees'],
              ['Bookings / orders', 'Integrated with your calendar, POS or store', '$9k – $20k', '$150 – $500 + WhatsApp fees'],
              ['Full support agent', 'Order status, returns, tickets, CRM sync, human hand-off', '$20k – $45k', '$300 – $1,200 + WhatsApp fees'],
            ],
          },
          {
            type: 'p',
            text: 'WhatsApp’s own per-conversation charges apply on top and depend on category and country; for an Indian business they are usually the smaller part of the monthly cost. Model tokens for a few thousand conversations a month are typically under $100.',
          },
        ],
      },
      {
        id: 'right',
        heading: 'Doing it properly',
        blocks: [
          {
            type: 'ul',
            items: [
              'Official WhatsApp Business API only. Unofficial gateways get numbers banned, usually at the worst moment.',
              'Opt-in and template compliance handled in the build, not bolted on after a rejection.',
              'Human hand-off with context. The agent passes a two-line summary and the full thread — the customer never repeats themselves.',
              'Evals in Hinglish and regional languages, not just English. This is where most bots quietly fail.',
              'A weekly report of what people asked that the agent could not answer — your product roadmap, for free.',
            ],
          },
        ],
      },
      {
        id: 'ours',
        heading: 'How fast we ship it',
        blocks: [
          {
            type: 'p',
            text: 'Three weeks for the first two tiers: week one on message types, tone and integrations; week two building and testing in shadow mode on your real traffic; week three live with a human watching the hand-offs. We are in Nashik, we build in your time zone, and we can start from your existing number.',
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Can it use my existing WhatsApp number?',
        a: 'Yes, if it is migrated to the WhatsApp Business API. We handle the migration; the number and its history stay yours.',
      },
      {
        q: 'Will it answer wrongly and embarrass us?',
        a: 'It answers only from your documents and systems and says "let me connect you to a person" when unsure. We measure that behaviour in evals before launch and keep a human on watch for the first weeks.',
      },
      {
        q: 'Does it work with my CRM or POS?',
        a: 'Most common Indian and global systems, yes. Anything with an API can be connected; we scope integrations in the first week.',
      },
    ],
    related: ['voice-agent-vs-ivr', 'ai-voice-agent-for-clinics', 'ai-agent-development-cost'],
  },

  {
    slug: 'ai-voice-agent-for-clinics',
    title: 'AI Voice Agent for Clinics: Bookings, Reminders, No-Shows',
    description:
      'How an AI voice agent runs a clinic’s phone line — bookings, reminders, rescheduling, after-hours — what it costs, and how we deploy it in four weeks.',
    date: '2026-09-19',
    updated: '2026-09-19',
    cover: unsplash('photo-1519494026892-80bbd2d6fd0d'),
    coverAlt: 'Clinic reception desk with a phone',
    tags: ['Voice agents', 'Healthcare', 'Automation'],
    kind: 'Guide',
    author: 'engineering',
    intro:
      'A clinic’s front desk misses a third of its calls at peak hours and all of them after closing. Each missed call is a patient who books elsewhere or does not book at all. A voice agent answers every call, books into the real calendar, and cuts no-shows with reminders that actually get confirmed.',
    cta: {
      title: 'Want your clinic’s phone answered 24/7?',
      body: 'We deploy voice agents for clinics in four weeks, integrated with your practice software. Tell us your daily call volume.',
    },
    sections: [
      {
        id: 'does',
        heading: 'What the agent handles',
        blocks: [
          {
            type: 'ul',
            items: [
              'New appointment booking with real-time availability from your practice management system.',
              'Rescheduling and cancellations, with automatic waitlist backfill.',
              'Reminder calls and messages 48 and 24 hours out, with one-tap confirmation.',
              'Common questions: hours, location, insurance accepted, what to bring, prep instructions.',
              'Immediate warm transfer to a human for anything clinical, urgent or emotional.',
            ],
          },
        ],
      },
      {
        id: 'numbers',
        heading: 'The numbers that matter',
        blocks: [
          {
            type: 'table',
            caption: 'Typical impact for a 2–6 practitioner clinic',
            headers: ['Metric', 'Before', 'With voice agent'],
            rows: [
              ['Calls answered', '60 – 75%', '99%+'],
              ['After-hours bookings', '0', '15 – 25% of new bookings'],
              ['No-show rate', '12 – 20%', '6 – 10%'],
              ['Front-desk time on phone', '3 – 5 hours/day', 'Under 1 hour/day'],
              ['Cost', 'Staff time', '$8k – $18k build + $300 – $900/month'],
            ],
          },
          {
            type: 'p',
            text: 'Ranges reflect our deployments and published industry benchmarks; your clinic’s numbers depend on call volume and current no-show rate. We measure your baseline in week one so the before-and-after is real.',
          },
        ],
      },
      {
        id: 'safe',
        heading: 'Doing it safely in healthcare',
        blocks: [
          {
            type: 'ul',
            items: [
              'The agent never gives medical advice. Clinical questions are routed to staff, always.',
              'Disclosure at the start of every call that the caller is speaking to an AI assistant.',
              'Patient data stays in your practice system; the agent reads and writes through scoped, audited access.',
              'Regional data-residency and consent requirements handled in the build.',
              'Sub-second response latency, because a slow voice agent feels broken and callers hang up.',
            ],
          },
        ],
      },
      {
        id: 'ours',
        heading: 'How we deploy it',
        blocks: [
          {
            type: 'p',
            text: 'Four weeks: call-reason analysis and script design, integration with your practice software, two weeks of shadow mode where the agent proposes and staff approve, then live on overflow and after-hours first, full line once the numbers hold. Staff get a one-hour training and a dashboard they actually use.',
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Which practice management systems do you integrate with?',
        a: 'Any with an API or calendar sync; we scope it in week one. Where there is no API we integrate through the calendar layer.',
      },
      {
        q: 'What happens if the agent is unsure?',
        a: 'It says so and transfers with a spoken summary, or takes a message and creates a callback task. It never guesses on anything clinical.',
      },
      {
        q: 'Can it handle multiple languages?',
        a: 'Yes — English, Hindi and most major languages, switching mid-call as the caller does.',
      },
    ],
    related: ['voice-agent-vs-ivr', 'whatsapp-ai-agent-for-business-india', 'ai-agent-development-cost'],
  },

  {
    slug: 'computer-use-agents-back-office-automation',
    title: 'Computer-Use Agents for Back-Office Automation: A Guide',
    description:
      'Computer-use agents operate software through the screen like a person. Where they beat RPA and APIs, where they fail, what they cost, how we deploy them.',
    date: '2026-09-19',
    updated: '2026-09-19',
    cover: unsplash('photo-1587825140708-dfaf72ae4b04'),
    coverAlt: 'Desktop monitor showing a spreadsheet and business software',
    tags: ['Computer use', 'Automation', 'AI agents'],
    kind: 'Guide',
    author: 'engineering',
    intro:
      'Half of every back office is people copying data between systems that do not talk to each other. Computer-use agents look at the screen, move the mouse and type — so they can operate the legacy portal with no API, the vendor site that changes weekly, the desktop app from 2009. Here is where they earn their keep and where they do not.',
    cta: {
      title: 'Have a process nobody can automate?',
      body: 'Send us a two-minute screen recording of it. We will tell you within 48 hours whether a computer-use agent, an integration or RPA is the right answer.',
    },
    sections: [
      {
        id: 'vs',
        heading: 'Computer use vs RPA vs API integration',
        blocks: [
          {
            type: 'table',
            caption: 'Choosing the automation approach',
            headers: ['Approach', 'Works when', 'Breaks when', 'Cost per task'],
            rows: [
              ['API integration', 'Both systems have APIs', 'No API, or vendor blocks it', 'Lowest'],
              ['Classic RPA', 'UI is stable and steps are fixed', 'UI changes; unexpected pop-ups', 'Low, high maintenance'],
              ['Computer-use agent', 'No API; UI varies; judgement needed', 'Sub-second latency needed; very high volume', 'Higher per task, low maintenance'],
            ],
          },
          {
            type: 'p',
            text: 'The rule we use: API if you can, computer use if you must, RPA only for the fixed, high-volume middle. Computer-use agents recover from the changes that kill RPA bots because they read the screen rather than a recorded coordinate.',
          },
        ],
      },
      {
        id: 'fits',
        heading: 'Processes that fit',
        blocks: [
          {
            type: 'ul',
            items: [
              'Invoice and PO entry into ERP systems with no usable API.',
              'Portal work: uploading compliance documents, downloading statements, checking claim status across insurer or government sites.',
              'Data reconciliation between a modern SaaS tool and a legacy desktop application.',
              'Onboarding and offboarding across a dozen admin panels.',
              'Anything a human does 50–500 times a month with a screen, a checklist and a little judgement.',
            ],
          },
        ],
      },
      {
        id: 'safe',
        heading: 'Running them safely',
        blocks: [
          {
            type: 'ul',
            items: [
              'Dedicated virtual desktops with only the accounts and permissions the task needs.',
              'Approval gates before any irreversible action — submit, pay, delete — until the eval pass rate earns autonomy.',
              'Screen recordings and step logs for every run, so audit and debugging are trivial.',
              'Hard limits on steps, time and spend per task.',
              'A human-review queue for the runs the agent flags as uncertain.',
            ],
          },
        ],
      },
      {
        id: 'ours',
        heading: 'Cost and how we deploy',
        blocks: [
          {
            type: 'p',
            text: 'A first computer-use automation is usually $12k–$35k to build over three to six weeks, and runs at a few cents to a few dollars per task depending on length. We start with one process, run it in shadow mode against your team’s results, and expand only when the numbers hold. We also train ops teams to define and monitor these agents themselves.',
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Is a computer-use agent reliable enough for finance work?',
        a: 'With approval gates and evals, yes for entry and reconciliation. We keep a human on the final submit step for anything that moves money until the error rate is measured and acceptable.',
      },
      {
        q: 'How fast is it?',
        a: 'Slower than a human on a single simple task, faster on anything with lookups, and it runs 24/7 without breaks. Think throughput, not speed.',
      },
      {
        q: 'Does it need access to our systems?',
        a: 'It needs a login like a staff member would, scoped as tightly as possible. It runs on isolated desktops we or you control, never on an employee’s machine.',
      },
    ],
    related: ['what-is-an-agent-harness', 'managed-agents-vs-self-hosted', 'ai-agent-development-cost'],
  },

  {
    slug: 'claude-code-for-engineering-teams',
    title: 'Claude Code for Engineering Teams: Rollout & Guardrails',
    description:
      'How to roll out Claude Code across an engineering team without chaos: repo conventions, permissions, hooks, shared skills, metrics — and the training we run.',
    date: '2026-09-19',
    updated: '2026-09-19',
    cover: unsplash('photo-1461749280684-dccba630e2f6'),
    coverAlt: 'Developer working at a terminal with code on screen',
    tags: ['Claude Code', 'Developer productivity', 'Training'],
    kind: 'Guide',
    author: 'engineering',
    intro:
      'Giving every engineer an AI coding agent is easy. Getting a consistent, safe, measurable productivity gain out of it is not — and the gap between teams that get 10% and teams that get 40% is almost entirely process. This is the rollout we run for clients, and the training that goes with it.',
    cta: {
      title: 'Want your team shipping faster with Claude Code — safely?',
      body: 'We run a two-day rollout and training programme for engineering teams of 5 to 200. Tell us your team size and stack.',
    },
    sections: [
      {
        id: 'foundation',
        heading: 'Week one: the repo tells the agent how to behave',
        blocks: [
          {
            type: 'ul',
            items: [
              'A project instructions file that states the stack, conventions, test commands and what the agent must never touch. Short, specific, versioned.',
              'Permission rules that allow the routine (running tests, reading files) and gate the risky (pushing, deleting, touching secrets).',
              'Hooks that run formatters and linters on every edit, and block commits that fail them.',
              'Shared skills for the workflows the team repeats: releasing, writing a migration, adding an endpoint.',
            ],
          },
        ],
      },
      {
        id: 'guardrails',
        heading: 'Guardrails that actually hold',
        blocks: [
          {
            type: 'table',
            caption: 'Rollout guardrails',
            headers: ['Risk', 'Control'],
            rows: [
              ['Secrets in prompts or logs', 'Secret scanning hook; environment-injected credentials only'],
              ['Agent edits outside scope', 'Worktree isolation per task; protected paths in permissions'],
              ['Unreviewed code merged', 'Agent-authored PRs labelled and require human review'],
              ['Runaway cost', 'Per-seat budgets and effort defaults; weekly spend report'],
              ['Inconsistent quality', 'Shared instructions file and skills, reviewed monthly'],
            ],
          },
        ],
      },
      {
        id: 'measure',
        heading: 'Measure it or it did not happen',
        blocks: [
          {
            type: 'p',
            text: 'Track cycle time, PR throughput, review turnaround and escaped defects for four weeks before rollout and eight after. Teams that measure find the workflows where the agent helps most and the ones where it slows review down — and adjust. Teams that do not measure argue about anecdotes.',
          },
        ],
      },
      {
        id: 'training',
        heading: 'The training we run',
        blocks: [
          {
            type: 'p',
            text: 'Two days, on your codebase. Day one: mental model, instructions and permissions, test-driven prompting, when to plan versus when to just ask. Day two: hooks, skills, subagents, headless runs in CI and the Agent SDK for teams who want to build their own agents. Engineers leave with a configured repo and a set of habits, not a slide deck.',
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Will the agent leak our code?',
        a: 'Code sent to the model is governed by the vendor’s data terms; enterprise plans offer no-training guarantees and data controls. We configure the deployment to your policy and audit what leaves the machine.',
      },
      {
        q: 'How long until the team is productive?',
        a: 'Individual engineers are useful in a day. Consistent team-wide gains take four to six weeks of shared conventions, measured and adjusted.',
      },
      {
        q: 'Can you do this remotely?',
        a: 'Yes. Most of our rollouts are remote, in your working hours, with a shared channel for the six weeks after.',
      },
    ],
    related: ['claude-agent-sdk-development', 'what-is-an-agent-harness', 'how-to-choose-software-development-company-india'],
  },
];
