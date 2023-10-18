import archSvg from "../../../public/assets/Group 21.svg";

export default function Footer(): JSX.Element {
  return (
    <div className="bg-[#EEEFF4] w-full flex flex-col items-center gap-[33px]">
      <img src={archSvg.src} alt="arch svg" className="mt-[-60px]" />
    </div>
  );
}
