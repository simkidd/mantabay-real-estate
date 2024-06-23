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
      montserrat: ['"Montserrat", sans-serif'],
      raleway: ['"Raleway", sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#256252",
          100: "#60f8cf",
          200: "#39f8c5",
          300: "#2E846D",
        },
        blue: {
          DEFAULT: "#023A7A",
        },
        background: "transparent",
      },
      backgroundImage: {
        "green-bg": "#003C3C",
        "review-bg": "url('/images/e9ed095315757a2e25bc23d85b7ee93e.jpeg')",
        "review-bg-gradient":
          "linear-gradient(180deg, rgba(21, 232, 176, 0.18) 32.06%, rgba(14, 122, 85, 0.18) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
