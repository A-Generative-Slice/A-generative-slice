import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const teamMembers = [
    { name: 'Mohammed Hussain', role: 'Founder & Lead Engineer', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Karthik Subramanian', role: 'Lead AI Architect', image: 'https://randomuser.me/api/portraits/men/11.jpg' },
    { name: 'Priya Rajan', role: 'UI/UX Design Lead', image: 'https://randomuser.me/api/portraits/women/12.jpg' },
    { name: 'Vignesh Kumar', role: 'Full Stack Developer', image: 'https://randomuser.me/api/portraits/men/22.jpg' },
    { name: 'Divya Natarajan', role: 'Prompt Engineer', image: 'https://randomuser.me/api/portraits/women/24.jpg' },
    { name: 'Arjun Venkatesh', role: 'Cloud & DevOps Engineer', image: 'https://randomuser.me/api/portraits/men/33.jpg' },
    { name: 'Shruthi Krishnan', role: 'Product Manager', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Sanjay Ram', role: 'Vibe Coder', image: 'https://randomuser.me/api/portraits/men/45.jpg' },
    { name: 'Nivedita Menon', role: 'Figma Designer', image: 'https://randomuser.me/api/portraits/women/46.jpg' },
    { name: 'Gautham Prakash', role: 'Stealth Intern', image: 'https://randomuser.me/api/portraits/men/55.jpg' },
    { name: 'Meghana Rao', role: 'Data Scientist', image: 'https://randomuser.me/api/portraits/women/62.jpg' },
    { name: 'Adithya Narayanan', role: 'Project Presentator', image: 'https://randomuser.me/api/portraits/men/61.jpg' },
    { name: 'Swetha Chandran', role: 'Backend Developer', image: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { name: 'Rahul Dev', role: 'Frontend Developer', image: 'https://randomuser.me/api/portraits/men/71.jpg' },
    { name: 'Ananya Sridhar', role: 'QA Lead', image: 'https://randomuser.me/api/portraits/women/72.jpg' },
    { name: 'Varun Balaji', role: 'Security Engineer', image: 'https://randomuser.me/api/portraits/men/75.jpg' },
    { name: 'Ranjani Iyer', role: 'Content Strategist', image: 'https://randomuser.me/api/portraits/women/79.jpg' },
    { name: 'Naveen Kumar', role: 'Growth Marketer', image: 'https://randomuser.me/api/portraits/men/82.jpg' },
    { name: 'Sneha Reddy', role: 'HR Manager', image: 'https://randomuser.me/api/portraits/women/85.jpg' },
    { name: 'Prashanth Ravi', role: 'Solutions Architect', image: 'https://randomuser.me/api/portraits/men/86.jpg' },
    { name: 'Lakshmi Nair', role: 'Client Success Manager', image: 'https://randomuser.me/api/portraits/women/88.jpg' },
    { name: 'Ashok Raj', role: 'Mobile Developer', image: 'https://randomuser.me/api/portraits/men/91.jpg' },
    { name: 'Pavithra Mohan', role: 'Database Administrator', image: 'https://randomuser.me/api/portraits/women/93.jpg' },
    { name: 'Siddharth Iyer', role: 'Scrum Master', image: 'https://randomuser.me/api/portraits/men/94.jpg' }
].map(member => ({ ...member, github: '#', linkedin: '#', twitter: '#' }));

export const TeamsSection = () => {
    return (
        <section id="teams" className="py-32 px-6 relative bg-white dark:bg-[#050505]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 max-w-3xl mx-auto">
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
                        className="text-4xl md:text-6xl font-black text-black dark:text-white mb-6 tracking-tight"
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
                        A powerhouse of 24 Chennai-based architects, designers, and engineers crafting exceptional digital experiences.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {teamMembers.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (i % 4) * 0.1 }}
                            className="bg-gray-50 dark:bg-[#111111] border border-black/5 dark:border-white/5 rounded-[2rem] p-6 text-center hover:border-orange-500/30 hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full overflow-hidden mb-5 border-4 border-white dark:border-[#1a1a1a] shadow-lg group-hover:scale-105 transition-transform duration-300">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-black dark:text-white mb-1 line-clamp-1">{member.name}</h3>
                            <p className="text-orange-500 text-xs font-bold tracking-wider uppercase mb-5 line-clamp-1">{member.role}</p>
                            
                            <div className="flex items-center justify-center gap-4 border-t border-black/5 dark:border-white/5 pt-4">
                                <a href={member.github} className="text-black/30 dark:text-white/30 hover:text-black dark:hover:text-white transition-colors">
                                    <FaGithub className="w-4 h-4" />
                                </a>
                                <a href={member.linkedin} className="text-black/30 dark:text-white/30 hover:text-blue-500 transition-colors">
                                    <FaLinkedin className="w-4 h-4" />
                                </a>
                                <a href={member.twitter} className="text-black/30 dark:text-white/30 hover:text-sky-500 transition-colors">
                                    <FaTwitter className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
