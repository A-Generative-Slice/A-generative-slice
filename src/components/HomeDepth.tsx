import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Bot, Code2, Globe, Database, MessageCircle, MessagesSquare,
    ArrowRight, ArrowUpRight, MapPin, BookOpen, Check
} from 'lucide-react';

const SERVICES = [
    { slug: 'ai-automation', icon: Bot, label: 'AI Automation', line: 'Workflows, document reading and follow-ups that run themselves.' },
    { slug: 'custom-software', icon: Code2, label: 'Custom Software', line: 'Portals, dashboards and internal tools built around your business.' },
    { slug: 'web-development', icon: Globe, label: 'Web Development', line: 'Fast websites, 3D showcases and stores designed to convert.' },
    { slug: 'erp-crm', icon: Database, label: 'ERP & CRM', line: 'Trading ERPs with OCR invoicing, inventory and credit recovery.' },
    { slug: 'whatsapp-automation', icon: MessageCircle, label: 'WhatsApp Automation', line: 'Official API ordering and support in Tamil and English.' },
    { slug: 'ai-chatbots', icon: MessagesSquare, label: 'AI Chatbots', line: 'Assistants grounded in your documents, not guesswork.' }
];

const CLIENTS = [
    { name: 'Sree Ambal Catering', note: 'Offline-first banquet inventory PWA with a Tamil/English catalog for remote venues.', to: '/insights/sree-ambal-catering/' },
    { name: 'Rose Chemicals', note: 'B2B distribution portal with conversational WhatsApp ordering powered by Sarvam AI.', to: '/insights/rose-chemicals/' },
    { name: 'Arusuvai Arasu', note: 'Banquet quotations generated in about 60 seconds, delivered as PDF proposals.', to: '/projects/' },
    { name: 'Project Mald', note: 'Full trading ERP: vision-OCR invoice reading, multi-currency FX, automated credit recovery.', to: '/projects/' }
];

/* Homepage depth: Chennai services, production proof, local advantage and reading links. */
export const HomeDepth = () => {
    return (
        <>
            {/* Chennai services */}
            <section className="py-24 px-6 relative">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 font-bold tracking-widest uppercase text-xs mb-4"
                        >
                            <MapPin className="w-3.5 h-3.5" /> Chennai, Tamil Nadu
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-black text-black dark:text-white mb-5 tracking-tight"
                        >
                            One Chennai studio for{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">everything your business runs on</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-black/60 dark:text-white/60 text-lg max-w-2xl mx-auto leading-relaxed"
                        >
                            From a single WhatsApp automation to a complete trading ERP, every service starts with a free consultation and a fixed quote. Each one has a dedicated Chennai page going deep on scope, process and honest pricing.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {SERVICES.map((s, i) => (
                            <motion.div
                                key={s.slug}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.45, delay: Math.min(i * 0.06, 0.3) }}
                            >
                                <Link
                                    to={`/chennai/${s.slug}/`}
                                    className="group flex items-start gap-4 h-full bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:border-orange-500/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    <span className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                                        <s.icon className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="flex items-center gap-1.5 font-black text-black dark:text-white tracking-tight mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                            {s.label} in Chennai
                                            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                        </span>
                                        <span className="block text-sm text-black/55 dark:text-white/55 leading-relaxed">{s.line}</span>
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <Link to="/chennai/" className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 dark:text-orange-400 hover:gap-3 transition-all">
                            Explore the full Chennai hub <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mt-10 max-w-3xl mx-auto text-center text-black/60 dark:text-white/60 leading-relaxed"
                    >
                        Not sure which page fits your problem? Start with the workflow that wastes the most hours. If your team retypes orders or invoices, look at AI automation and WhatsApp ordering. If stock, credit and shipments live in spreadsheets, look at ERP and CRM. If customers cannot find you online, start with web development. And if you simply want a tool that matches how your business actually runs, custom software is the honest answer. Every path begins the same way: a free call, a fixed quote, and milestones you can see.
                    </motion.p>
                </div>
            </section>

            {/* Production proof — dark band */}
            <section className="py-24 px-6 bg-[#0a0a0a] dark:bg-[#111] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(251,146,60,0.12),transparent_50%)] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-14">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-orange-400 font-bold tracking-widest uppercase text-xs mb-4"
                        >
                            Proof, not promises
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-black text-white mb-5 tracking-tight"
                        >
                            Real systems, real Chennai businesses
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-white/55 text-lg max-w-2xl mx-auto leading-relaxed"
                        >
                            Eight client systems are live in production right now — taking orders, reading invoices, booking venues and recovering credit. These are a few of them, with daily users and real stakes.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25 }}
                            className="text-white/45 text-base max-w-2xl mx-auto leading-relaxed mt-4"
                        >
                            Each system was scoped from a real workflow, quoted at a fixed price, and delivered in milestones the client could demo before paying. Several run in Tamil and English side by side, and a few keep working when the network at a remote venue drops — because that is the reality they were built for.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {CLIENTS.map((c, i) => (
                            <motion.div
                                key={c.name}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.45, delay: Math.min(i * 0.07, 0.3) }}
                            >
                                <Link
                                    to={c.to}
                                    className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-orange-500/40 transition-all duration-300"
                                >
                                    <span className="flex items-center justify-between gap-3 mb-3">
                                        <span className="font-black text-white tracking-tight">{c.name}</span>
                                        <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                                    </span>
                                    <span className="text-sm text-white/55 leading-relaxed">{c.note}</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link to="/projects/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] transition-all duration-300">
                            See all client work <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link to="/insights/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-sm font-bold hover:bg-white/10 transition-all duration-300">
                            Read the case studies
                        </Link>
                    </div>
                </div>
            </section>

            {/* Local advantage */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-orange-500 dark:text-orange-400 font-bold tracking-widest uppercase text-xs mb-4">The local advantage</p>
                        <h2 className="text-3xl md:text-4xl font-black text-black dark:text-white mb-6 tracking-tight">
                            Why working with a Chennai studio matters
                        </h2>
                        <div className="space-y-4 text-black/60 dark:text-white/60 leading-relaxed">
                            <p>
                                Software for a Chennai business has to survive Chennai reality: orders that arrive as WhatsApp voice notes, invoices photographed on a phone, staff who switch between Tamil and English mid-sentence, and venues where the network drops. We build for that reality because we work inside it — our studio is in Nungambakkam, and our clients are caterers, distributors, traders and builders across this city.
                            </p>
                            <p>
                                Being local also means accountability you can feel. You can meet the founder at the studio or at your office, demo progress in person, and reach a human on phone or WhatsApp when something needs attention. No ticket queue, no offshore handoff, no account manager relaying messages to a team you never see.
                            </p>
                            <p>
                                And when your system needs to grow — a new module, a new language, a new integration — the people who built it are still the people maintaining it. That continuity is the difference between software that compounds in value and software that quietly rots.
                            </p>
                            <p>
                                The same studio discipline applies whether you are a two-person trading house near Parrys Corner, a manufacturer in the Ambattur industrial estate, a clinic or showroom in T. Nagar, or a services team on the OMR IT corridor. We scope to your size and your rhythm, quote honestly for it, and build only what earns its keep. If a simpler fix serves you better than custom software, we will say so on the first call — that honesty is why clients stay with us for years.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-sm"
                    >
                        <h3 className="font-black text-black dark:text-white tracking-tight text-lg mb-6">How every engagement runs</h3>
                        <ul className="space-y-5">
                            {[
                                { t: 'Free discovery call', d: 'We walk through your actual workflow and tell you honestly whether software is worth it.' },
                                { t: 'Fixed written quote', d: 'Scope, milestones, price and timeline — approved by you before any code is written.' },
                                { t: 'Milestone delivery', d: 'You pay against delivered, demoable progress. Most projects launch in one to three weeks.' },
                                { t: 'Launch and lasting support', d: 'Deployed on infrastructure you own, with your team trained and a human always reachable.' }
                            ].map((step, i) => (
                                <li key={step.t} className="flex gap-4">
                                    <span className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/25 flex items-center justify-center shrink-0 font-mono text-xs font-bold text-orange-600 dark:text-orange-400">
                                        {i + 1}
                                    </span>
                                    <span>
                                        <span className="block font-bold text-black dark:text-white text-sm mb-0.5">{step.t}</span>
                                        <span className="block text-sm text-black/55 dark:text-white/55 leading-relaxed">{step.d}</span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/10 flex flex-wrap gap-2">
                            {['You own the code', 'Tamil + English', 'No hourly padding', 'NDA on request'].map((chip) => (
                                <span key={chip} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                                    <Check className="w-3 h-3" /> {chip}
                                </span>
                            ))}
                        </div>
                        <p className="mt-6 text-sm text-black/55 dark:text-white/55 leading-relaxed">
                            Under the hood, every system runs on a modern, maintainable stack: React and TypeScript in the browser, Python and FastAPI behind it, Gemini, LangChain or Ollama for the AI layer, Supabase and PostgreSQL for data, and Nginx on cloud infrastructure you control. We choose boring, proven tools over fashionable ones, because your business needs software that still runs in five years and that any competent engineer can maintain. That is the whole philosophy: proven tools, honest scope, lasting support.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Reading teaser */}
            <section className="pb-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                            <div>
                                <p className="text-orange-500 dark:text-orange-400 font-bold tracking-widest uppercase text-xs mb-3">From our insights</p>
                                <h2 className="text-2xl md:text-3xl font-black text-black dark:text-white tracking-tight">Learn before you spend</h2>
                            </div>
                            <Link to="/insights/" className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 dark:text-orange-400 hover:gap-3 transition-all shrink-0">
                                All insights <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <p className="text-black/60 dark:text-white/60 leading-relaxed mb-8 max-w-3xl">
                            Before you spend a rupee on software, read what the market actually charges and how real projects unfold. Our guides publish honest Chennai price ranges and plain-language playbooks, and our case studies show exactly what we built, why, and what changed for the client afterwards.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link to="/insights/custom-software-cost-chennai/" className="group border border-black/5 dark:border-white/10 rounded-2xl p-6 hover:border-orange-500/40 hover:shadow-md transition-all duration-300">
                                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-3">
                                    <BookOpen className="w-3 h-3" /> Pricing guide · 10 min
                                </span>
                                <p className="font-black text-black dark:text-white leading-snug mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                    How much does custom software cost in Chennai? (2026 honest guide)
                                </p>
                                <p className="text-sm text-black/55 dark:text-white/55 leading-relaxed">
                                    Typical market ranges for websites, apps, ERPs and AI automation — and how to read any quote before you sign it.
                                </p>
                            </Link>
                            <Link to="/insights/ai-automation-real-estate-chennai/" className="group border border-black/5 dark:border-white/10 rounded-2xl p-6 hover:border-orange-500/40 hover:shadow-md transition-all duration-300">
                                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-3">
                                    <BookOpen className="w-3 h-3" /> Industry playbook · 9 min
                                </span>
                                <p className="font-black text-black dark:text-white leading-snug mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                    AI automation for Chennai real estate: leads & site visits
                                </p>
                                <p className="text-sm text-black/55 dark:text-white/55 leading-relaxed">
                                    Stop portal lead leakage with instant WhatsApp follow-up, Tamil AI qualification and automated booking.
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};