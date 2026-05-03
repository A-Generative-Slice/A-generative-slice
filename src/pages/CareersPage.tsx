import { CareersSection } from '../components/CareersSection';
import { motion } from 'framer-motion';

export const CareersPage = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24"
        >
            <CareersSection />
        </motion.div>
    );
};
