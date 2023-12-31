"use client";
import { useEffect, useState } from "react";
import { PortfolioItems } from "./PortfolioData";

// write window for responsive design
export default function PortfComp() {
  const [currentDeviceType, updateDeviceType] = useState("desktop");

  useEffect(() => {
    function handleWindowResize() {
      updateDeviceType(detectDeviceType());
    }

    // Check if window is defined before adding event listener
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleWindowResize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }
  }, []);

  function detectDeviceType() {
    // Check if window is defined before accessing innerWidth
    const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;

    if (windowWidth <= 768) {
      return "mobile";
    } else if (windowWidth <= 1024) {
      return "tablet";
    } else {
      return "desktop";
    }
  }
  return (
    <div className="mt-[55px] flex flex-col gap-[24px] px-[32px] w-full mb-[132px] md:mt-0 md:mb-[200px] md:px-0 justify-center items-center lg:max-w-[1110px] lg:flex-row lg:flex-wrap lg:gap-x-[30px] lg:gap-y-[32px]">
      {PortfolioItems.PortfolioArray.map((item, id) => {
        const imgPath =
          currentDeviceType === "mobile"
            ? item.image
            : currentDeviceType === "tablet"
            ? item.image1
            : item.image2;
        return (
          <div
            key={id}
            className="w-full h-[240px] pl-[24px] pb-[23px] flex flex-col justify-end bg-no-repeat bg-cover relative md:w-[573px] md:pl-[40px] md:pb-[39px] lg:w-[350px] lg:h-[560px]"
            style={{ backgroundImage: `url(${imgPath})` }}
          >
            <h2 className="text-[32px] text-[#FFF] font-bold leading-[40px] z-10">
              {item.name}
            </h2>
            <span className="text-[18px] w-[125px] cursor-pointer opacity-75 text-[#FFF] font-medium leading-[24px] z-10">
              {item.date}
            </span>
            <div className="w-full h-full bg-black opacity-50 top-0 left-0 right-0 bottom-0 absolute"></div>
          </div>
        );
      })}
    </div>
  );
}
