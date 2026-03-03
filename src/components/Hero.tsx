export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
            {/* Background Glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-[120px]"
                style={{ background: 'radial-gradient(circle, #ff6a00 0%, transparent 70%)' }}
            />
            <div
                className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full opacity-10 blur-[80px]"
                style={{ background: '#ff8533' }}
            />

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl animate-fade-in-up">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
                    <div className="glow-dot" />
                    <span className="text-white/70 text-sm font-medium">Creative Tools for Builders</span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
                    <span className="gradient-text">Build Faster.</span>
                    <br />
                    <span className="text-white">Create Smarter.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    Premium plugins, AI chatbots, MCP tools, e-commerce solutions, and custom apps — built for creators, startups, and businesses.
                </p>

                {/* CTA Buttons */}
                <div className="flex items-center justify-center gap-4 flex-wrap">
                    <a href="#tools" className="btn-primary text-base">
                        Explore Tools →
                    </a>
                    <a href="#contact" className="btn-secondary text-base">
                        Contact Us
                    </a>
                </div>

                {/* Social Proof */}
                <div className="mt-16 flex items-center justify-center gap-8 text-white/30 text-sm flex-wrap">
                    <span>Blender</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>AI Chatbots</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>MCP Tools</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>E-Commerce</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>Custom Apps</span>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
                <div className="w-5 h-8 rounded-full border border-white/15 flex justify-center pt-1.5">
                    <div className="w-1 h-2 rounded-full bg-orange-500 animate-bounce" />
                </div>
            </div>
        </section>
    );
};
