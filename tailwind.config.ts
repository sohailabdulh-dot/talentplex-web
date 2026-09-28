import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { ink: '#0D0E10', canvas: '#17181B', brand: '#E3131B', brandBright: '#F01B25', mist: '#6B7280', graphite: '#25262A' },
      fontFamily: { display: ['var(--font-space)'], sans: ['var(--font-inter)'] },
    },
  },
  plugins: [],
};
export default config;
