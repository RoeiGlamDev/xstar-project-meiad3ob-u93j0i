import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "GlamCS", 
  subtitle = "Elevate Your Beauty with Our Luxury Cosmetics", 
  ctaText = "Shop Now", 
  ctaLink = "/shop" 
}) => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-white">
      <motion.div 
        className="text-center p-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold text-orange-600 mb-4">
          {title}
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          {subtitle}
        </p>
        <motion.a 
          href={ctaLink} 
          className="inline-block px-8 py-3 text-white bg-orange-600 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          {ctaText}
        </motion.a>
      </motion.div>
      <div className="absolute inset-0 bg-opacity-30 bg-white z-0"></div>
    </section>
  );
};

export default HeroSection;