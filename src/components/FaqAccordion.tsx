import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import type { Faq } from '../data/contentTypes';

interface FaqAccordionProps {
    faqs: Faq[];
    title?: string;
    kicker?: string;
}

/* Native <details> accordion: FAQ text stays in the DOM for crawlers, works without JS. */
export const FaqAccordion = ({ faqs, title = 'Frequently asked questions', kicker = 'FAQ' }: FaqAccordionProps) => {
    return (
        <section id="faq" className="scroll-mt-28">
            <div className="mb-8">
                <p className="text-orange-500 dark:text-orange-400 font-bold tracking-widest uppercase text-xs mb-3">{kicker}</p>
                <h2 className="text-2xl md:text-3xl font-black text-black dark:text-white tracking-tight">{title}</h2>
            </div>
            <div className="space-y-3">
                {faqs.map((faq, i) => (
                    <motion.details
                        key={faq.q}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
                        className="group bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-2xl shadow-sm open:shadow-md open:border-orange-500/30 dark:open:border-orange-400/30 transition-all duration-300"
                    >
                        <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden">
                            <h3 className="text-sm md:text-base font-bold text-black dark:text-white leading-snug">{faq.q}</h3>
                            <span className="shrink-0 w-8 h-8 rounded-full border border-black/10 dark:border-white/15 flex items-center justify-center text-black/50 dark:text-white/50 group-open:bg-orange-500 group-open:border-orange-500 group-open:text-white group-open:rotate-45 transition-all duration-300">
                                <Plus className="w-4 h-4" />
                            </span>
                        </summary>
                        <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                            <p className="text-sm md:text-[15px] leading-relaxed text-black/60 dark:text-white/60">{faq.a}</p>
                        </div>
                    </motion.details>
                ))}
            </div>
        </section>
    );
};