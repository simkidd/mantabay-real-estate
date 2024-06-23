"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/assets/logos/logo-color.png";
import { usePathname } from "next/navigation";
import { navlist } from "@/data/MenuData";
import MenuItem from "./MenuItem";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const isActive = (href: string) => {
    return (
      href === pathname ||
      href === pathname.replace(/\/$/, "") ||
      pathname.startsWith(href + "/")
    );
  };
  return (
    <div className="w-full h-[120px] bg-white flex items-center font-montserrat border-b">
      <div className="container mx-auto px-2 flex items-center justify-between w-full">
        <Link href="/">
          <Image src={Logo} alt="logo" width={150} height={40} />
        </Link>

        <ul className="hidden lg:flex items-center space-x-8">
          {navlist.map((item, i) => (
            <MenuItem key={i} item={item} isActive={isActive} />
          ))}
        </ul>

        <div></div>
      </div>
    </div>
  );
};

export default Header;
