/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#211717",
      secondary: "#A34A28",
      accent: "#F58B54",
      third: "#DFDDC7",
      white: "#FFFFFF",
    },

    fontFamily: {
      "DM-Serif-display": ['"DM Serif Display"', "serif"],
      "Ribeye-marrow": ['"Ribeye Marrow"', "cursive"],
      Cardo: ['"Cardo"', "serif"],
      Poppins: ["Poppins", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
