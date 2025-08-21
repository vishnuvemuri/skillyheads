/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        slate: {
          800: '#0A2540',
        },
        teal: {
          500: '#00C49A',
          600: '#00B189',
        },
        gray: {
          50: '#F8F9FA',
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};