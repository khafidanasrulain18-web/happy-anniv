/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: "#FDF1EF",
        paper: "#FFFBF8",
        petal: "#F4C6CB",
        rose: "#D97A88",
        "rose-deep": "#B85C6D",
        mauve: "#5E3A44",
        gold: "#D9A75C",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
