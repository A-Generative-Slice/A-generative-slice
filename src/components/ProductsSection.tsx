import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    ArrowUpRight, Send, CheckCircle2,
    Boxes, Zap, Bot, Cpu, GraduationCap, Sparkles,
    Presentation, FolderKanban
} from 'lucide-react';
import { submitForm, type LeadFormData } from '../utils/formSubmit';

interface SliceProduct {
    id: string;
    name: string;
    category: string;
    tagline: string;
    description: string;
    icon: React.ReactNode;
    benefits: string[];
}

const sliceProducts: SliceProduct[] = [
    {
        id: 'slice-3d',
        name: 'Slice3D',
        category: 'Interactive 3D Product Showcase',
        tagline: 'Let your customers touch, rotate, and play with your products in 3D right in their browser.',
        description: 'Takes your sketches or 3D models and turns them into silky smooth, interactive product experiences on any phone or laptop. No downloads, no lag, and no complicated setup.',
        icon: <Boxes className="w-7 h-7 text-white stroke-[1.8]" />,
        benefits: [
            'Silky smooth 3D rotation right inside any web browser',
            'Works instantly on phones, tablets, and old laptops',
            'Customers inspect colors, textures, and details before buying',
            'Loads crazy fast without slowing down your site'
        ]
    },
    {
        id: 'slice-leads',
        name: 'SliceLeads',
        category: 'Local Business Lead Finder',
        tagline: 'Finds verified local business leads and drafts friendly conversation starters.',
        description: 'Scours local business listings, verifies contact details so emails never bounce, and drafts friendly, personalized icebreakers. You spend less time copy-pasting and more time having real conversations.',
        icon: <Zap className="w-7 h-7 text-white stroke-[1.8]" />,
        benefits: [
            'Finds real business owners in your target city in minutes',
            'Triple-checks email addresses so your messages don\'t bounce',
            'Drafts polite, personalized intros that people actually reply to',
            'Saves hours of mindless copy-pasting from Google Maps'
        ]
    },
    {
        id: 'slice-mail',
        name: 'SliceMail',
        category: 'Smart Outreach & Client Pitching',
        tagline: 'Send customized automated pitches and keep clients informed — reaching 400+ emails a day effortlessly.',
        description: 'Pitch new prospects and keep existing clients updated with thoughtful, tailored messages that sound like you personally wrote them. Reaches at least 400 customized emails per day directly from your inbox without landing in spam.',
        icon: <Bot className="w-7 h-7 text-white stroke-[1.8]" />,
        benefits: [
            'Custom automated pitches tailored to each recipient\'s business',
            'Keeps existing customers informed with regular personalized updates',
            'Outreach engine capable of 400+ customized emails per day',
            'Lives right in your mail sidebar so you review before dispatch'
        ]
    },
    {
        id: 'slice-inbox',
        name: 'SliceInbox',
        category: 'Team Mailbox Chief of Staff',
        tagline: 'A quiet digital manager that triages company inboxes and sorts out the noise.',
        description: 'Keeps shared team inboxes spotless. It reads incoming inquiries, tags what\'s urgent, filters out junk promos, and preps draft answers for your team so nobody leaves a customer waiting.',
        icon: <Cpu className="w-7 h-7 text-white stroke-[1.8]" />,
        benefits: [
            'Watches multiple shared inboxes 24/7 without taking lunch breaks',
            'Catches urgent client requests and flags them before you log in',
            'Drafts quick response suggestions ready for your team\'s thumbs up',
            'Runs quietly on your own servers so you stay in total control'
        ]
    },
    {
        id: 'slice-ppt',
        name: 'SlicePPT',
        category: 'Instant Presentation & Deck Generator',
        tagline: 'Turns rough notes, spreadsheets, and specs into gorgeous presentation slides in seconds.',
        description: 'Feed in an Excel sheet, product specs, or brief notes, and SlicePPT automatically designs clean, executive 16:9 PDF decks with crisp layouts, photorealistic visuals, and polished typography — zero PowerPoint wrestling required.',
        icon: <Presentation className="w-7 h-7 text-white stroke-[1.8]" />,
        benefits: [
            'Turns raw Excel schedules & notes into client-ready slide decks',
            'Generates clean 16:9 executive presentation PDFs on demand',
            'Auto-inserts photorealistic visual mockups matching your specs',
            'Saves hours of late-night formatting and alignment frustration'
        ]
    },
    {
        id: 'slice-dam',
        name: 'SliceDAM',
        category: 'Business Document & Asset Hub',
        tagline: 'Organize client contracts, invoices, NDAs, and team files in one clean, searchable vault.',
        description: 'A lightweight digital asset and document management setup built for real businesses. Auto-generates branded invoices, proposals, and agreements, and keeps every critical legal and client file right where you can find it.',
        icon: <FolderKanban className="w-7 h-7 text-white stroke-[1.8]" />,
        benefits: [
            'Central vault for contracts, NDAs, proposals, and tax records',
            'Auto-stamps and generates branded client invoices and agreements',
            'Fast search so your team never asks "where is that file?" again',
            'Self-hosted on your own secure drives with zero monthly lock-in'
        ]
    },
    {
        id: 'slice-class',
        name: 'SliceClass',
        category: 'Private Academy & Video Studio',
        tagline: 'A clean online course studio for teaching your craft with zero tech headaches.',
        description: 'A distraction-free, beautiful learning portal for your clients, students, or team. Students log in simply with their phone number, watch high-definition video lessons without buffering, and track their progress step by step.',
        icon: <GraduationCap className="w-7 h-7 text-white stroke-[1.8]" />,
        benefits: [
            'Clean, distraction-free player that looks stunning in dark mode',
            'Simple phone OTP login — no forgotten passwords or lost accounts',
            'Buttery smooth, buffer-free video streaming on any connection',
            'Step-by-step progress tracking so students actually finish'
        ]
    }
];

export const ProductsSection = () => {
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

    const handleInquireProduct = (productName: string) => {
        setFormData(prev => ({ ...prev, category: productName }));
        const el = document.getElementById('prodx-inquiry');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Save backup to localStorage
        try {
            const existing = JSON.parse(localStorage.getItem('ags_prodx_leads') || '[]');
            existing.push({
                ...formData,
                submittedAt: new Date().toISOString()
            });
            localStorage.setItem('ags_prodx_leads', JSON.stringify(existing));
        } catch (err) {
            console.error('Local backup error:', err);
        }

        try {
            await submitForm(formData, {
                subject: `Product Inquiry: ${formData.category || 'Product Slice'} from ${formData.fullName} (${formData.company || 'Direct'})`,
                formType: 'Product Inquiry'
            });
        } catch (err) {
            console.warn('Remote sync skipped/failed:', err);
        }

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
        <section id="products" className="py-32 px-6 relative z-20 bg-[#fafafa] dark:bg-[#0a0a0a] overflow-hidden">
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
                        Products by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A]">A Generative Slice</span>
                    </motion.h2>
                    <p className="text-[#64748B] dark:text-white/60 text-lg max-w-2xl mx-auto">
                        Handcrafted tools we built from scratch to help businesses sell, communicate, and grow without the tech headaches.
                    </p>
                </div>

                {/* 5 Flagship Slice Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {sliceProducts.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            className={`rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-[#111111] p-8 flex flex-col justify-between hover:border-[#FF5C00]/30 transition-all duration-300 shadow-xl shadow-black/5 dark:shadow-none group hover:-translate-y-1 ${
                                idx === 0 ? 'md:col-span-2' : ''
                            }`}
                        >
                            <div>
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF5C00] to-[#FF8C1A] flex items-center justify-center shrink-0 shadow-lg shadow-[#FF5C00]/20 border border-white/20">
                                        {product.icon}
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF5C00] block mb-0.5">
                                            {product.category}
                                        </span>
                                        <h3 className="text-2xl font-black text-[#0F172A] dark:text-white tracking-tight font-heading">
                                            {product.name}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-sm font-semibold text-[#FF5C00] mb-2">
                                    {product.tagline}
                                </p>
                                <p className="text-sm text-[#64748B] dark:text-white/60 leading-relaxed mb-6">
                                    {product.description}
                                </p>

                                {/* Friendly Benefits */}
                                <div className="space-y-2.5 mb-6 pt-4 border-t border-black/5 dark:border-white/5">
                                    {product.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#0F172A]/80 dark:text-white/70">
                                            <CheckCircle2 className="w-4 h-4 text-[#FF5C00] shrink-0 mt-0.5" />
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Footer: Inquire Button & App Showcase Status */}
                            <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between gap-3 flex-wrap">
                                <button
                                    type="button"
                                    onClick={() => handleInquireProduct(product.name)}
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FF5C00]/10 text-[#FF5C00] hover:bg-[#FF5C00] hover:text-white font-bold text-xs transition-all border border-[#FF5C00]/20"
                                >
                                    Inquire About This Tool <ArrowUpRight className="w-3.5 h-3.5" />
                                </button>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-500/5 text-orange-600 dark:text-orange-400 font-semibold text-[11px] border border-orange-500/10">
                                    <Sparkles className="w-3 h-3 text-[#FF5C00]" /> App Showcase Coming Soon
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Structured Product Inquiry Form */}
                <div id="prodx-inquiry" className="w-full">
                    <div className="rounded-[2.5rem] border border-black/5 dark:border-white/10 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                        <div className="text-center mb-10">
                            <h3 className="text-3xl md:text-4xl font-black text-[#0F172A] dark:text-white mb-3 tracking-tight font-heading">
                                Order a Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A]">Product Slice</span>
                            </h3>
                            <p className="text-[#64748B] dark:text-white/60 text-sm max-w-xl mx-auto">
                                Tell us what your business needs. Our team will get back to you within 24 hours with a straightforward walkthrough and rollout plan.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
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

                            {/* Target Tool / Category - Open text input */}
                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50 mb-1.5">
                                    Target Tool / Requirement *
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
                                    What would you like us to build or integrate? *
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
                                    <>Inquiry Dispatched to Executive Desk ✓</>
                                ) : status === 'sending' ? (
                                    'Submitting Request...'
                                ) : (
                                    <>Submit Product Inquiry <Send className="w-4 h-4" /></>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
