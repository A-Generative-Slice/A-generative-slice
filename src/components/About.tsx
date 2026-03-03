export const About = () => {
    return (
        <section id="about" className="py-28 px-6 relative">
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,106,0,0.3), transparent)' }}
            />

            <div className="max-w-4xl mx-auto">
                <div className="glass-card p-10 md:p-14 relative overflow-hidden">
                    {/* Background Accent */}
                    <div
                        className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-10 blur-[60px]"
                        style={{ background: '#ff6a00' }}
                    />

                    <div className="relative z-10">
                        <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">About</span>
                        <h2 className="section-title text-white mt-3 mb-6">
                            A Generative <span className="gradient-text">Slice</span>
                        </h2>
                        <div className="space-y-4 text-white/50 leading-relaxed">
                            <p>
                                We're a one-person creative lab building premium tools for indie developers,
                                3D artists, and game creators. Every tool is crafted from real-world project experience —
                                from Blender plugins to Unity exporters to shader collections.
                            </p>
                            <p>
                                Born out of a college dorm, A Generative Slice is about making professional-grade
                                tools accessible at student-friendly prices. No subscriptions, no bloat —
                                just tools that work.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/5">
                            <div>
                                <div className="text-2xl font-black text-white">3+</div>
                                <div className="text-white/30 text-sm mt-1">Tools Built</div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-white">100%</div>
                                <div className="text-white/30 text-sm mt-1">Indie Made</div>
                            </div>
                            <div>
                                <div className="text-2xl font-black gradient-text">₹75</div>
                                <div className="text-white/30 text-sm mt-1">Starting At</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
