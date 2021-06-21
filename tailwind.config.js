module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { digital: "Digital-7 Mono" },
      minWidth: { 36: "9rem" },
      spacing: { 128: "32rem", 120: "30rem" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
