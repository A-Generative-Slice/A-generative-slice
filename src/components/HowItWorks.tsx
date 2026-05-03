import { motion } from 'framer-motion';
import { LayoutTemplate, Code, Rocket } from 'lucide-react';

export const HowItWorks = () => {
    const steps = [
        {
            num: "01",
            title: "Architecture",
            description: "We define the technical blueprint and user experience foundations that ensure long-term scalability.",
            icon: <LayoutTemplate className="w-8 h-8 text-orange-500" />
        },
        {
            num: "02",
            title: "Engineering",
            description: "Our elite engineers build your product using the most advanced frameworks and performance optimizations.",
            icon: <Code className="w-8 h-8 text-orange-500" />
        },
        {
            num: "03",
            title: "Deployment",
            description: "We handle the global rollout and infrastructure scaling to ensure a flawless launch and reliable performance.",
            icon: <Rocket className="w-8 h-8 text-orange-500" />
        }
    ];

    return (
        <section id="process" className="py-32 px-6 relative bg-[#fafafa] dark:bg-[#0a0a0a]">
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        Our Process
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tight"
                    >
                        From <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Thought</span> to Product
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connection Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent -translate-y-1/2 z-0" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 mb-8 rounded-[2rem] bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:border-orange-500/30 transition-all duration-500">
                                {step.icon}
                            </div>
                            
                            <div className="absolute top-0 right-0 -mr-4 -mt-4 text-8xl font-black text-black/[0.02] dark:text-white/[0.02] pointer-events-none group-hover:text-orange-500/5 transition-colors duration-500">
                                {step.num}
                            </div>

                            <h3 className="text-2xl font-black text-black dark:text-white mb-4 tracking-tight">
                                {step.title}
                            </h3>
                            <p className="text-black/60 dark:text-white/60 leading-relaxed max-w-sm mx-auto">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
