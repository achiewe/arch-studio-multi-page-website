import React from "react";
import paramourJpg from "../../../../public/assets/home/mobile/image-hero-paramour.jpg";

export default function ProjectParamourInfo(): JSX.Element {
  const styleBack = {
    backgroundImage: `url(${paramourJpg.src})`,
  };

  return (
    <div
      className="w-full h-[560px] flex bg-heroPattern bg-no-repeat bg-cover px-[32px] justify-center items-center flex-col gap-[83px]"
      style={styleBack}
    >
      <div className="w-full flex flex-col gap-[11px] items-start">
        <h1 className="text-[48px] text-[#FFF] font-bold leading-[48px] tracking-[-1.2px]">
          Project Paramour
        </h1>
      </div>
    </div>
  );
}
