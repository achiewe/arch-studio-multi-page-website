/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroPattern:
          "url('/public/assets/home/mobile/image-hero-paramour.jpg')",
      },
    },
  },
  plugins: [],
};
