"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/assets/logos/logo-color.png";
import { usePathname } from "next/navigation";
import { navlist } from "@/data/MenuData";
import MenuItem from "./MenuItem";
import Link from "next/link";
import MenuIcon from "@/components/MenuIcon";
import { CgClose } from "react-icons/cg";
import { XMarkIcon } from "@heroicons/react/24/solid";

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
    <div className="w-full h-[70px] md:h-[80px] lg:h-[120px] bg-white flex items-center font-montserrat shadow-sm lg:relative sticky top-0 z-10">
      <div className="container mx-auto px-2 flex items-center justify-between w-full">
        <Link href="/" className="h-[40px] md:h-[50px] lg:h-[80px]">
          <Image
            src={Logo}
            alt="logo"
            width={150}
            height={40}
            className="w-full h-full object-contain"
          />
        </Link>

        <ul className="hidden lg:flex items-center space-x-8">
          {navlist.map((item, i) => (
            <MenuItem key={i} item={item} isActive={isActive} />
          ))}
        </ul>

        <button className="lg:hidden" onClick={() => setShowMenu(true)}>
          <MenuIcon className="text-3xl" />
        </button>
        <div className="hidden lg:block"></div>
      </div>

      {/* mobile menu */}
      <ul
        className={`flex flex-col lg:hidden items-end gap-[66px] font-inter font-medium capitalize h-0 absolute top-0 w-full bg-primary-200 transition-all duration-500 ease-in-out overflow-hidden px-8 text-2xl ${
          showMenu && "left-0 py-8 h-dvh"
        }`}
      >
        <button onClick={() => setShowMenu(false)} >
          <XMarkIcon className="size-10" />
        </button>

        {navlist.map((item, i) => (
          <li
            key={i}
            className="hover:-translate-x-6 transition-all duration-[0.9s] ease-in-out"
          >
            <Link href={item.href} className={`${isActive(item.href) && 'text-blue'}`} onClick={()=> setShowMenu(false)}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
