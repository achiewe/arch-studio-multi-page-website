import AboutProj from "../components/Contact/AboutProj";
import ConnectWith from "../components/Contact/ConnectWith";
import ContactDetails from "../components/Contact/ContactDetails";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

const OfficeLocation = dynamic(
  () => import("../components/Contact/OfficeLocation"),
  {
    ssr: false,
  }
);

export default function ContactComp() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <AboutProj />
      <ContactDetails />
      <OfficeLocation />
      <ConnectWith />
    </div>
  );
}
