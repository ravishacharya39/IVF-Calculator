/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "light-orange":"#D75555",
        "Dark-orange":"#F48267"
      },
    },
  },
  plugins: [],
}

