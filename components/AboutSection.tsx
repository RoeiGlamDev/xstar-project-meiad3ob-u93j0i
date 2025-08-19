import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
    name: string;
    role: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    {
        name: 'Sophia Lee',
        role: 'Founder & CEO',
        image: '/images/sophia.jpg',
    },
    {
        name: 'James Carter',
        role: 'Head of Product Development',
        image: '/images/james.jpg',
    },
    {
        name: 'Mia Chen',
        role: 'Marketing Director',
        image: '/images/mia.jpg',
    },
];

const AboutSection: React.FC = () => {
    return (
        <section className="bg-white py-20 px-6 lg:px-20">
            <div className="container mx-auto">
                <motion.h2
                    className="text-4xl text-orange-600 font-bold mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Our Story
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-700 mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    At GlamCS, we believe that beauty should be accessible to everyone. Founded in 2023, our mission is to create high-quality, luxurious cosmetics that empower individuals to express their unique beauty. Our innovative products combine modern science with timeless elegance, ensuring that every application feels like a special occasion.
                </motion.p>
                
                <motion.h2
                    className="text-4xl text-orange-600 font-bold mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Our Mission
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-700 mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    Our mission at GlamCS is to redefine luxury in the cosmetics industry. We strive to create products that not only enhance beauty but also promote self-confidence and self-expression. We are committed to sustainability and ethical practices, ensuring that our products are as kind to the environment as they are to your skin.
                </motion.p>

                <motion.h2
                    className="text-4xl text-orange-600 font-bold mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    Meet Our Team
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {teamMembers.map((member) => (
                        <motion.div
                            key={member.name}
                            className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="rounded-full w-24 h-24 mx-auto mb-4"
                            />
                            <h3 className="text-lg font-semibold text-orange-600">{member.name}</h3>
                            <p className="text-gray-500">{member.role}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <h2 className="text-4xl text-orange-600 font-bold mb-6">Our Values</h2>
                    <p className="text-lg text-gray-700">
                        At GlamCS, we value innovation, quality, and inclusivity. We are dedicated to creating products that cater to diverse beauty needs and celebrating the individuality of every customer.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;