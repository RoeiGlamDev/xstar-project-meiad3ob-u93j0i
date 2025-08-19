import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden backdrop-filter backdrop-blur-lg bg-opacity-30 hover:bg-opacity-40 transition duration-300 ease-in-out transform hover:-translate-y-1"
      whileHover={{ scale: 1.05 }}
    >
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-orange-500 mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;