"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText);

const Page = () => {
  const contRef = useRef();
  const textRef1 = useRef();
  const textRef2 = useRef();
  let text1;
  let text2;
  const { contextSafe } = useGSAP(
    () => {
      document.fonts.ready.then(() => {
        text1 = SplitText.create(textRef1.current, {
          type: "chars",
          autoSplit: true,
        });
        text2 = SplitText.create(textRef2.current, {
          type: "chars",
          autoSplit: true,
        });
      });
    },
    { scope: contRef },
  );
  const handleMouseOver = contextSafe(() => {
    gsap.to(text1.chars, {
      yPercent: -100,
      duration: 0.4,
      stagger: 0.04,
      ease: "power1.inOut",
    });
    gsap.to(text2.chars, {
      yPercent: -100,
      duration: 0.4,
      stagger: 0.04,
      ease: "power1.inOut",
    });
  });
  const handleMouseLeave = contextSafe(() => {
    gsap.to(text1.chars, {
      yPercent: 0,
      duration: 0.4,
      stagger: 0.04,
      ease: "power1.inOut",
    });
    gsap.to(text2.chars, {
      yPercent: 0,
      duration: 0.4,
      stagger: 0.04,
      ease: "power1.inOut",
    });
  });
  return (
    <div
      ref={contRef}
      className="w-full h-dvh bg-blue-100 justify-center items-center flex"
    >
      <div
        id="text-cont"
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        className="text-black uppercase font-bold text-8xl cursor-pointer  h-24 overflow-hidden"
      >
        <span ref={textRef1} className="block">
          click me
        </span>
        <span ref={textRef2} className="block">
          click me
        </span>
      </div>
    </div>
  );
};

export default Page;
