import React, { useRef, useState, useEffect } from 'react';
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

interface TechItem {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    usedIn?: string;
}

const TechMarqueeRow = ({ 
    items, 
    reverse = false, 
    speed = 0.5 
}: { 
    items: TechItem[], 
    reverse?: boolean, 
    speed?: number 
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const posRef = useRef(0);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const startPosRef = useRef(0);
    const resumeTimeoutRef = useRef<number | null>(null);

    // Initialize position and run smooth auto-scroll loop
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // One-time setup: start in middle so reverse scroll has room immediately
        if (posRef.current === 0 && reverse) {
            posRef.current = container.scrollWidth / 3;
            container.scrollLeft = posRef.current;
        }

        let animationId: number;

        const animate = () => {
            if (!isDraggingRef.current && !isPaused && container) {
                const step = reverse ? -speed : speed;
                posRef.current += step;

                const oneThird = container.scrollWidth / 3;
                if (posRef.current >= oneThird * 2) {
                    posRef.current -= oneThird;
                } else if (posRef.current <= 0 && reverse) {
                    posRef.current += oneThird;
                }

                container.scrollLeft = posRef.current;
            }
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationId);
            if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        };
    }, [isPaused, reverse, speed]);

    // Mouse Drag Listeners
    const onMouseDown = (e: React.MouseEvent) => {
        isDraggingRef.current = true;
        setIsPaused(true);
        startXRef.current = e.clientX;
        startPosRef.current = posRef.current;
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDraggingRef.current || !containerRef.current) return;
        const dx = e.clientX - startXRef.current;
        posRef.current = startPosRef.current - dx;
        
        // Wrap bounds while dragging
        const oneThird = containerRef.current.scrollWidth / 3;
        if (posRef.current >= oneThird * 2) posRef.current -= oneThird;
        if (posRef.current <= 0) posRef.current += oneThird;

        containerRef.current.scrollLeft = posRef.current;
    };

    const onMouseUp = () => {
        if (isDraggingRef.current) {
            isDraggingRef.current = false;
            if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
            resumeTimeoutRef.current = window.setTimeout(() => {
                setIsPaused(false);
            }, 1200);
        }
    };

    // Touch Drag Listeners (Mobile & Tablet)
    const onTouchStart = (e: React.TouchEvent) => {
        isDraggingRef.current = true;
        setIsPaused(true);
        startXRef.current = e.touches[0].clientX;
        startPosRef.current = posRef.current;
    };

    const onTouchMove = (e: React.TouchEvent) => {
        if (!isDraggingRef.current || !containerRef.current) return;
        const dx = e.touches[0].clientX - startXRef.current;
        posRef.current = startPosRef.current - dx;

        const oneThird = containerRef.current.scrollWidth / 3;
        if (posRef.current >= oneThird * 2) posRef.current -= oneThird;
        if (posRef.current <= 0) posRef.current += oneThird;

        containerRef.current.scrollLeft = posRef.current;
    };

    const onTouchEnd = () => {
        isDraggingRef.current = false;
        if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = window.setTimeout(() => {
            setIsPaused(false);
        }, 1500);
    };

    return (
        <div 
            ref={containerRef}
            className="overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing select-none no-scrollbar w-full py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={() => {
                onMouseUp();
                if (!isDraggingRef.current) {
                    setIsPaused(false);
                }
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseEnter={() => setIsPaused(true)}
        >
            <div className="flex gap-4 w-max">
                {/* 3 identical sets to ensure infinite wrapping in both directions during drag */}
                {[...items, ...items, ...items].map((tech, i) => (
                    <div 
                        key={i} 
                        draggable={false}
                        className="flex items-center gap-3.5 px-5 py-3.5 bg-slate-100/90 dark:bg-[#121212] border border-black/5 dark:border-white/10 rounded-2xl shrink-0 hover:border-orange-500/60 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.03)] group"
                    >
                        <tech.icon className={`w-7 h-7 ${tech.color} shrink-0 group-hover:scale-110 transition-transform`} />
                        <div className="flex flex-col">
                            <span className="text-base font-bold text-slate-800 dark:text-slate-100 tracking-tight whitespace-nowrap">{tech.name}</span>
                            {tech.usedIn && (
                                <span className="text-[10px] text-orange-500 font-semibold whitespace-nowrap">{tech.usedIn}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const TechStack = () => {
    const techRow1: TechItem[] = [
        { name: 'React', icon: FaReact, color: 'text-[#61DAFB]', usedIn: 'Core Web & Apps' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white', usedIn: 'Rose Chemicals B2B' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]', usedIn: 'Universal Standard' },
        { name: 'Three.js', icon: SiThreedotjs, color: 'text-black dark:text-white', usedIn: 'NASD-C & Spatial 3D' },
        { name: 'Blender 3D', icon: SiBlender, color: 'text-[#E87D0D]', usedIn: 'Procedural Models' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]', usedIn: 'Modern Design System' },
        { name: 'Vite', icon: SiVite, color: 'text-[#646CFF]', usedIn: 'Ultra-Fast Bundling' },
        { name: 'Python', icon: FaPython, color: 'text-[#3776AB]', usedIn: 'Automation & AI Scrapers' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-[#339933]', usedIn: 'Backend Runtimes' },
        { name: 'Rust', icon: SiRust, color: 'text-[#DEA584]', usedIn: 'LAMCAP Offline Engine' },
        { name: 'GSAP', icon: SiGreensock, color: 'text-[#88CE02]', usedIn: 'NAS Luxury Animations' },
        { name: 'Framer Motion', icon: SiFramer, color: 'text-[#0055FF]', usedIn: 'Interactive UI Physics' },
        { name: 'Figma', icon: SiFigma, color: 'text-[#F24E1E]', usedIn: 'Atelier Lookbooks' },
        { name: 'Go', icon: SiGo, color: 'text-[#00ADD8]', usedIn: 'High-Concurrency Services' },
    ];

    const techRow2: TechItem[] = [
        { name: 'Supabase', icon: SiSupabase, color: 'text-[#3ECF8E]', usedIn: 'Web-to-Lead & Database' },
        { name: 'Gemini AI', icon: SiGooglegemini, color: 'text-[#8E75FF]', usedIn: 'Project Mald & Zoho AI' },
        { name: 'OpenAI', icon: TbBrandOpenai, color: 'text-black dark:text-white', usedIn: 'Prospecting Agents' },
        { name: 'Ollama', icon: SiOllama, color: 'text-black dark:text-white', usedIn: 'KaiPulla Offline AI' },
        { name: 'Zoho CRM & Mail', icon: SiZoho, color: 'text-[#E42528]', usedIn: 'CRM Sync & eWidget' },
        { name: 'Firebase', icon: SiFirebase, color: 'text-[#FFCA28]', usedIn: 'Sree Ambal Offline PWA' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#4169E1]', usedIn: 'ERP Stock Ledger' },
        { name: 'Redis', icon: SiRedis, color: 'text-[#DC382D]', usedIn: 'Cache & Queue Layer' },
        { name: 'Docker', icon: FaDocker, color: 'text-[#2496ED]', usedIn: 'Containerized Services' },
        { name: 'Razorpay', icon: SiRazorpay, color: 'text-[#0C2340] dark:text-[#528FF0]', usedIn: 'B2B & Expo Payments' },
        { name: 'FastAPI', icon: SiFastapi, color: 'text-[#009688]', usedIn: 'FastMCP Microservices' },
        { name: 'AWS', icon: FaAws, color: 'text-[#FF9900]', usedIn: 'Cloud Infrastructure' },
        { name: 'Vercel', icon: SiVercel, color: 'text-black dark:text-white', usedIn: 'Edge CDN & Hosting' },
        { name: 'Cloudflare', icon: SiCloudflare, color: 'text-[#F38020]', usedIn: 'Global DNS & Security' },
    ];

    return (
        <section className="py-28 md:py-32 overflow-hidden bg-white dark:bg-[#050505] relative border-y border-black/5 dark:border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
                <div className="text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        <Layers className="w-4 h-4" />
                        Interactive Tech Engine
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
                        Drag, swipe, or explore the battle-tested technologies and AI models powering our client deployments and autonomous products.
                    </p>
                </div>
            </div>

            <div className="relative w-full flex flex-col gap-4">
                <TechMarqueeRow items={techRow1} reverse={false} speed={0.4} />
                <TechMarqueeRow items={techRow2} reverse={true} speed={0.4} />
            </div>
        </section>
    );
};
