import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare, MapPin, Clock } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { submitForm } from '../utils/formSubmit';
import { formConfig } from '../data/config';

export const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        const result = await submitForm(formData, {
            subject: `New Enquiry from ${formData.name}`,
            formType: 'Contact Enquiry'
        });

        if (result.success) {
            setStatus('sent');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 4000);
        } else {
            const subject = encodeURIComponent(`New Enquiry from ${formData.name}`);
            const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
            window.open(`mailto:${formConfig.businessEmail}?subject=${subject}&body=${body}`, '_blank');
            setStatus('idle');
        }
    };

    return (
        <section id="contact" className="py-32 px-6 relative bg-white dark:bg-[#0a0a0a]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

            <div className="max-w-6xl mx-auto">
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
                    {/* Location & Map */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col space-y-6"
                    >
                        <div className="bg-gray-50 dark:bg-[#111111]/80 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-3xl p-8 shadow-2xl">
                            <h3 className="text-2xl font-black text-black dark:text-white mb-6">Visit Our Office</h3>
                            
                            <div className="flex items-start gap-4 mb-6">
                                <MapPin className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-black dark:text-white font-bold">Address</h4>
                                    <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed mt-1">
                                        No: 144, Valluvar Kottam High Rd,<br />
                                        Nungambakkam, Chennai,<br />
                                        Tamil Nadu 600034
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 mb-8">
                                <Clock className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-black dark:text-white font-bold">Working Hours</h4>
                                    <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed mt-1">
                                        Come visit us on working days<br />
                                        Monday to Friday, 9:00 AM to 7:00 PM
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-[250px] rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-inner">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6343516082496!2d80.24350107570494!3d13.058914612958431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526640c4a45a6d%3A0x6b4f707f18b14a60!2sValluvar%20Kottam%20High%20Rd%2C%20Nungambakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1714809240321!5m2!1sen!2sin" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen={false} 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="A Generative Slice Office Location"
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        onSubmit={handleSubmit} 
                        className="bg-gray-50 dark:bg-[#111111]/80 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
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
                </div>

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
