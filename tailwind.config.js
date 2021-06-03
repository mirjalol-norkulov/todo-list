module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.vue"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      "2xs": ".625rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#CC9A9A",
          light: "#ead7d7",
          dark: "#af5b5e",
        },
        black: {
          DEFAULT: "#4d4d4d",
        },
        gray: {
          DEFAULT: "#e6e6e6",
          medium: "#bfbfbf",
          darker: "#d9d9d9",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
