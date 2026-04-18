/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000f22",
        "primary-container": "#0a2540",
        surface: "#f7fafd",
        "surface-bright": "#f7fafd",
        "surface-container-lowest": "#ffffff",
        secondary: "#006e0c",
      },
    },
  },
  plugins: [],
};