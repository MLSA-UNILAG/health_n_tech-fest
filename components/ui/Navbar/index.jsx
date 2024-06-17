import { ArrowRightIcon } from "@/public/Icons/ArrowRight"
import { MLSALogo } from "@/public/Icons/MLSALogo"
import Link from "next/link";

export const Navbar = () => {

    return (
        <div className="Navbar flex flex-row justify-between text-white items-center">
            <div>
                <Link href='/' className="logo flex flex-row gap-4">
                    <MLSALogo />
                    <div>
                        <div className="w-[150px] text-[14px]">Microsoft Learn Student Ambassador</div>
                        <div className="text-lightBlue text-[12px]">University of Lagos</div>
                    </div>
                </Link>
            </div>

            <div className="flex flex-row gap-6 text-[16px] items-center">
                <div>
                    <Link href='#'>
                        Speakers
                    </Link>
                </div>
                <div>
                    <Link href='#'>
                        Schedule
                    </Link>
                </div>
                <div>
                    <Link href='#'>
                        Team
                    </Link>
                </div>
                <div>
                    <Link href='#'>
                        Become a Volunteer
                    </Link>
                </div>
                <div>
                    <Link href='#'>
                        <div className="bg-bl flex flex-row gap-3 p-2 rounded-lg w-fit border-wh border-solid border">
                            <p>RSVP</p>
                            <ArrowRightIcon />
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}
