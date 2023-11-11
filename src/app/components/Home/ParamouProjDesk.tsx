"use client";

import Link from "next/link";
import arrowWhiteSvg from "../../../../public/assets/icons/icon-white-arrow.svg";
import { useEffect, useState } from "react";
import { MainProjItem } from "./PramouDeskData";

interface ItemProps {
  name: string;
  description: string;
  image: string;
  id: string;
}

export default function ParamouProjDesk() {
  const firstItem = MainProjItem.PortfolioArray.filter(
    (item) => item.id === "01"
  );

  const [itemNum, setItemNum] = useState<string>("01");
  const [project, setProject] = useState<ItemProps[]>(firstItem);

  useEffect(() => {
    const filterProj = () => {
      return MainProjItem.PortfolioArray.filter((item) => item.id === itemNum);
    };
    setProject(filterProj());
  }, [itemNum]);
  console.log(project, "mevar");

  return (
    <div className="w-full h-[560px] flex bg-no-repeat bg-cover px-[32px] justify-center items-start flex-col gap-[83px] relative bg-PraramourMob mb-[141px] md:w-[573px] md:h-[720px] md:bg-ParamourTab md:px-[58px] md:gap-[41px] md:mb-[248px] lg:w-[1110px] lg:px-[190px]">
      <div className="w-full flex flex-col gap-[11px] items-start md:gap-[10px]">
        <h1 className="text-[48px] text-[#FFF] font-bold leading-[48px] tracking-[-1.2px] z-10 md:text-[96px] md:leading-[80px] lg:w-[544px]">
          Project Paramour
        </h1>
        <p className="text-[18px] text-[#FFF] font-medium leading-[24px] z-10 lg:w-[445px]">
          Project made for an art museum near Southwest London. Project Paramour
          is a statement of bold, modern architecture.
        </p>
      </div>
      <Link
        href="/Portfolio"
        className="w-[252px] cursor-pointer h-[72px] flex justify-center items-center gap-[24px] bg-[#1B1D23] text-[#FFFFFF] text-[18px] font-bold leading-[25px] z-10 hover:bg-[#60636D]"
      >
        See Our Portfolio
        <img src={arrowWhiteSvg.src} alt="arrow svg" />
      </Link>
      <div className="absolute w-full h-full bg-black opacity-50 top-0 left-0"></div>
      <div className="absolute w-[320px] flex flex-row items-center z-20 left-[-80px] bottom-0">
        <button
          className="flex items-center justify-center bg-[#FFFFFF] text-[#7D828F] w-[80px] h-[80px] cursor-pointer"
          value={"01"}
          onClick={() => {
            setItemNum("01");
          }}
        >
          01
        </button>
        <button
          className="flex items-center justify-center bg-[#FFFFFF] text-[#7D828F] w-[80px] h-[80px] cursor-pointer"
          value={"02"}
          onClick={() => {
            setItemNum("02");
          }}
        >
          02
        </button>
        <button
          className="flex items-center justify-center bg-[#FFFFFF] text-[#7D828F] w-[80px] h-[80px] cursor-pointer"
          value={"03"}
          onClick={() => {
            setItemNum("03");
          }}
        >
          03
        </button>
        <button
          className="flex items-center justify-center bg-[#FFFFFF] text-[#7D828F] w-[80px] h-[80px] cursor-pointer"
          value={"04"}
          onClick={() => {
            setItemNum("04");
          }}
        >
          04
        </button>
      </div>
    </div>
  );
}
