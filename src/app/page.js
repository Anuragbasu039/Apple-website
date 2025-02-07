import Image from "next/image";
import HeroSection from "../app/Components/herosection";
import IphoneSilder from "@/app/Components/iphone silder";
import Ad from "@/app/Components/Ads";
import ProductSlider from "@/app/Components/ProductSlider";
export default function Home() {
  return (
    <div >
      <HeroSection />
      <IphoneSilder />
      <Ad />
      <ProductSlider />
    </div>
  );
}
