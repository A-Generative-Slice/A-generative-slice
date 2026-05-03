import { services } from '../data/tools';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const ServicesSection = () => {
    return (
        <section id="services" className="py-28 px-6 relative">
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,106,0,0.3), transparent)' }}
            />

            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        <Sparkles className="w-4 h-4" />
                        Full-Stack SaaS Agency
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6 tracking-tight leading-tight"
                    >
                        We build, scale, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">maintain</span> for you
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-black/80 dark:text-white/80 text-lg md:text-xl font-medium"
                    >
                        We are a premier SaaS development company. From consulting and architecture design to global deployment, digital marketing, and automations—we handle the entire lifecycle of your product.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {services.map((service) => (
                        <div key={service.id} className="glass-card p-7 text-center group">
                            {/* Icon */}
                            <div className="text-4xl mb-5">{service.icon}</div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-white mb-3">{service.name}</h3>

                            {/* Description */}
                            <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>

                            {/* CTA */}
                            <a
                                href="#contact"
                                className="inline-block mt-5 text-orange-500 text-sm font-semibold hover:text-orange-400 transition-colors"
                            >
                                Get a Quote →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
