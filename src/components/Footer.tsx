import Image from "next/image";
import React from "react";
import Logo from "@/assets/logos/logo-white-2.png";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  const getYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-[#003C3C] font-montserrat">
      <div className="container mx-auto px-2 w-full divide-y text-white">
        <div className="grid grid-cols-3 gap-4 py-16 pb-20">
          <div className="flex items-start">
            <Image src={Logo} alt="logo" width={250} height={80} />
          </div>
          {/* <div></div> */}
          <div>
            <h4 className="mb-5 font-semibold text-xl">Contact Us</h4>
            <ul className="space-y-2">
              <li className="grid grid-cols-[24px_auto] gap-2">
                <EnvelopeIcon className="size-5" />
                <span>info@mantabaylimited.com</span>
              </li>
              <li className="grid grid-cols-[24px_auto] gap-2">
                <PhoneIcon className="size-5" />
                <span>+234 812 696 5999</span>
              </li>
              <li className="grid grid-cols-[24px_auto] gap-2">
                <MapIcon className="size-5" />
                <span>
                  67 Tombia Ext., GRA Phase II, Port Harcourt, Rivers State,
                  Nigeria.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-5 font-semibold text-xl">Socials</h4>
            <div className="flex items-center gap-4">
              <a
                href=""
                target="_blank"
                className="size-[51px] rounded-full bg-primary text-lg flex items-center justify-center hover:text-primary-200 transition-colors duration-300"
              >
                <BsTwitterX />
              </a>
              <a
                href=""
                target="_blank"
                className="size-[51px] rounded-full bg-primary text-lg flex items-center justify-center hover:text-primary-200 transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href=""
                target="_blank"
                className="size-[51px] rounded-full bg-primary text-lg flex items-center justify-center hover:text-primary-200 transition-colors duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href=""
                target="_blank"
                className="size-[51px] rounded-full bg-primary text-lg flex items-center justify-center hover:text-primary-200 transition-colors duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="py-8 flex w-full justify-between items-center text-sm">
          <p>&copy; MantaBay Limited {getYear}</p>

          <p>
            Built by{" "}
            <a href="https://linkedin.com/in/mason10396" target="_blank">
              Onidev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
