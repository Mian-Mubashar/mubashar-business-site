export const siteConfig = {
  name: 'Next Rise Solutions',
  ownerName: 'Mubashar Hanif',
  fullName: 'Next Rise Solutions — Full Stack Websites, Mobile Apps, Custom AI & Business Marketing by Mubashar Hanif',
  tagline: 'Full Stack Websites, Mobile Apps, Custom AI Solutions & Business Marketing.',
  location: 'Lahore, Pakistan · Available Worldwide',
  availability: 'Available for New Projects & Contracts',
  email: 'mubasharhanif24@gmail.com',
  phone: '+92 334-9730227',
  whatsappBaseUrl: 'https://wa.me/923349730227',
  githubUrl: 'https://github.com/Mian-Mubashar',
  linkedinUrl: 'https://www.linkedin.com/in/mubashar-hanif-71b473212/',
  copyrightYear: 2026,

  announcement: {
    badge: 'CORE SERVICES',
    text: 'Full Stack Websites • Mobile Apps • Custom AI • Business Marketing',
    href: '#services',
  },

  navLinks: [
    { label: 'Services', href: '#services' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Why Next Rise', href: '#why-next-rise' },
    { label: 'Process', href: '#process' },
    { label: 'Who I Serve', href: '#who-we-serve' },
    { label: 'FAQ', href: '#faq' },
  ],

  stats: [
    { value: '100%', label: 'End-to-End Delivery (Design to Cloud)' },
    { value: 'Full Stack', label: 'Websites & Mobile Apps' },
    { value: 'AI-Native', label: 'RAG, Vector DBs & Custom LLMs' },
    { value: 'Marketing', label: 'Meta & Google Ads ROI' },
  ],

  partners: [
    'React.js',
    'Next.js',
    'Node.js & Express',
    'React Native (iOS & Android)',
    'OpenAI APIs',
    'Pinecone Vector DB',
    'MongoDB',
    'PostgreSQL',
    'Python & LangChain',
    'Tailwind CSS',
    'Docker & AWS',
    'Meta (FB & IG) Ads',
    'Google Ads & CAPI',
  ],

  solutions: [
    {
      id: 'full-stack-web',
      pill: 'Full Stack Websites',
      title: 'Full Stack Websites & Web Apps (MERN / Next.js)',
      summary: 'High-performance business websites, SaaS platforms, and custom web portals built with clean architecture, responsive UX, and secure backend APIs.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
      liveUrl: 'https://ashburndcs.com/',
      bullets: [
        'Custom MERN stack (MongoDB, Express, React, Node.js) & Next.js',
        'RESTful & GraphQL API development with JWT / OAuth security',
        'Relational & NoSQL databases (PostgreSQL, MongoDB, Redis caching)',
        'Pixel-perfect responsive design, smooth UI animations & fast load times',
      ],
      ctaText: 'View Live Website ↗',
    },
    {
      id: 'mobile-app-dev',
      pill: 'Mobile Apps',
      title: 'Apps Development — iOS & Android (React Native)',
      summary: 'Native-grade iOS and Android mobile applications built with a single shared codebase, delivering 60fps performance and seamless app store releases.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.alaminhypermart',
      bullets: [
        'Single codebase for iOS & Android saving up to 50% time and cost',
        'Offline data synchronization, local storage & push notifications',
        'Device integrations: Camera, GPS, biometric face/fingerprint auth',
        'End-to-end publishing on Apple App Store & Google Play Console',
      ],
      ctaText: 'View on Google Play ↗',
    },
    {
      id: 'ai-chatbots-rag',
      pill: 'Custom AI',
      title: 'AI Solutions — Custom Chatbots & RAG Systems (OpenAI + Pinecone)',
      summary: 'Intelligent AI agents and assistants trained on your proprietary company data, documents, and customer queries for 24/7 automated support and lead generation.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80',
      liveUrl: 'https://coolvibeservices.com/',
      bullets: [
        'RAG (Retrieval-Augmented Generation) using Pinecone vector databases',
        'OpenAI / Claude API integration with zero-hallucination guardrails',
        '24/7 intelligent customer support chatbots & lead qualification',
        'Document embeddings: PDFs, knowledge bases, CSVs & website scrapers',
      ],
      ctaText: 'View Live Project ↗',
    },
    {
      id: 'business-marketing',
      pill: 'Business Marketing',
      title: 'Business Marketing — Paid Ads (Meta & Google)',
      summary: 'ROI-driven paid acquisition campaigns designed to generate high-intent leads and sales for your business, with server-side CAPI tracking and landing page funnels.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
      liveUrl: null,
      bullets: [
        'Laser-targeted Meta (Facebook/Instagram) & Google Search / PMax ads',
        'Full tracking setup: Meta Pixel, Conversions API (CAPI) & GA4',
        'Conversion-optimized landing page copywriting & UX structure',
        'A/B creative testing, budget scaling & weekly performance reporting',
      ],
      ctaText: 'Discuss Marketing Strategy →',
    },
    {
      id: 'custom-erp-portals',
      pill: 'Custom ERPs',
      title: 'Custom ERPs, CRMs & Business Management Systems',
      summary: 'Bespoke business management software tailored specifically to your operational workflows, replacing messy Excel sheets with centralized automation.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
      liveUrl: 'https://khanjackethouse.com/',
      bullets: [
        'Custom modules: Inventory, order processing, billing & invoicing',
        'Multi-tier role-based access control (Admin, Manager, Staff, Client)',
        'Automated reports, real-time KPI dashboards & PDF export',
        'Integrations with WhatsApp API, payment gateways & SMS alerts',
      ],
      ctaText: 'View Live System ↗',
    },
    {
      id: 'cloud-devops',
      pill: 'Cloud & DevOps',
      title: 'Cloud Deployment, CI/CD & Production DevOps',
      summary: 'Rock-solid hosting infrastructure and automated deployment pipelines ensuring your applications run with 99.9% uptime, SSL security, and speed.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
      liveUrl: null,
      bullets: [
        'Cloud deployment on AWS, Vercel, DigitalOcean, or custom Linux VPS',
        'Automated CI/CD pipelines for seamless, zero-downtime releases',
        'Docker containerization, Nginx reverse proxy & PM2 process management',
        'Custom domain setup, SSL certificates, DNS configuration & automated backups',
      ],
      ctaText: 'Deploy Your Stack →',
    },
  ],

  supportCards: [
    {
      icon: '⚡',
      title: 'Full-Stack Ownership',
      desc: 'Full stack websites, mobile apps, AI, and business marketing handled by one accountable engineer.',
    },
    {
      icon: '🎯',
      title: 'Business-Driven ROI',
      desc: 'Software & marketing built to solve real business pain points, automate operations, and generate revenue.',
    },
    {
      icon: '🧠',
      title: 'Production-Grade AI & RAG',
      desc: 'Vector databases (Pinecone), semantic embeddings, and LLM orchestration — not just basic API wrappers.',
    },
    {
      icon: '🛡️',
      title: 'Clean, Scalable Architecture',
      desc: 'Modular, well-documented code built with industry standards so your product can scale effortlessly.',
    },
    {
      icon: '🤝',
      title: 'Direct 1-on-1 Communication',
      desc: 'Zero agency middlemen or broken telephone. Direct technical consultation with Mubashar for rapid execution.',
    },
  ],

  whoWeServe: [
    {
      icon: '🚀',
      title: 'Startups & Early-Stage Founders',
      desc: 'Rapid MVP development, investor-ready UI/UX, and scalable MERN/Next.js architectures built for fast traction.',
      badge: 'Startups',
    },
    {
      icon: '🏢',
      title: 'Growing Businesses & SMEs',
      desc: 'Custom ERPs, employee portals, customer support AI chatbots, and workflow automation to cut overhead.',
      badge: 'Business ERP',
    },
    {
      icon: '🛒',
      title: 'E-Commerce & Retail Brands',
      desc: 'High-speed shopping experiences, inventory sync, WhatsApp checkout funnels, and high-ROAS Meta & Google ads.',
      badge: 'E-Commerce & Ads',
    },
    {
      icon: '💼',
      title: 'Agencies & Enterprise Teams',
      desc: 'Reliable engineering capacity for complex full-stack builds, mobile apps, and custom AI/RAG integrations.',
      badge: 'Enterprise & Agency',
    },
  ],
};

export function getWhatsAppUrl(message = 'Hello Mubashar, I would like to discuss a project with Next Rise Solutions.') {
  return `${siteConfig.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}
