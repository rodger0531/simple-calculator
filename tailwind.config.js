module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { digital: "Digital-7 Mono" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
