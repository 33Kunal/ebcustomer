/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A5D1A",
        secondary: "#65B741",
        tertiary: "#EEEDEB",
        lightGreen: "#A7D397",
        buttonBlue: "#0A1D56",
        subtext: "#bfd8af",
      },
    },
  },
  plugins: [],
}

