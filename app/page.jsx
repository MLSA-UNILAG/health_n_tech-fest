import { CalenderIcon, LocationIcon, ClockIcon } from "@/components/svgs";
import { AboutUs } from "@/components/ui/AboutUs";
import { Button } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import CountdownTimer, { Countdown } from "@/components/ui/Countdown";
import { HeroSection } from "@/components/ui/Hero";
import { Speakers } from "@/components/ui/Speakers";
import { Volunteers } from "@/components/ui/Volunteers";
// import { CalendarIcon, ClockIcon, Line, LocationIcon } from "@/public/Icons";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <HeroSection />
      </div>

      <div className="mt-5 md:mt-20 mx-24">
        <CountdownTimer targetDate="2024-11-23T00:00:00" />
      </div>

      <div className="border border-br rounded-md flex flex-col gap-4 md:flex-row justify-between text-center p-8 items-center text-white w-4/5 m-auto mt-8">
        <div className="flex flex-col justify-center items-center text-center md:w-1/3 gap-3">
          <CalenderIcon className="text-6xl md:w-fit" />
          <p>Saturday, November 23rd, 2024</p>
        </div>

        <div className="flex flex-col justify-center items-center text-center md:w-1/3 md:gap-3 mb-3 md:m-0">
        <LocationIcon className="text-6xl md:w-fit" />
          <p className="text-md md:text-lg m-0">Lecture Theatre, Faculty of Social Sciences, University of Lagos.</p>
        </div>

        <div className="flex flex-col justify-center items-center text-center md:w-1/3 md:gap-3">
        <ClockIcon className="text-6xl md:w-fit" />
          <p className="text-md md:text-lg m-0">10:00 am - 4:00 pm</p>
        </div>
      </div>

      <AboutUs />
      <Speakers />
      <Volunteers />
      <div className="">
        <Carousel />
      </div>
    </main>
  );
}
