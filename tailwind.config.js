module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.vue"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
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
