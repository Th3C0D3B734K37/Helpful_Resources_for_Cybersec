import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx}', './content/**/*.{md,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#070a0f',
        surface: '#0d1117',
        border: '#1c2333',
        accent: '#00ffe1',
        danger: '#ff4d6d',
        warning: '#ffe566',
        hw: '#7c3aed',
        fw: '#d97706',
        os: '#0891b2',
        app: '#16a34a',
        ai: '#e11d48'
      }
    }
  },
  plugins: []
};

export default config;
