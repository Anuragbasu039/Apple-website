import Image from "next/image";
import HeroSection from "../app/Components/herosection";
import NavBar from "@/app/Components/Navbar";
export default function Home() {
  return (
    <div >
        <NavBar/>
      <HeroSection />
    </div>
  );
}
