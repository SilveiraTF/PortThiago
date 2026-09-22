import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#050816",
          secondary: "#0A1024",
        },
        card: "#0F172A",
        blue: {
          DEFAULT: "#2563EB",
          electric: "#38BDF8",
          deep: "#1D4ED8",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F4D56A",
        },
        text: {
          primary: "#F8FAFC",
          secondary: "#94A3B8",
        },
        borderc: "rgba(148,163,184,0.15)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #2563EB, #D4AF37)",
      },
      boxShadow: {
        "glow-blue": "0 0 40px rgba(56, 189, 248, 0.15)",
        "glow-gold": "0 0 40px rgba(212, 175, 55, 0.15)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
