import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Premium Quality',
    description: 'Experience the luxury of high-end, cruelty-free cosmetics that enhance your natural beauty.',
    icon: <i className="fas fa-gem text-orange-500"></i>,
  },
  {
    title: 'Vibrant Colors',
    description: 'Explore our vibrant range of colors, crafted to suit all skin tones and styles.',
    icon: <i className="fas fa-paint-brush text-orange-500"></i>,
  },
  {
    title: 'Sustainable Practices',
    description: 'Committed to sustainability, our products are eco-friendly and responsibly sourced.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,
  },
  {
    title: 'Luxurious Experience',
    description: 'Indulge in a luxurious shopping experience that complements the GlamCS brand.',
    icon: <i className="fas fa-crown text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">Why Choose GlamCS?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-orange-50 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <div className="text-5xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-orange-600 ml-4">{feature.title}</h3>
              </div>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;