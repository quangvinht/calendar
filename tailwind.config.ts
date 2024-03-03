import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-blue": "#5684AE",
        "dark-blue": "#0F4C81",

        "title-color": "#E4F6ED",

        "light-orange": "#FFE4C8",
        "dark-orange": "#F9BE81",
        "blind-orange": "#f8bd80",
      },
    },
  },
  plugins: [],
};
export default config;
