import Link from "next/link";

export default function FeaturedComp() {
  return (
    <div className="w-full px-[32px] flex items-start  flex-col gap-[43px] ">
      <h1 className="text-[48px] text-[#1B1D23] font-bold leading-[52px] tracking-[-1.714px]">
        Featured
      </h1>
      <div className="w-full flex flex-col gap-[24px] items-center justify-center">
        <div className="w-full h-[240px] pl-[24px] pb-[23px] flex flex-col justify-end bg-DelSolMob bg-no-repeat bg-cover relative">
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
        </div>

        <div className="w-full h-[240px] pl-[24px] pb-[23px] flex flex-col justify-end bg-TowerMob bg-no-repeat bg-cover relative">
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
        </div>

        <div className="w-full h-[240px] pl-[24px] pb-[23px] flex flex-col justify-end bg-LePrototypeMob bg-no-repeat bg-cover relative">
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
        </div>
      </div>
    </div>
  );
}
