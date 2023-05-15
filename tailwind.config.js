/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 12px 50px rgba(0, 0, 0, 0.18)",
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
