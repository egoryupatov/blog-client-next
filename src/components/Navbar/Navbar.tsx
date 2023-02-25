import Image from "next/image";
import Button from "@/components/Button/Button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_layout">
        <div className="navbar_layout_left">
          <Link href="/">
            <Image src="/logo.svg" width={56} height={20} alt="blog logo" />
          </Link>
        </div>
        <div className="navbar_layout_middle"></div>
        <div className="navbar_layout_right">
          <Image src="/bell.svg" width={28} height={28} alt="notifications" />
          <Button text={"Войти"} style={"btn_login"} />
        </div>
      </div>
    </nav>
  );
}
