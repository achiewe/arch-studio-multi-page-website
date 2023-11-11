export interface MainProj {
  PortfolioArray: {
    name: string;
    description: string;
    image: string;
    id: string;
  }[];
}

export const MainProjItem: MainProj = {
  PortfolioArray: [
    {
      id: "01",
      name: "Project Paramour",
      description:
        "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
      image: "/assets/home/desktop/image-hero-paramour.jpg",
    },
    {
      id: "02",
      name: "Seraph Station",
      description:
        "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
      image: "/assets/home/desktop/image-hero-seraph.jpg",
    },

    {
      id: "03",
      name: "Federal II Tower",
      description:
        "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
      image: "/assets/home/desktop/image-hero-federal.jpg",
    },

    {
      id: "04",
      name: "Trinity Bank Tower",
      description:
        "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
      image: "/assets/home/desktop/image-hero-trinity.jpg",
    },
  ],
};
