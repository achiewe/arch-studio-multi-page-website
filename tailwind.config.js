/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        PraramourMob: "url('/assets/home/mobile/image-hero-paramour.jpg')",
        ParamourTab: "url('/assets/home/tablet/image-hero-paramour.jpg')",
        SmallTeamMob: "url('/assets/home/mobile/image-small-team.jpg')",
        SmallTeamTab: "url('/assets/home/tablet/image-small-team.jpg')",
        SmallTeamDesk: "url('/assets/home/desktop/image-small-team.jpg')",
        DelSolMob: "url('/assets/portfolio/mobile/image-del-sol.jpg')",
        DelSolTab: "url('/assets/portfolio/tablet/image-del-sol.jpg')",
        DelSolDesk: "url('/assets/portfolio/desktop/image-del-sol.jpg')",
        TowerMob: "url('/assets/portfolio/mobile/image-228b.jpg')",
        TowerTab: "url('/assets/portfolio/tablet/image-228b.jpg')",
        TowerDesk: "url('/assets/portfolio/desktop/image-228b.jpg')",
        LePrototypeMob: "url('/assets/portfolio/mobile/image-prototype.jpg')",
        LePrototypeTab: "url('/assets/portfolio/tablet/image-prototype.jpg')",
        LePrototypeDesk: "url('/assets/portfolio/desktop/image-prototype.jpg')",
        imageHeroMob: "url('/assets/about/mobile/image-hero.jpg')",
        imageHeroTab: "url('/assets/about/tablet/image-hero.jpg')",
        imageHeroDesk: "url('/assets/about/desktop/image-hero.jpg')",
        imageHeroMobCont: "url('/assets/contact/mobile/image-hero.jpg')",
        imageHeroTabCont: "url('/assets/contact/tablet/image-hero.jpg')",
        imageHeroDeskCont: "url('/assets/contact/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
