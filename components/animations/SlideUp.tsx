import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

const SlideUp: React.FC<SlideUpProps> = ({ children, duration = 0.5, delay = 0 }) => {
  const slideUpAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration, delay },
    },
  };

  return (
    <motion.div
      className="flex justify-center items-center w-full"
      variants={slideUpAnimation}
      initial="initial"
      animate="animate"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Welcome to GlamCS</h2>
        <p className="text-gray-700 mb-4">
          Discover our luxurious range of cosmetics crafted to enhance your natural beauty. At GlamCS, we believe in the power of elegance and sophistication.
        </p>
        <button className="bg-orange-600 text-white font-semibold py-2 px-4 rounded hover:bg-orange-500 transition-all duration-300">
          Shop Now
        </button>
      </div>
    </motion.div>
  );
};

export default SlideUp;