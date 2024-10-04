import { ArrowRightIcon } from "@/public/Icons/ArrowRight"
import { MLSALogo } from "@/public/Icons/MLSALogo"
import Link from "next/link";
import { Button } from "../Button";

export const Navbar = () => {

    return (
        <div className="Navbar flex flex-row justify-between text-white items-center mx-16">
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
                    <Link href='/speakers'>
                        Speakers
                    </Link>
                </div>
                <div>
                    <Link href='/schedule'>
                        Schedule
                    </Link>
                </div>
                <div>
                    <Link href='/team'>
                        Team
                    </Link>
                </div>
                <div>
                    <Link href='https://forms.office.com/pages/responsepage.aspx?id=oBzDhDusrk6tEVGdgCM-b2rhIZyiDIRMq6jycZEfjHlUQVBNQjhMNE5JOVc2M1VJNFBWNFE2NldSUS4u&fbclid=PAZXh0bgNhZW0CMTEAAaaeJBkoaJY6NwMu78Lm7hVFAnZeFvqVR0oi7YXwVxh7_BZ-skseUk1CbQk_aem_m_RBIdal6XM_1G3pMNKNug&route=shorturl'>
                        Become a Volunteer
                    </Link>
                </div>
                <div>
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
    )
}
