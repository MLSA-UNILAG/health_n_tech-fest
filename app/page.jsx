import { Countdown } from "@/components/ui/Countdown";
import { HeroSection } from "@/components/ui/Hero";

export default function Home() {
  return (
    <main className="">
      <div className="my-6">
        <HeroSection />
      </div>

      <div>
        <Countdown />
      </div>
    </main>
  );
}
