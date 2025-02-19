/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
    },
    colors: {
      "background-light": "#FFFFFF", // ライトモードの背景色
      "background-dark": "#121212", // ダークモードの背景色
      accent: {
        DEFAULT: "#6A1B9A", // ライトモードの強調色 (紫)
        dark: "#AB47BC", // ダークモードの強調色 (明るい紫)
      },
      "secondary-accent": {
        DEFAULT: "#2E7D32", // ライトモードの強調色のバリエーション (緑)
        dark: "#66BB6A", // ダークモードの強調色のバリエーション (明るい緑)
      },
      support: {
        DEFAULT: "#7A7D7E", // ライトモードの補助色
        dark: "#B0BEC5", // ダークモードの補助色
      },
      dark: {
        "background-light": "#121212", // ダークモードでのライト背景色
        "background-dark": "#FFFFFF", // ダークモードでのダーク背景色
      },
    },
    fontFamily: {
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
    },
    backgroundImage: {
      // "tutorial-bg": "url('/public/bg-graphic.jpg')",
    },
    extend: {},
  },
  plugins: [],
};
