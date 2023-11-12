import welcomeoImg from "../../../../public/assets/home/desktop/image-welcome.jpg";
import Image from "next/image";

export default function ProjectMainDesc(): JSX.Element {
  return (
    <div className="w-full flex flex-col gap-[22px] px-[32px] items-start mb-[113px] relative md:gap-[43px] md:w-[572px] md:px-0 md:mb-[233px] lg:flex-row lg:w-[1110px] lg:items-end lg:justify-center lg:gap-[125px]">
      <h3 className="hidden md:flex absolute top-[-150px] w-[581px] text-[120px] font-bold text-[#EEEFF4] leading-[200px] tracking-[-3px] lg:text-[250px] lg:left-[-150px] lg:top-[-90px]">
        Welcome
      </h3>
      <div className="flex flex-col gap-[22px] md:gap-[43px]">
        <h1 className="text-[48px] font-bold text-[#1B1D23] leading-[52px] tracking-[-1.714px] md:text-[72px] md:leading-[64px] md:tracking-[-2px] md:w-[446px]">
          Welcome to Arch Studio
        </h1>
        <div className="flex flex-col gap-[22px] md:w-[572px] lg:w-[445px]">
          <p className="text-[18px] font-medium text-[#60636D] leading-[24px]">
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </p>
          <p className="text-[18px] font-medium text-[#60636D] leading-[24px]">
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </p>
          <p className="text-[18px] font-medium text-[#60636D] leading-[24px]">
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
      </div>
      <Image src={welcomeoImg} alt="welcome image" className="hidden lg:flex" />
    </div>
  );
}
