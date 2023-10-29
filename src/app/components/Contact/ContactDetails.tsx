import ArrowSvg from "../../../../public/assets/icons/icon-arrow.svg";

export default function ContactDetails() {
  return (
    <div className="flex flex-col w-full px-[32px] items-start gap-[68px] mb-[71px]">
      <div className="w-[65px] h-[1px] bg-[#C8CCD8]"></div>
      <div className="w-full flex flex-col gap-[40px] items-start">
        <h1 className="text-[48px] text-[#1B1D23] font-bold leading-[52px] tracking-[ -1.714px]">
          Contact Details
        </h1>
        <div className="flex flex-col gap-[43px]">
          <div className="flex flex-col gap-[14px]">
            <p className="text-[18px] text-[#60636D] fontbold leading-[35px]">
              Main Office
            </p>
            <div className="w-[311px] h-[72px]">
              <p className="text-[18px] text-[#60636D] font-medium leading-[24px]">
                Mail : archone@mail.com
              </p>
              <p className="text-[18px] text-[#60636D] font-medium leading-[24px]">
                Address : 1892 Chenoweth Drive TN
              </p>
              <p className="text-[18px] text-[#60636D] font-medium leading-[24px]">
                Phone : 123-456-3451
              </p>
            </div>
          </div>
          <a className="flex flex-row items-center gap-[48px] text-[18px] text-[#1B1D23] font-bold leading-[25px]">
            View on Map <img src={ArrowSvg.src} alt="arrow svg" />
          </a>
        </div>

        <div className="flex flex-col gap-[43px]">
          <div className="flex flex-col gap-[14px]">
            <p className="text-[18px] text-[#60636D] fontbold leading-[35px]">
              Office II
            </p>
            <div className="w-[311px] h-[72px]">
              <p className="text-[18px] text-[#60636D] font-medium leading-[24px]">
                Mail : archtwo@mail.com
              </p>
              <p className="text-[18px] text-[#60636D] font-medium leading-[24px]">
                Address : 3399 Wines Lane TX
              </p>
              <p className="text-[18px] text-[#60636D] font-medium leading-[24px]">
                Phone : 832-123-4321
              </p>
            </div>
          </div>
          <a className="flex flex-row items-center gap-[48px] text-[18px] text-[#1B1D23] font-bold leading-[25px]">
            View on Map <img src={ArrowSvg.src} alt="arrow svg" />
          </a>
        </div>
      </div>
    </div>
  );
}
