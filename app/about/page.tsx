import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  description: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Johnson',
    position: 'Founder & CEO',
    description: 'Sophia is a visionary leader with over a decade of experience in the cosmetics industry, dedicated to bringing luxury and elegance to beauty.',
    imageUrl: '/images/sophia.jpg',
  },
  {
    name: 'Liam Smith',
    position: 'Creative Director',
    description: 'Liam specializes in innovative design and branding, ensuring that GlamCS stands out with its modern aesthetics and premium appeal.',
    imageUrl: '/images/liam.jpg',
  },
  {
    name: 'Olivia Brown',
    position: 'Head of Product Development',
    description: 'With a passion for beauty and skincare, Olivia leads product development, focusing on high-quality ingredients and sustainable practices.',
    imageUrl: '/images/olivia.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold">About GlamCS</h1>
        <p className="mt-4 text-lg">
          At GlamCS, we believe that beauty is an art form. Our journey began with a simple vision: to create high-end cosmetics that empower individuals to express their unique beauty.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="text-3xl font-semibold">Our History</h2>
        <p className="mt-4">
          Founded in 2021, GlamCS has quickly risen to prominence in the cosmetics industry. Our commitment to quality and luxury has garnered us a loyal customer base. We pride ourselves on our innovative products that combine beauty and self-care, ensuring that every application feels like a lavish experience.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold">Our Values</h2>
        <p className="mt-4">
          We are dedicated to sustainability, inclusivity, and the empowerment of individuals through beauty. GlamCS stands for quality, innovation, and elegance, ensuring that every product not only enhances beauty but also contributes positively to the world.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-10"
      >
        <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img src={member.imageUrl} alt={member.name} className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl font-bold mt-4">{member.name}</h3>
              <h4 className="text-md text-orange-500">{member.position}</h4>
              <p className="mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;