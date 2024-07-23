/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#172946",
        blue: "#3491FF",
        darkblue: "#0B192F",
        black: "#000000",
        white: "#ffffff"
      }
    },
  },
  plugins: [],
}

