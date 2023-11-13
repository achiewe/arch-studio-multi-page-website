export default function AboutProj() {
  return (
    <div className="w-full flex flex-col gap-[20px] mb-[76px] md:relative md:justify-center md:items-center md:mb-[200px] lg:w-[1110px] lg:items-start">
      <div className="flex flex-col md:w-[573px] md:relative md:justify-center md:items-center lg:w-[635px]">
        <div className="w-full h-[240px] flex items-end justify-start bg-imageHeroMobCont bg-no-repeat bg-cover relative md:bg-imageHeroTabCont md:w-[573px] md:h-[720px] lg:w-[635px] lg:h-[720px] lg:bg-imageHeroDeskCont">
          <div className="w-full h-full bg-black opacity-50 top-0 left-0 right-0 bottom-0 absolute"></div>
          <div className="w-[345px] h-[45px] bg-[#FFFFFF] z-10 flex md:hidden"></div>
        </div>
        <div className="flex w-full px-[32px] flex-col gap-[21px] md:absolute md:bg-[#FFFFFF] md:w-[572px] md:bottom-0 md:left-[155px] md:pt-[88px] md:px-[59px] md:gap-[38px] lg:gap-[50px] lg:w-[793px] lg:pt-[160px] lg:pl-[183px] lg:left-[450px] lg:pr-[165px]">
          <h3 className="hidden md:flex absolute text-[120px] text-[#EEEFF4] font-bold leading-[200px] tracking-[-3px] top-[-90px] right-[60px] lg:left-[-200px] lg:text-[250px] lg:leading-[200px] lg:tracking-[-5px]">
            Contact
          </h3>
          <hr className="hidden md:flex w-[65px] h-[1px] border-none bg-[#C8CCD8] mb-[35px]" />
          <h1 className="text-[48px] text-[#1B1D23] font-bold leading-[52px] tracking-[-1.2px] md:text-[72px] md:leading-[64px]">
            Tell us about your project
          </h1>
          <p className="text-[18px] text-[#60636D] font-medium leading-[24px]">
            We’d love to hear more about your project. Please, leave a message
            below or give us a call. We have two offices, one in Texas and one
            in Tennessee. If you find yourself nearby, come say hello!
          </p>
        </div>
      </div>
    </div>
  );
}
