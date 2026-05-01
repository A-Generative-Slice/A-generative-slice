import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.jpg';

interface NavbarProps {
    isDark: boolean;
    toggleTheme: () => void;
}

export const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Teams', path: '/teams' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
            <nav
                className={`pointer-events-auto transition-all duration-500 ease-in-out px-6 py-3 rounded-2xl border backdrop-blur-xl shadow-2xl flex items-center gap-8 ${
                    scrolled 
                        ? 'bg-white/70 dark:bg-[#0a0a0a]/70 border-black/5 dark:border-white/10 scale-95' 
                        : 'bg-white/40 dark:bg-[#0a0a0a]/40 border-black/10 dark:border-white/10 scale-100'
                }`}
            >
                {/* Logo - Centered in logic, but left in flex for mobile. We'll adjust for desktop */}
                <Link to="/" className="flex items-center gap-3 group relative shrink-0">
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-8 h-8 rounded-lg overflow-hidden shadow-lg"
                    >
                        <img src={logoImg} alt="Logo" className="w-full h-full object-cover" />
                    </motion.div>
                    <span className="text-black dark:text-white font-black text-sm tracking-tighter uppercase hidden sm:block">
                        A Generative Slice
                    </span>
                </Link>

                {/* Vertical Divider */}
                <div className="h-6 w-[1px] bg-black/10 dark:bg-white/10 hidden md:block" />

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            to={link.path} 
                            className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 relative group ${
                                location.pathname === link.path 
                                    ? 'text-orange-500' 
                                    : 'text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white'
                            }`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 h-[2px] bg-orange-500 transition-all duration-300 rounded-full ${
                                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                            }`} />
                        </Link>
                    ))}
                </div>

                {/* Vertical Divider */}
                <div className="h-6 w-[1px] bg-black/10 dark:bg-white/10 hidden md:block" />

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <button 
                        onClick={toggleTheme} 
                        className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
                    >
                        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>
                    
                    {/* Mobile Menu Toggle */}
                    <button 
                        className="p-2 md:hidden text-black/70 dark:text-white/70"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="absolute top-full left-0 right-0 mt-4 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-2xl border border-black/5 dark:border-white/10 p-6 rounded-3xl flex flex-col gap-4 shadow-2xl md:hidden overflow-hidden"
                        >
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.name} 
                                    to={link.path} 
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-lg font-black tracking-tight p-4 rounded-2xl transition-all ${
                                        location.pathname === link.path
                                            ? 'bg-orange-500 text-white'
                                            : 'text-black/80 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/5'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
};
