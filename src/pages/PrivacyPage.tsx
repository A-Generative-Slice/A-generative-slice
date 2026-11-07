import { ShieldCheck } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaRedditAlien, FaYoutube } from 'react-icons/fa';
import { LegalLayout, LegalSection, LegalList, LegalSubHeading } from '../components/LegalLayout';
import { Link } from 'react-router-dom';

const platforms = [
    { name: 'Meta · Instagram · WhatsApp Business', icon: <FaFacebookF className="w-3.5 h-3.5" /> },
    { name: 'LinkedIn', icon: <FaLinkedinIn className="w-3.5 h-3.5" /> },
    { name: 'X / Twitter', icon: <FaTwitter className="w-3.5 h-3.5" /> },
    { name: 'Reddit', icon: <FaRedditAlien className="w-3.5 h-3.5" /> },
    { name: 'Google · YouTube', icon: <FaYoutube className="w-3.5 h-3.5" /> }
];

const toc = [
    { id: 'collect', label: 'Information We Collect' },
    { id: 'oauth', label: 'OAuth & API Tokens' },
    { id: 'use', label: 'How We Use Data' },
    { id: 'cookies', label: 'Cookies & Analytics' },
    { id: 'sharing', label: 'Sharing' },
    { id: 'security', label: 'Security & Retention' },
    { id: 'rights', label: 'Your Rights' }
];

export const PrivacyPage = () => {
    return (
        <LegalLayout
            icon={<ShieldCheck className="w-4 h-4" />}
            eyebrow="Legal · Privacy"
            title={<>Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black/40 dark:from-white dark:to-white/40">Policy</span></>}
            intro="A Generative Slice builds AI products and automated workflows — not data businesses. This policy explains exactly what we collect, why we collect it, and the control you keep over it."
            toc={toc}
        >
            <LegalSection id="who" index="01" title="Who We Are">
                <p>
                    This website (https://agenerativeslice.com) and the Slice Suite of products are operated by{' '}
                    <strong className="font-semibold text-black dark:text-white">A Generative Slice</strong>, an AI products laboratory and
                    bespoke web systems studio based in Chennai, Tamil Nadu, India. In this policy, “we”, “us”, and “our” refer to A Generative Slice,
                    and “you” refers to any visitor, client, or product user.
                </p>
                <p>
                    We handle personal data in line with applicable Indian law, including the Digital Personal Data Protection Act, 2023,
                    and the developer policies of every platform we integrate with.
                </p>
            </LegalSection>

            <LegalSection id="collect" index="02" title="Information We Collect">
                <LegalSubHeading>Contact & inquiry forms</LegalSubHeading>
                <p>
                    When you submit a contact form, project inquiry, product demo request, or career application, we collect the details you
                    choose to share: your name, email address, phone number, company name, project brief or message, optional social profile
                    links, and — for career applications — your resume PDF. Forms are delivered through form-processing services such as
                    Web3Forms and Formspree, which forward submissions to our business inbox.
                </p>
                <LegalSubHeading>Client project engagements</LegalSubHeading>
                <p>
                    For paid engagements we collect the information needed to scope, contract, and deliver the work: billing details,
                    communication records, brand assets, and the account credentials or API access you explicitly authorize us to use.
                    Engagements are covered by signed NDAs and milestone agreements.
                </p>
                <LegalSubHeading>Slice Suite product usage</LegalSubHeading>
                <p>
                    If you use a Slice Suite product (such as Slice3D, SliceDAM, SliceLeads, SliceMail, SliceInbox, or SliceClass), we process
                    only what the product needs to function: your account identifiers, the content you upload or schedule, configuration
                    settings, and minimal operational logs. Where a product is self-hosted on your own infrastructure, your data stays there.
                </p>
            </LegalSection>

            <LegalSection id="oauth" index="03" title="How We Use OAuth & API Tokens">
                <p>
                    Some of our automations connect to third-party platforms through official OAuth 2.0 flows and platform APIs. When you
                    authorize a connection, we receive access tokens that act strictly on behalf of the consenting account owner, within the
                    permission scopes you approved:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                    {platforms.map((p) => (
                        <span key={p.name} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-black/10 dark:border-white/10 bg-[#fafafa] dark:bg-[#0a0a0a] text-xs font-semibold text-black/70 dark:text-white/70">
                            {p.icon}
                            {p.name}
                        </span>
                    ))}
                </div>
                <LegalList items={[
                    <><strong className="font-semibold text-black dark:text-white">Authorized publishing only.</strong> Tokens are used to publish, schedule, and manage content you explicitly approved — posts, reels, videos, messages, and campaign workflows.</>,
                    <><strong className="font-semibold text-black dark:text-white">Workflow automation only.</strong> Actions such as inbox triage, lead follow-ups, and comment replies run only within the scopes and accounts you connected.</>,
                    <><strong className="font-semibold text-black dark:text-white">We never sell data.</strong> Personal information and platform data are never sold, rented, or traded — to anyone, for any reason.</>,
                    <><strong className="font-semibold text-black dark:text-white">We never scrape third-party personal data.</strong> We do not harvest personal information about other users from any platform, and we respect every platform's rate limits and developer terms.</>,
                    <><strong className="font-semibold text-black dark:text-white">Revocable at any time.</strong> Tokens are stored encrypted, used with least-privilege access, and deleted when you disconnect an integration or request deletion.</>
                ]} />
                <p>
                    Our use and transfer of information received from Google APIs adheres to the{' '}
                    <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="font-semibold text-black dark:text-white underline decoration-black/20 dark:decoration-white/30 underline-offset-4 hover:decoration-black dark:hover:decoration-white transition-all">
                        Google API Services User Data Policy
                    </a>, including the Limited Use requirements. Equivalent commitments apply under the Meta Platform Terms, X Developer
                    Agreement, LinkedIn API Terms of Use, and Reddit API Terms.
                </p>
            </LegalSection>

            <LegalSection id="use" index="04" title="How We Use Your Information">
                <LegalList items={[
                    'To respond to inquiries, scope projects, and deliver the services you requested.',
                    'To operate, maintain, and improve the Slice Suite products you use.',
                    'To run the publishing and automation workflows you explicitly authorized.',
                    'To send project updates, invoices, and service communications — never unsolicited marketing blasts.',
                    'To meet legal, tax, and accounting obligations, and to enforce our terms.'
                ]} />
                <p>
                    We do not make decisions about you using automated profiling, and we do not use your content to train third-party
                    AI models without your explicit written consent.
                </p>
            </LegalSection>

            <LegalSection id="cookies" index="05" title="Cookies & Analytics">
                <p>
                    This website uses a small number of cookies and similar technologies: strictly necessary storage for core functionality
                    (such as remembering your theme preference), and Google Analytics 4 to understand aggregate traffic — which pages are
                    visited, approximate location, and device type. Analytics data is aggregated and is not used to build advertising
                    profiles or track you across other websites.
                </p>
                <p>
                    You can disable cookies through your browser settings or opt out of Google Analytics with the official browser add-on.
                    The site remains fully usable with cookies disabled.
                </p>
            </LegalSection>

            <LegalSection id="sharing" index="06" title="When Data Is Shared">
                <p>We share personal data only in these narrow cases:</p>
                <LegalList items={[
                    <><strong className="font-semibold text-black dark:text-white">Service processors.</strong> Form delivery (Web3Forms / Formspree), website hosting (GitHub Pages), email, and cloud infrastructure providers — each processing data only to deliver their service to us.</>,
                    <><strong className="font-semibold text-black dark:text-white">Connected platforms.</strong> When you authorize an integration, the content you approved is transmitted to that platform (Meta, LinkedIn, X, Reddit, Google) through its official API.</>,
                    <><strong className="font-semibold text-black dark:text-white">Legal requirements.</strong> When disclosure is required by applicable law, regulation, or a valid legal order.</>
                ]} />
                <p>We never sell personal data, and we never share it for third-party advertising or marketing.</p>
            </LegalSection>

            <LegalSection id="security" index="07" title="Data Security & Retention">
                <p>
                    All traffic to this site is encrypted over HTTPS. Access tokens and credentials are stored encrypted with access limited
                    to the engineers who need them, and client work is protected by NDAs. We apply least-privilege access, keep dependencies
                    patched, and review our integrations regularly.
                </p>
                <p>
                    We retain personal data only as long as needed for the purpose it was collected: inquiry details while your conversation
                    or project is active, contract and billing records for the period required by Indian law, and OAuth tokens until you
                    disconnect or request deletion. When data is no longer needed, it is deleted or anonymized.
                </p>
            </LegalSection>

            <LegalSection id="rights" index="08" title="Your Rights">
                <p>You have the right to:</p>
                <LegalList items={[
                    'Access the personal data we hold about you and receive a copy.',
                    'Correct inaccurate or outdated information.',
                    'Request deletion of your data and revocation of any OAuth permissions — see our step-by-step guide.',
                    'Withdraw consent for any authorized integration at any time, without penalty.',
                    'Lodge a complaint with us first, and with the appropriate data-protection authority if unsatisfied.'
                ]} />
                <p>
                    Deletion requests are processed within <strong className="font-semibold text-black dark:text-white">48 hours</strong>.
                    Start here:{' '}
                    <Link to="/data-deletion" className="font-semibold text-black dark:text-white underline decoration-black/20 dark:decoration-white/30 underline-offset-4 hover:decoration-black dark:hover:decoration-white transition-all">
                        Data Deletion Instructions
                    </Link>, or email{' '}
                    <a href="mailto:agenerativeslice@gmail.com" className="font-semibold text-black dark:text-white underline decoration-black/20 dark:decoration-white/30 underline-offset-4 hover:decoration-black dark:hover:decoration-white transition-all">
                        agenerativeslice@gmail.com
                    </a>.
                </p>
            </LegalSection>

            <LegalSection id="changes" index="09" title="Children's Privacy & Policy Changes">
                <p>
                    Our services are designed for businesses and professionals and are not directed at children under 18. We do not knowingly
                    collect personal data from children; if you believe a child has provided us data, contact us and we will delete it promptly.
                </p>
                <p>
                    We may update this policy as our products and the law evolve. The “Last updated” date at the top of this page always
                    reflects the current version, and material changes will be highlighted here. Continued use of our services after an
                    update constitutes acceptance of the revised policy.
                </p>
            </LegalSection>
        </LegalLayout>
    );
};