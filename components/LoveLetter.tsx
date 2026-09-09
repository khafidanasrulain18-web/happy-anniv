"use client";

export default function LoveLetter() {
  return (
    <section className="relative px-6 py-28 md:py-36">
      <div className="max-w-xl mx-auto">
        <span className="block text-center font-body text-xs uppercase tracking-[0.35em] text-rose-deep">
          sepucuk surat
        </span>
        <h2 className="relative mx-auto w-fit mt-4 text-center font-display italic text-[clamp(2rem,6vw,3.5rem)] text-mauve cursor-pointer transition-colors duration-300 hover:text-rose-deep after:absolute after:bottom-1 after:left-0 after:h-[3px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-rose-deep after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">
          Untuk Dewi
        </h2>

        <div className="relative mt-14 rotate-[-1deg]">
          <div className="relative bg-paper px-8 py-12 md:px-14 md:py-16 shadow-[0_20px_50px_-20px_rgba(94,58,68,0.35)]">
            {/* Lipatan sudut kertas */}
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 h-8 w-8 bg-blush"
              style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
            />
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 h-8 w-8 shadow-[-6px_6px_10px_-6px_rgba(94,58,68,0.35)]"
              style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
            />

            <p className="font-display italic text-lg md:text-xl leading-relaxed text-mauve/90">
  Dewi, kesayanganku...
</p>

<p className="mt-6 font-body text-sm md:text-base leading-loose text-mauve/80">
  Aku sayang banget sama kamu.
</p>

<p className="mt-4 font-body text-sm md:text-base leading-loose text-mauve/80">
  Nggak kerasa ya, dari tanggal 23 Mei 2022 sampai detik ini, rasanya aku nggak pernah berhenti kagum sama kamu. Aku selalu salut liat caramu yang tenang dan dewasa banget tiap ada masalah. Sifatmu yang keibuan dan selalu perhatian ke orang-orang di sekitarmu, yang selalu bikin hatiku hangat. Aku juga suka banget caramu yang selalu mikir matang sebelum ngomong. Kamu tuh pintar dan wawasanmu luas. Terus, kamu itu cantik banget, Wi. Beneran deh, itu bonus luar biasa yang selalu bikin aku bersyukur tiap kali ngeliat kamu.
</p>

<p className="mt-4 font-body text-sm md:text-base leading-loose text-mauve/80">
  Happy Anniversary, sayang. Makasih ya udah selalu jadi dirimu sendiri yang luar biasa, dan makasih udah ngasih aku ruang buat terus ada di setiap cerita hidupmu.
</p>

            <p className="mt-8 font-display italic text-lg text-rose-deep">
              — Khafid
            </p>
          </div>
        </div>
        <p className="mt-4 text-center font-body text-xs text-mauve/40">
          (isi suratnya bisa kamu edit sesuka hati di komponen LoveLetter)
        </p>
      </div>
    </section>
  );
}
