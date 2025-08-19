import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  imageUrl: string;
}

const features: Feature[] = [
  {
    title: 'Luxurious Formulations',
    description: 'Our products are crafted with the finest ingredients to enhance your natural beauty.',
    imageUrl: '/images/luxury-formulation.jpg',
  },
  {
    title: 'Eco-Friendly Packaging',
    description: 'We prioritize sustainability with our stylish and recyclable packaging.',
    imageUrl: '/images/eco-packaging.jpg',
  },
  {
    title: 'Cruelty-Free Assurance',
    description: 'All GlamCS products are cruelty-free and never tested on animals.',
    imageUrl: '/images/cruelty-free.jpg',
  },
];

const HeroSection = () => (
  <div className="bg-orange-500 text-white h-screen flex flex-col justify-center items-center">
    <motion.h1
      className="text-5xl md:text-7xl font-bold mb-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Welcome to GlamCS
    </motion.h1>
    <motion.p
      className="text-xl md:text-2xl mb-8"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      Elevate Your Beauty Routine with Our Premium Cosmetics
    </motion.p>
    <motion.button
      className="bg-white text-orange-500 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-orange-200 transition duration-300"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      Shop Now
    </motion.button>
  </div>
);

const FeatureSection = () => (
  <div className="py-16 bg-white">
    <h2 className="text-center text-4xl font-bold text-orange-500 mb-8">Why Choose GlamCS?</h2>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <img src={feature.imageUrl} alt={feature.title} className="h-32 w-32 mx-auto mb-4"/>
          <h3 className="text-2xl font-bold text-orange-500">{feature.title}</h3>
          <p className="text-gray-700">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const GlamCSHomePage: React.FC = () => (
  <div>
    <HeroSection />
    <FeatureSection />
  </div>
);

export default GlamCSHomePage;