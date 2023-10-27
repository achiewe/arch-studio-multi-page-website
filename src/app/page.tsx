import ProjectMainDesc from "./components/Home/ProjectMainDesc";
import ProjectParamouInfo from "./components/Home/ProjectParamourInfo";

export default function Home() {
  // home page component
  return (
    <div className="flex flex-col w-full relative">
      <ProjectParamouInfo />
      <ProjectMainDesc />
    </div>
  );
}
