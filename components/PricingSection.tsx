import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Basic Glam',
    price: '$29',
    features: [
      'One Makeup Consultation',
      'Basic Skincare Analysis',
      '15% off on first purchase',
    ],
  },
  {
    title: 'Premium Glam',
    price: '$59',
    features: [
      'Two Makeup Consultations',
      'Advanced Skincare Analysis',
      '20% off on first purchase',
      'Exclusive access to new products',
    ],
  },
  {
    title: 'Luxury Glam',
    price: '$99',
    features: [
      'Unlimited Makeup Consultations',
      'Personalized Skincare Routine',
      '25% off on all purchases',
      'Free shipping on orders over $50',
      'Access to exclusive glam events',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-orange-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          GlamCS Pricing Plans
        </motion.h2>
        <motion.p
          className="text-lg mb-10 text-gray-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Choose the perfect plan to elevate your beauty experience with GlamCS.
        </motion.p>
        <div className="flex flex-wrap justify-center">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-white border rounded-lg shadow-lg m-4 p-6 w-80 hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-orange-500 mb-4">
                {tier.title}
              </h3>
              <p className="text-xl font-bold text-gray-800 mb-4">{tier.price}</p>
              <ul className="list-disc list-inside mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors duration-300">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;