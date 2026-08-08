/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#5b5bf7',
          'purple-dark': '#4f53e8',
          pink: '#ff7f2a',
          'pink-dark': '#f97316',
          amber: '#ff9d2f',
          'amber-dark': '#ea7b18',
          teal: '#2dd4bf',
        },
        dark: {
          50: '#1a2342',
          100: '#151c35',
          200: '#12182d',
          300: '#101425',
          400: '#0d1020',
          500: '#0b1020',
          600: '#080d1b',
          700: '#070b16',
        },
        ink: {
          50: '#f5f5fa',
          100: '#e4e4ef',
          200: '#c4c4d4',
          300: '#9d9db0',
          400: '#7a7a8e',
          500: '#5c5c70',
        },
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
