"use client";

import logoSvg from "../../../../public/assets/logo.svg";
import burgerSvg from "../../../../public/assets/icons/icon-hamburger.svg";
import { useDispatch } from "react-redux";
import { setOpenFrame } from "@/features/OpenBurgerSlice";
import Link from "next/link";

export default function Header(): JSX.Element {
  //use dispatch for redux
  const dispatch = useDispatch();

  const path = window.location.pathname;

  //header component
  return (
    <header className="flex flex-row p-[32px] justify-between w-full items-center md:gap-[79px] md:justify-center md:py-[56px] md:px-0 md:relative ">
      <div className="hidden md:absolute left-[52px] top-0 md:flex flex-col gap-[48px] items-center">
        <hr className="h-[104px] border-none bg-[#C8CCD8] w-[1px]" />
        <h4 className="text-[#C8CCD8] font-medium text-[18px] leading-[24px] tracking-[18px] rotate-90">
          {path === "/"
            ? "Home"
            : path === "/Portfolio"
            ? "PORTFOLIO"
            : path === "/AboutUs"
            ? "ABOUT US"
            : path === "/Contact"
            ? "CONTACT"
            : "Default Value"}
        </h4>
      </div>
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
