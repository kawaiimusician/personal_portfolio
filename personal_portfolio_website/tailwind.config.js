/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#331D2C',
        secondary: '#3F2E3E',
        tertiary: '#A78295',
        offWhite: '#EFE1D1'
      },
      flex: {
        '10': '10'
      }
    },
  },
  plugins: [],
};
