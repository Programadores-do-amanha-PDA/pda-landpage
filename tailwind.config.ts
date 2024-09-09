import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
    },
    extend: {
      fontFamily: {
        "dela-gothic": ["var(--font-dela-gothic)"],
        roboto: ["var(--font-roboto)"],
        "roboto-mono": ["var(--font-roboto-mono)"],
        "ibm-plex": ["var(--font-ibm-plex-sans)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
