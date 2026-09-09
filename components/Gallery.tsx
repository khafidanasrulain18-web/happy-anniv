"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Placeholder foto — ganti "src" tiap kartu di bawah dengan foto asli
// kalian (taruh filenya di folder /public lalu isi path-nya di sini),
// dan ganti "caption" dengan keterangan singkat tiap foto.
const PHOTOS = [
  { src:"1.jpg", caption: "Lucu banget!🤣", rotate: -6 },
  { src:"2.jpg", caption: "Sayang deh🥰", rotate: 4 },
  { src:"3.jpg", caption: "Mukanya😭", rotate: -3 },
  { src:"4.jpg", caption: "Serius amat neng", rotate: 5 },
  { src:"7.jpg", caption: "Cantik banget😘", rotate: -5 },
  { src:"6.jpg", caption: "My Favorit guwehh🤩", rotate: 3 },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-photo]").forEach((el, i) => {
        gsap.set(el, { opacity: 0, y: 24, rotate: 0 });
        gsap.to(el, {
          opacity: 1,
          y: 0,
          rotate: el.dataset.rotate,
          duration: 0.7,
          delay: (i % 3) * 0.08,
          ease: "back.out(1.4)",
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
      <div className="max-w-4xl mx-auto">
        <span className="block text-center font-body text-xs uppercase tracking-[0.35em] text-rose-deep">
          galeri
        </span>
        <h2 className="relative mx-auto w-fit mt-4 text-center font-display italic text-[clamp(2rem,6vw,3.5rem)] text-mauve cursor-pointer transition-colors duration-300 hover:text-rose-deep after:absolute after:bottom-1 after:left-0 after:h-[3px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-rose-deep after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">
  Kenangan Kita
</h2>
        <p className="mt-4 text-center font-body text-sm text-mauve/50 max-w-sm mx-auto">
          Semoga kita selalu memiliki kenangan indah bersama.
        </p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
  {PHOTOS.map((p, i) => (
    <div
      key={i}
      data-photo
      data-rotate={p.rotate}
      // Tambahkan 'group' dan hapus 'hover:scale-105' di sini. Efek floating tetap ada.
      className="group bg-white p-3 pb-8 shadow-[0_10px_30px_-12px_rgba(94,58,68,0.25)] transition-all duration-300 ease-out hover:-translate-y-3 hover:z-10 hover:shadow-[0_20px_40px_-12px_rgba(94,58,68,0.4)] hover:ring-2 hover:ring-rose/50 cursor-pointer"
      style={{ rotate: `${p.rotate}deg` }}
    >
      {/* 
         Di sinilah perubahannya. 
         Kita menerapkan skala pada placeholder saat card (group) di-hover.
         Tambahkan: 'overflow-hidden transition-transform duration-300 ease-out group-hover:scale-110'
      */}
      <div className="aspect-[4/5] w-full overflow-hidden transition-transform duration-300 ease-out group-hover:scale-110">
  <img
    src={p.src}
    alt={p.caption}
    loading="lazy"
    decoding="async"
    className="w-full h-full object-cover"
  />
</div>
      
      {/* Caption teks tetap sama */}
      <p className="mt-3 text-center font-display italic text-sm text-mauve/60 transition-colors duration-300 group-hover:text-mauve/90">
        {p.caption}
      </p>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}

function HeartOutline() {
  return (
    <svg width="32" height="28" viewBox="0 0 32 28" className="text-mauve/25">
      <path
        d="M16 26C8 20 1 14.5 1 8.5 1 4.4 4.3 1 8.4 1c2.5 0 4.8 1.2 6.1 3.2C15.8 2.2 18.1 1 20.6 1 24.7 1 28 4.4 28 8.5c0 6-7 11.5-15 17.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
