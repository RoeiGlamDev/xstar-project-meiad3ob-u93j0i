import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
    const { ref, inView } = useInView({ threshold: 0.1 });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start({ opacity: 0, y: 50 });
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            className={transition-opacity duration-500 ease-in-out ${className}}
            animate={controls}
            initial={{ opacity: 0, y: 50 }}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;