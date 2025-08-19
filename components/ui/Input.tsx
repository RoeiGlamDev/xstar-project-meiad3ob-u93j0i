import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, type = 'text', placeholder, required = false, value, onChange, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mb-6">
      <label className={block text-lg font-semibold text-orange-500 mb-2 transition duration-200 ${isFocused || value ? 'transform -translate-y-6 scale-75' : ''}}>
        {label}
      </label>
      <motion.input
        type={type}
        placeholder={placeholder}
        className={w-full px-4 py-2 border rounded-lg focus:outline-none transition duration-200 ${error ? 'border-red-500' : 'border-orange-300'} ${isFocused ? 'shadow-lg' : 'shadow-md'} bg-white}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(!value)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? 'error-message' : undefined}
      />
      {error && <p className="mt-1 text-red-500 text-sm" id="error-message">{error}</p>}
    </div>
  );
};

export default Input;