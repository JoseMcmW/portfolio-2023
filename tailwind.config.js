/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'ligth': '#A6937C',
      'medium': '#73624D',
      'dark': '#403022',
      'black': '#000000',
      'white': '#FFFFFF',
      'browndark': '#0D0000'
    },
    fontFamily: {
      title: 'Limelight',
      text: 'Albert Sans'
    },
    extend: {},
  },
  plugins: [],
}