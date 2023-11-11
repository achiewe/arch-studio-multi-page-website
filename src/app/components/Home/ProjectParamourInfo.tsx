import React from "react";
import arrowWhiteSvg from "../../../../public/assets/icons/icon-white-arrow.svg";
import Image from "next/image";
import Link from "next/link";

export default function ProjectParamourInfo(): JSX.Element {
  return (
    <div className="w-full h-[560px] flex bg-no-repeat bg-cover px-[32px] justify-center items-start flex-col gap-[83px] relative bg-PraramourMob mb-[141px] md:w-[573px] md:h-[720px] md:bg-ParamourTab md:px-[58px] md:gap-[41px] md:mb-[248px] lg:hidden">
      <div className="w-full flex flex-col gap-[11px] items-start md:gap-[10px]">
        <h1 className="text-[48px] text-[#FFF] font-bold leading-[48px] tracking-[-1.2px] z-10 md:text-[96px] md:leading-[80px]">
          Project Paramour
        </h1>
        <p className="text-[18px] text-[#FFF] font-medium leading-[24px] z-10">
          Project made for an art museum near Southwest London. Project Paramour
          is a statement of bold, modern architecture.
        </p>
      </div>
      <Link
        href="/Portfolio"
        className="w-[252px] cursor-pointer h-[72px] flex justify-center items-center gap-[24px] bg-[#1B1D23] text-[#FFFFFF] text-[18px] font-bold leading-[25px] z-10 hover:bg-[#60636D]"
      >
        See Our Portfolio
        <Image src={arrowWhiteSvg.src} alt="arrow svg" />
      </Link>
      <div className="absolute w-full h-full bg-black opacity-50 top-0 left-0"></div>
    </div>
  );
}
