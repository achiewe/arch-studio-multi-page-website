/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        PraramourMob: "url('/assets/home/mobile/image-hero-paramour.jpg')",
        SmallTeamMob: "url('/assets/home/mobile/image=small-team.jpg')",
      },
    },
  },
  plugins: [],
};
