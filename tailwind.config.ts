import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darckBg: "rgb(30,35,54)",
        tGrayAll: "rgb(169,177,214)",//#aab2d7
        borderDarck: "rgb(27,30,46)",
      },
    },
  },
  plugins: [],
} satisfies Config;
