/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter Bold", 'cursive'],
        poppins: ["Poppins Light", 'cursive'],
      },

      color: {
        'white': '#FFFFFF',
        'blue': '#22B5F3',
        'black': '#161616',
      }
    },
  },
  plugins: [require("daisyui")],
}