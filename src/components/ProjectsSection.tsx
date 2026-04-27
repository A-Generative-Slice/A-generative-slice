import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, ExternalLink, Maximize2 } from 'lucide-react';

interface Project {
    id: string;
    client: string;
    location: string;
    title: string;
    description: string;
    tags: string[];
    color: string;
}

const projects: Project[] = [
    {
        id: 'rose-chemicals',
        client: 'Rose Chemicals',
        location: 'Madurai, TN',
        title: 'Enterprise Chemical Inventory & B2B Portal',
        description: 'A comprehensive B2B portal for Rose Chemicals to manage bulk orders, track inventory across multiple warehouses, and provide real-time shipment updates to distributors.',
        tags: ['React', 'Dashboard', 'B2B', 'Inventory'],
        color: 'from-pink-500 to-rose-600',
    },
    {
        id: 'nas-internationals',
        client: 'NAS Internationals',
        location: 'Nungambakkam, Chennai',
        title: 'Global Export Operations Dashboard',
        description: 'A unified operations dashboard for NAS Internationals to streamline their export workflows, track global shipments, and manage international compliance documents seamlessly.',
        tags: ['Next.js', 'Logistics', 'Global Trade'],
        color: 'from-blue-500 to-indigo-600',
    },
    {
        id: 'litelab',
        client: 'Litelab',
        location: 'Besant Nagar, Chennai',
        title: 'Creative Agency Portfolio & Client Portal',
        description: 'An immersive, high-performance portfolio and secure client portal for Litelab to showcase their creative campaigns and securely share assets with top-tier clients.',
        tags: ['WebGL', 'Framer Motion', 'Client Portal'],
        color: 'from-orange-400 to-orange-600',
    }
];

export const ProjectsSection = () => {
    const [activeProject, setActiveProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="py-32 px-6 relative z-20">
            {/* Top Border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        <MapPin className="w-4 h-4" />
                        Our Impact in Tamil Nadu
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6 tracking-tight"
                    >
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Client Projects</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-black/60 dark:text-white/60 text-lg"
                    >
                        Explore some of our recent collaborations with top businesses across the state.
                    </motion.p>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => setActiveProject(project)}
                            className="group cursor-pointer bg-white dark:bg-[#111111]/80 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-3xl p-8 hover:border-orange-500/30 hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col h-full"
                        >
                            {/* Accent Gradient */}
                            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${project.color}`} />
                            
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-black dark:text-white mb-1 group-hover:text-orange-500 transition-colors">
                                        {project.client}
                                    </h3>
                                    <div className="flex items-center gap-1.5 text-xs font-semibold text-black/50 dark:text-white/50 uppercase tracking-wider">
                                        <MapPin className="w-3.5 h-3.5" />
                                        {project.location}
                                    </div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                                    <Maximize2 className="w-4 h-4 text-black/40 dark:text-white/40 group-hover:text-orange-500" />
                                </div>
                            </div>

                            <h4 className="text-lg font-semibold text-black/80 dark:text-white/80 mb-3">{project.title}</h4>
                            <p className="text-black/60 dark:text-white/50 text-sm leading-relaxed mb-6 flex-grow">
                                {project.description.substring(0, 100)}...
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 border border-black/5 dark:border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Viewer Modal */}
            <AnimatePresence>
                {activeProject && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-white/80 dark:bg-black/80 backdrop-blur-md"
                    >
                        <motion.div 
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            className="w-full max-w-6xl h-full max-h-[90vh] bg-white dark:bg-[#0f0f0f] rounded-2xl md:rounded-3xl border border-black/10 dark:border-white/10 shadow-2xl flex flex-col overflow-hidden relative"
                        >
                            {/* Modal Header / Fake Browser Bar */}
                            <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-[#1a1a1a] border-b border-black/10 dark:border-white/10">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="px-4 py-1.5 rounded-md bg-white dark:bg-black/50 border border-black/5 dark:border-white/5 text-xs text-black/50 dark:text-white/50 font-mono flex items-center gap-2 max-w-[200px] sm:max-w-md w-full justify-center">
                                    <ExternalLink className="w-3 h-3" />
                                    {activeProject.client.toLowerCase().replace(' ', '')}.com
                                </div>
                                <button 
                                    onClick={() => setActiveProject(null)}
                                    className="p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-black/60 dark:text-white/60 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Project UI Frame content */}
                            <div className="flex-1 overflow-y-auto p-6 md:p-10 relative bg-gray-50 dark:bg-[#0a0a0a]">
                                <div className="max-w-3xl mx-auto text-center mb-10">
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border dark:border-white/10 border-black/10 text-orange-500">
                                        Interactive Preview
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                                        {activeProject.title}
                                    </h2>
                                    <p className="text-black/60 dark:text-white/60">
                                        {activeProject.description}
                                    </p>
                                </div>

                                {/* Placeholder for the actual Project UI */}
                                <div className="w-full aspect-video rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#151515] shadow-xl overflow-hidden flex flex-col items-center justify-center p-8 text-center relative group">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${activeProject.color} opacity-5 dark:opacity-10`} />
                                    <div className="w-16 h-16 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center mb-6 border border-black/10 dark:border-white/10">
                                        <MapPin className="w-8 h-8 text-orange-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-black dark:text-white mb-2">Live UI Component Ready</h3>
                                    <p className="text-black/50 dark:text-white/50 max-w-md text-sm">
                                        The actual React/Vue UI for this project will be injected here. It runs fully isolated inside this sub-frame.
                                    </p>
                                    <button className="mt-8 px-6 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold text-sm hover:scale-105 transition-transform shadow-lg">
                                        Explore Interface
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
