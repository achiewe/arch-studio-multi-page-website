import JakeSvg from "../../../../public/assets/about/desktop/avatar-jake.jpg";
import SmithSvg from "../../../../public/assets/about/desktop/avatar-thompson.jpg";
import JacksonSvg from "../../../../public/assets/about/desktop/avatar-jackson.jpg";
import SimsonSvg from "../../../../public/assets/about/desktop/avatar-maria.jpg";

export default function Leaders() {
  return (
    <div className="w-full flex flex-col px-[32px] gap-[55px] mb-[171px]">
      <h2 className="text-[48px] text-[#1B1D23] font-bold leading-[52px] w-[220px]">
        The Leaders
      </h2>
      <div className="w-full flex flex-col gap-[79px]">
        <div className="flex flex-col gap-[15px] w-[full]">
          <img src={JakeSvg.src} alt="Jake svg" />
          <h3 className="text-[32px] text-[#1B1D23] font-bold leading-[40px] flex flex-col">
            Jake Richards
            <span className="text-[18px] text-[#1B1D23] font-medium leading-[24px] opacity-75">
              Chief Architect
            </span>
          </h3>
        </div>

        <div className="flex flex-col gap-[15px] w-[full]">
          <img src={SmithSvg.src} alt="Jake svg" />
          <h3 className="text-[32px] text-[#1B1D23] font-bold leading-[40px] flex flex-col">
            Thompson Smith
            <span className="text-[18px] text-[#1B1D23] font-medium leading-[24px] opacity-75">
              Head of Finance
            </span>
          </h3>
        </div>

        <div className="flex flex-col gap-[15px] w-[full]">
          <img src={JacksonSvg.src} alt="Jake svg" />
          <h3 className="text-[32px] text-[#1B1D23] font-bold leading-[40px] flex flex-col">
            Jackson Rourke
            <span className="text-[18px] text-[#1B1D23] font-medium leading-[24px] opacity-75">
              Lead Designer
            </span>
          </h3>
        </div>

        <div className="flex flex-col gap-[15px] w-[full]">
          <img src={SimsonSvg.src} alt="Jake svg" />
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
