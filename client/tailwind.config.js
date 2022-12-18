/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        unbounded: "'Unbounded', sans-serif",
        lib: "'Libre Franklin', sans-serif",
      },
    },
  },
  plugins: [],
};