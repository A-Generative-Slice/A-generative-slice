import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, ArrowUpRight, ChevronRight, Compass, CalendarDays, Clock, Layers } from 'lucide-react';
import { INSIGHTS } from '../data/insights';
import type { CaseStudyData } from '../data/contentTypes';
import { useJsonLd, SITE, breadcrumbList, faqPage } from '../utils/seo';
import { FaqAccordion } from '../components/FaqAccordion';
import { ConversionCta } from '../components/ConversionCta';

const formatDate = (iso: string) =>
    new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

const NotFound = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
        <section className="py-40 px-6 text-center">
            <div className="max-w-xl mx-auto">
                <span className="inline-flex w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 items-center justify-center mb-6">
                    <Compass className="w-7 h-7 text-orange-500" />
                </span>
                <h1 className="text-3xl md:text-4xl font-black text-black dark:text-white tracking-tight mb-4">This insight doesn't exist</h1>
                <p className="text-black/60 dark:text-white/60 leading-relaxed mb-8">
                    The article you're looking for may have moved. Browse all guides and case studies from the insights index.
                </p>
                <Link to="/insights/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold hover:scale-[1.02] transition-transform">
                    All insights <ArrowUpRight className="w-4 h-4" />
                </Link>
            </div>
        </section>
    </motion.div>
);

export const InsightPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const data = INSIGHTS.find((e) => e.slug === slug);
    const isCase = data?.kind === 'case-study';
    const cs = isCase ? (data as CaseStudyData) : null;

    const schemas = useMemo(() => {
        if (!data) return null;
        return {
            article: {
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: data.title,
                description: data.description,
                image: `${SITE}/og-card.png`,
                datePublished: data.date,
                dateModified: data.date,
                author: { '@type': 'Organization', name: 'A Generative Slice', url: SITE },
                publisher: {
                    '@type': 'Organization',
                    name: 'A Generative Slice',
                    url: SITE,
                    logo: { '@type': 'ImageObject', url: `${SITE}/logo.jpg` }
                },
                mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/insights/${data.slug}/` },
                articleSection: data.kind === 'guide' ? 'Guides' : 'Case studies',
                inLanguage: 'en-IN'
            },
            crumbs: breadcrumbList([
                { name: 'Home', path: '/' },
                { name: 'Insights', path: '/insights/' },
                { name: data.title, path: `/insights/${data.slug}/` }
            ]),
            faq: faqPage(data.faqs)
        };
    }, [data]);

    useJsonLd('insight-article', schemas?.article ?? {});
    useJsonLd('insight-crumbs', schemas?.crumbs ?? {});
    useJsonLd('insight-faq', schemas?.faq ?? {});

    if (!data || !schemas) return <NotFound />;

    const chennaiIdx = data.h1.indexOf('Chennai');
    const toc = [
        ...(cs ? [{ id: 'the-challenge', title: 'The challenge' }, { id: 'our-solution', title: 'Our solution' }] : []),
        ...data.sections.map((s) => ({ id: s.id, title: s.title })),
        { id: 'faq', title: 'FAQ' }
    ];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
            {/* Hero */}
            <section className="pt-32 pb-14 px-6 relative overflow-hidden">
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
                        <Link to="/insights/" className="hover:text-orange-500 transition-colors">Insights</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-black/70 dark:text-white/70 max-w-[16rem] truncate">{data.title}</span>
                    </motion.nav>

                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border font-bold tracking-widest uppercase text-xs mb-6 ${
                                isCase
                                    ? 'border-emerald-500/25 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400'
                                    : 'border-orange-500/25 bg-orange-500/5 text-orange-600 dark:text-orange-400'
                            }`}
                        >
                            {isCase ? <Briefcase className="w-3.5 h-3.5" /> : <BookOpen className="w-3.5 h-3.5" />}
                            {data.kicker}
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-black text-black dark:text-white mb-6 tracking-tight leading-[1.15]"
                        >
                            {chennaiIdx >= 0 ? (
                                <>
                                    {data.h1.slice(0, chennaiIdx)}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Chennai</span>
                                    {data.h1.slice(chennaiIdx + 7)}
                                </>
                            ) : data.h1}
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-black/45 dark:text-white/45 mb-8"
                        >
                            <span className="inline-flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" /> {formatDate(data.date)}</span>
                            <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {data.readMins} min read</span>
                            <span>By A Generative Slice, Chennai</span>
                            {cs && <span className="inline-flex items-center gap-1.5"><Layers className="w-3.5 h-3.5" /> {cs.industry}</span>}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            className="space-y-5 text-left max-w-3xl mx-auto"
                        >
                            {data.intro.map((p, i) => (
                                <p key={i} className={i === 0 ? 'text-black/70 dark:text-white/70 text-lg leading-relaxed' : 'text-black/60 dark:text-white/60 text-base leading-relaxed'}>
                                    {p}
                                </p>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Body */}
            <section className="pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Case-study results strip */}
                    {cs && (
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5 }}
                            className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
                        >
                            {cs.results.map((r) => (
                                <div key={r.label} className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-2xl p-6 shadow-sm text-center">
                                    <p className="text-lg md:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-1.5 leading-snug">{r.value}</p>
                                    <p className="text-xs font-semibold text-black/50 dark:text-white/50 leading-snug">{r.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* On this page */}
                    <nav aria-label="On this page" className="mb-12 flex flex-wrap items-center justify-center gap-2">
                        {toc.map((t) => (
                            <a
                                key={t.id}
                                href={`#${t.id}`}
                                className="px-3.5 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-black/50 dark:text-white/50 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-500/40 text-xs font-semibold transition-all duration-300"
                            >
                                {t.title.length > 42 ? t.title.slice(0, 42) + '…' : t.title}
                            </a>
                        ))}
                    </nav>

                    <div className="space-y-6">
                        {/* Case-study challenge & solution */}
                        {cs && (
                            <>
                                <motion.section
                                    id="the-challenge"
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{ duration: 0.5 }}
                                    className="scroll-mt-28 bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-sm"
                                >
                                    <div className="flex items-baseline gap-4 mb-5">
                                        <span className="font-mono text-xs font-bold text-orange-500/60 dark:text-orange-400/60 shrink-0">01</span>
                                        <h2 className="text-xl md:text-2xl font-black text-black dark:text-white tracking-tight">The challenge</h2>
                                    </div>
                                    <div className="space-y-4 text-[15px] leading-relaxed text-black/60 dark:text-white/60">
                                        {cs.challenge.map((p, i) => <p key={i}>{p}</p>)}
                                    </div>
                                </motion.section>
                                <motion.section
                                    id="our-solution"
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{ duration: 0.5 }}
                                    className="scroll-mt-28 bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-sm"
                                >
                                    <div className="flex items-baseline gap-4 mb-5">
                                        <span className="font-mono text-xs font-bold text-orange-500/60 dark:text-orange-400/60 shrink-0">02</span>
                                        <h2 className="text-xl md:text-2xl font-black text-black dark:text-white tracking-tight">Our solution</h2>
                                    </div>
                                    <div className="space-y-4 text-[15px] leading-relaxed text-black/60 dark:text-white/60">
                                        {cs.solution.map((p, i) => <p key={i}>{p}</p>)}
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-black/5 dark:border-white/10">
                                        <p className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-3">Stack</p>
                                        <div className="flex flex-wrap gap-2">
                                            {cs.stack.map((s) => (
                                                <span key={s} className="px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-xs font-semibold text-orange-700 dark:text-orange-300">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.section>
                            </>
                        )}

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
                                    <span className="font-mono text-xs font-bold text-orange-500/60 dark:text-orange-400/60 shrink-0">
                                        {String(i + (cs ? 3 : 1)).padStart(2, '0')}
                                    </span>
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
                        <FaqAccordion faqs={data.faqs} />
                    </div>

                    {/* Related */}
                    <div className="mt-16">
                        <p className="text-orange-500 dark:text-orange-400 font-bold tracking-widest uppercase text-xs mb-3">Keep reading</p>
                        <h2 className="text-2xl md:text-3xl font-black text-black dark:text-white tracking-tight mb-8">Related insights & services</h2>
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
                            eyebrow="Free consultation · Chennai studio"
                            title={cs ? `Want a system like ${cs.client}'s?` : 'Ready to price your own project?'}
                            text={cs
                                ? `Every business is different, but the pattern repeats: find the repetitive work, scope it honestly, ship it in milestones. Tell us your workflow and we will tell you what we would build.`
                                : 'Ranges are guidance; your quote is specific. Book a free consultation and get a fixed written price for exactly what your business needs — before any code is written.'}
                        />
                    </div>
                </div>
            </section>
        </motion.div>
    );
};