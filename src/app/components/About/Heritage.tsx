import heritageSvg from "../../../../public/assets/about/desktop/image-heritage.jpg";
import Image from "next/image";

// hertiage component for about rout

export default function Heritage() {
  return (
    <div className="flex flex-col w-full px-[32px] items-start gap-[68px] mb-[112px] md:gap-[49px] md:w-[573px] md:px-0 md:items-start md:justify-center md:mb-[231px] lg:w-[970px] xl:w-[1110px] lg:flex-row lg:items-start lg:justify-between lg:mb-[200px]">
      <hr className="w-[65px] h-[1px] bg-[#C8CCD8] lg:hidden  border-none" />
      <div className="flex flex-col lg:gap-[82px]">
        <hr className="hidden lg:flex w-[65px] h-[1px] bg-[#C8CCD8] border-none" />
        <div className="w-full flex flex-col gap-[22px] items-start md:gap-[62px]">
          <h1 className="text-[48px] text-[#1B1D23] font-bold leading-[52px] tracking-[ -1.714px] md:text-[72px] md:leading-[64px] md:tracking-[-2px] md:w-[300px]">
            Our Heritage
          </h1>
          <div className="flex flex-col gap-[20px]">
            <p className="text-[18px] text-[#60636D] font-medium leading-[24px] lg:w-[445px]">
              Founded in 2007, we started as a trio of architects. Our
              complimentary skills and relentless attention to detail turned
              Arch into one of the most sought after boutique firms in the
              country.
            </p>
            <p className="text-[18px] text-[#60636D] font-medium leading-[24px] lg:w-[445px]">
              Speciliazing in Urban Design allowed us to focus on creating
              exceptional structures that live in harmony with their
              surroundings. We consider every detail from every surrounding
              element to inform our designs.
            </p>
            <p className="text-[18px] text-[#60636D] font-medium leading-[24px] lg:w-[445px]">
              Our small team of world-class professionals provides input on
              every project.
            </p>
          </div>
        </div>
      </div>
      <Image src={heritageSvg} alt="heritage svg" className="hidden lg:flex" />
    </div>
  );
}
