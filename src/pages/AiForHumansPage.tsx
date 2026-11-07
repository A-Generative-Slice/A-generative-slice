import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Heart, ArrowRight, Sparkles, Quote, Calculator, Table2, Landmark, Palette, Search,
    Check, Eye, Zap, Bot, Clock, Scale, ShieldCheck, Lightbulb, Shuffle, GraduationCap,
    Hammer, Brain, BookOpen, Wrench, Rocket, MapPin, Laptop, Users, MessageCircle
} from 'lucide-react';
import { companyContacts } from '../data/config';
import { useJsonLd, SITE, breadcrumbList, faqPage } from '../utils/seo';
import { FaqAccordion } from '../components/FaqAccordion';

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const TOOL_ERAS = [
    {
        icon: Calculator, era: '1970s', tool: 'The calculator',
        panic: 'Math teachers protested that students would never learn arithmetic again.',
        reality: 'Calculators deleted drudgery, not mathematicians. Numeracy became more valuable — and the people who wielded the tool got promoted.'
    },
    {
        icon: Table2, era: '1979', tool: 'The spreadsheet',
        panic: 'VisiCalc was going to replace bookkeepers and accountants overnight.',
        reality: 'Bookkeeping tasks shrank; accounting careers exploded. Ledgers became analysis, and analysts became advisors.'
    },
    {
        icon: Landmark, era: '1980s', tool: 'The ATM',
        panic: 'Machines would end the bank teller. Everyone was certain.',
        reality: 'Teller employment grew for decades. ATMs made branches cheaper, so banks opened more — and tellers became relationship staff.'
    },
    {
        icon: Palette, era: '1990', tool: 'Photoshop',
        panic: 'Desktop publishing would kill designers, printers and darkrooms.',
        reality: 'Design became a mass profession. The tool never removed taste — it made taste scalable, and tasteful people scarce.'
    },
    {
        icon: Search, era: '2000s', tool: 'The search engine',
        panic: 'Google would make librarians and experts obsolete.',
        reality: 'Finding answers got cheap; asking good questions got priceless. Experts who used search out-researched everyone who didn’t.'
    }
];

const REFRAMES = [
    {
        fear: 'AI will take my job.',
        reframe: 'AI will take the tasks you hate. Your job is the judgment, the relationships and the ownership wrapped around those tasks — and the person who directs AI keeps all three.',
        step: 'List the five tasks you repeat most. Ask an AI to draft one of them today. Congratulations — you just became its manager.'
    },
    {
        fear: 'I’m too late. Everyone started before me.',
        reframe: 'The race started yesterday and the finish line keeps moving. Most people still haven’t opened the tools — they’re only watching headlines about them. A focused month puts you ahead of that entire crowd.',
        step: 'Open any free AI chat and ask it to teach you one thing you need this week. Ten minutes. You’re no longer late — you’re early among the people who act.'
    },
    {
        fear: 'Students should focus on marks, not AI.',
        reframe: 'Marks measure what you remembered yesterday. AI leverage compounds what you can do tomorrow. The strongest students carry both — and the ones who learn how to learn outgrow every syllabus.',
        step: 'Take your hardest subject. Ask AI to explain one concept simply, quiz you on it, then explain it back in your own words. That loop is exactly what we teach for free.'
    },
    {
        fear: 'AI makes people lazy and dumb.',
        reframe: 'A calculator made nobody dumber — it freed mathematicians from arithmetic. Tools amplify whatever you bring: bring curiosity and you go deeper; bring passivity and you stall. The tool isn’t the variable. You are.',
        step: 'Use AI on one task today, then verify its answer yourself. Trust, then check — that habit is the exact opposite of lazy.'
    },
    {
        fear: 'It’s all hype. It will fade like everything else.',
        reframe: 'Hype fades; leverage doesn’t. The electricity headlines died, the grid stayed. Even if half of today’s AI promises evaporate, the half that remains has already rewritten how work gets done.',
        step: 'Pick one boring real problem — a report, an email, a summary. Solve it with AI once. Hype you can ignore; a saved hour you can’t.'
    },
    {
        fear: 'I’m not technical. This is for engineers.',
        reframe: 'The people winning with AI right now are caterers, traders, teachers and students — because the interface is plain language. If you can explain a problem to a friend, you can direct an AI.',
        step: 'Describe one problem from your day to an AI in your own words — Tamil or English. No code. That is the entire entry requirement.'
    }
];

const AI_IS = [
    { icon: Zap, title: 'A lever', line: 'It multiplies the force you apply. Ten times your effort on the parts that used to eat your whole day.' },
    { icon: Bot, title: 'An intern who never sleeps', line: 'Fast drafts, zero judgment, no ego. It works around the clock — and you supervise, correct and sign off.' },
    { icon: Eye, title: 'A mirror for your thinking', line: 'Vague in, vague out. Clear in, startlingly good out. It reflects the quality of your question back at you.' },
    { icon: Clock, title: 'A time machine', line: 'Hours of retyping, reformatting and 2 a.m. spreadsheets compress into minutes of review. That time goes back to your life.' }
];

const HUMAN_IS = [
    { icon: Scale, title: 'Judgment', line: 'Knowing which answer is right for this client, this city, today. Models generate options; humans decide.' },
    { icon: Palette, title: 'Taste', line: 'Knowing what “good” feels like before you can explain why. No dataset has your eye.' },
    { icon: Heart, title: 'Empathy', line: 'A caterer calming a bride’s mother at midnight. A teacher spotting the student who went quiet. That’s not automation — that’s humanity.' },
    { icon: ShieldCheck, title: 'Ownership', line: 'Signing your name under the work and keeping the promise when it gets hard. Accountability has never been outsourced.' },
    { icon: Lightbulb, title: 'The question', line: 'AI answers. Humans decide what is worth asking. Every breakthrough in history started with the question, not the answer.' }
];

const LEARN_LOOP = [
    { n: '01', title: 'Explain it to me like I’m new', line: 'No shame, no jargon. I ask the “stupid” question first, in plain words, until the shape of the thing is clear.' },
    { n: '02', title: 'Quiz me until I break', line: 'I make the AI test me — hard. Every gap it finds is a gap the world would have found later, at a worse price.' },
    { n: '03', title: 'Teach it back', line: 'If I can’t explain it simply to someone else, I don’t own it yet. Teaching is the receipt of learning.' }
];

const BUILD_LOOP = [
    { n: '01', title: 'Describe the real problem', line: 'Plain words, real constraints, actual users. Not “build me an app” — “my client retypes WhatsApp orders into Excel, stop that.”' },
    { n: '02', title: 'Draft fast, test faster', line: 'AI drafts; reality decides. I ship the smallest version that can fail, and let the failure teach me.' },
    { n: '03', title: 'Verify like an owner', line: 'Trust, then check. Every number, every claim, every line — because my name ships on it, not the model’s.' }
];

const MINDSET = [
    { title: 'Confidence is a residue.', line: 'It doesn’t arrive before you start. It’s what’s left behind after you ship small things, repeatedly. Action first; the feeling follows.' },
    { title: 'You are not your task.', line: 'When a machine does part of your work, it frees you — it doesn’t erase you. The only identity actually at risk is the one built purely on output.' },
    { title: 'Fear shrinks in motion.', line: 'Anxiety lives in the imagined future. Skill lives in the ten minutes you spend today. The loop is the antidote — start it before you feel ready.' }
];

const MODULES = [
    {
        icon: Sparkles, title: 'AI from absolute zero',
        line: 'What these tools actually are, your first real prompts, and free accounts set up together. No jargon, no prerequisites, no “you should already know this”.',
        leave: 'A working AI setup on your own phone or laptop.'
    },
    {
        icon: BookOpen, title: 'The learning loop',
        line: 'Explain → quiz → teach back, applied to your actual subjects. The exact method the founder used to go from student to studio owner.',
        leave: 'A study method that makes marks a side effect.'
    },
    {
        icon: Wrench, title: 'The problem-solving loop',
        line: 'Break a real problem into plain words, draft with AI, test against reality, verify like an owner. On-field practice, not slides.',
        leave: 'One real problem from your own life, solved.'
    },
    {
        icon: Brain, title: 'The psychology of the lever',
        line: 'Fear, confidence, imposter syndrome and identity beyond percentages. Why most people quit in week two — and how not to be most people.',
        leave: 'The mindset that keeps you going when the novelty dies.'
    },
    {
        icon: Rocket, title: 'Proof, not percentages',
        line: 'Build one small portfolio project end-to-end with AI directing your hands. Something an interviewer can open, click and remember.',
        leave: 'A shipped project — not just a certificate.'
    }
];

const WORKSHOP_FAQS = [
    {
        q: 'Is the workshop really free? What’s the catch?',
        a: 'Really free — ₹0, no fees later, no upsell, no “premium tier” waiting at the end. The studio wins when Chennai’s next generation builds with AI instead of fearing it, so teaching the loop properly is the mission, not a funnel. We don’t harvest your data either; you register with a simple WhatsApp message.'
    },
    {
        q: 'I’m from a non-IT background. Can I still join?',
        a: 'Absolutely — the workshop is designed for you first. The interface of modern AI is plain language, Tamil or English. Our own client systems are run daily by caterers, traders and banquet staff who never wrote a line of code. If you can explain a problem to a friend, you can direct an AI.'
    },
    {
        q: 'Will this hurt my marks or exam preparation?',
        a: 'The opposite. Module two applies the learning loop directly to your syllabus: AI explains a concept simply, quizzes you until you break, and makes you teach it back. Students who learn how to learn carry marks and leverage at the same time — marks measure yesterday, the loop compounds tomorrow.'
    },
    {
        q: 'Do I need a laptop or any prior experience?',
        a: 'No experience at all — we start from absolute zero. A phone is enough for the first sessions; a laptop helps for the final portfolio project, and we pair people up so nobody is left out. Free tools only; we never ask you to buy a subscription.'
    },
    {
        q: 'Is it in-person in Chennai or online?',
        a: 'Both. We run hands-on batches in person in Chennai and live online for students elsewhere. Colleges and departments can host us on campus — we bring the curriculum, you bring the room and the students. Use the “Host it at your campus” button and we’ll arrange it.'
    },
    {
        q: 'Honestly — will AI replace freshers like me?',
        a: 'Here is the honest answer this whole page is built on: AI will not take your job; a person who knows how to use AI will take the job of a person who doesn’t. Companies hire outcomes, not effort. The workshop exists to make you the person on the right side of that sentence — with a shipped project to prove it.'
    },
    {
        q: 'How do I register for a seat?',
        a: 'Tap “Reserve a free seat” — it opens WhatsApp with a ready message. A human (usually the founder) replies, confirms your batch and sends the details. Seats are kept small so every student gets hands-on attention, and new batches are announced as colleges and groups sign up.'
    }
];

const WORKSHOP_WA = `${companyContacts.whatsappUrl}?text=${encodeURIComponent(
    "Hi A Generative Slice! I'm a student / fresher and I want to reserve a FREE seat in the AI From Scratch workshop."
)}`;

/* ------------------------------------------------------------------ */
/* Small presentational helpers                                        */
/* ------------------------------------------------------------------ */

const Kicker = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
    <p className={`font-bold tracking-widest uppercase text-xs mb-4 ${dark ? 'text-orange-400' : 'text-orange-500 dark:text-orange-400'}`}>
        {children}
    </p>
);

const reveal = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.5 }
};

/* ------------------------------------------------------------------ */
/* The Reframe Machine — live interactive fear → reframe → small step  */
/* ------------------------------------------------------------------ */

const ReframeMachine = () => {
    const [index, setIndex] = useState(0);
    const [served, setServed] = useState(0);
    const current = REFRAMES[index];

    const pick = (i: number) => {
        setIndex(i);
        setServed((s) => s + 1);
    };

    const shuffle = () => {
        let next = index;
        while (next === index) next = Math.floor(Math.random() * REFRAMES.length);
        pick(next);
    };

    return (
        <div className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-[2.5rem] p-6 md:p-10 shadow-xl shadow-orange-500/5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <p className="text-sm font-bold text-black dark:text-white">
                    Pick the thought that scares you most:
                </p>
                <span className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-bold text-orange-600 dark:text-orange-400" aria-live="polite">
                    <Sparkles className="w-3.5 h-3.5" />
                    {served === 0 ? '6 fears ready to reframe' : `${served} reframe${served === 1 ? '' : 's'} served this visit`}
                </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Choose a fear to reframe">
                {REFRAMES.map((r, i) => (
                    <button
                        key={r.fear}
                        onClick={() => pick(i)}
                        aria-pressed={i === index}
                        className={`px-4 py-2.5 rounded-full text-xs md:text-sm font-bold border transition-all duration-300 ${
                            i === index
                                ? 'bg-gradient-to-r from-orange-500 to-orange-600 border-orange-500 text-white shadow-lg shadow-orange-500/25 scale-[1.03]'
                                : 'bg-black/[0.03] dark:bg-white/5 border-black/10 dark:border-white/15 text-black/65 dark:text-white/60 hover:border-orange-500/50 hover:text-orange-600 dark:hover:text-orange-400'
                        }`}
                    >
                        “{r.fear}”
                    </button>
                ))}
            </div>

            <div aria-live="polite">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.985 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -14, scale: 0.985 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="grid grid-cols-1 lg:grid-cols-5 gap-4"
                    >
                        <div className="lg:col-span-3 rounded-3xl bg-gradient-to-br from-orange-500/[0.07] to-amber-500/[0.04] dark:from-orange-500/10 dark:to-amber-500/5 border border-orange-500/20 p-6 md:p-8">
                            <p className="text-[10px] font-black uppercase tracking-widest text-black/40 dark:text-white/40 mb-2 line-through decoration-red-400/70 decoration-2">
                                {current.fear}
                            </p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-3">The reframe</p>
                            <p className="text-base md:text-lg font-semibold text-black dark:text-white leading-relaxed">
                                {current.reframe}
                            </p>
                        </div>
                        <div className="lg:col-span-2 rounded-3xl bg-emerald-500/[0.05] dark:bg-emerald-500/10 border border-emerald-500/25 p-6 md:p-8 flex flex-col">
                            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-400 mb-3 flex items-center gap-1.5">
                                <Check className="w-3.5 h-3.5" /> One small step · today
                            </p>
                            <p className="text-sm md:text-[15px] text-black/70 dark:text-white/70 leading-relaxed flex-grow">
                                {current.step}
                            </p>
                            <p className="mt-4 text-xs font-mono text-black/40 dark:text-white/35">Time required: about 10 minutes.</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                    {REFRAMES.map((r, i) => (
                        <span
                            key={r.fear}
                            className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-6 bg-orange-500' : 'w-1.5 bg-black/15 dark:bg-white/20'}`}
                        />
                    ))}
                </div>
                <button
                    onClick={shuffle}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/15 dark:border-white/20 text-sm font-bold text-black/70 dark:text-white/70 hover:border-orange-500/60 hover:text-orange-600 dark:hover:text-orange-400 active:scale-95 transition-all duration-300"
                >
                    <Shuffle className="w-4 h-4" /> Surprise me
                </button>
            </div>
        </div>
    );
};

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export const AiForHumansPage = () => {
    const schemas = useMemo(() => ({
        breadcrumb: breadcrumbList([
            { name: 'Home', path: '/' },
            { name: 'AI & Humans', path: '/ai-for-humans/' }
        ]),
        faq: faqPage(WORKSHOP_FAQS),
        course: {
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'AI From Scratch — Free Hands-On Workshop for Students & Freshers',
            description: 'A free, hands-on workshop series in Chennai and online teaching college students and freshers how to use AI from absolute zero: the learning loop, the problem-solving loop, the psychology of confidence, and one shipped portfolio project. Taught by Mohammed Hussain, founder of A Generative Slice.',
            url: `${SITE}/ai-for-humans/`,
            provider: { '@type': 'Organization', name: 'A Generative Slice', url: SITE },
            isAccessibleForFree: true,
            offers: { '@type': 'Offer', price: 0, priceCurrency: 'INR', availability: 'https://schema.org/InStock', category: 'Free' },
            inLanguage: ['en', 'ta'],
            educationalLevel: 'Beginner',
            teaches: [
                'AI fundamentals and prompting from zero',
                'AI-assisted learning: explain, quiz, teach back',
                'Problem solving with AI: draft, test, verify',
                'Confidence and mindset when working with AI',
                'Building a portfolio project with AI'
            ],
            hasCourseInstance: [
                {
                    '@type': 'CourseInstance',
                    courseMode: 'onsite',
                    location: {
                        '@type': 'Place',
                        name: 'Chennai, Tamil Nadu',
                        address: {
                            '@type': 'PostalAddress',
                            addressLocality: 'Chennai',
                            addressRegion: 'Tamil Nadu',
                            addressCountry: 'IN'
                        }
                    }
                },
                { '@type': 'CourseInstance', courseMode: 'online' }
            ]
        }
    }), []);

    useJsonLd('aihumans-breadcrumb', schemas.breadcrumb);
    useJsonLd('aihumans-faq', schemas.faq);
    useJsonLd('aihumans-course', schemas.course);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
            {/* ------------------------------------------------------ */}
            {/* Hero — the letter                                       */}
            {/* ------------------------------------------------------ */}
            <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(251,146,60,0.12),transparent_50%),radial-gradient(circle_at_85%_30%,rgba(245,158,11,0.08),transparent_45%)] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:44px_44px] pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-600 dark:text-orange-400 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-8"
                    >
                        <Heart className="w-3.5 h-3.5" /> A letter from our founder · Chennai
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-black dark:text-white tracking-tight leading-[1.05] mb-6"
                    >
                        AI is not your competition.{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600">
                            It’s your power tool.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.2 }}
                        className="text-black/60 dark:text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
                    >
                        To everyone who feels the ground shifting under their career — and to every student told that marks alone will save them. This is the honest version of the AI story, written by a founder who uses these tools every single day. And at the end of it: a free, hands-on workshop that teaches you his exact loop.
                    </motion.p>

                    <motion.figure
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.3 }}
                        className="relative bg-white dark:bg-[#111] border border-orange-500/25 rounded-[2rem] p-8 md:p-10 shadow-xl shadow-orange-500/10 mb-10 text-left"
                    >
                        <Quote className="absolute -top-4 left-8 w-9 h-9 p-2 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30" aria-hidden="true" />
                        <blockquote className="text-xl md:text-2xl font-black text-black dark:text-white leading-snug tracking-tight">
                            “AI will not take your job. A person who knows how to use AI will take the job of a person who doesn’t.”
                        </blockquote>
                        <figcaption className="mt-4 text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400">
                            The sentence this studio was built to prove
                        </figcaption>
                    </motion.figure>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
                    >
                        <a
                            href="#workshops"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                        >
                            Join a free workshop <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="#reframe"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-black/15 dark:border-white/20 text-black dark:text-white text-sm font-bold hover:border-orange-500/60 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300"
                        >
                            <Sparkles className="w-4 h-4" /> Reframe your fear
                        </a>
                    </motion.div>

                    <motion.nav
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        aria-label="On this page"
                        className="flex flex-wrap items-center justify-center gap-2"
                    >
                        {[
                            { label: 'The fear is valid', href: '#fear' },
                            { label: 'The real competition', href: '#competition' },
                            { label: 'What stays human', href: '#human' },
                            { label: 'The founder’s loop', href: '#founder' },
                            { label: 'Free workshops', href: '#workshops' }
                        ].map((c) => (
                            <a
                                key={c.href}
                                href={c.href}
                                className="px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/5 border border-black/10 dark:border-white/10 text-[11px] font-bold text-black/55 dark:text-white/55 hover:border-orange-500/50 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300"
                            >
                                {c.label}
                            </a>
                        ))}
                    </motion.nav>
                </div>
            </section>

            {/* ------------------------------------------------------ */}
            {/* The fear is valid                                       */}
            {/* ------------------------------------------------------ */}
            <section id="fear" className="py-16 md:py-24 px-6 scroll-mt-28">
                <div className="max-w-3xl mx-auto">
                    <motion.div {...reveal}>
                        <Kicker>First, the honest part</Kicker>
                        <h2 className="text-3xl md:text-4xl font-black text-black dark:text-white tracking-tight mb-6">
                            The fear is valid. The conclusion is wrong.
                        </h2>
                        <div className="space-y-5 text-black/65 dark:text-white/65 leading-relaxed text-[15px] md:text-base">
                            <p>
                                Let’s say the quiet part out loud: some evenings you open your phone, read one more headline about a machine doing in seconds what took you years to learn, and feel a cold little drop in your stomach. Designers feel it. Accountants feel it. Freshers sending out their hundredth resume feel it hardest. If that’s you — you are not weak, and you are not behind. You are paying attention.
                            </p>
                            <p>
                                The fear deserves respect because the change is real. Work <em>is</em> being rewritten. Tasks that paid salaries for decades are being compressed into prompts. Anyone who tells you “nothing will change, relax” is selling you the same comfort as anyone who tells you “everything is doomed, panic”. Both are lazy answers, and neither helps you feed a family or pass a semester.
                            </p>
                            <p>
                                But here is where the fear makes its mistake: it points at the machine. It whispers <em>“AI is coming for you.”</em> Look closely at every wave of tools in history and you’ll see the truth is subtler and far more hopeful — the machine never came for the person. It came for the <strong className="text-black dark:text-white">task</strong>. And the person who picked up the machine didn’t disappear. They got promoted.
                            </p>
                        </div>
                    </motion.div>

                    {/* Tool eras */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {TOOL_ERAS.map((t, i) => (
                            <motion.div
                                key={t.tool}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.45, delay: Math.min(i * 0.06, 0.3) }}
                                className={`bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-3xl p-6 shadow-sm hover:border-orange-500/40 hover:shadow-md transition-all duration-300 ${i === 4 ? 'sm:col-span-2' : ''}`}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                                        <t.icon className="w-5 h-5 text-orange-500" />
                                    </span>
                                    <div>
                                        <p className="font-black text-black dark:text-white tracking-tight leading-tight">{t.tool}</p>
                                        <p className="text-[10px] font-mono font-bold text-black/40 dark:text-white/40 uppercase tracking-widest">{t.era}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-black/50 dark:text-white/45 italic leading-relaxed mb-3">
                                    <span className="not-italic font-bold text-red-500/80 dark:text-red-400/80 text-[10px] uppercase tracking-widest block mb-1">The panic</span>
                                    “{t.panic}”
                                </p>
                                <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
                                    <span className="font-bold text-emerald-600 dark:text-emerald-400 text-[10px] uppercase tracking-widest flex items-center gap-1 mb-1"><Check className="w-3 h-3" /> What actually happened</span>
                                    {t.reality}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p {...reveal} className="mt-10 text-center text-lg md:text-xl font-black text-black dark:text-white tracking-tight">
                        Five panics. Five promotions.{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">The pattern is the point.</span>
                    </motion.p>
                </div>
            </section>

            {/* ------------------------------------------------------ */}
            {/* The real competition — dark band                        */}
            {/* ------------------------------------------------------ */}
            <section id="competition" className="py-20 md:py-28 px-6 bg-[#0a0a0a] dark:bg-[#111] relative overflow-hidden scroll-mt-28">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(251,146,60,0.14),transparent_50%)] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                <div className="relative z-10 max-w-5xl mx-auto">
                    <motion.div {...reveal} className="text-center mb-12">
                        <Kicker dark>The sentence that matters</Kicker>
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                            The real competition isn’t a machine.{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">It’s the human holding it.</span>
                        </h2>
                        <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                            Two people apply for the same job. Same degree, same city, same salary expectation. One spent the last year collecting headlines about AI. The other spent it collecting reps — drafting, testing, verifying, shipping. The interview lasts twenty minutes. The outcome was decided months ago.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                        <motion.div {...reveal} className="rounded-3xl bg-white/[0.04] border border-white/10 p-7 md:p-8">
                            <p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 mb-5">
                                <Eye className="w-4 h-4" /> Watching from the sidelines
                            </p>
                            <ul className="space-y-3.5">
                                {[
                                    'Waits for certainty before starting — certainty never arrives.',
                                    'Collects opinions about the tool instead of hours on it.',
                                    'Does every task by hand and calls it dedication.',
                                    'Gets compared on effort, and loses on output.'
                                ].map((line) => (
                                    <li key={line} className="flex gap-3 text-sm text-white/55 leading-relaxed">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/25 shrink-0" aria-hidden="true" />
                                        {line}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-3xl bg-gradient-to-br from-orange-500/[0.12] to-amber-500/[0.05] border border-orange-500/40 p-7 md:p-8 shadow-2xl shadow-orange-500/10">
                            <p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-orange-400 mb-5">
                                <Zap className="w-4 h-4" /> Directing the tool
                            </p>
                            <ul className="space-y-3.5">
                                {[
                                    'Starts before feeling ready — confidence follows the reps.',
                                    'Learns in public: asks the “stupid” question first.',
                                    'Lets AI draft, then spends saved hours on judgment.',
                                    'Gets compared on outcomes, and brings proof to the table.'
                                ].map((line) => (
                                    <li key={line} className="flex gap-3 text-sm text-white/80 leading-relaxed">
                                        <Check className="mt-0.5 w-4 h-4 text-orange-400 shrink-0" aria-hidden="true" />
                                        {line}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    <motion.p {...reveal} className="text-center text-white/70 text-base md:text-lg font-semibold max-w-2xl mx-auto leading-relaxed">
                        Neither person is smarter. Neither worked harder.{' '}
                        <span className="text-orange-400 font-black">One simply picked up the lever.</span>{' '}
                        That choice is available to you today — and it stays available every day you keep making it.
                    </motion.p>
                </div>
            </section>

            {/* ------------------------------------------------------ */}
            {/* What AI is / what stays human                           */}
            {/* ------------------------------------------------------ */}
            <section id="human" className="py-20 md:py-28 px-6 scroll-mt-28">
                <div className="max-w-6xl mx-auto">
                    <motion.div {...reveal} className="text-center mb-12">
                        <Kicker>Know your tool</Kicker>
                        <h2 className="text-3xl md:text-5xl font-black text-black dark:text-white tracking-tight mb-5">
                            What AI is — and what it will{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">never be</span>
                        </h2>
                        <p className="text-black/60 dark:text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                            Fear grows in the dark. Turn the lights on: here is exactly what these systems do, and exactly where the human remains irreplaceable.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <motion.div {...reveal} className="bg-white dark:bg-[#111] border border-orange-500/25 rounded-[2rem] p-7 md:p-9 shadow-sm">
                            <p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-6">
                                <Bot className="w-4 h-4" /> What AI actually is
                            </p>
                            <ul className="space-y-6">
                                {AI_IS.map((item) => (
                                    <li key={item.title} className="flex gap-4">
                                        <span className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                                            <item.icon className="w-5 h-5 text-orange-500" />
                                        </span>
                                        <div>
                                            <p className="font-black text-black dark:text-white tracking-tight mb-1">{item.title}</p>
                                            <p className="text-sm text-black/55 dark:text-white/55 leading-relaxed">{item.line}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white dark:bg-[#111] border border-emerald-500/25 rounded-[2rem] p-7 md:p-9 shadow-sm">
                            <p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-6">
                                <Heart className="w-4 h-4" /> What stays human
                            </p>
                            <ul className="space-y-6">
                                {HUMAN_IS.map((item) => (
                                    <li key={item.title} className="flex gap-4">
                                        <span className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                                            <item.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                        </span>
                                        <div>
                                            <p className="font-black text-black dark:text-white tracking-tight mb-1">{item.title}</p>
                                            <p className="text-sm text-black/55 dark:text-white/55 leading-relaxed">{item.line}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div {...reveal} className="mt-10 max-w-3xl mx-auto text-center">
                        <p className="text-black/65 dark:text-white/65 text-base md:text-lg leading-relaxed">
                            The comfort AI promises isn’t idleness. It’s the removal of the parts of work that were never human to begin with — the retyping, the reformatting, the 2 a.m. spreadsheet — so the human parts get the hours they deserve. <strong className="text-black dark:text-white">A tool for advancement, not a replacement for the advancer.</strong> That is the whole philosophy, and it’s the one we build software on.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ------------------------------------------------------ */}
            {/* The Reframe Machine                                     */}
            {/* ------------------------------------------------------ */}
            <section id="reframe" className="py-16 md:py-24 px-6 scroll-mt-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.07),transparent_55%)] pointer-events-none" />
                <div className="relative z-10 max-w-5xl mx-auto">
                    <motion.div {...reveal} className="text-center mb-10">
                        <Kicker>Interactive · try it now</Kicker>
                        <h2 className="text-3xl md:text-5xl font-black text-black dark:text-white tracking-tight mb-5">
                            The{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Reframe Machine</span>
                        </h2>
                        <p className="text-black/60 dark:text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                            Every fear below is one we hear from students, parents and professionals across Chennai. Pick yours. Get the honest reframe — and one ten-minute step that turns the feeling into motion.
                        </p>
                    </motion.div>
                    <motion.div {...reveal}>
                        <ReframeMachine />
                    </motion.div>
                </div>
            </section>

            {/* ------------------------------------------------------ */}
            {/* The founder's loop                                      */}
            {/* ------------------------------------------------------ */}
            <section id="founder" className="py-20 md:py-28 px-6 bg-black/[0.025] dark:bg-white/[0.02] border-y border-black/5 dark:border-white/5 scroll-mt-28">
                <div className="max-w-6xl mx-auto">
                    <motion.div {...reveal} className="text-center mb-14">
                        <Kicker>From the founder · Mohammed Hussain</Kicker>
                        <h2 className="text-3xl md:text-5xl font-black text-black dark:text-white tracking-tight mb-5">
                            How I actually use AI —{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">the exact loop I’ll teach you</span>
                        </h2>
                        <p className="text-black/60 dark:text-white/60 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                            I run a Chennai studio that ships AI systems for caterers, chemical distributors and trading houses. I am not a genius and I didn’t start with advantages. I started with a loop — two of them, actually — and ran it every day until it compounded into a studio. This is precisely what the free workshop teaches, psychology included.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        <motion.div {...reveal} className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-[2rem] p-7 md:p-9 shadow-sm">
                            <p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-7">
                                <GraduationCap className="w-4 h-4" /> The learning loop
                            </p>
                            <ol className="space-y-6">
                                {LEARN_LOOP.map((s) => (
                                    <li key={s.n} className="flex gap-4">
                                        <span className="font-mono text-2xl font-black text-orange-500/30 dark:text-orange-400/30 shrink-0 leading-none mt-0.5">{s.n}</span>
                                        <div>
                                            <p className="font-black text-black dark:text-white tracking-tight mb-1">{s.title}</p>
                                            <p className="text-sm text-black/55 dark:text-white/55 leading-relaxed">{s.line}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </motion.div>

                        <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-[2rem] p-7 md:p-9 shadow-sm">
                            <p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-7">
                                <Hammer className="w-4 h-4" /> The building loop
                            </p>
                            <ol className="space-y-6">
                                {BUILD_LOOP.map((s) => (
                                    <li key={s.n} className="flex gap-4">
                                        <span className="font-mono text-2xl font-black text-orange-500/30 dark:text-orange-400/30 shrink-0 leading-none mt-0.5">{s.n}</span>
                                        <div>
                                            <p className="font-black text-black dark:text-white tracking-tight mb-1">{s.title}</p>
                                            <p className="text-sm text-black/55 dark:text-white/55 leading-relaxed">{s.line}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </motion.div>
                    </div>

                    {/* Psychology band */}
                    <motion.div {...reveal} className="relative overflow-hidden rounded-[2rem] bg-[#0a0a0a] dark:bg-[#111] border border-black/10 dark:border-white/10 p-7 md:p-10 shadow-2xl">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(251,146,60,0.15),transparent_55%)] pointer-events-none" />
                        <div className="relative z-10">
                            <p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-orange-400 mb-7">
                                <Brain className="w-4 h-4" /> The part nobody teaches · the psychology
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                {MINDSET.map((m) => (
                                    <div key={m.title} className="border-l-2 border-orange-500/50 pl-4">
                                        <p className="font-black text-white tracking-tight mb-2">{m.title}</p>
                                        <p className="text-sm text-white/55 leading-relaxed">{m.line}</p>
                                    </div>
                                ))}
                            </div>
                            <figure className="border-t border-white/10 pt-7">
                                <blockquote className="text-lg md:text-xl font-semibold text-white/85 leading-relaxed max-w-3xl">
                                    “I didn’t learn AI to compete with machines. I learned it to stop competing on memorization and start competing on judgment. That trade is available to anyone — including you.”
                                </blockquote>
                                <figcaption className="mt-3 text-xs font-bold uppercase tracking-widest text-orange-400">
                                    Mohammed Hussain · Founder, A Generative Slice
                                </figcaption>
                            </figure>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ------------------------------------------------------ */}
            {/* Free workshops                                          */}
            {/* ------------------------------------------------------ */}
            <section id="workshops" className="py-20 md:py-28 px-6 scroll-mt-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(16,185,129,0.06),transparent_45%),radial-gradient(circle_at_10%_80%,rgba(251,146,60,0.07),transparent_50%)] pointer-events-none" />
                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div {...reveal} className="text-center mb-10">
                        <Kicker>Free workshops · Chennai + online</Kicker>
                        <h2 className="text-3xl md:text-5xl font-black text-black dark:text-white tracking-tight mb-5">
                            Marks fade.{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600">Leverage compounds.</span>
                        </h2>
                        <p className="text-black/60 dark:text-white/60 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                            A message to every fresher and college student: you were told to raw-focus on marks and wait your turn. We respectfully disagree with the waiting. Come learn AI from absolute scratch — on-field, hands-on, in the exact way the founder uses it to learn, build and solve problems every day. Psychology included, because the tool is easy; the mindset is the real curriculum.
                        </p>
                    </motion.div>

                    <motion.div {...reveal} className="flex flex-wrap items-center justify-center gap-2 mb-12">
                        {['₹0 — free, forever', 'No sales pitch', 'No experience needed', 'Hands-on, not lectures', 'Tamil + English'].map((chip) => (
                            <span key={chip} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-500/[0.07] dark:bg-emerald-500/10 border border-emerald-500/25 text-xs md:text-sm font-bold text-emerald-700 dark:text-emerald-400">
                                <Check className="w-3.5 h-3.5" /> {chip}
                            </span>
                        ))}
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                        {MODULES.map((m, i) => (
                            <motion.div
                                key={m.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.45, delay: Math.min(i * 0.06, 0.3) }}
                                className={`group bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-3xl p-7 shadow-sm hover:border-orange-500/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                            >
                                <div className="flex items-center justify-between mb-5">
                                    <span className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                                        <m.icon className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" />
                                    </span>
                                    <span className="font-mono text-xs font-black text-black/25 dark:text-white/25 uppercase tracking-widest">Module {i + 1}</span>
                                </div>
                                <h3 className="font-black text-black dark:text-white tracking-tight text-lg mb-2">{m.title}</h3>
                                <p className="text-sm text-black/55 dark:text-white/55 leading-relaxed flex-grow">{m.line}</p>
                                <p className="mt-5 pt-4 border-t border-black/5 dark:border-white/10 text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-start gap-1.5">
                                    <Check className="w-3.5 h-3.5 mt-px shrink-0" /> You leave with: {m.leave}
                                </p>
                            </motion.div>
                        ))}

                        {/* Format card fills the sixth slot */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.45, delay: 0.3 }}
                            className="rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 p-7 shadow-xl shadow-orange-500/25 flex flex-col text-white"
                        >
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/70 mb-5">How it runs</p>
                            <ul className="space-y-4 flex-grow">
                                {[
                                    { icon: Users, line: '5 hands-on sessions, small batches — every student gets attention.' },
                                    { icon: Laptop, line: 'Bring a phone or laptop. Free tools only; we never ask you to buy anything.' },
                                    { icon: MapPin, line: 'In-person in Chennai or live online. Colleges can host us on campus.' },
                                    { icon: Clock, line: 'Scheduled around semesters — evenings and weekends, exams respected.' }
                                ].map((f) => (
                                    <li key={f.line} className="flex gap-3 text-sm font-semibold leading-relaxed">
                                        <f.icon className="w-4 h-4 mt-0.5 shrink-0 text-white/80" />
                                        {f.line}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div {...reveal} className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-[2rem] p-8 md:p-10 shadow-sm text-center">
                        <h3 className="text-xl md:text-2xl font-black text-black dark:text-white tracking-tight mb-3">
                            Grab a seat. Bring a friend. Bring your whole department.
                        </h3>
                        <p className="text-sm md:text-base text-black/55 dark:text-white/55 leading-relaxed max-w-2xl mx-auto mb-8">
                            Registration is one WhatsApp message — a human replies, confirms your batch and sends the details. Why free? Because this studio wins when Chennai’s next generation builds with AI instead of fearing it. That’s the mission, not a marketing funnel.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <a
                                href={WORKSHOP_WA}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-bold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                            >
                                <MessageCircle className="w-4 h-4" /> Reserve a free seat
                            </a>
                            <Link
                                to="/contact/"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                            >
                                <GraduationCap className="w-4 h-4" /> Host it at your campus <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <p className="mt-6 text-xs font-mono text-black/40 dark:text-white/35">
                            Or email {companyContacts.emails.primary} · {companyContacts.phones.primary}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ------------------------------------------------------ */}
            {/* FAQ                                                     */}
            {/* ------------------------------------------------------ */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <FaqAccordion faqs={WORKSHOP_FAQS} kicker="Workshop FAQ" title="Everything students ask before joining" />
                </div>
            </section>

            {/* ------------------------------------------------------ */}
            {/* Closing band                                            */}
            {/* ------------------------------------------------------ */}
            <section className="pb-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] dark:bg-[#111] border border-black/10 dark:border-white/10 p-8 md:p-14 shadow-2xl text-center"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.18),transparent_55%)] pointer-events-none" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
                        <div className="relative z-10">
                            <p className="text-orange-400/90 text-xs font-bold uppercase tracking-widest mb-5">The last word</p>
                            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight mb-5 max-w-2xl mx-auto">
                                The future doesn’t belong to AI. It belongs to the humans who{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">pick it up.</span>
                            </h2>
                            <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-9">
                                You now know the pattern, the loop and the psychology. The only thing left is the ten minutes. Start them today — or start them with us, for free, in Chennai.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                                <a
                                    href={WORKSHOP_WA}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                                >
                                    <MessageCircle className="w-4 h-4" /> Reserve my free seat
                                </a>
                                <Link
                                    to="/projects/"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/5 border border-white/15 text-white text-sm font-bold hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                                >
                                    See what the loop builds <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                            <p className="mt-7 text-white/35 text-xs font-mono">
                                {companyContacts.address.line1}, {companyContacts.address.area} · {companyContacts.address.stateZip}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};