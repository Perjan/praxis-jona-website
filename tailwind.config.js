/** @type {import('tailwindcss').Config} */
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
    extend: {
      colors: {
        primary: "#0262c0",
        redColor: "#ff4059",
        greenColor: "#04d7a5",
        "bg-base-100": "#9debff"
      }
    },

  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
