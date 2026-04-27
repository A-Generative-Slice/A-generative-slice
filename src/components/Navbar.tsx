import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavbarProps {
    isDark: boolean;
    toggleTheme: () => void;
}

export const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
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
                    ? 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-black/5 dark:border-white/10 py-4 shadow-xl' 
                    : 'bg-transparent py-6'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group z-50 relative">
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-black/10 dark:shadow-white/10"
                    >
                        <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                    </motion.div>
                    <span className="text-black dark:text-white font-bold text-xl tracking-tight hidden sm:block">
                        A Generative Slice
                    </span>
                </a>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8 bg-black/5 dark:bg-white/5 px-6 py-2 rounded-full border border-black/5 dark:border-white/10 backdrop-blur-md">
                    {['Projects', 'About', 'Contact'].map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`} 
                            className="text-black/70 dark:text-white/70 hover:text-orange-500 dark:hover:text-white text-sm font-medium transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full rounded-full" />
                        </a>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <button 
                        onClick={toggleTheme} 
                        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
                    >
                        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                    <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact" 
                        className="btn-primary text-sm !py-2.5 !px-6 flex items-center gap-2 group"
                    >
                        Work With Us
                    </motion.a>
                </div>

                {/* Mobile Menu Toggle & Theme */}
                <div className="flex items-center gap-4 md:hidden z-50 relative">
                    <button onClick={toggleTheme} className="text-black/70 dark:text-white/70">
                        {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                    </button>
                    <button 
                        className="p-2 text-black/70 dark:text-white/70"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 right-0 bg-white dark:bg-[#0a0a0a] border-b border-black/5 dark:border-white/10 p-6 flex flex-col gap-4 shadow-2xl md:hidden"
                        >
                            {['Projects', 'About', 'Contact'].map((item) => (
                                <a 
                                    key={item} 
                                    href={`#${item.toLowerCase()}`} 
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-black/80 dark:text-white/80 hover:text-orange-500 dark:hover:text-white text-lg font-medium p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                            <div className="h-[1px] bg-black/5 dark:bg-white/10 my-2" />
                            <a 
                                href="#contact" 
                                onClick={() => setMobileMenuOpen(false)}
                                className="btn-primary text-center py-3 w-full"
                            >
                                Work With Us
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};
