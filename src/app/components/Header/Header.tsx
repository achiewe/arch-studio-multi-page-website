"use client";

import logoSvg from "../../../../public/assets/logo.svg";
import burgerSvg from "../../../../public/assets/icons/icon-hamburger.svg";
import { useDispatch } from "react-redux";
import { setOpenFrame } from "@/features/OpenBurgerSlice";
import Link from "next/link";

export default function Header(): JSX.Element {
  //use dispatch for redux
  const dispatch = useDispatch();

  //header component
  return (
    <header className="flex flex-row p-[32px] justify-between w-full items-center md:gap-[79px] md:justify-center md:py-[56px] md:px-0 ">
      <img
        src={logoSvg.src}
        alt="logo svg"
        className="w-[77px] h-[32.028px] cursor-pointer md:w-[96px] md:h-[40px]"
      />
      <img
        className="cursor-pointer md:hidden"
        src={burgerSvg.src}
        alt="burger svg"
        onClick={() => {
          dispatch(setOpenFrame());
        }}
      />
      <div className="hidden md:flex flex-row items-center gap-[51px]">
        <Link
          href="/Portfolio"
          className="text-[#7D828F] font-bold text-[18px] leading-[25px] cursor-pointer"
        >
          Portfolio
        </Link>
        <Link
          href="/AboutUs"
          className="text-[#7D828F] font-bold text-[18px] leading-[25px] cursor-pointer"
        >
          About Us
        </Link>
        <Link
          href="/Contact"
          className="text-[#7D828F] font-bold text-[18px] leading-[25px] cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
