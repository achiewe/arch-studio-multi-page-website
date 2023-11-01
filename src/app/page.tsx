import AboutTeam from "./components/Home/AboutTeam";
import ProjectMainDesc from "./components/Home/ProjectMainDesc";
import ProjectParamouInfo from "./components/Home/ProjectParamourInfo";
import FeaturedComp from "./components/Home/FeaturedComp";
export default function Home() {
  // home page component
  return (
    <div className="flex flex-col w-full relative md:items-center md:justify-center">
      <ProjectParamouInfo />
      <ProjectMainDesc />
      <AboutTeam />
      <FeaturedComp />
    </div>
  );
}
