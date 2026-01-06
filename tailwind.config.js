/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgba(27, 42, 65, 1)',
        textNormal: 'rgba(114, 157, 182, 1)',
        textHover: 'rgba(50, 74, 95, 1)',
        accent: 'rgba(230, 181, 66, 1)',
      },
      fontFamily: {
        bitter: ['Bitter', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
