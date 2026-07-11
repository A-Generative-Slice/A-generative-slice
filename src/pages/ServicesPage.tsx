import { ServicesListSection } from '../components/ServicesListSection';
import { motion } from 'framer-motion';

export const ServicesPage = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <ServicesListSection />
        </motion.div>
    );
};
