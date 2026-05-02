import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch('https://formspree.io/f/xdkogvnp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('sent');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 4000);
            }
        } catch {
            const subject = encodeURIComponent(`New Enquiry from ${formData.name}`);
            const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
            window.open(`mailto:agenerativeslice@gmail.com?subject=${subject}&body=${body}`, '_blank');
            setStatus('idle');
        }
    };

    return (
        <section id="contact" className="py-32 px-6 relative bg-white dark:bg-[#0a0a0a]">
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        <MessageSquare className="w-4 h-4" />
                        Get in Touch
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6 tracking-tight"
                    >
                        Have a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">unique idea?</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-black/60 dark:text-white/60 text-lg max-w-xl mx-auto"
                    >
                        Whether it's a complex enterprise platform or a creative digital experience, we're ready to build it with precision.
                    </motion.p>
                </div>

                {/* Contact Form */}
                <motion.form 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    onSubmit={handleSubmit} 
                    className="bg-gray-50 dark:bg-[#111111]/80 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl mb-10 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 relative z-10">
                        <div>
                            <label className="text-black/50 dark:text-white/50 text-xs font-bold uppercase tracking-wider mb-2 block">Name</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-black dark:text-white placeholder-black/30 dark:placeholder-white/20 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="text-black/50 dark:text-white/50 text-xs font-bold uppercase tracking-wider mb-2 block">Email</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-black dark:text-white placeholder-black/30 dark:placeholder-white/20 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>
                    <div className="mb-8 relative z-10">
                        <label className="text-black/50 dark:text-white/50 text-xs font-bold uppercase tracking-wider mb-2 block">Message</label>
                        <textarea
                            required
                            rows={5}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-black dark:text-white placeholder-black/30 dark:placeholder-white/20 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all resize-none"
                            placeholder="Tell us about your project or idea..."
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={status !== 'idle'}
                        className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 relative z-10
                            ${status === 'sent' 
                                ? 'bg-green-500 hover:bg-green-600' 
                                : 'bg-orange-500 hover:bg-orange-600 shadow-[0_0_20px_rgba(255,106,0,0.3)] hover:shadow-[0_0_30px_rgba(255,106,0,0.5)] transform hover:-translate-y-0.5'
                            } disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none`}
                    >
                        {status === 'sent' ? 'Message Sent Successfully!' : status === 'sending' ? 'Sending...' : <>Send Message <Send className="w-5 h-5" /></>}
                    </button>
                </motion.form>

                {/* Social Links */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                >
                    <a href="https://wa.me/919344115330" target="_blank" rel="noopener noreferrer" 
                       className="group flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-gray-50 dark:bg-[#111111] border border-black/5 dark:border-white/5 hover:border-green-500/50 hover:bg-green-500/5 transition-all">
                        <FaWhatsapp className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" />
                        <span className="text-black/70 dark:text-white/70 text-sm font-medium">WhatsApp</span>
                    </a>
                    <a href="https://www.instagram.com/a_generative_slice/" target="_blank" rel="noopener noreferrer"
                       className="group flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-gray-50 dark:bg-[#111111] border border-black/5 dark:border-white/5 hover:border-pink-500/50 hover:bg-pink-500/5 transition-all">
                        <FaInstagram className="w-6 h-6 text-pink-500 group-hover:scale-110 transition-transform" />
                        <span className="text-black/70 dark:text-white/70 text-sm font-medium">Instagram</span>
                    </a>
                    <a href="https://github.com/A-Generative-Slice" target="_blank" rel="noopener noreferrer"
                       className="group flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-gray-50 dark:bg-[#111111] border border-black/5 dark:border-white/5 hover:border-black/50 dark:hover:border-white/50 hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                        <FaGithub className="w-6 h-6 text-black dark:text-white group-hover:scale-110 transition-transform" />
                        <span className="text-black/70 dark:text-white/70 text-sm font-medium">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/company/107795425" target="_blank" rel="noopener noreferrer"
                       className="group flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-gray-50 dark:bg-[#111111] border border-black/5 dark:border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all">
                        <FaLinkedin className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
                        <span className="text-black/70 dark:text-white/70 text-sm font-medium">LinkedIn</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
