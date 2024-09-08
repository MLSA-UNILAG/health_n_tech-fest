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
        <div className="!bg-white w-full px-10 md:px-24 pb-24 py-8">
            <div className="flex flex-col gap-1">
                <p className=" text-lightPurple text-center">OUR LINE OF SPEAKERS</p>
                <div className="flex flex-row gap-3">
                    <p className="mb-8 text-2xl text-black">Trailblazing Experts. Inspiring Voices Leading the Health-Tech Revolution.</p>
                    <div className="relative w-[170px] -mt-[20px]"><Sticker2 /></div>
                </div>
                <div >
                    {/* <Line2 />  */} 
                    <svg className="w-full h-5" viewBox="0 0 900 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="1.34888" x2="120" y2="1.34888" stroke="#FAA944" stroke-width="2" />
                        <line opacity="0.25" x1="120" y1="1.84888" x2="900" y2="1.84888" stroke="#9E67E5" />
                    </svg>
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
