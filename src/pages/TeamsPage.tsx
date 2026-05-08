import { TeamsSection } from '../components/TeamsSection';
import { motion } from 'framer-motion';

export const TeamsPage = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <TeamsSection />
        </motion.div>
    );
};
