import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Send, Upload, FileText, CheckCircle, AlertTriangle } from 'lucide-react';

export const CareersSection = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        courseNiche: '',
        post: '',
        linkedIn: '',
        interestedSectors: [] as string[],
        resumeFile: null as File | null
    });
    
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'fallback'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [dragActive, setDragActive] = useState(false);

    const sectors = [
        "Frontend Development",
        "Backend Development",
        "Full-Stack SaaS",
        "AI Agents & LLM Integration",
        "Social Media & Mail Automation",
        "UI/UX Figma Design"
    ];



    const handleSectorChange = (sector: string) => {
        setFormData(prev => {
            const current = [...prev.interestedSectors];
            const index = current.indexOf(sector);
            if (index > -1) {
                current.splice(index, 1);
            } else {
                current.push(sector);
            }
            return { ...prev, interestedSectors: current };
        });
    };

    const handleFileChange = (file: File | null) => {
        if (!file) return;
        
        if (file.type !== 'application/pdf') {
            setErrorMessage('Only PDF resumes are accepted.');
            return;
        }

        if (file.size > 10 * 1024 * 1024) { // 10MB limit
            setErrorMessage('File size must be under 10MB.');
            return;
        }

        setErrorMessage('');
        setFormData(prev => ({ ...prev, resumeFile: file }));
    };

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileChange(e.dataTransfer.files[0]);
        }
    };

    const getMailtoUrl = () => {
        const subject = encodeURIComponent(`Job Application: ${formData.post} - ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Contact: ${formData.contact}\n` +
            `Course / Niche: ${formData.courseNiche}\n` +
            `Post Applied For: ${formData.post}\n` +
            `LinkedIn Profile: ${formData.linkedIn}\n` +
            `Interested Sectors: ${formData.interestedSectors.join(', ')}\n\n` +
            `Please make sure to attach your resume PDF file to this email before sending.`
        );
        return `mailto:agenerativeslice@gmail.com?subject=${subject}&body=${body}`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.resumeFile) {
            setErrorMessage('Please upload your resume PDF.');
            return;
        }

        setStatus('sending');
        setErrorMessage('');

        const submitData = new FormData();
        submitData.append('name', formData.name);
        submitData.append('email', formData.email);
        submitData.append('contact', formData.contact);
        submitData.append('courseNiche', formData.courseNiche);
        submitData.append('post', formData.post);
        submitData.append('linkedIn', formData.linkedIn);
        submitData.append('interestedSectors', formData.interestedSectors.join(', '));
        submitData.append('resume', formData.resumeFile);
        submitData.append('subject', `Job Application: ${formData.post} - ${formData.name}`);

        try {
            const res = await fetch('https://formspree.io/f/xdkogvnp', {
                method: 'POST',
                body: submitData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (res.ok) {
                setStatus('sent');
                setFormData({
                    name: '',
                    email: '',
                    contact: '',
                    courseNiche: '',
                    post: '',
                    linkedIn: '',
                    interestedSectors: [],
                    resumeFile: null
                });
            } else {
                // If endpoint returns error (e.g. Free Tier restriction on files)
                setStatus('fallback');
            }
        } catch {
            setStatus('fallback');
        }
    };

    return (
        <section className="py-32 px-6 relative z-10 bg-[#fafafa] dark:bg-[#050505]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        <Briefcase className="w-4 h-4" />
                        Careers
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6 tracking-tight"
                    >
                        Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Growth Journey</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-black/60 dark:text-white/60 text-lg max-w-2xl mx-auto"
                    >
                        Submit your details, select your sectors of interest, choose the post you want to apply for, and drop your resume. We will review your profile immediately.
                    </motion.p>
                </div>

                <AnimatePresence mode="wait">
                    {status === 'sent' ? (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-green-50 dark:bg-green-950/20 border border-green-500/30 rounded-[2.5rem] p-10 text-center shadow-xl"
                        >
                            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Application Submitted!</h3>
                            <p className="text-black/60 dark:text-white/60 mb-8 max-w-md mx-auto">
                                Thank you for applying. We have received your application and resume PDF. Our team will review it and get in touch with you shortly.
                            </p>
                            <button 
                                onClick={() => setStatus('idle')} 
                                className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-all text-sm uppercase tracking-wider"
                            >
                                Submit Another Response
                            </button>
                        </motion.div>
                    ) : status === 'fallback' ? (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-orange-50 dark:bg-orange-950/20 border border-orange-500/30 rounded-[2.5rem] p-10 text-center shadow-xl"
                        >
                            <AlertTriangle className="w-16 h-16 text-orange-500 mx-auto mb-6" />
                            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Complete Application via Email</h3>
                            <p className="text-black/60 dark:text-white/60 mb-6 max-w-md mx-auto">
                                Your application form details have been successfully prepared. To deliver your resume PDF directly to our Gmail, please click the button below to send the prefilled email. 
                            </p>
                            <div className="bg-white dark:bg-black/40 border border-orange-500/10 rounded-2xl p-4 text-left text-sm text-black/70 dark:text-white/70 mb-8 max-w-lg mx-auto space-y-2">
                                <p><strong>Subject:</strong> Job Application for {formData.post}</p>
                                <p><strong>To:</strong> agenerativeslice@gmail.com</p>
                                <p className="text-orange-500 font-bold">⚠️ IMPORTANT: Remember to attach your resume PDF file in the email client before sending!</p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a 
                                    href={getMailtoUrl()} 
                                    onClick={() => {
                                        setTimeout(() => {
                                            setStatus('idle');
                                            setFormData({
                                                name: '',
                                                email: '',
                                                contact: '',
                                                courseNiche: '',
                                                post: '',
                                                linkedIn: '',
                                                interestedSectors: [],
                                                resumeFile: null
                                            });
                                        }, 1000);
                                    }}
                                    className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition-all text-sm uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-orange-500/20"
                                >
                                    Open Email & Send <Send className="w-4 h-4" />
                                </a>
                                <button 
                                    onClick={() => setStatus('idle')} 
                                    className="px-6 py-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white rounded-xl font-bold transition-all text-sm"
                                >
                                    Back to Form
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.form 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            onSubmit={handleSubmit}
                            className="bg-white dark:bg-[#111111]/80 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-84 h-84 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="text-black/50 dark:text-white/50 text-xs font-bold uppercase tracking-wider mb-2 block">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-[#fafafa] dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-black dark:text-white placeholder-black/30 dark:placeholder-white/20 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all text-base"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="text-black/50 dark:text-white/50 text-xs font-bold uppercase tracking-wider mb-2 block">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-[#fafafa] dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-black dark:text-white placeholder-black/30 dark:placeholder-white/20 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all text-base"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="text-black/50 dark:text-white/50 text-xs font-bold uppercase tracking-wider mb-2 block">Contact Number (WhatsApp/Phone)</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.contact}
                                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                        className="w-full bg-[#fafafa] dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-black dark:text-white placeholder-black/30 dark:placeholder-white/20 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all text-base"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                                <div>
                                    <label className="text-black/50 dark:text-white/50 text-xs font-bold uppercase tracking-wider mb-2 block">Course / Niche</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.courseNiche}
                                        onChange={(e) => setFormData({ ...formData, courseNiche: e.target.value })}
                                        className="w-full bg-[#fafafa] dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-black dark:text-white placeholder-black/30 dark:placeholder-white/20 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all text-base"
                                        placeholder="e.g. B.Tech Artificial Intelligence & Data Science, UI/UX"
                                    />
                                </div>
                            </div>

                            {/* Job Post & LinkedIn URL */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="text-black/50 dark:text-white/50 text-xs font-bold uppercase tracking-wider mb-2 block font-semibold">Post / Role You Wish to Apply For</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.post}
                                        onChange={(e) => setFormData({ ...formData, post: e.target.value })}
                                        className="w-full bg-[#fafafa] dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-black dark:text-white placeholder-black/30 dark:placeholder-white/20 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all text-base"
                                        placeholder="e.g. Frontend Developer, Stealth Intern, Prompt Engineer"
                                    />
                                </div>
                                <div>
                                    <label className="text-black/50 dark:text-white/50 text-xs font-bold uppercase tracking-wider mb-2 block font-semibold">LinkedIn Profile URL</label>
                                    <input
                                        type="url"
                                        required
                                        value={formData.linkedIn}
                                        onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                                        className="w-full bg-[#fafafa] dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-black dark:text-white placeholder-black/30 dark:placeholder-white/20 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all text-base"
                                        placeholder="https://linkedin.com/in/username"
                                    />
                                </div>
                            </div>

                            {/* Sectors of Interest Checkboxes */}
                            <div className="mb-8">
                                <label className="text-black/50 dark:text-white/50 text-xs font-bold uppercase tracking-wider mb-3 block">Interested Sectors (Select all that apply)</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {sectors.map((sector) => {
                                        const isChecked = formData.interestedSectors.includes(sector);
                                        return (
                                            <button
                                                type="button"
                                                key={sector}
                                                onClick={() => handleSectorChange(sector)}
                                                className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200
                                                    ${isChecked 
                                                        ? 'bg-orange-500/10 border-orange-500 text-orange-600 dark:text-orange-400 font-semibold' 
                                                        : 'bg-[#fafafa] dark:bg-[#0a0a0a] border-black/10 dark:border-white/10 text-black/70 dark:text-white/70 hover:border-orange-500/30'
                                                    }
                                                `}
                                            >
                                                <div className={`w-5 h-5 rounded flex items-center justify-center border transition-all
                                                    ${isChecked 
                                                        ? 'bg-orange-500 border-orange-500 text-white' 
                                                        : 'border-black/20 dark:border-white/20'
                                                    }
                                                `}>
                                                    {isChecked && <svg className="w-3.5 h-3.5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                                                </div>
                                                <span className="text-sm">{sector}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Resume PDF File Upload */}
                            <div className="mb-8">
                                <label className="text-black/50 dark:text-white/50 text-xs font-bold uppercase tracking-wider mb-2 block font-bold">Upload Resume (PDF only)</label>
                                
                                <div 
                                    onDragEnter={handleDrag}
                                    onDragOver={handleDrag}
                                    onDragLeave={handleDrag}
                                    onDrop={handleDrop}
                                    onClick={() => fileInputRef.current?.click()}
                                    className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center
                                        ${dragActive 
                                            ? 'border-orange-500 bg-orange-500/5' 
                                            : formData.resumeFile 
                                                ? 'border-green-500/50 bg-green-500/5' 
                                                : 'border-black/10 dark:border-white/10 bg-[#fafafa] dark:bg-[#0a0a0a] hover:border-orange-500/40 hover:bg-orange-500/5'
                                        }
                                    `}
                                >
                                    <input 
                                        type="file" 
                                        ref={fileInputRef}
                                        onChange={(e) => handleFileChange(e.target.files ? e.target.files[0] : null)}
                                        className="hidden" 
                                        accept=".pdf"
                                    />
                                    
                                    {formData.resumeFile ? (
                                        <>
                                            <FileText className="w-12 h-12 text-green-500 mb-3 animate-bounce" />
                                            <p className="text-black dark:text-white font-bold text-sm mb-1">{formData.resumeFile.name}</p>
                                            <p className="text-black/40 dark:text-white/40 text-xs">{(formData.resumeFile.size / (1024 * 1024)).toFixed(2)} MB • Click or drag to replace</p>
                                        </>
                                    ) : (
                                        <>
                                            <Upload className="w-12 h-12 text-orange-500 mb-3" />
                                            <p className="text-black dark:text-white font-bold text-sm mb-1">Drag & Drop your resume PDF here</p>
                                            <p className="text-black/40 dark:text-white/40 text-xs">or click to browse files (Max 10MB)</p>
                                        </>
                                    )}
                                </div>
                                
                                {errorMessage && (
                                    <motion.p 
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-xs font-semibold mt-2 flex items-center gap-1.5"
                                    >
                                        <AlertTriangle className="w-3.5 h-3.5" /> {errorMessage}
                                    </motion.p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={status !== 'idle'}
                                className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 relative z-10 bg-orange-500 hover:bg-orange-600 shadow-[0_0_20px_rgba(255,106,0,0.3)] hover:shadow-[0_0_30px_rgba(255,106,0,0.5)] transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {status === 'sending' ? 'Submitting Application...' : <>Submit Application <Send className="w-5 h-5" /></>}
                            </button>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
