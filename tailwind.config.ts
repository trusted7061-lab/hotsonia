import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          600: '#ff4081',
          700: '#e833a8',
        },
        purple: {
          600: '#c44dff',
          700: '#a835d6',
        },
      },
      fontFamily: {
        playfair: ["'Playfair Display'", 'serif'],
        poppins: ["'Poppins'", 'sans-serif'],
      },
      animations: {
        reveal: 'reveal 0.6s ease-out',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
