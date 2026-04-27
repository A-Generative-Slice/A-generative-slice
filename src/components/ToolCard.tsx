import { motion } from 'framer-motion';
import { ShoppingCart, Code, Sparkles, Star } from 'lucide-react';
import type { Tool } from '../data/tools';

interface ToolCardProps {
    tool: Tool;
    index: number;
}

export const ToolCard = ({ tool, index }: ToolCardProps) => {
    const isComingSoon = tool.badge === 'Coming Soon';
    const isClientWork = tool.badge === 'Client Work';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative flex flex-col justify-between bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:border-orange-500/50 hover:bg-[#151515] transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-orange-500/10 overflow-hidden"
        >
            {/* Ambient Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                 style={{ background: 'radial-gradient(circle at 50% 0%, rgba(255, 106, 0, 0.15) 0%, transparent 60%)' }} />

            {/* Badge */}
            {tool.badge && (
                <div className="absolute top-6 right-6">
                    <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5 backdrop-blur-md border
                        ${isComingSoon ? 'bg-white/5 border-white/10 text-white/50' 
                        : isClientWork ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                        : 'bg-orange-500/10 border-orange-500/20 text-orange-400'}`}>
                        {tool.badge === 'Premium' && <Star className="w-3 h-3" />}
                        {tool.badge}
                    </span>
                </div>
            )}

            <div className="relative z-10">
                {/* Category & Tech */}
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-orange-500 font-bold text-xs uppercase tracking-widest">
                        {tool.category}
                    </span>
                    {tool.language && (
                        <>
                            <span className="w-1 h-1 rounded-full bg-white/20" />
                            <span className="text-white/40 text-xs font-mono bg-white/5 px-2 py-0.5 rounded-md border border-white/5 flex items-center gap-1">
                                <Code className="w-3 h-3" />
                                {tool.language}
                            </span>
                        </>
                    )}
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-orange-100 transition-colors">
                    {tool.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 h-auto min-h-[4rem]">
                    {tool.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-8">
                    {tool.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-white/70">
                            <Sparkles className="w-4 h-4 text-orange-500/80 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Pricing & CTA */}
            <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between mt-auto">
                <div>
                    {tool.price !== null ? (
                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-black text-white">{tool.currency}{tool.price}</span>
                            <span className="text-white/40 text-xs font-medium uppercase tracking-wider">/ one-time</span>
                        </div>
                    ) : (
                        <span className="text-sm font-bold text-white/50">{tool.priceLabel}</span>
                    )}
                </div>

                <a
                    href={isComingSoon ? undefined : tool.buyLink}
                    className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all
                        ${isComingSoon 
                            ? 'bg-white/5 text-white/30 cursor-not-allowed'
                            : isClientWork
                                ? 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                                : 'bg-orange-500 text-white hover:bg-orange-600 shadow-[0_0_20px_rgba(255,106,0,0.3)] hover:shadow-[0_0_30px_rgba(255,106,0,0.5)] transform hover:-translate-y-0.5'
                        }`}
                >
                    {isComingSoon ? 'Coming Soon' 
                     : isClientWork ? 'Contact' 
                     : <>Get Now <ShoppingCart className="w-4 h-4" /></>}
                </a>
            </div>
        </motion.div>
    );
};
