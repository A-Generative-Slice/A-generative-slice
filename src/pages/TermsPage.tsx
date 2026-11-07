import { Scale } from 'lucide-react';
import { LegalLayout, LegalSection, LegalList, LegalSubHeading } from '../components/LegalLayout';
import { Link } from 'react-router-dom';

const sliceSuite = [
    { name: 'Slice3D', desc: 'Interactive 3D product showcases that run smoothly in any browser.' },
    { name: 'SliceDAM', desc: 'A searchable vault for contracts, invoices, brand assets, and documents.' },
    { name: 'slicePITCH', desc: 'AI-generated pitch decks and presentations from raw notes and specs.' },
    { name: 'sliceEVENT', desc: 'Event pages, RSVP handling, and guest-workflow automation.' },
    { name: 'SliceLeads', desc: 'Verified local-business lead discovery with personalized outreach drafts.' },
    { name: 'SliceMail', desc: 'Tailored email outreach and client updates at scale, from your own inbox.' },
    { name: 'SliceInbox', desc: 'An always-on chief of staff that triages and drafts for shared team inboxes.' },
    { name: 'SliceClass', desc: 'A private academy portal with video lessons and progress tracking.' }
];

const toc = [
    { id: 'acceptance', label: 'Acceptance' },
    { id: 'services', label: 'Services & Slice Suite' },
    { id: 'ip', label: 'Intellectual Property' },
    { id: 'acceptable-use', label: 'Acceptable Use' },
    { id: 'api-terms', label: 'API & Automation' },
    { id: 'liability', label: 'Liability' },
    { id: 'law', label: 'Governing Law' }
];

export const TermsPage = () => {
    return (
        <LegalLayout
            icon={<Scale className="w-4 h-4" />}
            eyebrow="Legal · Terms"
            title={<>Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black/40 dark:from-white dark:to-white/40">Service</span></>}
            intro="Plain-language terms for working with A Generative Slice — our studio services, the Slice Suite products, and the automations we build on your behalf."
            toc={toc}
        >
            <LegalSection id="acceptance" index="01" title="Acceptance of Terms">
                <p>
                    By visiting https://agenerativeslice.com, engaging A Generative Slice for a project, or using any Slice Suite product,
                    you agree to these Terms of Service and to our{' '}
                    <Link to="/privacy" className="font-semibold text-black dark:text-white underline decoration-black/20 dark:decoration-white/30 underline-offset-4 hover:decoration-black dark:hover:decoration-white transition-all">
                        Privacy Policy
                    </Link>. If you are accepting on behalf of a company, you confirm you have authority to bind that company.
                    If you do not agree, please do not use our services.
                </p>
                <p>
                    Individual project proposals, statements of work, NDAs, and milestone agreements supplement these terms. Where a signed
                    agreement conflicts with this page, the signed agreement controls for that engagement.
                </p>
            </LegalSection>

            <LegalSection id="services" index="02" title="Our Services & the Slice Suite">
                <p>
                    A Generative Slice is an AI products laboratory and bespoke web systems studio based in Chennai, Tamil Nadu, India.
                    We provide full-cycle AI architecture, custom enterprise systems, high-conversion web platforms, and automated workflow
                    integrations, alongside our open-core product family, the{' '}
                    <strong className="font-semibold text-black dark:text-white">Slice Suite</strong>:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {sliceSuite.map((product) => (
                        <div key={product.name} className="rounded-2xl border border-black/10 dark:border-white/10 bg-[#fafafa] dark:bg-[#0a0a0a] p-4 hover:border-black/25 dark:hover:border-white/25 transition-colors duration-300">
                            <p className="font-bold text-black dark:text-white text-sm mb-1 font-mono">{product.name}</p>
                            <p className="text-[13px] leading-relaxed text-black/50 dark:text-white/50">{product.desc}</p>
                        </div>
                    ))}
                </div>
                <p className="pt-2">
                    Features evolve continuously. We may add, improve, or retire capabilities with reasonable notice, and we never
                    materially reduce what a paid engagement contractually guarantees.
                </p>
            </LegalSection>

            <LegalSection id="responsibilities" index="03" title="Accounts & Client Responsibilities">
                <LegalList items={[
                    'Provide accurate information when inquiring, contracting, or creating product accounts.',
                    'Keep credentials, API keys, and access tokens confidential; notify us immediately of any suspected compromise.',
                    'Ensure you hold the rights to all content, assets, and accounts you submit or connect for automation.',
                    'Review and approve automated output where a product is configured for human-in-the-loop review.',
                    'Pay agreed fees on the milestone schedule defined in your proposal. Initial consultations and scoping are free.'
                ]} />
            </LegalSection>

            <LegalSection id="ip" index="04" title="Intellectual Property Rights">
                <LegalSubHeading>Your content & deliverables</LegalSubHeading>
                <p>
                    You retain all rights to the content, data, and brand assets you provide. Upon full payment, you own the bespoke
                    deliverables we build specifically for your engagement, as set out in the signed agreement.
                </p>
                <LegalSubHeading>Our tools & open-core products</LegalSubHeading>
                <p>
                    A Generative Slice retains ownership of its pre-existing frameworks, internal tooling, and the Slice Suite source code.
                    Open-core components are licensed under the license published in their respective repositories; nothing in these terms
                    restricts rights you already receive under those open-source licenses.
                </p>
                <LegalSubHeading>Brand & feedback</LegalSubHeading>
                <p>
                    Our name, logo, and site design remain our property. With your permission — and never without it — we may showcase
                    completed work in our portfolio. Suggestions you share voluntarily may be used to improve our products without obligation.
                </p>
            </LegalSection>

            <LegalSection id="acceptable-use" index="05" title="Acceptable Use Policy">
                <p>You agree not to use our services or products to:</p>
                <LegalList items={[
                    'Send spam, unsolicited bulk messages, or deceptive communications, or violate anti-spam law.',
                    'Publish illegal, infringing, defamatory, or harmful content, or impersonate any person or organization.',
                    'Scrape, harvest, or mine personal data of third parties from any platform without authorization.',
                    'Circumvent platform rate limits, security controls, or developer policies of Meta, X, LinkedIn, Reddit, Google, or any other service.',
                    'Probe, disrupt, or gain unauthorized access to our systems, or distribute malware through anything we deliver.',
                    'Resell or sublicense our services without a written partnership agreement.'
                ]} />
                <p>
                    We may suspend automations or accounts that violate this policy, and we will tell you why whenever we do.
                </p>
            </LegalSection>

            <LegalSection id="api-terms" index="06" title="API & Automation Terms">
                <p>
                    When you connect a third-party account (Meta / Instagram / WhatsApp Business, LinkedIn, X / Twitter, Reddit,
                    Google / YouTube, or others) through OAuth 2.0, you grant A Generative Slice permission to act on your behalf strictly
                    within the approved scopes, for authorized publishing and workflow automation only.
                </p>
                <LegalList items={[
                    <><strong className="font-semibold text-black dark:text-white">You stay the owner.</strong> Connected accounts remain yours; you may revoke access at any time from the platform's settings or via our data-deletion process.</>,
                    <><strong className="font-semibold text-black dark:text-white">Platform rules apply.</strong> You are responsible for complying with each platform's terms. If a platform changes its API or policies, affected features may change or pause — we will adapt or inform you promptly.</>,
                    <><strong className="font-semibold text-black dark:text-white">No uptime guarantees for third parties.</strong> We cannot guarantee the availability or behavior of external platforms, and we are not liable for their outages, policy changes, or account actions.</>,
                    <><strong className="font-semibold text-black dark:text-white">Tokens are handled carefully.</strong> Credentials are stored encrypted, used with least privilege, never sold, and deleted on request. See our Privacy Policy for details.</>
                ]} />
            </LegalSection>

            <LegalSection id="payments" index="07" title="Fees, Confidentiality & Termination">
                <p>
                    Project fees are fixed and quoted upfront in your proposal — no hidden charges. Unless a signed agreement states
                    otherwise, fees for completed and delivered milestones are non-refundable. Either party may end an engagement with
                    written notice; you receive all work completed and paid for up to that point.
                </p>
                <p>
                    Both parties protect confidential information shared during an engagement. Standard NDAs are signed before work begins,
                    and confidentiality obligations survive termination. We may terminate or suspend access immediately for serious breaches
                    of these terms.
                </p>
            </LegalSection>

            <LegalSection id="liability" index="08" title="Disclaimers & Limitation of Liability">
                <p>
                    Our services and products are provided “as is” and “as available”. While we engineer for reliability, we do not warrant
                    uninterrupted or error-free operation, and we disclaim implied warranties to the maximum extent permitted by law.
                </p>
                <p>
                    To the maximum extent permitted by applicable law, A Generative Slice is not liable for indirect, incidental, special,
                    or consequential damages — including lost profits, lost data, or business interruption — arising from your use of our
                    services. Our total aggregate liability for any claim is limited to the fees you actually paid us for the specific
                    service giving rise to the claim in the three months preceding the event.
                </p>
                <p>
                    Nothing in these terms excludes liability that cannot lawfully be excluded, including for fraud or willful misconduct.
                </p>
            </LegalSection>

            <LegalSection id="law" index="09" title="Governing Law & Disputes">
                <p>
                    These terms are governed by the laws of India. Any dispute arising out of or relating to these terms or our services
                    is subject to the exclusive jurisdiction of the courts of{' '}
                    <strong className="font-semibold text-black dark:text-white">Chennai, Tamil Nadu, India</strong>.
                </p>
                <p>
                    Before any formal proceeding, both parties agree to attempt good-faith resolution by contacting us directly — most
                    issues are solved in one conversation.
                </p>
            </LegalSection>

            <LegalSection id="changes" index="10" title="Changes & Contact">
                <p>
                    We may revise these terms as our services evolve. The “Last updated” date above always reflects the current version;
                    continued use after changes means you accept them. For any question about these terms, contact{' '}
                    <a href="mailto:agenerativeslice@gmail.com" className="font-semibold text-black dark:text-white underline decoration-black/20 dark:decoration-white/30 underline-offset-4 hover:decoration-black dark:hover:decoration-white transition-all">
                        agenerativeslice@gmail.com
                    </a>{' '}
                    or call{' '}
                    <a href="tel:+917812891494" className="font-semibold text-black dark:text-white underline decoration-black/20 dark:decoration-white/30 underline-offset-4 hover:decoration-black dark:hover:decoration-white transition-all">
                        +91 78128 91494
                    </a>.
                </p>
            </LegalSection>
        </LegalLayout>
    );
};