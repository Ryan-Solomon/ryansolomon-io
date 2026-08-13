export const profile = {
  name: 'Ryan Solomon',
  title: 'Software Engineer',
  tagline: 'Full-Stack & Frontend Architecture · AI Applications',
  location: 'Knoxville, TN',
  remote: 'Open to Remote',
  email: 'ryan@ryansolomon.io',
  linkedin: 'https://www.linkedin.com/in/ryanjsolomon',
  resumeHref: '/Ryan_Solomon_Resume.pdf',
  summary:
    "Software engineer with 5.5 years building and modernizing a production healthcare platform serving 1,000+ users. Primary contributor to the product frontend and shared component library, with progressively broader ownership across full-stack development, architecture, production AI, database performance, testing, security, and EHR integrations. Experienced leading large migrations on a live product, designing reusable platform capabilities, and diagnosing complex production failures.",
};

export const experience = {
  company: 'Unite Genomics',
  role: 'Software Engineer',
  dates: 'Feb 2021 – Present',
  bullets: [
    'Primary contributor to the product frontend, authoring 5,616 of 10,510 commits (53%) across a ~12-engineer team and 54% of a shared TypeScript component library; delivered 1,700+ tracked issues and 18 epics.',
    'Progressively expanded from frontend development into full-stack and architectural ownership across React, Django/DRF, PostgreSQL, Redis, and production application services.',
    'Led 12 major framework migrations on a live product without a feature freeze, including React 16→19, MUI v5→v9, Kendo React 9→14, Recoil→Jotai, SWR v1→v2, SurveyJS v1→v2, and Create React App/webpack→Vite; sequenced the state migration into seven independently shippable, revertible steps.',
    'Architected a database-served white-label theming platform that converted a single-brand product into a five-tenant platform from one codebase, with a theme-generation CLI and operations workflow that moved partner onboarding off the engineering backlog.',
    'Designed and published a reusable TypeScript/Kendo data-grid library used across 20+ tables, centralizing column behavior while moving pagination, sorting, and filtering server-side for large patient datasets.',
    'Shipped a production AI provider-search assistant over a 13,000-organization directory using the OpenAI Agents SDK, with SSE streaming, persisted conversation history, guardrails, per-user rate limits, and a circuit breaker; root-caused SQL ranking defects that had been attributed to model quality.',
    'Optimized a degrading admin-dashboard query from 185ms to 2.7ms in a 2,000-patient benchmark by converting joined aggregates to correlated subquery annotations; added regression coverage for query shape and validated a failed partial optimization that was ~10× slower than the original.',
    'Raised frontend test coverage from under 50% toward 75%+ overall and 90%+ on Account Settings across 481 specs; converted fixture-mocked Cypress tests to true end-to-end coverage and added flake detection, CI parallelization, and zero-tolerance console-error gating.',
    'Built an internal admin portal from scratch with 12 operational screens for provider curation, conflict review, audit history, patient notifications, and background-import monitoring, eliminating direct production database edits as the standard workflow.',
    'Delivered HIPAA Release of Records end to end and integrated FHIR R4/DSTU2 imports across Epic, Cerner, Athena Health, and HAPI, including vendor capability checks and structured upstream error classification.',
    'Introduced production observability with Sentry across React and Django, including source maps, release tagging, and PHI scrubbing; addressed token/PII logging, client-side eval, email amplification, and other security findings.',
    'Authored 11 technical design specifications in the final 18 months covering schema design, API contracts, migration sequencing, and end-to-end test strategy, documenting alternatives and tradeoffs.',
  ],
};

export const highlights = [
  {
    title: 'Production AI Provider-Search Assistant',
    description:
      'Shipped an AI assistant over a 13,000-organization directory using the OpenAI Agents SDK — SSE streaming, persisted conversation history, guardrails, per-user rate limits, and a circuit breaker. Root-caused SQL ranking defects that had been attributed to model quality.',
    tags: ['OpenAI Agents SDK', 'SSE', 'Django', 'PostgreSQL'],
  },
  {
    title: '12 Live Framework Migrations, Zero Feature Freeze',
    description:
      'Led React 16→19, MUI v5→v9, Kendo React 9→14, Recoil→Jotai, SWR v1→v2, SurveyJS v1→v2, and CRA/webpack→Vite on a live product. Sequenced the state-management migration into seven independently shippable, revertible steps.',
    tags: ['React', 'Vite', 'Migration Strategy'],
  },
  {
    title: 'White-Label Theming Platform',
    description:
      'Architected a database-served theming platform that turned a single-brand product into a five-tenant platform from one codebase, with a theme-generation CLI and an operations workflow that moved partner onboarding off the engineering backlog.',
    tags: ['React', 'Django', 'Platform Design'],
  },
  {
    title: 'Reusable Data-Grid Library',
    description:
      'Designed and published a TypeScript/Kendo data-grid library used across 20+ tables, centralizing column behavior and moving pagination, sorting, and filtering server-side for large patient datasets.',
    tags: ['TypeScript', 'Kendo React', 'Component Libraries'],
  },
  {
    title: 'Query Optimization: 185ms → 2.7ms',
    description:
      'Diagnosed a degrading admin-dashboard query and converted joined aggregates to correlated subquery annotations, validated against a 2,000-patient benchmark. Added regression coverage after ruling out a partial optimization that was ~10× slower.',
    tags: ['PostgreSQL', 'Django ORM', 'Performance'],
  },
  {
    title: 'Test Coverage & CI Overhaul',
    description:
      'Raised frontend test coverage from under 50% toward 75%+ overall (90%+ on Account Settings) across 481 specs. Converted fixture-mocked Cypress tests to true end-to-end coverage, plus flake detection, CI parallelization, and console-error gating.',
    tags: ['Cypress', 'Jest', 'GitHub Actions'],
  },
  {
    title: 'Internal Admin Portal, Built from Scratch',
    description:
      '12 operational screens for provider curation, conflict review, audit history, patient notifications, and background-import monitoring — eliminating direct production database edits as the standard workflow.',
    tags: ['React', 'Django REST Framework'],
  },
  {
    title: 'HIPAA Release of Records & EHR Integrations',
    description:
      'Delivered HIPAA Release of Records end to end and integrated FHIR R4/DSTU2 imports across Epic, Cerner, Athena Health, and HAPI, including vendor capability checks and structured upstream error classification.',
    tags: ['FHIR R4/DSTU2', 'HIPAA', 'EHR'],
  },
];

export const skills = [
  {
    category: 'Frontend',
    items: [
      'React 16–19',
      'TypeScript',
      'JavaScript / ES2022+',
      'MUI 5–9',
      'Kendo React 9–14',
      'Jotai',
      'Recoil',
      'SWR',
      'SurveyJS',
      'Vite',
      'Responsive Design',
      'WCAG 2.1 AA',
    ],
  },
  {
    category: 'Backend & Data',
    items: [
      'Django',
      'Django REST Framework',
      'Python',
      'PostgreSQL',
      'Redis',
      'REST APIs',
      'SQL / Query Optimization',
      'Derived Data Models',
    ],
  },
  {
    category: 'AI & Integrations',
    items: [
      'OpenAI Agents SDK / ChatKit',
      'SSE Streaming',
      'Tool Calling',
      'Prompt Guardrails',
      'Rate Limiting',
      'Circuit Breakers',
      'FHIR R4/DSTU2',
      'EHR Integrations',
    ],
  },
  {
    category: 'Testing & Delivery',
    items: [
      'Cypress',
      'Jest',
      'React Testing Library',
      'Vitest',
      'pytest',
      'E2E Testing',
      'GitHub Actions',
      'Git',
      'Docker / docker-compose',
      'Sentry',
    ],
  },
  {
    category: 'Cloud & Services',
    items: ['AWS Cognito', 'S3', 'SES', 'SQS', 'EKS', 'Postmark', 'Zapier'],
  },
];

export const education = {
  degree: 'M.A. in Kinesiology',
  school: 'University of Northern Iowa',
  detail: 'Graduate GPA: 4.0',
};

export const nav = [
  { href: '#experience', label: 'Experience' },
  { href: '#highlights', label: 'Highlights' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];
