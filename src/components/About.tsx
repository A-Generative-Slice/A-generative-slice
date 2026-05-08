import { motion } from 'framer-motion';
import { Target, ShieldCheck, GraduationCap, MapPin, Building } from 'lucide-react';

export const About = () => {
    return (
        <section id="about" className="py-32 px-6 relative z-10 bg-[#fafafa] dark:bg-[#0a0a0a]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        <Target className="w-4 h-4" />
                        Our Story & Mission
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6 tracking-tight"
                    >
                        We built <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">A Generative Slice</span> because the industry is broken.
                    </motion.h2>
                </div>

                {/* Story Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-white dark:bg-[#111] p-8 rounded-3xl border border-black/5 dark:border-white/5 shadow-xl">
                            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-6">
                                <ShieldCheck className="w-6 h-6 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-black text-black dark:text-white mb-4">Fighting Corporate Exploitation</h3>
                            <p className="text-black/60 dark:text-white/60 leading-relaxed">
                                We witnessed corporate agencies scamming businesses by charging exorbitant fees for basic development that simply isn't needed. At A Generative Slice, we decided to change that. 
                                We offer <strong>100% Free Initial Consultancy</strong>. We sit down with you, identify your exact issues, build the precise project you need, and maintain it transparently. We ensure total trust by professionally signing all necessary BOI papers, FF papers, and legal agreements.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-white dark:bg-[#111] p-8 rounded-3xl border border-black/5 dark:border-white/5 shadow-xl">
                            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-6">
                                <GraduationCap className="w-6 h-6 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-black text-black dark:text-white mb-4">Student Mentorship & AI Awareness</h3>
                            <p className="text-black/60 dark:text-white/60 leading-relaxed">
                                Thousands of brilliant students struggle to land jobs because the education system doesn't teach modern, deployable tech. 
                                We are bridging this gap by actively providing 1-on-1 mentorship. We teach students how to build real products, identify their core strengths, and spread deep awareness of Artificial Intelligence to anyone passionate enough to learn.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Headquarters & Map */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-[#111] rounded-[3rem] border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Images */}
                        <div className="h-[400px] lg:h-auto relative group">
                            <img 
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
                                alt="Our Headquarters" 
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-3">
                                    <Building className="w-4 h-4" /> HQ
                                </div>
                                <h3 className="text-white text-3xl font-black">A Generative Slice Labs</h3>
                            </div>
                        </div>

                        {/* Location Info */}
                        <div className="p-10 md:p-16 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-3 text-orange-500 font-bold mb-6 bg-orange-500/10 px-4 py-2 rounded-xl w-fit">
                                <MapPin className="w-5 h-5" /> Visit Our Office
                            </div>
                            <h3 className="text-3xl font-black text-black dark:text-white mb-6">Based in the heart of Chennai.</h3>
                            
                            <div className="bg-gray-50 dark:bg-[#0a0a0a] p-6 rounded-2xl border border-black/5 dark:border-white/5 mb-8">
                                <p className="text-lg font-medium text-black dark:text-white leading-relaxed">
                                    No: 144, Valluvar Kottam High Rd, <br />
                                    Nungambakkam, Chennai,<br />
                                    Tamil Nadu 600034
                                </p>
                            </div>

                            {/* Embedded Map */}
                            <div className="w-full h-[200px] rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-inner">
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
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
