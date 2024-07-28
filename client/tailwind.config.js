/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#000000",
        "secondary":"#4169e1",
        "tertiary":"#1f3574",
      }
    },
    // screens: {
    //   'lg': {'max': '2023px'},

    //   'sm': {'max': '1000px'},
    // }
  },
  plugins: [],
}