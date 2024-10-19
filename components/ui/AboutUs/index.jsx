import { Line, Sticker1 } from "@/public/Icons"
import { Button } from "../Button"
import { AboutCommunity } from "@/public/Images/AboutCommunity"

export const AboutUs = () => {
    return (
        <div className="mx-12 mb-12 md:mx-24 md:mb-24">
            <div className="mt-[100px]">
                <div className="my-5 flex flex-col gap-1">
                    <p className=" text-lightBlue">ABOUT THE EVENT</p>
                    <p className="mb-8 text-2xl text-white">Level Up your Wellness. A Tech-powered Health Initiative.</p>
                    <Line />
                </div>

                <div className="flex mt10 flex-col  md:flex-row row-span-2 text-white gap-4 items-stretch">
                    <div className="w-full md:w-[45%] flex flex-col items-stretch">
                        <p className=" leading-8 font-light tracking-wider">Health-n-tech fest is a community-driven health awareness event by the MLSA Unilag student community designed to bridge the knowledge gap in healthcare for Nigerians. The goal of the event is to help sensitize members of community on crucial healthcare topics. We invite students and individuals from within and without our community to join us.</p>
                        <div className=" mt-auto">
                            <Button text="Secure a Seat" link="https://forms.office.com/r/8d1hxssB26"/>
                        </div>
                    </div>

                    <div className="w-full md:w-[55%] mt-12 md:mt-5 flex flex-wrap columns-2 gap-8 gap-y-8 justify-center child:bg-infoCard_bg child:border-infoCard_border child:rounded-md child:border-r-2 child:border-b-2 child:py-6 child:px-8 child:max-w-[260px] child:text-center">
                        <p><span className="!text-yellow">First-hand Knowledge </span>from experts and healthcare professionals</p>
                        <p><span className="!text-yellow">Engaging Panel Discussions </span>tackling challenges in Nigerian healthcare sector</p>
                        <p><span className="!text-yellow">Knowledge Hubs </span> providing resources and information from wellness providers</p>
                        <p><span className="!text-yellow">Networking Opportunities </span> to foster collaborations and shared growth</p>
                    </div>
                </div>
            </div>

            <div className="mt-[100px]">
                <div className="my-5 flex flex-col gap-1">
                    <p className=" text-lightBlue">ABOUT THE EVENT</p>
                    <p className="mb-8 text-2xl text-white">Level Up your Wellness. A Tech-powered Health Initiative.</p>
                    <Line />
                </div>
                <div className="flex mt-12 flex-col md:flex-row row-span-2 text-white gap-8">
                    <div className="w-full md:w-[50%] border-yellow border-r-6 border-b-6 rounded-tr-sm rounded-bl-sm ">
                        <div className="relative w-[35%] md:w-fit -mt-[60px] z-50 -ml-[60px]">
                            <Sticker1 />
                        </div>
                        <div className="-z-10 -mt-[40px] md:-mt-[60px]">
                            <AboutCommunity />
                        </div>
                    </div>
                    <div className="w-full md:w-[45%] flex flex-col items-stretch">
                        <p className=" leading-8 font-light tracking-wider">MLSA UNILAG stands for Microsoft Learn Student Ambassadors, University of Lagos. We are a community of students passionate about learning and innovations. We are on a mission to equip students with the latest Microsoft tech skills and empower them to lead tech innovation on campus and beyond.</p>
                        <div className=" mt-[40px]">
                            <Button text="Visit the Community" link="x.com/mlsa_unilag" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}