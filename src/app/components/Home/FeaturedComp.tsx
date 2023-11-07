import Link from "next/link";
import arrowSvg from "../../../../public/assets/icons/icon-white-arrow.svg";

export default function FeaturedComp() {
  return (
    <div className="w-full px-[32px] flex items-start  flex-col gap-[43px] mb-[132px] md:w-[573px] md:px-0 md:gap-[85px] lg:w-[1110px] lg:gap-[64px]">
      <div className="w-full flex flex-row justify-between items-center">
        <h1 className="text-[48px] text-[#1B1D23] font-bold leading-[52px] tracking-[-1.714px] md:text-[72px] md:leading-[64px] md:tracking-[-2px]">
          Featured
        </h1>
        <Link
          href="/Portfolio"
          className=" hidden md:flex flex-row items-center justify-center gap-[24px] w-[169px] h-[72px] bg-[#1B1D23] text-[#FFF] text-[18px] leading-[25px] font-bold"
        >
          See All
          <img src={arrowSvg.src} alt="arrow svg" />
        </Link>
      </div>
      <div className="w-full flex flex-col gap-[24px] items-center justify-center lg:flex-row lg:gap-[30px]">
        <div className="w-full h-[240px] pl-[24px] pb-[23px] flex flex-col justify-end bg-DelSolMob bg-no-repeat bg-cover relative md:bg-DelSolTab lg:h-[560px] lg:bg-DelSolDesk">
          <h2 className="text-[32px] text-[#FFF] font-bold leading-[40px] z-10">
            Project Del Sol
          </h2>
          <Link
            href="/Portfolio"
            className="text-[18px] w-[125px] cursor-pointer opacity-75 text-[#FFF] font-medium leading-[24px] z-10"
          >
            View All Projects
          </Link>
          <div className="w-full h-full bg-black opacity-50 top-0 left-0 right-0 bottom-0 absolute"></div>
          <h3 className="hidden md:flex absolute opacity-50 text-[250px] tracking-[-5px] leading-[200px] text-[#FFFFFF] right-[16px] top-[28px] lg:right-[-15px] lg:top-[45px]">
            1
          </h3>
        </div>

        <div className="w-full h-[240px] pl-[24px] pb-[23px] flex flex-col justify-end bg-TowerMob bg-no-repeat bg-cover relative md:bg-TowerTab lg:h-[560px] lg:bg-TowerDesk">
          <h2 className="text-[32px] text-[#FFF] font-bold leading-[40px] z-10">
            228B Tower
          </h2>
          <Link
            href="/Portfolio"
            className="text-[18px] w-[125px]  cursor-pointer opacity-75 text-[#FFF] font-medium leading-[24px] z-10"
          >
            View All Projects
          </Link>
          <div className="w-full h-full bg-black opacity-50 top-0 left-0 right-0 bottom-0 absolute"></div>
          <h3 className="hidden md:flex absolute opacity-50 text-[250px] tracking-[-5px] leading-[200px] text-[#FFFFFF] right-[16px] top-[28px] lg:right-[-15px] lg:top-[45px]">
            2
          </h3>
        </div>

        <div className="w-full h-[240px] pl-[24px] pb-[23px] flex flex-col justify-end bg-LePrototypeMob bg-no-repeat bg-cover relative md:bg-LePrototypeTab lg:h-[560px] lg:bg-LePrototypeDesk">
          <h2 className="text-[32px] text-[#FFF] font-bold leading-[40px] z-10">
            Le Prototype
          </h2>
          <Link
            href="/Portfolio"
            className="text-[18px] w-[125px]  cursor-pointer opacity-75 text-[#FFF] font-medium leading-[24px] z-10"
          >
            View All Projects
          </Link>
          <div className="w-full h-full bg-black opacity-50 top-0 left-0 right-0 bottom-0 absolute"></div>
          <h3 className="hidden md:flex absolute opacity-50 text-[250px] tracking-[-5px] leading-[200px] text-[#FFFFFF] right-[16px] top-[28px] lg:right-[-20px] lg:top-[45px]">
            3
          </h3>
        </div>
      </div>
    </div>
  );
}
