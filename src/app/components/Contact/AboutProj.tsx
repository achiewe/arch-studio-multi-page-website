export default function AboutProj() {
  return (
    <div className="w-full flex flex-col gap-[20px] mb-[76px] md:relative md:justify-center md:items-center md:mb-[200px]">
      <div className="w-full h-[240px] flex items-end justify-start bg-imageHeroMobCont bg-no-repeat bg-cover relative md:bg-imageHeroTabCont md:w-[573px] md:h-[720px]">
        <div className="w-full h-full bg-black opacity-50 top-0 left-0 right-0 bottom-0 absolute"></div>
        <div className="w-[345px] h-[45px] bg-[#FFFFFF] z-10 flex md:hidden"></div>
      </div>
      <div className="flex w-full px-[32px] flex-col gap-[21px] md:absolute md:bg-[#FFFFFF] md:w-[572px] md:bottom-0 md:left-[155px] md:pt-[88px] md:px-[59px] md:gap-[38px]">
        <h3 className="hidden md:flex absolute text-[120px] text-[#EEEFF4] font-bold leading-[200px] tracking-[-3px] top-[-90px] right-[60px]">
          Contact
        </h3>
        <h1 className="text-[48px] text-[#1B1D23] font-bold leading-[52px] tracking-[-1.2px]">
          Tell us about your project
        </h1>
        <p className="text-[18px] text-[#60636D] font-medium leading-[24px]">
          We’d love to hear more about your project. Please, leave a message
          below or give us a call. We have two offices, one in Texas and one in
          Tennessee. If you find yourself nearby, come say hello!
        </p>
      </div>
    </div>
  );
}
