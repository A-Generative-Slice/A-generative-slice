import { Hero } from '../components/Hero';
import { motion } from 'framer-motion';

export const HomePage = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Hero />
        </motion.div>
    );
};
