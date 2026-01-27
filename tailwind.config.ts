import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          50: "#FDF2F2",
          600: "#DE2C18",
          800: "#9E1C15",
        },
        orange: {
          400: "#FF8A4C",
        },
      },
    },
  },
  plugins: [],
};

export default config;
