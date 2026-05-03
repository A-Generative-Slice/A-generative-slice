import { useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import { Layers } from 'lucide-react';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaVuejs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiPostgresql, SiMongodb, SiTensorflow, SiPytorch, SiVercel, SiFramer, SiOpenai, SiRust, SiGo, SiRedis, SiGraphql, SiKubernetes, SiGooglecloud, SiFigma, SiCloudflare, SiSvelte } from 'react-icons/si';

const TechMarqueeRow = ({ items, reverse = false }: { items: any[], reverse?: boolean }) => {
    const baseX = useMotionValue(0);
    const speed = 0.02; // Slower, readable scrolling speed
    const velocity = reverse ? speed : -speed;
    const [isDragging, setIsDragging] = useState(false);

    useAnimationFrame((_, delta) => {
        if (!isDragging) {
            let moveBy = velocity * (delta / 16); // Normalize by roughly 60fps frame time
            baseX.set(baseX.get() + moveBy);
        }
    });

    // Wrap around infinitely. We duplicate the array 4 times to have a huge seamless block.
    // The width of 1 original set is exactly 25% of the total rendered flex container.
    const x = useTransform(baseX, (v) => {
        const wrapFactor = 25; // 25% represents one full set of items
        const wrappedValue = ((v % wrapFactor) - wrapFactor) % wrapFactor;
        return `${wrappedValue}%`;
    });

    return (
        <div className="flex overflow-hidden cursor-grab active:cursor-grabbing py-4 w-full">
            <motion.div 
                className="flex gap-8 pr-8 w-max"
                style={{ x }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
                onDrag={(_, info) => {
                    // Update baseX immediately when dragging
                    baseX.set(baseX.get() + info.delta.x * 0.05);
                }}
            >
                {/* Render 4 complete sets to guarantee seamless wrapping at 25% */}
                {[...items, ...items, ...items, ...items].map((tech, i) => (
                    <div key={i} className="flex items-center gap-4 px-8 py-5 bg-gray-50 dark:bg-[#111111] border border-black/5 dark:border-white/10 rounded-2xl shadow-sm shrink-0 pointer-events-none">
                        <tech.icon className={`w-8 h-8 ${tech.color}`} />
                        <span className="text-xl font-black text-black/80 dark:text-white/80 tracking-tight">{tech.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export const TechStack = () => {
    const techRow1 = [
        { name: 'React', icon: FaReact, color: 'text-[#61DAFB]' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
        { name: 'Vue', icon: FaVuejs, color: 'text-[#4FC08D]' },
        { name: 'Svelte', icon: SiSvelte, color: 'text-[#FF3E00]' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-[#339933]' },
        { name: 'Python', icon: FaPython, color: 'text-[#3776AB]' },
        { name: 'Rust', icon: SiRust, color: 'text-black dark:text-white' },
        { name: 'Go', icon: SiGo, color: 'text-[#00ADD8]' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#4169E1]' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]' },
        { name: 'Redis', icon: SiRedis, color: 'text-[#DC382D]' },
        { name: 'GraphQL', icon: SiGraphql, color: 'text-[#E10098]' },
    ];

    const techRow2 = [
        { name: 'Docker', icon: FaDocker, color: 'text-[#2496ED]' },
        { name: 'Kubernetes', icon: SiKubernetes, color: 'text-[#326CE5]' },
        { name: 'AWS', icon: FaAws, color: 'text-[#FF9900]' },
        { name: 'GCP', icon: SiGooglecloud, color: 'text-[#4285F4]' },
        { name: 'Figma', icon: SiFigma, color: 'text-[#F24E1E]' },
        { name: 'TensorFlow', icon: SiTensorflow, color: 'text-[#FF6F00]' },
        { name: 'PyTorch', icon: SiPytorch, color: 'text-[#EE4C2C]' },
        { name: 'OpenAI', icon: SiOpenai, color: 'text-black dark:text-white' },
        { name: 'Vercel', icon: SiVercel, color: 'text-black dark:text-white' },
        { name: 'Cloudflare', icon: SiCloudflare, color: 'text-[#F38020]' },
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

            <div className="relative w-full flex flex-col gap-6 -rotate-2 scale-105">
                <TechMarqueeRow items={techRow1} reverse={false} />
                <TechMarqueeRow items={techRow2} reverse={true} />
            </div>
        </section>
    );
};
