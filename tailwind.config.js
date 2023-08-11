/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'gray-dark': '#555454',
      'gray': '#E2E2E2',
      'gray-medium': '#F0F0F0',
      'red': '#BF8383',
      'black': '#222222',
      'text': '#000000',
      'white': '#FFFFFF',
      'label': '#A6A5A5'
    },
    fontFamily: {
      title: 'Bricolage Grotesque',
      pharagrap: 'Roboto'
    },

    extend: {
      screens: {
        '3xl': '1920px'
      },
      width: {
        '930': '58rem',
        '780': '49rem',
        '443': '27rem',
        '610': '38rem',
        '696': '43rem',
        '308': '19rem',
        '1624': '101.5rem',
        '1005': '62.813rem',
        '367': '22.938rem',
        '853': '53.313rem',
        '119': '7.438rem',
        '343': '21.438rem'
      },
      height: {
        '799': '50rem',
        '481': '30rem',
        '1019': '63.688rem',
        '575': '35.938rem'
      },
      space: {
        '1040px': '1040px'
      },
      spacing: {
        '679px': '679px',
        '213px': '213px',
        '789px': '789px',
        '320px': '320px',
        '1096px': '1096px'
      }
    },
  },
  plugins: [],
}