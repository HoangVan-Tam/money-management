/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#3A4D39",
          2: "#4F6F52",
          3: "#739072",
          4: "#ECE3CE",
        }
      }
    },
  },
  plugins: [],
}

