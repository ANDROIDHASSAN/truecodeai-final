// Legal page content. Plain-language template — have counsel review before launch.

export type LegalPage = {
  path: string;
  title: string;
  description: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
};

const EFFECTIVE = '19 September 2026';

export const privacy: LegalPage = {
  path: '/privacy',
  title: 'Privacy Policy',
  description:
    'How TrueCodeAI collects, uses and protects the information you share with us through this website and our services.',
  updated: EFFECTIVE,
  sections: [
    {
      heading: 'What we collect',
      body: [
        'When you contact us through this site we collect what you type into the form: your name, email address, company (optional), budget range and project description. If you email or WhatsApp us, we keep that correspondence.',
        'Our hosting provider and analytics record standard technical data — IP address, browser, pages visited and referring site — so we can keep the site running and understand what people read.',
      ],
    },
    {
      heading: 'How we use it',
      body: [
        'To reply to you, scope and deliver work you ask for, and keep records of that engagement. We do not sell your data, and we do not use it for advertising.',
        'We may send you follow-ups about a conversation you started. You can ask us to stop at any time.',
      ],
    },
    {
      heading: 'Who we share it with',
      body: [
        'Service providers we use to run the business — email, form processing, hosting, analytics and cloud infrastructure — under their own privacy terms. We share only what they need to do their job.',
        'We disclose information where the law requires it.',
      ],
    },
    {
      heading: 'Retention and security',
      body: [
        'Contact-form submissions and correspondence are kept for as long as we have an ongoing conversation or engagement, and up to three years afterwards for our records. Access is limited to the team members who need it, over encrypted connections.',
      ],
    },
    {
      heading: 'Your rights',
      body: [
        'You can ask what we hold about you, ask us to correct it, or ask us to delete it. Email hello@truecodeai.com and we will respond within 30 days.',
      ],
    },
    {
      heading: 'Cookies',
      body: [
        'This site uses no advertising or tracking cookies. Any cookies set are strictly functional or belong to the analytics provider described above.',
      ],
    },
    {
      heading: 'Changes',
      body: [
        'If this policy changes we will update the date at the top of the page. Material changes to how we handle data you have already given us will be communicated directly.',
      ],
    },
  ],
};

export const terms: LegalPage = {
  path: '/terms',
  title: 'Terms of Service',
  description:
    'The terms that apply to using the TrueCodeAI website and to engaging TrueCodeAI for software, AI and ML work.',
  updated: EFFECTIVE,
  sections: [
    {
      heading: 'Using this website',
      body: [
        'The content on truecodeai.com is provided for information about our studio and services. You may browse it and contact us through it. You may not scrape it, misrepresent it as your own, or use it to send unsolicited messages.',
      ],
    },
    {
      heading: 'Engagements',
      body: [
        'Every build is governed by a written proposal or statement of work that sets out scope, timeline, price and deliverables. Those documents take precedence over this page where they differ.',
        'Estimates given before a scoped proposal are indicative, not binding.',
      ],
    },
    {
      heading: 'Intellectual property',
      body: [
        'Unless a statement of work says otherwise, you own the code and assets we deliver to you once they are paid for. We retain the right to reuse general know-how, tooling and non-client-specific components.',
        'The TrueCodeAI name, logo and this website’s design are ours.',
      ],
    },
    {
      heading: 'Confidentiality',
      body: [
        'Anything you tell us about your business or product in the course of a conversation or engagement is treated as confidential. We are happy to sign an NDA before a scoping call.',
      ],
    },
    {
      heading: 'Liability',
      body: [
        'This website is provided as-is. To the extent permitted by law, we are not liable for indirect or consequential loss arising from use of the site. Liability under an engagement is set by its statement of work.',
      ],
    },
    {
      heading: 'Governing law',
      body: [
        'These terms are governed by the laws of India. Disputes fall under the jurisdiction of the courts of Nashik, Maharashtra, unless an engagement agreement provides otherwise.',
      ],
    },
    {
      heading: 'Contact',
      body: ['Questions about these terms: hello@truecodeai.com, or use the form below.'],
    },
  ],
};

export const legalPages = [privacy, terms];
