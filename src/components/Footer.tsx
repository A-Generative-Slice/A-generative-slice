import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-black/10 dark:border-white/10 bg-[#fafafa] dark:bg-[#050505]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Brand */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg overflow-hidden shadow-lg shadow-black/10 dark:shadow-white/10">
                        <img src="/logo.jpg" alt="A Generative Slice" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-black/60 dark:text-white/60 font-medium text-sm tracking-wide">A Generative Slice</span>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-6">
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
                    <a href="https://wa.me/919344115330" target="_blank" rel="noopener noreferrer"
                        className="text-black/40 dark:text-white/40 hover:text-green-500 transition-colors" title="WhatsApp">
                        <FaWhatsapp className="w-5 h-5" />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-black/40 dark:text-white/30 text-sm font-medium">
                    © {new Date().getFullYear()} A Generative Slice. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
