// about info function

export default function AboutInfo() {
  return (
    <div className="w-full flex flex-col gap-[20px] mb-[76px] md:justify-center md:items-center md:mb-[200px] lg:w-[970px] xl:w-[1110px] lg:items-start">
      <div className="flex flex-col md:w-[573px] md:relative md:justify-center md:items-center lg:w-[635px]">
        <div className="w-full h-[240px] flex items-end justify-start bg-imageHeroMob bg-no-repeat bg-cover relative md:bg-imageHeroTab md:w-[573px] md:h-[720px] lg:w-[635px] lg:h-[720px] lg:bg-imageHeroDesk">
          <div className="w-full h-full bg-black opacity-50 top-0 left-0 right-0 bottom-0 absolute"></div>
          <div className="w-[345px] h-[45px] bg-[#FFFFFF] z-10 flex md:hidden "></div>
        </div>
        <div className="flex w-full px-[32px] flex-col gap-[21px] md:absolute md:bg-[#FFFFFF] md:w-[572px] md:bottom-0 md:left-[155px] md:pt-[88px] md:px-[59px] md:gap-[38px] lg:gap-[50px] lg:w-[793px] lg:pt-[160px] lg:pl-[183px] lg:left-[450px] lg:pr-[165px]">
          <h3 className="hidden md:flex absolute text-[120px] text-[#EEEFF4] font-bold leading-[200px] tracking-[-3px] top-[-90px] right-[60px] lg:left-[0px] lg:text-[250px] lg:leading-[200px] lg:tracking-[-5px]">
            About
          </h3>
          <hr className="hidden md:flex w-[65px] h-[1px] border-none bg-[#C8CCD8] mb-[35px]" />
          <h1 className="text-[48px] text-[#1B1D23] font-bold leading-[52px] tracking-[-1.2px] md:text-[72px] md:leading-[64px]">
            Your team of professionals
          </h1>
          <p className="text-[18px] text-[#60636D] font-medium leading-[24px]">
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
          </p>
        </div>
      </div>
    </div>
  );
}
