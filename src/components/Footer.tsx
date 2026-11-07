import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.jpg';

export const Footer = () => {
    const sitemap = [
        {
            heading: 'Studio',
            links: [
                { label: 'About', to: '/about/' },
                { label: 'Services', to: '/services/' },
                { label: 'Careers', to: '/careers/' },
                { label: 'Contact', to: '/contact/' }
            ]
        },
        {
            heading: 'Work',
            links: [
                { label: 'Client Projects', to: '/projects/' },
                { label: 'Slice Suite Products', to: '/products/' },
                { label: 'Insights & Guides', to: '/insights/' },
                { label: 'Case Studies', to: '/insights/sree-ambal-catering/' }
            ]
        },
        {
            heading: 'Chennai Services',
            links: [
                { label: 'Chennai Hub', to: '/chennai/' },
                { label: 'AI Automation', to: '/chennai/ai-automation/' },
                { label: 'Custom Software', to: '/chennai/custom-software/' },
                { label: 'Web Development', to: '/chennai/web-development/' }
            ]
        },
        {
            heading: 'More Chennai',
            links: [
                { label: 'ERP & CRM', to: '/chennai/erp-crm/' },
                { label: 'WhatsApp Automation', to: '/chennai/whatsapp-automation/' },
                { label: 'AI Chatbots', to: '/chennai/ai-chatbots/' },
                { label: 'Software Cost Guide', to: '/insights/custom-software-cost-chennai/' }
            ]
        }
    ];
    return (
        <footer className="py-12 px-6 border-t border-black/10 dark:border-white/10 bg-[#fafafa] dark:bg-[#050505]">
            {/* Crawlable sitemap — always in the DOM, on every route */}
            <nav aria-label="Sitemap" className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 mb-10 border-b border-black/5 dark:border-white/5">
                {sitemap.map((col) => (
                    <div key={col.heading}>
                        <p className="text-[10px] font-black uppercase tracking-widest text-black/40 dark:text-white/40 mb-3">{col.heading}</p>
                        <ul className="space-y-2">
                            {col.links.map((l) => (
                                <li key={l.to}>
                                    <Link to={l.to} className="text-xs font-medium text-black/55 dark:text-white/50 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-6">
                {/* Brand Identity */}
                <div className="flex flex-col items-center md:items-start gap-1">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg overflow-hidden shadow-lg shadow-black/10 dark:shadow-white/10">
                            <img src={logoImg} alt="A Generative Slice" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-black/70 dark:text-white/70 font-black text-xs uppercase tracking-widest">A GENERATIVE SLICE</span>
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

                {/* Legal & Copyright */}
                <div className="flex flex-col items-center md:items-end gap-2.5">
                    <nav aria-label="Legal" className="flex items-center gap-3 text-xs font-medium">
                        <Link to="/privacy" className="text-black/40 dark:text-white/30 hover:text-black dark:hover:text-white transition-colors duration-300">
                            Privacy Policy
                        </Link>
                        <span className="w-1 h-1 rounded-full bg-black/15 dark:bg-white/15" aria-hidden="true" />
                        <Link to="/terms" className="text-black/40 dark:text-white/30 hover:text-black dark:hover:text-white transition-colors duration-300">
                            Terms of Service
                        </Link>
                        <span className="w-1 h-1 rounded-full bg-black/15 dark:bg-white/15" aria-hidden="true" />
                        <Link to="/data-deletion" className="text-black/40 dark:text-white/30 hover:text-black dark:hover:text-white transition-colors duration-300">
                            Data Deletion
                        </Link>
                    </nav>
                    <p className="text-black/40 dark:text-white/30 text-sm font-medium text-center md:text-right">
                        © {new Date().getFullYear()} A Generative Slice. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
