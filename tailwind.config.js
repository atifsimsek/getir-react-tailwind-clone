/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-color": "#4c3398",
        "primary-brand-color": "#5d3ebc",
        "secondary-brand-color": "#7849f7",
        "yellow-brand-color": "#ffd300"
      },
      boxShadow: {
        "category-shadow": "0 2px 16px rgb(88, 63, 181, 0.08)",
      },
      backgroundImage: {
        'mobile-background': "url('https://cdn.getir.com/getirweb-images/common/illustration/doodle.png')",
      }
    },
  },
  plugins: [],
}
