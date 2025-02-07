import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        styleShadowCircle:
          "-5px -5px 5px hsla(0, 0%, 100%, .1), 10px 10px 10px rgba(0, 0, 0, .4), inset -5px -5px 5px hsla(0, 0%, 100%, .2), inset 10px 10px 10px rgba(0, 0, 0, .4)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darckBg: "rgb(30,35,54)",
        tGrayAll: "rgb(169,177,214)",
        borderDarck: "rgb(27,30,46)",
        textActive: "rgb(61,185,201)",
        textGreen: "rgb(126,231,135)",
        textLightRed: "rgb(255,162,139)",
        textPurpLeLight: "rgb(147,154,255)",
        textYelowLight: "rgb(255,220,139)",
        colorInputB: "rgb(96,165,250)",
        animation: {
          rotate: "rotateAnimation 2s ease infinite",
        },
        keyframes: {
          rotateAnimation: {
            "0%": {
              transform: "rotate(0deg)",
            },

            "10%": {
              transform: "rotate(14deg)",
            },

            "20%": {
              transform: "rotate(-8deg)",
            },

            "30%": {
              transform: "rotate(14deg)",
            },

            " 40%": {
              transform: " rotate(-4deg)",
            },

            "50%": {
              transform: "rotate(10deg)",
            },

            "60%": {
              transform: " rotate(0deg)",
            },
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
