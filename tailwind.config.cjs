/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg) " },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "rotate-sphere": "wave 35s linear infinite",
      },

      gridTemplateColumns: {
        // Simple 16 column grid
        autoFit: "repeat( auto-fit , minmax(100px, 1fr))",
      },
    },
  },
  plugins: [],
};
