"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Button from "@/components/Button";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const contRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contRef.current,
        scrub: true,
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: "+=1000",
      },
    });

    tl.fromTo(
      contRef.current,
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)", // Inset rectangle
        duration: 1,
      },
    );
  });
  return (
    <>
      {/* <h3 className=" font-bold text-9xl  text-black text-center font-oct-game sticky bottom-10 right-10 italic z-0">
        mirage
      </h3> */}
      <div
        ref={contRef}
        className="w-full h-dvh overflow-hidden relative will-change-[clip-path] flex justify-center bg"
      >
        <div className="w-screen h-dvh left-0 top-0 absolute z-10">
         
          {/* <Image src={"/wal1.jpg"} width={500} height={700}/> */}
          <video
            src="/video.mp4"
            muted
            autoPlay
            loop
            playsInline
            className=" lg:block w-full h-full object-cover"
          ></video>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="container w-full h-full px-4">
            <div className="w-full flex justify-center items-center relative h-full z-20">
              <h1 className=" font-bold text-4xl lg:text-6xl text-white text-center font-oct-game absolute top-20 left-0 italic">
                assassin's
              </h1>
              <h2 className=" font-bold text-4xl lg:text-6xl text-white text-center font-oct-game absolute top-35 left-40 italic">
                creed
              </h2>
              <p className=" font-bold w-80  lg:w-120 text-white font-sans absolute top-55 left-0">
                Available now on Ubisoft store, Ubisoft +, Xbox Series X|S, Xbox
                One, PlayStation®5, PlayStation®4, EPIC, Steam, Amazon Luna, and
                compatible iOS devices.
              </p>
              <h3 className=" font-bold text-6xl lg:text-9xl  text-white text-center font-oct-game absolute bottom-10 lg:bottom-15 right-0 italic">
                mirage
              </h3>
              <Button moreStyle={"absolute left-0 lg:top-80 top-90"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
