"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { IoVolumeHighSharp, IoVolumeMuteSharp } from "react-icons/io5";
import { RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
  const [play, setPlay] = useState(false);
  const music = useRef();

  return (
    <header className="w-full bg-white/40 backdrop-blur-2xl h-16 flex justify-center items-center absolute top-0 left-0 z-[100]">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <Image src={"/logo.png"} width={50} height={50} alt="logo" />
          <h1 className="font-oct-game font-bold">mirage</h1>
        </div>
        <nav className="flex items-center gap-4">
          <>
            <p className="font-oct-game hidden lg:block bg-white text-black px-4 py-1 rounded-full cursor-pointer">
              home
            </p>
            <p className="font-oct-game hidden lg:block bg-white text-black px-4 py-1 rounded-full cursor-pointer">
              about
            </p>
            <p className="font-oct-game hidden lg:block bg-white text-black px-4 py-1 rounded-full cursor-pointer">
              charachters
            </p>
            <p className="font-oct-game hidden lg:block bg-white text-black px-4 py-1 rounded-full cursor-pointer">
              more
            </p>
          </>
          <RiMenu4Fill className="text-white text-4xl cursor-pointer lg:hidden" />
          <div className="w-200 h-full absolute">
            <audio loop ref={music} src="/music.mp3" className="hidden"></audio>
            {play ? (
            <IoVolumeHighSharp
              onClick={() => {
                setPlay(!play);
                music.current.pause();
              }}
              className="animate-pulse text-4xl bg-[#244154] text-white rounded-full w-18 cursor-pointer absolute right-205 top-1/2 -translate-y-1/2"
            />
          ) : (
            <IoVolumeMuteSharp
              onClick={() => {
                setPlay(!play);
                music.current.play();
              }}
              className="animate-pulse text-4xl bg-[#244154] text-white rounded-full w-18 cursor-pointer absolute right-205 top-1/2 -translate-y-1/2"
            />
          )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
