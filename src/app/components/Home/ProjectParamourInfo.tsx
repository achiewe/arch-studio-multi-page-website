import React from "react";
import paramourJpg from "../../../../public/assets/home/mobile/image-hero-paramour.jpg";
import arrowWhiteSvg from "../../../../public/assets/icons/icon-white-arrow.svg";
import Link from "next/link";

export default function ProjectParamourInfo(): JSX.Element {
  const styleBack = {
    backgroundImage: `url(${paramourJpg.src})`,
  };

  return (
    <div
      className="w-full h-[560px] flex bg-heroPattern bg-no-repeat bg-cover px-[32px] justify-center items-start flex-col gap-[83px]"
      style={styleBack}
    >
      <div className="w-full flex flex-col gap-[11px] items-start">
        <h1 className="text-[48px] text-[#FFF] font-bold leading-[48px] tracking-[-1.2px]">
          Project Paramour
        </h1>
        <p className="text-[18px] text-[#FFF] font-medium leading-[24px]">
          Project made for an art museum near Southwest London. Project Paramour
          is a statement of bold, modern architecture.
        </p>
      </div>
      <Link
        href="/Portfolio"
        className="w-[252px] cursor-pointer h-[72px] flex justify-center items-center gap-[24px] bg-[#1B1D23] text-[#FFFFFF] text-[18px] font-bold leading-[25px]"
      >
        See Our Portfolio
        <img src={arrowWhiteSvg.src} alt="arrow svg" />
      </Link>
    </div>
  );
}
