import { Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws } from 'react-icons/fa';
import { 
    SiNextdotjs, SiTailwindcss, SiPostgresql, SiVercel, SiFramer, SiRust, SiGo, 
    SiRedis, SiFigma, SiCloudflare, SiTypescript, SiVite, SiSupabase, 
    SiThreedotjs, SiBlender, SiFirebase, SiGooglegemini, SiGreensock, 
    SiRazorpay, SiFastapi, SiOllama, SiZoho 
} from 'react-icons/si';
import { TbBrandOpenai } from 'react-icons/tb';

const TechMarqueeRow = ({ items, reverse = false }: { items: any[], reverse?: boolean }) => {
    return (
        <div className="overflow-hidden w-full select-none [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className={`flex gap-5 py-2.5 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
                {/* 2 duplicates guarantee 100% continuous translation without layout shifts */}
                {[...items, ...items].map((tech, i) => (
                    <div 
                        key={i} 
                        className="flex items-center gap-3.5 px-6 py-4 bg-slate-100/90 dark:bg-[#121212] border border-black/5 dark:border-white/10 rounded-2xl shrink-0 hover:border-orange-500/40 transition-colors"
                    >
                        <tech.icon className={`w-7 h-7 ${tech.color} shrink-0`} />
                        <span className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 tracking-tight whitespace-nowrap">{tech.name}</span>
                    </div>
                ))}
            </div>
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

            <div className="relative w-full flex flex-col gap-5">
                <TechMarqueeRow items={techRow1} reverse={false} />
                <TechMarqueeRow items={techRow2} reverse={true} />
            </div>
        </section>
    );
};
