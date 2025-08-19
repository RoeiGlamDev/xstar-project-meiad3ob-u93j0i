import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
      <motion.div
        className="absolute inset-0 bg-white opacity-70"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.div
        className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 lg:w-1/4 p-6 z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-center text-2xl font-bold text-orange-500 mb-4">
          {title}
        </h2>
        <p className="text-gray-700 text-sm mb-6">
          {content}
        </p>
        <button
          className="w-full bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-600 transition duration-200"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;