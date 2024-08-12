/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mob': { 'max': '640px' },
        'tab': { 'min': '640px' , 'max':'1200px' },
      },
      
    },
  },
  plugins: [],
};

