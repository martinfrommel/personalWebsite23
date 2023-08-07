const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["EB Garamond Variable", ...defaultTheme.fontFamily.sans],
        serif: ["Rockwell", ...defaultTheme.fontFamily.serif],
        mono: ["VT323", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        dark: "#303037",
        light: "#e2e9e0",
      },
    },
    screens: {
      xs: "370px",
      ...defaultTheme.screens,
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
};
