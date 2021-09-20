module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customBlue: "#1D4D8C",
        customMain: "#fafafa",
        customBlack: "#111111",
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [],
};
