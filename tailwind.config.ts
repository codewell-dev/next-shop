import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper:  "#f0ece4",
        paper2: "#e8e2d8",
        paper3: "#ddd6c8",
        ink:    "#1a1a1a",
        ink2:   "#333333",
        ink3:   "#666666",
        ink4:   "#999999",
        ink5:   "#cccccc",
        rust:   "#b5451b",
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        mono:    ["'IBM Plex Mono'", "'Courier New'", "monospace"],
        sans:    ["'IBM Plex Sans'", "'Helvetica Neue'", "sans-serif"],
      },
      borderWidth: {
        "3": "3px",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        ticker: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease both",
        ticker:    "ticker 38s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
