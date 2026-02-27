"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const AboutSec = () => {
  const contRef = useRef();
  useGSAP(
    () => {
      const greetText = new SplitText("#greet-text", { type: "words" ,mask:true});
      gsap.from(greetText.words, {
        autoAlpha: 0,
        x: -180,
        skewX:90,
        scale: 0.4,
        scrollTrigger: {
          trigger: "#greet-text",
          start: "-10% center",
          end:"center center",
          // toggleActions: "play restart reverse none",
        },
        stagger:{
            from:"end",
            each:".04"
        }
      });
      gsap.from("#sec-pic", {
        scaleX: 0.3,
        scaleY: 0.8,
        borderRadius: 80,
        duration: 3,
        scrollTrigger: {
          trigger: "#sec-pic",
          start: "-15% top",
          end: "+=150vh",
          scrub: 1,
          pin: true,
          //pinSpacing:true
        },
      });
    },
    { scope: contRef },
  );
  return (
    <div ref={contRef} className="w-full min-h-dvh overflow-hidden">
      <div className="flex flex-col gap-4 justify-center items-center pb-10">
        <h1 className="font-oct-game uppercase text-sm text-black text-center">
          welcome to our story
        </h1>
        <p
          id="greet-text"
          className="font-oct-game uppercase text-4xl text-black text-center w-150 font-extrabold overflow-hidden"
        >
          new story new chapter Valley of Memory - Available now
        </p>
      </div>
      <section
        id="sec-pic"
        className="w-full h-dvh bg-[url('/sec21.jpg')] bg-cover bg-center"
      ></section>
    </div>
  );
};

export default AboutSec;
