/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter Bold", "cursive"],
        poppins: ["Poppins Light", "cursive"],
      },

      color: {
        white: "#FFFFFF",
        blue: "#22B5F3",
        black: "#161616",
      },
    },
    screens: {
      xs: "250px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("daisyui")],
};
