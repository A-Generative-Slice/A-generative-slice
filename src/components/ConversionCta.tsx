import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { companyContacts } from '../data/config';

interface ConversionCtaProps {
    eyebrow?: string;
    title?: string;
    text?: string;
}

/* Shared dark conversion card used at the foot of Chennai service pages and insights. */
export const ConversionCta = ({
    eyebrow = 'Free consultation · Fixed quote · Chennai studio',
    title = "Let's build your system in Chennai",
    text = 'Tell us the workflow that hurts. The first call is free, the quote is fixed before we write code, and most projects go live in one to three weeks.'
}: ConversionCtaProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] dark:bg-[#111] border border-black/10 dark:border-white/10 p-8 md:p-12 shadow-2xl"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(251,146,60,0.18),transparent_55%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
                <p className="text-orange-400/90 text-xs font-bold uppercase tracking-widest mb-4">{eyebrow}</p>
                <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-4">{title}</h2>
                <p className="text-white/55 text-sm md:text-base mb-8 leading-relaxed">{text}</p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        to="/contact/"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                        Book a free consultation
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                        href={companyContacts.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/5 border border-white/15 text-white text-sm font-bold hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                    >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp us
                    </a>
                    <a
                        href={`tel:${companyContacts.phones.primary.replace(/\s/g, '')}`}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/5 border border-white/15 text-white text-sm font-bold hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                    >
                        <Phone className="w-4 h-4" />
                        {companyContacts.phones.primary}
                    </a>
                </div>
                <p className="mt-6 text-white/35 text-xs font-mono">
                    {companyContacts.address.line1}, {companyContacts.address.area} · {companyContacts.address.stateZip}
                </p>
            </div>
        </motion.div>
    );
};