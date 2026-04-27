import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Building2, Globe2, Briefcase } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 px-6">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full opacity-10 dark:opacity-20 blur-[120px] pointer-events-none transition-opacity duration-300"
                 style={{ background: 'radial-gradient(circle, #ff6a00 0%, transparent 70%)' }} />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-5 dark:opacity-10 blur-[100px] pointer-events-none transition-opacity duration-300"
                 style={{ background: '#ff8533' }} />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-5 dark:opacity-10 blur-[120px] pointer-events-none transition-opacity duration-300"
                 style={{ background: '#cc5500' }} />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] dark:opacity-20 pointer-events-none mix-blend-overlay transition-opacity duration-300" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
                
                {/* Badge */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 dark:border-orange-500/30 bg-orange-500/5 dark:bg-orange-500/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(255,106,0,0.1)]"
                >
                    <Sparkles className="w-4 h-4 text-orange-500" />
                    <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm tracking-wide">Premium Digital Agency</span>
                </motion.div>

                {/* Headline */}
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                    className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] mb-8 text-black dark:text-white"
                >
                    <span className="block">Crafting Digital</span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 block mt-2">
                        Excellence.
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                    className="text-black/60 dark:text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    We build high-performance web applications, scalable enterprise portals, and immersive digital experiences for top-tier businesses across Tamil Nadu.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
                >
                    <a href="#projects" className="btn-primary flex items-center justify-center gap-2 text-base w-full sm:w-auto py-4 px-8 text-lg group">
                        View Our Projects
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#contact" className="btn-secondary flex items-center justify-center gap-2 text-base w-full sm:w-auto py-4 px-8 text-lg text-black dark:text-white border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5">
                        Start a Project
                    </a>
                </motion.div>

                {/* Features Row */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-20 pt-10 border-t border-black/5 dark:border-white/10 w-full max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-16"
                >
                    <div className="flex items-center gap-3 text-black/50 dark:text-white/50">
                        <Globe2 className="w-5 h-5 text-orange-500/80" />
                        <span className="font-medium text-sm uppercase tracking-wider">Web Apps</span>
                    </div>
                    <div className="flex items-center gap-3 text-black/50 dark:text-white/50">
                        <Building2 className="w-5 h-5 text-orange-500/80" />
                        <span className="font-medium text-sm uppercase tracking-wider">B2B Portals</span>
                    </div>
                    <div className="flex items-center gap-3 text-black/50 dark:text-white/50">
                        <Briefcase className="w-5 h-5 text-orange-500/80" />
                        <span className="font-medium text-sm uppercase tracking-wider">Enterprise UI</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
