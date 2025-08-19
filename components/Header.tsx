import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-5">
        <h1 className="text-3xl font-bold text-orange-500">{siteTitle}</h1>
        <nav className={hidden md:flex space-x-8}>
          <motion.a
            href="#home"
            className="text-gray-700 hover:text-orange-500 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Home
          </motion.a>
          <motion.a
            href="#products"
            className="text-gray-700 hover:text-orange-500 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Products
          </motion.a>
          <motion.a
            href="#about"
            className="text-gray-700 hover:text-orange-500 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            About Us
          </motion.a>
          <motion.a
            href="#contact"
            className="text-gray-700 hover:text-orange-500 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Contact
          </motion.a>
        </nav>
        <button
          className="md:hidden text-orange-500 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white flex flex-col space-y-4 p-5">
          <motion.a
            href="#home"
            className="text-gray-700 hover:text-orange-500 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            onClick={toggleMobileMenu}
          >
            Home
          </motion.a>
          <motion.a
            href="#products"
            className="text-gray-700 hover:text-orange-500 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            onClick={toggleMobileMenu}
          >
            Products
          </motion.a>
          <motion.a
            href="#about"
            className="text-gray-700 hover:text-orange-500 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            onClick={toggleMobileMenu}
          >
            About Us
          </motion.a>
          <motion.a
            href="#contact"
            className="text-gray-700 hover:text-orange-500 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            onClick={toggleMobileMenu}
          >
            Contact
          </motion.a>
        </div>
      )}
    </header>
  );
};

export default Header;