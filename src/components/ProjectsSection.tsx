import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe2, MessageSquare, Send, ExternalLink, ChevronDown, FlaskConical, Cpu, UtensilsCrossed } from 'lucide-react';
import nasLogo from '../assets/nas-design-logo.jpg';
import roseLogo from '../assets/rose-chemicals-logo.png';
import litelabLogo from '../assets/litelab-logo.ico';
import sreeAmbalLogo from '../assets/sree-ambal-logo.png';
import { submitForm } from '../utils/formSubmit';
import { formConfig } from '../data/config';

const projects = [
    {
        id: 'rose-chemicals',
        client: 'Rose Chemicals',
        title: 'Enterprise Chemical Inventory Portal',
        color: 'from-pink-500 to-rose-600',
        logoImg: roseLogo,
        icon: <FlaskConical className="w-6 h-6 text-white" />,
        missing: 'Lacked digital supply chain tracking, relying on fragmented legacy systems causing extreme fulfillment delays.',
        solution: 'Architected an automated inventory solution with real-time tracking, seamless multi-warehouse sync, and digital B2B ordering.',
        approach: 'Transformed their business model from manual oversight to a highly responsive, data-driven supply chain operation.',
        link: 'https://rosechemicals.in/'
    },

    {
        id: 'litelab',
        client: 'Litelabs',
        title: 'In-House AI Auditor & Strategy Hub',
        color: 'from-orange-400 to-orange-600',
        logoImg: litelabLogo,
        icon: <Cpu className="w-6 h-6 text-white" />,
        missing: 'Lacked a structured verification layer to validate AI-generated assets, resulting in inconsistent output quality and strategic misalignment.',
        solution: 'Engineered an in-house AI auditor platform to inspect, audit, and optimize digital production quality, aligning teams with data-driven strategic perspectives.',
        approach: 'Equipped internal strategists and QA leads with a powerful validation suite to drive company growth and high-quality automation.',
        link: 'https://www.litelab.in/'
    },

    {
        id: 'nas-design',
        client: 'NAS Design and Construction',
        title: 'Interactive Architectural Portfolio',
        color: 'from-blue-500 to-indigo-600',
        logoImg: nasLogo,
        missing: 'Lacked a unified, premium project portfolio to showcase high-end real estate developments to international investors.',
        solution: 'Built an interactive, physics-based, high-performance web presence featuring 3D project fan showcases and smooth GSAP-like animations.',
        approach: 'Elevated their market perception by aligning their digital presence with the exact luxury standards of their physical constructions.',
        link: 'https://nasdesignconstruction.com/'
    },
    {
        id: 'sree-ambal',
        client: 'Sree Ambal Catering Services',
        title: 'Bespoke PWA Inventory Portal',
        color: 'from-yellow-400 to-amber-600',
        logoImg: sreeAmbalLogo,
        icon: <UtensilsCrossed className="w-6 h-6 text-white" />,
        missing: 'Struggled with manual inventory tracking and slow catalog updates, leading to stock discrepancies and administrative overhead during busy catering seasons.',
        solution: 'Designed and built a customized, mobile-first inventory tracker PWA with optimized database schemas for instant catalog updates and advanced offline support.',
        approach: 'Streamlined their daily tracking progress, making inventory management simple, lightning-fast, and accessible even in low-connectivity event locations.',
        link: 'https://www.sreeambalcateringservice.com/'
    }
];


export const ProjectsSection = () => {
    const [openId, setOpenId] = useState<string | null>(projects[0].id);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        const result = await submitForm(formData, {
            subject: `Project Inquiry from ${formData.name}`,
            formType: 'Project Inquiry'
        });

        if (result.success) {
            setStatus('sent');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 4000);
        } else {
            // Fallback to mailto link
            const subjectStr = encodeURIComponent(`Project Inquiry from ${formData.name}`);
            const bodyStr = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
            window.open(`mailto:${formConfig.businessEmail}?subject=${subjectStr}&body=${bodyStr}`, '_blank');
            setStatus('idle');
        }
    };

    return (
        <section id="projects" className="py-32 px-6 relative z-20 bg-[#fafafa] dark:bg-[#0a0a0a] overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        <Globe2 className="w-4 h-4" />
                        Our Portfolio
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6 tracking-tight"
                    >
                        Architectural <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Case Studies</span>
                    </motion.h2>
                    <p className="text-black/60 dark:text-white/60 text-lg">
                        Detailed breakdowns of how we transformed enterprise operations and digital branding.
                    </p>
                </div>

                {/* Clean Dropdown / Accordion Layout */}
                <div className="space-y-4 mb-32">
                    {projects.map((project) => {
                        const isOpen = openId === project.id;
                        return (
                            <motion.div 
                                key={project.id}
                                className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
                                    isOpen 
                                        ? 'bg-white dark:bg-[#111] border-orange-500/30 shadow-2xl shadow-orange-500/5' 
                                        : 'bg-white/50 dark:bg-[#111]/50 border-black/5 dark:border-white/5 hover:border-orange-500/20 hover:bg-white dark:hover:bg-[#111]'
                                }`}
                            >
                                <button
                                    onClick={() => setOpenId(isOpen ? null : project.id)}
                                    className="w-full text-left p-6 md:p-8 flex items-center justify-between focus:outline-none"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shrink-0 shadow-lg overflow-hidden`}>
                                            {project.logoImg ? (
                                                <div className="w-full h-full bg-white flex items-center justify-center p-1.5">
                                                    <img src={project.logoImg} alt={project.client} className="w-full h-full object-contain" />
                                                </div>
                                            ) : (
                                                project.icon
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-1">{project.client}</h4>
                                            <h3 className="text-2xl font-black text-black dark:text-white">{project.title}</h3>
                                        </div>
                                    </div>
                                    <motion.div 
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center shrink-0"
                                    >
                                        <ChevronDown className="w-5 h-5 text-black dark:text-white" />
                                    </motion.div>
                                </button>
                                
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 md:p-8 pt-0 border-t border-black/5 dark:border-white/5 mt-2">
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                                                    <div>
                                                        <h5 className="text-black dark:text-white font-bold mb-2">The Problem</h5>
                                                        <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed">{project.missing}</p>
                                                    </div>
                                                    <div>
                                                        <h5 className="text-black dark:text-white font-bold mb-2">Our Solution</h5>
                                                        <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed">{project.solution}</p>
                                                    </div>
                                                    <div>
                                                        <h5 className="text-black dark:text-white font-bold mb-2">Business Impact</h5>
                                                        <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed">{project.approach}</p>
                                                    </div>
                                                </div>
                                                {project.link && project.link !== '#' && (
                                                    <div className="mt-8 pt-6 flex border-t border-black/5 dark:border-white/5">
                                                        <a 
                                                            href={project.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-colors"
                                                        >
                                                            Visit Live Project <ExternalLink className="w-4 h-4" />
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Got a Project Box */}
                <div className="mt-32 max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-4"
                            >
                                <MessageSquare className="w-4 h-4" />
                                Project Inquiry
                            </motion.div>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6 tracking-tight"
                            >
                                Got a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">project?</span>
                            </motion.h2>
                            <p className="text-black/60 dark:text-white/60 text-lg mb-8 max-w-md">
                                Want to build a custom application? Have an enterprise requirement? Reach out directly and let's build something amazing together.
                            </p>
                        </div>

                        <motion.form 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            onSubmit={handleSubmit}
                            className="bg-white dark:bg-[#111111]/80 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden"
                        >
                            <div className="space-y-4 relative z-10">
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-6 py-4 text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-orange-500/50 transition-all"
                                    placeholder="Your Name"
                                />
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-6 py-4 text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-orange-500/50 transition-all"
                                    placeholder="Your Email"
                                />
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-6 py-4 text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-orange-500/50 transition-all resize-none"
                                    placeholder="Briefly describe your project..."
                                />
                                <button
                                    type="submit"
                                    disabled={status !== 'idle'}
                                    className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs text-white flex items-center justify-center gap-3 transition-all duration-300
                                        ${status === 'sent' ? 'bg-green-500' : 'bg-orange-500 hover:bg-orange-600 shadow-xl shadow-orange-500/20'}
                                    `}
                                >
                                    {status === 'sent' ? 'Sent' : status === 'sending' ? 'Sending...' : <>Launch Inquiry <Send className="w-4 h-4" /></>}
                                </button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
};
