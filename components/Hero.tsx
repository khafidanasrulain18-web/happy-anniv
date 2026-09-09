"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import LiveAge from "@/components/LiveAge";

interface HeroProps {
  ready: boolean;
}

export default function Hero({ ready }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimatedIn = useRef(false);

  useLayoutEffect(() => {
    if (!ready || hasAnimatedIn.current) return;
    hasAnimatedIn.current = true;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(
          ["[data-hero-label]", "[data-hero-line] > span", "[data-hero-age]", "[data-hero-cue]"],
          { clearProps: "all", opacity: 1, y: 0, yPercent: 0 }
        );
        return;
      }

      gsap.set("[data-hero-label]", { opacity: 0, y: 12 });
      gsap.set("[data-hero-line] > span", { yPercent: 110 });
      gsap.set("[data-hero-age]", { opacity: 0, y: 16 });
      gsap.set("[data-hero-cue]", { opacity: 0 });

      const tl = gsap.timeline({ delay: 0.15 });
      tl.to("[data-hero-label]", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" })
        .to(
          "[data-hero-line] > span",
          { yPercent: 0, duration: 1, stagger: 0.12, ease: "power4.out" },
          "-=0.35"
        )
        .to("[data-hero-age]", { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4")
        .to("[data-hero-cue]", { opacity: 1, duration: 0.6 }, "-=0.3");

      // Kelopak lembut melayang turun pelan-pelan, tidak pernah berhenti
      gsap.utils.toArray<HTMLElement>("[data-petal]").forEach((el, i) => {
        gsap.to(el, {
          y: "+=40",
          x: `+=${i % 2 === 0 ? 12 : -12}`,
          rotate: i % 2 === 0 ? 25 : -25,
          duration: 6 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.4,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [ready]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* Kelopak dekoratif, statis di posisi tapi bergoyang pelan via GSAP */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {[
          { top: "12%", left: "10%", size: 68 },
          { top: "20%", left: "82%", size: 60 },
          { top: "68%", left: "8%", size: 62 },
          { top: "75%", left: "88%", size: 66 },
          { top: "40%", left: "92%", size: 56 },
          { top: "55%", left: "4%", size: 58 },
        ].map((p, i) => (
          <span
            key={i}
            data-petal
            style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
            className="absolute rounded-[60%_40%_65%_35%] bg-petal/80"
          />
        ))}
      </div>

      <div className="text-center"> {/* Container opsional untuk perataan */}
  {/* LABEL: Efek jarak huruf melebar (tracking) dan warna sedikit lebih terang */}
  <span
    data-hero-label
    className="inline-block font-body text-xs md:text-sm uppercase tracking-[0.35em] text-rose-deep transition-all duration-700 ease-in-out hover:tracking-[0.5em] hover:text-pink-400 hover:drop-shadow-[0_0_8px_rgba(225,29,72,0.5)] cursor-pointer"
  >
    untuk kekasihku sayang
  </span>

  {/* MAIN TITLE: Efek melayang, membesar, dan perubahan warna ke Rose dengan Shadow */}
  <h1 className="group mt-6 font-display font-medium text-[clamp(3rem,13vw,8rem)] leading-[0.95] text-mauve cursor-pointer perspective-1000">
    <span 
      data-hero-line 
      className="block overflow-visible transition-transform duration-700 ease-out group-hover:-translate-y-3 group-hover:scale-[1.02]"
    >
      <span className="block italic transition-all duration-500 ease-in-out group-hover:text-rose-deep group-hover:drop-shadow-[0_15px_25px_rgba(244,114,182,0.3)]">
        Nurleni Dewi Anggraeni
      </span>
    </span>
  </h1>
</div>

      <div data-hero-age>
        <LiveAge />
      </div>

      <div
        data-hero-cue
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-body text-[11px] uppercase tracking-[0.3em] text-mauve/40"
      >
        gulir ke bawah
      </div>
    </section>
  );
}
