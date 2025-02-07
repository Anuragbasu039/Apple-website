import Image from "next/image";
import HeroSection from "../app/Components/herosection";
import IphoneSilder from "@/app/Components/iphone silder";
import Ad from "@/app/Components/Ads";
import ProductSlider from "@/app/Components/ProductSlider";
import VideoFrame from "@/app/Components/macvideo";
import VideoFrameMacOpen from "@/app/Components/videoframe";
import Imageslider from "@/app/Components/imageslider"
export default function Home() {
  return (
    <div >
      <HeroSection />
      <IphoneSilder />
      <Ad />
      <ProductSlider />
      <VideoFrame />
      <VideoFrameMacOpen />
      <Imageslider />
    </div>
  );
}
