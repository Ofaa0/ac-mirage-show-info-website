import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import AboutSec from "@/sections/AboutSec";
import AfterAbout from "@/sections/AfterAbout";
import CharactersSec from "@/sections/CharactersSec";
import Hero from "@/sections/Hero";
import PhotosSec from "@/sections/PhotosSec";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col bg-blue-100 font-sans">
      <Loading />
      <Navbar />
      <Hero />
      <AboutSec />
      <AfterAbout text1={"In Assassin's Creed Mirage, you are Basim,"} text2={"a cunningstreet thief with nightmarish visions seeking answers and justice.Join an ancient organisation and come to understand a new creed – onethat will change Basim’s fate in ways he never could have imagined."} />
      <CharactersSec />
      <AfterAbout text1={"Valley of Memory, a free major update, introduces"} text2={"the stunning new region of AlUla and features a new story arc for Basim. Explore a breathtaking landscape of deserts and oases while uncovering family secrets and facing a ruthless gang threatening the valley’s peace. Enjoy fan-requested gameplay enhancements including mission replay, smoother parkour, and deeper customization for a more immersive experience."} />
      <PhotosSec />
    </div>
  );
}
