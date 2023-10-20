"use client";

import { RootState } from "@/features/store";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function BurgerMenu(): JSX.Element {
  const openFrame = useSelector(
    (store: RootState) => store.openFrame.openFrame
  );
  return (
    <div
      className={`w-[343px] h-[235px] bg-[#EEEFF4] z-[1] overflow-x-hidden transition-all duration-1000 ${
        openFrame ? "absolute" : "fixed"
      } top-[96px] ${
        openFrame ? "right-0" : "right-[-100%]"
      } px-[48px] py-[39px] flex justify-start items-start flex-col gap-[17px]`}
    >
      <Link
        href="/Portfolio"
        className="text-[#1B1D23] font-bold text-[32px] leading-[40px]"
      >
        Portfolio
      </Link>
      <Link
        href="/About us"
        className="text-[#1B1D23] font-bold text-[32px] leading-[40px]"
      >
        About Us
      </Link>
      <Link
        href="/Contact"
        className="text-[#1B1D23] font-bold text-[32px] leading-[40px]"
      >
        Contact
      </Link>
    </div>
  );
}
