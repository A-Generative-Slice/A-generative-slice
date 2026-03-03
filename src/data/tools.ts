export interface Tool {
    id: string;
    name: string;
    description: string;
    price: number | null;
    priceLabel?: string;
    currency: string;
    category: string;
    features: string[];
    badge?: string;
    buyLink?: string;
    repoUrl?: string;
    language?: string;
    stars?: number;
}

export interface Service {
    id: string;
    name: string;
    description: string;
    icon: string;
}

export const categories = [
    'All',
    'Automations',
    'AI Chatbots',
    'Blender Plugins',
    'After Effects',
    'Figma',
    'Spline',
    'Offline Tools',
    'Web Development',
] as const;

// === Downloadable Tools / Products ===
export const tools: Tool[] = [
    // ──────────────── AUTOMATIONS ────────────────
    {
        id: 'leadpitch',
        name: 'LeadPitch',
        description: 'AI-powered lead scraping and sales pitch generator. Automates outreach emails via GitHub Actions with human-sounding copy.',
        price: 200,
        currency: '₹',
        category: 'Automations',
        features: ['AI pitch generation', 'Lead scraping', 'GitHub Actions workflow', 'CSV lead management'],
        repoUrl: 'https://github.com/A-Generative-Slice/LeadPitch',
        language: 'Python',
        buyLink: '#',
    },
    {
        id: 'jobpitch',
        name: 'JobPitch',
        description: 'Automated job application pitcher. Scrapes opportunities, generates tailored cover letters, and sends applications at scale.',
        price: 150,
        currency: '₹',
        category: 'Automations',
        features: ['Job scraping pipeline', 'AI cover letters', 'Batch applications', 'Custom templates'],
        repoUrl: 'https://github.com/smdhussain06/JobPitch',
        language: 'Python',
        buyLink: '#',
    },
    {
        id: 'linkedin-auto',
        name: 'LinkedIn Post Automation',
        description: 'Schedule and auto-publish LinkedIn posts with AI-enhanced captions. Grow your professional brand on autopilot.',
        price: 250,
        currency: '₹',
        category: 'Automations',
        features: ['Auto-scheduling', 'AI caption writing', 'Analytics tracking', 'Multi-account support'],
        badge: 'Popular',
        buyLink: '#',
    },
    {
        id: 'comment-auto',
        name: 'Comment Automation',
        description: 'AI-powered comment engagement bot. Automatically reply to comments across platforms with context-aware, natural responses.',
        price: 200,
        currency: '₹',
        category: 'Automations',
        features: ['Context-aware replies', 'Multi-platform', 'Spam filtering', 'Tone customization'],
        buyLink: '#',
    },
    {
        id: 'yt-shorts-auto',
        name: 'YouTube Shorts Post Automation',
        description: 'Auto-upload and schedule YouTube Shorts with optimized titles, tags, and thumbnails. Boost your short-form content game.',
        price: 300,
        currency: '₹',
        category: 'Automations',
        features: ['Auto-upload & schedule', 'AI title & tags', 'Thumbnail generation', 'Performance analytics'],
        badge: 'New',
        buyLink: '#',
    },
    {
        id: 'insta-post-auto',
        name: 'Instagram Post Automation',
        description: 'Schedule posts, reels, and stories with AI captions and hashtag optimization. Grow your Instagram presence effortlessly.',
        price: 250,
        currency: '₹',
        category: 'Automations',
        features: ['Post & reel scheduling', 'AI captions', 'Hashtag optimization', 'Engagement analytics'],
        buyLink: '#',
    },

    // ──────────────── AI CHATBOTS ────────────────
    {
        id: 'insta-chatbot',
        name: 'Instagram Chatbot',
        description: 'AI chatbot for Instagram DMs. Auto-reply, lead capture, and FAQ handling — all directly inside Instagram.',
        price: 350,
        currency: '₹',
        category: 'AI Chatbots',
        features: ['Instagram DM automation', 'Lead capture forms', 'FAQ auto-replies', 'Custom flows'],
        buyLink: '#',
    },
    {
        id: 'whatsapp-chatbot',
        name: 'WhatsApp Chatbot',
        description: 'Production-ready AI chatbot for WhatsApp Business. Automate support, bookings, and lead capture with intelligent flows.',
        price: 300,
        currency: '₹',
        category: 'AI Chatbots',
        features: ['WhatsApp Business API', 'Natural language AI', 'Booking automation', 'Lead capture'],
        badge: 'Popular',
        repoUrl: 'https://github.com/A-Generative-Slice/Chatbot',
        language: 'JavaScript',
        stars: 1,
        buyLink: '#',
    },
    {
        id: 'telegram-chatbot',
        name: 'Telegram Chatbot',
        description: 'Feature-rich Telegram bot with AI responses, group moderation, and custom command handling. Deploy in minutes.',
        price: 250,
        currency: '₹',
        category: 'AI Chatbots',
        features: ['AI conversation engine', 'Group moderation', 'Custom commands', 'Inline queries'],
        buyLink: '#',
    },
    {
        id: 'website-chatbot',
        name: 'Custom Website Chatbot',
        description: 'Embeddable AI chatbot widget for any website. Collects user data, answers FAQs, and captures leads automatically.',
        price: 400,
        currency: '₹',
        category: 'AI Chatbots',
        features: ['Embeddable widget', 'User data collection', 'CRM integration', 'Custom branding'],
        badge: 'Premium',
        repoUrl: 'https://github.com/A-Generative-Slice/bot',
        language: 'JavaScript',
        buyLink: '#',
    },

    // ──────────────── BLENDER PLUGINS ────────────────
    {
        id: 'blender-lowpoly',
        name: 'Low Poly Object Maker',
        description: 'Generate beautiful low-poly 3D objects from text prompts directly inside Blender. AI-powered mesh generation with one click.',
        price: 100,
        currency: '₹',
        category: 'Blender Plugins',
        features: ['Text-to-3D generation', 'Low-poly presets', 'Material auto-assign', 'Batch generation'],
        badge: 'Best Seller',
        buyLink: '#',
    },
    {
        id: 'blender-webview',
        name: 'Web View 3D Generator',
        description: 'Prompt-based 3D object generator optimized for web. Export directly to GLTF/GLB for Three.js and web viewers.',
        price: 150,
        currency: '₹',
        category: 'Blender Plugins',
        features: ['Web-optimized output', 'GLTF/GLB export', 'Prompt-based creation', 'LOD generation'],
        buyLink: '#',
    },
    {
        id: 'blender-product',
        name: '3D Product Dev Plugin',
        description: 'Professional 3D product development pipeline in Blender. Studio lighting, turntable renders, and e-commerce ready outputs.',
        price: 200,
        currency: '₹',
        category: 'Blender Plugins',
        features: ['Studio lighting setups', 'Turntable animations', 'E-commerce renders', 'Material library'],
        buyLink: '#',
    },
    {
        id: 'blender-icons',
        name: 'Low Poly Icons & Assets',
        description: 'Generate low-poly icon sets and UI assets from prompts. Perfect for game UIs, app icons, and web design elements.',
        price: 75,
        currency: '₹',
        category: 'Blender Plugins',
        features: ['Icon set generation', 'Multiple styles', 'SVG & PNG export', 'Consistent design system'],
        buyLink: '#',
    },

    // ──────────────── AFTER EFFECTS ────────────────
    {
        id: 'ae-mograph',
        name: 'Motion Graphics Elements',
        description: 'Pre-built motion graphics toolkit for After Effects. Titles, transitions, lower thirds, and kinetic typography — all customizable.',
        price: 300,
        currency: '₹',
        category: 'After Effects',
        features: ['50+ motion templates', 'Kinetic typography', 'Smooth transitions', 'Color customization'],
        badge: 'Popular',
        buyLink: '#',
    },
    {
        id: 'ae-saas-showcase',
        name: 'SaaS App Showcase Template',
        description: 'Professional SaaS product showcase template for After Effects. Device mockups, feature highlights, and app store previews.',
        price: 250,
        currency: '₹',
        category: 'After Effects',
        features: ['Device mockups', 'Feature callouts', 'App store previews', 'Customizable colors'],
        buyLink: '#',
    },
    {
        id: 'ae-ui-animations',
        name: 'UI Animations Pack',
        description: 'Micro-interaction and UI animation library for After Effects. Buttons, loaders, menus, and scroll effects — ready to customize.',
        price: 200,
        currency: '₹',
        category: 'After Effects',
        features: ['Micro-interactions', 'Loader animations', 'Menu transitions', 'Scroll animations'],
        buyLink: '#',
    },

    // ──────────────── FIGMA ────────────────
    {
        id: 'figma-antigravity',
        name: 'Antigravity MCP for Figma',
        description: 'MCP-powered Figma plugin. Generate UI components, layouts, and design systems from natural language prompts.',
        price: 200,
        currency: '₹',
        category: 'Figma',
        features: ['AI layout generation', 'Component builder', 'Design system sync', 'Prompt-to-UI'],
        badge: 'New',
        buyLink: '#',
    },
    {
        id: 'figma-glass-ui',
        name: 'Glassmorphism UI Kit',
        description: 'Premium glassmorphism UI kit for Figma. 100+ components with blur effects, frosted glass cards, and modern dark themes.',
        price: 150,
        currency: '₹',
        category: 'Figma',
        features: ['100+ components', 'Dark & light modes', 'Auto-layout', 'Design tokens'],
        badge: 'Popular',
        buyLink: '#',
    },

    // ──────────────── SPLINE ────────────────
    {
        id: 'spline-webapp',
        name: '3D Interactive Web Apps',
        description: 'Custom 3D interactive web experiences built with Spline. Cursor-tracking, scroll animations, and immersive product showcases.',
        price: 500,
        currency: '₹',
        category: 'Spline',
        features: ['Cursor tracking', 'Scroll animations', 'Product showcases', 'Embed-ready'],
        badge: 'Premium',
        buyLink: '#contact',
    },
    {
        id: 'spline-icons',
        name: '3D Icon Set — Spline Based',
        description: 'Beautiful 3D icon set built in Spline. Interactive, animated, and ready to embed on any website. Perfect for SaaS landing pages.',
        price: 200,
        currency: '₹',
        category: 'Spline',
        features: ['Animated 3D icons', 'Hover interactions', 'Web-embed ready', 'Customizable colors'],
        buyLink: '#',
    },

    // ──────────────── OFFLINE TOOLS ────────────────
    {
        id: 'litelabs-mcp',
        name: 'MCP Local Labs',
        description: 'AI-powered local file analyser running on MCP protocol. Process, analyze, and transform files completely offline. Your data stays yours.',
        price: 150,
        currency: '₹',
        category: 'Offline Tools',
        features: ['AI file analysis', 'MCP protocol', 'Fully offline', 'Multi-format support'],
        repoUrl: 'https://github.com/A-Generative-Slice/LiteLabs-MCP',
        language: 'TypeScript',
        buyLink: '#',
    },
    {
        id: 'lamcap',
        name: 'LAMCAP — Offline App Builder',
        description: 'Build apps using LLMs completely offline. Rust-powered runtime with MCP integration for local development without internet.',
        price: 200,
        currency: '₹',
        category: 'Offline Tools',
        features: ['Offline LLM runtime', 'MCP integration', 'Rust-powered', 'App scaffolding'],
        badge: 'Coming Soon',
        repoUrl: 'https://github.com/smdhussain06/LAMCAP',
        language: 'Rust',
        buyLink: '#',
    },
    {
        id: 'offline-chatbot',
        name: 'Offline Custom Chatbot',
        description: 'Deploy a private AI chatbot that runs entirely on your device. No API keys, no internet, no data leaks. Powered by Ollama.',
        price: 100,
        currency: '₹',
        category: 'Offline Tools',
        features: ['Zero internet needed', 'Ollama-powered', 'Custom training', 'PC & Android'],
        badge: '⭐ 5 Stars',
        repoUrl: 'https://github.com/smdhussain06/KaiPulla-offline-assistant',
        language: 'Python',
        stars: 5,
        buyLink: '#',
    },

    // ──────────────── WEB DEVELOPMENT ────────────────
    {
        id: 'portfolio-website',
        name: 'Portfolio Website',
        description: 'Stunning personal or business portfolio with modern animations, glassmorphism UI, and SEO optimization.',
        price: 1999,
        currency: '₹',
        category: 'Web Development',
        features: ['Glassmorphism UI', 'Responsive design', 'SEO optimized', 'Contact integration'],
        badge: 'Best Seller',
        buyLink: '#contact',
    },
    {
        id: 'ecommerce-website',
        name: 'E-Commerce Website',
        description: 'Full-stack e-commerce with payment gateway, admin dashboard, inventory management, and mobile-optimized checkout.',
        price: 19999,
        currency: '₹',
        category: 'Web Development',
        features: ['Payment gateway', 'Admin dashboard', 'Inventory system', 'Mobile checkout'],
        badge: 'Enterprise',
        buyLink: '#contact',
    },
    {
        id: 'cloudjarvis',
        name: 'CloudJarvis',
        description: 'Cloud-based AI assistant backend. Deploy your own Jarvis-style AI with API integrations and natural language interfaces.',
        price: 5999,
        currency: '₹',
        category: 'Web Development',
        features: ['Cloud AI backend', 'API integrations', 'NL interface', 'Scalable'],
        badge: 'Premium',
        repoUrl: 'https://github.com/smdhussain06/cloudJarvis',
        language: 'Python',
        buyLink: '#',
    },
];

// === Services (Custom Work) ===
export const services: Service[] = [
    {
        id: 'digital-marketing',
        name: 'Digital Marketing',
        description: 'Data-driven social media strategy, SEO, and targeted campaigns to boost your brand visibility and generate leads.',
        icon: '📈',
    },
    {
        id: 'saas-software',
        name: 'SaaS & Custom Software',
        description: 'End-to-end SaaS product development — from MVP to scale. Cloud-native, subscription-ready, built to grow.',
        icon: '☁️',
    },
    {
        id: 'content-creation',
        name: 'Content Creation',
        description: 'Professional content for social media, blogs, and marketing campaigns. Visual, video, and written — all AI-enhanced.',
        icon: '🎬',
    },
    {
        id: 'ai-awareness',
        name: 'AI Awareness Programs',
        description: 'Workshops, seminars, and training sessions on AI, prompt engineering, and digital tools for students and businesses.',
        icon: '🧠',
    },
];
