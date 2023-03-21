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
        primary: "#50e3c2",
        "bg-base-100": "#9debff"
      }
    },

  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
