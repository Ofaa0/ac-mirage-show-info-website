"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/all";
import { usePathname } from "next/navigation";
import { useRef } from "react";

gsap.registerPlugin(ScrambleTextPlugin);
const Loading = () => {
  const loadRef = useRef();

  useGSAP(
    () => {
      document.documentElement.style.overflow = "hidden";
      const tl = gsap.timeline();
      tl.to(loadRef.current, {
        duration: 0.4,
        ease: "power1.inOut",
        scaleY: 1,
        transformOrigin: "top",
      })
        .to(loadRef.current, {
          duration: 2,
          ease: "power1.inOut",
          delay: 0.1,
          scrambleText: {
            text: "{original}",
          },
        })
        .to(loadRef.current, {
          duration: 2,
          ease: "power1.inOut",
          delay: 1,
          scrambleText: {
            text: "it is just a mirage",
          },
        })
        .to(loadRef.current, {
          duration: 0.4,
          ease: "power1.inOut",
          scaleY: 0,
          transformOrigin: "bottom",
          delay: 0.5,
          onComplete: () => {
            document.documentElement.style.overflowY = "auto";
            document.documentElement.style.overflowX = "hidden";
          },
        });
    },
    { scope: loadRef },
  );
  return (
    <div
      ref={loadRef}
      className="w-full h-dvh bg-blue-100 text-black fixed top-0 left-0 z-200 flex justify-center items-center font-oct-game text-3xl lg:text-7xl scale-y-0 cursor-none overflow-hidden"
    >
      Loading...
    </div>
  );
};

export default Loading;
