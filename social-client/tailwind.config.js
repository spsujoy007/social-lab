/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#8AD7D1",
        "secondary": "#FFF8D6",
        "neutral": "#F7E1AE",
      }
    },
  },
  plugins: [require("daisyui")],
}

