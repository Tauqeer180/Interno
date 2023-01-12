/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/index.js",
    "./src/components/common/Navbar.jsx",
    "./src/components/home/Banner.jsx",
    "./src/components/home/Card.jsx",
  ],
  theme: {
    extend: {},
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      "2lg": "1rem",
      "3lg": "1.5rem",
      "8xl": "8rem",
      "10xl": "10rem",
      full: "9999px",
      "19xl": "19rem",
    },
  },
  plugins: [],
};
