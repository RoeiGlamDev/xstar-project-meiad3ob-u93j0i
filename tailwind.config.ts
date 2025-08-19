import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF5722', // GlamCS specific orange
        },
        white: '#FFFFFF', // GlamCS specific white
      },
      animation: {
        bounce: 'bounce 1s infinite',
        fade: 'fade 0.5s ease-in-out',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15%)' },
        },
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
});