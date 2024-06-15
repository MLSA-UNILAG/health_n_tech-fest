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

            <div className="flex flex-col justify-center items-center mt-6">
                <div className="child:w-[250px]">
                    <div className=" -rotate-6">
                        <Community1Blur className="blur-sm  -z-10" />
                    </div>
                    <div className="relative -mt-[170px] ml-2 z-30">
                        <Community1 />
                    </div>
                </div>
                <div className="flex flex-row justify-between gap-12 -mt-10">
                    <div className="child:w-[250px]">
                        <div className=" -rotate-6">
                            <Community3Blur className="blur-sm  -z-40" />
                        </div>
                        <div className="relative -mt-[170px] ml-2 z-40">
                            <Community3 />
                        </div>
                    </div>
                    <div className="child:w-[250px]">
                        <div className=" -rotate-6">
                            <Community2Blur className=" -z-30" />
                        </div>
                        <div className="relative -mt-[170px] ml-2 z-10">
                            <Community2 />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-12">
                <Button text="Become a Volunteer" className="!text-white" />
            </div>
        </div>
    )
}
