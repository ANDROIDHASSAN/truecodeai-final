// Single source of truth for all TrueCodeAI site content.

export const site = {
  name: 'TrueCodeAI',
  tagline: 'The studio that builds anything.',
  location: 'Nashik, India · Remote-first · Worldwide',
  email: 'truecodeai@gmail.com',
  whatsapp: 'https://wa.me/919716978692',
};

export const nav = [
  { label: 'capabilities', href: '#capabilities' },
  { label: 'work', href: '#work' },
  { label: 'screens', href: '#screens' },
  { label: 'team', href: '#team' },
  { label: 'reviews', href: '#reviews' },
  { label: 'contact', href: '#contact' },
];

export const hero = {
  topline: '50+ engineers · taking new builds',
  titleA: 'WE CAN BUILD',
  titleB: 'ANYTHING',
  blurb:
    'Describe it once. Our 50-engineer studio designs it, ships it production-grade, and scales it — startups, MVPs, AI agents, voice automation and custom ML.',
  stats: [
    { value: 50, suffix: '+', label: 'engineers in-house' },
    { value: 60, suffix: 'k+', label: 'users on our products' },
    { value: 6, suffix: '', label: 'specialist divisions' },
    { value: 24, suffix: 'h', label: 'to project kickoff' },
  ],
};

export const marquee = [
  'Startups',
  'Production MVPs',
  'AI Agents',
  'Voice Agents',
  'AI Automation',
  'Custom ML Models',
  'Cloud',
  'DevOps',
  'Web3',
  'Cybersecurity',
];

export const manifesto = {
  kicker: 'the only rule',
  text: 'If you can describe it, we can build it. A napkin-sketch startup. An MVP that ships at production grade — no rewrite later. An AI agent that runs your ops. A voice agent that answers every call. A model trained on your own data. You bring the idea. We bring the other fifty people.',
};

export type Capability = {
  n: string;
  title: string;
  desc: string;
  tags: string[];
  image: string;
};

export const capabilities: Capability[] = [
  {
    n: '01',
    title: 'Startups, end to end',
    desc: 'From first sketch to funded product — strategy, design, engineering, launch. We have shipped our own; we build yours like it is ours.',
    tags: ['Product strategy', 'Brand & UI', 'Full-stack build', 'Launch'],
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1600&auto=format&fit=crop',
  },
  {
    n: '02',
    title: 'MVPs at production grade',
    desc: 'The speed of an MVP with the architecture of a real product. Ship in weeks, scale for years — no throwaway code, no rewrite tax.',
    tags: ['Weeks not months', 'Scalable architecture', 'CI/CD from day one'],
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1600&auto=format&fit=crop',
  },
  {
    n: '03',
    title: 'Business solutions',
    desc: 'Custom systems that remove the bottleneck in your operation — ERPs, CRMs, internal tools, dashboards, integrations.',
    tags: ['Internal tools', 'CRM / ERP', 'Dashboards', 'Integrations'],
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop',
  },
  {
    n: '04',
    title: 'AI agents',
    desc: 'Autonomous agents that qualify leads, answer support, move tickets and run workflows — wired into the tools you already use.',
    tags: ['Sales & support', 'Multi-agent systems', 'Tool integrations'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop',
  },
  {
    n: '05',
    title: 'Voice agents',
    desc: 'Phone agents that sound human — they book appointments, qualify callers and follow up, in your brand voice, around the clock.',
    tags: ['Inbound & outbound', '24/7 coverage', 'Human handoff'],
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1600&auto=format&fit=crop',
  },
  {
    n: '06',
    title: 'AI automation',
    desc: 'We map your busywork and delete it — document processing, follow-ups, reporting, scheduling — stitched into one quiet machine.',
    tags: ['Workflow automation', 'Document AI', 'Zero-touch ops'],
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    n: '07',
    title: 'Custom ML models',
    desc: 'Models trained on your data, for your exact use case — forecasting, vision, recommendation, risk. Deployed, monitored, retrained.',
    tags: ['Your data', 'Fine-tuning', 'MLOps & monitoring'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop',
  },
];

export type Project = {
  name: string;
  category: string;
  metric: string;
  status?: string;
  blurb: string;
  image: string;
};

export const projects: Project[] = [
  {
    name: 'Interify',
    category: 'Interior Design CRM',
    metric: '10,000+ users',
    blurb: 'A CRM built for interior designers to run projects and clients in one place.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1800&auto=format&fit=crop',
  },
  {
    name: 'CupCount',
    category: 'POS · CRM',
    metric: '300+ shop owners',
    blurb: 'A point-of-sale and CRM tailored for neighbourhood chai shops.',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1800&auto=format&fit=crop',
  },
  {
    name: 'Nischay Shrivastav',
    category: 'Cinematic Portfolio',
    metric: 'Bookings up 3×',
    blurb: "A cinematic portfolio that turns a photographer's reel into bookings.",
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1800&auto=format&fit=crop',
  },
  {
    name: 'PN Villa',
    category: 'Direct Booking Engine',
    metric: 'OTA fees: ₹0',
    blurb: 'A direct-booking villa site that cuts out the OTA middlemen.',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1800&auto=format&fit=crop',
  },
];

export const screenshots = {
  kicker: 'inside the products',
  title: 'Real screens. Shipped software.',
  rowA: [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1400&auto=format&fit=crop',
  ],
  rowB: [
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1400&auto=format&fit=crop',
  ],
};

export const team = {
  kicker: 'the bench',
  title: '50 engineers. Six divisions. One team on your build.',
  desc: 'Every project gets a dedicated pod pulled from across the studio — so the same roof covers your frontend, your infra, your model and your security review.',
  image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1800&auto=format&fit=crop',
  divisions: [
    { name: 'Web & Product', count: 14, desc: 'React, Node, mobile, design systems' },
    { name: 'AI & ML', count: 12, desc: 'Agents, LLM apps, custom model training' },
    { name: 'Cloud', count: 8, desc: 'AWS, GCP, Azure — architecture & cost' },
    { name: 'DevOps', count: 6, desc: 'CI/CD, Kubernetes, observability' },
    { name: 'Web3', count: 5, desc: 'Smart contracts, dApps, tokenomics' },
    { name: 'Cybersecurity', count: 5, desc: 'Audits, pentesting, compliance' },
  ],
};

export type Review = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export const reviews: Review[] = [
  {
    quote: 'Their voice agent answers every call to our clinics. Bookings happen at 2am now. It paid for itself inside the first month.',
    name: 'Sara Lindqvist',
    role: 'COO, NordCare Clinics',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote: 'The "MVP" they shipped survived our Series A traffic spike untouched. Most agencies sell speed or quality. Somehow this was both.',
    name: 'Daniel Okafor',
    role: 'CTO, LedgerPay',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote: 'They trained a demand-forecasting model on three years of our messy data and it now drives our entire purchasing. Felt like hiring an ML department overnight.',
    name: 'Priya Sharma',
    role: 'Director, Vastra Retail',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote: 'One pod handled our app, our cloud and our security audit. Six vendors became one WhatsApp group. I will never go back.',
    name: 'Marcus Chen',
    role: 'Founder, Stackline',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote: 'I described the idea on a Tuesday call. The kickoff doc arrived Wednesday morning. They really do build anything — and fast.',
    name: 'Elena Rossi',
    role: 'CEO, Fioré Studio',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
  },
];

export const process = [
  { n: '01', title: 'Say it', desc: 'A 30-minute call. You describe it — napkin sketch, voice note, half an idea. All valid inputs.' },
  { n: '02', title: 'Shape it', desc: 'We return a scoped plan in 48 hours: architecture, pod, timeline, fixed price. No surprises later.' },
  { n: '03', title: 'Build it', desc: 'Your pod ships weekly. You watch it happen in a live staging link, not a slide deck.' },
  { n: '04', title: 'Ship it', desc: 'Production launch with monitoring, security review and load testing already done.' },
  { n: '05', title: 'Scale it', desc: 'We stay on — iterating, retraining models, tuning infra as your numbers grow.' },
];

export const contact = {
  kicker: 'your move',
  titleA: 'Got an idea?',
  titleB: 'We’ve got fifty engineers.',
  desc: 'Tell us what you want to exist. We’ll reply within 24 hours with how we’d build it.',
  ctaPrimary: 'Start a build',
  ctaSecondary: 'WhatsApp us',
};
