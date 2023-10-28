import JakeSvg from "../../../../public/assets/about/desktop/avatar-jake.jpg";

export default function Leaders() {
  return (
    <div className="w-full flex flex-col px-[32px] gap-[55px] ">
      <div className="flex flex-col gap-[15px] w-[full]">
        <img src={JakeSvg.src} alt="Jake svg" />
        <h3 className="text-[32px] text-[#1B1D23] font-bold leading-[40px] flex flex-col">
          Jake Richards
          <span className="text-[18px] text-[#1B1D23] font-medium leading-[24px] opacity-75">
            Chief Architect
          </span>
        </h3>
      </div>
    </div>
  );
}
