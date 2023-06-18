import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#24044E",
        dawn: "#420956",
        moonlight: "#A6C7F9",
      },
    },
  },
  plugins: [],
} satisfies Config;
