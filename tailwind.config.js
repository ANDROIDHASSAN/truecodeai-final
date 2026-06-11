/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        // narrow-phone breakpoint for fine-tuning type that overflows < 380px
        xs: '380px',
      },
      fontFamily: {
        sans: ['"Readex Pro"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
