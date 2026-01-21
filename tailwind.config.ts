import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["var(--font-jakarta)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        gold: "#FFD700",
        dark: "#0B0E14",
      }
    },
  },
  plugins: [],
};
export default config;