import { AboutUs } from "@/components/ui/AboutUs";
import { Carousel } from "@/components/ui/Carousel";
import CountdownTimer from "@/components/ui/Countdown";
import { HeroSection } from "@/components/ui/Hero";
import { Speakers } from "@/components/ui/Speakers";
import { Volunteers } from "@/components/ui/Volunteers";
import CalendarIcon from "@/components/svgs/CalendarIcon";
import ClockIcon from "@/components/svgs/ClockIcon";
import LocationIcon from "@/components/svgs/LocationIcon";

export default function Home() {
  return (
    <main className="">
      <div className=" ">
        <HeroSection />
      </div>

      <div className="mt-5 md:mt-20 mx-24">
        {/* <Countdown /> */}
        <CountdownTimer targetDate="2024-11-23T00:00:00" />
      </div>

      <div className="border border-br rounded-md flex flex-col gap-4 md:flex-row justify-between text-center p-8 items-center text-white w-4/5 m-auto mt-8">
        <div className="flex flex-col justify-center items-center max-w-[300px] gap-3">
          <CalendarIcon />
          <p className=" ">Saturday, November 22rd, 2024</p>
        </div>

        <div className="flex flex-col justify-center items-center max-w-[300px] gap-3">
          <LocationIcon />
          <p className=" ">Lecture Theatre, Faculty of Social Sciences, University of Lagos.</p>
        </div>

        <div className="flex flex-col justify-center items-center max-w-[300px] gap-3">
          <ClockIcon />
          <p className="" >10:00 am - 4:00 pm</p>
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
