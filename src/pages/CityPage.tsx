import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, ArrowUpRight, ChevronRight, Phone, Compass } from 'lucide-react';
import { CITY_PAGES } from '../data/cityPages';
import { companyContacts } from '../data/config';
import { useJsonLd, SITE, breadcrumbList, faqPage } from '../utils/seo';
import { FaqAccordion } from '../components/FaqAccordion';
import { ConversionCta } from '../components/ConversionCta';

const NotFound = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
        <section className="py-40 px-6 text-center">
            <div className="max-w-xl mx-auto">
                <span className="inline-flex w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 items-center justify-center mb-6">
                    <Compass className="w-7 h-7 text-orange-500" />
                </span>
                <h1 className="text-3xl md:text-4xl font-black text-black dark:text-white tracking-tight mb-4">This page doesn't exist</h1>
                <p className="text-black/60 dark:text-white/60 leading-relaxed mb-8">
                    The Chennai service you're looking for may have moved. Explore all six services from our Chennai hub, or head back home.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link to="/chennai/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold hover:scale-[1.02] transition-transform">
                        Chennai services <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/15 dark:border-white/20 text-black dark:text-white text-sm font-bold hover:border-orange-500/50 transition-colors">
                        Back home
                    </Link>
                </div>
            </div>
        </section>
    </motion.div>
);

export const CityPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const data = CITY_PAGES.find((p) => p.slug === slug);

    const schemas = useMemo(() => {
        if (!data) return null;
        return {
            service: {
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: data.h1,
                serviceType: data.navLabel,
                description: data.description,
                url: `${SITE}/chennai/${data.slug}/`,
                provider: {
                    '@type': 'ProfessionalService',
                    name: 'A Generative Slice',
                    url: SITE,
                    telephone: '+917812891494',
                    email: 'smdhussain@agenerativeslice.com',
                    address: {
                        '@type': 'PostalAddress',
                        streetAddress: 'No: 144, Valluvar Kottam High Rd, Nungambakkam',
                        addressLocality: 'Chennai',
                        addressRegion: 'Tamil Nadu',
                        postalCode: '600034',
                        addressCountry: 'IN'
                    }
                },
                areaServed: { '@type': 'City', name: 'Chennai' }
            },
            crumbs: breadcrumbList([
                { name: 'Home', path: '/' },
                { name: 'Chennai', path: '/chennai/' },
                { name: data.navLabel, path: `/chennai/${data.slug}/` }
            ]),
            faq: faqPage(data.faqs)
        };
    }, [data]);

    useJsonLd('city-service', schemas?.service ?? {});
    useJsonLd('city-crumbs', schemas?.crumbs ?? {});
    useJsonLd('city-faq', schemas?.faq ?? {});

    if (!data || !schemas) return <NotFound />;

    const [beforeChennai, afterChennai = ''] = data.h1.split('Chennai');

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
            {/* Hero */}
            <section className="pt-32 pb-16 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.07),transparent_60%)] pointer-events-none" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.nav
                        aria-label="Breadcrumb"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center justify-center flex-wrap gap-1.5 text-xs font-mono text-black/40 dark:text-white/40 mb-8"
                    >
                        <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/chennai/" className="hover:text-orange-500 transition-colors">Chennai</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-black/70 dark:text-white/70">{data.navLabel}</span>
                    </motion.nav>

                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/25 bg-orange-500/5 text-orange-600 dark:text-orange-400 font-bold tracking-widest uppercase text-xs mb-6"
                        >
                            <MapPin className="w-3.5 h-3.5" />
                            {data.kicker}
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black text-black dark:text-white mb-8 tracking-tight leading-[1.1]"
                        >
                            {beforeChennai}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Chennai</span>
                            {afterChennai}
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-5 text-left max-w-3xl mx-auto"
                        >
                            {data.intro.map((p, i) => (
                                <p key={i} className={i === 0 ? 'text-black/70 dark:text-white/70 text-lg leading-relaxed' : 'text-black/60 dark:text-white/60 text-base leading-relaxed'}>
                                    {p}
                                </p>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
                        >
                            {data.stats.map((s) => (
                                <div key={s.label} className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-2xl p-5 shadow-sm">
                                    <p className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-1">{s.value}</p>
                                    <p className="text-xs font-semibold text-black/50 dark:text-white/50 uppercase tracking-wide">{s.label}</p>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
                        >
                            <Link
                                to="/contact/"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                            >
                                Book a free consultation <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a
                                href={`tel:${companyContacts.phones.primary.replace(/\s/g, '')}`}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-black/15 dark:border-white/20 text-black dark:text-white text-sm font-bold hover:border-orange-500/50 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300"
                            >
                                <Phone className="w-4 h-4" /> {companyContacts.phones.primary}
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Body */}
            <section className="pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* On this page */}
                    <nav aria-label="On this page" className="mb-12 flex flex-wrap items-center justify-center gap-2">
                        {data.sections.map((s) => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className="px-3.5 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-black/50 dark:text-white/50 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-500/40 text-xs font-semibold transition-all duration-300"
                            >
                                {s.title.length > 42 ? s.title.slice(0, 42) + '…' : s.title}
                            </a>
                        ))}
                        <a href="#faq" className="px-3.5 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-black/50 dark:text-white/50 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-500/40 text-xs font-semibold transition-all duration-300">
                            FAQ
                        </a>
                    </nav>

                    <div className="space-y-6">
                        {data.sections.map((s, i) => (
                            <motion.section
                                key={s.id}
                                id={s.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.5 }}
                                className="scroll-mt-28 bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-sm"
                            >
                                <div className="flex items-baseline gap-4 mb-5">
                                    <span className="font-mono text-xs font-bold text-orange-500/60 dark:text-orange-400/60 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                                    <h2 className="text-xl md:text-2xl font-black text-black dark:text-white tracking-tight">{s.title}</h2>
                                </div>
                                <div className="space-y-4 text-[15px] leading-relaxed text-black/60 dark:text-white/60">
                                    {s.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
                                    {s.bullets && (
                                        <ul className="space-y-2.5 pt-2">
                                            {s.bullets.map((b, j) => (
                                                <li key={j} className="flex gap-3">
                                                    <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                                                    <span>{b}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </motion.section>
                        ))}
                    </div>

                    <div className="mt-16">
                        <FaqAccordion faqs={data.faqs} title={`Questions about ${data.navLabel.toLowerCase()} in Chennai`} />
                    </div>

                    {/* Related */}
                    <div className="mt-16">
                        <p className="text-orange-500 dark:text-orange-400 font-bold tracking-widest uppercase text-xs mb-3">Keep exploring</p>
                        <h2 className="text-2xl md:text-3xl font-black text-black dark:text-white tracking-tight mb-8">Related services & proof</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {data.related.map((r) => (
                                <Link
                                    key={r.to + r.label}
                                    to={r.to}
                                    className="group flex items-center justify-between gap-4 bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-2xl p-5 shadow-sm hover:border-orange-500/40 hover:shadow-md transition-all duration-300"
                                >
                                    <span className="text-sm font-bold text-black dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{r.label}</span>
                                    <ArrowUpRight className="w-4 h-4 text-black/30 dark:text-white/30 group-hover:text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16">
                        <ConversionCta
                            title={`Get a fixed quote for ${data.navLabel.toLowerCase()} in Chennai`}
                            text={`Talk to the studio that already ships ${data.navLabel.toLowerCase()} systems for Chennai businesses. Free first call, honest scope, and a price you approve before we start.`}
                        />
                    </div>
                </div>
            </section>
        </motion.div>
    );
};