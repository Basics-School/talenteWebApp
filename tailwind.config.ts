import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-blue-black": "linear-gradient(from right, #000, #3533cd )",
      },
      skew: {
        "20": "20deg",
      },
      colors: {
        orange: "#FFB54D",
        grey: "#F0F0F0",
      },
    },
    animation: {
      gradient: "gradient 8s linear infinite",
    },
    keyframes: {
      gradient: {
        to: { "background-position": "200% center" },
      },
    },
    screens: {
      xs: "0px",
      sm: "600px",
      tab: "768px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
  },
  plugins: [],
};
export default config;
