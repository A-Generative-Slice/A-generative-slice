import { useState } from 'react';
import { tools, categories } from '../data/tools';
import { ToolCard } from './ToolCard';

export const ToolsSection = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All');

    const filtered = activeCategory === 'All'
        ? tools
        : tools.filter((t) => t.category === activeCategory);

    return (
        <section id="tools" className="py-28 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Our Tools</span>
                    <h2 className="section-title text-white mt-3">
                        Built for <span className="gradient-text">Creators</span>
                    </h2>
                    <p className="section-subtitle mx-auto mt-4">
                        30+ tools across 8 categories. Buy once, own forever.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${activeCategory === cat
                                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                                    : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {filtered.map((tool, i) => (
                        <ToolCard key={tool.id} tool={tool} index={i} />
                    ))}
                </div>

                {/* Count */}
                <p className="text-center text-white/20 text-sm mt-8">
                    Showing {filtered.length} of {tools.length} tools
                </p>
            </div>
        </section>
    );
};
