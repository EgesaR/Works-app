/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./renderer/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "valentine",
      "aqua",
      "dracula",
      "autumn",
      "night",
    ],
  },
}

