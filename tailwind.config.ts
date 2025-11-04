import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2563eb", // classic blue
          dark: "#1e40af",
          light: "#93c5fd",
        }
      },
      boxShadow: {
        soft: "0 8px 20px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      }
    },
  },
  plugins: [],
} satisfies Config;
