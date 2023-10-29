export default function AboutProj() {
  return (
    <div className="w-full flex flex-col gap-[20px] mb-[76px]">
      <div className="w-full h-[240px] flex items-end justify-start bg-imageHeroMobCont bg-no-repeat bg-cover relative">
        <div className="w-full h-full bg-black opacity-50 top-0 left-0 right-0 bottom-0 absolute"></div>
        <div className="w-[345px] h-[45px] bg-[#FFFFFF] z-10 flex "></div>
      </div>
      <div className="flex w-full px-[32px] flex-col gap-[21px] ">
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
