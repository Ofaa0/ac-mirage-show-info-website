"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger, SplitText);

const AboutSec = () => {
  const contRef = useRef();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#sec-pic",
          start: "-10% 20%",
          end: "+=150vh",
          scrub: 2,
          pin: true,
          pinSpacing: true,
        },
      });
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
      // gsap.fromTo(
      //   "#sec-pic",
      //   {
      //     // rotateY: -60,
      //     //transformOrigin: "bottom",
      //     scaleX: 0.2,
      //     scaleY: 0.6,
      //     borderRadius: 20,
      //     skewY: 10,
      //   },
      //   {
      //     scale: 1,
      //     borderRadius: 0,
      //     skewY: 0,
      //     scrollTrigger: {
      //       trigger: "#sec-pic",
      //       start: "-20% top",
      //       end: "+=120vh",
      //       scrub: true,
      //       pin: true,
      //       //pinSpacing:true
      //     },
      //   },
      // );
      tl.set("#sec-pic", {
        skewY: 10,
        scaleX: 0.3,
        scaleY: 0.6,
        borderRadius: 20,
      })
        .to("#sec-pic", {
          skewY: 0,
        })
        .to("#sec-pic", {
          scaleX: 1,
          scaleY: 1,
          borderRadius: 0,
        });
    },
    { scope: contRef },
  );
  return (
    <div ref={contRef} className="w-full h-fit overflow-hidden">
      <div className="flex flex-col gap-4 justify-center items-center pb-10">
        <h1 className="font-oct-game uppercase text-sm text-black text-center">
          welcome to our story
        </h1>
        <p
          id="greet-text"
          className="font-oct-game uppercase text-3xl lg:text-5xl text-black text-center w-80 lg:w-150 font-extrabold overflow-hidden"
        >
          new story new chapter Valley of Memory - Available now
        </p>
      </div>
      <section
        id="sec-pic"
        className={`w-full h-dvh ${isMobile?"bg-[url('/mobAbSec.webp')]":"bg-[url('/abSec.webp')]"} bg-cover bg-center`}
      ></section>
    </div>
  );
};

export default AboutSec;
