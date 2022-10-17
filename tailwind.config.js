module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        blue: "#3b4d61",
        yellow: "#e2d810",
        grey: "#6b7b8c",
        lightgrey: "#D9D9D9",
      },
      fontFamily: {
        robotoslab: ["RobotoSlab", "sans-serif"],
        firacode: ["FiraCode", "fantasy"],
        volkhov: ["Volkhov", "serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('../images/digital-code.png')",
      },
    },
  },
  plugins: [],
};
