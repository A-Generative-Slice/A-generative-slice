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
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Teams', path: '/teams' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <div className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-end px-4 sm:px-10 pointer-events-none">
            <motion.nav
                layout
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                    mass: 0.5
                }}
                className={`pointer-events-auto px-2 py-2 sm:px-3 sm:py-2 rounded-[2rem] border shadow-2xl flex items-center gap-1 overflow-hidden transition-colors duration-500 ${
                    scrolled 
                        ? 'bg-white/80 dark:bg-[#0a0a0a]/80 border-black/10 dark:border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]' 
                        : 'bg-white/40 dark:bg-[#0a0a0a]/40 border-black/5 dark:border-white/10 shadow-none'
                } backdrop-blur-[24px]`}
            >
                {/* Island Logo */}
                <Link to="/" onClick={() => setIsOpen(false)} className="shrink-0">
                    <motion.div 
                        layout
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-black/5 dark:border-white/10 shadow-sm"
                    >
                        <img src={logoImg} alt="Logo" className="w-full h-full object-cover" />
                    </motion.div>
                </Link>

                {/* Nav Links Container */}
                <div className="flex items-center">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {isOpen && (
                            <motion.div 
                                layout
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="flex items-center gap-1 sm:gap-2 px-2"
                            >
                                {navLinks.map((link) => (
                                    <Link 
                                        key={link.name} 
                                        to={link.path} 
                                        onClick={() => setIsOpen(false)}
                                        className={`px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 relative whitespace-nowrap ${
                                            location.pathname === link.path 
                                                ? 'text-orange-500 bg-orange-500/10' 
                                                : 'text-black/60 dark:text-white/50 hover:text-orange-500 hover:bg-orange-500/5'
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Divider */}
                    <motion.div layout className="h-6 w-[1px] bg-black/10 dark:bg-white/10 mx-1" />

                    {/* Actions */}
                    <div className="flex items-center gap-1">
                        <button 
                            onClick={toggleTheme} 
                            className="p-2.5 rounded-xl hover:bg-orange-500/10 hover:text-orange-500 transition-all text-black/70 dark:text-white/70"
                            aria-label="Toggle Theme"
                        >
                            {isDark ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
                        </button>
                        
                        <button 
                            className={`p-2.5 rounded-xl transition-all duration-500 ${isOpen ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'hover:bg-orange-500/10 hover:text-orange-500 text-black/70 dark:text-white/70'}`}
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
                        </button>
                    </div>
                </div>
            </motion.nav>
        </div>
    );
};

