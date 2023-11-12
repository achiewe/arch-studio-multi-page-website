"use client";
import { useEffect, useState } from "react";
import { PortfolioItems } from "./PortfolioData";

export default function PortfComp() {
  return (
    <div className="mt-[55px] flex flex-col gap-[24px] px-[32px] w-full mb-[132px] md:mt-0 md:mb-[200px] md:px-0 justify-center items-center lg:max-w-[1110px] lg:flex-row lg:flex-wrap lg:gap-x-[30px] lg:gap-y-[32px]">
      {PortfolioItems.PortfolioArray.map((item, id) => (
        <div
          key={id}
          className="flex flex-col w-full justify-center items-center lg:flex-row lg:flex-wrap lg:gap-x-[30px] lg:gap-y-[32px] lg:w-[1110px] lg:items-start lg:justify-start"
        >
          <div
            style={{
              background: `url(${item.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className={`w-full h-[240px] pl-[24px] pb-[23px] flex flex-col justify-end bg-no-repeat bg-cover relative md:w-[573px] md:pl-[40px] md:pb-[39px] lg:w-[350px] lg:h-[560px] md:hidden`}
          >
            <h2 className="text-[32px] text-[#FFF] font-bold leading-[40px] z-10">
              {item.name}
            </h2>
            <span className="text-[18px] w-[125px] cursor-pointer opacity-75 text-[#FFF] font-medium leading-[24px] z-10">
              {item.date}
            </span>
            <div className="w-full h-full bg-black opacity-50 top-0 left-0 right-0 bottom-0 absolute"></div>
          </div>

          <div
            key={id}
            style={{
              background: `url(${item.image1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className={`hidden md:flex lg:hidden w-full h-[240px] pl-[24px] pb-[23px] flex-col justify-end bg-no-repeat bg-cover relative md:w-[573px] md:pl-[40px] md:pb-[39px] lg:w-[350px] lg:h-[560px] `}
          >
            <h2 className="text-[32px] text-[#FFF] font-bold leading-[40px] z-10">
              {item.name}
            </h2>
            <span className="text-[18px] w-[125px] cursor-pointer opacity-75 text-[#FFF] font-medium leading-[24px] z-10">
              {item.date}
            </span>
            <div className="w-full h-full bg-black opacity-50 top-0 left-0 right-0 bottom-0 absolute"></div>
          </div>

          <div
            key={id}
            style={{
              background: `url(${item.image2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className={`hidden md:hidden lg:flex w-full h-[240px] pl-[24px] pb-[23px] flex-col justify-end bg-no-repeat bg-cover relative md:w-[573px] md:pl-[40px] md:pb-[39px] lg:w-[350px] lg:h-[560px]`}
          >
            <h2 className="text-[32px] text-[#FFF] font-bold leading-[40px] z-10">
              {item.name}
            </h2>
            <span className="text-[18px] w-[125px] cursor-pointer opacity-75 text-[#FFF] font-medium leading-[24px] z-10">
              {item.date}
            </span>
            <div className="w-full h-full bg-black opacity-50 top-0 left-0 right-0 bottom-0 absolute"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
