import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';
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
            
            {/* Brand Background Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                    src="/home/smdhussain/.gemini/antigravity/brain/fc04ed52-ae7f-464a-904d-42479754dc08/generative_slice_bg_1777650176593.png" 
                    alt="Brand Background" 
                    className="w-full h-full object-cover opacity-20 dark:opacity-30 mix-blend-multiply dark:mix-blend-overlay scale-110 animate-pulse-slow"
                />
            </div>

            {/* Particles Layer */}
            {init && (
                <div className="absolute inset-0 z-0">
                    <Particles
                        id="tsparticles"
                        className="h-full w-full"
                        options={{
                            fullScreen: { enable: false },
                            fpsLimit: 120,
                            interactivity: {
                                events: {
                                    onClick: { enable: true, mode: "push" },
                                    onHover: { enable: true, mode: "grab" },
                                    resize: { enable: true },
                                },
                                modes: {
                                    push: { quantity: 4 },
                                    grab: { distance: 200, links: { opacity: 0.2 } },
                                },
                            },
                            particles: {
                                color: { value: ["#ff6a00", "#ffffff"] },
                                links: {
                                    color: "#ff6a00",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.1,
                                    width: 1,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: { default: "bounce" },
                                    random: true,
                                    speed: 1,
                                    straight: false,
                                },
                                number: { density: { enable: true }, value: 80 },
                                opacity: { value: { min: 0.1, max: 0.5 } },
                                shape: { type: "circle" },
                                size: { value: { min: 1, max: 3 } },
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
                
                {/* Main Headline with Masking Effect */}
                <div className="overflow-visible mb-8">
                    <motion.h1 
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tight leading-[0.85] text-black dark:text-white"
                    >
                        A <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                            GENERATIVE
                        </span> <br />
                        SLICE.
                    </motion.h1>
                </div>

                {/* Sophisticated Subtitle */}
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    className="text-black/70 dark:text-white/70 text-lg sm:text-2xl max-w-3xl mx-auto leading-relaxed font-medium"
                >
                    We bridge the gap between imagination and reality, building elite digital products that define the future of business globally.
                </motion.p>
            </div>


        </section>
    );
};

