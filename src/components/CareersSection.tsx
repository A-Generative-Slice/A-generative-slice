import { motion } from 'framer-motion';
import { Briefcase, ArrowRight } from 'lucide-react';

export const CareersSection = () => {
    const roles = [
        {
            title: "Senior Full Stack Engineer",
            department: "Engineering",
            location: "Chennai (Hybrid)",
            type: "Full-time"
        },
        {
            title: "UI/UX Designer",
            department: "Design",
            location: "Remote",
            type: "Full-time"
        },
        {
            title: "AI/ML Engineer",
            department: "R&D",
            location: "Chennai (On-site)",
            type: "Full-time"
        }
    ];

    return (
        <section className="py-32 px-6 relative z-10 bg-white dark:bg-[#050505]">
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

                <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                    {roles.map((role, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col md:flex-row md:items-center justify-between p-8 rounded-3xl bg-gray-50 dark:bg-[#111111]/80 backdrop-blur-xl border border-black/5 dark:border-white/10 hover:border-orange-500/30 transition-all duration-300"
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
            </div>
        </section>
    );
};
