"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const REASONS = [
  {
    title: "Pikiranmu yang Dewasa",
    text: "Aku selalu tenang kalau ada masalah, karena caramu ngadepin semuanya selalu sabar dan nggak tergesa-gesa.",
  },
  {
    title: "Hatimu yang Hangat",
    text: "Cara kamu peduli sama aku dan orang-orang di sekitarmu itu tulus banget. Kasih sayangmu bikin tempat mana pun selalu terasa nyaman kayak rumah.",
  },
  {
    title: "Isi Kepalamu",
    text: "Kamu itu cerdas. Cara kamu ngelihat dunia dan pola pikirmu selalu berhasil bikin aku kagum, dan bikin aku terus jatuh cinta lagi setiap harinya.",
  },
  {
    title: "Teman Ngobrol Terbaik",
    text: "Dari obrolan receh sampai yang paling berat sekalipun, ngobrol sama kamu nggak pernah ada bosennya. Waktu selalu kerasa kurang kalau udah sama kamu.",
  },
  {
    title: "Parasmu",
    text: "Semua orang juga tau kalau kamu cantik banget. Tapi sejujurnya, cantiknya hatimu yang bikin aku bener-bener bersyukur bisa milikin kamu.",
  },
];

export default function Reasons() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reason]").forEach((el, i) => {
        gsap.set(el, { opacity: 0, x: -16 });
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: i * 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative px-6 py-28 md:py-36 bg-paper/60">
      <div className="max-w-lg mx-auto">
        <span className="block text-center font-body text-xs uppercase tracking-[0.35em] text-rose-deep">
          alasan
        </span>
        <h2 className="relative mx-auto w-fit mt-4 text-center font-display italic text-[clamp(2rem,6vw,3.5rem)] text-mauve cursor-pointer transition-colors duration-300 hover:text-rose-deep after:absolute after:bottom-1 after:left-0 after:h-[3px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-rose-deep after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">
          Kenapa Aku Cinta Kamu
        </h2>

        <ul className="mt-16 space-y-8">
          {REASONS.map((r) => (
            <li key={r.title} data-reason className="flex gap-4">
              <HeartBullet />
              <div>
                <h3 className="relative inline-block font-display text-lg text-mauve transition-colors duration-300 hover:text-rose-deep after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-rose-deep after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100 hover:tracking-[0.2em]">
                  {r.title}
                </h3>
                <p className="mt-1 font-body text-sm text-mauve/65 leading-relaxed hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-deep hover:to-pink-500 cursor-pointer">
                  {r.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HeartBullet() {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 32 28"
      className="mt-1 shrink-0 text-rose"
    >
      <path
        d="M16 26C8 20 1 14.5 1 8.5 1 4.4 4.3 1 8.4 1c2.5 0 4.8 1.2 6.1 3.2C15.8 2.2 18.1 1 20.6 1 24.7 1 28 4.4 28 8.5c0 6-7 11.5-15 17.5z"
        fill="currentColor"
      />
    </svg>
  );
}
