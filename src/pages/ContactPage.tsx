import { ContactSection } from '../components/ContactSection';
import { motion } from 'framer-motion';

export const ContactPage = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24"
        >
            <ContactSection />
        </motion.div>
    );
};
