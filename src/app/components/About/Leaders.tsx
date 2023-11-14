import JakeSvg from "../../../../public/assets/about/desktop/avatar-jake.jpg";
import SmithSvg from "../../../../public/assets/about/desktop/avatar-thompson.jpg";
import JacksonSvg from "../../../../public/assets/about/desktop/avatar-jackson.jpg";
import SimsonSvg from "../../../../public/assets/about/desktop/avatar-maria.jpg";
import Image from "next/image";

// leaders component
export default function Leaders() {
  return (
    <div className="w-full flex flex-col px-[32px] gap-[55px] mb-[171px] md:px-0 md:gap-[49px] md:w-[573px] md:mb-[239px] lg:flex-row  lg:w-[1024px] xl:w-[1110px] lg:items-start lg:gap-0 lg:justify-between lg">
      <h2 className="text-[48px] text-[#1B1D23] font-bold leading-[52px] w-[220px] md:text-[72px] md:leading-[64px] md:tracking-[-2px] md:w-[300px]">
        The Leaders
      </h2>
      <div className="w-full flex flex-col gap-[79px] md:flex-row md:flex-wrap md:gap-x-[12px] md:gap-y-[103px] lg:max-w-[730px] lg:justify-end lg:gap-y-[63px] lg:gap-x-[30px]">
        <div className="flex flex-col gap-[15px]">
          <Image
            src={JakeSvg}
            alt="Jake svg"
            className="md:w-[280px] md:h-[256px] lg:w-[350px] lg:h-[320px]"
          />
          <h3 className="text-[32px] text-[#1B1D23] font-bold leading-[40px] flex flex-col">
            Jake Richards
            <span className="text-[18px] text-[#1B1D23] font-medium leading-[24px] opacity-75">
              Chief Architect
            </span>
          </h3>
        </div>

        <div className="flex flex-col gap-[15px] w-[full]">
          <Image
            src={SmithSvg}
            alt="Jake svg"
            className="md:w-[280px] md:h-[256px] lg:w-[350px] lg:h-[320px] relative"
          />
          <div className="hidden hover:flex absolute w-[311px] h-[284px] bg-[#000000] opacity-50 justify-center items-center"></div>
          <h3 className="text-[32px] text-[#1B1D23] font-bold leading-[40px] flex flex-col">
            Thompson Smith
            <span className="text-[18px] text-[#1B1D23] font-medium leading-[24px] opacity-75">
              Head of Finance
            </span>
          </h3>
        </div>

        <div className="flex flex-col gap-[15px] w-[full]">
          <Image
            src={JacksonSvg}
            alt="Jake svg"
            className="md:w-[280px] md:h-[256px] lg:w-[350px] lg:h-[320px]"
          />
          <h3 className="text-[32px] text-[#1B1D23] font-bold leading-[40px] flex flex-col">
            Jackson Rourke
            <span className="text-[18px] text-[#1B1D23] font-medium leading-[24px] opacity-75">
              Lead Designer
            </span>
          </h3>
        </div>

        <div className="flex flex-col gap-[15px] w-[full]">
          <Image
            src={SimsonSvg}
            alt="Jake svg"
            className="md:w-[280px] md:h-[256px] lg:w-[350px] lg:h-[320px]"
          />
          <h3 className="text-[32px] text-[#1B1D23] font-bold leading-[40px] flex flex-col">
            Maria Simpson
            <span className="text-[18px] text-[#1B1D23] font-medium leading-[24px] opacity-75">
              Senior Architect
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}
