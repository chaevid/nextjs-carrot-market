/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/contents/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'Noto Sans KR'],
      },
      colors: {
        'arws-gold': {
          50: '#FFF9E1',
          100: '#FEEFB2',
          200: '#FEE480',
          300: '#FFDB4A',
          400: '#FFD118',
          500: '#FFC800',
          600: '#FFBA00',
          700: '#FFA600',
          800: '#FF9500',
          900: '#FF7400',
          DEFAULT: '#FFD118',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms')],
};
