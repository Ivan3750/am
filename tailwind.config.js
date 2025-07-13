/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
  extend: {
    fontFamily: {
      poppins: 'var(--font-poppins)',
      manrope: 'var(--font-manrope)',
      abeezee: 'var(--font-abeezee)',
    },
  },
},


  plugins: [],
}
