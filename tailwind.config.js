/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",

    './public/*.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Arial', 'sans-serif'],
      serif: ['ui-serif', 'Georgia'],
      display: ["Open Sans", "sans-serif"],
    },
    extend: {
      // fontFamily: {
      //   'sans': ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
      // },
      colors: {
        primary: "#0262c0",
        primaryDarker: "#013F7A",
        redColor: "#ff4059",
        pinkColor: "#FBC2C3",
        greenColor: "#04d7a5",
        "bg-base-100": "#9debff",
        bgColor1: "#bfc6d0",
      }
    },

  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}
