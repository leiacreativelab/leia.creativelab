/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        card: "var(--card)",
        text: "var(--text)",
        muted: "var(--muted)",
        brand: "#4E171C",
        "brand-2": "#C8A374",
        accent: "#D8A8A2",
        beige: "#E8E2DD",
        burgundy: "#4E171C",
        sand: "#C8A374",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,.25)",
      },
    },
  },
  plugins: [],
};
