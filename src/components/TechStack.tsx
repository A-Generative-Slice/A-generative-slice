import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiPostgresql, SiMongodb, SiTensorflow, SiPytorch, SiVercel, SiFramer, SiOpenai } from 'react-icons/si';

export const TechStack = () => {
    const techRow1 = [
        { name: 'React', icon: FaReact, color: 'text-[#61DAFB]' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-[#339933]' },
        { name: 'Python', icon: FaPython, color: 'text-[#3776AB]' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#4169E1]' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]' },
    ];

    const techRow2 = [
        { name: 'Docker', icon: FaDocker, color: 'text-[#2496ED]' },
        { name: 'AWS', icon: FaAws, color: 'text-[#FF9900]' },
        { name: 'TensorFlow', icon: SiTensorflow, color: 'text-[#FF6F00]' },
        { name: 'PyTorch', icon: SiPytorch, color: 'text-[#EE4C2C]' },
        { name: 'OpenAI', icon: SiOpenai, color: 'text-black dark:text-white' },
        { name: 'Vercel', icon: SiVercel, color: 'text-black dark:text-white' },
        { name: 'Framer', icon: SiFramer, color: 'text-[#0055FF]' },
    ];

    return (
        <section className="py-32 overflow-hidden bg-white dark:bg-[#050505] relative border-y border-black/5 dark:border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10">
                <div className="text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        <Layers className="w-4 h-4" />
                        Our Arsenal
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tight"
                    >
                        Tech Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Slice</span>
                    </motion.h2>
                </div>
            </div>

            <div className="relative w-full flex flex-col gap-8 -rotate-2 scale-105">
                {/* Row 1 - Marquee */}
                <div className="flex w-[200%] animate-marquee">
                    <div className="flex w-1/2 justify-around items-center gap-8 px-4">
                        {[...techRow1, ...techRow1].map((tech, i) => (
                            <div key={i} className="flex items-center gap-3 px-8 py-4 bg-gray-50 dark:bg-[#111111] border border-black/5 dark:border-white/10 rounded-2xl shadow-sm hover:scale-110 hover:border-orange-500/30 transition-all duration-300">
                                <tech.icon className={`w-8 h-8 ${tech.color}`} />
                                <span className="text-xl font-bold text-black/80 dark:text-white/80">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex w-1/2 justify-around items-center gap-8 px-4">
                        {[...techRow1, ...techRow1].map((tech, i) => (
                            <div key={i} className="flex items-center gap-3 px-8 py-4 bg-gray-50 dark:bg-[#111111] border border-black/5 dark:border-white/10 rounded-2xl shadow-sm hover:scale-110 hover:border-orange-500/30 transition-all duration-300">
                                <tech.icon className={`w-8 h-8 ${tech.color}`} />
                                <span className="text-xl font-bold text-black/80 dark:text-white/80">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 - Marquee Reverse */}
                <div className="flex w-[200%] animate-marquee-reverse">
                    <div className="flex w-1/2 justify-around items-center gap-8 px-4">
                        {[...techRow2, ...techRow2].map((tech, i) => (
                            <div key={i} className="flex items-center gap-3 px-8 py-4 bg-gray-50 dark:bg-[#111111] border border-black/5 dark:border-white/10 rounded-2xl shadow-sm hover:scale-110 hover:border-orange-500/30 transition-all duration-300">
                                <tech.icon className={`w-8 h-8 ${tech.color}`} />
                                <span className="text-xl font-bold text-black/80 dark:text-white/80">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex w-1/2 justify-around items-center gap-8 px-4">
                        {[...techRow2, ...techRow2].map((tech, i) => (
                            <div key={i} className="flex items-center gap-3 px-8 py-4 bg-gray-50 dark:bg-[#111111] border border-black/5 dark:border-white/10 rounded-2xl shadow-sm hover:scale-110 hover:border-orange-500/30 transition-all duration-300">
                                <tech.icon className={`w-8 h-8 ${tech.color}`} />
                                <span className="text-xl font-bold text-black/80 dark:text-white/80">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-reverse {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .animate-marquee-reverse {
                    animation: marquee-reverse 35s linear infinite;
                }
            `}</style>
        </section>
    );
};
