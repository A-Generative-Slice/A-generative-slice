import { ProjectsSection } from '../components/ProjectsSection';
import { motion } from 'framer-motion';

export const ProjectsPage = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <ProjectsSection />
        </motion.div>
    );
};
