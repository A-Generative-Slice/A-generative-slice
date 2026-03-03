import { services } from '../data/tools';

export const ServicesSection = () => {
    return (
        <section id="services" className="py-28 px-6 relative">
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,106,0,0.3), transparent)' }}
            />

            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Services</span>
                    <h2 className="section-title text-white mt-3">
                        We also <span className="gradient-text">build</span> for you
                    </h2>
                    <p className="section-subtitle mx-auto mt-4">
                        Need something custom? From AI chatbots to full-stack apps — we've got you covered.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {services.map((service) => (
                        <div key={service.id} className="glass-card p-7 text-center group">
                            {/* Icon */}
                            <div className="text-4xl mb-5">{service.icon}</div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-white mb-3">{service.name}</h3>

                            {/* Description */}
                            <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>

                            {/* CTA */}
                            <a
                                href="#contact"
                                className="inline-block mt-5 text-orange-500 text-sm font-semibold hover:text-orange-400 transition-colors"
                            >
                                Get a Quote →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
