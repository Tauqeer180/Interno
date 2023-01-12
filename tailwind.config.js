/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      "2lg": "1rem",
      "3lg": "1.5rem",
      "4xl": "4rem",
      "5xl": "5rem",
      "6xl": "6rem",
      "8xl": "8rem",
      "10xl": "10rem",
      full: "9999px",
      "19xl": "19rem",
    },
    extend: {
      colors: {
        "theme-gold": "#cda274",
        "theme-gray": "#f4f0ec",
        "theme-text": "#4d5053",
        "theme-heading": "#292f36",
      },
    },
  },
  plugins: [],
};
