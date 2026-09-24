import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
    Sparkles, ArrowUpRight, Send, Upload,
    Boxes, Zap, Bot, Cpu, GraduationCap, CheckCircle2,
    Shield, Code2
} from 'lucide-react';
import { submitForm, type LeadFormData } from '../utils/formSubmit';
import { formConfig } from '../data/config';

interface ProdXEngine {
    id: string;
    name: string;
    engineType: string;
    badge: string;
    tagline: string;
    description: string;
    icon: React.ReactNode;
    capabilities: string[];
    architecture: string[];
    repoUrl: string;
    status: string;
}

const prodXEngines: ProdXEngine[] = [
    {
        id: 'ags-spatial-3d',
        name: 'AGS Spatial 3D Studio',
        engineType: 'Real-time 3D Engine',
        badge: 'Spatial Computing',
        tagline: 'Real-time Three.js & Spline 3D canvas with headless Blender procedural modeling.',
        description: 'Autonomous cloud-native 3D spatial computing engine operating headless Blender via procedural Python to produce web-optimized GLTF/GLB digital twins and interactive browser experiences.',
        icon: <Boxes className="w-7 h-7 text-white stroke-[1.8]" />,
        capabilities: [
            'Real-Time Three.js / Spline Interactive Canvas',
            'Headless Blender Procedural Python Pipeline',
            'Automated Low-Poly GLTF/GLB Compression',
            'FastMCP Spatial Bridge for Generative 3D'
        ],
        architecture: ['Three.js', 'Spline', 'Blender 4.x', 'FastMCP', 'Python 3.12'],
        repoUrl: 'https://github.com/A-Generative-Slice/spatial-3d-studio',
        status: 'Active Pipeline'
    },
    {
        id: 'ags-outreach-engine',
        name: 'AGS Omnichannel Outreach Engine',
        engineType: 'Autonomous B2B Agent',
        badge: 'Proprietary Moat',
        tagline: 'Automated B2B prospecting agent with zero-hallucination lead verification.',
        description: 'High-throughput client acquisition engine orchestrating Playwright Google Maps scraping, RFC 5321 SMTP handshake mailbox auditing, headless WhatsApp Web dispatch, and Instagram Direct Inbox automation.',
        icon: <Zap className="w-7 h-7 text-white stroke-[1.8]" />,
        capabilities: [
            'RFC 5321 SMTP Handshake Mailbox Verification',
            'Headless WhatsApp Web Session Dispatch',
            'Automated Instagram Direct Inbox Messaging',
            '400+ Verified Commercial Chennai Leads Database'
        ],
        architecture: ['Playwright', 'Groq AI', 'Gemini 2.0 Flash', 'Chromium Headless', 'RFC 5321 SMTP'],
        repoUrl: 'https://github.com/A-Generative-Slice/lead-generation',
        status: 'Production Engine'
    },
    {
        id: 'executive-ai-drafter',
        name: 'Executive AI Drafter',
        engineType: 'Zoho Mail Extension',
        badge: 'Enterprise eWidget',
        tagline: 'Google Gemini-powered Zoho Mail eWidget extension with BYOK architecture.',
        description: 'Right-hand sidebar workspace extension delivering contextual email draft generation and automated meeting/action item extraction under a zero-telemetry Bring-Your-Own-Key model.',
        icon: <Bot className="w-7 h-7 text-white stroke-[1.8]" />,
        capabilities: [
            'BYOK Serverless Zero-Telemetry Architecture',
            'Instant Contextual Email Reply Generation',
            'Automated Action Item & Meeting Extraction',
            'Native Zoho Mail eWidget Sidebar SDK Integration'
        ],
        architecture: ['Zoho Mail SDK', 'Google Gemini API', 'TypeScript', 'Serverless BYOK'],
        repoUrl: 'https://github.com/A-Generative-Slice/zohoMailEditor',
        status: 'Production Ready'
    },
    {
        id: 'litelab-chief-of-staff',
        name: 'LiteLab AI Chief of Staff',
        engineType: 'Inbox Intelligence Protocol',
        badge: 'FastMCP Core',
        tagline: 'Autonomous Model Context Protocol workspace triaging corporate communications.',
        description: 'Self-hosted AI Chief of Staff orchestrating 4 European corporate channels for Litelab Milano, continuously synthesizing incoming threads and auto-generating executive responses.',
        icon: <Cpu className="w-7 h-7 text-white stroke-[1.8]" />,
        capabilities: [
            'FastMCP Standard Protocol Orchestration',
            'Autonomous 4-Channel Zoho Mail Triage',
            'Multi-Turn Contextual Memory Vault',
            'Self-Hosted On-Premises Privacy Standard'
        ],
        architecture: ['FastMCP', 'Python', 'Zoho Mail APIs', 'Google Gemini', 'FastHTML'],
        repoUrl: 'https://github.com/A-Generative-Slice/litelabmailbox',
        status: 'Active Deployment'
    },
    {
        id: 'literight-academy',
        name: 'LiteRight Academy',
        engineType: 'Interactive EdTech LMS',
        badge: 'Corporate LMS',
        tagline: 'Security-first monochromatic learning management system with studio streaming.',
        description: 'Luxury monochromatic educational sanctuary built for international lighting design teams, equipped with OTP phone authentication, encrypted studio video streaming, and modular progression.',
        icon: <GraduationCap className="w-7 h-7 text-white stroke-[1.8]" />,
        capabilities: [
            'Monochromatic Distraction-Free UX System',
            'OTP Phone Number Authentication',
            'Encrypted 16:9 Studio Video HLS Streaming',
            'Linear Certification & Module Progression'
        ],
        architecture: ['React 19', 'Node.js', 'HLS Streaming', 'Phone OTP', 'Tailwind CSS'],
        repoUrl: 'https://github.com/A-Generative-Slice/literight',
        status: 'Production Deployed'
    }
];

export const ProductsSection = () => {
    const [formData, setFormData] = useState<LeadFormData>({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        category: 'AI & Automation',
        message: '',
        attachment: null
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        const result = await submitForm(formData, {
            subject: `ProdX Inquiry: ${formData.category} from ${formData.fullName} (${formData.company || 'Enterprise'})`,
            formType: 'ProdX Platform Inquiry'
        });

        if (result.success) {
            setStatus('sent');
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                company: '',
                category: 'AI & Automation',
                message: '',
                attachment: null
            });
            if (fileInputRef.current) fileInputRef.current.value = '';
            setTimeout(() => setStatus('idle'), 4000);
        } else {
            const subjectStr = encodeURIComponent(`ProdX Inquiry: ${formData.category} from ${formData.fullName}`);
            const bodyStr = encodeURIComponent(
                `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nCategory: ${formData.category}\n\nDeployment Scope:\n${formData.message}`
            );
            window.open(`mailto:${formConfig.businessEmail}?subject=${subjectStr}&body=${bodyStr}`, '_blank');
            setStatus('idle');
        }
    };

    return (
        <section id="prodx" className="py-32 px-6 relative z-20 bg-[#fafafa] dark:bg-[#0a0a0a] overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-[#FF5C00]/20 to-transparent" />

            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-[#FF5C00] font-bold tracking-widest uppercase text-xs mb-4 px-3 py-1 rounded-full bg-[#FF5C00]/10 border border-[#FF5C00]/20"
                    >
                        <Sparkles className="w-3.5 h-3.5" />
                        ProdX &bull; In-House Systems
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-[#0F172A] dark:text-white mb-6 tracking-tight font-heading"
                    >
                        Proprietary <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A]">Engine Ecosystem</span>
                    </motion.h2>
                    <p className="text-[#64748B] dark:text-white/60 text-lg max-w-2xl mx-auto">
                        In-house autonomous frameworks, spatial 3D computing pipelines, and FastMCP intelligence servers engineered by A Generative Slice.
                    </p>
                </div>

                {/* 5 Flagship In-House Engines Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
                    {prodXEngines.map((engine, idx) => (
                        <motion.div
                            key={engine.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            className={`rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-[#111111] p-8 flex flex-col justify-between hover:border-[#FF5C00]/30 transition-all duration-300 shadow-xl shadow-black/5 dark:shadow-none group hover:-translate-y-1 ${
                                idx === 0 ? 'lg:col-span-2' : ''
                            }`}
                        >
                            <div>
                                {/* Header */}
                                <div className="flex items-center justify-between gap-4 mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF5C00] to-[#FF8C1A] flex items-center justify-center shrink-0 shadow-lg shadow-[#FF5C00]/25 border border-white/20">
                                            {engine.icon}
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF5C00] block mb-0.5">
                                                {engine.engineType}
                                            </span>
                                            <h3 className="text-2xl font-black text-[#0F172A] dark:text-white tracking-tight font-heading">
                                                {engine.name}
                                            </h3>
                                        </div>
                                    </div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FF5C00]/10 text-[#FF5C00] border border-[#FF5C00]/20">
                                        {engine.badge}
                                    </span>
                                </div>

                                <p className="text-sm font-semibold text-[#FF5C00] mb-3">
                                    {engine.tagline}
                                </p>
                                <p className="text-sm text-[#64748B] dark:text-white/60 leading-relaxed mb-6">
                                    {engine.description}
                                </p>

                                {/* Core Capabilities */}
                                <div className="space-y-2 mb-6 pt-4 border-t border-black/5 dark:border-white/5">
                                    {engine.capabilities.map((cap, i) => (
                                        <div key={i} className="flex items-center gap-2 text-xs text-[#0F172A]/80 dark:text-white/70">
                                            <CheckCircle2 className="w-4 h-4 text-[#FF5C00] shrink-0" />
                                            <span>{cap}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Tech Architecture Pills */}
                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {engine.architecture.map((tech) => (
                                        <span 
                                            key={tech} 
                                            className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-black/5 dark:bg-white/5 text-[#0F172A]/70 dark:text-white/60 border border-black/5 dark:border-white/5 font-mono"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Footer / Repo link */}
                            <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                                    <Shield className="w-3.5 h-3.5" /> {engine.status}
                                </span>
                                <a
                                    href={engine.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-black/5 dark:bg-white/5 text-[#0F172A] dark:text-white font-bold text-xs hover:bg-[#FF5C00] hover:text-white transition-all border border-black/5 dark:border-white/10"
                                >
                                    <Code2 className="w-3.5 h-3.5" /> View Source Architecture <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Structured ProdX Deployment Form (Zoho CRM & Supabase Contract) */}
                <div id="prodx-inquiry" className="max-w-4xl mx-auto">
                    <div className="rounded-[2.5rem] border border-black/5 dark:border-white/10 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                        <div className="text-center mb-10">
                            <span className="text-[#FF5C00] font-bold text-xs uppercase tracking-widest block mb-2">
                                In-House Engine Licensing & Integration
                            </span>
                            <h3 className="text-3xl md:text-4xl font-black text-[#0F172A] dark:text-white mb-3 tracking-tight font-heading">
                                Deploy a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A]">ProdX Engine</span>
                            </h3>
                            <p className="text-[#64748B] dark:text-white/60 text-sm max-w-xl mx-auto">
                                License an autonomous B2B agent, embed a 3D spatial computing pipeline, or integrate FastMCP into your enterprise stack.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50 mb-1.5">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-[#0F172A] dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-[#FF5C00] transition-colors"
                                        placeholder="e.g. Vikram Seth"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50 mb-1.5">
                                        Business Email *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-[#0F172A] dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-[#FF5C00] transition-colors"
                                        placeholder="e.g. vikram@enterprise.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50 mb-1.5">
                                        Mobile / WhatsApp *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-[#0F172A] dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-[#FF5C00] transition-colors"
                                        placeholder="+91 99000 54321"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50 mb-1.5">
                                        Company / Enterprise Name
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-[#0F172A] dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-[#FF5C00] transition-colors"
                                        placeholder="e.g. Global Tech Labs"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50 mb-1.5">
                                    Target Engine / Category *
                                </label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-[#FF5C00] transition-colors"
                                >
                                    <option value="AI & Automation">AGS Omnichannel Outreach Engine (AI & Automation)</option>
                                    <option value="3D & Architecture">AGS Spatial 3D Studio (3D & Architecture)</option>
                                    <option value="Enterprise Systems">Executive AI Drafter & LiteLab Chief of Staff (Enterprise Systems)</option>
                                    <option value="Hospitality & F&B">Custom Cloud Kitchen & Hospitality Solutions</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50 mb-1.5">
                                    Deployment Scope & Technical Details *
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-[#0F172A] dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-[#FF5C00] transition-colors resize-none"
                                    placeholder="Describe your current infrastructure, expected user volume, and integration objectives..."
                                />
                            </div>

                            {/* Optional File Attachment */}
                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50 mb-1.5">
                                    Attach Architecture Spec / RFP (Optional)
                                </label>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={(e) => {
                                            const file = e.target.files?.[0] || null;
                                            setFormData(prev => ({ ...prev, attachment: file }));
                                        }}
                                        className="hidden"
                                        id="prodx-attachment-file"
                                    />
                                    <label
                                        htmlFor="prodx-attachment-file"
                                        className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-semibold text-[#0F172A] dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                                    >
                                        <Upload className="w-3.5 h-3.5 text-[#FF5C00]" />
                                        {formData.attachment ? formData.attachment.name : 'Select Technical Spec / PDF'}
                                    </label>
                                    {formData.attachment && (
                                        <span className="text-xs text-[#64748B] dark:text-white/40">
                                            ({(formData.attachment.size / 1024).toFixed(1)} KB)
                                        </span>
                                    )}
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={status !== 'idle'}
                                className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs text-white flex items-center justify-center gap-3 transition-all duration-300 mt-6 shadow-xl ${
                                    status === 'sent' 
                                        ? 'bg-emerald-500' 
                                        : 'bg-gradient-to-r from-[#FF5C00] to-[#FF8C1A] hover:opacity-95 shadow-[#FF5C00]/25'
                                }`}
                            >
                                {status === 'sent' ? (
                                    <>Engine Inquiry Dispatched to Executive Desk ✓</>
                                ) : status === 'sending' ? (
                                    'Routing to Zoho CRM...'
                                ) : (
                                    <>Submit ProdX Request <Send className="w-4 h-4" /></>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
