import arrowSvg from "../../../../public/assets/icons/icon-white-arrow.svg";

export default function ConnectWith() {
  return (
    <div className="w-full px-[32px] gap-[42px] flex flex-col mb-[132px]">
      <h2 className="text-[48px] text-[#1B1D23] w-[200px] font-bold leading-[52px] tracking-[-1.714px]">
        Connect with us
      </h2>
      <form className="w-full flex flex-col gap-[43px]">
        <div className="flex flex-col w-full gap-[21px]">
          <input
            type="text"
            placeholder="Name"
            className="pl-[34px] text-[20px] text-[#1B1D23] font-bold leading-normal tracking-[ -0.312px] placeholder-[#C8CCD8] outline-none"
          />
          <hr className="h-[1px] border-none bg-[#1B1D23]" />
        </div>

        <div className="flex flex-col w-full gap-[21px]">
          <input
            type="email"
            placeholder="Email"
            className="pl-[34px] text-[20px] text-[#1B1D23] font-bold leading-normal tracking-[ -0.312px] placeholder-[#C8CCD8] outline-none"
          />
          <hr className="h-[1px] border-none bg-[#1B1D23]" />
        </div>
        <div className="w-full flex flex-col items-end">
          <div className="flex flex-col w-full gap-[21px]">
            <input
              type="text"
              placeholder="Message"
              className="pl-[34px] text-[20px] text-[#1B1D23] font-bold leading-normal tracking-[ -0.312px] placeholder-[#C8CCD8] outline-none"
            />
            <hr className="h-[1px] border-none bg-[#1B1D23]" />
          </div>
          <button
            type="submit"
            className="w-[80px] h-[80px] bg-[#1B1D23] flex justify-center items-center cursor-pointer"
          >
            <img src={arrowSvg.src} />
          </button>
        </div>
      </form>
    </div>
  );
}
