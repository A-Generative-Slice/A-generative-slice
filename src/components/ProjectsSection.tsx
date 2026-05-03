import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Globe2, Send, MessageSquare } from 'lucide-react';

interface Project {
    id: string;
    client: string;
    location: string;
    title: string;
    description: string;
    tags: string[];
    color: string;
}

const projects: Project[] = [
    {
        id: 'rose-chemicals',
        client: 'Rose Chemicals',
        location: 'Madurai',
        title: 'Enterprise Chemical Inventory & B2B Portal',
        description: 'A comprehensive B2B portal for Rose Chemicals to manage bulk orders, track inventory across multiple warehouses, and provide real-time shipment updates to distributors.',
        tags: ['React', 'Dashboard', 'B2B', 'Inventory'],
        color: 'from-pink-500 to-rose-600',
    },
    {
        id: 'nas-internationals',
        client: 'NAS Internationals',
        location: 'Nungambakkam',
        title: 'Global Export Operations Dashboard',
        description: 'A unified operations dashboard for NAS Internationals to streamline their export workflows, track global shipments, and manage international compliance documents seamlessly.',
        tags: ['Next.js', 'Logistics', 'Global Trade'],
        color: 'from-blue-500 to-indigo-600',
    },
    {
        id: 'litelab',
        client: 'Litelab',
        location: 'Besant Nagar',
        title: 'Creative Agency Portfolio & Client Portal',
        description: 'An immersive, high-performance portfolio and secure client portal for Litelab to showcase their creative campaigns and securely share assets with top-tier clients.',
        tags: ['WebGL', 'Framer Motion', 'Client Portal'],
        color: 'from-orange-400 to-orange-600',
    }
];

export const ProjectsSection = () => {
    const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch('https://formspree.io/f/xdkogvnp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setStatus('sent');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 4000);
            } else {
                setStatus('idle');
                alert('Form submission failed. Please try emailing us directly.');
            }
        } catch {
            setStatus('idle');
            alert('Form submission failed. Please try emailing us directly.');
        }
    };

    return (
        <section id="projects" className="py-32 px-6 relative z-20 bg-white dark:bg-[#0a0a0a]">
            {/* Top Border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 max-w-3xl mx-auto">
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
                        className="text-4xl md:text-6xl font-black text-black dark:text-white mb-6 tracking-tight"
                    >
                        Architectural <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Digital Solutions</span>
                    </motion.h2>
                </div>

                <div className="space-y-6 mb-24">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`group bg-gray-50 dark:bg-[#111111]/80 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 ${expandedProjectId === project.id ? 'shadow-2xl ring-1 ring-orange-500/20' : 'hover:border-orange-500/20 shadow-sm'}`}
                        >
                            <button 
                                onClick={() => setExpandedProjectId(expandedProjectId === project.id ? null : project.id)}
                                className="w-full text-left p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`} />
                                        <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">{project.client}</span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-black text-black dark:text-white group-hover:text-orange-500 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="hidden sm:flex flex-wrap gap-2">
                                        {project.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/40 border border-black/5 dark:border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <motion.div 
                                        animate={{ rotate: expandedProjectId === project.id ? 180 : 0 }}
                                        className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-all duration-300"
                                    >
                                        <ChevronDown className="w-6 h-6" />
                                    </motion.div>
                                </div>
                            </button>

                            <AnimatePresence>
                                {expandedProjectId === project.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <div className="px-8 sm:px-10 pb-10 pt-2 border-t border-black/5 dark:border-white/5">
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
                                                <div>
                                                    <p className="text-black/60 dark:text-white/60 text-lg leading-relaxed mb-8">
                                                        {project.description}
                                                    </p>
                                                    <div className="flex flex-wrap gap-3 mb-8">
                                                        {project.tags.map(tag => (
                                                            <span key={tag} className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest bg-orange-500/5 text-orange-600 dark:text-orange-400 border border-orange-500/10">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-bold text-sm hover:scale-105 transition-transform shadow-xl">
                                                        Visit Live Project <ExternalLink className="w-4 h-4" />
                                                    </button>
                                                </div>
                                                <div className="relative aspect-video rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-gray-100 dark:bg-[#151515]">
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
                                                    <div className="absolute inset-0 flex items-center justify-center text-black/20 dark:text-white/20 font-black text-2xl uppercase tracking-widest">
                                                        Project UI Preview
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Got a Project Box (Moved from Contact Section) */}
                <div className="mt-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                            className="bg-gray-50 dark:bg-[#111111]/80 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden"
                        >
                            <div className="space-y-4 relative z-10">
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-white dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-6 py-4 text-black dark:text-white placeholder-black/20 dark:placeholder-white/20 focus:outline-none focus:border-orange-500/50 transition-all"
                                    placeholder="Your Name"
                                />
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-white dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-6 py-4 text-black dark:text-white placeholder-black/20 dark:placeholder-white/20 focus:outline-none focus:border-orange-500/50 transition-all"
                                    placeholder="Your Email"
                                />
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-white dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-6 py-4 text-black dark:text-white placeholder-black/20 dark:placeholder-white/20 focus:outline-none focus:border-orange-500/50 transition-all resize-none"
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
