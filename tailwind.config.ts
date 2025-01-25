import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#277C78",
        yellow: "#F2CDAC",
        cyan: "#82C9D7",
        navy: "#626070",
        red: "#C94736",
        purple: "#826CB0",
        otherPurple: "#AF81BA",
        otherTurquoise: "#597C7C",
        otehrBrown: "#93674F",
        otherMagenta: "#934F6F",
        otherBlue: "#3F82B2",
        otherNavyGrey: "#97A0AC",
        otherArmyGreen: "#7F9161",
        otherGold: "#CAB361",
        otherOrange: "#BE6C49",
      },
      spacing: {
        "50": "4px",
        "100": "8px",
        "150": "12px",
        "200": "16px",
        "250": "20px",
        "300": "24px",
        "400": "32px",
        "500": "40px",
      },
    },
  },
  plugins: [],
} satisfies Config;
