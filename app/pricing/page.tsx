import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  price: string;
  description: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'GlamCS Essential',
    price: '$29.99',
    description: 'The perfect starter kit for your glam journey.',
    features: [
      'High-quality foundation',
      'Luxury lip gloss',
      'Compact mirror',
      'Makeup brush set',
    ],
  },
  {
    title: 'GlamCS Premium',
    price: '$49.99',
    description: 'Elevate your beauty routine with our premium selection.',
    features: [
      'All Essential features',
      'Luxury eyeshadow palette',
      'Premium skincare set',
      'Signature fragrance',
    ],
  },
  {
    title: 'GlamCS Luxe',
    price: '$89.99',
    description: 'Indulge in the ultimate glam experience.',
    features: [
      'All Premium features',
      'Exclusive VIP gifts',
      'Personalized makeup consultation',
      'Access to GlamCS events',
    ],
  },
];

const FAQ = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards and PayPal.',
  },
  {
    question: 'How do I track my order?',
    answer: 'You will receive an email with tracking information once your order has shipped.',
  },
  {
    question: 'Can I return a product?',
    answer: 'Yes, we offer a 30-day return policy for unopened products.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-orange-600">GlamCS Pricing</h1>
        <p className="mt-2 text-lg">Choose your glam experience</p>
      </header>

      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 rounded-lg shadow-lg p-5 transform transition-transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5 } }}
            >
              <h2 className="text-xl font-semibold text-orange-600">{option.title}</h2>
              <p className="text-2xl font-bold text-gray-900">{option.price}</p>
              <p className="mt-2 text-gray-600">{option.description}</p>
              <ul className="mt-4 list-disc list-inside">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-10 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-orange-600 text-center">FAQs</h2>
        <div className="mt-5">
          {FAQ.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-300 py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5 } }}
            >
              <h3 className="font-semibold text-gray-800">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PricingPage;