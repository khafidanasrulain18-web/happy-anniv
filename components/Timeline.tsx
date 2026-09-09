"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Ganti teks placeholder di bawah dengan cerita kalian yang sebenarnya.
const MOMENTS = [
  {
    title: "Awal Mula Kita",
    date: "22 Juni 2022",
    text: "Aku bakal selalu ingat hari itu, Wi. Waktu itu di Toko Buku, suasananya biasa aja sampai akhirnya mata kita ketemu. Kesan pertamaku waktu liat kamu?, senyum kamu manis banget. Sejak hari itu, duniaku pelan-pelan berubah jadi lebih baik.",
  },
  {
    title: "Kencan Pertama",
    date: "15 Juli 2022",
    text: "Inget nggak waktu kita pertama kali jalan ke Danau? Waktu itu aku pura-pura tenang, padahal aslinya deg-degan parah. Kita ngobrol panjang lebar soal hal-hal kecil. Tapi yang paling nempel di kepalaku dari hari itu tuh caramu ketawa waktu itu. Momen itu yang bikin aku makin jatuh cinta sama kamu.",
  },
  {
    title: "Tempat Paling Nyaman",
    date: "10 Agustus 2022",
    text: "Dari sekian banyak tempat, taman citra bakal selalu punya ruang sendiri di hatiku. Bukan cuma karena tempatnya, tapi karena banyak tawa dan cerita kita di sana. Selama ada kamu di sampingku, di manapun tempatnya selalu terasa nyaman kayak di rumah.",
  },
  {
    title: "Selalu Ingat Kamu",
    date: "24 September 2022",
    text: "Entah kenapa, setiap kali aku makan atau sekadar ngeliat es krim, yang kepikiran di kepalaku cuma kamu. Ingat kan seberapa sering kita nikmatin es krim bareng? Hal-hal sederhana kayak gini yang justru sering banget bikin aku kangen dan pengen cepet-cepet ketemu kamu lagi.",
  },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-moment]").forEach((el) => {
        gsap.set(el, { opacity: 0, y: 30 });
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
          },
        });
      });

      gsap.fromTo(
        "[data-timeline-line]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative px-6 py-28 md:py-36">
      <div className="max-w-2xl mx-auto">
        <span className="block text-center font-body text-xs uppercase tracking-[0.35em] text-rose-deep">
          kisah kita
        </span>
        <h2 className="relative mx-auto w-fit mt-4 text-center font-display italic text-[clamp(2rem,6vw,3.5rem)] text-mauve cursor-pointer transition-colors duration-300 hover:text-rose-deep after:absolute after:bottom-1 after:left-0 after:h-[3px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-rose-deep after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">
  Perjalanan Kita
</h2>

        <div className="relative mt-20 pl-10 md:pl-14">
          <div className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-rose-deep/15">
            <div
              data-timeline-line
              className="absolute inset-0 w-px bg-rose-deep origin-top"
            />
          </div>

          <ol className="space-y-16">
            {MOMENTS.map((m, i) => (
              <li key={m.title} data-moment className="relative">
                <span className="absolute -left-10 md:-left-14 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-rose text-paper font-body text-[11px]">
                  {i + 1}
                </span>
                <h3 className="relative inline-block font-display text-lg md:text-2xl text-mauve transition-colors duration-300 hover:text-rose-deep after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-rose-deep after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">
                  {m.title}
                </h3>
                {m.date && (
                  <span className="block mt-1 font-body text-xs uppercase tracking-[0.2em] text-mauve/40">
                    {m.date}
                  </span>
                )}
                <p className="mt-3 font-body text-sm md:text-base leading-relaxed text-mauve/70 max-w-md">
                  {m.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
