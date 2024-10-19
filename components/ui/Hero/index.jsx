import { StickerGirl, StickerGuy } from "@/public/Icons"
import { Button } from "../Button"
import StrokeText from "../StrokeText"
import Link from "next/link"

export const HeroSection = () => {
    return (
        <div className="m-auto py-06 md:w-[700px] text-white flex flex-col justify-center text-center ">
            <div className="flex fle-row gap-6 justify-center items-center relative">
                <div className='absolute bottom-0 left-0 mt-[110px] w-[50px] h-[50px] p-2 rounded-full bg-gradient-to-r from-sticker_gradient_from to-sticker_gradient_to'>
                    <StickerGirl />
                </div>
                <div className="w-fit flex flex-col gap-3 justify-center items-center">
                    <div className="border border-white bg-yellow w-fit py-1 px-7 rounded-full text-black -rotate-6">Introducing</div>
                    <div className="text-5xl font-semibold italic">
                        <p className="text-stroke text-fill-transperent text-background-clip md:ml-2 smd:my-4 md:mt-6 ml-2 mt-8 tracking-wider -z-10 text-4xl md:text-5xl">Health-n-Tech Fest</p>
                        <p className="z-10 -mt-[80px] smm:-mt-[85px] smd:-mt-[60px] md:-mt-[50px] tracking-wider text-4xl md:text-5xl">Health-n-Tech Fest</p>
                    </div>
                    
                    <div className="flex flex-row items-end gp-1 text-center justify-center">
                        <p className="text-3xl md:text-6xl font-extrabold">Lagos 2024</p>
                        <div className="bg-yellow w-[12px] h-[12px] md:w-[16px] md:h-[16px] mb-1 md:mb-2 rounded-full"></div>
                    </div>

                </div>
                <div className='absolute right-0 top-0 w-[50px] h-[50px] mt-[30px] p-2 rounded-full  bg-gradient-to-r from-sticker_gradient_from to-sticker_gradient_to'>
                    <StickerGuy />
                </div>
            </div>
            <div className="my-6 md:m-6 flex flex-col gap-6 justify-center items-center">
                <p className="text-[12px] md:text-sm">
                    Join us for a community-driven health awareness event by the MLSA Unilag Community! Designed to bridge the knowledge gap in healthcare, Health-n-Tech Fest Lagos brings together students and individuals to explore and discuss crucial healthcare topics. Be a part of this transformative experience and help build a healthier Nigeria.
                </p>
                <Button className="w-fit" text="Get your Ticket" link="https://forms.office.com/r/8d1hxssB26" />
            </div>
        </div>
    )
}