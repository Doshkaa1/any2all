import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 2px 10px rgba(0, 0, 0, 0.08)", // Custom "soft" shadow
      },
    },
  },
  plugins: [],
};

export default config;
