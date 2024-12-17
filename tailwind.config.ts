import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "dark-primary": "#2a254b",
        darkslateblue: "#2b254b",
        gray: {
          "100": "#22202e",
          "200": "rgba(0, 0, 0, 0.1)",
          "300": "rgba(255, 255, 255, 0.15)",
        },
        primary: "#4e4d93",
        "light-grey": "#f9f9f9",
        slategray: {
          "100": "#726d8d",
          "200": "#505977",
        },
        whitesmoke: "rgba(249, 249, 249, 0.15)",
      },
      spacing: {},
      fontFamily: {
        "body-medium": "Satoshi",
        "headings-h1": "'Clash Display'",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "5xl": "24px",
      "17xl": "36px",
      lg: "18px",
      xl: "20px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  plugins: [],
};

export default config;
