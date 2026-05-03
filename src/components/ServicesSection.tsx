import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Cloud, Workflow, Lightbulb, Users, Code, LineChart, Sparkles, ShoppingCart, GraduationCap, MessageSquare, ArrowRight, ArrowLeft } from 'lucide-react';

export const ServicesSection = () => {
    const initialServices = [
        {
            title: "Custom SaaS Development",
            description: "Full-stack application engineering from MVPs to enterprise-grade cloud native platforms.",
            icon: <Code className="w-8 h-8" />,
            color: "from-blue-600 to-cyan-500"
        },
        {
            title: "Agentic Workflow Setup",
            description: "We deploy autonomous AI agents to handle complex logic and self-operating workflows.",
            icon: <Bot className="w-8 h-8" />,
            color: "from-orange-500 to-red-600"
        },
        {
            title: "Intelligent Automation",
            description: "Automate marketing, HR, and sales funnels to scale operations effortlessly.",
            icon: <Workflow className="w-8 h-8" />,
            color: "from-purple-600 to-pink-500"
        },
        {
            title: "Cloud Management",
            description: "Scalable infrastructure, serverless architectures, and CI/CD pipelines.",
            icon: <Cloud className="w-8 h-8" />,
            color: "from-emerald-500 to-teal-600"
        },
        {
            title: "E-Commerce Solutions",
            description: "High-conversion storefronts, custom marketplaces, and seamless payment integrations.",
            icon: <ShoppingCart className="w-8 h-8" />,
            color: "from-yellow-500 to-orange-500"
        },
        {
            title: "Learning Platforms",
            description: "Custom LMS architecture, student portals, and course management systems.",
            icon: <GraduationCap className="w-8 h-8" />,
            color: "from-indigo-600 to-blue-500"
        },
        {
            title: "Chatbot Solutions",
            description: "AI-powered conversational agents for customer support, lead generation, and engagement.",
            icon: <MessageSquare className="w-8 h-8" />,
            color: "from-rose-500 to-pink-600"
        },
        {
            title: "Digital Marketing",
            description: "Data-driven growth strategies, SEO, and targeted ad campaigns.",
            icon: <LineChart className="w-8 h-8" />,
            color: "from-cyan-500 to-blue-600"
        },
        {
            title: "Consultation",
            description: "Strategic IT guidance, product architecture, and tech feasibility analysis.",
            icon: <Lightbulb className="w-8 h-8" />,
            color: "from-amber-500 to-yellow-600"
        },
        {
            title: "Student Mentorship",
            description: "Empowering the next generation of engineers through 1-on-1 guidance.",
            icon: <Users className="w-8 h-8" />,
            color: "from-fuchsia-600 to-purple-500"
        }
    ];

    const [cards, setCards] = useState(initialServices);

    const handleSwipe = (direction: 1 | -1 = 1) => {
        setCards((prev) => {
            const newCards = [...prev];
            if (direction === 1) {
                const topCard = newCards.shift();
                if (topCard) newCards.push(topCard);
            } else {
                const bottomCard = newCards.pop();
                if (bottomCard) newCards.unshift(bottomCard);
            }
            return newCards;
        });
    };

    return (
        <section id="services" className="py-32 px-6 relative bg-white dark:bg-[#050505] overflow-hidden border-t border-black/5 dark:border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
                
                {/* Centered Text Content */}
                <div className="text-center max-w-3xl mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-4"
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
                        className="text-black/60 dark:text-white/60 text-lg md:text-xl"
                    >
                        Swipe left or right through our core capabilities. We architect, develop, and scale modern digital products while empowering teams and students through strategic guidance.
                    </motion.p>
                </div>

                {/* Centered Animated Vertical Card Stack with Horizontal Swipe */}
                <div className="w-full relative h-[450px] flex justify-center perspective-1000 mt-4">
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
                                        y: i * 30, // Push each card down by 30px
                                        scale: 1 - i * 0.05, // Scale down by 5%
                                        zIndex: 10 - i,
                                        opacity: 1 - i * 0.15,
                                    }}
                                    exit={{ opacity: 0, x: -200, scale: 0.8, transition: { duration: 0.2 } }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    drag={isTop ? "x" : false} // Allow swiping left/right
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.8}
                                    onDragEnd={(_, info) => {
                                        if (info.offset.x > 100) {
                                            handleSwipe(-1); // Swipe right -> Go backward
                                        } else if (info.offset.x < -100) {
                                            handleSwipe(1); // Swipe left -> Go forward
                                        }
                                    }}
                                    onClick={() => {
                                        if (!isTop) handleSwipe(1);
                                    }}
                                    className={`absolute top-0 w-full max-w-xl bg-white/60 dark:bg-[#111111]/60 backdrop-blur-3xl border border-white/50 dark:border-white/10 rounded-[2.5rem] p-10 md:p-12 shadow-2xl ${isTop ? 'cursor-grab active:cursor-grabbing hover:shadow-orange-500/20' : 'cursor-pointer'} overflow-hidden`}
                                    style={{ transformOrigin: 'top center' }}
                                >
                                    {/* Gorgeous Glassmorphic Glowing Orbs inside the card */}
                                    <div className={`absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br ${service.color} rounded-full blur-[100px] opacity-40 dark:opacity-20 pointer-events-none`} />
                                    <div className={`absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr ${service.color} rounded-full blur-[100px] opacity-30 dark:opacity-10 pointer-events-none`} />
                                    
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-8">
                                            <div className="w-16 h-16 rounded-3xl bg-white/80 dark:bg-black/50 backdrop-blur-md border border-black/5 dark:border-white/10 text-orange-500 flex items-center justify-center shadow-lg">
                                                {service.icon}
                                            </div>
                                            
                                            {isTop && (
                                                <div className="flex gap-2">
                                                    <button onClick={(e) => { e.stopPropagation(); handleSwipe(-1); }} className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                                                        <ArrowLeft className="w-4 h-4 text-black dark:text-white" />
                                                    </button>
                                                    <button onClick={(e) => { e.stopPropagation(); handleSwipe(1); }} className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                                                        <ArrowRight className="w-4 h-4 text-black dark:text-white" />
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-black text-black dark:text-white mb-4 tracking-tight leading-tight drop-shadow-sm">
                                            {service.title}
                                        </h3>
                                        <p className="text-black/70 dark:text-white/70 leading-relaxed text-lg mb-10 font-medium">
                                            {service.description}
                                        </p>
                                        
                                        <div className="flex gap-3 mt-auto">
                                            <span className="px-5 py-2 bg-white/50 dark:bg-black/40 backdrop-blur-md border border-black/5 dark:border-white/5 rounded-full text-xs font-black uppercase tracking-widest text-black/70 dark:text-white/70 shadow-sm">
                                                Enterprise
                                            </span>
                                            <span className="px-5 py-2 bg-white/50 dark:bg-black/40 backdrop-blur-md border border-black/5 dark:border-white/5 rounded-full text-xs font-black uppercase tracking-widest text-black/70 dark:text-white/70 shadow-sm">
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
