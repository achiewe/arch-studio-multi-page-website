"use client";

import logoSvg from "../../../public/assets/logo.svg";
import burgerSvg from "../../../public/assets/icons/icon-hamburger.svg";
import { useDispatch, useSelector } from "react-redux";
import { setOpenFrame } from "@/features/OpenBurgerSlice";
import { RootState } from "@/features/store";

export default function Header(): JSX.Element {
  const dispatch = useDispatch();
  const frame = useSelector((store: RootState) => store.openFrame.openFrame);

  console.log(frame);

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
