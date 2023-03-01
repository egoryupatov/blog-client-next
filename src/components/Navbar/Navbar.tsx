"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Login from "@/components/Login/Login";

export default function Navbar() {
  const [isModelActive, setIsModalActive] = useState(false);

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
          <button
            className="btn_login"
            onClick={() => setIsModalActive((prevState) => !prevState)}
          >
            Войти
          </button>
        </div>
        {isModelActive ? <Login /> : null}
      </div>
    </nav>
  );
}
