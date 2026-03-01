import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#7C3AED",
          light: "#8B5CF6",
          dark: "#6D28D9",
          muted: "rgba(124, 58, 237, 0.12)",
        },
        studio: {
          bg: "#FFFFFF",
          surface: "#FFFFFF",
          border: "#E5E5E5",
          muted: "#44403C",
          fg: "#0A0A0A",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "16px",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(124, 58, 237, 0.2)",
        "glow-sm": "0 0 20px -5px rgba(124, 58, 237, 0.15)",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "gradient-float": {
          "0%, 100%": { opacity: "0.5", transform: "translate(0, 0) scale(1)" },
          "33%": { opacity: "0.8", transform: "translate(2%, -1%) scale(1.02)" },
          "66%": { opacity: "0.6", transform: "translate(-1%, 2%) scale(0.98)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "line-shine": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        shimmer: "shimmer 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 15s ease infinite",
        "gradient-float": "gradient-float 20s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "line-shine": "line-shine 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
