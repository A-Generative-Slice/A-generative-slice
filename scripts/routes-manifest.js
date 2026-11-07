/**
 * Single source of truth for every public route's SEO head + sitemap entry.
 * Consumed by generate-routes.js (static head swap), generate-sitemap.js
 * (public/sitemap.xml) and prerender.js (headless body rendering).
 * Keep titles/descriptions in sync with src/App.tsx ROUTE_SEO + src/data/routeMeta.ts.
 */
export const SITE = 'https://agenerativeslice.com';
export const LASTMOD = '2026-11-08';

export const ROUTES = [
  {
    path: '/',
    title: 'AI Automation & Bespoke Web Systems Studio in Chennai | A Generative Slice',
    description: 'A Generative Slice is an AI automation and bespoke web systems studio in Chennai, India. We engineer agentic AI, enterprise ERPs, 3D web apps, and automated client workflows.',
    priority: '1.0', changefreq: 'weekly', sitemap: true
  },
  {
    path: '/products',
    title: 'ProdX & Slice Suite — A Generative Slice',
    description: 'Explore the Slice Suite: open-core autonomous AI products and enterprise tools including Slice3D, SliceLeads, SliceMail, SliceInbox, SlicePPT, SliceDAM, and SliceClass.',
    priority: '0.9', changefreq: 'weekly', sitemap: true
  },
  {
    path: '/projects',
    title: 'Client Deliverables & Case Studies — A Generative Slice',
    description: 'Explore real-world client deliverables across hospitality, industrial manufacturing, luxury e-commerce, architecture, and couture.',
    priority: '0.9', changefreq: 'weekly', sitemap: true
  },
  {
    path: '/services',
    title: 'Bespoke AI Engineering Services — A Generative Slice',
    description: 'Full-cycle AI architecture, custom enterprise ERPs, RAG pipelines, high-conversion web platforms, and automated workflow integrations.',
    priority: '0.8', changefreq: 'monthly', sitemap: true
  },
  {
    path: '/about',
    title: 'Our Story & Chennai Headquarters — A Generative Slice',
    description: 'Learn about A Generative Slice, our founding mission by Mohammed Hussain, student mentorship initiatives, and our Chennai AI laboratory.',
    priority: '0.8', changefreq: 'monthly', sitemap: true
  },
  {
    path: '/contact',
    title: 'Schedule a Free Strategic Consultation — A Generative Slice',
    description: 'Get in touch with A Generative Slice for 100% free initial project scoping, NDA-backed consultations, and custom architecture blueprints.',
    priority: '0.8', changefreq: 'monthly', sitemap: true
  },
  {
    path: '/careers',
    title: 'Careers & Engineering Openings — A Generative Slice',
    description: 'Join our high-agency team of AI engineers, full-stack builders, and creative problem solvers building the future of software.',
    priority: '0.7', changefreq: 'monthly', sitemap: true
  },
  {
    path: '/chennai',
    title: 'AI Automation & Custom Software Company in Chennai | A Generative Slice',
    description: 'A Generative Slice is Chennai\'s AI automation and custom software studio: six dedicated city services, eight production client systems, free first consultation.',
    priority: '0.9', changefreq: 'weekly', sitemap: true
  },
  {
    path: '/chennai/ai-automation',
    title: 'AI Automation Agency in Chennai | A Generative Slice',
    description: 'Chennai AI automation agency building agentic workflows, RAG pipelines and WhatsApp automation. Fixed quotes, 1-3 week launches, real client proof. Free consultation.',
    priority: '0.9', changefreq: 'weekly', sitemap: true
  },
  {
    path: '/chennai/custom-software',
    title: 'Custom Software Development Company in Chennai | A Generative Slice',
    description: 'Custom software development company in Chennai: ERPs, portals, PWAs and AI systems engineered end-to-end. Milestone delivery, fixed honest quotes, lasting support.',
    priority: '0.9', changefreq: 'weekly', sitemap: true
  },
  {
    path: '/chennai/web-development',
    title: 'Web Development Company in Chennai | A Generative Slice',
    description: 'Web development company in Chennai crafting fast, conversion-focused websites, 3D showcases and e-commerce. React, Vite and TypeScript. Free scoping call.',
    priority: '0.9', changefreq: 'weekly', sitemap: true
  },
  {
    path: '/chennai/erp-crm',
    title: 'ERP & CRM Development Company in Chennai | A Generative Slice',
    description: 'Chennai ERP & CRM development: trading ERPs with OCR invoicing, multi-currency FX, inventory and credit recovery. Custom-built, not forced into a template.',
    priority: '0.9', changefreq: 'weekly', sitemap: true
  },
  {
    path: '/chennai/whatsapp-automation',
    title: 'WhatsApp Business API Integration in Chennai | A Generative Slice',
    description: 'WhatsApp Business API integration in Chennai: conversational ordering, lead follow-up and support bots in Tamil and English. Official API, compliant templates.',
    priority: '0.9', changefreq: 'weekly', sitemap: true
  },
  {
    path: '/chennai/ai-chatbots',
    title: 'AI Chatbot Development Company in Chennai | A Generative Slice',
    description: 'AI chatbot development company in Chennai: RAG-grounded assistants for websites, WhatsApp and internal tools. Gemini, LangChain and Ollama. Honest fixed quotes.',
    priority: '0.9', changefreq: 'weekly', sitemap: true
  },
  {
    path: '/insights',
    title: 'Insights — Chennai Software Cost Guides & Case Studies | A Generative Slice',
    description: 'Honest pricing guides, AI automation playbooks and production case studies from A Generative Slice, Chennai. Written for business owners, not developers.',
    priority: '0.8', changefreq: 'weekly', sitemap: true
  },
  {
    path: '/insights/custom-software-cost-chennai',
    title: 'How Much Does Custom Software Cost in Chennai? (2026 Guide)',
    description: 'Transparent 2026 Chennai market ranges for websites, business apps, ERPs and AI automation — what drives cost, hidden fees to ask about, and how fixed quotes work.',
    priority: '0.7', changefreq: 'monthly', sitemap: true
  },
  {
    path: '/insights/ai-automation-real-estate-chennai',
    title: 'AI Automation for Chennai Real Estate: Leads & Site Visits',
    description: 'A practical playbook for Chennai real estate: stop portal lead leakage, instant WhatsApp follow-up, Tamil AI qualification and automated site-visit booking.',
    priority: '0.7', changefreq: 'monthly', sitemap: true
  },
  {
    path: '/insights/sree-ambal-catering',
    title: 'Case Study: Offline-First Banquet Inventory | Sree Ambal Catering',
    description: 'How A Generative Slice built an offline-first PWA banquet inventory and Tamil/English catalog for Sree Ambal Catering\'s remote venues across Chennai.',
    priority: '0.7', changefreq: 'monthly', sitemap: true
  },
  {
    path: '/insights/rose-chemicals',
    title: 'Case Study: WhatsApp Ordering for Rose Chemicals | A Generative Slice',
    description: 'How Rose Chemicals replaced phone-order transcription with a B2B distribution portal and Sarvam AI conversational WhatsApp ordering in the local language.',
    priority: '0.7', changefreq: 'monthly', sitemap: true
  },
  {
    path: '/privacy',
    title: 'Privacy Policy — A Generative Slice',
    description: 'How A Generative Slice collects, uses, and protects your data across contact forms, the Slice Suite, and authorized OAuth integrations with Meta, LinkedIn, X, Reddit, and Google.',
    priority: '0.3', changefreq: 'yearly', sitemap: true
  },
  {
    path: '/terms',
    title: 'Terms of Service — A Generative Slice',
    description: 'The terms governing A Generative Slice studio services, the Slice Suite products, and API-driven automations. Governed by the laws of Chennai, Tamil Nadu, India.',
    priority: '0.3', changefreq: 'yearly', sitemap: true
  },
  {
    path: '/data-deletion',
    title: 'Data Deletion Instructions — A Generative Slice',
    description: 'Request immediate deletion of your data or revoke OAuth app permissions from A Generative Slice. Step-by-step instructions with a 48-hour processing SLA.',
    priority: '0.3', changefreq: 'yearly', sitemap: true
  },
  {
    path: '/callback',
    title: 'OAuth 2.0 Redirect Endpoint — A Generative Slice',
    description: 'Universal OAuth 2.0 redirect and webhook receiver endpoint for A Generative Slice integrations with Meta, X, LinkedIn, Reddit, and Google Cloud.',
    priority: '0.1', changefreq: 'yearly', sitemap: false
  }
];

/** Canonical URL form: trailing slash, matching GitHub Pages' 301 target. */
export const canonicalUrl = (p) => `${SITE}${p === '/' ? '/' : `${p}/`}`;

/** Escape text for safe injection into HTML titles and attribute values. */
export const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');