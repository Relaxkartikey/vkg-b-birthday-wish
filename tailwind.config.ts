import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0c",
        charcoal: "#17171a",
        cream: "#f3ede3",
        bone: "#e9e2d3",
        clay: "#8a6a52",
        ember: "#7a2e2e",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      height: {
        dvh: "100dvh",
      },
      minHeight: {
        dvh: "100dvh",
      },
      letterSpacing: {
        tightest2: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
