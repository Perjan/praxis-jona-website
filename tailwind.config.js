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
        primary: "#0D322B",
        primaryDarker: "#081F1A",
        primaryLighter: "#144D42",
        darkBeige: "#CAAB8C",
        lightBeige: "#F9EDDF",
        tealColor: "#D3E0D6",
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
