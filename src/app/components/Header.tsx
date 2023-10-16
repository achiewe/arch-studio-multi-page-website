import logoSvg from "../../../public/assets/logo.svg";

export default function Header(): JSX.Element {
  return (
    <header className="flex flex-row p-[32px] justify-between w-full items-center">
      <img src={logoSvg} alt="logo svg" />
    </header>
  );
}
