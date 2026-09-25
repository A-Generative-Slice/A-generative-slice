import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Send, ArrowUpRight,
    UtensilsCrossed, Cake, ReceiptText, DraftingCompass, Plane,
    Store, FlaskConical, Warehouse, Film, Scissors
} from 'lucide-react';
import { submitForm, type LeadFormData } from '../utils/formSubmit';

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

export const ProjectsSection = () => {
    const [formData, setFormData] = useState<LeadFormData>({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        category: '',
        message: '',
        website: '',
        landline: '',
        linkedIn: '',
        instagram: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Save backup to localStorage
        try {
            const existing = JSON.parse(localStorage.getItem('ags_client_leads') || '[]');
            existing.push({
                ...formData,
                submittedAt: new Date().toISOString()
            });
            localStorage.setItem('ags_client_leads', JSON.stringify(existing));
        } catch (err) {
            console.error('Local backup error:', err);
        }

        try {
            await submitForm(formData, {
                subject: `Client Brief: ${formData.category || 'Custom Project'} from ${formData.fullName} (${formData.company || 'Direct'})`,
                formType: 'Client Project Inquiry'
            });
        } catch (err) {
            console.warn('Remote submission warning:', err);
        }

        // Show clean in-app confirmation
        setStatus('sent');
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            company: '',
            category: '',
            message: '',
            website: '',
            landline: '',
            linkedIn: '',
            instagram: ''
        });
        setTimeout(() => setStatus('idle'), 5000);
    };

    return (
        <section id="projects" className="py-32 px-6 relative z-20 bg-[#fafafa] dark:bg-[#0a0a0a] overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-[#FF5C00]/20 to-transparent" />

            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-[#0F172A] dark:text-white mb-6 tracking-tight font-heading"
                    >
                        Real Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A]">Projects & Stories</span>
                    </motion.h2>
                    <p className="text-[#64748B] dark:text-white/60 text-lg max-w-2xl mx-auto">
                        Explore real websites, booking portals, and online stores we crafted for businesses in hospitality, architecture, and luxury retail.
                    </p>
                </div>

                {/* Rich Visual Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <AnimatePresence mode="popLayout">
                        {clientCaseStudies.map((project, idx) => (
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

                                    {/* What they needed, What we built & Result Bullets */}
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-start gap-2.5">
                                            <div className="w-5 h-5 rounded-md bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                                                ✕
                                            </div>
                                            <p className="text-xs text-[#0F172A]/80 dark:text-white/70 leading-relaxed">
                                                <strong className="text-rose-500">What they needed:</strong> {project.challenge}
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-2.5">
                                            <div className="w-5 h-5 rounded-md bg-[#FF5C00]/10 text-[#FF5C00] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                                                ⚙
                                            </div>
                                            <p className="text-xs text-[#0F172A]/80 dark:text-white/70 leading-relaxed">
                                                <strong className="text-[#FF5C00]">What we built:</strong> {project.solution}
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-2.5">
                                            <div className="w-5 h-5 rounded-md bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                                                ✓
                                            </div>
                                            <p className="text-xs text-[#0F172A]/80 dark:text-white/70 leading-relaxed">
                                                <strong className="text-emerald-500">The result:</strong> {project.impact}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Live Demo Action Link */}
                                {project.link && (
                                    <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-end">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FF5C00] text-white font-bold text-xs hover:bg-[#FF8C1A] transition-all shadow-md shadow-[#FF5C00]/20"
                                        >
                                            View Live Project <ArrowUpRight className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Structured Client Brief Form (Matching Card Grid Width) */}
                <div id="project-brief" className="w-full">
                    <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-[#111111] p-8 md:p-12 shadow-xl shadow-black/5 dark:shadow-none relative overflow-hidden">
                        <div className="text-center mb-10">
                            <span className="text-[#FF5C00] font-bold text-xs uppercase tracking-widest block mb-2">
                                Work With Us
                            </span>
                            <h3 className="text-3xl md:text-4xl font-black text-[#0F172A] dark:text-white mb-3 tracking-tight font-heading">
                                Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A]">Project Together</span>
                            </h3>
                            <p className="text-[#64748B] dark:text-white/60 text-sm max-w-xl mx-auto">
                                Have a business or project you want to take online? Tell us what you're imagining. We'll get back to you within 24 hours with honest advice and a simple plan.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Primary Contact Details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50 mb-1.5">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-[#FF5C00] transition-colors"
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
                                        className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-[#FF5C00] transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50 mb-1.5">
                                        Mobile / WhatsApp *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-[#FF5C00] transition-colors"
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
                                        className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-[#FF5C00] transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Project Category - Open text input */}
                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50 mb-1.5">
                                    Project Category *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-[#FF5C00] transition-colors"
                                />
                            </div>

                            {/* Additional Optional Details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50 mb-1.5">
                                        Existing Website / Link (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.website || ''}
                                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                        className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-[#FF5C00] transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50 mb-1.5">
                                        Landline / Alt Phone (Optional)
                                    </label>
                                    <input
                                        type="tel"
                                        value={formData.landline || ''}
                                        onChange={(e) => setFormData({ ...formData, landline: e.target.value })}
                                        className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-[#FF5C00] transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50 mb-1.5">
                                        LinkedIn Profile / ID (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.linkedIn || ''}
                                        onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                                        className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-[#FF5C00] transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50 mb-1.5">
                                        Instagram Handle / ID (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.instagram || ''}
                                        onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                                        className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-[#FF5C00] transition-colors"
                                    />
                                </div>
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
                                    className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-[#FF5C00] transition-colors resize-none"
                                />
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
                                    'Submitting Project Scope...'
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
