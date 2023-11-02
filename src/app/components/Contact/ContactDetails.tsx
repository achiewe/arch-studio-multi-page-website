import ArrowSvg from "../../../../public/assets/icons/icon-arrow.svg";

export default function ContactDetails() {
  return (
    <div className="flex flex-col w-full px-[32px] items-start gap-[68px] mb-[71px] md:gap-[49px] md:px-0 md:w-[573px] md:mb-[226px]">
      <div className="w-[65px] h-[1px] bg-[#C8CCD8]"></div>
      <div className="w-full flex flex-col gap-[40px] items-start md:gap-[42px]">
        <h1 className="text-[48px] text-[#1B1D23] font-bold leading-[52px] tracking-[ -1.714px] md:text-[72px] md:leading-[64px] md:tracking-[-2px] md:w-[300px]">
          Contact Details
        </h1>
        <div className="flex flex-col gap-[43px] md:flex-row md:justify-between md:gap-0 md:items-end md:w-full">
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
          <a
            href="https://www.google.com/maps/d/u/0/edit?hl=ka&hl=ka&mid=1Hgtk7qgV72Wb_UTDGQW0uOFXD4dK3jQ&ll=27.69884242157973%2C-87.30593082193158&z=5"
            target="_blank"
            className="flex flex-row items-center gap-[48px] text-[18px] text-[#1B1D23] font-bold leading-[25px] cursor-pointer w-[200px]"
          >
            View on Map <img src={ArrowSvg.src} alt="arrow svg" />
          </a>
        </div>

        <div className="flex flex-col gap-[43px] md:flex-row md:justify-between md:gap-0 md:items-end md:w-full">
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
          <a
            href="https://www.google.com/maps/d/u/0/edit?hl=ka&hl=ka&mid=1Hgtk7qgV72Wb_UTDGQW0uOFXD4dK3jQ&ll=27.69884242157973%2C-87.30593082193158&z=5"
            target="_blank"
            className="flex flex-row items-center gap-[48px] text-[18px] text-[#1B1D23] font-bold leading-[25px] cursor-pointer w-[200px]"
          >
            View on Map <img src={ArrowSvg.src} alt="arrow svg" />
          </a>
        </div>
      </div>
    </div>
  );
}
