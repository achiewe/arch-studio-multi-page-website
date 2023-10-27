"use client";

import { setOpenFrame } from "@/features/OpenBurgerSlice";
import { RootState } from "@/features/store";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export default function BurgerMenu(): JSX.Element {
  //burger menu where is main pages of site
  const openFrame = useSelector(
    (store: RootState) => store.openFrame.openFrame
  );
  const dispatch = useDispatch();
  return (
    <div
      className={`w-[343px] h-[235px] bg-[#EEEFF4] overflow-x-hidden transition-all duration-1000 z-20 ${
        openFrame ? "absolute" : "fixed"
      } top-[96px] ${
        openFrame ? "right-0" : "right-[-100%]"
      } px-[48px] py-[39px] flex justify-start items-start flex-col gap-[17px]`}
    >
      <Link
        href="/Portfolio"
        className="text-[#1B1D23] font-bold text-[32px] leading-[40px]"
        onClick={() => {
          dispatch(setOpenFrame());
        }}
      >
        Portfolio
      </Link>
      <Link
        href="/AboutUs"
        className="text-[#1B1D23] font-bold text-[32px] leading-[40px]"
        onClick={() => {
          dispatch(setOpenFrame());
        }}
      >
        About Us
      </Link>
      <Link
        href="/Contact"
        className="text-[#1B1D23] font-bold text-[32px] leading-[40px]"
        onClick={() => {
          dispatch(setOpenFrame());
        }}
      >
        Contact
      </Link>
    </div>
  );
}
