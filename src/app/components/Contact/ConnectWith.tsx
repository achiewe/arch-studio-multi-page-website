"use client";

import arrowSvg from "../../../../public/assets/icons/icon-white-arrow.svg";
import { userSchema } from "./EmailModule";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";

//interface of inputs

interface TypeEmailMessage {
  name: string;
  email: string;
  message: string;
}

export default function ConnectWith() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeEmailMessage>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data: object) => {
    console.log(data);
  };
  return (
    <div className="w-full px-[32px] gap-[42px] flex flex-col mb-[132px] md:gap-[60px] md:px-0 md:w-[572px] lg:flex-row lg:w-[970px] xl:w-[1110px] lg:gap-[30px]">
      <h2 className="text-[48px] text-[#1B1D23] w-[200px] font-bold leading-[52px] tracking-[-1.714px]  md:text-[72px] md:leading-[64px] md:tracking-[-2px] md:w-[473px]">
        Connect with us
      </h2>
      <form
        className="w-full flex flex-col gap-[43px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col w-full gap-[21px] relative">
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className={`pl-[34px] text-[20px] text-[#1B1D23] font-bold leading-normal
            } tracking-[ -0.312px] opacity-50 ${
              errors.name ? "placeholder-[#DF5656]" : "placeholder-[#C8CCD8]}"
            } outline-none`}
          />
          <p className="absolute right-0 text-[16px] text-[#DF5656] font-bold leading-normal tracking-[-0.281px]">
            {errors.name?.message}
          </p>
          <hr
            className={`h-[1px] border-none ${
              errors.name ? "bg-[#DF5656]" : "bg-[#1B1D23]"
            }`}
          />
        </div>

        <div className="flex flex-col w-full gap-[21px] relative">
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className={`pl-[34px] text-[20px] text-[#1B1D23] font-bold leading-normal tracking-[ -0.312px] opacity-50 ${
              errors.email ? "placeholder-[#DF5656]" : "placeholder-[#C8CCD8]}"
            } outline-none`}
          />
          <p className="absolute right-0 text-[16px] text-[#DF5656] font-bold leading-normal tracking-[-0.281px]">
            {errors.email?.message}
          </p>
          <hr
            className={`h-[1px] border-none ${
              errors.email ? "bg-[#DF5656]" : "bg-[#1B1D23]"
            }`}
          />
        </div>
        <div className="w-full flex flex-col items-end">
          <div className="flex flex-col w-full gap-[21px] relative">
            <input
              type="text"
              placeholder="Message"
              {...register("message")}
              className={`pl-[34px] text-[20px] text-[#1B1D23] font-bold leading-normal tracking-[ -0.312px] opacity-50 ${
                errors.message
                  ? "placeholder-[#DF5656]"
                  : "placeholder-[#C8CCD8]}"
              } outline-none`}
            />
            <p className="absolute right-0 text-[16px] text-[#DF5656] font-bold leading-normal tracking-[-0.281px]">
              {errors.message?.message}
            </p>
            <hr
              className={`h-[1px] border-none ${
                errors.message ? "bg-[#DF5656]" : "bg-[#1B1D23]"
              }`}
            />
          </div>
          <button
            type="submit"
            className="w-[80px] h-[80px] bg-[#1B1D23] flex justify-center items-center cursor-pointer hover:bg-[#60636D]"
          >
            <Image src={arrowSvg} alt="arrow image" />
          </button>
        </div>
      </form>
    </div>
  );
}
