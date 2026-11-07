import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    MapPin, ArrowRight, ArrowUpRight, ChevronRight, Bot, Code2, Globe, Database,
    MessageCircle, MessagesSquare, Phone, Clock, ExternalLink, BookOpen
} from 'lucide-react';
import { CITY_PAGES } from '../data/cityPages';
import { companyContacts } from '../data/config';
import { useJsonLd, SITE, breadcrumbList, faqPage } from '../utils/seo';
import { FaqAccordion } from '../components/FaqAccordion';
import { ConversionCta } from '../components/ConversionCta';

const SERVICE_ICONS: Record<string, typeof Bot> = {
    'ai-automation': Bot,
    'custom-software': Code2,
    'web-development': Globe,
    'erp-crm': Database,
    'whatsapp-automation': MessageCircle,
    'ai-chatbots': MessagesSquare
};

const SERVICE_BLURBS: Record<string, string> = {
    'ai-automation': 'Agentic workflows, document OCR and follow-up systems that remove the repetitive work from your day. Live in one to three weeks.',
    'custom-software': 'Portals, dashboards, PWAs and internal tools engineered around how your business actually runs — not forced into a template.',
    'web-development': 'Fast, conversion-focused websites, 3D showcases and e-commerce built with React, Vite and TypeScript. Designed to be found.',
    'erp-crm': 'Trading ERPs with vision-OCR invoicing, multi-currency FX, inventory and automated credit recovery. Custom-built, milestone-delivered.',
    'whatsapp-automation': 'Official WhatsApp Business API ordering, lead follow-up and support flows in Tamil and English, with compliant templates.',
    'ai-chatbots': 'RAG-grounded assistants for your website, WhatsApp and internal tools — answers from your own documents, not hallucinations.'
};

const HUB_FAQS = [
    {
        q: 'How much does a project cost with your Chennai studio?',
        a: 'Every engagement starts with a free consultation, after which you receive a fixed written quote before any code is written. Websites, automations, ERPs and chatbots are priced by scope, not by the hour, so the number you approve is the number you pay. Our Chennai pricing guide publishes honest market ranges to help you sanity-check any proposal, including ours.'
    },
    {
        q: 'How long does it take to launch?',
        a: 'Most automations, chatbots and focused websites go live in one to three weeks. Larger systems such as trading ERPs or multi-module portals take longer, and we say so upfront with a milestone plan you can track. You pay against delivered, demoable progress — never against promises.'
    },
    {
        q: 'Do you only work with businesses in Chennai?',
        a: 'No. Our studio is headquartered in Nungambakkam, Chennai, and we love meeting local clients in person, but we deliver production systems for clients anywhere. Calls, WhatsApp and milestone demos work just as well remotely, and several of our live systems serve users outside India.'
    },
    {
        q: 'Who owns the code and the system after launch?',
        a: 'You do. We deploy on infrastructure you own or control, hand over the repositories and credentials, and walk your team through the system in plain language. Post-launch support stays available on phone and WhatsApp — an unmaintained system quietly becomes a liability, so we never disappear after launch.'
    },
    {
        q: 'Can you build systems that work in Tamil?',
        a: 'Yes. Several of our production systems handle Tamil and English side by side — including multilingual catalogs for Sree Ambal Catering and conversational WhatsApp ordering for Rose Chemicals powered by Sarvam AI. If your customers or staff work in Tamil, the system should too.'
    }
];

const AREAS = ['Nungambakkam', 'T. Nagar', 'Adyar', 'Velachery', 'Anna Nagar', 'OMR IT Corridor', 'Perungudi', 'Sholinganallur', 'Guindy', 'Ambattur', 'Porur', 'Koyambedu', 'Parrys Corner', 'ECR'];

const STATS = [
    { value: '8', label: 'client systems in production' },
    { value: '7', label: 'products in the Slice Suite' },
    { value: '6', label: 'dedicated Chennai services' },
    { value: 'Free', label: 'first consultation & quote' }
];

export const ChennaiHubPage = () => {
    const schemas = useMemo(() => ({
        business: {
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'A Generative Slice',
            url: `${SITE}/chennai/`,
            description: 'AI automation and custom software company in Chennai: agentic workflows, ERPs, web platforms, WhatsApp automation and RAG chatbots. Free consultation, fixed quotes, milestone delivery.',
            telephone: '+917812891494',
            email: 'smdhussain@agenerativeslice.com',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'No: 144, Valluvar Kottam High Rd, Nungambakkam',
                addressLocality: 'Chennai',
                addressRegion: 'Tamil Nadu',
                postalCode: '600034',
                addressCountry: 'IN'
            },
            geo: { '@type': 'GeoCoordinates', latitude: 13.0827, longitude: 80.2707 },
            openingHours: 'Mo-Fr 09:00-19:00',
            areaServed: { '@type': 'City', name: 'Chennai' },
            founder: { '@type': 'Person', name: 'Mohammed Hussain' }
        },
        crumbs: breadcrumbList([
            { name: 'Home', path: '/' },
            { name: 'Chennai', path: '/chennai/' }
        ]),
        faq: faqPage(HUB_FAQS)
    }), []);

    useJsonLd('hub-business', schemas.business);
    useJsonLd('hub-crumbs', schemas.crumbs);
    useJsonLd('hub-faq', schemas.faq);

    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('No: 144, Valluvar Kottam High Rd, Nungambakkam, Chennai, Tamil Nadu 600034')}`;

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
            {/* Hero */}
            <section className="pt-32 pb-16 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.08),transparent_60%)] pointer-events-none" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.nav
                        aria-label="Breadcrumb"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center justify-center gap-1.5 text-xs font-mono text-black/40 dark:text-white/40 mb-8"
                    >
                        <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-black/70 dark:text-white/70">Chennai</span>
                    </motion.nav>

                    <div className="text-center max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/25 bg-orange-500/5 text-orange-600 dark:text-orange-400 font-bold tracking-widest uppercase text-xs mb-6"
                        >
                            <MapPin className="w-3.5 h-3.5" />
                            Nungambakkam · Chennai · Tamil Nadu
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black text-black dark:text-white mb-8 tracking-tight leading-[1.1]"
                        >
                            AI Automation & Custom Software Company in{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Chennai</span>
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-5 text-left"
                        >
                            <p className="text-black/70 dark:text-white/70 text-lg leading-relaxed">
                                A Generative Slice is a software engineering studio in Nungambakkam, Chennai, founded and directed by Mohammed Hussain. We build AI automation, custom software, websites, ERPs, WhatsApp systems and chatbots for real businesses — and we already have eight client systems running in production across hospitality, industrial distribution, trading, architecture and luxury retail.
                            </p>
                            <p className="text-black/60 dark:text-white/60 text-base leading-relaxed">
                                This hub is your map to everything we do in Chennai. Each service below has its own dedicated page explaining exactly what we build, how an engagement runs, what things honestly cost in this market, and which live systems prove the claims. No jargon wall, no vague promises: the first consultation is free, the quote is fixed before we write code, and most projects go live in one to three weeks.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        {STATS.map((s) => (
                            <div key={s.label} className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-2xl p-5 shadow-sm text-center">
                                <p className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-1">{s.value}</p>
                                <p className="text-[11px] font-semibold text-black/50 dark:text-white/50 uppercase tracking-wide leading-snug">{s.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Service grid */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-orange-500 dark:text-orange-400 font-bold tracking-widest uppercase text-xs mb-3">Chennai services</p>
                        <h2 className="text-3xl md:text-4xl font-black text-black dark:text-white tracking-tight mb-4">
                            Six dedicated services, one Chennai studio
                        </h2>
                        <p className="text-black/60 dark:text-white/60 max-w-2xl mx-auto leading-relaxed">
                            Every service is scoped from your actual workflow on a free discovery call, quoted at a fixed price, delivered in visible milestones, and supported after launch. Pick the page closest to your problem — each one goes deep.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {CITY_PAGES.map((p, i) => {
                            const Icon = SERVICE_ICONS[p.slug] ?? Bot;
                            return (
                                <motion.div
                                    key={p.slug}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{ duration: 0.45, delay: Math.min(i * 0.06, 0.3) }}
                                >
                                    <Link
                                        to={`/chennai/${p.slug}/`}
                                        className="group flex flex-col h-full bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-3xl p-7 shadow-sm hover:border-orange-500/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <span className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                                            <Icon className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" />
                                        </span>
                                        <h3 className="text-lg font-black text-black dark:text-white tracking-tight mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                            {p.navLabel} in Chennai
                                        </h3>
                                        <p className="text-sm text-black/55 dark:text-white/55 leading-relaxed mb-5 flex-grow">{SERVICE_BLURBS[p.slug]}</p>
                                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 dark:text-orange-400">
                                            Explore the service <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why us */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-sm"
                    >
                        <p className="text-orange-500 dark:text-orange-400 font-bold tracking-widest uppercase text-xs mb-3">Why us</p>
                        <h2 className="text-2xl md:text-3xl font-black text-black dark:text-white tracking-tight mb-6">
                            Why Chennai businesses choose A Generative Slice
                        </h2>
                        <div className="space-y-4 text-[15px] leading-relaxed text-black/60 dark:text-white/60">
                            <p>
                                Most software agencies sell you a team by the hour and disappear after launch. We work the opposite way. You get a founder-led studio that quotes a fixed price before writing code, splits the work into milestones you can see and test, and stays reachable on phone and WhatsApp after the system is live. The number you approve is the number you pay, and the code belongs to you.
                            </p>
                            <p>
                                We also build like a product laboratory, not a body shop. Our own Slice Suite — seven open-core products including Slice3D, SliceLeads, SliceMail and SliceClass — means the patterns we sell you are patterns we run ourselves. When we automate document reading, lead follow-up or mailbox triage for a client, we are deploying capabilities already proven in our own stack, on real infrastructure, with real users.
                            </p>
                            <p>
                                And we understand how this city does business. A trading house near Parrys Corner, a manufacturer in the Ambattur industrial estate, a services firm on the OMR corridor and a banquet caterer serving remote venues along ECR all run on different rhythms. We have shipped systems for Chennai businesses at every one of those ends — in Tamil and English, on WhatsApp and on the web — so the system we scope for you fits your reality instead of forcing your reality into a template.
                            </p>
                        </div>
                        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                'Free first consultation and honest scoping',
                                'Fixed written quote before any code',
                                'Milestone delivery you can demo and test',
                                'Tamil and English systems where it matters',
                                'You own the code, data and infrastructure',
                                'Post-launch support that never disappears'
                            ].map((b) => (
                                <li key={b} className="flex items-start gap-3 text-sm text-black/70 dark:text-white/70">
                                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Proof */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-orange-500 dark:text-orange-400 font-bold tracking-widest uppercase text-xs mb-3">Proof, not promises</p>
                    <h2 className="text-2xl md:text-3xl font-black text-black dark:text-white tracking-tight mb-6">
                        Real systems running in real Chennai businesses
                    </h2>
                    <p className="text-black/60 dark:text-white/60 leading-relaxed max-w-3xl mx-auto mb-10">
                        Sree Ambal Catering coordinates banquet inventory across remote venues with an offline-first PWA and a Tamil/English catalog. Rose Chemicals takes B2B orders through conversational WhatsApp powered by Sarvam AI. Arusuvai Arasu produces a banquet quotation in about 60 seconds and turns it into a PDF proposal. Project Mald runs a full trading ERP with vision-OCR invoice reading, multi-currency FX and automated credit recovery. These are production systems with daily users — not mockups.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Link to="/projects/" className="group bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:border-orange-500/40 hover:shadow-md transition-all duration-300">
                            <p className="font-black text-black dark:text-white mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">All client work</p>
                            <p className="text-xs text-black/50 dark:text-white/50 mb-3">Eight production deliverables with live links</p>
                            <ArrowUpRight className="w-4 h-4 text-orange-500 mx-auto group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                        <Link to="/insights/sree-ambal-catering/" className="group bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:border-orange-500/40 hover:shadow-md transition-all duration-300">
                            <p className="font-black text-black dark:text-white mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">Sree Ambal case study</p>
                            <p className="text-xs text-black/50 dark:text-white/50 mb-3">Offline-first inventory for remote venues</p>
                            <ArrowUpRight className="w-4 h-4 text-orange-500 mx-auto group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                        <Link to="/insights/rose-chemicals/" className="group bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:border-orange-500/40 hover:shadow-md transition-all duration-300">
                            <p className="font-black text-black dark:text-white mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">Rose Chemicals case study</p>
                            <p className="text-xs text-black/50 dark:text-white/50 mb-3">WhatsApp ordering in the local language</p>
                            <ArrowUpRight className="w-4 h-4 text-orange-500 mx-auto group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Local presence */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-sm"
                    >
                        <p className="text-orange-500 dark:text-orange-400 font-bold tracking-widest uppercase text-xs mb-3">Find us</p>
                        <h2 className="text-2xl md:text-3xl font-black text-black dark:text-white tracking-tight mb-6">
                            Built in Chennai, for Chennai
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <span className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                                        <MapPin className="w-4 h-4 text-orange-500" />
                                    </span>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-1">Studio address</p>
                                        <p className="text-sm font-semibold text-black dark:text-white leading-relaxed">
                                            {companyContacts.address.line1}<br />
                                            {companyContacts.address.area}<br />
                                            {companyContacts.address.stateZip}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                                        <Clock className="w-4 h-4 text-orange-500" />
                                    </span>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-1">Hours</p>
                                        <p className="text-sm font-semibold text-black dark:text-white">{companyContacts.address.hours}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                                        <Phone className="w-4 h-4 text-orange-500" />
                                    </span>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-1">Phone / WhatsApp</p>
                                        <a href={`tel:${companyContacts.phones.primary.replace(/\s/g, '')}`} className="text-sm font-semibold text-black dark:text-white hover:text-orange-500 transition-colors">
                                            {companyContacts.phones.primary}
                                        </a>
                                    </div>
                                </div>
                                <a
                                    href={mapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/15 dark:border-white/20 text-sm font-bold text-black dark:text-white hover:border-orange-500/50 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300"
                                >
                                    <ExternalLink className="w-4 h-4" /> Open in Google Maps
                                </a>
                            </div>
                            <div>
                                <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed mb-5">
                                    We meet clients in person at the Nungambakkam studio or at their place of business, and we serve the whole city — from the trading houses of Parrys Corner and Koyambedu to the IT corridor on OMR, the industrial estates of Guindy and Ambattur, and the hospitality businesses along ECR. Remote delivery works exactly the same way: calls, WhatsApp and milestone demos.
                                </p>
                                <p className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-3">Areas we serve</p>
                                <div className="flex flex-wrap gap-2">
                                    {AREAS.map((a) => (
                                        <span key={a} className="px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-[#fafafa] dark:bg-[#0a0a0a] text-xs font-semibold text-black/60 dark:text-white/60">
                                            {a}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ + insights teaser + CTA */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto space-y-16">
                    <FaqAccordion faqs={HUB_FAQS} title="Questions Chennai businesses ask us" kicker="Chennai FAQ" />

                    <div>
                        <p className="text-orange-500 dark:text-orange-400 font-bold tracking-widest uppercase text-xs mb-3">Read before you buy</p>
                        <h2 className="text-2xl md:text-3xl font-black text-black dark:text-white tracking-tight mb-8">Honest guides from the studio</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link to="/insights/custom-software-cost-chennai/" className="group bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:border-orange-500/40 hover:shadow-md transition-all duration-300">
                                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-3">
                                    <BookOpen className="w-3 h-3" /> Pricing guide · 10 min
                                </span>
                                <p className="font-black text-black dark:text-white leading-snug mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                    How much does custom software cost in Chennai? (2026)
                                </p>
                                <p className="text-xs text-black/50 dark:text-white/50 leading-relaxed">Honest market ranges, what drives cost, and how to read a fixed-quote proposal.</p>
                            </Link>
                            <Link to="/insights/ai-automation-real-estate-chennai/" className="group bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:border-orange-500/40 hover:shadow-md transition-all duration-300">
                                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-3">
                                    <BookOpen className="w-3 h-3" /> Playbook · 9 min
                                </span>
                                <p className="font-black text-black dark:text-white leading-snug mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                    AI automation for Chennai real estate: leads & site visits
                                </p>
                                <p className="text-xs text-black/50 dark:text-white/50 leading-relaxed">Stop portal lead leakage with instant WhatsApp follow-up and Tamil AI qualification.</p>
                            </Link>
                        </div>
                    </div>

                    <ConversionCta
                        eyebrow="Nungambakkam studio · Free first call"
                        title="Talk to Chennai's AI & software studio"
                        text="Whether you need one automation or a full ERP, start with a free conversation. We will tell you honestly what to build, what it costs, and whether it is worth doing at all."
                    />
                </div>
            </section>
        </motion.div>
    );
};