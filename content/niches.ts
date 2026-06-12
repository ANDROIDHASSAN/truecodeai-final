export type NicheGroup = {
  slug: string;
  label: string;
  description: string;
  solutions: string[]; // solution slugs
};

export const nicheGroups: NicheGroup[] = [
  {
    slug: 'trades',
    label: 'Trades & Field Services',
    description:
      'AI answering services, scheduling software, and automated invoicing for HVAC, roofing, plumbing, electrical, landscaping, pest control, and cleaning businesses.',
    solutions: [
      'ai-answering-service-hvac',
      'automated-roofing-estimate-software',
      'job-scheduling-software-plumbers',
      'automated-invoicing-electricians',
      'recurring-scheduling-software-landscaping',
      'appointment-reminder-software-pest-control',
      'lead-management-software-cleaning-companies',
    ],
  },
  {
    slug: 'clinics',
    label: 'Healthcare Clinics',
    description:
      'Patient intake automation, appointment reminders, and recall software for dental, physical therapy, veterinary, chiropractic, med spa, and optometry practices.',
    solutions: [
      'dental-appointment-reminder-automation',
      'patient-intake-automation-physical-therapy',
      'vet-clinic-reminder-software',
      'patient-reactivation-software-chiropractors',
      'med-spa-booking-no-show-system',
      'patient-recall-software-optometry',
    ],
  },
  {
    slug: 'b2b-ops',
    label: 'B2B & Operations',
    description:
      'B2B ordering portals, inventory sync, load tracking, and quote systems for distributors, auto parts stores, trucking companies, equipment rental shops, and print shops.',
    solutions: [
      'b2b-ordering-portal-distributors',
      'inventory-sync-software-auto-parts',
      'load-tracking-software-trucking',
      'equipment-rental-booking-software',
      'online-quote-system-print-shops',
    ],
  },
  {
    slug: 'real-estate',
    label: 'Real Estate',
    description:
      'Lead routing CRMs, maintenance request software, Airbnb messaging automation, and document collection for real estate teams, property managers, STR operators, and mortgage brokers.',
    solutions: [
      'lead-routing-crm-real-estate-teams',
      'maintenance-request-software-property-managers',
      'airbnb-guest-messaging-automation',
      'document-collection-automation-mortgage-brokers',
    ],
  },
  {
    slug: 'professional-services',
    label: 'Professional Services',
    description:
      'Client document collection, intake automation, renewal automation, and reporting tools for accounting firms, law firms, insurance agencies, staffing agencies, and marketing agencies.',
    solutions: [
      'client-document-collection-accounting-firms',
      'client-intake-automation-law-firms',
      'renewal-automation-insurance-agencies',
      'candidate-tracking-software-staffing-agencies',
      'automated-client-reporting-marketing-agencies',
    ],
  },
  {
    slug: 'hospitality-fitness-local',
    label: 'Hospitality, Fitness & Local',
    description:
      'Catering management, gym member retention, salon booking automation, and event management software for local service businesses.',
    solutions: [
      'catering-management-software',
      'member-retention-software-gyms',
      'automated-booking-system-salons',
      'event-management-software-planners',
    ],
  },
  {
    slug: 'ecommerce',
    label: 'E-Commerce',
    description:
      'Abandoned cart automation for Shopify stores and subscription churn reduction software to protect recurring revenue.',
    solutions: [
      'abandoned-cart-automation-shopify',
      'subscription-churn-reduction-software',
    ],
  },
  {
    slug: 'ai-native',
    label: 'AI-Native Solutions',
    description:
      'AI voice receptionists, custom AI support chatbots, and AI lead qualification agents for small businesses ready to deploy intelligent automation.',
    solutions: [
      'ai-voice-receptionist-small-business',
      'custom-ai-support-chatbot-business',
      'ai-lead-qualification-agent',
    ],
  },
];
