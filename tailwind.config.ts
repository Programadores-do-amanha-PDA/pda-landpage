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
    extend: {
      fontFamily: {
        "dela-gothic": ["var(--font-dela-gothic)"],
        roboto: ["var(--font-roboto)"],
        "roboto-mono": ["var(--font-roboto-mono)"],
        "ibm-plex": ["--font-ibm-plex-sans"],
      },
    },
  },
  plugins: [],
};
export default config;
