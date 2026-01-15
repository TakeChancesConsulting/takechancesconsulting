import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        teal: {
          "primary": "#14b8a6",
          "primary-content": "#042f2e",
          "secondary": "#0d9488",
          "secondary-content": "#f0fdfa",
          "accent": "#5eead4",
          "accent-content": "#042f2e",
          "neutral": "#115e59",
          "neutral-content": "#ccfbf1",
          "base-100": "#ffffff",
          "base-200": "#f0fdfa",
          "base-300": "#ccfbf1",
          "base-content": "#134e4a",
          "info": "#06b6d4",
          "info-content": "#ecfeff",
          "success": "#10b981",
          "success-content": "#ecfdf5",
          "warning": "#f59e0b",
          "warning-content": "#78350f",
          "error": "#ef4444",
          "error-content": "#fef2f2",
        },
      },
    ],
  },
} as Config & { daisyui: object };

export default config;
