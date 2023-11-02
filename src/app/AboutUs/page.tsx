import AboutInfo from "../components/About/AboutInfo";
import Heritage from "../components/About/Heritage";
import Leaders from "../components/About/Leaders";

export default function () {
  return (
    <div className="w-full flex-col justify-center items-center">
      <AboutInfo />
      <Heritage />
      <Leaders />
    </div>
  );
}
