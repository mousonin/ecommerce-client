/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Condensed"', "sans-serif"],
      },
      colors: {
        azure: {
          50: "#f6f7fb",
          100: "#ecf0f7",
          200: "#d0d9ec",
          300: "#b3c2e0",
          400: "#7b95c9",
          500: "#4267b2",
          600: "#3b5da0",
          700: "#324d86",
          800: "#283e6b",
          900: "#203257",
        },
        mateColors: ["rgb(45, 52, 54)"],
      },
      margin: {
        "2/4": '50%',
      }
    },
  },
  plugins: [],
};
