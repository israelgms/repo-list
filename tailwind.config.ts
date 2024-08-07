import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#32C0C6",
        },
        info: {
          DEFAULT: "#8C8C8C",
          LIGHT: "#F3F3F5",
        },
        secondary: {
          DEFAULT: "hsl(var(--foreground-rgb))",
          LIGHT: "#FFFFFF",
          DARK: "#000000",
        },
        neutral: {
          DEFAULT: "#616161",
        },
        divider: "#E3E6E9",
      },
    },
  },
  plugins: [],
};
export default config;
