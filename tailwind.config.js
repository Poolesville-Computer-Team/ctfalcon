/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // prettier-ignore
  theme: {
    extend: {
      colors: {
        "accent": "#EFAE04",
        "background-main": "#171925",
        "background-secondary": "#353746",
        "background-tertiary": "#3C3E48",
        "text-secondary": "#9E9FA4",
      },
    },
  },
  plugins: [],
};
