import { StickerGirl, StickerGuy } from "@/public/Icons/"
import { Button } from "../Button"
import StrokeText from "../StrokeText"

export const HeroSection = () => {
    return (
        <div className="m-auto py-06 w-[700px] text-white flex flex-col justify-center text-center ">
            <div className="flex fle-row gap-6 justify-center items-center">
                <div className='relative bottom-0 left-0 mt-[110px] w-[50px] h-[50px] p-2 rounded-full bg-gradient-to-r from-sticker_gradient_from to-sticker_gradient_to'>
                    <StickerGirl />
                </div>
                <div className="w-fit flex flex-col gap-3 justify-center items-center">
                    <div className="border border-white bg-yellow w-fit py-1 px-7 rounded-full text-black -rotate-6 gap-2">Introducing</div>
                    <div className="text-5xl font-semibold italic">
                        <p className="text-stroke text-fill-transperent text-background-clip ml-2 mt-6 tracking-wider -z-10">Health-n-Tech Fest</p>
                        <p className="z-10 -mt-[50px] tracking-wider ">Health-n-Tech Fest</p>
                        {/* <div>
                            <StrokeText />
                        </div> */}

                    </div>
                    <div className="flex flex-row items-end gp-1 text-center justify-center">
                        <p className="text-6xl font-extrabold">Lagos 2024</p>
                        <div className="bg-yellow w-[16px] h-[16px] mb-2 rounded-full"></div>
                    </div>

                </div>
                <div className='w-[50px] h-[50px] mb-[100px] p-2 top-0 rounded-full  bg-gradient-to-r from-sticker_gradient_from to-sticker_gradient_to'>
                    <StickerGuy />
                </div>
            </div>
            <div className="m-6 flex flex-col gap-6 justify-center items-center">
                <p className="text-sm">
                    Join us for a community-driven health awareness event by the MLSA Unilag Community! Designed to bridge the knowledge gap in healthcare, Health-n-Tech Fest Lagos brings together students and individuals to explore and discuss crucial healthcare topics. Be a part of this transformative experience and help build a healthier Nigeria.
                </p>
                <Button className="w-fit" text="Get your Ticket"/>
            </div>
        </div>
    )
}