import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ShieldCheck, KeyRound, Copy, Check, Eye, EyeOff,
    AlertTriangle, Terminal, Eraser, ArrowLeft, Braces, Radio
} from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaRedditAlien, FaGoogle } from 'react-icons/fa';

/* ── OAuth parameter extraction ─────────────────────────────────────────── */

interface OAuthParams {
    code: string | null;
    state: string | null;
    error: string | null;
    errorDescription: string | null;
    accessToken: string | null;
    tokenType: string | null;
    expiresIn: string | null;
    scope: string | null;
    receivedAt: string;
}

const readOAuthParams = (): OAuthParams => {
    const query = new URLSearchParams(window.location.search);
    // Providers may return credentials in the fragment (implicit flow) as
    // "#access_token=…" , "#/access_token=…" or "#?code=…".
    const rawHash = window.location.hash.replace(/^#[/?]*/, '');
    const fragment = new URLSearchParams(rawHash);
    const pick = (key: string) => query.get(key) ?? fragment.get(key);

    return {
        code: pick('code'),
        state: pick('state'),
        error: pick('error'),
        errorDescription: pick('error_description'),
        accessToken: pick('access_token'),
        tokenType: pick('token_type'),
        expiresIn: pick('expires_in'),
        scope: pick('scope'),
        receivedAt: new Date().toLocaleTimeString('en-IN', { hour12: false })
    };
};

const maskValue = (value: string) => {
    if (value.length <= 10) return `${value.slice(0, 2)}${'•'.repeat(6)}`;
    return `${value.slice(0, 6)}${'•'.repeat(10)}${value.slice(-4)}`;
};

const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        // Fallback for non-secure contexts / older browsers
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        let ok = false;
        try { ok = document.execCommand('copy'); } catch { ok = false; }
        document.body.removeChild(ta);
        return ok;
    }
};

const supportedPlatforms = [
    { name: 'Meta Graph API', icon: <FaFacebookF className="w-3.5 h-3.5" /> },
    { name: 'X / Twitter v2', icon: <FaTwitter className="w-3.5 h-3.5" /> },
    { name: 'LinkedIn OAuth 2.0', icon: <FaLinkedinIn className="w-3.5 h-3.5" /> },
    { name: 'Reddit API', icon: <FaRedditAlien className="w-3.5 h-3.5" /> },
    { name: 'Google / YouTube', icon: <FaGoogle className="w-3.5 h-3.5" /> }
];

/* ── Small building blocks ──────────────────────────────────────────────── */

const CredentialRow = ({ label, value, copiedKey, manualKey, onCopy, revealed, onToggleReveal }: {
    label: string;
    value: string;
    copiedKey: string | null;
    manualKey: string | null;
    onCopy: (key: string, value: string, revealLabel?: string) => void;
    revealed: boolean;
    onToggleReveal: () => void;
}) => (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-[#fafafa] dark:bg-[#0a0a0a] p-4">
        <div className="flex items-center justify-between gap-3 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">{label}</span>
            <div className="flex items-center gap-1.5">
                <button
                    onClick={onToggleReveal}
                    aria-label={revealed ? `Hide ${label}` : `Reveal ${label}`}
                    className="p-1.5 rounded-lg text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all"
                >
                    {revealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
                <button
                    onClick={() => onCopy(label, value, label)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
                        copiedKey === label
                            ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/30'
                            : manualKey === label
                                ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                                : 'bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white'
                    }`}
                >
                    {copiedKey === label ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    {copiedKey === label ? 'Copied' : manualKey === label ? 'Ctrl+C' : 'Copy'}
                </button>
            </div>
        </div>
        <p data-credential={label} className="font-mono text-sm text-black dark:text-white break-all leading-relaxed select-all">
            {revealed ? value : maskValue(value)}
        </p>
    </div>
);

/* ── Page ───────────────────────────────────────────────────────────────── */

export const CallbackPage = () => {
    const [params] = useState<OAuthParams>(readOAuthParams);
    const [copiedKey, setCopiedKey] = useState<string | null>(null);
    const [manualKey, setManualKey] = useState<string | null>(null);
    const [revealed, setRevealed] = useState<Record<string, boolean>>({});
    const [urlCleared, setUrlCleared] = useState(false);
    const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const manualTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const hasError = Boolean(params.error);
    const isSuccess = !hasError && Boolean(params.code || params.accessToken);
    const primaryCredential = params.code ?? params.accessToken;
    const primaryLabel = params.code ? 'Authorization Code' : 'Access Token';

    const handleCopy = async (key: string, value: string, revealLabel?: string) => {
        const ok = await copyToClipboard(value);
        if (ok) {
            setManualKey(null);
            setCopiedKey(key);
            if (copyTimer.current) clearTimeout(copyTimer.current);
            copyTimer.current = setTimeout(() => setCopiedKey(null), 2000);
            return;
        }
        // Graceful degradation: clipboard blocked (permissions / unfocused doc).
        // Reveal the credential in place and select it so a manual Ctrl+C works.
        const label = revealLabel ?? primaryLabel;
        setCopiedKey(null);
        setRevealed(prev => ({ ...prev, [label]: true }));
        setManualKey(key);
        if (manualTimer.current) clearTimeout(manualTimer.current);
        manualTimer.current = setTimeout(() => setManualKey(null), 2600);
        setTimeout(() => {
            const el = document.querySelector(`p[data-credential="${label}"]`);
            if (el) {
                const range = document.createRange();
                range.selectNodeContents(el);
                const sel = window.getSelection();
                sel?.removeAllRanges();
                sel?.addRange(range);
            }
        }, 40);
    };

    const handleCopyAllJson = () => {
        const payload: Record<string, string> = {};
        if (params.code) payload.code = params.code;
        if (params.state) payload.state = params.state;
        if (params.accessToken) payload.access_token = params.accessToken;
        if (params.tokenType) payload.token_type = params.tokenType;
        if (params.expiresIn) payload.expires_in = params.expiresIn;
        if (params.scope) payload.scope = params.scope;
        handleCopy('__json__', JSON.stringify(payload, null, 2));
    };

    const handleClearUrl = () => {
        window.history.replaceState(null, '', window.location.pathname);
        setUrlCleared(true);
    };

    const toggleReveal = (key: string) => setRevealed(prev => ({ ...prev, [key]: !prev[key] }));

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
        >
            <section className="py-32 px-6 relative z-10 bg-[#fafafa] dark:bg-[#0a0a0a] min-h-[80vh]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

                <div className="max-w-2xl mx-auto">
                    {/* Endpoint identity */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-10"
                    >
                        <div className="inline-flex items-center gap-2 text-black/50 dark:text-white/50 font-bold tracking-widest uppercase text-xs mb-5">
                            <Terminal className="w-4 h-4" />
                            Developer · OAuth 2.0
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black text-black dark:text-white tracking-tight mb-3">
                            Redirect{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black/40 dark:from-white dark:to-white/40">
                                Endpoint
                            </span>
                        </h1>
                        <p className="font-mono text-xs text-black/40 dark:text-white/40">
                            https://agenerativeslice.com/callback
                        </p>
                    </motion.div>

                    <AnimatePresence mode="wait">
                        {/* ── SUCCESS ── */}
                        {isSuccess && (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.45 }}
                                className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-6 h-6 text-green-500" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl md:text-2xl font-black text-black dark:text-white tracking-tight">
                                                OAuth Authorization Successful
                                            </h2>
                                            <p className="text-xs text-black/40 dark:text-white/40 font-mono mt-0.5">
                                                Received at {params.receivedAt} · read locally, never transmitted
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-6">
                                        {params.code && (
                                            <CredentialRow
                                                label="Authorization Code"
                                                value={params.code}
                                                copiedKey={copiedKey}
                                                manualKey={manualKey}
                                                onCopy={handleCopy}
                                                revealed={Boolean(revealed['Authorization Code'])}
                                                onToggleReveal={() => toggleReveal('Authorization Code')}
                                            />
                                        )}
                                        {params.accessToken && (
                                            <CredentialRow
                                                label="Access Token"
                                                value={params.accessToken}
                                                copiedKey={copiedKey}
                                                manualKey={manualKey}
                                                onCopy={handleCopy}
                                                revealed={Boolean(revealed['Access Token'])}
                                                onToggleReveal={() => toggleReveal('Access Token')}
                                            />
                                        )}
                                        {params.state && (
                                            <CredentialRow
                                                label="State"
                                                value={params.state}
                                                copiedKey={copiedKey}
                                                manualKey={manualKey}
                                                onCopy={handleCopy}
                                                revealed={Boolean(revealed['State'])}
                                                onToggleReveal={() => toggleReveal('State')}
                                            />
                                        )}
                                    </div>

                                    {(params.tokenType || params.expiresIn || params.scope) && (
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {params.tokenType && (
                                                <span className="px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-[11px] font-mono text-black/50 dark:text-white/50">
                                                    token_type: {params.tokenType}
                                                </span>
                                            )}
                                            {params.expiresIn && (
                                                <span className="px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-[11px] font-mono text-black/50 dark:text-white/50">
                                                    expires_in: {params.expiresIn}s
                                                </span>
                                            )}
                                            {params.scope && (
                                                <span className="px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-[11px] font-mono text-black/50 dark:text-white/50 break-all">
                                                    scope: {params.scope}
                                                </span>
                                            )}
                                        </div>
                                    )}

                                    {primaryCredential && (
                                        <button
                                            onClick={() => handleCopy('__primary__', primaryCredential)}
                                            className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all duration-300 mb-3 ${
                                                copiedKey === '__primary__'
                                                    ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
                                                    : manualKey === '__primary__'
                                                        ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25'
                                                        : 'bg-black dark:bg-white text-white dark:text-black hover:opacity-85 hover:-translate-y-0.5 shadow-xl'
                                            }`}
                                        >
                                            {copiedKey === '__primary__' ? (
                                                <><Check className="w-4 h-4" /> Copied to Clipboard</>
                                            ) : manualKey === '__primary__' ? (
                                                <><Copy className="w-4 h-4" /> Selected — press Ctrl+C</>
                                            ) : (
                                                <><KeyRound className="w-4 h-4" /> Copy {primaryLabel}</>
                                            )}
                                        </button>
                                    )}

                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            onClick={handleCopyAllJson}
                                            className={`py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border transition-all duration-300 ${
                                                copiedKey === '__json__'
                                                    ? 'border-green-500/40 bg-green-500/10 text-green-600 dark:text-green-400'
                                                    : manualKey === '__json__'
                                                        ? 'border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400'
                                                        : 'border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white'
                                            }`}
                                        >
                                            {copiedKey === '__json__' ? <Check className="w-3.5 h-3.5" /> : <Braces className="w-3.5 h-3.5" />}
                                            {copiedKey === '__json__' ? 'Copied' : manualKey === '__json__' ? 'Ctrl+C' : 'Copy as JSON'}
                                        </button>
                                        <button
                                            onClick={handleClearUrl}
                                            disabled={urlCleared}
                                            className="py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-default"
                                        >
                                            {urlCleared ? <Check className="w-3.5 h-3.5" /> : <Eraser className="w-3.5 h-3.5" />}
                                            {urlCleared ? 'URL Cleaned' : 'Clear from URL'}
                                        </button>
                                    </div>

                                    <p className="text-[11px] text-black/35 dark:text-white/35 leading-relaxed mt-5 text-center">
                                        Credentials are displayed only in your browser and are never sent to any server by this page.
                                        Exchange the code promptly — authorization codes are single-use and short-lived.
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        {/* ── ERROR ── */}
                        {hasError && (
                            <motion.div
                                key="error"
                                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.45 }}
                                className="bg-white dark:bg-[#111] border border-red-500/20 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-72 h-72 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0">
                                            <AlertTriangle className="w-6 h-6 text-red-500" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl md:text-2xl font-black text-black dark:text-white tracking-tight">
                                                Authorization Failed
                                            </h2>
                                            <p className="text-xs text-black/40 dark:text-white/40 font-mono mt-0.5">
                                                Received at {params.receivedAt}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5 mb-6">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-red-500/70 mb-2">Error</p>
                                        <p className="font-mono text-sm font-bold text-red-600 dark:text-red-400 break-all mb-3">
                                            {params.error}
                                        </p>
                                        {params.errorDescription && (
                                            <>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-red-500/70 mb-2">Description</p>
                                                <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed break-words">
                                                    {params.errorDescription}
                                                </p>
                                            </>
                                        )}
                                        {params.state && (
                                            <p className="font-mono text-[11px] text-black/40 dark:text-white/40 mt-3 break-all">
                                                state: {params.state}
                                            </p>
                                        )}
                                    </div>

                                    <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed mb-6">
                                        The provider returned an error instead of credentials. Re-run the authorization flow and confirm
                                        the redirect URI exactly matches <span className="font-mono text-black/70 dark:text-white/70">https://agenerativeslice.com/callback</span>,
                                        the requested scopes are approved, and the consent screen was completed.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <Link
                                            to="/contact"
                                            className="flex-1 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black hover:opacity-85 transition-all"
                                        >
                                            Contact Support
                                        </Link>
                                        <Link
                                            to="/"
                                            className="flex-1 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 border border-black/10 dark:border-white/10 text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-all"
                                        >
                                            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* ── IDLE / ENDPOINT ACTIVE ── */}
                        {!isSuccess && !hasError && (
                            <motion.div
                                key="idle"
                                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.45 }}
                                className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl text-center relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-green-500/30 bg-green-500/5 mb-8">
                                        <span className="relative flex w-2.5 h-2.5">
                                            <span className="animate-ping absolute inline-flex w-full h-full rounded-full bg-green-500 opacity-60" />
                                            <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-green-500" />
                                        </span>
                                        <span className="text-xs font-bold text-green-600 dark:text-green-400 tracking-wide">
                                            A Generative Slice — OAuth 2.0 Redirect Endpoint Active
                                        </span>
                                    </div>

                                    <div className="w-16 h-16 mx-auto rounded-2xl bg-black dark:bg-white flex items-center justify-center mb-6 shadow-xl">
                                        <Radio className="w-7 h-7 text-white dark:text-black" />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-black text-black dark:text-white tracking-tight mb-3">
                                        Listening for Authorization Callbacks
                                    </h2>
                                    <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed max-w-md mx-auto mb-8">
                                        This endpoint receives OAuth 2.0 redirects and webhook verification requests for our
                                        platform integrations. No credentials were present in this request — start an
                                        authorization flow from your developer console or CLI to land here with a code.
                                    </p>

                                    <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-[#fafafa] dark:bg-[#0a0a0a] p-5 text-left mb-8">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-3">
                                            Expected redirect format
                                        </p>
                                        <p className="font-mono text-xs text-black/70 dark:text-white/70 break-all leading-relaxed">
                                            /callback<span className="text-black/35 dark:text-white/35">?code=</span>AUTH_CODE<span className="text-black/35 dark:text-white/35">&state=</span>CSRF_STATE
                                        </p>
                                        <p className="font-mono text-xs text-black/70 dark:text-white/70 break-all leading-relaxed mt-1.5">
                                            /callback<span className="text-black/35 dark:text-white/35">#access_token=</span>TOKEN<span className="text-black/35 dark:text-white/35">&state=</span>CSRF_STATE
                                        </p>
                                    </div>

                                    <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-3">
                                        Registered integrations
                                    </p>
                                    <div className="flex flex-wrap items-center justify-center gap-2">
                                        {supportedPlatforms.map((p) => (
                                            <span key={p.name} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-black/10 dark:border-white/10 bg-[#fafafa] dark:bg-[#0a0a0a] text-xs font-semibold text-black/60 dark:text-white/60">
                                                {p.icon}
                                                {p.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Footer note */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-center text-xs text-black/35 dark:text-white/35 mt-8"
                    >
                        How we handle tokens and your data:{' '}
                        <Link to="/privacy" className="underline underline-offset-4 decoration-black/20 dark:decoration-white/20 hover:text-black dark:hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        {' · '}
                        <Link to="/data-deletion" className="underline underline-offset-4 decoration-black/20 dark:decoration-white/20 hover:text-black dark:hover:text-white transition-colors">
                            Revoke & Delete
                        </Link>
                    </motion.p>
                </div>
            </section>
        </motion.div>
    );
};