import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Cloud, Workflow, Lightbulb, Users, Code, LineChart, Sparkles, ShoppingCart, GraduationCap, MessageSquare, ArrowRight, ArrowLeft } from 'lucide-react';

export const ServicesSection = () => {
    const services = [
        {
            title: "Custom SaaS Development",
            description: "Full-stack application engineering from MVPs to enterprise-grade cloud native platforms.",
            icon: <Code className="w-8 h-8" />
        },
        {
            title: "Agentic Workflow Setup",
            description: "We deploy autonomous AI agents to handle complex logic and self-operating workflows.",
            icon: <Bot className="w-8 h-8" />
        },
        {
            title: "Intelligent Automation",
            description: "Automate marketing, HR, and sales funnels to scale operations effortlessly.",
            icon: <Workflow className="w-8 h-8" />
        },
        {
            title: "Cloud Management",
            description: "Scalable infrastructure, serverless architectures, and CI/CD pipelines.",
            icon: <Cloud className="w-8 h-8" />
        },
        {
            title: "E-Commerce Solutions",
            description: "High-conversion storefronts, custom marketplaces, and seamless payment integrations.",
            icon: <ShoppingCart className="w-8 h-8" />
        },
        {
            title: "Learning Platforms",
            description: "Custom LMS architecture, student portals, and course management systems.",
            icon: <GraduationCap className="w-8 h-8" />
        },
        {
            title: "Chatbot Solutions",
            description: "AI-powered conversational agents for customer support, lead generation, and engagement.",
            icon: <MessageSquare className="w-8 h-8" />
        },
        {
            title: "Digital Marketing",
            description: "Data-driven growth strategies, SEO, and targeted ad campaigns.",
            icon: <LineChart className="w-8 h-8" />
        },
        {
            title: "Consultation",
            description: "Strategic IT guidance, product architecture, and tech feasibility analysis.",
            icon: <Lightbulb className="w-8 h-8" />
        },
        {
            title: "Student Mentorship",
            description: "Empowering the next generation of engineers through 1-on-1 guidance.",
            icon: <Users className="w-8 h-8" />
        }
    ];

    const [cards, setCards] = useState(services);

    const handleSwipe = (direction: 1 | -1 = 1) => {
        setCards((prev) => {
            const newCards = [...prev];
            if (direction === 1) {
                // Swipe Left -> Go Forward -> Move top to bottom
                const topCard = newCards.shift();
                if (topCard) newCards.push(topCard);
            } else {
                // Swipe Right -> Go Backward -> Move bottom to top
                const bottomCard = newCards.pop();
                if (bottomCard) newCards.unshift(bottomCard);
            }
            return newCards;
        });
    };

    return (
        <section id="services" className="py-32 px-6 relative bg-white dark:bg-[#050505] overflow-hidden border-t border-black/5 dark:border-white/5">
            {/* Subtle Orange Glow Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
                
                {/* Centered Text Content */}
                <div className="text-center max-w-3xl mb-24">
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
                        Swipe circularly through our core capabilities. We architect, develop, and scale modern digital products while empowering teams and students through strategic guidance.
                    </motion.p>
                </div>

                {/* Circular Fan Layout (Orange Theme) */}
                <div className="w-full relative h-[450px] flex justify-center items-center perspective-1000 mt-4">
                    <AnimatePresence mode="popLayout">
                        {cards.map((service, i) => {
                            // Render only top 3 cards in the fan
                            if (i > 2) return null;

                            const isTop = i === 0;
                            let xOffset = 0;
                            let yOffset = 0;
                            let scale = 1;
                            let rotate = 0;
                            let zIndex = 10 - i;

                            if (i === 0) {
                                xOffset = 0; scale = 1; rotate = 0; yOffset = 0;
                            } else if (i === 1) {
                                xOffset = -180; scale = 0.85; rotate = -8; yOffset = 15;
                            } else if (i === 2) {
                                xOffset = 180; scale = 0.85; rotate = 8; yOffset = 15;
                            }

                            return (
                                <motion.div
                                    key={service.title} // Crucial for framer-motion array swapping
                                    layout
                                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                    animate={{ 
                                        x: xOffset, 
                                        y: yOffset, 
                                        scale: scale, 
                                        rotateZ: rotate, 
                                        zIndex: zIndex, 
                                        opacity: 1 
                                    }}
                                    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    drag={isTop ? "x" : false}
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.8}
                                    onDragEnd={(_, info) => {
                                        if (info.offset.x > 100) handleSwipe(-1); // Swipe Right -> Go Backwards
                                        else if (info.offset.x < -100) handleSwipe(1); // Swipe Left -> Go Forwards
                                    }}
                                    // Make background orange-tinted
                                    className={`absolute w-full max-w-[500px] bg-gradient-to-br from-white via-orange-50/50 to-orange-100 dark:from-[#111] dark:via-[#150d05] dark:to-[#2a1a0a] border border-orange-500/20 rounded-[2.5rem] p-10 md:p-12 shadow-[0_20px_50px_-12px_rgba(249,115,22,0.15)] dark:shadow-[0_20px_50px_-12px_rgba(249,115,22,0.05)] ${isTop ? 'cursor-grab active:cursor-grabbing hover:border-orange-500/40' : 'pointer-events-none'} overflow-hidden backdrop-blur-xl`}
                                >
                                    
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-10">
                                            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-black border border-orange-500/20 text-orange-500 flex items-center justify-center shadow-md">
                                                {service.icon}
                                            </div>
                                            
                                            {/* Navigation Arrows inside the card */}
                                            {isTop && (
                                                <div className="flex gap-2">
                                                    <button 
                                                        onPointerDownCapture={(e) => e.stopPropagation()} // Prevents drag from intercepting click
                                                        onClick={() => handleSwipe(-1)} 
                                                        className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center hover:bg-orange-500 text-orange-500 hover:text-white transition-colors shadow-sm"
                                                    >
                                                        <ArrowLeft className="w-4 h-4" />
                                                    </button>
                                                    <button 
                                                        onPointerDownCapture={(e) => e.stopPropagation()} // Prevents drag from intercepting click
                                                        onClick={() => handleSwipe(1)} 
                                                        className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center hover:bg-orange-500 text-orange-500 hover:text-white transition-colors shadow-sm"
                                                    >
                                                        <ArrowRight className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                        <h3 className="text-3xl font-black text-black dark:text-white mb-4 tracking-tight leading-tight">
                                            {service.title}
                                        </h3>
                                        <p className="text-black/70 dark:text-white/70 leading-relaxed text-lg mb-10 font-medium">
                                            {service.description}
                                        </p>
                                        
                                        <div className="flex gap-3 mt-auto">
                                            <span className="px-5 py-2 bg-white dark:bg-black border border-orange-500/20 rounded-full text-xs font-black uppercase tracking-widest text-orange-600 dark:text-orange-500 shadow-sm">
                                                Enterprise
                                            </span>
                                            <span className="px-5 py-2 bg-white dark:bg-black border border-orange-500/20 rounded-full text-xs font-black uppercase tracking-widest text-orange-600 dark:text-orange-500 shadow-sm">
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
