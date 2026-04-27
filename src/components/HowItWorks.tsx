import { motion } from 'framer-motion';
import { Search, CreditCard, Download, ArrowRight } from 'lucide-react';

const steps = [
    {
        number: '01',
        title: 'Browse',
        description: 'Explore our curated collection of tools built for indie creators and developers.',
        icon: <Search className="w-8 h-8" />,
    },
    {
        number: '02',
        title: 'Pay',
        description: 'Quick, secure checkout. UPI, cards, and wallets accepted. No subscriptions.',
        icon: <CreditCard className="w-8 h-8" />,
    },
    {
        number: '03',
        title: 'Download',
        description: 'Instant access. Download your files and start building right away.',
        icon: <Download className="w-8 h-8" />,
    },
];

export const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-32 px-6 relative bg-[#0a0a0a]">
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(255,106,0,0.8)]" />
                        How It Works
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight"
                    >
                        Three simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">steps</span>
                    </motion.h2>
                </div>

                {/* Steps */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-white/5 via-orange-500/20 to-white/5 -z-10" />

                    {steps.map((step, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className="text-center group relative"
                        >
                            {/* Connector Arrow for Mobile */}
                            {i !== steps.length - 1 && (
                                <div className="md:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/10">
                                    <ArrowRight className="w-6 h-6 rotate-90" />
                                </div>
                            )}

                            {/* Icon Circle */}
                            <div className="w-24 h-24 mx-auto rounded-3xl bg-[#111111] border border-white/10 flex items-center justify-center text-orange-500 mb-8 group-hover:bg-[#151515] group-hover:border-orange-500/30 group-hover:-translate-y-2 transition-all duration-300 shadow-xl relative z-10">
                                {step.icon}
                                {/* Subtle Glow */}
                                <div className="absolute inset-0 bg-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                            </div>

                            {/* Content */}
                            <div className="bg-[#111111]/50 backdrop-blur-md rounded-2xl border border-white/5 p-6 relative overflow-hidden">
                                <div className="absolute -right-4 -top-4 text-7xl font-black text-white/5 select-none pointer-events-none group-hover:text-orange-500/5 transition-colors duration-500">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed max-w-[250px] mx-auto">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
