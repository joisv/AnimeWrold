/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#165FA7',
        secondary: '#F8F9FA',
        bgdark: '#202427',
        darksecondary: '#343a40',
        darkmedium: '#343A41',
        footer: '#135394'
      },
    },
  },
  plugins: [],
}

