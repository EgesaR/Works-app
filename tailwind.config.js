/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/flowbite/**/*.js", "./renderer/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin'), require('daisyui')],

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

