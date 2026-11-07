import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

/* Shared monochrome document shell for the Legal / Compliance pages. */

interface LegalLayoutProps {
    icon: ReactNode;
    eyebrow: string;
    title: ReactNode;
    intro: string;
    updated?: string;
    badge?: ReactNode;
    toc?: { id: string; label: string }[];
    children: ReactNode;
}

export const LegalLayout = ({ icon, eyebrow, title, intro, updated = 'November 7, 2026', badge, toc, children }: LegalLayoutProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
        >
            <section className="py-32 px-6 relative z-10 bg-[#fafafa] dark:bg-[#0a0a0a]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

                <div className="max-w-4xl mx-auto">
                    {/* Document Header */}
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 text-black/50 dark:text-white/50 font-bold tracking-widest uppercase text-xs mb-5"
                        >
                            {icon}
                            {eyebrow}
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6 tracking-tight"
                        >
                            {title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-black/60 dark:text-white/60 text-lg leading-relaxed"
                        >
                            {intro}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-8 flex flex-wrap items-center justify-center gap-3"
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#111] text-black/50 dark:text-white/50 text-xs font-mono font-medium">
                                Last updated · {updated}
                            </span>
                            {badge}
                        </motion.div>

                        {toc && toc.length > 0 && (
                            <motion.nav
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                aria-label="On this page"
                                className="mt-8 flex flex-wrap items-center justify-center gap-2"
                            >
                                {toc.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="px-3.5 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:border-black/30 dark:hover:border-white/30 text-xs font-semibold transition-all duration-300"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </motion.nav>
                        )}
                    </div>

                    {/* Document Body */}
                    <div className="space-y-6">
                        {children}
                    </div>

                    <LegalContactCard />
                </div>
            </section>
        </motion.div>
    );
};

interface LegalSectionProps {
    id: string;
    index: string;
    title: string;
    children: ReactNode;
}

export const LegalSection = ({ id, index, title, children }: LegalSectionProps) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="scroll-mt-28 bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-sm"
        >
            <div className="flex items-baseline gap-4 mb-5">
                <span className="font-mono text-xs font-bold text-black/30 dark:text-white/30 shrink-0">{index}</span>
                <h2 className="text-xl md:text-2xl font-black text-black dark:text-white tracking-tight">{title}</h2>
            </div>
            <div className="space-y-4 text-[15px] leading-relaxed text-black/60 dark:text-white/60">
                {children}
            </div>
        </motion.section>
    );
};

export const LegalList = ({ items }: { items: ReactNode[] }) => {
    return (
        <ul className="space-y-2.5">
            {items.map((item, i) => (
                <li key={i} className="flex gap-3">
                    <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-black/25 dark:bg-white/25 shrink-0" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
};

export const LegalSubHeading = ({ children }: { children: ReactNode }) => (
    <h3 className="text-base font-bold text-black dark:text-white pt-2">{children}</h3>
);

export const LegalContactCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] dark:bg-[#111] border border-black/10 dark:border-white/10 p-8 md:p-12 shadow-2xl"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <div className="relative z-10">
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">Contact & Compliance</p>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">Questions? Talk to a human.</h3>
                <p className="text-white/50 text-sm mb-8 max-w-lg leading-relaxed">
                    For any privacy, terms, or data-deletion question, reach out directly. We respond to every request personally.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="mailto:agenerativeslice@gmail.com"
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all duration-300 group">
                        <Mail className="w-5 h-5 text-white/60 group-hover:text-white transition-colors shrink-0" />
                        <div className="min-w-0">
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-0.5">Email</p>
                            <p className="text-white text-sm font-semibold truncate">agenerativeslice@gmail.com</p>
                        </div>
                    </a>
                    <a href="tel:+917812891494"
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all duration-300 group">
                        <Phone className="w-5 h-5 text-white/60 group-hover:text-white transition-colors shrink-0" />
                        <div className="min-w-0">
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-0.5">Phone / WhatsApp</p>
                            <p className="text-white text-sm font-semibold">+91 78128 91494</p>
                        </div>
                    </a>
                    <a href="https://agenerativeslice.com" target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all duration-300 group">
                        <Globe className="w-5 h-5 text-white/60 group-hover:text-white transition-colors shrink-0" />
                        <div className="min-w-0">
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-0.5">Website</p>
                            <p className="text-white text-sm font-semibold truncate">agenerativeslice.com</p>
                        </div>
                    </a>
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                        <MapPin className="w-5 h-5 text-white/60 shrink-0" />
                        <div className="min-w-0">
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-0.5">Studio</p>
                            <p className="text-white text-sm font-semibold">Chennai, Tamil Nadu, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};