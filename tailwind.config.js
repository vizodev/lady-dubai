/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/{App,app,Error,error}.vue",
    "./src/{components,layouts,pages,composables,plugins}/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          100: "#FFC1D3",
          500: "#F14990",
          600: "#A81955",
        },
        brown: {
          700: "#272223",
        },
        blue: {
          200: "#749BFF",
        },
      },
      fontFamily: {
        "roboto-serif": ["Roboto Serif", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
