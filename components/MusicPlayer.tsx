"use client";

import { useEffect, useRef, useState } from "react";

interface MusicPlayerProps {
  ready: boolean; // true setelah preloader selesai
}

export default function MusicPlayer({ ready }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);

  // Coba autoplay begitu preloader selesai
  useEffect(() => {
    if (!ready || !audioRef.current) return;
    audioRef.current
      .play()
      .then(() => setPlaying(true))
      .catch(() => setBlocked(true)); // browser nolak → butuh klik user
  }, [ready]);

  // Fallback: begitu user klik/sentuh di mana pun, coba play lagi
  useEffect(() => {
    if (!blocked) return;
    const tryPlay = () => {
      audioRef.current
        ?.play()
        .then(() => {
          setPlaying(true);
          setBlocked(false);
        })
        .catch(() => {});
    };
    window.addEventListener("click", tryPlay, { once: true });
    return () => window.removeEventListener("click", tryPlay);
  }, [blocked]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true));
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/lagu.mp3" loop preload="auto" />
      <button
        onClick={toggle}
        data-cursor="button"
        data-cursor-text={playing ? "Jeda" : "Putar"}
        className="fixed bottom-6 right-6 z-[90] flex items-center gap-2 rounded-full bg-mauve text-paper px-4 py-3 shadow-lg font-body text-xs uppercase tracking-widest"
      >
        <span className={playing ? "animate-pulse" : ""}>
          {playing ? "♪" : "♫"}
        </span>
        {blocked && !playing ? "Nyalakan musik" : playing ? "Sedang main" : "Putar musik"}
      </button>
    </>
  );
}