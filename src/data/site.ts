// ─────────────────────────────────────────────────────────────
// Single source of truth for all AUREA site content.
// AUREA — global luxury real estate across Florida, California,
// Saudi Arabia and New York.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'AUREA',
  tagline: 'Own the address.',
  location: 'Miami · Los Angeles · Riyadh · New York',
  email: 'private@aurea.estate',
  phone: '+1 (305) 000 0000',
  whatsapp: 'https://wa.me/13050000000',
};

export const nav = [
  { label: 'markets', href: '#markets' },
  { label: 'residences', href: '#residences' },
  { label: 'gallery', href: '#gallery' },
  { label: 'the firm', href: '#firm' },
  { label: 'clients', href: '#clients' },
  { label: 'enquire', href: '#contact' },
];

export const hero = {
  topline: 'Private luxury real estate · Est. 2009',
  titleA: 'EXTRAORDINARY',
  titleB: 'ADDRESSES',
  blurb:
    'From oceanfront Miami to the hills of Los Angeles, the Riyadh skyline and the parks of Manhattan — we place discerning buyers into the residences that define them.',
  // full-bleed crossfading hero, one frame per market
  slides: [
    {
      city: 'Miami, Florida',
      image:
        'https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=2000&auto=format&fit=crop',
    },
    {
      city: 'Los Angeles, California',
      image:
        'https://images.unsplash.com/photo-1580655653885-65763b2597d0?q=80&w=2000&auto=format&fit=crop',
    },
    {
      city: 'Riyadh, Saudi Arabia',
      image:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2000&auto=format&fit=crop',
    },
    {
      city: 'Manhattan, New York',
      image:
        'https://images.unsplash.com/photo-1522083165195-3424ed129620?q=80&w=2000&auto=format&fit=crop',
    },
  ],
  stats: [
    { value: 12, suffix: 'B+', label: 'in closed sales (USD)' },
    { value: 4, suffix: '', label: 'flagship markets' },
    { value: 320, suffix: '+', label: 'residences placed' },
    { value: 15, suffix: 'yr', label: 'discreet since 2009' },
  ],
};

// scrolling city band
export const marquee = [
  'Miami',
  'Beverly Hills',
  'Riyadh',
  'Manhattan',
  'Palm Beach',
  'Malibu',
  'NEOM',
  'Tribeca',
  'Bel Air',
  'The Hamptons',
  'Naples',
  'Red Sea',
];

export const manifesto = {
  kicker: 'the aurea belief',
  // rendered word-by-word with a scroll-scrubbed reveal
  text: 'An address is more than a location. It is a statement of who you are. A beachfront tower in Miami. A glass estate above Los Angeles. A skyline residence in Riyadh. A penthouse over Central Park. We do not simply list homes — we place people into the places that will define the rest of their lives.',
};

export type Market = {
  n: string;
  city: string;
  region: string;
  country: string;
  from: string;
  listings: number;
  desc: string;
  tags: string[];
  image: string;
};

export const markets: Market[] = [
  {
    n: '01',
    city: 'Florida',
    region: 'Miami · Palm Beach · Naples',
    country: 'United States',
    from: '$4.5M',
    listings: 68,
    desc: 'Oceanfront towers, private-island compounds and new-build estates along the Atlantic gold coast — where the water is the front lawn.',
    tags: ['Beachfront', 'Star Island', 'Palm Beach', 'New builds'],
    image:
      'https://images.unsplash.com/photo-1501509497947-782640bc1412?q=80&w=1800&auto=format&fit=crop',
  },
  {
    n: '02',
    city: 'California',
    region: 'Beverly Hills · Bel Air · Malibu',
    country: 'United States',
    from: '$6.8M',
    listings: 54,
    desc: 'Canyon compounds, architectural glass villas and Malibu beachfront perched above the Pacific — privacy, light and cinema-grade views.',
    tags: ['Bel Air', 'Malibu', 'Hollywood Hills', 'Architectural'],
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1800&auto=format&fit=crop',
  },
  {
    n: '03',
    city: 'Saudi Arabia',
    region: 'Riyadh · Jeddah · NEOM',
    country: 'Kingdom of Saudi Arabia',
    from: 'SAR 18M',
    listings: 37,
    desc: 'Landmark skyline residences and visionary Red Sea estates at the heart of the Kingdom’s new era — a market being written as we speak.',
    tags: ['Riyadh skyline', 'NEOM', 'Red Sea', 'Diplomatic Quarter'],
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1800&auto=format&fit=crop',
  },
  {
    n: '04',
    city: 'New York',
    region: 'Manhattan · Tribeca · The Hamptons',
    country: 'United States',
    from: '$3.9M',
    listings: 82,
    desc: 'Park-front penthouses on Billionaires’ Row, cast-iron Tribeca lofts and Hamptons oceanfront — the most storied real estate on earth.',
    tags: ['Central Park', 'Tribeca', 'The Hamptons', 'Billionaires’ Row'],
    image:
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1800&auto=format&fit=crop',
  },
];

export type Listing = {
  name: string;
  city: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  status?: string;
  blurb: string;
  image: string;
};

export const listings: Listing[] = [
  {
    name: 'Villa Aurora',
    city: 'Star Island, Miami',
    price: '$28,500,000',
    beds: 7,
    baths: 9,
    area: '12,400 sq ft',
    status: 'exclusive',
    blurb:
      'A private-island waterfront estate with 200 ft of frontage, infinity pool and a deep-water dock for a 120 ft yacht.',
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1800&auto=format&fit=crop',
  },
  {
    name: 'The Cliff House',
    city: 'Malibu, California',
    price: '$19,750,000',
    beds: 5,
    baths: 6,
    area: '8,900 sq ft',
    blurb:
      'Cantilevered glass over the Pacific — walls of sliding glass, a floating staircase and a pool that meets the horizon.',
    image:
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1800&auto=format&fit=crop',
  },
  {
    name: 'Sky Palace Penthouse',
    city: 'Riyadh, Saudi Arabia',
    price: 'SAR 42,000,000',
    beds: 5,
    baths: 7,
    area: '9,600 sq ft',
    status: 'new',
    blurb:
      'A full-floor residence crowning the Riyadh skyline, with private lift, majlis, cinema and a wraparound sky terrace.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop',
  },
  {
    name: 'Central Park Aerie',
    city: 'Billionaires’ Row, New York',
    price: '$34,000,000',
    beds: 4,
    baths: 5,
    area: '6,200 sq ft',
    blurb:
      'Perched 1,000 ft above Central Park — floor-to-ceiling glass framing the reservoir, the skyline and both rivers.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop',
  },
  {
    name: 'Bel Air Glass Estate',
    city: 'Bel Air, California',
    price: '$46,000,000',
    beds: 8,
    baths: 12,
    area: '18,000 sq ft',
    status: 'exclusive',
    blurb:
      'A gated compound on 1.4 acres — motor court, wellness wing, screening room and a 100 ft vanishing-edge pool.',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop',
  },
  {
    name: 'Red Sea Villa',
    city: 'NEOM, Saudi Arabia',
    price: 'Price on request',
    beds: 6,
    baths: 8,
    area: '11,200 sq ft',
    status: 'coming soon',
    blurb:
      'A landmark waterfront villa within the Kingdom’s new coastal region — private beach, moorings and full concierge.',
    image:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1800&auto=format&fit=crop',
  },
];

export const gallery = {
  kicker: 'inside the residences',
  title: 'Real homes. Not renders.',
  desc: 'Every frame is a room we have walked, in a home we currently represent — pulled straight from our private portfolio across the four markets.',
  rowA: [
    { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1400&auto=format&fit=crop', caption: 'Chef’s kitchen · Palm Beach' },
    { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop', caption: 'Primary suite · Bel Air' },
    { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop', caption: 'Great room · Riyadh' },
    { src: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1400&auto=format&fit=crop', caption: 'Lounge · Tribeca' },
  ],
  rowB: [
    { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop', caption: 'Living · Central Park' },
    { src: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1400&auto=format&fit=crop', caption: 'Spa & pool · Malibu' },
    { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1400&auto=format&fit=crop', caption: 'Terrace · Miami' },
    { src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1400&auto=format&fit=crop', caption: 'Dining · The Hamptons' },
  ],
};

export const firm = {
  kicker: 'the firm',
  title: 'One private desk. Every market.',
  desc: 'AUREA is not a listings portal. Every client is paired with a single senior advisor who runs the entire search — sourcing off-market, negotiating quietly and coordinating legal, design and concierge across borders.',
  image:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1800&auto=format&fit=crop',
  desks: [
    { name: 'Private Acquisitions', count: 12, desc: 'Buy-side representation for single homes and portfolios' },
    { name: 'Off-Market Portfolio', count: 9, desc: 'Homes never listed publicly, seen by invitation only' },
    { name: 'Global Concierge', count: 8, desc: 'Relocation, staffing, aviation and lifestyle' },
    { name: 'Investment Advisory', count: 6, desc: 'Yield, appreciation and cross-border structuring' },
    { name: 'Architecture & Design', count: 7, desc: 'New builds, renovation and staging partners' },
    { name: 'Legal & Escrow', count: 5, desc: 'Discreet closings, trusts and compliance' },
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
    quote:
      'They found our Star Island home before it ever hit the market and negotiated eight figures off the ask. Two weeks, start to keys. Extraordinary.',
    name: 'Jonathan Vance',
    role: 'Acquired in Miami, Florida',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote:
      'I wanted privacy above everything. My advisor showed me three homes — all off-market — and I bought the second. No press, no noise, no leaks.',
    name: 'Sofia Marchetti',
    role: 'Private client, Bel Air',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote:
      'Buying in Riyadh as a foreign national felt impossible until AUREA. They handled every layer — legal, banking, design — in one relationship.',
    name: 'Khalid Al-Rashid',
    role: 'Acquired in Riyadh, KSA',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote:
      'The Central Park penthouse was everything the brochures never are. They understood the light I wanted before I could describe it.',
    name: 'Eleanor Whitmore',
    role: 'Acquired in New York',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote:
      'We sold in Malibu and bought in the Hamptons in the same quarter, both quietly. One team, four time zones, zero friction.',
    name: 'Marcus Chen',
    role: 'Sold & acquired, coast to coast',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote:
      'I described the life I wanted, not the house. What they brought me was the life. That is the difference with this firm.',
    name: 'Isabella Rossi',
    role: 'Acquired in Palm Beach',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
  },
];

export const process = [
  { n: '01', title: 'The brief', desc: 'A private consultation. Budget, markets, lifestyle, discretion — we build the mandate around you, not a listing feed.' },
  { n: '02', title: 'The shortlist', desc: 'Within days you receive a curated dossier — including off-market homes you will not find anywhere else.' },
  { n: '03', title: 'The viewings', desc: 'Tour in person or by private cinematic walkthrough, on your schedule, in any of the four markets.' },
  { n: '04', title: 'The negotiation', desc: 'We represent only your side of the table — pricing, terms and timing handled quietly on your behalf.' },
  { n: '05', title: 'The keys', desc: 'Closing, legal, design and concierge coordinated end to end. You arrive to a home that is ready to live in.' },
];

export const contact = {
  kicker: 'begin your search',
  titleA: 'Find your',
  titleB: 'address.',
  desc: 'Tell us the life you want to live and the market that calls you. A senior advisor replies within 24 hours — in complete confidence.',
  ctaPrimary: 'Request a private viewing',
  ctaSecondary: 'WhatsApp an advisor',
};
