export default function () {
  return (
    <div className="mt-[55px] flex flex-col gap-[24px] px-[32px] w-full mb-[132px]">
      <div className="w-full h-[240px] pl-[24px] pb-[23px] flex flex-col justify-end bg-DelSolMob bg-no-repeat bg-cover relative">
        <h2 className="text-[32px] text-[#FFF] font-bold leading-[40px] z-10">
          Project Del Sol
        </h2>
        <span className="text-[18px] w-[125px] cursor-pointer opacity-75 text-[#FFF] font-medium leading-[24px] z-10">
          View All Projects
        </span>
        <div className="w-full h-full bg-black opacity-50 top-0 left-0 right-0 bottom-0 absolute"></div>
      </div>
    </div>
  );
}
