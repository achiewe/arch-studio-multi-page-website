// create paramcomponent for home page
import paramourJpg from "../../../../public/assets/home/mobile/image-hero-paramour.jpg";

export default function ProjectParamourInfo(): JSX.Element {
  return (
    <div className={`w-full h-[560px] flex bg-heroPattern`}>
      <img src={paramourJpg.src} alt="paramour jpg" />
    </div>
  );
}
