import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Building2, Globe2, Briefcase, MousePointer2 } from 'lucide-react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export const Hero = () => {
    const [init, setInit] = useState(false);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-6">
            
            {/* Particles Layer */}
            {init && (
                <div className="absolute inset-0 z-0">
                    <Particles
                        id="tsparticles"
                        className="h-full w-full pointer-events-none"
                        options={{
                            fullScreen: { enable: false },
                            fpsLimit: 120,
                            particles: {
                                color: { value: ["#ff6a00", "#ffffff"] },
                                links: {
                                    color: "#ff6a00",
                                    distance: 180,
                                    enable: true,
                                    opacity: 0.1,
                                    width: 1,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: { default: "out" },
                                    random: true,
                                    speed: 0.8,
                                    straight: false,
                                },
                                number: { density: { enable: true }, value: 50 },
                                opacity: { value: { min: 0.1, max: 0.4 } },
                                shape: { type: "circle" },
                                size: { value: { min: 1, max: 2 } },
                            },
                            detectRetina: true,
                        }}
                    />
                </div>
            )}

            {/* Premium Animated Backgrounds */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                    style={{ y: y1, opacity }}
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-500/20 blur-[150px]" 
                />
                <motion.div 
                    style={{ y: useTransform(scrollY, [0, 500], [0, -150]), opacity }}
                    className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-600/10 blur-[120px]" 
                />
            </div>

            {/* Refined Grid & Noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.08] pointer-events-none mix-blend-overlay" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
                
                {/* Floating Badge */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="group relative mb-10"
                >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                    <div className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-orange-500/20 bg-white/5 dark:bg-black/20 backdrop-blur-xl shadow-2xl">
                        <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
                        <span className="text-orange-600 dark:text-orange-400 font-bold text-xs uppercase tracking-[0.2em]">Next-Gen Digital Solutions</span>
                    </div>
                </motion.div>

                {/* Main Headline with Masking Effect */}
                <div className="overflow-hidden mb-8">
                    <motion.h1 
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9] text-black dark:text-white"
                    >
                        Design. <br />
                        <span className="relative inline-block mt-2">
                            <span className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 blur-2xl opacity-20"></span>
                            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                                Transform.
                            </span>
                        </span>
                    </motion.h1>
                </div>

                {/* Sophisticated Subtitle */}
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    className="text-black/70 dark:text-white/70 text-lg sm:text-2xl max-w-3xl mx-auto mb-14 leading-relaxed font-medium"
                >
                    We bridge the gap between imagination and reality, building elite digital products that define the future of business in Tamil Nadu.
                </motion.p>

                {/* High-Impact CTAs */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
                >
                    <a href="#projects" className="relative group px-10 py-5 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(255,255,255,0.05)]">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative flex items-center gap-2">
                            Explore Portfolio
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                    
                    <a href="#contact" className="group relative px-10 py-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 dark:bg-black/5 backdrop-blur-md font-bold text-lg overflow-hidden transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5 active:scale-95">
                        <span className="relative flex items-center gap-2 text-black dark:text-white">
                            Get in Touch
                            <MousePointer2 className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0" />
                        </span>
                    </a>
                </motion.div>

                {/* Premium Metrics / Features */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center justify-center w-full max-w-5xl mx-auto opacity-60"
                >
                    <div className="flex flex-col items-center gap-2 group cursor-default">
                        <div className="p-3 rounded-xl bg-orange-500/5 group-hover:bg-orange-500/10 transition-colors">
                            <Globe2 className="w-6 h-6 text-orange-500" />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.3em] font-black text-black dark:text-white">Global Tech</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 group cursor-default">
                        <div className="p-3 rounded-xl bg-orange-500/5 group-hover:bg-orange-500/10 transition-colors">
                            <Building2 className="w-6 h-6 text-orange-500" />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.3em] font-black text-black dark:text-white">Enterprise</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 group cursor-default">
                        <div className="p-3 rounded-xl bg-orange-500/5 group-hover:bg-orange-500/10 transition-colors">
                            <Briefcase className="w-6 h-6 text-orange-500" />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.3em] font-black text-black dark:text-white">Solutions</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 group cursor-default">
                        <div className="p-3 rounded-xl bg-orange-500/5 group-hover:bg-orange-500/10 transition-colors">
                            <Sparkles className="w-6 h-6 text-orange-500" />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.3em] font-black text-black dark:text-white">Innovation</span>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-orange-500 to-transparent" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-orange-500/50">Scroll</span>
            </motion.div>
        </section>
    );
};

