"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Divider from "@/components/Divider";

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.set("[data-footer-line] > span", { yPercent: 110 });

    if (reduceMotion) {
      gsap.set("[data-footer-line] > span", { yPercent: 0 });
      return;
    }

    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to("[data-footer-line] > span", {
            yPercent: 0,
            stagger: 0.1,
            duration: 0.9,
            ease: "back.out(1.5)",
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={sectionRef} className="relative bg-mauve text-paper">
      <Divider className="bg-mauve text-rose" />

      <div className="px-6 py-24 md:py-32 text-center">
        <h2 className="font-display italic font-medium text-[clamp(2rem,7vw,4.5rem)] leading-[1.15]">
          <span data-footer-line className="block overflow-hidden">
            <span className="block">Happy Anniversary,</span>
          </span>
          <span data-footer-line className="block overflow-hidden text-petal">
            <span className="block">Dewiku sayang.</span>
          </span>
        </h2>
        <p className="mt-8 font-body text-sm text-paper/60 max-w-sm mx-auto leading-relaxed">
          Semoga tahun ini membawa lebih banyak hal baik buat kita —
          dan semoga kita masih dapat kesempatan untuk terus bersama.
        </p>
      </div>

      <div className="px-6 py-8 text-center">
        <span className="font-body text-xs text-paper/30">
          dibuat dengan ♥ oleh Khafid, untuk Dewiku sayang
        </span>
      </div>
    </footer>
  );
}
