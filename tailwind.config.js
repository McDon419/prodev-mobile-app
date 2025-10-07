/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // All screens and routes
    "./components/**/*.{js,jsx,ts,tsx}", // If you use components/
  ],
  theme: {
    extend: {
      colors: {
        primary: "#34967C", // your custom green (used in profile screen)
      },
    },
  },
  plugins: [],
};
