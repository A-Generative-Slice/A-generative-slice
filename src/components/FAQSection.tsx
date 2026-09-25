import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What kinds of businesses do you work with?",
            answer: "From local cloud kitchens, bridal couture ateliers, and architecture firms to fast-growing businesses who want their daily work automated. If you have customers to delight and hours of manual work to save, we're your crew."
        },
        {
            question: "Will I need to understand coding or tech to run this?",
            answer: "Zero. If you can use WhatsApp or send an email, you can comfortably run whatever we build for you. We keep dashboards and tools delightfully simple so you never have to wrestle with tech."
        },
        {
            question: "How fast can we launch?",
            answer: "Most projects go from initial chat to live launch in 1 to 3 weeks. We move quickly so you can start seeing real results instead of waiting through months of committee meetings."
        },
        {
            question: "What happens after launch? Will you disappear?",
            answer: "Never. We stay right by your side. If you ever need a tweak, want to add a feature, or have a question, we're just a quick phone call or message away."
        },
        {
            question: "How does pricing work? Any hidden surprises?",
            answer: "100% upfront and honest. We give you a straightforward, fixed quote before touching a single line of code. No hidden fees, no hourly padding, and no surprise bills."
        }
    ];

    return (
        <section className="py-32 px-6 bg-white dark:bg-[#050505]">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        <HelpCircle className="w-4 h-4" />
                        Common Questions
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-black dark:text-white"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gray-50 dark:bg-[#111111] border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden"
                        >
                            <button 
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-bold text-lg text-black dark:text-white">{faq.question}</span>
                                <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }}>
                                    <ChevronDown className="w-5 h-5 text-orange-500" />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-6 pb-6"
                                    >
                                        <p className="text-black/60 dark:text-white/60 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
