"use client";

import arrowSvg from "../../../../public/assets/icons/icon-white-arrow.svg";
import { userSchema } from "./EmailModule";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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
    <div className="w-full px-[32px] gap-[42px] flex flex-col mb-[132px]">
      <h2 className="text-[48px] text-[#1B1D23] w-[200px] font-bold leading-[52px] tracking-[-1.714px]">
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
            className="pl-[34px] text-[20px] text-[#1B1D23] font-bold leading-normal tracking-[ -0.312px] placeholder-[#C8CCD8] outline-none"
          />
          <p className="absolute right-0 text-[16px] text-[#DF5656] font-bold leading-normal tracking-[-0.281px]">
            {errors.name?.message}
          </p>
          <hr className="h-[1px] border-none bg-[#1B1D23]" />
        </div>

        <div className="flex flex-col w-full gap-[21px] relative">
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="pl-[34px] text-[20px] text-[#1B1D23] font-bold leading-normal tracking-[ -0.312px] placeholder-[#C8CCD8] outline-none"
          />
          <p className="absolute right-0 text-[16px] text-[#DF5656] font-bold leading-normal tracking-[-0.281px]">
            {errors.email?.message}
          </p>
          <hr className="h-[1px] border-none bg-[#1B1D23]" />
        </div>
        <div className="w-full flex flex-col items-end">
          <div className="flex flex-col w-full gap-[21px] relative">
            <input
              type="text"
              placeholder="Message"
              {...register("message")}
              className="pl-[34px] text-[20px] text-[#1B1D23] font-bold leading-normal tracking-[ -0.312px] placeholder-[#C8CCD8] outline-none"
            />
            <p className="absolute right-0 text-[16px] text-[#DF5656] font-bold leading-normal tracking-[-0.281px]">
              {errors.message?.message}
            </p>
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
