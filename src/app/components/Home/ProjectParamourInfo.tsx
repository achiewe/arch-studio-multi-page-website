import React from "react";
import paramourJpg from "../../../../public/assets/home/mobile/image-hero-paramour.jpg";

export default function ProjectParamourInfo(): JSX.Element {
  const styleBack = {
    backgroundImage: `url(${paramourJpg.src})`,
  };

  return (
    <div
      className="w-full h-[560px] flex bg-heroPattern bg-no-repeat bg-cover"
      style={styleBack}
    ></div>
  );
}
