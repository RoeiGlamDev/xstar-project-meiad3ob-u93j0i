import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const buttonVariants = {
  rest: { scale: 1, boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)' },
  hover: { scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)' },
  tap: { scale: 0.95 },
};

const GlamCSButton: React.FC<ButtonProps> = ({
  variant = 'primary',
  onClick,
  children,
  disabled = false,
}) => {
  const baseStyles = 'font-semibold rounded-lg px-6 py-2 transition duration-300 ease-in-out';
  const primaryStyles = 'bg-orange-500 text-white hover:bg-orange-600';
  const secondaryStyles = 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-50';

  return (
    <motion.button
      className={${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles}}
      onClick={onClick}
      disabled={disabled}
      variants={buttonVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      aria-label={GlamCS ${variant} button}
    >
      {children}
    </motion.button>
  );
};

export default GlamCSButton;