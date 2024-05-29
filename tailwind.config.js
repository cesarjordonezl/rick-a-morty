/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'background': '#05292E',
        'card': '#062226',
        'white': '#FBFBFB',
        'gray': '#7E7E7E',
        'circleGray': '#938686',
        'circleRed': '#B94343',
        'circleGreen': '#4AB648',
      },
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}
