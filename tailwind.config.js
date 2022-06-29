/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.js", "./src/**/*.jsx"],
  theme: {
    // screens: {
    //     "sm": "480px",
    //     "md": "768px",
    //     "sm": "480px",
    // },
    extend: {
      colors: {
        "steelBlue": "steelblue",
        "grayishColor": "#f4f4f4",
        "defaultBtn": "#000"
      }
    },
  },
  plugins: [],
}
