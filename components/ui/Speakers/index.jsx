import { Line2, Sticker2 } from "@/public/Icons"
import { ProfileCard } from "../ProfileCard"
import { Speaker1 } from "@/public/Images/Speaker1"
import { Button } from "../Button"

const speakers = [
    {
        name: 'Theresa Emily',
        description: 'Professor of Medicine at Harvard University',
        image: <Speaker1 />,
    },
    {
        name: 'Theresa Emily',
        description: 'Professor of Medicine at Harvard University',
        image: <Speaker1 />,
    },
    {
        name: 'Theresa Emily',
        description: 'Professor of Medicine at Harvard University',
        image: <Speaker1 />,
    },
    {
        name: 'Theresa Emily',
        description: 'Professor of Medicine at Harvard University',
        image: <Speaker1 />,
    },
    {
        name: 'Theresa Emily',
        description: 'Professor of Medicine at Harvard University',
        image: <Speaker1 />,
    },

]

export const Speakers = () => {
    return (
        <div className="!bg-white w-full px-24 pb-24 py-8 ">
            <div className="flex flex-col gap-1 5 ">
                <p className=" text-lightPurple">OUR LINE OF SPEAKERS</p>
                <div className="flex flex-row gap-3">
                    <p className="mb-8 text-2xl text-black">Trailblazing Experts. Inspiring Voices Leading the Health-Tech Revolution.</p>
                    <div className="relative w-[80px] -mt-[20px]"><Sticker2 /></div>
                </div>
                <div >
                    <Line2 />
                </div>
            </div>
            <div className="flex flex-wrap my-12 columns-3 gap-4 overflow-hidden justify-center">
                {speakers.map((speaker, index) => (
                    <div key={index} style={{ display: index < 4 ? 'block' : 'none' }}>
                        <ProfileCard key={`${speaker.name}_${index}`} speaker={speaker} />
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <Button text="View all Speakers" className="!text-white" />
            </div>
        </div>
    )
}
