// Industry cluster — "AI for <vertical>" posts. Each maps a vertical's real workflows to
// agents/automation we build, with honest limits. Links out to the matching service posts.
import { unsplash, type Block, type Post, type Section } from './post-types';

const P = (text: string): Block => ({ type: 'p', text });
const UL = (...items: string[]): Block => ({ type: 'ul', items });
const OL = (...items: string[]): Block => ({ type: 'ol', items });
const T = (caption: string, headers: string[], rows: string[][]): Block => ({ type: 'table', caption, headers, rows });
const S = (id: string, heading: string, ...blocks: Block[]): Section => ({ id, heading, blocks });
const D = '2026-09-19';

export const industryPosts: Post[] = [
  {
    slug: 'ai-for-real-estate-agencies',
    title: 'AI Agents for Real Estate: Leads, Visits, Follow-Ups',
    description:
      'Where AI agents pay off for real estate agencies and developers: instant lead response, site-visit booking, follow-ups and listing Q&A — and where humans stay.',
    date: D,
    updated: D,
    cover: unsplash('photo-1560518883-ce09059eeffa'),
    coverAlt: 'Model house with a set of keys on a table',
    tags: ['Real estate', 'AI agents', 'Sales'],
    kind: 'Guide',
    author: 'team',
    intro:
      'Real estate runs on speed to lead. A buyer who enquires on a portal at 10pm and hears back at 11am has already spoken to three other agents. That gap is exactly what an AI agent closes.',
    sections: [
      S(
        'where',
        'Where agents earn their keep',
        T(
          'AI use cases for real estate, by payoff',
          ['Use case', 'What the agent does', 'Payoff'],
          [
            ['Instant lead response', 'Replies on WhatsApp or call within a minute, asks budget, location, timeline', 'More leads reach a conversation'],
            ['Site-visit booking', 'Offers slots from the sales team calendar, sends reminders', 'Fewer no-shows'],
            ['Listing Q&A', 'Answers carpet area, amenities, possession date from your inventory', 'Sales team talks only to qualified buyers'],
            ['Nurture', 'Sends new matching listings, price updates, follow-ups', 'Old leads convert later'],
          ],
        ),
      ),
      S(
        'flow',
        'A typical lead flow',
        OL(
          'Lead arrives from a portal, ad or website form and lands in the CRM.',
          'The agent messages the buyer within a minute, in their language.',
          'It qualifies: budget, preferred localities, configuration, purchase timeline, loan need.',
          'Hot leads get a site-visit slot and are handed to a named salesperson with a summary.',
          'Cold leads enter a nurture sequence with matching listings.',
        ),
      ),
      S(
        'limits',
        'Where humans must stay',
        P('Negotiation, price commitments and anything legal — agreements, RERA disclosures, possession guarantees — stay with your people. The agent should never promise a price or a date it cannot verify from your inventory system. We build that rule into the agent’s tools, not just its instructions.'),
      ),
      S(
        'cost',
        'What it costs',
        P('A WhatsApp lead agent with CRM sync typically sits in our ₹8L – ₹17L tier; adding a voice line for call-backs puts it in the $12k–$25k sales-line range. Most agencies measure payback in reduced lead leakage within the first quarter.'),
      ),
    ],
    faq: [
      { q: 'Will buyers mind talking to an AI?', a: 'They mind slow answers more. We disclose that it is an assistant and make reaching a person one message away.' },
      { q: 'Does it work with our CRM?', a: 'Most real estate CRMs have APIs. If yours does not, we sync via exports or a middleware layer.' },
      { q: 'Can it handle Hindi and Marathi?', a: 'Yes — multilingual handling is standard in our builds for Indian markets.' },
    ],
    related: ['whatsapp-ai-agent-for-business-india', 'ai-agent-crm-integration', 'multilingual-ai-agents-for-india'],
  },
  {
    slug: 'ai-for-restaurants',
    title: 'AI for Restaurants: Orders, Reservations, Reviews',
    description:
      'Practical AI for restaurants and cloud kitchens: phone and WhatsApp reservations, order taking, review replies and demand forecasting for prep.',
    date: D,
    updated: D,
    cover: unsplash('photo-1517248135467-4c7edcad34c4'),
    coverAlt: 'Empty restaurant dining room with warm lighting',
    tags: ['Restaurants', 'Automation', 'Voice agents'],
    kind: 'Guide',
    author: 'team',
    intro:
      'Restaurants lose bookings every Friday night because nobody can pick up the phone mid-service. AI does not cook, but it can answer that phone, and a few other things that quietly cost money.',
    sections: [
      S(
        'uses',
        'Four uses that pay back',
        OL(
          'Reservations by phone and WhatsApp: the agent checks table availability and books, even during the rush.',
          'Order taking for delivery and pickup: structured orders straight into the POS, with upsells the staff forget.',
          'Review replies: drafts responses to every review for a manager to approve in seconds.',
          'Prep forecasting: predicts covers and item demand from history, weather and events to cut waste.',
        ),
      ),
      S(
        'phone',
        'The phone problem',
        P('Between 7pm and 10pm, most restaurants miss a meaningful share of calls. Each missed call is a table or an order that went elsewhere. A voice agent answers every call, books into your reservation system, and passes anything unusual — large parties, complaints, allergies it cannot confirm — to a manager.'),
      ),
      S(
        'forecast',
        'Forecasting to cut waste',
        P('With a year or more of POS data, a demand model can forecast item-level sales per day part. Kitchens use it to set prep quantities, and the waste reduction is usually visible within a month. This is a small custom ML project, not an LLM feature.'),
      ),
      S(
        'start',
        'Where to start',
        P('Start with reservations if you take bookings, or order taking if you run delivery. Both have clear success metrics — calls answered, bookings made, average order value — and a voice booking line sits in our $8k–$18k tier.'),
      ),
    ],
    faq: [
      { q: 'Does it integrate with our POS?', a: 'Most modern POS and reservation systems have APIs. We check yours in discovery.' },
      { q: 'What about allergies?', a: 'The agent never confirms allergen safety itself. It records the requirement and routes the question to staff.' },
      { q: 'Is it worth it for one outlet?', a: 'For a busy single outlet, reservations alone can justify it. For small, quiet outlets, a simpler WhatsApp booking flow is cheaper.' },
    ],
    related: ['voice-ai-agent-cost-per-minute', 'why-your-business-needs-a-voice-ai-agent', 'custom-ml-model-cost'],
  },
  {
    slug: 'ai-in-logistics',
    title: 'AI in Logistics: Where Agents Save Real Money',
    description:
      'AI use cases in logistics and freight that pay back: shipment status agents, document extraction, exception handling, route and demand forecasting.',
    date: D,
    updated: D,
    cover: unsplash('photo-1494412574643-ff11b0a5c1c3'),
    coverAlt: 'Aerial view of a busy container port',
    tags: ['Logistics', 'Automation', 'AI agents'],
    kind: 'Guide',
    author: 'team',
    intro:
      'Logistics teams spend their days answering "where is my shipment?" and re-typing documents. Both are close to ideal work for AI, and both have numbers you can measure in the first month.',
    sections: [
      S(
        'uses',
        'The high-value use cases',
        T(
          'AI in logistics, ranked by typical payback',
          ['Use case', 'What it replaces', 'Type'],
          [
            ['Shipment status agent', 'Ops staff answering tracking calls and emails', 'AI agent'],
            ['Document extraction', 'Manual entry from invoices, bills of lading, PODs', 'Document AI'],
            ['Exception triage', 'Scanning emails for delays, damages, customs holds', 'AI agent'],
            ['Demand and capacity forecast', 'Spreadsheet planning', 'Custom ML'],
          ],
        ),
      ),
      S(
        'status',
        'The status agent',
        P('Connected to your TMS or carrier APIs, a status agent answers tracking questions on WhatsApp, email or phone with live data. The key design choice: it only reports what the system says, and it escalates when data is stale or contradictory rather than guessing an ETA.'),
      ),
      S(
        'docs',
        'Documents at scale',
        P('Freight runs on documents with inconsistent layouts. Modern extraction handles layout variation well, and the pattern that works is: extract, validate against the booking, and send only mismatches to a human. Teams typically move from checking every document to checking a small share.'),
      ),
      S(
        'start',
        'Getting started',
        UL(
          'Pick one lane or one customer segment for the pilot.',
          'Baseline today: tracking queries per day, minutes per document, error rate.',
          'Integrate read-only first; add write actions after the agent has earned trust.',
        ),
      ),
    ],
    faq: [
      { q: 'Our TMS is old. Can it still work?', a: 'Usually. We integrate through APIs where they exist and through database views, exports or email parsing where they do not.' },
      { q: 'Can the agent rebook shipments?', a: 'It can, behind an approval step. We start read-only and add actions once accuracy is proven.' },
      { q: 'How accurate is document extraction?', a: 'It depends on document quality. We measure on your documents during the pilot and agree a target before scaling.' },
    ],
    related: ['invoice-extraction-with-ai', 'computer-use-agents-back-office-automation', 'rpa-vs-ai-agents'],
  },
  {
    slug: 'ai-agents-for-d2c-ecommerce',
    title: 'AI Agents for D2C Brands: Support, Returns, COD',
    description:
      'How D2C and e-commerce brands use AI agents for order status, returns, COD confirmation and product questions — and the guardrails that protect margins.',
    date: D,
    updated: D,
    cover: unsplash('photo-1586528116311-ad8dd3c8310d'),
    coverAlt: 'Warehouse aisles stacked with yellow boxes',
    tags: ['E-commerce', 'AI agents', 'Customer support'],
    kind: 'Guide',
    author: 'team',
    intro:
      'For a D2C brand, most support tickets are the same five questions. An agent connected to your store and courier data can resolve most of them instantly, and it can protect margin on cash-on-delivery orders.',
    sections: [
      S(
        'tickets',
        'The five tickets an agent resolves',
        OL(
          'Where is my order? — live courier status.',
          'I want to return or exchange — policy check, pickup booking.',
          'Change my address or size — before dispatch only.',
          'Is this product right for me? — answers from catalogue and size guides.',
          'Refund status — from payment and return records.',
        ),
      ),
      S(
        'cod',
        'COD confirmation and RTO',
        P('Return-to-origin on cash-on-delivery orders quietly eats margin. An agent that confirms COD orders on WhatsApp before dispatch — and nudges customers toward prepaid with a small incentive — reduces fake and impulse orders. It is one of the fastest-payback automations we build for Indian D2C brands.'),
      ),
      S(
        'guardrails',
        'Guardrails that protect margin',
        UL(
          'Refunds and discounts above a threshold need human approval.',
          'Policy comes from one source of truth, not from the model’s memory.',
          'The agent cannot promise delivery dates the courier data does not support.',
          'Every action is logged against the order for audit.',
        ),
      ),
      S(
        'cost',
        'Cost and timeline',
        P('A support agent connected to a standard store platform and one or two couriers typically fits our full-support WhatsApp tier (₹17L – ₹38L) or the $20k–$55k workflow-agent range for multi-channel builds, delivered in four to eight weeks.'),
      ),
    ],
    faq: [
      { q: 'Does it work with Shopify and similar platforms?', a: 'Yes. Major store platforms and courier aggregators have APIs we integrate with.' },
      { q: 'Will it handle angry customers?', a: 'It detects frustration and escalation phrases and hands off to a person with the full context.' },
      { q: 'Can it recommend products?', a: 'Yes, from your catalogue data — and it only recommends products that are in stock.' },
    ],
    related: ['whatsapp-ai-agent-for-business-india', 'top-ai-agent-use-cases-for-business', 'human-in-the-loop-ai-agents'],
  },
  {
    slug: 'ai-for-schools-and-coaching-institutes',
    title: 'AI for Schools and Coaching Institutes: A Guide',
    description:
      'Practical AI for schools and coaching institutes: admissions enquiries, fee reminders, doubt-solving assistants and teacher workload — with safeguards.',
    date: D,
    updated: D,
    cover: unsplash('photo-1503676260728-1c00da094a0b'),
    coverAlt: 'Apple on a stack of books beside alphabet blocks',
    tags: ['Education', 'AI agents', 'Automation'],
    kind: 'Guide',
    author: 'team',
    intro:
      'Education institutes face a paradox: admissions season floods them with enquiries while teachers drown in admin. AI helps with both, provided it is designed with students’ safety first.',
    sections: [
      S(
        'admissions',
        'Admissions and enquiries',
        P('During admissions, the same questions arrive thousands of times: fees, batches, eligibility, scholarships, hostel. A WhatsApp or website assistant answers from your prospectus, collects the lead, and books a counselling call. Counsellors spend their time on families that are ready to decide.'),
      ),
      S(
        'ops',
        'Operations',
        UL(
          'Fee reminders and payment links with receipts.',
          'Attendance and result notifications to parents.',
          'Timetable and holiday queries answered instantly.',
        ),
      ),
      S(
        'learning',
        'Learning assistants',
        P('A doubt-solving assistant trained on your own notes and question banks can answer students at 11pm before an exam. The design choices matter: it should explain and guide rather than hand over answers, cite your material, and flag questions it cannot answer confidently for a teacher.'),
      ),
      S(
        'safety',
        'Safeguards for minors',
        OL(
          'Collect minimal personal data and get parental consent where students are minors.',
          'Restrict the assistant to academic topics and your own content.',
          'Log conversations for review and set clear escalation for wellbeing concerns.',
          'Never use student data to train third-party models.',
        ),
      ),
    ],
    faq: [
      { q: 'Will students just copy answers?', a: 'We design assistants to teach step by step and to withhold final answers for assessment questions.' },
      { q: 'Does it support regional languages?', a: 'Yes — Hindi, Marathi and other languages are supported for parent and student communication.' },
      { q: 'What does an admissions assistant cost?', a: 'An FAQ and lead-capture assistant is our entry tier, typically ₹3.5L – ₹8L.' },
    ],
    related: ['multilingual-ai-agents-for-india', 'what-is-rag-retrieval-augmented-generation', 'what-are-ai-guardrails'],
  },
  {
    slug: 'ai-for-law-firms',
    title: 'AI for Law Firms: Intake, Research and Drafting',
    description:
      'How law firms use AI safely: client intake, document review, research assistance and first drafts — with the confidentiality and verification rules that matter.',
    date: D,
    updated: D,
    cover: unsplash('photo-1589829545856-d10d557cf95f'),
    coverAlt: 'Bronze statue of Lady Justice holding scales',
    tags: ['Legal', 'AI agents', 'Document AI'],
    kind: 'Guide',
    author: 'team',
    intro:
      'Law is text-heavy, deadline-driven and expensive per hour — which makes it a strong fit for AI, and a dangerous one if verification is skipped. Here is where firms get value without risking their reputation.',
    sections: [
      S(
        'uses',
        'Where AI helps',
        T(
          'AI use cases for law firms',
          ['Use case', 'Value', 'Risk level'],
          [
            ['Client intake', 'Structured matter summaries before the first call', 'Low'],
            ['Document review', 'Flags clauses and deviations across large sets', 'Medium'],
            ['First drafts', 'Notices, standard agreements from firm templates', 'Medium'],
            ['Research assistance', 'Finds and summarises relevant material', 'High — must be verified'],
          ],
        ),
      ),
      S(
        'verify',
        'The verification rule',
        P('Every citation an AI produces must be checked against the primary source by a lawyer. Well-publicised cases of fabricated citations in court filings show what happens otherwise. We build research tools that only cite documents they actually retrieved, link each claim to its source, and make the lawyer’s check part of the workflow.'),
      ),
      S(
        'confidential',
        'Confidentiality',
        UL(
          'Deploy in the firm’s own cloud or a private tenant.',
          'Use providers with no-training and data-retention terms that satisfy your obligations.',
          'Enforce matter-level access control in retrieval.',
          'Keep an audit log of every query and output.',
        ),
      ),
      S(
        'start',
        'A sensible first project',
        P('Intake is the safest start: an assistant that gathers facts from prospective clients, produces a structured summary and flags conflicts for checking. It saves partner time on every new matter and carries little legal risk.'),
      ),
    ],
    faq: [
      { q: 'Can AI give legal advice to clients?', a: 'No. Client-facing tools should gather information and share general process information, not give advice.' },
      { q: 'Is our data used to train models?', a: 'Not with the providers and terms we use. We confirm this contractually per project.' },
      { q: 'Can it draft in our firm’s style?', a: 'Yes, from your own templates and precedents, with a lawyer reviewing every draft.' },
    ],
    related: ['what-are-llm-hallucinations', 'ai-agent-security-checklist', 'how-we-build-a-rag-assistant-on-company-docs'],
  },
  {
    slug: 'ai-for-manufacturing',
    title: 'AI in Manufacturing: Quality, Maintenance, Planning',
    description:
      'Proven AI for small and mid-size plants: visual quality inspection, predictive maintenance, demand planning and shop-floor knowledge assistants.',
    date: D,
    updated: D,
    cover: unsplash('photo-1581091226825-a6a2a5aee158'),
    coverAlt: 'Engineer working at a laptop beside factory equipment',
    tags: ['Manufacturing', 'Custom ML', 'Automation'],
    kind: 'Guide',
    author: 'engineering',
    intro:
      'Manufacturing AI is less about chatbots and more about models that see, predict and plan. For small and mid-size plants, three projects deliver most of the value.',
    sections: [
      S(
        'quality',
        'Visual quality inspection',
        P('A camera and a vision model can check every unit for scratches, misalignment or missing parts at line speed. The hard part is not the model — it is collecting images of every defect type under real line lighting. Plan two to four weeks of image collection before training.'),
      ),
      S(
        'maintenance',
        'Predictive maintenance',
        P('Vibration, temperature and current data from key machines can predict failures days in advance. If sensors are not already installed, retrofitting a few critical assets is often cheaper than one unplanned breakdown.'),
      ),
      S(
        'planning',
        'Demand and production planning',
        P('Forecasting demand by SKU and linking it to production plans reduces both stock-outs and excess inventory. This works best with two or more years of order history.'),
      ),
      S(
        'knowledge',
        'The shop-floor assistant',
        P('A retrieval assistant over SOPs, machine manuals and past maintenance logs helps technicians fix issues faster, in their language, on a tablet at the machine. It is the one LLM project that consistently pays off in plants.'),
      ),
      S(
        'cost',
        'Cost ranges',
        T(
          'Typical manufacturing AI projects',
          ['Project', 'Timeline', 'Cost'],
          [
            ['Shop-floor knowledge assistant', '3–5 weeks', '$12k – $25k'],
            ['Demand forecast', '5–8 weeks', '$20k – $45k'],
            ['Visual inspection', '8–14 weeks', '$45k – $120k'],
          ],
        ),
      ),
    ],
    faq: [
      { q: 'Do we need cloud connectivity on the floor?', a: 'Not necessarily. Vision models can run on edge hardware at the line, syncing results when connected.' },
      { q: 'How accurate is visual inspection?', a: 'We agree target detection and false-alarm rates on your parts before full build, measured on a held-out image set.' },
      { q: 'Can we start small?', a: 'Yes — one line, one defect class, or one machine family.' },
    ],
    related: ['custom-ml-model-cost', 'how-to-prepare-data-for-ml', 'custom-ml-model-vs-llm-api'],
  },
  {
    slug: 'ai-for-hotels',
    title: 'AI for Hotels: Direct Bookings and Guest Messaging',
    description:
      'How hotels, resorts and villas use AI to win direct bookings, answer guests 24/7 on WhatsApp, upsell stays and reduce OTA commission — with a realistic setup.',
    date: D,
    updated: D,
    cover: unsplash('photo-1566073771259-6a8506099945'),
    coverAlt: 'Resort pool beside a wooden hotel building at sunset',
    tags: ['Hospitality', 'AI agents', 'WhatsApp'],
    kind: 'Guide',
    author: 'team',
    intro:
      'Every booking that comes through an OTA costs a commission. Every guest question that goes unanswered overnight costs a booking. Hotels that answer instantly on their own channels keep both.',
    sections: [
      S(
        'direct',
        'Winning direct bookings',
        P('Guests often find you on an OTA and then check your website or WhatsApp for a better deal. An assistant that answers availability, room differences and policies instantly — and sends a direct booking link — converts that curiosity into a commission-free booking.'),
      ),
      S(
        'stay',
        'During the stay',
        UL(
          'Check-in instructions, Wi-Fi, breakfast timings — answered instantly.',
          'Requests routed to housekeeping or the front desk with room numbers.',
          'Upsells at the right moment: late check-out, spa, airport transfer.',
        ),
      ),
      S(
        'after',
        'After check-out',
        P('A short feedback message catches problems privately before they become public reviews, and happy guests get a review link. Replies to public reviews can be drafted for a manager to approve.'),
      ),
      S(
        'setup',
        'A realistic setup',
        OL(
          'Connect to your booking engine or channel manager for live availability.',
          'Load policies, room details and FAQs as the knowledge base.',
          'Route requests to staff via a shared inbox or group.',
          'Measure: response time, direct bookings from chat, review score.',
        ),
      ),
    ],
    faq: [
      { q: 'Can it take payments?', a: 'It sends secure payment links from your booking engine; it never handles card details in chat.' },
      { q: 'Does it work for a single villa?', a: 'Yes. Smaller properties often start with an FAQ and enquiry assistant in our entry tier.' },
      { q: 'Which languages?', a: 'Any major language your guests use; replies follow the guest’s language automatically.' },
    ],
    related: ['whatsapp-business-api-cost-india', 'whatsapp-ai-agent-for-business-india', 'top-ai-automation-ideas-small-business-india'],
  },
  {
    slug: 'ai-for-insurance-agencies',
    title: 'AI for Insurance: Claims Intake and Renewals',
    description:
      'Where AI helps insurance agencies and brokers: renewal reminders, first-notice-of-loss intake, document collection and policy Q&A — with compliance guardrails.',
    date: D,
    updated: D,
    cover: unsplash('photo-1507679799987-c73779587ccf'),
    coverAlt: 'Man in a suit buttoning his jacket',
    tags: ['Insurance', 'AI agents', 'Automation'],
    kind: 'Guide',
    author: 'team',
    intro:
      'Insurance agencies live on renewals and die on paperwork. AI agents are good at both chasing and collecting, as long as they never cross into advice they are not licensed to give.',
    sections: [
      S(
        'renewals',
        'Renewals',
        P('Missed renewals are lost revenue that was already won. An agent that reminds customers ahead of expiry, answers "what changed?" from the renewal quote, and books a call with an advisor for anything beyond the basics protects the book without adding staff.'),
      ),
      S(
        'fnol',
        'Claims intake',
        OL(
          'Customer reports a claim on WhatsApp or phone.',
          'The agent collects structured details: policy number, date, description, photos, documents.',
          'It checks completeness against the insurer’s checklist and asks for missing items.',
          'A complete file reaches the claims handler — no back-and-forth.',
        ),
      ),
      S(
        'guardrails',
        'Compliance guardrails',
        UL(
          'The agent explains policy terms from documents but does not recommend products unless the flow is designed and approved for it.',
          'Coverage decisions are never made by the agent.',
          'Conversations are recorded and retained per regulation.',
          'Personal and health data is minimised and access-controlled.',
        ),
      ),
    ],
    faq: [
      { q: 'Can it quote premiums?', a: 'It can show quotes generated by your quoting system; it does not calculate premiums on its own.' },
      { q: 'How do customers upload documents?', a: 'Directly in WhatsApp or via a secure upload link; files go straight to your document store.' },
      { q: 'What does it cost?', a: 'Renewal and intake agents typically fall in the $20k–$55k workflow-agent range, depending on integrations.' },
    ],
    related: ['human-in-the-loop-ai-agents', 'ai-agent-security-checklist', 'dpdp-act-and-ai-compliance-india'],
  },
  {
    slug: 'ai-for-accounting-firms',
    title: 'AI for CA and Accounting Firms: What to Automate',
    description:
      'What CA and accounting firms can automate with AI: document collection, invoice and bank-statement extraction, reconciliation and client queries.',
    date: D,
    updated: D,
    cover: unsplash('photo-1554224155-8d04cb21cd6c'),
    coverAlt: 'Calculator and financial documents on a desk',
    tags: ['Accounting', 'Automation', 'Document AI'],
    kind: 'Guide',
    author: 'team',
    intro:
      'Accounting firms spend filing season chasing documents and re-typing numbers. Both are automatable, and the partners’ judgement is not.',
    sections: [
      S(
        'chase',
        'Document chasing',
        P('An assistant on WhatsApp and email sends each client a personal checklist, collects uploads, recognises which document is which, and reminds them about what is still missing. Staff see a dashboard of completeness instead of a pile of unread messages.'),
      ),
      S(
        'extract',
        'Extraction and reconciliation',
        UL(
          'Invoices and bills: vendor, GSTIN, amounts, tax split extracted into your accounting software format.',
          'Bank statements: transactions parsed and matched against ledger entries.',
          'Exceptions only: mismatches go to a person; clean matches post automatically after review rules are met.',
        ),
      ),
      S(
        'queries',
        'Client queries',
        P('Routine questions — deadlines, required documents, status of a return — are answered from the firm’s knowledge base and case records. Anything that needs professional judgement is routed to the responsible staff member.'),
      ),
      S(
        'start',
        'Where to start',
        P('Start with document collection for one service line, such as individual tax returns. It is contained, measurable in hours saved during the season, and a single-process automation in the $12k–$25k range.'),
      ),
    ],
    faq: [
      { q: 'Will it work with our accounting software?', a: 'Most accounting packages accept imports or have APIs. We map output to your exact format.' },
      { q: 'How secure is client data?', a: 'Data stays in your controlled storage, access is role-based, and nothing is used for model training.' },
      { q: 'Can it file returns?', a: 'No — filing stays with qualified staff. The AI prepares and checks; people sign off.' },
    ],
    related: ['invoice-extraction-with-ai', 'ai-automation-roi-calculation', 'rpa-vs-ai-agents'],
  },
  {
    slug: 'ai-in-recruitment',
    title: 'AI in Recruitment: Screening Without Bias Traps',
    description:
      'How recruiters and HR teams use AI for scheduling, screening and candidate Q&A — and the bias, transparency and consent rules to design in from day one.',
    date: D,
    updated: D,
    cover: unsplash('photo-1573497019940-1c28c88b4f3e'),
    coverAlt: 'Two colleagues talking across a table in an office',
    tags: ['Recruitment', 'HR', 'AI agents'],
    kind: 'Guide',
    author: 'team',
    intro:
      'Recruitment has the most tempting AI use cases and some of the most serious risks. Automate logistics freely; automate judgement carefully, transparently and with humans deciding.',
    sections: [
      S(
        'safe',
        'Safe, high-value automations',
        UL(
          'Interview scheduling across candidate and panel calendars.',
          'Candidate Q&A about the role, process and benefits, 24/7.',
          'Status updates so no candidate is left waiting without news.',
          'Structured interview notes and summaries for the panel.',
        ),
      ),
      S(
        'screening',
        'Screening, done carefully',
        P('AI can help rank applications against clear, job-related criteria. It can also learn historic bias if trained on past hiring decisions. The designs that hold up use explicit criteria written by the hiring team, explain every score, audit outcomes across groups, and keep a human decision on every rejection.'),
      ),
      S(
        'rules',
        'Rules to design in',
        OL(
          'Tell candidates when AI is used and for what.',
          'Never use protected characteristics or obvious proxies for them.',
          'Log reasons for every recommendation.',
          'Run periodic adverse-impact checks and act on them.',
          'Follow applicable law — some jurisdictions regulate automated hiring decisions specifically.',
        ),
      ),
    ],
    faq: [
      { q: 'Can AI conduct first-round interviews?', a: 'It can run structured screening conversations, but candidates should know, and a person should review every outcome.' },
      { q: 'Does it integrate with our ATS?', a: 'Most applicant tracking systems have APIs; we integrate for status sync and notes.' },
      { q: 'How do you test for bias?', a: 'We compare pass-through rates across groups on historical and live data and review criteria that cause gaps.' },
    ],
    related: ['human-in-the-loop-ai-agents', 'what-are-ai-guardrails', 'top-ai-agent-use-cases-for-business'],
  },
];
