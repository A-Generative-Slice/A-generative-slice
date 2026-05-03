import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe2, MessageSquare, Send, ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
    {
        id: 'rose-chemicals',
        client: 'Rose Chemicals',
        title: 'Enterprise Chemical Inventory Portal',
        description: 'A comprehensive B2B portal for bulk orders, real-time tracking, and multi-warehouse management.',
        color: 'from-pink-500 to-rose-600',
    },
    {
        id: 'nas-internationals',
        client: 'NAS Internationals',
        title: 'Global Export Operations Dashboard',
        description: 'A unified operations dashboard to streamline global workflows and manage compliance seamlessly.',
        color: 'from-blue-500 to-indigo-600',
    },
    {
        id: 'litelab',
        client: 'Litelab',
        title: 'Creative Agency Client Portal',
        description: 'An immersive, high-performance portfolio and secure portal to showcase creative campaigns.',
        color: 'from-orange-400 to-orange-600',
    }
];

export const ProjectsSection = () => {
    const [cards, setCards] = useState(projects);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSwipe = () => {
        setCards((prev) => {
            const newCards = [...prev];
            const topCard = newCards.shift();
            if (topCard) newCards.push(topCard);
            return newCards;
        });
    };

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
                        Architectural <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Masterpieces</span>
                    </motion.h2>
                    <p className="text-black/60 dark:text-white/60 text-lg">
                        Swipe or click to explore our recent enterprise deployments.
                    </p>
                </div>

                {/* Animated Card Swipe Showcase */}
                <div className="relative w-full max-w-xl mx-auto h-[450px] mb-32 flex justify-center perspective-1000">
                    <AnimatePresence mode="popLayout">
                        {cards.map((card, i) => {
                            const isTop = i === 0;
                            return (
                                <motion.div
                                    key={card.id}
                                    layout
                                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                                    animate={{ 
                                        scale: 1 - i * 0.05, 
                                        y: i * 25, 
                                        zIndex: cards.length - i,
                                        opacity: 1 - i * 0.15,
                                        rotateZ: isTop ? 0 : (i % 2 === 0 ? 2 : -2)
                                    }}
                                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    drag={isTop ? "x" : false}
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.8}
                                    onDragEnd={(_, info) => {
                                        if (Math.abs(info.offset.x) > 100) {
                                            handleSwipe();
                                        }
                                    }}
                                    className={`absolute top-0 w-full bg-gray-50 dark:bg-[#151515] border border-black/5 dark:border-white/10 rounded-[2.5rem] p-10 shadow-2xl ${isTop ? 'cursor-grab active:cursor-grabbing hover:border-orange-500/30' : 'pointer-events-none'}`}
                                    style={{ transformOrigin: 'bottom center' }}
                                >
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} mb-8 flex items-center justify-center shadow-lg`}>
                                        <Globe2 className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-2">{card.client}</h4>
                                    <h3 className="text-3xl font-black text-black dark:text-white mb-4 tracking-tight leading-tight">{card.title}</h3>
                                    <p className="text-black/60 dark:text-white/60 mb-10 leading-relaxed text-lg">{card.description}</p>
                                    
                                    <div className="flex items-center justify-between mt-auto">
                                        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-bold text-sm hover:scale-105 transition-transform">
                                            View Project <ExternalLink className="w-4 h-4" />
                                        </button>
                                        
                                        {isTop && (
                                            <button onClick={handleSwipe} className="flex items-center gap-2 text-orange-500 font-bold text-sm uppercase tracking-widest hover:text-orange-400 transition-colors">
                                                Next <ArrowRight className="w-4 h-4" />
                                            </button>
                                        )}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </div>

                {/* Got a Project Box */}
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
