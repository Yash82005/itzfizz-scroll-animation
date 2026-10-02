"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVisual() {
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visualRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(visualRef.current, {
        y: 420,
        x: 180,
        rotation: 220,
        scale: 1.45,
        ease: "none",
        scrollTrigger: {
          trigger: visualRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, visualRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={visualRef}
      className="
        pointer-events-none
        absolute
        left-1/2
        top-[52%]
        z-0
        h-52
        w-52
        -translate-x-1/2
        rounded-[2.5rem]
        border
        border-white/20
        bg-white/10
        shadow-[0_0_120px_rgba(59,130,246,0.35)]
        backdrop-blur-xl
        sm:h-80
        sm:w-80
        lg:h-96
        lg:w-96
      "
    >
      <div className="absolute inset-4 rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/30" />

      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-purple-700 shadow-[0_0_80px_rgba(59,130,246,0.7)] blur-[1px]" />

      <div className="absolute left-8 top-8 h-3 w-3 rounded-full bg-white/80" />

      <div className="absolute bottom-8 right-8 h-2 w-2 rounded-full bg-white/60" />
    </div>
  );
}