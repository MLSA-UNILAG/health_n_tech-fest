"use client";

import { ArrowRightIcon } from "@/public/Icons/ArrowRight";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import mlsaLogo from "@/public/mlsa.png";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  const headerLinks = [
    {
      id: 1,
      title: "Speakers",
      link: "/speakers",
    },
    {
      id: 2,
      title: "Schedule",
      link: "#",
    },
    {
      id: 3,
      title: "Team",
      link: "/team",
    },
    {
      id: 4,
      title: "Become a Volunteer",
      link: "#",
    },
  ];

  return (
    <div className="Navbar text-white items-center mx-4 md:mx-6 md:flex md:justify-between lg:mx-10">
      <div className="flex flex-row justify-between items-center">
        <div>
          <Link href="/" onClick={() => setOpen(false)} className="logo flex flex-row gap-4">
            <Image
              src={mlsaLogo}
              alt="MLSA Logo"
            />
            <div>
              <div className="w-[150px] text-[14px]">
                Microsoft Learn Student Ambassador
              </div>
              <div className="text-lightBlue text-[12px]">
                University of Lagos
              </div>
            </div>
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen((currentState) => !currentState)}>
            <svg
              className={`w-7 h-7 sm:w-8 sm:h-8 fill-current text-white hover:text-gray-400 focus:text-gray-400 transition-all duration-300 ease-in-out rotate-180 ${
                  open ? "rotate-90" : ""
                }`}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {!open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                ) : (
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={clsx(
          "flex md:flex-row md:opacity-100 md:h-auto md:items-center md:gap-4 lg:gap-6 text-[16px] transition-all duration-700 overflow-hidden",
          open ? "flex-col mt-5 gap-4" : "opacity-0 h-0"
        )}
      >
        {headerLinks.map((link) => (
          <div
            key={link.id}
            className="hover:text-infoCard_border transition duration-300 text-center py-2 "
          >
            <Link 
              href={link.link} 
              className={clsx(
                "relative py-3 before:h-[1px] before:bg-yellow before:absolute before:bottom-0 before:left-0 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full",
                isActive(link.link) ? "before:w-full" : "before:w-0"
              )}
              // className={`py-3 ${isActive(link.link) ? "border-b border-yellow" : ""}`}
              onClick={() => setOpen(false)}>
                {link.title}
            </Link>
          </div>
        ))}
        <div className="py-2 rounded flex justify-center">
          <Button text="RSVP" />
        </div>
      </div>
    </div>
  );
};

export const Navbar = () => {
    return (
        <div fluid className="navbar p-0" style={{ top: 0, position: "sticky", zIndex: 1 }}>
            <div className="hidden md:block">
                {/* <p>You also have a huge screen</p> */}
                <NavbarLG />
            </div>

            <div className="md:hidden">
                {/* <p>You also have a small screen</p> */}
                <NavMobile />
            </div>

        </div>
    );
}