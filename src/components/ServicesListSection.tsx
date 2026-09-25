import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Bot, Workflow, Cloud, ShoppingCart, GraduationCap, LineChart, Lightbulb, Users, Sparkles, Calendar, Phone, MailOpen, Send } from 'lucide-react';
import { submitForm } from '../utils/formSubmit';

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

        // Save backup to localStorage
        try {
            const existing = JSON.parse(localStorage.getItem('ags_consult_leads') || '[]');
            existing.push({
                ...consultFormData,
                submittedAt: new Date().toISOString()
            });
            localStorage.setItem('ags_consult_leads', JSON.stringify(existing));
        } catch (err) {
            console.error('Local backup error:', err);
        }

        try {
            await submitForm(consultFormData, {
                subject: `Free Strategy Consultation Request - ${consultFormData.name}`,
                formType: 'Free Strategy Consultation Request'
            });
        } catch (err) {
            console.warn('Remote submission notice:', err);
        }

        setStatus('sent');
        setConsultFormData({
            name: '',
            email: '',
            contact: '',
            projectIdea: '',
            contactPref: 'email'
        });
        setTimeout(() => setStatus('idle'), 5000);
    };

    const services = [
        {
            title: "Websites & Portals That Sell",
            description: "Fast, beautiful, handcrafted websites and web apps that make your business look like a Fortune 500 company without the Fortune 500 price tag.",
            icon: <Code className="w-8 h-8" />,
            accent: "from-blue-500/20 to-indigo-500/20"
        },
        {
            title: "Smart AI Helpers & Chatbots",
            description: "Friendly AI chatbots and assistants that answer customer questions 24/7, take bookings, and never call in sick on Mondays.",
            icon: <Bot className="w-8 h-8" />,
            accent: "from-purple-500/20 to-pink-500/20"
        },
        {
            title: "Everyday Business Automation",
            description: "Get rid of boring repetitive chores. We connect your tools so emails send, spreadsheets update, and invoices generate themselves while you sleep.",
            icon: <Workflow className="w-8 h-8" />,
            accent: "from-orange-500/20 to-red-500/20"
        },
        {
            title: "Rock-Solid Hosting & Cloud",
            description: "No 3 AM server crashes or confusing cloud bills. We keep your apps fast, secure, and always online so you never lose a customer.",
            icon: <Cloud className="w-8 h-8" />,
            accent: "from-sky-500/20 to-blue-500/20"
        },
        {
            title: "Online Stores & Easy Checkout",
            description: "Clean online stores where customers can actually find what they want and pay in seconds via UPI, card, or WhatsApp.",
            icon: <ShoppingCart className="w-8 h-8" />,
            accent: "from-green-500/20 to-emerald-500/20"
        },
        {
            title: "Online Academies & Course Portals",
            description: "Everything you need to sell your knowledge online—smooth video streaming, simple student logins, and quizzes without clunky plugins.",
            icon: <GraduationCap className="w-8 h-8" />,
            accent: "from-yellow-500/20 to-amber-500/20"
        },
        {
            title: "Getting Found on Google & Socials",
            description: "Honest search engine optimization and targeted campaigns so local customers find you first instead of your competitors.",
            icon: <LineChart className="w-8 h-8" />,
            accent: "from-rose-500/20 to-red-500/20"
        },
        {
            title: "Friendly Tech Advice (100% Free)",
            description: "Got an idea but don't know where to start or how much it should cost? We sit down for a friendly chat, map out your options, and save you from overpaying.",
            icon: <Lightbulb className="w-8 h-8" />,
            accent: "from-amber-500/20 to-orange-500/20"
        },
        {
            title: "Real-World Student Mentorship",
            description: "We help passionate students skip outdated college theory and build real, working software so they can actually get hired.",
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
                        What We Can Build For You
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6 tracking-tight"
                    >
                        Handcrafted Tech, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Zero Complications</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-black/60 dark:text-white/60 text-lg"
                    >
                        Whether you need a brand-new website, an automated business workflow, or a friendly AI chatbot, we craft solutions that just work.
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
                                No Jargon, Just Honest Help
                            </motion.div>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6 tracking-tight leading-tight"
                            >
                                Grab a Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Strategy Chat</span>
                            </motion.h2>
                            
                            <p className="text-black/70 dark:text-white/60 text-lg mb-8 leading-relaxed">
                                You know your business better than anyone. You know what's eating up your time or what you want to achieve, even if you don't know the technical jargon.
                            </p>
                            
                            <p className="text-black/60 dark:text-white/50 text-md mb-8 leading-relaxed">
                                That's where we help. We sit down with you, listen carefully, and draw out a clear, step-by-step game plan—completely free of charge, with zero sales pressure.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-semibold text-black/80 dark:text-white/80">Friendly Phone or WhatsApp Call</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                                        <MailOpen className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-semibold text-black/80 dark:text-white/80">Simple, Clear Action Plan</span>
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
                            <h3 className="text-xl font-bold text-black dark:text-white mb-6">Request Your Free Chat</h3>
                            
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
                                    {status === 'sent' ? 'Request Received! We\'ll Talk Soon ✓' : status === 'sending' ? 'Sending Request...' : <>Book My Free Strategy Chat <Send className="w-4 h-4" /></>}
                                </button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
};
