/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./resources/**/*.blade.php', './resources/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {}
    },
    plugins: [require('@tailwindcss/aspect-ratio')]
}
