"use client";
import { charsList } from "@/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);
const CharactersSec = () => {
  const contRef = useRef();
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
      gsap.from(".charCard", {
        scale: 0,
        transformOrigin: "top left",
        duration: 0.7,
        ease: "back",
        stagger: {
          from: "random",
          each: 0.4,
        },
        scrollTrigger: {
          trigger: "#charCont",
          start: "-5% center",
          end: "bottom bottom",
        },
      });
    },
    { scope: contRef },
  );
  return (
    <div
      ref={contRef}
      className="w-full flex flex-col gap-20 justify-center items-center pb-10"
    >
      <h1
        id="greet-text"
        className="font-oct-game text-3xl lg:text-5xl font-black text-black text-center"
      >
        discover our <br />
        game characters
      </h1>
      <div className="container w-full flex justify-center">
        <div id="charCont" className="grid grid-cols-1 lg:grid-cols-4 gap-20">
          {charsList.map((charPerson, index) => (
            <div
              key={charPerson.name}
              className="charCard relative w-fit overflow-hidden selection:bg-[#dbeafe] selection:text-black"
            >
              <Image
                src={charPerson.img}
                width={250}
                height={350}
                alt={charPerson.name}
              />
              <div
                className={`absolute w-full left-0 bottom-0 ${index === charsList.length - 1 ? "translate-y-66" : "translate-y-48"} hover:translate-y-0 duration-200 p-4 flex flex-col gap-6 text-center `}
              >
                <span className="text-4xl text-center font-oct-game">
                  {charPerson.name}
                </span>
                <span className="font-sans">{charPerson.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharactersSec;
