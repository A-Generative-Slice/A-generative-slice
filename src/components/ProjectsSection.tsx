import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Globe2, Send, ArrowUpRight, Upload,
    UtensilsCrossed, Cake, ReceiptText, DraftingCompass, Plane,
    Store, FlaskConical, Warehouse, Film, Scissors,
    CheckCircle2
} from 'lucide-react';
import { submitForm, type LeadFormData } from '../utils/formSubmit';
import { formConfig } from '../data/config';

interface ClientCaseStudy {
    id: string;
    client: string;
    vertical: 'Hospitality & F&B' | 'Architecture & Real Estate' | 'Luxury E-Commerce & Retail' | 'Haute Couture';
    deliverable: string;
    tagline: string;
    icon: React.ReactNode;
    challenge: string;
    solution: string;
    impact: string;
    stack: string[];
    link?: string;
    mockupType: 'mobile-pwa' | 'desktop-portal' | 'interactive-3d' | 'editorial-lookbook';
}

const clientCaseStudies: ClientCaseStudy[] = [
    // 1. Hospitality & F&B
    {
        id: 'sree-ambal',
        client: 'Sree Ambal Catering',
        vertical: 'Hospitality & F&B',
        deliverable: 'Offline PWA + Firestore Logistics',
        tagline: 'Mobile-first bilingual catering inventory and hall logistics application.',
        icon: <UtensilsCrossed className="w-6 h-6 text-white" />,
        challenge: 'Distributed wedding halls across Tamil Nadu with zero cellular connectivity caused manual stock registers to fail, creating massive food wastage and fulfillment delays.',
        solution: 'Built an offline-first Progressive Web App (PWA) with client-side IndexedDB local caching, Firestore background synchronization, and mandatory photo bill auditing.',
        impact: 'Zero fulfillment discrepancies across 200+ master catalog ingredients with 100% offline uptime at remote convention centres.',
        stack: ['PWA', 'Firestore', 'IndexedDB', 'Service Workers', 'Tailwind CSS'],
        link: 'https://www.sreeambalcateringservice.com/',
        mockupType: 'mobile-pwa'
    },
    {
        id: 'your-huckleberry',
        client: 'Your Huckleberry',
        vertical: 'Hospitality & F&B',
        deliverable: 'Artisanal Bakery & Cloud Kitchen Ordering Hub',
        tagline: 'Custom cake builder and automated ordering workflow for Thousand Lights boutique.',
        icon: <Cake className="w-6 h-6 text-white" />,
        challenge: 'Boutique custom cake bakery was flooded with unstructured Instagram DMs and manual pricing calculations, causing dropped orders and production mismatches.',
        solution: 'Engineered a bespoke ordering hub featuring an interactive multi-tier cake configurator, automated delivery slot scheduling, and direct WhatsApp payload checkout.',
        impact: 'Streamlined order fulfillment turnaround and converted social visitors into confirmed, paid custom cake orders on autopilot.',
        stack: ['React 19', 'Framer Motion', 'WhatsApp API', 'Tailwind CSS'],
        link: 'https://github.com/A-Generative-Slice/huckleberry.inn',
        mockupType: 'mobile-pwa'
    },
    {
        id: 'arusuvai-arasu',
        client: 'Arusuvai Arasu',
        vertical: 'Hospitality & F&B',
        deliverable: '60-Sec Automated Banquet Quote Generator',
        tagline: 'Multi-hall banquet pricing engine with instantaneous PDF proposal generation.',
        icon: <ReceiptText className="w-6 h-6 text-white" />,
        challenge: 'High-volume wedding catering prospects waited 24 to 48 hours for manual banquet estimates across variable guest counts and customized multi-course menus.',
        solution: 'Designed an instantaneous algorithmic pricing calculator that computes headcount costs, hall logistics, and tiered menus into an official branded PDF in 60 seconds.',
        impact: 'Cut proposal turnaround from 48 hours to under 1 minute, accelerating banquet deal closures during peak Tamil wedding booking windows.',
        stack: ['React', 'TypeScript', 'jsPDF', 'Local-First Architecture'],
        link: 'https://github.com/A-Generative-Slice/arusuvaiarasu',
        mockupType: 'desktop-portal'
    },

    // 2. Architecture & Real Estate
    {
        id: 'nas-design',
        client: 'NAS Design & Construction',
        vertical: 'Architecture & Real Estate',
        deliverable: 'Interactive 3D Architectural Portfolio',
        tagline: 'Physics-based luxury villa showcase and turnkey civil engineering platform.',
        icon: <DraftingCompass className="w-6 h-6 text-white" />,
        challenge: 'Traditional static architectural photos failed to convey the scale, luxury finishes, and engineering precision required to attract institutional and NRI villa buyers.',
        solution: 'Architected a physics-based, interactive web showcase with 3D project fan cards, fluid GSAP layout transitions, and high-fidelity project walkthroughs.',
        impact: 'Elevated international client brand equity, aligning the digital presence with the exact luxury standards of their physical turnkey constructions.',
        stack: ['React', 'Three.js', 'GSAP', 'Tailwind CSS', 'Framer Motion'],
        link: 'https://nasdesignconstruction.com/',
        mockupType: 'interactive-3d'
    },
    {
        id: 'nas-internationals',
        client: 'NAS Internationals',
        vertical: 'Architecture & Real Estate',
        deliverable: 'Luxury Travel & Visa Consulting Portal',
        tagline: 'AI-assisted document verification and international travel consultation portal.',
        icon: <Plane className="w-6 h-6 text-white" />,
        challenge: 'Manual document verification for global visa processing caused frequent application errors, administrative friction, and high customer anxiety.',
        solution: 'Built a 100% digital portal with Google GenAI pre-flight document auditing, real-time application milestone tracking, and Supabase client data vaults.',
        impact: 'Reduced embassy visa document resubmission rates by 60% and gave applicants transparent, self-serve status updates 24/7.',
        stack: ['Google GenAI', 'Supabase', 'Next.js', 'Tailwind CSS'],
        link: 'https://github.com/A-Generative-Slice/NasInternationals',
        mockupType: 'desktop-portal'
    },

    // 3. Luxury E-Commerce & Retail
    {
        id: 'velvet-trunk',
        client: 'Velvet Trunk',
        vertical: 'Luxury E-Commerce & Retail',
        deliverable: 'Exhibition Floorplan & Stall Booking Platform',
        tagline: 'Interactive spatial stall reservation engine with automated invoice generation.',
        icon: <Store className="w-6 h-6 text-white" />,
        challenge: 'Organizers of luxury pop-up fashion exhibitions faced double-booking conflicts and confusing manual booth selection over static PDF maps.',
        solution: 'Developed an interactive spatial floorplan booking engine mapping F-Series and S-Series booths with real-time slot reservation and automated jsPDF invoicing.',
        impact: '100% digital booth reservation and zero layout disputes, selling out premium exhibition inventory weeks before event opening.',
        stack: ['Interactive SVG Floorplan', 'React', 'jsPDF', 'Tailwind CSS'],
        link: 'https://github.com/A-Generative-Slice/VelvetTrunk',
        mockupType: 'desktop-portal'
    },
    {
        id: 'rose-chemicals',
        client: 'Rose Chemicals',
        vertical: 'Luxury E-Commerce & Retail',
        deliverable: 'B2B Industrial Catalog & Conversational Ordering',
        tagline: 'Full-stack B2B chemical manufacturing platform with Sarvam AI WhatsApp ordering.',
        icon: <FlaskConical className="w-6 h-6 text-white" />,
        challenge: 'Industrial chemical buyers relied on antiquated manual order forms, slow phone dispatches, and delayed paper invoicing across multiple manufacturing hubs.',
        solution: 'Engineered an automated Next.js 14 catalog with Razorpay automated payment reconciliation and integrated Sarvam AI WhatsApp conversational ordering.',
        impact: 'Enabled 24/7 autonomous order taking via WhatsApp with automated invoice delivery directly to factory procurement heads.',
        stack: ['Next.js 14', 'TypeScript', 'Razorpay', 'Sarvam AI', 'WhatsApp API'],
        link: 'https://rosechemicals.in/',
        mockupType: 'desktop-portal'
    },
    {
        id: 'project-mald',
        client: 'ProjectMald',
        vertical: 'Luxury E-Commerce & Retail',
        deliverable: 'Enterprise Trading ERP & OCR Supply Chain',
        tagline: 'Multi-godown stock syncing with Tesseract OCR invoice intelligence.',
        icon: <Warehouse className="w-6 h-6 text-white" />,
        challenge: 'Wholesale trading operations struggled with paper truck delivery notes, fragmented godowns, and manual bookkeeping discrepancies.',
        solution: 'Built a multi-warehouse trading ERP featuring automated stock ledger synchronization, Tesseract OCR for physical document scanning, and Gemini invoice parsing.',
        impact: 'Cut bill processing time by 90% and provided management with instant, single-pane inventory visibility across all regional warehouses.',
        stack: ['Python', 'FastAPI', 'Tesseract OCR', 'Google Gemini AI', 'PostgreSQL', 'React'],
        link: 'https://github.com/A-Generative-Slice/ProjectMald',
        mockupType: 'desktop-portal'
    },

    // 4. Haute Couture
    {
        id: 'h-pooja',
        client: 'H. Pooja',
        vertical: 'Haute Couture',
        deliverable: 'Film Costume Design & Bridal Wardrobe Portfolio',
        tagline: 'Cinematic costume design showcase for Tamil film industry & celebrity bridal clients.',
        icon: <Film className="w-6 h-6 text-white" />,
        challenge: 'Acclaimed film costume designer needed an accredited, high-definition digital showcase to pitch directors, production houses, and elite bridal clients.',
        solution: 'Built a cinematic dark-mode portfolio featuring filmography project breakdowns, character lookbook galleries, and direct consultation booking.',
        impact: 'Streamlined costume portfolio pitching to top South Indian feature film producers and luxury bridal styling inquiries.',
        stack: ['React', 'Framer Motion', 'Tailwind CSS', 'Cinematic Dark System'],
        link: 'https://github.com/A-Generative-Slice/portfolio-pooja',
        mockupType: 'editorial-lookbook'
    },
    {
        id: 'najeema-afrin',
        client: 'Najeema Afrin',
        vertical: 'Haute Couture',
        deliverable: 'Haute Couture Lookbook & Atelier Consultations',
        tagline: 'Interactive Victorian Glam & Handcrafted Zardozi embroidery lookbook.',
        icon: <Scissors className="w-6 h-6 text-white" />,
        challenge: 'Bespoke couture atelier lacked a luxury digital presentation to showcase intricate hand embroidery and close private international bridal commissions.',
        solution: 'Crafted an editorial lookbook with high-resolution texture zoom, runway archive showcases, and direct bespoke bridal consultation booking.',
        impact: 'Established an elite international digital presence, securing bespoke couture orders from overseas bridal clientele.',
        stack: ['React', 'Framer Motion', 'Tailwind CSS', 'Editorial Layouts'],
        link: 'https://github.com/A-Generative-Slice/portfolio-najeema-afrin',
        mockupType: 'editorial-lookbook'
    }
];

const verticals = [
    'All Projects',
    'Hospitality & F&B',
    'Architecture & Real Estate',
    'Luxury E-Commerce & Retail',
    'Haute Couture'
] as const;

export const ProjectsSection = () => {
    const [selectedVertical, setSelectedVertical] = useState<string>('All Projects');
    const [formData, setFormData] = useState<LeadFormData>({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        category: 'Hospitality & F&B',
        message: '',
        attachment: null
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const filteredProjects = selectedVertical === 'All Projects'
        ? clientCaseStudies
        : clientCaseStudies.filter(p => p.vertical === selectedVertical);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        const result = await submitForm(formData, {
            subject: `Client Brief: ${formData.category} from ${formData.fullName} (${formData.company || 'Direct'})`,
            formType: 'Client Project Inquiry'
        });

        if (result.success) {
            setStatus('sent');
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                company: '',
                category: 'Hospitality & F&B',
                message: '',
                attachment: null
            });
            if (fileInputRef.current) fileInputRef.current.value = '';
            setTimeout(() => setStatus('idle'), 4000);
        } else {
            // Fallback to mailto
            const subjectStr = encodeURIComponent(`Project Inquiry: ${formData.category} from ${formData.fullName}`);
            const bodyStr = encodeURIComponent(
                `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nCategory: ${formData.category}\n\nProject Scope:\n${formData.message}`
            );
            window.open(`mailto:${formConfig.businessEmail}?subject=${subjectStr}&body=${bodyStr}`, '_blank');
            setStatus('idle');
        }
    };

    return (
        <section id="projects" className="py-32 px-6 relative z-20 bg-[#fafafa] dark:bg-[#0a0a0a] overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-[#FF5C00]/20 to-transparent" />

            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-[#FF5C00] font-bold tracking-widest uppercase text-xs mb-4 px-3 py-1 rounded-full bg-[#FF5C00]/10 border border-[#FF5C00]/20"
                    >
                        <Globe2 className="w-3.5 h-3.5" />
                        Client Deliverables & Case Studies
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-[#0F172A] dark:text-white mb-6 tracking-tight font-heading"
                    >
                        Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A]">Client Deployments</span>
                    </motion.h2>
                    <p className="text-[#64748B] dark:text-white/60 text-lg max-w-2xl mx-auto">
                        Explore our production-grade platforms across Hospitality, Architecture, Luxury E-Commerce, and Haute Couture.
                    </p>
                </div>

                {/* Vertical Filter Tabs */}
                <div className="flex items-center justify-center gap-2 flex-wrap mb-16">
                    {verticals.map((v) => (
                        <button
                            key={v}
                            onClick={() => setSelectedVertical(v)}
                            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                                selectedVertical === v
                                    ? 'bg-[#FF5C00] text-white shadow-lg shadow-[#FF5C00]/25 scale-105'
                                    : 'bg-black/5 dark:bg-white/5 text-[#0F172A]/70 dark:text-white/60 hover:bg-black/10 dark:hover:bg-white/10'
                            }`}
                        >
                            {v}
                        </button>
                    ))}
                </div>

                {/* Rich Visual Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-[#111111] p-8 flex flex-col justify-between hover:border-[#FF5C00]/30 transition-all duration-300 shadow-xl shadow-black/5 dark:shadow-none group hover:-translate-y-1"
                            >
                                <div>
                                    {/* Card Header */}
                                    <div className="flex items-center justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-4">
                                            {/* Vector Gradient Icon */}
                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF5C00] to-[#FF8C1A] flex items-center justify-center shrink-0 shadow-lg shadow-[#FF5C00]/20 border border-white/20">
                                                {project.icon}
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF5C00] block mb-0.5">
                                                    {project.vertical}
                                                </span>
                                                <h3 className="text-2xl font-black text-[#0F172A] dark:text-white tracking-tight font-heading">
                                                    {project.client}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Device Mockup Badge */}
                                        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[11px] font-mono text-[#64748B] dark:text-white/40">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                            {project.mockupType}
                                        </div>
                                    </div>

                                    {/* Deliverable Headline */}
                                    <div className="mb-6 pb-4 border-b border-black/5 dark:border-white/5">
                                        <h4 className="text-base font-bold text-[#0F172A] dark:text-white mb-1">
                                            {project.deliverable}
                                        </h4>
                                        <p className="text-xs text-[#64748B] dark:text-white/50 leading-relaxed">
                                            {project.tagline}
                                        </p>
                                    </div>

                                    {/* Challenge, Solution & Impact Bullets */}
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-start gap-2.5">
                                            <div className="w-5 h-5 rounded-md bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                                                ✕
                                            </div>
                                            <p className="text-xs text-[#0F172A]/80 dark:text-white/70 leading-relaxed">
                                                <strong className="text-rose-500">The Challenge:</strong> {project.challenge}
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-2.5">
                                            <div className="w-5 h-5 rounded-md bg-[#FF5C00]/10 text-[#FF5C00] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                                                ⚙
                                            </div>
                                            <p className="text-xs text-[#0F172A]/80 dark:text-white/70 leading-relaxed">
                                                <strong className="text-[#FF5C00]">Engineered Solution:</strong> {project.solution}
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-2.5">
                                            <div className="w-5 h-5 rounded-md bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                                                ✓
                                            </div>
                                            <p className="text-xs text-[#0F172A]/80 dark:text-white/70 leading-relaxed">
                                                <strong className="text-emerald-500">Business Impact:</strong> {project.impact}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Tech Architecture Stack */}
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {project.stack.map(tech => (
                                            <span 
                                                key={tech} 
                                                className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-black/5 dark:bg-white/5 text-[#0F172A]/70 dark:text-white/60 border border-black/5 dark:border-white/5"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Live Demo Action Link */}
                                <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                                        <CheckCircle2 className="w-3.5 h-3.5" /> Production Deployed
                                    </span>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FF5C00] text-white font-bold text-xs hover:bg-[#FF8C1A] transition-all shadow-md shadow-[#FF5C00]/20"
                                        >
                                            View Live System <ArrowUpRight className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Structured Client Brief Form (Zoho CRM & Supabase Standard Contract) */}
                <div id="project-brief" className="max-w-4xl mx-auto">
                    <div className="rounded-[2.5rem] border border-black/5 dark:border-white/10 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                        <div className="text-center mb-10">
                            <span className="text-[#FF5C00] font-bold text-xs uppercase tracking-widest block mb-2">
                                Direct Consultation & Architecture
                            </span>
                            <h3 className="text-3xl md:text-4xl font-black text-[#0F172A] dark:text-white mb-3 tracking-tight font-heading">
                                Commission a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A]">Client Project</span>
                            </h3>
                            <p className="text-[#64748B] dark:text-white/60 text-sm max-w-xl mx-auto">
                                Submit your scope directly to our architecture pipeline. Responses are routed directly into our Zoho CRM & executive dispatch desk.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50 mb-1.5">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-[#0F172A] dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-[#FF5C00] transition-colors"
                                        placeholder="e.g. Rajesh Kumar"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50 mb-1.5">
                                        Business Email *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-[#0F172A] dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-[#FF5C00] transition-colors"
                                        placeholder="e.g. rajesh@company.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50 mb-1.5">
                                        Mobile / WhatsApp *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-[#0F172A] dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-[#FF5C00] transition-colors"
                                        placeholder="+91 98400 12345"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50 mb-1.5">
                                        Company / Brand Name
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-[#0F172A] dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-[#FF5C00] transition-colors"
                                        placeholder="e.g. Nas Construction"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50 mb-1.5">
                                    Project Category *
                                </label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-[#FF5C00] transition-colors"
                                >
                                    <option value="Hospitality & F&B">Hospitality & F&B Automation</option>
                                    <option value="3D & Architecture">3D & Architecture Web Portfolio</option>
                                    <option value="Enterprise Systems">Enterprise ERP & Supply Chain Systems</option>
                                    <option value="AI & Automation">AI Agents & Workflow Automation</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50 mb-1.5">
                                    Project Scope & Requirements *
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-[#0F172A] dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-[#FF5C00] transition-colors resize-none"
                                    placeholder="Briefly describe your objectives, timelines, and technical requirements..."
                                />
                            </div>

                            {/* Optional File Attachment */}
                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50 mb-1.5">
                                    Attach Project Brief / RFP (Optional)
                                </label>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={(e) => {
                                            const file = e.target.files?.[0] || null;
                                            setFormData(prev => ({ ...prev, attachment: file }));
                                        }}
                                        className="hidden"
                                        id="project-attachment-file"
                                    />
                                    <label
                                        htmlFor="project-attachment-file"
                                        className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-semibold text-[#0F172A] dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                                    >
                                        <Upload className="w-3.5 h-3.5 text-[#FF5C00]" />
                                        {formData.attachment ? formData.attachment.name : 'Select PDF / Brief document'}
                                    </label>
                                    {formData.attachment && (
                                        <span className="text-xs text-[#64748B] dark:text-white/40">
                                            ({(formData.attachment.size / 1024).toFixed(1)} KB)
                                        </span>
                                    )}
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={status !== 'idle'}
                                className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs text-white flex items-center justify-center gap-3 transition-all duration-300 mt-6 shadow-xl ${
                                    status === 'sent' 
                                        ? 'bg-emerald-500' 
                                        : 'bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] hover:opacity-95 shadow-[#FF5C00]/25'
                                }`}
                            >
                                {status === 'sent' ? (
                                    <>Brief Dispatched to Executive Desk ✓</>
                                ) : status === 'sending' ? (
                                    'Routing to Zoho CRM...'
                                ) : (
                                    <>Submit Project Scope <Send className="w-4 h-4" /></>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
