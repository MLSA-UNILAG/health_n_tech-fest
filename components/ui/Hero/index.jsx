import { StickerGirl, StickerGuy } from "@/public/Icons"
import { Button } from "../Button"
import StrokeText from "../StrokeText"

export const HeroSection = () => {
    return (
        <div className="m-auto py-6 w-full first-letter: text-white flex flex-col justify-center text-center ">
            <div className="flex gap-6 md:gap-0 justify-center w-11/12 md:w-2/3 m-auto">
                
                <div className="flex flex-col flex-1 gap-3 justify-center items-center relative">
                    <div className='absolute bottom-0 -left-14 mt-[110px] p-2 w-[50px] h-[50px] md:w-[80px] md:h-[80px] xl:w-[100px] xl:h-[100px] rounded-full bg-gradient-to-r from-sticker_gradient_from to-sticker_gradient_to hidden md:flex items-center justify-center'>
                        <StickerGirl />
                    </div>
                    <div className="absolute bottom-1/2 left-0 translate-y-1/3">
                    </div>
                    <div className="border border-white bg-yellow w-fit py-1 px-7 rounded-full text-black -rotate-6">Introducing</div>
                    <h2 className="my-6 w-full">
                        <div className="relative h-20 text-4xl sm:text-5xl lg:text-6xl md:mb-3">
                            <p className="absolute inset-0 z-10 italic font-medium">Health-n-Tech Fest</p>
                            <p className="absolute inset-0 ml-1 mt-1 text-stroke text-[#303b6e] z-0 italic font-medium">Health-n-Tech Fest</p>
                        </div>
                        <span className="text-4xl md:text-5xl font-extrabold">Lagos 2024</span><span className="bg-yellow w-3 h-3 md:w-4 md:h-4 inline-block rounded-full"></span>
                    </h2>
                    <div className="absolute top-0 right-0 md:-right-12 translate-y-0">
                        <div className='w-[50px] h-[50px] sm:h-[70px] sm:w-[70px] xl:h-[100px] xl:w-[100px] mb-[100px] top-0 rounded-full p-2 bg-gradient-to-r from-sticker_gradient_from to-sticker_gradient_to flex items-center justify-center'>
                            <StickerGuy />
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-6 md:m-auto flex flex-col gap-6 justify-center items-center w-11/12 md:w-2/3">
                <p className="text-md leading-8">
                    Join us for a community-driven health awareness event by the MLSA Unilag Community! Designed to bridge the knowledge gap in healthcare, Health-n-Tech Fest Lagos brings together students and individuals to explore and discuss crucial healthcare topics. Be a part of this transformative experience and help build a healthier Nigeria.
                </p>
                <Button className="w-fit" text="Get your Ticket"/>
            </div>
        </div>
    )
}