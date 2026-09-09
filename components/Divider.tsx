"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface DividerProps {
  className?: string;
}

// Garis "detak jantung" yang bergerak pelan tanpa henti — pengenal
// visual halaman ini di setiap batas section.
export default function Divider({ className = "" }: DividerProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 9,
        ease: "none",
        repeat: -1,
      });
    }, trackRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className={`relative w-full overflow-hidden h-6 ${className}`}
      aria-hidden="true"
    >
      <div ref={trackRef} className="flex w-[200%] will-change-transform">
        <HeartbeatPattern />
        <HeartbeatPattern />
      </div>
    </div>
  );
}

function HeartbeatPattern() {
  return (
    <svg
      viewBox="0 0 800 24"
      preserveAspectRatio="none"
      className="w-1/2 h-6 shrink-0"
    >
      <polyline
        points="0,12 90,12 105,4 118,20 132,2 146,22 160,12 250,12 340,12 355,4 368,20 382,2 396,22 410,12 500,12 590,12 605,4 618,20 632,2 646,22 660,12 750,12 800,12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
