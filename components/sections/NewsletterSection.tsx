import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title: string;
  description: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ title, description }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the email submission logic here (e.g., API call)
    setIsSubmitted(true);
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-orange-500 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title || "Join the GlamCS Family"}
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {description || "Subscribe to our newsletter for the latest in luxury cosmetics, exclusive offers, and beauty tips!"}
        </motion.p>

        {isSubmitted ? (
          <motion.div
            className="text-green-500 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thank you for subscribing to GlamCS!
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 rounded-lg p-2 mb-4 w-full md:w-1/2"
            />
            <motion.button
              type="submit"
              className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;