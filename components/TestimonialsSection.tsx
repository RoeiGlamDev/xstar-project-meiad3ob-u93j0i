import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  review: string;
  rating: number;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia Martinez',
    review: 'GlamCS transformed my makeup routine! Their products are luxurious and the quality is unmatched. Highly recommend the GlamCS Glow Serum!',
    rating: 5,
    photo: '/images/sophia.jpg',
  },
  {
    name: 'Ava Johnson',
    review: 'I absolutely love GlamCS! The color payoff of their lipsticks is phenomenal, and they last all day long without fading.',
    rating: 5,
    photo: '/images/ava.jpg',
  },
  {
    name: 'Olivia Brown',
    review: 'The GlamCS skincare line has changed my skin for the better! I adore the Hydrating Face Cream—it feels like a treat every time I use it.',
    rating: 5,
    photo: '/images/olivia.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={testimonial.photo}
                alt={${testimonial.name}'s photo}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-600">{testimonial.name}</h3>
              <p className="text-gray-700 italic mb-3">{testimonial.review}</p>
              <div className="flex justify-center">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <svg key={i} className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-6.18 3.25 1.18-6.85L0 6.75l6.91-1L10 0l2.09 5.75L20 6.75l-4.82 4.6 1.18 6.85z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;