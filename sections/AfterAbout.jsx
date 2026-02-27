"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrambleTextPlugin, ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger, ScrambleTextPlugin);

const AfterAbout = ({ text1, text2 }) => {
  const contRef = useRef();
  useGSAP(
    () => {
      const myText = new SplitText("#text", { type: "chars", smartWrap: true });

      gsap.from(myText.chars, {
        ease: "power4.inOut",
        stagger: 0.01,
        opacity:0,
        scrambleText: {
          text: "{original}",
          chars:"|"
        },
        scrollTrigger: {
          trigger: "#text",
          start: "-10% center",
          end: "+=10% center",
         // scrub:true
        },
      });
    },
    { scope: contRef },
  );
  return (
    <div
      ref={contRef}
      className="bg-blue-100 w-full py-40 flex justify-center items-center"
    >
      <div className="container px-4 lg:px-0">
        <p id="text" className="text-gray-700 w-80 lg:w-120 font-medium">
          <span className="text-black">{text1}</span> <br />
          {text2}
        </p>
      </div>
    </div>
  );
};

export default AfterAbout;
