import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./animations/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#050B08",
          soft: "#081410",
          surface: "#0C1B15",
          raised: "#10241C",
        },
        emerald: {
          400: "#34E2A0",
          500: "#10B981",
          600: "#0A9268",
        },
        lime: {
          300: "#D2FF6E",
          400: "#B4F34A",
          500: "#9AE12E",
        },
        teal: {
          400: "#2DD9C6",
          500: "#14B8A6",
          600: "#0E8A7D",
        },
        ink: {
          DEFAULT: "#EAF6EF",
          muted: "#9FB6AB",
          faint: "#5D7669",
        },
        line: "rgba(180, 243, 74, 0.10)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 7.5rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2rem, 3.4vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      backgroundImage: {
        "signal-gradient": "linear-gradient(120deg, #0A9268 0%, #14B8A6 45%, #B4F34A 100%)",
        "grid-pattern":
          "linear-gradient(to right, rgba(180,243,74,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(180,243,74,0.06) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(52, 226, 160, 0.35)",
        "glow-lime": "0 0 80px -10px rgba(180, 243, 74, 0.4)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 0 0 1px rgba(255,255,255,0.06) inset",
      },
      animation: {
        "spin-slow": "spin 18s linear infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
