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
        primary: '#14000c',
        secondary: '#3b0123',
        offWhite: '#e0e0e0'
      },
      flex: {
        '10': '10'
      }
    },
  },
  plugins: [],
};
