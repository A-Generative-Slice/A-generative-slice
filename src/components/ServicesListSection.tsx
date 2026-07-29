import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Bot, Workflow, Cloud, ShoppingCart, GraduationCap, LineChart, Lightbulb, Users, Sparkles, Calendar, Phone, MailOpen, Send } from 'lucide-react';
import { submitForm } from '../utils/formSubmit';
import { formConfig } from '../data/config';

export const ServicesListSection = () => {
    const [consultFormData, setConsultFormData] = useState({
        name: '',
        email: '',
        contact: '',
        projectIdea: '',
        contactPref: 'email'
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleConsultSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        const result = await submitForm(consultFormData, {
            subject: `Free Strategy Consultation Request - ${consultFormData.name}`,
            formType: 'Free Strategy Consultation Request'
        });

        if (result.success) {
            setStatus('sent');
            setConsultFormData({
                name: '',
                email: '',
                contact: '',
                projectIdea: '',
                contactPref: 'email'
            });
            setTimeout(() => setStatus('idle'), 4000);
        } else {
            // Fallback to mailto link
            const subjectStr = encodeURIComponent(`Free Consultation Request - ${consultFormData.name}`);
            const bodyStr = encodeURIComponent(
                `Name: ${consultFormData.name}\n` +
                `Email: ${consultFormData.email}\n` +
                `Contact: ${consultFormData.contact}\n` +
                `Preferred Contact Mode: ${consultFormData.contactPref}\n\n` +
                `Project Idea / Goal:\n${consultFormData.projectIdea}`
            );
            window.open(`mailto:${formConfig.businessEmail}?subject=${subjectStr}&body=${bodyStr}`, '_blank');
            setStatus('idle');
        }
    };

    const services = [
        {
            title: "Custom SaaS & Web Development",
            description: "End-to-end bespoke software, MVPs, and stunning portfolios architected specifically for your business challenges.",
            icon: <Code className="w-8 h-8" />,
            accent: "from-blue-500/20 to-indigo-500/20"
        },
        {
            title: "Autonomous AI & Chatbots",
            description: "Advanced autonomous LLM-powered agents built to automate research, client support, or internal decision-making processes.",
            icon: <Bot className="w-8 h-8" />,
            accent: "from-purple-500/20 to-pink-500/20"
        },
        {
            title: "Intelligent Automation",
            description: "Automated, scalable sequences for cold emails, social media publishing, and HR funnels to skyrocket efficiency.",
            icon: <Workflow className="w-8 h-8" />,
            accent: "from-orange-500/20 to-red-500/20"
        },
        {
            title: "Cloud & DevOps Management",
            description: "Scalable infrastructure, serverless architectures, and CI/CD pipelines designed for maximum reliability and uptime.",
            icon: <Cloud className="w-8 h-8" />,
            accent: "from-sky-500/20 to-blue-500/20"
        },
        {
            title: "E-Commerce Solutions",
            description: "High-conversion storefronts, custom marketplaces, and seamless payment integrations optimized for revenue.",
            icon: <ShoppingCart className="w-8 h-8" />,
            accent: "from-green-500/20 to-emerald-500/20"
        },
        {
            title: "Learning Platforms (EdTech)",
            description: "Custom LMS architecture, student portals, and engaging course management systems tailored to your curriculum.",
            icon: <GraduationCap className="w-8 h-8" />,
            accent: "from-yellow-500/20 to-amber-500/20"
        },
        {
            title: "Digital Marketing & SEO",
            description: "Data-driven growth strategies, technical SEO optimization, and targeted ad campaigns to dominate your market.",
            icon: <LineChart className="w-8 h-8" />,
            accent: "from-rose-500/20 to-red-500/20"
        },
        {
            title: "Strategic Consultation",
            description: "Expert IT guidance, robust product architecture, and thorough tech feasibility analysis for your next big idea.",
            icon: <Lightbulb className="w-8 h-8" />,
            accent: "from-amber-500/20 to-orange-500/20"
        },
        {
            title: "Student Mentorship",
            description: "Empowering the next generation of engineers through 1-on-1 personalized guidance, code reviews, and career roadmap planning.",
            icon: <Users className="w-8 h-8" />,
            accent: "from-teal-500/20 to-emerald-500/20"
        }
    ];

    return (
        <section className="py-32 px-6 relative z-10 bg-[#fafafa] dark:bg-[#050505]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

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
                        Our Services
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6 tracking-tight"
                    >
                        Tailored Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Solutions</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-black/60 dark:text-white/60 text-lg"
                    >
                        We conceptualize, engineer, and deploy high-impact software, automation pipelines, and custom AI agents.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative rounded-[2rem] p-8 bg-white dark:bg-[#111111]/80 backdrop-blur-xl border border-black/5 dark:border-white/10 hover:border-orange-500/30 transition-all duration-300 shadow-xl shadow-black/5 dark:shadow-none hover:-translate-y-1"
                        >
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${service.accent} rounded-tr-[2rem] rounded-bl-[4rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            
                            <div className="w-16 h-16 rounded-2xl bg-orange-500/5 text-orange-500 border border-orange-500/10 flex items-center justify-center mb-6 shadow-inner group-hover:scale-115 transition-transform duration-300">
                                {service.icon}
                            </div>
                            
                            <h3 className="text-2xl font-bold text-black dark:text-white mb-4 relative z-10">{service.title}</h3>
                            <p className="text-black/60 dark:text-white/60 leading-relaxed text-sm relative z-10">{service.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Strategy Free Consultation Session Section */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-white dark:bg-[#111] border border-black/5 dark:border-white/5 rounded-[3rem] p-8 md:p-14 lg:p-16 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
                        
                        <div>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-4"
                            >
                                <Calendar className="w-4 h-4" />
                                Accelerate Your Business
                            </motion.div>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6 tracking-tight leading-tight"
                            >
                                Book a Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Strategy Consultation</span>
                            </motion.h2>
                            
                            <p className="text-black/70 dark:text-white/60 text-lg mb-8 leading-relaxed">
                                Most clients know what problem they face or what outcome they want, but might not know the exact technical solution required.
                            </p>
                            
                            <p className="text-black/60 dark:text-white/50 text-md mb-8 leading-relaxed">
                                That is where our strategy session comes in. We will map out your requirements, outline the technical roadmap, suggest the optimal software stack, and design a customized implementation plan—completely free of charge.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-semibold text-black/80 dark:text-white/80">Direct Call Guidance</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                                        <MailOpen className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-semibold text-black/80 dark:text-white/80">Custom Solution Roadmap</span>
                                </div>
                            </div>
                        </div>

                        {/* Consultation Intake Form */}
                        <motion.form 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            onSubmit={handleConsultSubmit}
                            className="bg-[#fafafa] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 rounded-[2.5rem] p-8 md:p-10 shadow-inner relative z-10"
                        >
                            <h3 className="text-xl font-bold text-black dark:text-white mb-6">Request Your Strategy Session</h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="text-black/50 dark:text-white/50 text-xs font-bold uppercase tracking-wider mb-2 block">Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={consultFormData.name}
                                        onChange={(e) => setConsultFormData({ ...consultFormData, name: e.target.value })}
                                        className="w-full bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-black/50 dark:text-white/50 text-xs font-bold uppercase tracking-wider mb-2 block">Email</label>
                                        <input
                                            type="email"
                                            required
                                            value={consultFormData.email}
                                            onChange={(e) => setConsultFormData({ ...consultFormData, email: e.target.value })}
                                            className="w-full bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-black/50 dark:text-white/50 text-xs font-bold uppercase tracking-wider mb-2 block">Contact / WhatsApp</label>
                                        <input
                                            type="tel"
                                            required
                                            value={consultFormData.contact}
                                            onChange={(e) => setConsultFormData({ ...consultFormData, contact: e.target.value })}
                                            className="w-full bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                                            placeholder="Phone or WhatsApp"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-black/50 dark:text-white/50 text-xs font-bold uppercase tracking-wider mb-2 block">Tell Us About Your Idea or Goal</label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={consultFormData.projectIdea}
                                        onChange={(e) => setConsultFormData({ ...consultFormData, projectIdea: e.target.value })}
                                        className="w-full bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all resize-none"
                                        placeholder="What are you trying to build? What challenges are you facing?"
                                    />
                                </div>

                                <div>
                                    <label className="text-black/50 dark:text-white/50 text-xs font-bold uppercase tracking-wider mb-2 block">Preferred Contact Channel</label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {['email', 'whatsapp', 'call'].map((channel) => (
                                            <button
                                                key={channel}
                                                type="button"
                                                onClick={() => setConsultFormData({ ...consultFormData, contactPref: channel })}
                                                className={`py-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all
                                                    ${consultFormData.contactPref === channel 
                                                        ? 'bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/20' 
                                                        : 'bg-white dark:bg-[#111] border-black/10 dark:border-white/10 text-black/60 dark:text-white/60 hover:border-orange-500/30'
                                                    }
                                                `}
                                            >
                                                {channel}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status !== 'idle'}
                                    className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs text-white flex items-center justify-center gap-3 transition-all duration-300 mt-2
                                        ${status === 'sent' ? 'bg-green-500' : 'bg-orange-500 hover:bg-orange-600 shadow-xl shadow-orange-500/20'}
                                    `}
                                >
                                    {status === 'sent' ? 'Consultation Requested!' : status === 'sending' ? 'Sending...' : <>Request Free Consultation <Send className="w-4 h-4" /></>}
                                </button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
};
