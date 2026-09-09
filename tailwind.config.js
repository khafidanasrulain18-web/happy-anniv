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
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0) rotate(-1deg)" },
          "20%": { transform: "translateX(-8px) rotate(-1deg)" },
          "40%": { transform: "translateX(8px) rotate(-1deg)" },
          "60%": { transform: "translateX(-6px) rotate(-1deg)" },
          "80%": { transform: "translateX(6px) rotate(-1deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px) rotate(-1deg)" },
          "100%": { opacity: "1", transform: "translateY(0) rotate(-1deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
