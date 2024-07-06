/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#C3EFEF',
          200: '#8ADADA',
          300: '#56C8C5',
          400: '#2CBDB7',
          500: '#23A09C',
          600: '#1E7E7C',
          700: '#166461',
          800: '#104C4C',
          900: '#0B3333',
        },
        'primary-secondary': {
          100: '#E0E6F7',
          200: '#B3C1E2',
          300: '#889BCC',
          400: '#5C76B6',
          500: '#3B5A9D',
          600: '#2E4A82',
          700: '#253C6C',
          800: '#1D2E57',
          900: '#151F41',
        },
      },
    },
  },
  plugins: [],
}