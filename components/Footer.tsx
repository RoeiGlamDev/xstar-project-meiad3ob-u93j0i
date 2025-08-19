import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  year: number;
}

const Footer: React.FC<FooterProps> = ({ companyName = "GlamCS", year = new Date().getFullYear() }) => {
  return (
    <footer className="bg-white text-orange-600 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl font-bold">Stay Glamorous with {companyName}</h2>
          <p className="text-lg mt-2">Discover the elegance of our premium cosmetics.</p>
        </motion.div>
        <div className="flex justify-center space-x-6 mb-6">
          <motion.a
            href="#about"
            className="hover:text-orange-500 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.a
            href="#products"
            className="hover:text-orange-500 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Our Products
          </motion.a>
          <motion.a
            href="#contact"
            className="hover:text-orange-500 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Contact Us
          </motion.a>
          <motion.a
            href="#faq"
            className="hover:text-orange-500 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            FAQ
          </motion.a>
        </div>
        <div className="text-center mb-6">
          <p className="text-sm">&copy; {year} {companyName}. All rights reserved.</p>
        </div>
        <div className="flex justify-center space-x-4">
          <motion.a
            href="https://www.instagram.com/glamcs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 hover:text-orange-500 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            Instagram
          </motion.a>
          <motion.a
            href="https://www.facebook.com/glamcs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 hover:text-orange-500 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            Facebook
          </motion.a>
          <motion.a
            href="https://www.twitter.com/glamcs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 hover:text-orange-500 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            Twitter
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;