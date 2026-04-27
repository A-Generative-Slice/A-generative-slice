import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tools, categories } from '../data/tools';
import { ToolCard } from './ToolCard';
import { LayoutGrid } from 'lucide-react';

export const ToolsSection = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All');

    const filtered = activeCategory === 'All'
        ? tools
        : tools.filter((t) => t.category === activeCategory);

    return (
        <section id="tools" className="py-32 px-6 relative z-20 bg-[#0a0a0a]">
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        <LayoutGrid className="w-4 h-4" />
                        Our Tool Ecosystem
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight"
                    >
                        Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Creators</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg md:text-xl"
                    >
                        Premium tools to accelerate your workflow. Buy once, own forever. 
                        No subscriptions, no hidden fees.
                    </motion.p>
                </div>

                {/* Category Tabs */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-center gap-2 mb-16 flex-wrap bg-[#111111]/80 backdrop-blur-md p-2 rounded-3xl border border-white/5 max-w-fit mx-auto"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`relative px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 z-10
                                ${activeCategory === cat ? 'text-white' : 'text-white/50 hover:text-white/80'}
                            `}
                        >
                            {activeCategory === cat && (
                                <motion.div
                                    layoutId="activeCategoryTab"
                                    className="absolute inset-0 bg-orange-500 rounded-2xl -z-10 shadow-[0_0_15px_rgba(255,106,0,0.3)]"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Tools Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((tool, i) => (
                            <motion.div
                                key={tool.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ToolCard tool={tool} index={i} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State / Count */}
                <motion.div 
                    layout
                    className="mt-12 text-center text-white/30 font-medium text-sm"
                >
                    Showing {filtered.length} of {tools.length} products
                </motion.div>
            </div>
        </section>
    );
};
