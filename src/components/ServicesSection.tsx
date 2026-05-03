import { motion } from 'framer-motion';
import { Bot, Cloud, Workflow, Lightbulb, Users, Code, LineChart, Sparkles } from 'lucide-react';

export const ServicesSection = () => {
    return (
        <section id="services" className="py-32 px-6 relative bg-gray-50 dark:bg-[#0a0a0a]">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none" />

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

                {/* Premium Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-6">
                    {/* Agentic Workflow Setup - Large Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[2.5rem] bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 p-10 shadow-xl hover:shadow-2xl hover:border-orange-500/30 transition-all duration-500"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors duration-500 pointer-events-none" />
                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center mb-8 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-500">
                                <Bot className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-4xl font-black text-black dark:text-white mb-4">Agentic Workflow Setup</h3>
                            <p className="text-black/60 dark:text-white/60 text-lg max-w-sm leading-relaxed">
                                We design and deploy autonomous AI agents to handle your complex business logic, creating seamless, self-operating workflows that save thousands of hours.
                            </p>
                        </div>
                    </motion.div>

                    {/* Custom SaaS Development */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-1 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 p-8 shadow-lg hover:border-orange-500/30 transition-all duration-500"
                    >
                        <div className="h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors duration-500">
                                <Code className="w-7 h-7 text-black dark:text-white group-hover:text-orange-500 transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Custom SaaS Development</h3>
                            <p className="text-black/60 dark:text-white/60 leading-relaxed flex-1">
                                Full-stack application engineering from MVPs to enterprise-grade cloud native platforms.
                            </p>
                            <div className="mt-8 flex gap-2">
                                <span className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-xs font-bold uppercase tracking-wider text-black/50 dark:text-white/50">React</span>
                                <span className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-xs font-bold uppercase tracking-wider text-black/50 dark:text-white/50">Node.js</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Cloud Management */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 shadow-lg hover:border-orange-500/50 transition-all duration-500"
                    >
                        <div className="h-full flex flex-col justify-between">
                            <Cloud className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform duration-500" />
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Cloud Management</h3>
                                <p className="text-white/50 text-sm">Scalable infrastructure, CI/CD pipelines, and server optimization.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Consultation */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-orange-500 p-8 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-500"
                    >
                        <div className="h-full flex flex-col justify-between">
                            <Lightbulb className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-500" />
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Consultation</h3>
                                <p className="text-white/80 text-sm">Strategic IT and architecture guidance.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Intelligent Automation */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 p-8 shadow-lg hover:border-orange-500/30 transition-all duration-500 flex items-center gap-8"
                    >
                        <div className="w-20 h-20 shrink-0 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-orange-500/10 transition-colors duration-500">
                            <Workflow className="w-10 h-10 text-black dark:text-white group-hover:text-orange-500 transition-colors" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-black dark:text-white mb-3">Intelligent Automation</h3>
                            <p className="text-black/60 dark:text-white/60">Automate your marketing, HR, and sales funnels to scale operations with zero extra headcount.</p>
                        </div>
                    </motion.div>

                    {/* Student Mentorship */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 p-8 shadow-lg hover:border-orange-500/30 transition-all duration-500"
                    >
                        <div className="h-full flex flex-col justify-between">
                            <Users className="w-8 h-8 text-black/50 dark:text-white/50 group-hover:text-orange-500 transition-colors duration-500" />
                            <div>
                                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Student Mentorship</h3>
                                <p className="text-black/50 dark:text-white/50 text-sm">Empowering the next generation of engineers.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Digital Marketing */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 p-8 shadow-lg hover:border-orange-500/30 transition-all duration-500"
                    >
                        <div className="h-full flex flex-col justify-between">
                            <LineChart className="w-8 h-8 text-black/50 dark:text-white/50 group-hover:text-orange-500 transition-colors duration-500" />
                            <div>
                                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Digital Marketing</h3>
                                <p className="text-black/50 dark:text-white/50 text-sm">Data-driven growth strategies.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
