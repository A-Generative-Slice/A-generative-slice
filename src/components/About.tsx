import { motion } from 'framer-motion';
import { Target, Zap, Shield, Users } from 'lucide-react';

export const About = () => {
    return (
        <section id="about" className="py-32 px-6 relative bg-[#0a0a0a]">
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-4"
                        >
                            <Target className="w-4 h-4" />
                            Our Mission
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight"
                        >
                            A Generative <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Slice</span>
                        </motion.h2>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-white/60 text-lg leading-relaxed mb-10"
                        >
                            <p>
                                We're a one-person creative lab building premium tools for indie developers,
                                3D artists, and game creators. Every tool is crafted from real-world project experience —
                                from Blender plugins to robust automation pipelines.
                            </p>
                            <p>
                                Born out of a passion for efficiency, A Generative Slice is about making professional-grade
                                tools accessible at indie-friendly prices. No subscriptions, no bloat —
                                just tools that work and help you build faster.
                            </p>
                        </motion.div>

                        {/* Feature List */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="grid grid-cols-2 gap-6"
                        >
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Fast ROI</h4>
                                    <p className="text-white/40 text-sm">Tools that pay for themselves.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Own Forever</h4>
                                    <p className="text-white/40 text-sm">No recurring subscriptions.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Stats Card */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Background Gradients */}
                        <div className="absolute -inset-1 bg-gradient-to-br from-orange-500/30 to-purple-600/30 rounded-[2.5rem] blur-2xl opacity-50" />
                        
                        <div className="relative bg-[#111111]/90 backdrop-blur-xl border border-white/10 p-10 md:p-12 rounded-[2rem] shadow-2xl overflow-hidden">
                            {/* Inner Glow */}
                            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-20 blur-[60px] bg-orange-500 pointer-events-none" />

                            <div className="grid grid-cols-2 gap-8 relative z-10">
                                <div>
                                    <div className="text-5xl font-black text-white mb-2">30+</div>
                                    <div className="text-orange-500 font-medium text-sm tracking-wider uppercase">Tools Built</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-black text-white mb-2">100%</div>
                                    <div className="text-orange-500 font-medium text-sm tracking-wider uppercase">Indie Made</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-2">₹75</div>
                                    <div className="text-orange-500 font-medium text-sm tracking-wider uppercase">Starting At</div>
                                </div>
                                <div>
                                    <div className="flex items-center text-5xl font-black text-white mb-2">
                                        <Users className="w-10 h-10 mr-2 text-white/80" />
                                    </div>
                                    <div className="text-orange-500 font-medium text-sm tracking-wider uppercase">For Everyone</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
