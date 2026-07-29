import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Bot, Cloud, Workflow, Lightbulb, Users, Code, LineChart, Sparkles, ShoppingCart, GraduationCap, MessageSquare, ArrowRight, ArrowLeft, Plus } from 'lucide-react';

export const ServicesSection = () => {
    const services = [
        {
            title: "Custom SaaS Development",
            description: "Full-stack application engineering from MVPs to enterprise-grade cloud native platforms.",
            icon: <Code className="w-6 h-6 text-white" />,
            badge: "POPULAR",
            tags: ["Full-Stack", "Architecture"],
            gradient: "from-orange-500 to-amber-500"
        },
        {
            title: "Agentic Workflow Setup",
            description: "We deploy autonomous AI agents to handle complex logic and self-operating workflows.",
            icon: <Bot className="w-6 h-6 text-white" />,
            badge: "AI DRIVEN",
            tags: ["AI Agents", "Logic Workflows"],
            gradient: "from-amber-500 to-orange-600"
        },
        {
            title: "Intelligent Automation",
            description: "Automate marketing, HR, and sales funnels to scale operations effortlessly.",
            icon: <Workflow className="w-6 h-6 text-white" />,
            badge: "AUTOMATION",
            tags: ["Scale Ops", "Efficiency"],
            gradient: "from-orange-600 to-rose-500"
        },
        {
            title: "Cloud Management",
            description: "Scalable infrastructure, serverless architectures, and CI/CD pipelines.",
            icon: <Cloud className="w-6 h-6 text-white" />,
            badge: "CLOUD",
            tags: ["DevOps", "Infrastructure"],
            gradient: "from-orange-500 to-red-500"
        },
        {
            title: "E-Commerce Solutions",
            description: "High-conversion storefronts, custom marketplaces, and seamless payment integrations.",
            icon: <ShoppingCart className="w-6 h-6 text-white" />,
            badge: "REVENUE",
            tags: ["Storefronts", "Payments"],
            gradient: "from-amber-400 to-orange-500"
        },
        {
            title: "Learning Platforms",
            description: "Custom LMS architecture, student portals, and course management systems.",
            icon: <GraduationCap className="w-6 h-6 text-white" />,
            badge: "EDTECH",
            tags: ["LMS", "Portals"],
            gradient: "from-orange-500 to-yellow-500"
        },
        {
            title: "Chatbot Solutions",
            description: "AI-powered conversational agents for customer support, lead generation, and engagement.",
            icon: <MessageSquare className="w-6 h-6 text-white" />,
            badge: "24/7 SUPPORT",
            tags: ["Conversational AI", "Support"],
            gradient: "from-red-500 to-orange-500"
        },
        {
            title: "Digital Marketing",
            description: "Data-driven growth strategies, SEO, and targeted ad campaigns.",
            icon: <LineChart className="w-6 h-6 text-white" />,
            badge: "GROWTH",
            tags: ["Strategy", "SEO"],
            gradient: "from-orange-400 to-amber-600"
        },
        {
            title: "Consultation",
            description: "Strategic IT guidance, product architecture, and tech feasibility analysis.",
            icon: <Lightbulb className="w-6 h-6 text-white" />,
            badge: "STRATEGY",
            tags: ["Feasibility", "Roadmap"],
            gradient: "from-amber-500 to-orange-500"
        },
        {
            title: "Student Mentorship",
            description: "Empowering the next generation of engineers through 1-on-1 guidance.",
            icon: <Users className="w-6 h-6 text-white" />,
            badge: "COMMUNITY",
            tags: ["Mentorship", "Guidance"],
            gradient: "from-orange-500 to-rose-600"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-slide every 3 seconds unless hovered
    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % services.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [isPaused, services.length]);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % services.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    };

    return (
        <section id="services" className="py-32 px-4 md:px-8 relative bg-white dark:bg-[#050505] overflow-hidden border-t border-black/5 dark:border-white/5">
            <style>{`
                @keyframes uiverse-shine {
                    0% { transform: translateX(-100%) rotate(45deg); }
                    100% { transform: translateX(200%) rotate(45deg); }
                }
                @keyframes uiverse-pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.2); }
                }
                .uiverse-card:hover .uiverse-shine-effect {
                    animation: uiverse-shine 2.5s infinite;
                }
                .uiverse-card:hover .uiverse-btn-icon {
                    animation: uiverse-pulse 1.5s infinite;
                }
            `}</style>

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
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
                        Explore our core capabilities. Cards slide continuously every 3 seconds—hover over any card to pause.
                    </motion.p>
                </div>

                {/* 3-Card Spotlight Carousel */}
                <div 
                    className="relative w-full h-[480px] md:h-[520px] flex items-center justify-center max-w-[1200px] mx-auto px-4 md:px-12"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* High Z-Index Translucent Glass Navigation Overlays */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-2 md:left-6 lg:left-8 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-orange-500/30 shadow-2xl flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:scale-110 active:scale-95 transition-all duration-300"
                        aria-label="Previous service"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-2 md:right-6 lg:right-8 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-orange-500/30 shadow-2xl flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:scale-110 active:scale-95 transition-all duration-300"
                        aria-label="Next service"
                    >
                        <ArrowRight className="w-6 h-6" />
                    </button>

                    {/* Cards Render Track */}
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                        {services.map((service, i) => {
                            // Signed offset for infinite loop
                            let offset = (i - activeIndex + services.length) % services.length;
                            if (offset > services.length / 2) {
                                offset -= services.length;
                            } else if (offset < -services.length / 2) {
                                offset += services.length;
                            }

                            // Show ONLY 3 cards (left: -1, center: 0, right: 1) on desktop, 1 on mobile
                            const isCenter = offset === 0;
                            const isLeft = offset === -1;
                            const isRight = offset === 1;

                            if (!isCenter && !isLeft && !isRight) return null;

                            return (
                                <motion.div
                                    key={service.title}
                                    initial={false}
                                    animate={{
                                        x: isCenter ? 0 : isLeft ? '-105%' : '105%',
                                        scale: isCenter ? 1.05 : 0.85,
                                        opacity: isCenter ? 1 : 0.6,
                                        filter: isCenter ? 'blur(0px)' : 'blur(2px)',
                                        zIndex: isCenter ? 30 : 10,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 280,
                                        damping: 26,
                                        mass: 0.8
                                    }}
                                    onClick={() => setActiveIndex(i)}
                                    className={`absolute uiverse-card w-[280px] lg:w-[330px] h-[410px] md:h-[430px] bg-white dark:bg-[#0d0d0f] rounded-[28px] overflow-hidden border transition-all duration-500 flex flex-col justify-between p-6 group cursor-pointer ${
                                        isCenter 
                                            ? 'border-orange-500/50 shadow-[0_20px_50px_-10px_rgba(249,115,22,0.3)] dark:shadow-[0_20px_50px_-10px_rgba(249,115,22,0.15)] ring-2 ring-orange-500/20 pointer-events-auto' 
                                            : 'border-black/10 dark:border-white/10 shadow-md hover:opacity-80 hidden md:flex pointer-events-auto'
                                    }`}
                                >
                                    {/* Shine & Glow Hover Effects */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 dark:via-white/10 to-transparent opacity-0 group-hover:opacity-100 uiverse-shine-effect pointer-events-none transition-opacity duration-300 z-20" />
                                    <div className={`absolute -inset-2 bg-radial from-orange-500/30 via-transparent to-transparent opacity-0 ${isCenter ? 'group-hover:opacity-100' : ''} transition-opacity duration-500 pointer-events-none blur-xl`} />

                                    {/* Badge */}
                                    <div className={`absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider transition-all duration-300 z-20 shadow-md ${
                                        isCenter ? 'opacity-100 scale-100' : 'opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100'
                                    }`}>
                                        {service.badge}
                                    </div>

                                    {/* Top Image / Gradient Block */}
                                    <div className={`w-full h-36 md:h-40 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 shadow-md`}>
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.2),_transparent_40%)]" />
                                        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex-1 mt-4 flex flex-col justify-between z-10">
                                        <div>
                                            <h3 className={`text-xl font-bold text-slate-900 dark:text-white mb-2 transition-all duration-300 ${isCenter ? 'text-orange-500' : 'group-hover:text-orange-500'}`}>
                                                {service.title}
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-3">
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Footer Tags & Plus Action */}
                                        <div className="flex justify-between items-center mt-4 pt-3 border-t border-slate-100 dark:border-white/5">
                                            <div className="flex gap-2">
                                                {service.tags.map((tag, idx) => (
                                                    <span key={idx} className="text-[10px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-md">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className={`w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-md transition-all duration-300 ${isCenter ? 'scale-105 shadow-orange-500/40' : 'group-hover:scale-110'}`}>
                                                <Plus className="w-4 h-4 uiverse-btn-icon" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8 z-20 relative">
                    {services.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                                activeIndex === idx 
                                    ? 'w-8 bg-orange-500' 
                                    : 'w-2.5 bg-black/20 dark:bg-white/20 hover:bg-orange-500/50'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

