"use client";

import { ArrowRightIcon } from "@/public/Icons/ArrowRight";
import { MLSALogo } from "@/public/Icons/MLSALogo";
import Link from "next/link";
import { Button } from "../Button";
import { useState } from "react";
import clsx from "clsx";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="Navbar text-white items-center mx-4 md:mx-6 md:flex md:justify-between lg:mx-10">
      <div className="flex flex-row justify-between items-center">
        <div>
          <Link href="/" className="logo flex flex-row gap-4">
            <MLSALogo />
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
        <div className="md:hidden">
          <button onClick={() => setOpen(currentState => !currentState)}>
            <svg class="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white hover:text-gray-400 focus:text-gray-400 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            { !open ? (
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
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
        <div className="hover:text-infoCard_border transition duration-300 text-center py-2 rounded">
          <Link href="/speakers">Speakers</Link>
        </div>
        <div className="hover:text-infoCard_border transition duration-300 text-center py-2 rounded">
          <Link href="#">Schedule</Link>
        </div>
        <div className="hover:text-infoCard_border transition duration-300 text-center py-2 rounded">
          <Link href="/team">Team</Link>
        </div>
        <div className="hover:text-infoCard_border transition duration-300 text-center py-2 rounded">
          <Link href="#">Become a Volunteer</Link>
        </div>
        <div className="py-2 rounded flex justify-center">
          {/* <Link href='#'>
                        <div className="bg-bl flex flex-row gap-3 p-2 rounded-lg w-fit border-wh border-solid border">
                            <p>RSVP</p>
                            <ArrowRightIcon />
                        </div>
                    </Link> */}
          <Button text="RSVP" />
        </div>
      </div>
      
    </div>
  );
};
