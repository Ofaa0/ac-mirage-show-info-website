"use client";
import { LuMousePointerClick } from "react-icons/lu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef, useState } from "react";

const PhotosSec = () => {
  const vid1 = useRef();
  const vid2 = useRef();
  const contRef = useRef();
  const [vid1play, setVid1play] = useState(false);
  const [vid2play, setVid2play] = useState(false);
  gsap.registerPlugin(ScrollTrigger, SplitText);
  useGSAP(
    () => {
      const greetText = new SplitText("#greet-text", {
        type: "words",
        mask: true,
      });
      gsap.from(greetText.words, {
        autoAlpha: 0,
        x: -180,
        skewX: 90,
        scale: 0.4,
        scrollTrigger: {
          trigger: "#greet-text",
          start: "-10% center",
          end: "center center",
          // toggleActions: "play restart reverse none",
        },
        stagger: {
          from: "end",
          each: ".04",
        },
      });
      gsap.from(".vid", {
        duration: 3,
        x: -800,
        // y:-800,
        ease: "expo.out",
        stagger: {
          each: 1,
        },
        scrollTrigger: {
          trigger: ".vidCont",
          start: "-5% center",
          toggleActions: "play none reverse none",
        },
      });
    },
    { scope: contRef },
  );
  return (
    <div
      ref={contRef}
      className="w-full py-10 flex flex-col justify-center items-center"
    >
      <h1
        id="greet-text"
        className="font-oct-game text-5xl font-black text-black text-center pb-20"
      >
        Now it is our <span className="font-square-game">15</span>th <br />{" "}
        anniversary
        <br /> celebrate with us
      </h1>
      <div className="container w-full flex justify-center items-start">
        <div className="">
          <div className="vidCont h-fit grid grid-cols-2 gap-10  overflow-hidden">
            <div
              onMouseEnter={() => {
                setVid1play(true);
              }}
              onMouseLeave={() => {
                setVid1play(false);
              }}
              className="overflow-hidden w-fit h-fit relative"
            >
              <video
                ref={vid1}
                src="/vid1.mp4"
                muted
                playsInline
                loop
                onMouseEnter={() => {
                  vid1.current.play();
                }}
                onMouseLeave={() => {
                  vid1.current.pause();
                }}
                className="vid w-full rounded-2xl cursor-pointer"
              ></video>
              <LuMousePointerClick
                className={`text-9xl text-white absolute animate-pulse font-bold left-1/2 top-1/2 -translate-1/2 ${vid1play && "hidden"}`}
              />
            </div>
            <div onMouseEnter={() => {
                setVid2play(true);
              }}
              onMouseLeave={() => {
                setVid2play(false);
              }} className="overflow-hidden w-fit h-fit relative">
              <video
                ref={vid2}
                src="/vid2.mp4"
                muted
                playsInline
                loop
                onMouseEnter={() => {
                  vid2.current.play();
                }}
                onMouseLeave={() => {
                  vid2.current.pause();
                }}
                className="vid w-full rounded-2xl cursor-pointer"
              ></video>
              <LuMousePointerClick
                className={`text-9xl text-white absolute animate-pulse font-bold left-1/2 top-1/2 -translate-1/2 ${vid2play && "hidden"}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotosSec;
