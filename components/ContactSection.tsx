import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  reason: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    reason: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState<boolean>(false);

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.reason) newErrors.reason = 'Reason for contact is required';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      setSuccess(true);
      setFormData({ name: '', email: '', reason: '', message: '' });
    }
  };

  return (
    <section className="bg-white py-20 px-5">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-orange-500 mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact GlamCS
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We would love to hear from you! Please fill out the form below for any inquiries.
        </motion.p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-orange-100 p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={w-full p-2 border rounded ${errors.name ? 'border-red-500' : 'border-orange-300'}}
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-orange-300'}}
              placeholder="Your Email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="reason">Reason for Contact</label>
            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className={w-full p-2 border rounded ${errors.reason ? 'border-red-500' : 'border-orange-300'}}
            >
              <option value="">Select a reason</option>
              <option value="product inquiry">Product Inquiry</option>
              <option value="partnership opportunity">Partnership Opportunity</option>
              <option value="customer support">Customer Support</option>
              <option value="feedback">Feedback</option>
            </select>
            {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={w-full p-2 border rounded ${errors.message ? 'border-red-500' : 'border-orange-300'}}
              placeholder="Your Message"
              rows={4}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-bold py-2 rounded hover:bg-orange-600 transition duration-300"
          >
            Send Message
          </button>
          {success && <p className="text-green-500 text-center mt-4">Your message has been sent successfully!</p>}
        </form>
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-orange-500">GlamCS Business Information</h3>
          <p className="text-gray-600">Location: 123 Glam St, Beauty City, CA 90210</p>
          <p className="text-gray-600">Business Hours: Mon-Fri 9 AM - 6 PM</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;