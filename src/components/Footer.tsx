import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import logoImg from '../assets/logo.jpg';

export const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-black/10 dark:border-white/10 bg-[#fafafa] dark:bg-[#050505]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-6">
                {/* Brand & Direct Contact */}
                <div className="flex flex-col items-center md:items-start gap-1">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg overflow-hidden shadow-lg shadow-black/10 dark:shadow-white/10">
                            <img src={logoImg} alt="A Generative Slice" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-black/70 dark:text-white/70 font-black text-xs uppercase tracking-widest">A GENERATIVE SLICE</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-black/50 dark:text-white/50 mt-1">
                        <a href="mailto:smdhussain@agenerativeslice.com" className="hover:text-orange-500 transition-colors">smdhussain@agenerativeslice.com</a>
                        <span>•</span>
                        <a href="tel:+917812891494" className="hover:text-orange-500 transition-colors">+91 78128 91494</a>
                    </div>
                </div>

                {/* Social Links - Perfectly Centered */}
                <div className="flex items-center justify-center gap-6">
                    <a href="https://www.instagram.com/a_generative_slice/" target="_blank" rel="noopener noreferrer"
                        className="text-black/40 dark:text-white/40 hover:text-pink-500 transition-colors" title="Instagram">
                        <FaInstagram className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/company/107795425" target="_blank" rel="noopener noreferrer"
                        className="text-black/40 dark:text-white/40 hover:text-blue-500 transition-colors" title="LinkedIn">
                        <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/A-Generative-Slice" target="_blank" rel="noopener noreferrer"
                        className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors" title="GitHub">
                        <FaGithub className="w-5 h-5" />
                    </a>
                    <a href="https://wa.me/917812891494" target="_blank" rel="noopener noreferrer"
                        className="text-black/40 dark:text-white/40 hover:text-green-500 transition-colors" title="WhatsApp">
                        <FaWhatsapp className="w-5 h-5" />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-black/40 dark:text-white/30 text-sm font-medium text-center md:text-right">
                    © {new Date().getFullYear()} A Generative Slice. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
