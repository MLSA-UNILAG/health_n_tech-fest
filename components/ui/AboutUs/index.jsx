import { Line, Sticker1 } from "@/public/Icons"
import { Button } from "../Button"
import { AboutCommunity } from "@/public/Images/AboutCommunity"

export const AboutUs = () => {
    return (
        <div className="mx-8 mb-24 ">
            <div className="mt-[100px]">
                <div className="my-5 flex flex-col gap-1 text-center">
                    <p className="text-lightBlue">ABOUT THE EVENT</p>
                    <p className="mb-8 text-2xl text-white">Level Up your Wellness. A Tech-powered Health Initiative.</p>
                    {/* <Line /> */}
                    <svg className="w-full h-2" viewBox="0 0 800 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="64" y2="0.5" stroke="#FAA944" />
                        <line opacity="0.25" x1="64" y1="0.5" x2="800" y2="0.5" stroke="#FFFAEB" />
                    </svg>
                </div>

                <div className="flex mt-10 flex-col md:flex-row row-span-2 text-white gap-4 md:gap-0 items-stretch justify-center">
                    <div className="md:w-[45%] flex flex-col items-stretch text-justify">
                        <p className=" leading-8 font-light tracking-wider">Health-n-tech fest is a community-driven health awareness event by the MLSA Unilag student community designed to bridge the knowledge gap in healthcare for Nigerians. The goal of the event is to help sensitize members of community on crucial healthcare topics. We invite students and individuals from within and without our community to join us.</p>
                        <div className="m-auto my-3">
                            <Button text="Secure a Seat" />
                        </div>
                    </div>

                    <div className="md:w-[55%]  flex flex-wrap columns-2 gap-8 gap-y-8 justify-center child:bg-infoCard_bg child:border-infoCard_border child:rounded-md child:border-r-2 child:border-b-2 child:py-6 child:px-8 child:max-w-[260px] child:text-center">
                        <p><span className="!text-yellow">First-hand Knowledge </span>from experts and healthcare professionals</p>
                        <p><span className="!text-yellow">Engaging Panel Discussions </span>tackling challenges in Nigerian healthcare sector</p>
                        <p><span className="!text-yellow">Knowledge Hubs </span> providing resources and information from wellness providers</p>
                        <p><span className="!text-yellow">Networking Opportunities </span> to foster collaborations and shared growth</p>
                    </div>
                </div>
            </div>

            <div className="mt-[100px]">
                <div className="my-5 flex flex-col gap-1 text-center">
                    <p className=" text-lightBlue">ABOUT THE EVENT</p>
                    <p className="mb-8 text-2xl text-white">Level Up your Wellness. A Tech-powered Health Initiative.</p>
                    <Line />
                </div>
                <div className="flex mt-10 flex-col md:flex-row row-span-2 text-white gap-8">
                    <div className="md:w-[50%] border-yellow border-r-6 border-b-6 rounded-tr-sm rounded-bl-sm ">
                        <div className="relative -mt-[60px] z-50 -ml-[60px]">
                            <Sticker1 />
                        </div>
                        <div className="-z-10 -mt-[60px]">
                            <AboutCommunity />
                        </div>
                    </div>
                    <div className="md:w-[45%] flex flex-col items-stretch">
                        <p className="leading-8 font-light tracking-wider text-justify">MLSA UNILAG stands for Microsoft Learn Student Ambassadors, University of Lagos. We are a community of students passionate about learning and innovations. We are on a mission to equip students with the latest Microsoft tech skills and empower them to lead tech innovation on campus and beyond.</p>
                        <div className="m-auto mt-[40px]">
                            <Button text="Visit the Community" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}