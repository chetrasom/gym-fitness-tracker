/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'oswald':'Oswald',
      'roboto':'Roboto',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        primary: '#f36100',
        bl: '#0a0a0a',
        bl1: '#111111',
        bl2: '#212529',
        bl3: '#464646',
        bl4: '#151515',
        customGray: '#a9a9a9',
        whiteMilk: '#c4c4c4',
      },
    },
  },
  plugins: [],
}

