import { AboutUs } from "@/components/ui/AboutUs";
import { Button } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import CountdownTimer, { Countdown } from "@/components/ui/Countdown";
import { HeroSection } from "@/components/ui/Hero";
import { Speakers } from "@/components/ui/Speakers";
import { Volunteers } from "@/components/ui/Volunteers";
import { CalendarIcon, ClockIcon, Line, LocationIcon } from "@/public/Icons";

export default function Home() {
  return (
    <main className="">
      <div className="mt-[80px] mx-24">
        <HeroSection />
      </div>

      <div className="mt-[80px] mx-24">
        {/* <Countdown /> */}
        <CountdownTimer targetDate="2024-07-06T00:00:00" />
      </div>

      <div className="border border-br rounded-md flex flex-row justify-between text-center p-8 items-center text-white mx-24">
        <div className="flex flex-col justify-center items-center max-w-[300px] gap-3">
          <CalendarIcon />
          <p>Saturday, July 6th, 2024</p>
        </div>

        <div className="flex flex-col justify-center items-center max-w-[300px] gap-3">
          <LocationIcon />
          <p>Lecture Theatre, Faculty of Social Sciences, University of Lagos.</p>
        </div>

        <div className="flex flex-col justify-center items-center max-w-[300px] gap-3">
          <ClockIcon />
          <p>10:00 am - 4:00 pm</p>
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
