/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: ["synthwave"],
    },
    plugins: [
        require('daisyui'),
    ],
}