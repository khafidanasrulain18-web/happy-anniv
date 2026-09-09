"use client";

import { useState, type FormEvent } from "react";

// Password = tanggal jadian, terima beberapa format umum:
// "23052022", "23/05/2022", "23-05-2022", "230522", dst.
const PASSWORD_DIGITS = ["23052022", "230522"];

function normalize(input: string) {
  return input.replace(/\D/g, "");
}

export default function LoveLetter() {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const digits = normalize(value);
    if (PASSWORD_DIGITS.includes(digits)) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <section className="relative px-6 py-28 md:py-36">
      <div className="max-w-xl mx-auto">
        <span className="block text-center font-body text-xs uppercase tracking-[0.35em] text-rose-deep">
          sepucuk surat
        </span>
        <h2 className="mt-4 text-center font-display italic text-[clamp(2rem,6vw,3.5rem)] text-mauve">
          Untuk Dewi
        </h2>

        {!unlocked ? (
          <div
            className={`mt-14 rotate-[-1deg] bg-paper px-8 py-14 md:px-14 md:py-20 shadow-[0_20px_50px_-20px_rgba(94,58,68,0.35)] text-center ${
              shake ? "animate-[shake_0.5s_ease-in-out]" : ""
            }`}
          >
            <LockIcon />
            <p className="mt-6 font-display italic text-lg text-mauve/90">
              Surat ini terkunci
            </p>
            <p className="mt-2 font-body text-sm text-mauve/50 max-w-xs mx-auto">
              Cuma bisa dibuka pakai tanggal jadian kita. Coba inget-inget
              lagi ya 😉
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col items-center gap-3"
            >
              <input
                type="text"
                inputMode="numeric"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  setError(false);
                }}
                placeholder="DD-MM-YYYY"
                className={`w-56 rounded-full border px-5 py-3 text-center font-body text-sm tracking-widest text-mauve outline-none transition-colors ${
                  error
                    ? "border-red-400 bg-red-50"
                    : "border-mauve/20 bg-white focus:border-rose-deep"
                }`}
              />
              {error && (
                <p className="font-body text-xs text-red-400">
                  Bukan tanggalnya, coba lagi
                </p>
              )}
              <button
                type="submit"
                data-cursor="button"
                data-cursor-text="Buka"
                className="mt-2 rounded-full bg-rose-deep px-8 py-3 font-body text-xs uppercase tracking-[0.2em] text-paper"
              >
                Buka Surat
              </button>
            </form>
          </div>
        ) : (
          <div className="relative mt-14 rotate-[-1deg] animate-[fadeIn_0.6s_ease-out]">
            <div className="relative bg-paper px-8 py-12 md:px-14 md:py-16 shadow-[0_20px_50px_-20px_rgba(94,58,68,0.35)]">
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
                Dewi,
              </p>

              <p className="mt-6 font-body text-sm md:text-base leading-loose text-mauve/80">
                Aku sayang kamu.
              </p>

              <p className="mt-4 font-body text-sm md:text-base leading-loose text-mauve/80">
                Dari 23 Mei 2022 sampai hari ini, aku nggak pernah berhenti
                kagum sama kamu — caramu ngadepin masalah dengan tenang dan
                dewasa, caramu perhatian ke orang-orang di
                sekitarmu, dan caramu selalu mikir matang sebelum bicara
                karena kamu memang pintar dan wawasanmu luas. Belum lagi
                cantik — itu bonus yang bikin aku bersyukur setiap hari.
              </p>

              <p className="mt-4 font-body text-sm md:text-base leading-loose text-mauve/80">
                Selamat ulang tahun, sayang. Makasih sudah jadi kamu, dan
                sudah mengizinkan aku ada di setiap ceritamu.
              </p>

              <p className="mt-8 font-display italic text-lg text-rose-deep">
                — Khafid
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function LockIcon() {
  return (
    <svg
      width="28"
      height="32"
      viewBox="0 0 28 32"
      className="mx-auto text-rose-deep"
      fill="none"
    >
      <rect x="3" y="14" width="22" height="16" rx="3" fill="currentColor" opacity="0.15" />
      <rect
        x="3"
        y="14"
        width="22"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 14V9a6 6 0 0 1 12 0v5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="14" cy="21" r="2" fill="currentColor" />
    </svg>
  );
}
