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
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      fontFamily: {
        sans: [
          "var(--font-noto-sans-jp)",
          "var(--font-inter)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      // コンテナの最大幅
      maxWidth: {
        'content': '72rem', // 1152px
      },

      // 共通のパディング
      padding: {
        'page': '1.5rem', // p-6
        'page-sm': '2rem', // sm:p-8
      },

      // 共通のマージン
      spacing: {
        'section': '3rem',      // mt-12
        'section-sm': '4rem',   // sm:mt-16
        'element': '1.5rem',    // mb-6
        'element-sm': '2rem',   // sm:mb-8
      },

      // 共通のボーダー
      borderColor: {
        'default': 'rgb(229 231 235)', // gray-200
        'default-dark': 'rgb(55 65 81)', // gray-700
      },

      // 共通のテキストカラー
      textColor: {
        'default': 'rgb(17 24 39)', // gray-900
        'default-dark': 'rgb(243 244 246)', // gray-100
        'muted': 'rgb(75 85 99)',   // gray-600
        'muted-dark': 'rgb(156 163 175)', // gray-400
      },

      // 共通の背景色
      backgroundColor: {
        'default': 'rgb(255 255 255)', // white
        'default-dark': 'rgb(17 24 39)', // gray-900
        'muted': 'rgb(249 250 251)',   // gray-50
        'muted-dark': 'rgb(31 41 55)', // gray-800
      },

      // 共通のトランジション
      transitionProperty: {
        'common': 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
      },
      transitionDuration: {
        'common': '200ms',
      },
    },
    backgroundImage: {
      // "tutorial-bg": "url('/public/bg-graphic.jpg')",
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config
