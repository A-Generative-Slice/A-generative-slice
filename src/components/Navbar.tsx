import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl' 
                    : 'bg-transparent py-6'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group z-50 relative">
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20"
                    >
                        <span className="text-white font-black text-lg leading-none">A</span>
                    </motion.div>
                    <span className="text-white font-bold text-xl tracking-tight hidden sm:block">
                        A Generative Slice
                    </span>
                </a>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
                    {['Tools', 'Services', 'About', 'Contact'].map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`} 
                            className="text-white/70 hover:text-white text-sm font-medium transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full rounded-full" />
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="#contact" className="text-white/70 hover:text-white text-sm font-medium transition-colors">
                        Sign In
                    </a>
                    <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#tools" 
                        className="btn-primary text-sm !py-2.5 !px-6 flex items-center gap-2 group"
                    >
                        Browse Tools
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden z-50 relative p-2 text-white/70 hover:text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl md:hidden"
                        >
                            {['Tools', 'Services', 'About', 'Contact'].map((item) => (
                                <a 
                                    key={item} 
                                    href={`#${item.toLowerCase()}`} 
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-white/80 hover:text-white text-lg font-medium p-2 rounded-lg hover:bg-white/5 transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                            <div className="h-[1px] bg-white/10 my-2" />
                            <a 
                                href="#tools" 
                                onClick={() => setMobileMenuOpen(false)}
                                className="btn-primary text-center py-3 w-full"
                            >
                                Browse Tools
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};
