const steps = [
    {
        number: '01',
        title: 'Browse',
        description: 'Explore our curated collection of tools built for indie creators and developers.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Pay',
        description: 'Quick, secure checkout. UPI, cards, and wallets accepted. No subscriptions.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Download',
        description: 'Instant access. Download your files and start building right away.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
        ),
    },
];

export const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-28 px-6 relative">
            {/* Subtle divider glow */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,106,0,0.3), transparent)' }}
            />

            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">How It Works</span>
                    <h2 className="section-title text-white mt-3">
                        Three simple <span className="gradient-text">steps</span>
                    </h2>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="text-center group">
                            {/* Icon Circle */}
                            <div className="w-20 h-20 mx-auto rounded-2xl glass-card flex items-center justify-center text-orange-500 mb-6 group-hover:animate-pulse-glow transition-all">
                                {step.icon}
                            </div>

                            {/* Step Number */}
                            <span className="text-orange-500/30 text-xs font-bold tracking-widest">{step.number}</span>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mt-2 mb-3">{step.title}</h3>

                            {/* Description */}
                            <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
