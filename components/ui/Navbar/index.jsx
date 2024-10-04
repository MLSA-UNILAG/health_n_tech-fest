"use client";

import { ArrowRightIcon } from "@/public/Icons/ArrowRight";
import { MLSALogo } from "@/public/Icons/MLSALogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../Button";
import { useState } from "react";
import clsx from "clsx";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  const headerLinks = [
    {
      id: 1,
      title: "Speakers",
      link: "/speakers"
    },
    {
      id: 2,
      title: "Schedule",
      link: "#"
    },
    {
      id: 3,
      title: "Team",
      link: "/team"
    },
    {
      id: 4,
      title: "Become a Volunteer",
      link: "#"
    }
  ]

  return (
    <div className="Navbar text-white items-center mx-4 md:mx-6 md:flex md:justify-between lg:mx-10">
      <div className="flex flex-row justify-between items-center">
        <div>
          <Link href="/" className="logo flex flex-row gap-4">
            {/* <MLSALogo />
            <div>
              <div className="w-[150px] text-[14px]">
                Microsoft Learn Student Ambassador
              </div>
              <div className="text-lightBlue text-[12px]">
                University of Lagos
              </div>
            </div> */}
            Home
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(currentState => !currentState)}>
            <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white hover:text-gray-400 focus:text-gray-400 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            { !open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            )}
            </svg>
          </button>
        </div>
      </div>

      <div className={clsx(
        "md:flex md:items-center md:gap-4 lg:gap-6 text-[16px]",
        open ? "flex flex-col mt-5 gap-4" : "hidden"
      )}>
        { headerLinks.map(link => (
          <div key={link.id} className="hover:text-infoCard_border transition duration-300 text-center py-2 rounded">
            <Link href={link.link}>{link.title}</Link>
          </div>
        )) }
        <div className="py-2 rounded flex justify-center">
          <Button text="RSVP" />
        </div>
      </div>
      
    </div>
  );
};
