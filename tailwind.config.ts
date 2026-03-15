import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-red": "#D52626",
        "secondary-orange": "#E04823",
        "primary-dark-blue": "#154F8F",
        "neutral-white": "#FFFFFF",
        "light-gray": "#F7F7F7",
        "body-text": "#333333",
        "accent-gold": "#FFC700",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
