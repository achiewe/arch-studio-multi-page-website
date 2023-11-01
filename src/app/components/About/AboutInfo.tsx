export default function AboutInfo() {
  return (
    <div className="w-full flex flex-col gap-[20px] mb-[76px]">
      <div className="w-full h-[240px] flex items-end justify-start bg-imageHeroMob bg-no-repeat bg-cover relative">
        <div className="w-full h-full bg-black opacity-50 top-0 left-0 right-0 bottom-0 absolute"></div>
        <div className="w-[345px] h-[45px] bg-[#FFFFFF] z-10 flex md:hidden "></div>
      </div>
      <div className="flex w-full px-[32px] flex-col gap-[21px] ">
        <h1 className="text-[48px] text-[#1B1D23] font-bold leading-[52px] tracking-[-1.2px]">
          Your team of professionals
        </h1>
        <p className="text-[18px] text-[#60636D] font-medium leading-[24px]">
          Our small team of world-class professionals will work with you every
          step of the way. Strong relationships are at the core of everything we
          do. This extends to the relationship our projects have with their
          surroundings.
        </p>
      </div>
    </div>
  );
}
