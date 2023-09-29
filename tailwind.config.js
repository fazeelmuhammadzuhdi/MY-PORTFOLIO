/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0369a1",
        dark: "#0f172a",
      },
    },
  },

  plugins: [],
};
