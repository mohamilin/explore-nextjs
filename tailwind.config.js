/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#00B7B5',
      'nav-bottom': 'rgb(255 247 237)'
    },
    extend: {},
  },
  plugins: [],
}
