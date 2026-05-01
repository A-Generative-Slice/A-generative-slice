import { About } from '../components/About';
import { motion } from 'framer-motion';

export const AboutPage = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24"
        >
            <About />
        </motion.div>
    );
};
