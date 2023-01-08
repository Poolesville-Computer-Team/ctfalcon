/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./src/**/*.{js,ts}"],
    theme: {
        extend: {
            colors: {
                primary: "#171925",
                "text-theme": "#FFFFFF",
                secondary: "#353746",
                accent: "#EFAE04",
            },
            boxShadow: {
                glow: "0px 4px 30px rgba(255, 255, 255, 0.17);",
            },
        },
    },
    plugins: [],
};
