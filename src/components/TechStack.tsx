import { motion } from 'framer-motion';
import { Code2, Layers, Cpu, Database, Palette, Globe } from 'lucide-react';

export const TechStack = () => {
    const techCategories = [
        {
            title: "Frontend",
            icon: <Palette className="w-6 h-6 text-orange-500" />,
            skills: ["React", "Next.js", "Vue", "Tailwind CSS", "Framer Motion", "Three.js"]
        },
        {
            title: "Backend",
            icon: <Database className="w-6 h-6 text-orange-500" />,
            skills: ["Node.js", "Python", "Rust", "PostgreSQL", "MongoDB", "Redis"]
        },
        {
            title: "AI & Infrastructure",
            icon: <Cpu className="w-6 h-6 text-orange-500" />,
            skills: ["TensorFlow", "PyTorch", "Docker", "AWS", "GitHub Actions", "Vercel"]
        }
    ];

    return (
        <section className="py-32 px-6 bg-gray-50 dark:bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        <Code2 className="w-4 h-4" />
                        Our Arsenal
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-black dark:text-white tracking-tight"
                    >
                        Technologies We <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Master</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {techCategories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white dark:bg-[#111111]/80 rounded-3xl p-8 border border-black/5 dark:border-white/10"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6">
                                {cat.icon}
                            </div>
                            <h3 className="text-xl font-bold text-black dark:text-white mb-6">{cat.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map(skill => (
                                    <span key={skill} className="px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 dark:bg-white/5 text-black/70 dark:text-white/70 border border-black/5 dark:border-white/5">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
