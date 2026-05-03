import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What industries do you specialize in?",
            answer: "We have extensive experience building scalable solutions for e-commerce, healthcare, logistics, and enterprise SaaS. However, our modular architecture allows us to adapt to any industry requirement."
        },
        {
            question: "How do you handle project timelines?",
            answer: "We follow agile methodologies. After an initial discovery phase, we break the project into 2-week sprints, ensuring continuous delivery and allowing for flexibility as your needs evolve."
        },
        {
            question: "Do you provide post-launch support?",
            answer: "Absolutely. We offer comprehensive maintenance and support packages, including server monitoring, security updates, and feature enhancements to ensure your product scales seamlessly."
        },
        {
            question: "What is your technology stack?",
            answer: "We primarily build with React, Next.js, Node.js, and Python for AI integrations. We also utilize modern cloud infrastructure like AWS and serverless architectures for maximum scalability."
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
