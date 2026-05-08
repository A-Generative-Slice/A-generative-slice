import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, GraduationCap, Send } from 'lucide-react';

export const CareersSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', interest: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch('https://formspree.io/f/xdkogvnp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, subject: 'Mentorship Application' }),
            });
            if (res.ok) {
                setStatus('sent');
                setFormData({ name: '', email: '', interest: '' });
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

    const roles = [
        {
            title: "Stealth Intern",
            department: "Engineering",
            location: "Chennai (On-site)",
            type: "Internship"
        },
        {
            title: "Prompt Engineer",
            department: "AI/ML",
            location: "Remote",
            type: "Full-time"
        },
        {
            title: "Figma Designer",
            department: "Design",
            location: "Chennai (Hybrid)",
            type: "Contract"
        },
        {
            title: "Vibe Coder",
            department: "Frontend",
            location: "Chennai (On-site)",
            type: "Full-time"
        },
        {
            title: "Project Presentator",
            department: "Management",
            location: "Remote",
            type: "Part-time"
        }
    ];

    return (
        <section className="py-32 px-6 relative z-10 bg-[#fafafa] dark:bg-[#050505]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        <Briefcase className="w-4 h-4" />
                        Join Our Team
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6 tracking-tight"
                    >
                        Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Future</span> With Us
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-black/60 dark:text-white/60 text-lg"
                    >
                        We are always looking for passionate people to join our innovative team. Explore our open positions below.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto mb-32">
                    {roles.map((role, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col md:flex-row md:items-center justify-between p-8 rounded-3xl bg-white dark:bg-[#111111]/80 backdrop-blur-xl border border-black/5 dark:border-white/10 hover:border-orange-500/30 transition-all duration-300 shadow-xl shadow-black/5 dark:shadow-none"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">{role.title}</h3>
                                <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-black/50 dark:text-white/50">
                                    <span className="bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full">{role.department}</span>
                                    <span>•</span>
                                    <span>{role.location}</span>
                                    <span>•</span>
                                    <span className="text-orange-500">{role.type}</span>
                                </div>
                            </div>
                            <button className="mt-6 md:mt-0 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-bold text-sm hover:scale-105 transition-transform">
                                Apply Now <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Mentorship & Coaching Section */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white dark:bg-[#111] border border-black/5 dark:border-white/5 rounded-[3rem] p-10 lg:p-16 shadow-2xl">
                        <div>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-4"
                            >
                                <GraduationCap className="w-4 h-4" />
                                Student Programs
                            </motion.div>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6 tracking-tight"
                            >
                                Mentorship & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Coaching</span>
                            </motion.h2>
                            <p className="text-black/60 dark:text-white/60 text-lg mb-8">
                                Looking to break into tech? We offer 1-on-1 coaching, code reviews, and industry exposure to passionate students who want to build real-world AI and SaaS products.
                            </p>
                        </div>

                        <motion.form 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            onSubmit={handleSubmit}
                            className="bg-[#fafafa] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 rounded-[2rem] p-8 shadow-inner"
                        >
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-white dark:bg-[#111] border border-black/5 dark:border-white/5 rounded-2xl px-6 py-4 text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-orange-500/50 transition-all"
                                    placeholder="Your Name"
                                />
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-white dark:bg-[#111] border border-black/5 dark:border-white/5 rounded-2xl px-6 py-4 text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-orange-500/50 transition-all"
                                    placeholder="Your Email Address"
                                />
                                <textarea
                                    required
                                    rows={3}
                                    value={formData.interest}
                                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                                    className="w-full bg-white dark:bg-[#111] border border-black/5 dark:border-white/5 rounded-2xl px-6 py-4 text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-orange-500/50 transition-all resize-none"
                                    placeholder="What do you want to learn?"
                                />
                                <button
                                    type="submit"
                                    disabled={status !== 'idle'}
                                    className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs text-white flex items-center justify-center gap-3 transition-all duration-300
                                        ${status === 'sent' ? 'bg-green-500' : 'bg-orange-500 hover:bg-orange-600 shadow-xl shadow-orange-500/20'}
                                    `}
                                >
                                    {status === 'sent' ? 'Applied' : status === 'sending' ? 'Submitting...' : <>Apply for Mentorship <Send className="w-4 h-4" /></>}
                                </button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
};
