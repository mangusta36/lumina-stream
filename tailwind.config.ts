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
        primary: "#a855f7",    // Purple 500
        secondary: "#7c3aed",  // Violet 600
        background: "#0b0a15", // Deep Dark
        surface: "#161527",    // Dark Purple Card
      },
      backgroundImage: {
        'gradient-main': 'radial-gradient(circle at 50% -20%, #1e3a8a 0%, #000000 80%)',
      }
    },
  },
  plugins: [],
};
export default config;
