"use client";

import logoSvg from "../../../public/assets/logo.svg";
import burgerSvg from "../../../public/assets/icons/icon-hamburger.svg";
import { useDispatch } from "react-redux";
import { setOpenFrame } from "@/features/OpenBurgerSlice";

export default function Header(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <header className="flex flex-row p-[32px] justify-between w-full items-center ">
      <img
        src={logoSvg.src}
        alt="logo svg"
        className="w-[77px] h-[32.028px] cursor-pointer"
      />
      <img
        className="cursor-pointer"
        src={burgerSvg.src}
        alt="burger svg"
        onClick={() => {
          dispatch(setOpenFrame());
        }}
      />
    </header>
  );
}
