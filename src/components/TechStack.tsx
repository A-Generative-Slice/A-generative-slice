import { useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import { Layers } from 'lucide-react';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws } from 'react-icons/fa';
import { 
    SiNextdotjs, SiTailwindcss, SiPostgresql, SiVercel, SiFramer, SiRust, SiGo, 
    SiRedis, SiFigma, SiCloudflare, SiTypescript, SiVite, SiSupabase, 
    SiThreedotjs, SiBlender, SiFirebase, SiGooglegemini, SiGreensock, 
    SiRazorpay, SiFastapi, SiOllama, SiZoho 
} from 'react-icons/si';
import { TbBrandOpenai } from 'react-icons/tb';

const TechMarqueeRow = ({ items, reverse = false }: { items: any[], reverse?: boolean }) => {
    const baseX = useMotionValue(0);
    const speed = 0.008; // Slower, silky smooth readable scrolling speed
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
        <div className="flex overflow-hidden cursor-grab active:cursor-grabbing py-3 w-full">
            <motion.div 
                className="flex gap-6 pr-6 w-max transform-gpu will-change-transform"
                style={{ x }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
                onDrag={(_, info) => {
                    baseX.set(baseX.get() + info.delta.x * 0.03);
                }}
            >
                {/* Render 4 complete sets to guarantee seamless wrapping at 25% */}
                {[...items, ...items, ...items, ...items].map((tech, i) => (
                    <div key={i} className="flex items-center gap-3.5 px-6 py-4 bg-gray-50/90 dark:bg-[#111111]/90 backdrop-blur-sm border border-black/5 dark:border-white/10 rounded-2xl shadow-sm shrink-0 pointer-events-none hover:border-orange-500/30 transition-colors">
                        <tech.icon className={`w-7 h-7 ${tech.color}`} />
                        <span className="text-lg font-black text-black/85 dark:text-white/85 tracking-tight">{tech.name}</span>
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
        { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]' },
        { name: 'Three.js', icon: SiThreedotjs, color: 'text-black dark:text-white' },
        { name: 'Blender 3D', icon: SiBlender, color: 'text-[#E87D0D]' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
        { name: 'Vite', icon: SiVite, color: 'text-[#646CFF]' },
        { name: 'Python', icon: FaPython, color: 'text-[#3776AB]' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-[#339933]' },
        { name: 'Rust', icon: SiRust, color: 'text-[#DEA584]' },
        { name: 'GSAP', icon: SiGreensock, color: 'text-[#88CE02]' },
        { name: 'Framer Motion', icon: SiFramer, color: 'text-[#0055FF]' },
        { name: 'Figma', icon: SiFigma, color: 'text-[#F24E1E]' },
        { name: 'Go', icon: SiGo, color: 'text-[#00ADD8]' },
    ];

    const techRow2 = [
        { name: 'Supabase', icon: SiSupabase, color: 'text-[#3ECF8E]' },
        { name: 'Gemini AI', icon: SiGooglegemini, color: 'text-[#8E75FF]' },
        { name: 'OpenAI', icon: TbBrandOpenai, color: 'text-black dark:text-white' },
        { name: 'Ollama', icon: SiOllama, color: 'text-black dark:text-white' },
        { name: 'Zoho CRM & Mail', icon: SiZoho, color: 'text-[#E42528]' },
        { name: 'Firebase', icon: SiFirebase, color: 'text-[#FFCA28]' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#4169E1]' },
        { name: 'Redis', icon: SiRedis, color: 'text-[#DC382D]' },
        { name: 'Docker', icon: FaDocker, color: 'text-[#2496ED]' },
        { name: 'Razorpay', icon: SiRazorpay, color: 'text-[#0C2340] dark:text-[#528FF0]' },
        { name: 'FastAPI', icon: SiFastapi, color: 'text-[#009688]' },
        { name: 'AWS', icon: FaAws, color: 'text-[#FF9900]' },
        { name: 'Vercel', icon: SiVercel, color: 'text-black dark:text-white' },
        { name: 'Cloudflare', icon: SiCloudflare, color: 'text-[#F38020]' },
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
                        What Powers Our Tools
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tight mb-4"
                    >
                        Modern Tech, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Simple Results</span>
                    </motion.h2>
                    <p className="text-black/60 dark:text-white/60 text-lg max-w-2xl mx-auto">
                        Fast, dependable tools we use under the hood so your website and automations run smoothly around the clock.
                    </p>
                </div>
            </div>

            <div className="relative w-full flex flex-col gap-6 -rotate-1 scale-102">
                <TechMarqueeRow items={techRow1} reverse={false} />
                <TechMarqueeRow items={techRow2} reverse={true} />
            </div>
        </section>
    );
};
