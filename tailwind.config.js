/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        PraramourMob: "url('/assets/home/mobile/image-hero-paramour.jpg')",
        SmallTeamMob: "url('/assets/home/mobile/image-small-team.jpg')",
        DelSolMob: "url('/assets/portfolio/mobile/image-del-sol.jpg')",
        TowerMob: "url('/assets/portfolio/mobile/image-228b.jpg')",
        LePrototypeMob: "url('/assets/portfolio/mobile/image-prototype.jpg')",
        imageHeroMob: "url('/assets/about/mobile/image-hero.jpg')",
        imageHeroMobCont: "url('/assets/contact/mobile/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
