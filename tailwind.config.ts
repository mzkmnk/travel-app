/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({addUtilities}){
      addUtilities({
      })
    }),
  ]
}

