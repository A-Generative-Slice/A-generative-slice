import { ContactSection } from '../components/ContactSection';
import { motion } from 'framer-motion';

export const ContactPage = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <ContactSection />
        </motion.div>
    );
};
