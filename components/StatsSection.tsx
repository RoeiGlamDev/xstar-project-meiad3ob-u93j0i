import React from 'react';
import { motion } from 'framer-motion';

interface Stats {
  title: string;
  count: number;
  description: string;
}

const statsData: Stats[] = [
  { title: 'Products Launched', count: 120, description: 'Innovative cosmetics tailored for every beauty need.' },
  { title: 'Happy Customers', count: 5000, description: 'Join our community of satisfied GlamCS enthusiasts.' },
  { title: 'Awards Won', count: 15, description: 'Recognized for excellence in the cosmetics industry.' },
  { title: 'Sustainable Practices', count: 100, description: 'Committed to eco-friendly and cruelty-free products.' },
];

const counterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const StatsSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-16 bg-white">
      <h2 className="text-3xl font-bold text-orange-600 mb-8">GlamCS Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {statsData.map((stat) => (
          <motion.div
            key={stat.title}
            className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            initial="hidden"
            animate="visible"
            variants={counterVariants}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-orange-600">{stat.count}</h3>
            <p className="text-lg text-gray-700">{stat.title}</p>
            <p className="text-sm text-gray-500 mt-2">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;