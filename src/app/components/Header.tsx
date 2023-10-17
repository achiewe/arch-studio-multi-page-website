import logoSvg from "../../../public/assets/logo.svg";
import burgerSvg from "../../../public/assets/icons/icon-hamburger.svg";

export default function Header(): JSX.Element {
  return (
    <header className="flex flex-row p-[32px] justify-between w-full items-center">
      <img src={logoSvg.src} alt="logo svg" className="w-[77px] h-[32.028px]" />
      <img src={burgerSvg.src} alt="burger svg" />
    </header>
  );
}
