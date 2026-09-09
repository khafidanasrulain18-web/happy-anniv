"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const panelLeftRef = useRef<HTMLDivElement>(null);
  const panelRightRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counter = { value: 0 };
      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        onComplete: () => onComplete?.(),
      });

      // Angka naik pelan-pelan, seperti menunggu sebelum kado dibuka
      tl.to(counter, {
        value: 100,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => setProgress(Math.floor(counter.value)),
      })
        .to(
          labelRef.current,
          { opacity: 0, y: -6, duration: 0.3, ease: "power1.in" },
          "-=0.35"
        )
        .to({}, { duration: 0.2 })
        // Dua panel terbelah dari tengah seperti kado dibuka jadi dua
        .to(
          panelLeftRef.current,
          { xPercent: -100, duration: 0.9, ease: "power4.inOut" },
          "reveal"
        )
        .to(
          panelRightRef.current,
          { xPercent: 100, duration: 0.9, ease: "power4.inOut" },
          "reveal"
        )
        .to(
          counterRef.current,
          { opacity: 0, scale: 1.15, duration: 0.4, ease: "power2.in" },
          "reveal"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] pointer-events-none"
      aria-hidden="true"
    >
      <div ref={panelLeftRef} className="absolute inset-y-0 left-0 w-1/2 bg-mauve" />
      <div ref={panelRightRef} className="absolute inset-y-0 right-0 w-1/2 bg-mauve" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-paper">
        <div
          ref={labelRef}
          className="font-body text-xs tracking-[0.3em] uppercase mb-4 text-petal"
        >
          menyiapkan sesuatu untukmu
        </div>
        <span
          ref={counterRef}
          className="font-display italic font-medium text-[14vw] leading-none tabular-nums"
        >
          {String(progress).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
