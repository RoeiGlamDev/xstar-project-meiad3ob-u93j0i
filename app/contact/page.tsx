import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-white text-orange-600 p-8">
      <motion.h1 
        className="text-4xl font-bold mb-6" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Contact GlamCS
      </motion.h1>
      <motion.p 
        className="mb-4" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.7 }}
      >
        We’d love to hear from you! Please fill out the form below to reach out to us.
      </motion.p>
      
      <form onSubmit={handleSubmit} className="bg-orange-50 p-6 rounded shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            required 
            rows={4} 
            className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <button 
          type="submit" 
          className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition duration-200"
        >
          Send Message
        </button>
      </form>

      <motion.div 
        className="mt-8" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.9 }}
      >
        <h2 className="text-2xl font-bold mb-2">Visit Us</h2>
        <p>We are located at:</p>
        <p className="font-semibold">GlamCS Headquarters</p>
        <p className="text-gray-600">123 Glamorous Ave, Beauty City, BC 12345</p>
        <p className="mt-2">Business Hours:</p>
        <ul className="list-disc pl-5">
          <li>Monday - Friday: 9 AM - 6 PM</li>
          <li>Saturday: 10 AM - 4 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default ContactPage;