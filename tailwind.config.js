/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        hoverColor: "#26A69A",
        dark1: "#7d908e",
        dark2: "#5E6C6A",
        dark3: "#3B413C",
        light: "#FFFFFF",
        teal1: "#AAF0EF",
        teal2: "#5FBA9E",
        teal3: "#027B75"
      }
    }
  },
  plugins: [],
}

