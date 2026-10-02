"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollVisual from "@/components/ScrollVisual";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(headlineRef.current, {
          opacity: 0,
          y: 50,
          duration: 1.2,
        })
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 25,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          statsRef.current?.children ?? [],
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
            stagger: 0.15,
          },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <section
       ref={heroRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.15),_transparent_45%)] px-5 sm:px-6"
      >
        <ScrollVisual />

        <div className="relative z-10 flex flex-col items-center">
          <p className="mb-6 text-sm uppercase tracking-[0.5em] text-white/50">
            Itzfizz Digital
          </p>

          <h1
            ref={headlineRef}
            className="text-center text-3xl font-semibold tracking-[0.18em] sm:text-6xl sm:tracking-[0.3em] lg:text-8xl"
          >
            WELCOME ITZFIZZ
          </h1>

          <p
            ref={subtitleRef}
            className="mt-8 max-w-2xl text-center text-white/60"
          >
            Creating digital experiences that combine design, technology and
            performance.
          </p>

          <div
            ref={statsRef}
            className="mt-14 grid w-full max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <div className="text-center">
              <p className="text-4xl font-semibold sm:text-5xl">95%</p>
              <p className="mt-2 text-sm text-white/50">
                Client Satisfaction
              </p>
            </div>

            <div className="text-center">
              <p className="text-4xl font-semibold sm:text-5xl">80%</p>
              <p className="mt-2 text-sm text-white/50">
                Performance Growth
              </p>
            </div>

            <div className="text-center">
              <p className="text-4xl font-semibold sm:text-5xl">90%</p>
              <p className="mt-2 text-sm text-white/50">
                Digital Reach
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-white/40">
        Scroll
       </p>

        <div className="mx-auto mt-3 h-10 w-px overflow-hidden bg-white/20">
        <div className="h-1/2 w-full animate-pulse bg-white/70" />
       </div>
      </div>
      </section>

      <section className="relative min-h-screen overflow-hidden bg-neutral-950 px-6 py-32">
  <div className="mx-auto max-w-6xl">
    <div className="max-w-2xl">
      <p className="text-sm uppercase tracking-[0.4em] text-white/40">
        Our Approach
      </p>

      <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
        Digital experiences
        <span className="block text-white/40">
          built to move.
        </span>
      </h2>

      <p className="mt-6 max-w-xl text-lg leading-8 text-white/50">
        We combine creative design, modern technology and performance-focused
        development to create experiences that connect with users.
      </p>
    </div>

    <div className="mt-20 grid gap-6 md:grid-cols-3">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
        <p className="text-sm text-white/40">01</p>

        <h3 className="mt-8 text-2xl font-semibold">
          Design
        </h3>

        <p className="mt-4 leading-7 text-white/50">
          Clean interfaces with strong visual hierarchy and thoughtful
          interactions.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
        <p className="text-sm text-white/40">02</p>

        <h3 className="mt-8 text-2xl font-semibold">
          Development
        </h3>

        <p className="mt-4 leading-7 text-white/50">
          Modern web technologies focused on maintainability, responsiveness
          and performance.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
        <p className="text-sm text-white/40">03</p>

        <h3 className="mt-8 text-2xl font-semibold">
          Performance
        </h3>

        <p className="mt-4 leading-7 text-white/50">
          Fast, responsive experiences designed to work smoothly across
          devices.
        </p>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}