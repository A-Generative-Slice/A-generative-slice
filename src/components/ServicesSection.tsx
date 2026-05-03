import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Cloud, Workflow, Lightbulb, Users, Code, LineChart, Sparkles, ShoppingCart, GraduationCap, MessageSquare, ArrowRight } from 'lucide-react';

export const ServicesSection = () => {
    const initialServices = [
        {
            title: "Custom SaaS Development",
            description: "Full-stack application engineering from MVPs to enterprise-grade cloud native platforms.",
            icon: <Code className="w-8 h-8" />,
            color: "from-blue-500/20 to-cyan-500/20"
        },
        {
            title: "Agentic Workflow Setup",
            description: "We deploy autonomous AI agents to handle complex logic and self-operating workflows.",
            icon: <Bot className="w-8 h-8" />,
            color: "from-orange-500/20 to-red-500/20"
        },
        {
            title: "Intelligent Automation",
            description: "Automate marketing, HR, and sales funnels to scale operations effortlessly.",
            icon: <Workflow className="w-8 h-8" />,
            color: "from-purple-500/20 to-pink-500/20"
        },
        {
            title: "Cloud Management",
            description: "Scalable infrastructure, serverless architectures, and CI/CD pipelines.",
            icon: <Cloud className="w-8 h-8" />,
            color: "from-emerald-500/20 to-teal-500/20"
        },
        {
            title: "E-Commerce Solutions",
            description: "High-conversion storefronts, custom marketplaces, and seamless payment integrations.",
            icon: <ShoppingCart className="w-8 h-8" />,
            color: "from-yellow-500/20 to-orange-500/20"
        },
        {
            title: "Learning Platforms",
            description: "Custom LMS architecture, student portals, and course management systems.",
            icon: <GraduationCap className="w-8 h-8" />,
            color: "from-indigo-500/20 to-blue-500/20"
        },
        {
            title: "Chatbot Solutions",
            description: "AI-powered conversational agents for customer support, lead generation, and engagement.",
            icon: <MessageSquare className="w-8 h-8" />,
            color: "from-rose-500/20 to-pink-500/20"
        },
        {
            title: "Digital Marketing",
            description: "Data-driven growth strategies, SEO, and targeted ad campaigns.",
            icon: <LineChart className="w-8 h-8" />,
            color: "from-cyan-500/20 to-blue-500/20"
        },
        {
            title: "Consultation",
            description: "Strategic IT guidance, product architecture, and tech feasibility analysis.",
            icon: <Lightbulb className="w-8 h-8" />,
            color: "from-amber-500/20 to-yellow-500/20"
        },
        {
            title: "Student Mentorship",
            description: "Empowering the next generation of engineers through 1-on-1 guidance.",
            icon: <Users className="w-8 h-8" />,
            color: "from-fuchsia-500/20 to-purple-500/20"
        }
    ];

    const [cards, setCards] = useState(initialServices);

    const handleSwipe = () => {
        setCards((prev) => {
            const newCards = [...prev];
            const topCard = newCards.shift();
            if (topCard) newCards.push(topCard);
            return newCards;
        });
    };

    return (
        <section id="services" className="py-32 px-6 relative bg-white dark:bg-[#050505] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
                
                {/* Text Content */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        <Sparkles className="w-4 h-4" />
                        What We Do
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-black dark:text-white mb-6 tracking-tight leading-tight"
                    >
                        Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">SaaS & Consulting</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-black/60 dark:text-white/60 text-lg md:text-xl mb-8"
                    >
                        Swipe through our core capabilities. We architect, develop, and scale modern digital products while empowering teams and students through strategic guidance.
                    </motion.p>
                    <motion.button 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        onClick={handleSwipe}
                        className="hidden lg:inline-flex items-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-xl shadow-black/10 dark:shadow-white/10"
                    >
                        Next Service <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </div>

                {/* Animated Vertical Card Stack */}
                <div className="lg:w-1/2 w-full relative h-[450px] flex justify-center perspective-1000">
                    <AnimatePresence mode="popLayout">
                        {cards.map((service, i) => {
                            // Only render top 4 cards for performance and visual clarity
                            if (i > 3) return null;

                            const isTop = i === 0;

                            return (
                                <motion.div
                                    key={service.title}
                                    layout
                                    initial={{ opacity: 0, y: -50, scale: 0.8 }}
                                    animate={{ 
                                        y: i * 35, // Push each card down by 35px
                                        scale: 1 - i * 0.06, // Scale down by 6%
                                        zIndex: 10 - i,
                                        opacity: 1 - i * 0.15,
                                    }}
                                    exit={{ opacity: 0, scale: 0.8, y: -100, transition: { duration: 0.2 } }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    drag={isTop ? "y" : false} // Allow swiping up/down
                                    dragConstraints={{ top: 0, bottom: 0 }}
                                    dragElastic={0.8}
                                    onDragEnd={(_, info) => {
                                        if (Math.abs(info.offset.y) > 50 || Math.abs(info.offset.x) > 50) {
                                            handleSwipe();
                                        }
                                    }}
                                    onClick={() => {
                                        if (!isTop) handleSwipe();
                                    }}
                                    className={`absolute top-0 w-full max-w-md bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 rounded-[2.5rem] p-10 shadow-2xl backdrop-blur-xl ${isTop ? 'cursor-grab active:cursor-grabbing hover:border-orange-500/30 hover:shadow-orange-500/10' : 'cursor-pointer'}`}
                                    style={{ transformOrigin: 'top center' }}
                                >
                                    {/* Ambient card glow based on service color */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 dark:opacity-10 pointer-events-none rounded-[2.5rem]`} />
                                    
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5 text-orange-500 flex items-center justify-center mb-8 shadow-sm">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-3xl font-black text-black dark:text-white mb-4 tracking-tight leading-tight">
                                            {service.title}
                                        </h3>
                                        <p className="text-black/60 dark:text-white/60 leading-relaxed text-lg mb-8">
                                            {service.description}
                                        </p>
                                        
                                        <div className="flex gap-2">
                                            <span className="px-4 py-1.5 bg-black/5 dark:bg-white/5 rounded-full text-xs font-bold uppercase tracking-wider text-black/50 dark:text-white/50">
                                                Enterprise
                                            </span>
                                            <span className="px-4 py-1.5 bg-black/5 dark:bg-white/5 rounded-full text-xs font-bold uppercase tracking-wider text-black/50 dark:text-white/50">
                                                Scale
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
