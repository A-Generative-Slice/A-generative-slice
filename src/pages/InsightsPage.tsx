import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Briefcase, ArrowUpRight, ChevronRight, PenLine } from 'lucide-react';
import { INSIGHTS } from '../data/insights';
import { useJsonLd, SITE, breadcrumbList } from '../utils/seo';

type Filter = 'all' | 'guide' | 'case-study';

const FILTERS: { id: Filter; label: string }[] = [
    { id: 'all', label: 'All insights' },
    { id: 'guide', label: 'Guides' },
    { id: 'case-study', label: 'Case studies' }
];

const formatDate = (iso: string) =>
    new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

export const InsightsPage = () => {
    const [filter, setFilter] = useState<Filter>('all');
    const entries = INSIGHTS.filter((e) => filter === 'all' || e.kind === filter);

    const schemas = useMemo(() => ({
        collection: {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Insights — A Generative Slice',
            description: 'Honest pricing guides, AI automation playbooks and production case studies from A Generative Slice, Chennai.',
            url: `${SITE}/insights/`,
            mainEntity: {
                '@type': 'ItemList',
                itemListElement: INSIGHTS.map((e, i) => ({
                    '@type': 'ListItem',
                    position: i + 1,
                    url: `${SITE}/insights/${e.slug}/`,
                    name: e.title
                }))
            }
        },
        crumbs: breadcrumbList([
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/insights/' }
        ])
    }), []);

    useJsonLd('insights-collection', schemas.collection);
    useJsonLd('insights-crumbs', schemas.crumbs);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
            <section className="pt-32 pb-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.07),transparent_60%)] pointer-events-none" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.nav
                        aria-label="Breadcrumb"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center justify-center gap-1.5 text-xs font-mono text-black/40 dark:text-white/40 mb-8"
                    >
                        <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-black/70 dark:text-white/70">Insights</span>
                    </motion.nav>

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/25 bg-orange-500/5 text-orange-600 dark:text-orange-400 font-bold tracking-widest uppercase text-xs mb-6"
                        >
                            <PenLine className="w-3.5 h-3.5" />
                            Insights from the studio
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black text-black dark:text-white mb-6 tracking-tight leading-[1.1]"
                        >
                            Guides & case studies,{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">written honestly</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-black/60 dark:text-white/60 text-lg leading-relaxed"
                        >
                            What software really costs in Chennai, how AI automation works for local industries, and what we actually built for real clients. Written for business owners, not developers — no jargon, no inflated numbers.
                        </motion.p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-10" role="group" aria-label="Filter insights">
                        {FILTERS.map((f) => (
                            <button
                                key={f.id}
                                onClick={() => setFilter(f.id)}
                                aria-pressed={filter === f.id}
                                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border ${
                                    filter === f.id
                                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 border-orange-500 text-white shadow-lg shadow-orange-500/25'
                                        : 'bg-white dark:bg-[#111] border-black/10 dark:border-white/15 text-black/60 dark:text-white/60 hover:border-orange-500/40 hover:text-orange-600 dark:hover:text-orange-400'
                                }`}
                            >
                                {f.label}
                                <span className="ml-2 opacity-60">
                                    {f.id === 'all' ? INSIGHTS.length : INSIGHTS.filter((e) => e.kind === f.id).length}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Cards */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <AnimatePresence mode="popLayout">
                            {entries.map((e) => (
                                <motion.div
                                    key={e.slug}
                                    layout
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link
                                        to={`/insights/${e.slug}/`}
                                        className="group flex flex-col h-full bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-3xl p-8 shadow-sm hover:border-orange-500/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <div className="flex items-center justify-between gap-3 mb-5">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                                                e.kind === 'guide'
                                                    ? 'border-orange-500/25 bg-orange-500/5 text-orange-600 dark:text-orange-400'
                                                    : 'border-emerald-500/25 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400'
                                            }`}>
                                                {e.kind === 'guide' ? <BookOpen className="w-3 h-3" /> : <Briefcase className="w-3 h-3" />}
                                                {e.kind === 'guide' ? 'Guide' : 'Case study'}
                                            </span>
                                            <span className="text-[11px] font-mono text-black/40 dark:text-white/40">{e.readMins} min read</span>
                                        </div>
                                        <h2 className="text-xl font-black text-black dark:text-white tracking-tight leading-snug mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                            {e.title}
                                        </h2>
                                        <p className="text-sm text-black/55 dark:text-white/55 leading-relaxed mb-6 flex-grow">{e.description}</p>
                                        <div className="flex items-center justify-between gap-3 pt-5 border-t border-black/5 dark:border-white/10">
                                            <span className="text-xs font-semibold text-black/40 dark:text-white/40">{formatDate(e.date)}</span>
                                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 dark:text-orange-400">
                                                Read <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    <p className="mt-12 text-center text-sm text-black/50 dark:text-white/50">
                        Want the short version instead?{' '}
                        <Link to="/contact/" className="font-bold text-orange-600 dark:text-orange-400 hover:underline">
                            Book a free consultation
                        </Link>{' '}
                        and ask us anything.
                    </p>
                </div>
            </section>
        </motion.div>
    );
};