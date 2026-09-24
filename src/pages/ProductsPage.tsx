import { ProductsSection } from '../components/ProductsSection';
import { motion } from 'framer-motion';

export const ProductsPage = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <ProductsSection />
        </motion.div>
    );
};
