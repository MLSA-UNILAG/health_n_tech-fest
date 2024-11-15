import { Line2, Sticker2 } from "@/public/Icons";
import { ProfileCard } from "../ProfileCard";
import { Speaker1 } from "@/public/Images/Speaker1";
import { Button } from "../Button";

const speakers = [
  {
    name: "Theresa Emily",
    description: "Professor of Medicine at Harvard University",
    image: <Speaker1 />,
  },
  {
    name: "Theresa Emily",
    description: "Professor of Medicine at Harvard University",
    image: <Speaker1 />,
  },
  {
    name: "Theresa Emily",
    description: "Professor of Medicine at Harvard University",
    image: <Speaker1 />,
  },
  {
    name: "Theresa Emily",
    description: "Professor of Medicine at Harvard University",
    image: <Speaker1 />,
  },
  {
    name: "Theresa Emily",
    description: "Professor of Medicine at Harvard University",
    image: <Speaker1 />,
  },
];

export const Speakers = () => {
  return (
    <div className="!bg-white w-full px-10 md:px-24 pb-24 py-8 ">
      <div className="flex flex-col gap-1">
        <p className=" text-lightPurple text-center">OUR LINE OF SPEAKERS</p>
        <div className="flex flex-row justify-center gap-3">
          <p className="mb-6 text-2xl text-black text-center">
            Trailblazing Experts. Inspiring Voices Leading the Health-Tech
            Revolution.
          </p>
          <div className="relative w-[170px] -mt-[20px]">
            <Sticker2 />
          </div>
        </div>
        <div>
          {/* <Line2 /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-2"
            fill="none"
          >
            <path stroke="#FAA944" strokeWidth={2} d="M0 1.349h120" />
            <path stroke="#9E67E5" d="M120 1.849h780" opacity={0.25} />
          </svg>
        </div>
      </div>
      <div>
        {/* When the Speakers details is ready, comment out the "coming soon" and use this */}

        {/* <div className="flex flex-wrap my-12 columns-3 gap-4 overflow-hidden justify-center">
                    {speakers.map((speaker, index) => (
                    <div key={index} style={{ display: index < 4 ? 'block' : 'none' }}>
                        <ProfileCard key={`${speaker.name}_${index}`} speaker={speaker} />
                    </div>
                ))}
                </div> */}
        <div className="flex flex-row items-end py-20 my-5 gap-4 text-center justify-center bg-primary">
          <p className="text-6xl text-white font-extrabold">
            COMING SOON
            <span className="text-yellow font-extrabold text-6xl ml-2">!</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          text="View all Speakers"
          link="/speakers"
          className="!text-white"
        />
      </div>
    </div>
  );
};
