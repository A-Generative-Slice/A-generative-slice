import { motion } from 'framer-motion';
import { Sparkles, Megaphone, Monitor, PenTool, BookOpen } from 'lucide-react';
import { services } from '../data/tools';

// Map specific icons to service names since the data provides emoji
const iconMap: Record<string, React.ReactNode> = {
    'Digital Marketing': <Megaphone className="w-8 h-8 text-orange-400" />,
    'SaaS & Custom Software': <Monitor className="w-8 h-8 text-orange-400" />,
    'Content Creation': <PenTool className="w-8 h-8 text-orange-400" />,
    'AI Awareness Programs': <BookOpen className="w-8 h-8 text-orange-400" />
};

export const ServicesSection = () => {
    return (
        <section id="services" className="py-32 px-6 relative z-10 bg-[#0a0a0a]">
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        <Sparkles className="w-4 h-4" />
                        Custom Solutions
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight"
                    >
                        We also <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">build</span> for you
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg md:text-xl"
                    >
                        Need something custom? From AI chatbots to full-stack apps — we've got you covered with our premium studio services.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[320px]">
                    {services.map((service, index) => {
                        // Create a bento layout where the first and last items span 2 columns on large screens
                        const isWide = index === 0 || index === 3;
                        
                        return (
                            <motion.div 
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-500 overflow-hidden flex flex-col justify-between ${isWide ? 'lg:col-span-2 lg:row-span-1' : 'lg:col-span-1 lg:row-span-1'}`}
                            >
                                {/* Ambient Hover Glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                    style={{ background: 'radial-gradient(circle at right bottom, rgba(255, 106, 0, 0.1) 0%, transparent 50%)' }} />

                                <div>
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
                                        {iconMap[service.name] || <span className="text-3xl">{service.icon}</span>}
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-100 transition-colors">{service.name}</h3>
                                    <p className="text-white/50 text-base leading-relaxed">{service.description}</p>
                                </div>

                                <a href="#contact" className="inline-flex items-center gap-2 mt-8 text-orange-500 font-semibold hover:text-orange-400 transition-colors group/link w-fit">
                                    Get a Quote
                                    <span className="block transform group-hover/link:translate-x-1 transition-transform">→</span>
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
