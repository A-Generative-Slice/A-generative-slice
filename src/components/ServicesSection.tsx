import { motion } from 'framer-motion';
import { Bot, Cloud, Workflow, Lightbulb, Users, Code, LineChart, ShoppingCart, GraduationCap, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

export const ServicesSection = () => {
    const services = [
        {
            title: "Custom SaaS Development",
            description: "Full-stack application engineering from MVPs to enterprise-grade cloud native platforms. We architect robust, scalable, and secure systems tailored to your unique business logic.",
            icon: <Code className="w-8 h-8 text-white" />,
            badge: "POPULAR",
            tags: ["Full-Stack", "Architecture", "Cloud Native", "React & Node"],
            gradient: "from-orange-500 to-amber-500",
            span: "md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[350px] lg:min-h-[400px]"
        },
        {
            title: "Agentic Workflow Setup",
            description: "Deploy autonomous AI agents to handle complex logic and self-operating workflows.",
            icon: <Bot className="w-6 h-6 text-white" />,
            badge: "AI DRIVEN",
            tags: ["AI Agents", "Logic Workflows"],
            gradient: "from-amber-500 to-orange-600",
            span: "col-span-1"
        },
        {
            title: "Intelligent Automation",
            description: "Automate marketing, HR, and sales funnels to scale operations effortlessly.",
            icon: <Workflow className="w-6 h-6 text-white" />,
            badge: "AUTOMATION",
            tags: ["Scale Ops", "Efficiency"],
            gradient: "from-orange-600 to-rose-500",
            span: "col-span-1"
        },
        {
            title: "Cloud Management",
            description: "Scalable infrastructure, serverless architectures, and CI/CD pipelines.",
            icon: <Cloud className="w-6 h-6 text-white" />,
            badge: "CLOUD",
            tags: ["DevOps", "Infrastructure"],
            gradient: "from-orange-500 to-red-500",
            span: "col-span-1"
        },
        {
            title: "E-Commerce Solutions",
            description: "High-conversion storefronts, custom marketplaces, and seamless payments.",
            icon: <ShoppingCart className="w-6 h-6 text-white" />,
            badge: "REVENUE",
            tags: ["Storefronts", "Payments"],
            gradient: "from-amber-400 to-orange-500",
            span: "col-span-1"
        },
        {
            title: "Learning Platforms",
            description: "Custom LMS architecture, student portals, and course management systems.",
            icon: <GraduationCap className="w-6 h-6 text-white" />,
            badge: "EDTECH",
            tags: ["LMS", "Portals"],
            gradient: "from-orange-500 to-yellow-500",
            span: "col-span-1"
        },
        {
            title: "Chatbot Solutions",
            description: "AI-powered conversational agents for 24/7 customer support, dynamic lead generation, and highly engaging user experiences.",
            icon: <MessageSquare className="w-6 h-6 text-white" />,
            badge: "24/7 SUPPORT",
            tags: ["Conversational AI", "NLP", "Support"],
            gradient: "from-red-500 to-orange-500",
            span: "md:col-span-2 lg:col-span-2"
        },
        {
            title: "Digital Marketing",
            description: "Data-driven growth strategies, SEO, and targeted ad campaigns.",
            icon: <LineChart className="w-6 h-6 text-white" />,
            badge: "GROWTH",
            tags: ["Strategy", "SEO"],
            gradient: "from-orange-400 to-amber-600",
            span: "col-span-1"
        },
        {
            title: "Consultation",
            description: "Strategic IT guidance, product architecture, and tech feasibility analysis.",
            icon: <Lightbulb className="w-6 h-6 text-white" />,
            badge: "STRATEGY",
            tags: ["Feasibility", "Roadmap"],
            gradient: "from-amber-500 to-orange-500",
            span: "col-span-1"
        },
        {
            title: "Student Mentorship",
            description: "Empowering the next generation of engineers through 1-on-1 personalized guidance, code reviews, and career roadmap planning.",
            icon: <Users className="w-6 h-6 text-white" />,
            badge: "COMMUNITY",
            tags: ["Mentorship", "Guidance", "Career"],
            gradient: "from-orange-500 to-rose-600",
            span: "md:col-span-2 lg:col-span-2"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
    };

    return (
        <section id="services" className="py-32 px-4 md:px-8 relative bg-white dark:bg-[#050505] border-t border-black/5 dark:border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 font-semibold text-sm mb-6 border border-orange-500/20"
                    >
                        <Sparkles className="w-4 h-4" />
                        Core Capabilities
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-6"
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
                        We engineer digital products that dominate markets. From AI agents to cloud architectures, discover how we build the future.
                    </motion.p>
                </div>

                {/* Premium Bento Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                >
                    {services.map((service, i) => {
                        const isLarge = service.span.includes("row-span-2");
                        
                        return (
                            <motion.div
                                key={service.title}
                                variants={cardVariants}
                                className={`group relative bg-slate-50 dark:bg-[#0d0d0f] rounded-[32px] p-6 md:p-8 border border-black/5 dark:border-white/5 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-orange-500/30 dark:hover:border-orange-500/30 flex flex-col justify-between ${service.span}`}
                            >
                                {/* Hover Gradient Core */}
                                <div className={`absolute -inset-24 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.07] dark:group-hover:opacity-10 transition-opacity duration-700 blur-3xl pointer-events-none`} />
                                
                                {/* Badge */}
                                <div className="absolute top-6 right-6 z-20">
                                    <div className="bg-white/80 dark:bg-black/40 backdrop-blur-md border border-black/5 dark:border-white/10 text-orange-600 dark:text-orange-400 text-[10px] font-black uppercase px-3 py-1.5 rounded-full tracking-wider shadow-sm">
                                        {service.badge}
                                    </div>
                                </div>

                                {/* Icon Block */}
                                <div className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-out`}>
                                    <div className="w-full h-full rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="relative z-10 mt-auto">
                                    <h3 className={`font-black text-slate-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:${service.gradient} transition-colors duration-300 ${isLarge ? 'text-3xl lg:text-4xl' : 'text-2xl'}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-slate-600 dark:text-slate-400 leading-relaxed mb-6 ${isLarge ? 'text-lg lg:text-xl max-w-md' : 'text-base'}`}>
                                        {service.description}
                                    </p>
                                    
                                    {/* Tags & Action */}
                                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-black/5 dark:border-white/10">
                                        <div className="flex flex-wrap gap-2">
                                            {service.tags.map(tag => (
                                                <span key={tag} className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded-md">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1 shrink-0">
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};
