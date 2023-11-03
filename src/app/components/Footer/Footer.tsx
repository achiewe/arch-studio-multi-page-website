import archSvg from "../../../../public/assets/Group 21.svg";
import Link from "next/link";

//add footer component
export default function Footer(): JSX.Element {
  return (
    <footer className="bg-[#EEEFF4] w-full flex flex-col items-center gap-[33px] pb-[48px] md:flex-row md:pb-0 md:w-[79%] md:gap-[40px] md:relative lg:w-[984px]">
      <img src={archSvg.src} alt="arch svg" className="mt-[-60px] md:mt-0" />
      <nav className="flex flex-col gap-[32px] items-center md:flex-row md:gap-[51px]">
        <Link
          href="/Portfolio"
          className="text-[#7D828F] font-bold text-[18px] leading-[25px]"
        >
          Portfolio
        </Link>
        <Link
          href="/AboutUs"
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
      <Link
        href="/Portfolio"
        className="w-[252px] h-[72px] bg-[#1B1D23] pt-[25px] pb-[22px] pl-[37px] pr-[32px] flex items-center gap-[24px] md:absolute md:right-[-25.5%]"
      >
        <h3 className="text-[#fff] font-bold text-[18px] leading-[25px] cursor-pointer ">
          See Our Portfolio
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
        >
          <path d="M15 1L24 10L15 19" stroke="white" stroke-width="2" />
          <path d="M0 10H24" stroke="white" stroke-width="2" />
        </svg>
      </Link>
    </footer>
  );
}
