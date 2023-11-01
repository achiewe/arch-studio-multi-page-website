import Link from "next/link";
import arrowWhiteSvg from "../../../../public/assets/icons/icon-white-arrow.svg";

export default function AboutTeam() {
  return (
    <div className="w-full h-[560px] bg-SmallTeamMob bg-no-repeat bg-cover flex justify-center flex-col gap-[23px] items-start px-[32px] relative mb-[73px] md:w-[573px] md:bg-SmallTeamTab md:gap-[30px] md:px-[58px] md:mb-[200px]">
      <div className="absolute w-full h-full bg-black opacity-50 top-0 left-0"></div>
      <h1 className="text-[48px] text-[#FFF] font-bold leading-[48px] tracking-[-1.2px] z-10 md:text-[72px] md:leading-[64px] md:tracking-[-2px]">
        Small team, big ideas
      </h1>
      <Link
        href="/AboutUs"
        className="w-[187px] cursor-pointer h-[72px] flex justify-center items-center gap-[24px] bg-[#1B1D23] text-[#FFFFFF] text-[18px] font-bold leading-[25px] z-10"
      >
        About Us
        <img src={arrowWhiteSvg.src} alt="arrow svg" />
      </Link>
    </div>
  );
}
