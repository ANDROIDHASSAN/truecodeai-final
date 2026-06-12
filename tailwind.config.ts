import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '380px',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
