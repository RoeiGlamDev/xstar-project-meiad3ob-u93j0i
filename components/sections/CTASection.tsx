import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
    title: string;
    subtitle: string;
    buttonText: string;
    onButtonClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ title, subtitle, buttonText, onButtonClick }) => {
    return (
        <section className="flex flex-col items-center justify-center bg-white py-20 px-5">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
            >
                <h2 className="text-4xl font-bold text-orange-500">{title}</h2>
                <p className="mt-4 text-lg text-gray-700">{subtitle}</p>
            </motion.div>
            <motion.button 
                onClick={onButtonClick} 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
            >
                {buttonText}
            </motion.button>
        </section>
    );
};

export default CTASection;