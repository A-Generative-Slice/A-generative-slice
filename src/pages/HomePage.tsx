import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { TechStack } from '../components/TechStack';
import { FAQSection } from '../components/FAQSection';
import { motion } from 'framer-motion';

export const HomePage = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Hero />
            <HowItWorks />
            <TechStack />
            <FAQSection />
        </motion.div>
    );
};
