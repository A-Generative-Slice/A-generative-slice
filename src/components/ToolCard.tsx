import type { Tool } from '../data/tools';

interface ToolCardProps {
    tool: Tool;
    index: number;
}

export const ToolCard = ({ tool, index }: ToolCardProps) => {
    const isComingSoon = tool.badge === 'Coming Soon';
    const isClientWork = tool.badge === 'Client Work';

    return (
        <div
            className="glass-card p-7 flex flex-col justify-between relative overflow-hidden group"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            {/* Badge */}
            {tool.badge && (
                <div
                    className={`absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-bold ${isComingSoon
                            ? 'bg-white/10 text-white/50'
                            : isClientWork
                                ? 'bg-blue-500/20 text-blue-400'
                                : 'bg-orange-500/20 text-orange-400'
                        }`}
                >
                    {tool.badge}
                </div>
            )}

            <div>
                {/* Category + Language */}
                <div className="flex items-center gap-3">
                    <span className="text-orange-500/70 text-xs font-semibold uppercase tracking-widest">
                        {tool.category}
                    </span>
                    {tool.language && (
                        <span className="text-white/20 text-xs font-mono">{tool.language}</span>
                    )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mt-3 mb-2">{tool.name}</h3>

                {/* Description */}
                <p className="text-white/45 text-sm leading-relaxed mb-4">
                    {tool.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                    {tool.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-white/55">
                            <svg className="w-3.5 h-3.5 text-orange-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Price + Buy */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div>
                    {tool.price !== null ? (
                        <>
                            <span className="text-xl font-black text-white">{tool.currency}{tool.price}</span>
                            <span className="text-white/25 text-xs ml-1">/ one-time</span>
                        </>
                    ) : (
                        <span className="text-sm font-semibold text-white/40">{tool.priceLabel}</span>
                    )}
                </div>
                <a
                    href={isComingSoon ? undefined : tool.buyLink}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${isComingSoon
                            ? 'bg-white/5 text-white/30 cursor-not-allowed'
                            : isClientWork
                                ? 'btn-secondary !py-2 !px-4 !text-xs'
                                : 'btn-primary !py-2 !px-4 !text-xs'
                        }`}
                >
                    {isComingSoon ? 'Notify Me' : isClientWork ? 'Contact Us' : 'Buy Now'}
                </a>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(255, 106, 0, 0.06) 0%, transparent 70%)',
                }}
            />
        </div>
    );
};
