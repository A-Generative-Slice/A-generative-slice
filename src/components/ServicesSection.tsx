import { motion } from 'framer-motion';
import { Bot, Cloud, Workflow, Lightbulb, Users, Code, LineChart, Sparkles, ShoppingCart, GraduationCap, MessageSquare } from 'lucide-react';

export const ServicesSection = () => {
    const services = [
        {
            title: "Custom SaaS Development",
            description: "Full-stack application engineering from MVPs to enterprise-grade cloud native platforms.",
            icon: <Code className="w-8 h-8" />
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

    return (
        <section id="services" className="py-32 px-6 relative bg-white dark:bg-[#050505] overflow-hidden">
            {/* Elegant Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
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
                        Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">SaaS & Consulting</span> Solutions
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-black/60 dark:text-white/60 text-lg md:text-xl"
                    >
                        We architect, develop, and scale modern digital products while empowering teams and students through strategic guidance.
                    </motion.p>
                </div>

                {/* Apple-Style 3D Floating Glass Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 perspective-1000">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
                            className="h-full"
                        >
                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ 
                                    duration: 4 + (i % 3), 
                                    repeat: Infinity, 
                                    ease: "easeInOut",
                                    delay: i * 0.2 
                                }}
                                whileHover={{ 
                                    scale: 1.05, 
                                    rotateX: 2, 
                                    rotateY: -2,
                                    transition: { duration: 0.3 }
                                }}
                                className="group h-full relative bg-gray-50/80 dark:bg-[#111111]/80 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] overflow-hidden cursor-pointer flex flex-col"
                            >
                                {/* Apple-style subtle inner glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-16 h-16 rounded-3xl bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5 text-orange-500 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:text-orange-400 transition-all duration-500">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4 tracking-tight group-hover:text-orange-500 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-black/60 dark:text-white/60 leading-relaxed text-lg flex-1">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
