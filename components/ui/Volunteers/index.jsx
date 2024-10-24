import { Community1, Community1Blur, Community2, Community2Blur, Community3, Community3Blur } from "@/public/Images"
import { Button } from "../Button"

export const Volunteers = () => {
    return (
        <div className="!bg-white w-full px-12 pb-24 py-8 ">
            <div className="flex flex-col justify-center text-center">
                <p className=" text-lightPurple">BECOME A VOLUNTEER</p>
                <div className="flex flex-row gap-3 text-center justify-center">
                    <p className="mb-8 text-2xl text-black text-center">Join the Movement. Make an Impact and Inspire Change.</p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-6 h-fit">
                <div className=" child:w-[50%] md:child:w-[250px] flex md:block justify-center items-center">
                    <div className=" -rotate-6 relative !w-[70%] md:!w-[250px] m-auto md:relative">
                        <Community1Blur className="blur-sm  -z-10" />
                    </div>
                    <div className="absolute m-auto md:relative -mt-[10px] md:-mt-[170px] md:ml-2 z-30">
                        <Community1 />
                    </div>
                </div>
                <div className="flex flex-row justify-between gap-12 -mt-10">
                    <div className="md:child:w-[250px]">
                        <div className=" -rotate-6">
                            <Community3Blur className="blur-sm  -z-40" />
                        </div>
                        <div className="relative -mt-[100px] md:-mt-[170px] ml-2 z-40">
                            <Community3 />
                        </div>
                    </div>
                    <div className="md:child:w-[250px]">
                        <div className=" -rotate-6">
                            <Community2Blur className=" -z-30" />
                        </div>
                        <div className="relative -mt-[100px] md:-mt-[170px] ml-2 z-10">
                            <Community2 />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-12">
                <Button text="Become a Volunteer" link="https://forms.office.com/pages/responsepage.aspx?id=oBzDhDusrk6tEVGdgCM-b2rhIZyiDIRMq6jycZEfjHlUQVBNQjhMNE5JOVc2M1VJNFBWNFE2NldSUS4u&fbclid=PAZXh0bgNhZW0CMTEAAaaeJBkoaJY6NwMu78Lm7hVFAnZeFvqVR0oi7YXwVxh7_BZ-skseUk1CbQk_aem_m_RBIdal6XM_1G3pMNKNug&route=shorturl" className="!text-white" />
            </div>
        </div>
    )
}
