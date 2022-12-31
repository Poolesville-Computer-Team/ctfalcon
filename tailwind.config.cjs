/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#171925',
        'text-theme': '#FFFFFF',
        'secondary': '#353746',
        'accent': '#EFAE04'
      },
    },
  },
  plugins: [],
}
