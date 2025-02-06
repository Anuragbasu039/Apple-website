import Image from "next/image";
import HeroSection from "../app/Components/herosection";
import IphoneSilder from "@/app/Components/iphone silder";
import Ad from "@/app/Components/Ads";
export default function Home() {
  return (
    <div >
      <HeroSection />
      <IphoneSilder />
      <Ad />
    </div>
  );
}
