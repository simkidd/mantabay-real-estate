import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      dmsans: ['"DM Sans", sans-serif'],
      inter: ['"Inter", sans-serif'],
      roboto: ['"Roboto", sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#256252",
          // 100: "",
          // 200: "",
          300: "#2E846D",
        },
        background: "transparent",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
