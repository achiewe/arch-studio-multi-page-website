import archSvg from "../../../public/assets/Group 21.svg";
import Link from "next/link";

export default function Footer(): JSX.Element {
  return (
    <div className="bg-[#EEEFF4] w-full flex flex-col items-center gap-[33px]">
      <img src={archSvg.src} alt="arch svg" className="mt-[-60px]" />
      <nav className="flex flex-col gap-[32px] items-center ">
        <Link
          href="/Portfolio"
          className="text-[#7D828F] font-bold text-[18px] leading-[25px]"
        >
          Portfolio
        </Link>
        <Link
          href="/About us"
          className="text-[#7D828F] font-bold text-[18px] leading-[25px]"
        >
          About Us
        </Link>
        <Link
          href="/Contact"
          className="text-[#7D828F] font-bold text-[18px] leading-[25px]"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
