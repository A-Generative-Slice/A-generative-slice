import { useState, useEffect } from 'react';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-navbar py-3' : 'py-5'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                        <span className="text-white font-black text-sm">A</span>
                    </div>
                    <span className="text-white font-bold text-lg tracking-tight">
                        A Generative Slice
                    </span>
                </a>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#tools" className="text-white/60 hover:text-white text-sm font-medium transition-colors">
                        Tools
                    </a>
                    <a href="#services" className="text-white/60 hover:text-white text-sm font-medium transition-colors">
                        Services
                    </a>
                    <a href="#about" className="text-white/60 hover:text-white text-sm font-medium transition-colors">
                        About
                    </a>
                    <a href="#contact" className="text-white/60 hover:text-white text-sm font-medium transition-colors">
                        Contact
                    </a>
                </div>

                {/* CTA */}
                <a href="#tools" className="btn-primary text-sm !py-2 !px-5">
                    Browse Tools
                </a>
            </div>
        </nav>
    );
};
