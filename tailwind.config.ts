import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
    },
    extend: {
      colors: {
        // 基本カラー
        white: "#FFFFFF",
        black: "#121212",
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        // アクセントカラー
        blue: {
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
        },
        // ブランドカラー
        primary: {
          DEFAULT: "#6A1B9A", // メインカラー（紫）
          light: "#AB47BC",
          dark: "#4A148C",
        },
        secondary: {
          DEFAULT: "#2E7D32", // サブカラー（緑）
          light: "#66BB6A",
          dark: "#1B5E20",
        },
      },
      backgroundColor: {
        light: "#FFFFFF",
        dark: "#121212",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
      fontFamily: {
        sans: [
          "var(--font-noto-sans-jp)",
          "var(--font-inter)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
    backgroundImage: {
      // "tutorial-bg": "url('/public/bg-graphic.jpg')",
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config
