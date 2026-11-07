import { Trash2, Clock, Mail, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaRedditAlien, FaGoogle } from 'react-icons/fa';
import { LegalLayout, LegalSection, LegalList } from '../components/LegalLayout';

const requestSteps = [
    {
        title: 'Send the request from your registered email',
        body: 'Email agenerativeslice@gmail.com with the subject “Data Deletion Request” — the button below pre-fills it for you. Include your full name, the email or account handle you used, the platform(s) involved (Meta, LinkedIn, X, Reddit, Google), and whether you want full deletion or only OAuth disconnection.'
    },
    {
        title: 'We verify and act immediately',
        body: 'We confirm the request comes from the account owner, then delete your personal data, revoke and destroy all stored OAuth access and refresh tokens, and stop every automation connected to your accounts.'
    },
    {
        title: 'Receive written confirmation',
        body: 'You receive an email confirming exactly what was deleted and disconnected. The entire process is completed within 48 hours of your request — no fees, no friction, no questions beyond verification.'
    }
];

const revocationGuides = [
    {
        name: 'Meta · Instagram · WhatsApp',
        icon: <FaFacebookF className="w-4 h-4" />,
        steps: 'Facebook → Settings & privacy → Settings → Apps and websites → select the A Generative Slice app → Remove.',
        url: 'https://www.facebook.com/settings?tab=applications',
        linkLabel: 'Open Apps & Websites'
    },
    {
        name: 'X / Twitter',
        icon: <FaTwitter className="w-4 h-4" />,
        steps: 'Settings and privacy → Security and account access → Apps and sessions → Connected apps → Revoke app permissions.',
        url: 'https://x.com/settings/connected_apps',
        linkLabel: 'Open Connected Apps'
    },
    {
        name: 'LinkedIn',
        icon: <FaLinkedinIn className="w-4 h-4" />,
        steps: 'Me → Settings & Privacy → Data privacy → Other applications → Permitted services → Remove access.',
        url: 'https://www.linkedin.com/prefs/settings/',
        linkLabel: 'Open LinkedIn Settings'
    },
    {
        name: 'Reddit',
        icon: <FaRedditAlien className="w-4 h-4" />,
        steps: 'User settings → Privacy & security, or visit your authorized applications page → find the app → Revoke access.',
        url: 'https://www.reddit.com/prefs/apps/',
        linkLabel: 'Open Authorized Apps'
    },
    {
        name: 'Google · YouTube',
        icon: <FaGoogle className="w-4 h-4" />,
        steps: 'Google Account → Security → Third-party apps & services (or “Your connections to third-party apps”) → select the app → Delete all connections.',
        url: 'https://myaccount.google.com/connections',
        linkLabel: 'Open Google Connections'
    }
];

export const DataDeletionPage = () => {
    return (
        <LegalLayout
            icon={<Trash2 className="w-4 h-4" />}
            eyebrow="Legal · Your Data, Your Call"
            title={<>Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black/40 dark:from-white dark:to-white/40">Deletion</span></>}
            intro="Any user or customer can request immediate deletion of their data or revoke OAuth app permissions at any time. Here is exactly how — and how fast we act."
            badge={
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-widest shadow-lg">
                    <Clock className="w-3.5 h-3.5" />
                    48-hour processing SLA
                </span>
            }
        >
            <LegalSection id="request" index="01" title="Request Deletion by Email">
                <ol className="space-y-0 pt-1">
                    {requestSteps.map((step, i) => (
                        <li key={step.title} className="flex gap-5">
                            <div className="flex flex-col items-center">
                                <span className="w-10 h-10 rounded-full border border-black/15 dark:border-white/20 bg-[#fafafa] dark:bg-[#0a0a0a] flex items-center justify-center font-mono font-bold text-sm text-black dark:text-white shrink-0">
                                    {i + 1}
                                </span>
                                {i < requestSteps.length - 1 && (
                                    <span className="w-px flex-1 bg-black/10 dark:bg-white/10 my-2" />
                                )}
                            </div>
                            <div className={i < requestSteps.length - 1 ? 'pb-7' : 'pb-1'}>
                                <h3 className="font-bold text-black dark:text-white mb-1.5">{step.title}</h3>
                                <p className="text-sm leading-relaxed">{step.body}</p>
                            </div>
                        </li>
                    ))}
                </ol>

                <div className="pt-6 flex flex-col items-start gap-3">
                    <a
                        href="mailto:agenerativeslice@gmail.com?subject=Data%20Deletion%20Request"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-black dark:bg-white text-white dark:text-black font-bold text-sm uppercase tracking-widest hover:opacity-80 hover:-translate-y-0.5 transition-all duration-300 shadow-xl"
                    >
                        <Mail className="w-4 h-4" />
                        Request Data Deletion
                    </a>
                    <p className="text-xs text-black/40 dark:text-white/40 font-mono">
                        Opens your email app · To: agenerativeslice@gmail.com · Subject: Data Deletion Request
                    </p>
                </div>
            </LegalSection>

            <LegalSection id="scope" index="02" title="What Gets Deleted — and What May Remain">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-[#fafafa] dark:bg-[#0a0a0a] p-6">
                        <p className="text-xs font-bold uppercase tracking-widest text-black dark:text-white mb-4">Permanently deleted</p>
                        <LegalList items={[
                            'Contact, inquiry, and application records',
                            'Account profiles and product usage data',
                            'All OAuth access & refresh tokens',
                            'Uploaded content and scheduled posts',
                            'Active automations tied to your accounts'
                        ]} />
                    </div>
                    <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-[#fafafa] dark:bg-[#0a0a0a] p-6">
                        <p className="text-xs font-bold uppercase tracking-widest text-black dark:text-white mb-4">May be retained</p>
                        <LegalList items={[
                            'Invoices and tax records required by Indian law, kept only for the statutory period',
                            'Fully anonymized, non-identifiable aggregate statistics',
                            'Nothing else — ever'
                        ]} />
                    </div>
                </div>
                <p className="pt-2">
                    Deletion is free and unconditional. You will never be penalized, charged, or pressured for requesting it.
                </p>
            </LegalSection>

            <LegalSection id="revoke" index="03" title="Revoke OAuth Access Yourself — Instantly">
                <p>
                    Prefer to cut access right now? You can revoke our app's permissions directly from each platform's settings.
                    Revocation stops all future access immediately; to also erase data already stored with us, send the deletion email above.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {revocationGuides.map((guide) => (
                        <div key={guide.name} className="rounded-2xl border border-black/10 dark:border-white/10 bg-[#fafafa] dark:bg-[#0a0a0a] p-5 flex flex-col hover:border-black/25 dark:hover:border-white/25 transition-colors duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="w-8 h-8 rounded-lg border border-black/10 dark:border-white/15 bg-white dark:bg-[#111] flex items-center justify-center text-black dark:text-white shrink-0">
                                    {guide.icon}
                                </span>
                                <p className="font-bold text-black dark:text-white text-sm">{guide.name}</p>
                            </div>
                            <p className="text-[13px] leading-relaxed text-black/50 dark:text-white/50 mb-4 flex-grow">{guide.steps}</p>
                            <a href={guide.url} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-black dark:text-white hover:opacity-60 transition-opacity uppercase tracking-wider">
                                {guide.linkLabel} <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    ))}
                </div>
            </LegalSection>

            <LegalSection id="promise" index="04" title="Our Commitment">
                <div className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-full border border-black/15 dark:border-white/20 bg-[#fafafa] dark:bg-[#0a0a0a] flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5 text-black dark:text-white" />
                    </span>
                    <p>
                        Every deletion request is handled personally by our team and completed within{' '}
                        <strong className="font-semibold text-black dark:text-white">48 hours</strong>, in line with Meta's Platform Terms
                        and X's Developer Agreement data-deletion requirements. If a request ever needs longer for a legitimate legal reason,
                        we tell you within that window and explain exactly why. For urgent concerns, call or WhatsApp{' '}
                        <a href="tel:+917812891494" className="font-semibold text-black dark:text-white underline decoration-black/20 dark:decoration-white/30 underline-offset-4 hover:decoration-black dark:hover:decoration-white transition-all">
                            +91 78128 91494
                        </a>.
                    </p>
                </div>
            </LegalSection>
        </LegalLayout>
    );
};