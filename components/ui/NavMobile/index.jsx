"use client"
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { MLSALogo } from "@/public/Icons/MLSALogo"
import Link from "next/link";
import { Button } from "../Button";

const navbar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const NavMobile = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div expand="md" className="NavMobile md:hidden flex flex-row justify-between items-center mx-8 my-6">
            <div>
                <Link href='/' className="logo flex flex-row gap-4">
                    <MLSALogo />
                    <div>
                        <div className="w-[150px] text-[14px] text-white">Microsoft Learn Student Ambassador</div>
                        <div className="text-lightBlue text-[12px]">University of Lagos</div>
                    </div>
                </Link>
            </div>

            {/* Hamburger Menu Icon */}
            { isOpen ? <div></div> : <Hamburger toggled={isOpen} size={20} toggle={setOpen} style={{ color: "white", backgroundColor: "white" }}/> }
            
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                        custom={innerHeight}
                        className="fixed top-0 left-0 h-fit w-[100%]  bg-primary  from-neutral-800 via-neutral-950 to-neutral-700 z-50"
                    >
                        {/* Close Button on the Right */}
                        <div className="flex justify-end p-5">
                            <Hamburger toggled={isOpen} size={20} toggle={setOpen} style={{ color: "white" }} />
                        </div>

                        <motion.div className="background" variants={navbar} />

                        {/* Navebar Content */}
                        <div className="Navbar navbar text-white flex flex-col gap-6 text-[16px] items-center py-5">
                            <div>
                                <Link href='/speakers' className=" hover:bg-white hover:p-2 hover:text-primary hover:rounded-md hover:font-bold">
                                    Speakers
                                </Link>
                            </div>
                            <div>
                                <Link href='/schedule' className=" hover:bg-white hover:p-2 hover:text-primary hover:rounded-md hover:font-bold">
                                    Schedule
                                </Link>
                            </div>
                            {/* <div>
                                <Link href='/team' className=" hover:bg-white hover:p-2 hover:text-primary hover:rounded-md hover:font-bold">
                                    Team
                                </Link>
                            </div> */}
                            <div>
                                <Link href='https://forms.office.com/pages/responsepage.aspx?id=oBzDhDusrk6tEVGdgCM-b2rhIZyiDIRMq6jycZEfjHlUQVBNQjhMNE5JOVc2M1VJNFBWNFE2NldSUS4u&fbclid=PAZXh0bgNhZW0CMTEAAaaeJBkoaJY6NwMu78Lm7hVFAnZeFvqVR0oi7YXwVxh7_BZ-skseUk1CbQk_aem_m_RBIdal6XM_1G3pMNKNug&route=shorturl' className=" hover:bg-white hover:p-2 hover:text-primary hover:rounded-md hover:font-bold">
                                    Become a Volunteer
                                </Link>
                            </div>
                            <div>
                                {/* <Link href='#' className=" hover:bg-white hover:p-2 hover:text-primary hover:rounded-md hover:font-bold">
                                <div className="bg-bl flex flex-row gap-3 p-2 rounded-lg w-fit border-wh border-solid border">
                                    <p>RSVP</p>
                                    <ArrowRightIcon />
                                </div>
                            </Link> */}
                                <Button text="RSVP" link="https://forms.office.com/r/8d1hxssB26" />
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>


        </div >
    );
};

// const menu = () => {
//     <SideBar />
// }

export default NavMobile;