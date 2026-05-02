import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const teamMembers = [
    {
        name: 'Ifthikhar Ilyas',
        role: 'Founder & Lead Engineer',
        image: 'https://avatars.githubusercontent.com/u/107795425?v=4', // Assuming a generic or GitHub avatar
        github: '#',
        linkedin: '#',
        twitter: '#',
    },
    {
        name: 'Jane Doe',
        role: 'UI/UX Designer',
        image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
        github: '#',
        linkedin: '#',
        twitter: '#',
    },
    {
        name: 'Alex Smith',
        role: 'Full Stack Developer',
        image: 'https://i.pravatar.cc/150?u=a04258114e29026302d',
        github: '#',
        linkedin: '#',
        twitter: '#',
    }
];

export const TeamsSection = () => {
    return (
        <section id="teams" className="py-32 px-6 relative bg-white dark:bg-[#050505]">
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        <Users className="w-4 h-4" />
                        Our People
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6 tracking-tight"
                    >
                        Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Team</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-black/60 dark:text-white/60 text-lg"
                    >
                        The talented individuals crafting exceptional digital experiences.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gray-50 dark:bg-[#111111]/80 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-3xl p-8 text-center hover:border-orange-500/30 hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white dark:border-[#1a1a1a] shadow-lg group-hover:scale-105 transition-transform duration-300">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-black dark:text-white mb-1">{member.name}</h3>
                            <p className="text-orange-500 text-sm font-semibold mb-6">{member.role}</p>
                            
                            <div className="flex items-center justify-center gap-4">
                                <a href={member.github} className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
                                    <FaGithub className="w-5 h-5" />
                                </a>
                                <a href={member.linkedin} className="text-black/40 dark:text-white/40 hover:text-blue-500 transition-colors">
                                    <FaLinkedin className="w-5 h-5" />
                                </a>
                                <a href={member.twitter} className="text-black/40 dark:text-white/40 hover:text-sky-500 transition-colors">
                                    <FaTwitter className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
