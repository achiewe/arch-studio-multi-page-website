import AboutInfo from "../components/About/AboutInfo";
import Heritage from "../components/About/Heritage";
import Leaders from "../components/About/Leaders";

// about us main component
export default function aboutUs() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <AboutInfo />
      <Heritage />
      <Leaders />
    </div>
  );
}
