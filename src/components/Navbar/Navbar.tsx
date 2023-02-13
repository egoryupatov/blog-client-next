import Image from "next/image";
import Button from "@/app/Button";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_left">
        <Image src="/logo.svg" width={56} height={20} alt="blog logo" />
      </div>
      <div className="navbar_middle"></div>
      <div className="navbar_right">
        <Button text={"Войти"} />
      </div>
    </nav>
  );
}
