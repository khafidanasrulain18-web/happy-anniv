"use client";

const SONG = {
  title: "Mere Humsafar",
  artist: "Arijit Singh",
  searchUrl:
    "https://open.spotify.com/search/Mere%20Humsafar%20Arijit%20Singh",
};

export default function Playlist() {
  return (
    <section className="relative px-6 py-28 md:py-36">
      <div className="max-w-md mx-auto text-center">
        <span className="block font-body text-xs uppercase tracking-[0.35em] text-rose-deep">
          lagu kita
        </span>
        <h2 className="relative mx-auto w-fit mt-4 text-center font-display italic text-[clamp(2rem,6vw,3.5rem)] text-mauve cursor-pointer transition-colors duration-300 hover:text-rose-deep after:absolute after:bottom-1 after:left-0 after:h-[3px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-rose-deep after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">
            Lagu Kita
        </h2>

        <div className="mt-14 flex flex-col items-center">
          <div className="relative h-40 w-40 md:h-48 md:w-48">
            <div className="absolute inset-0 rounded-full bg-mauve animate-[spin_8s_linear_infinite] motion-reduce:animate-none">
              <div className="absolute inset-[18%] rounded-full bg-rose-deep" />
              <div className="absolute inset-[46%] rounded-full bg-paper" />
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-full border border-paper/10"
                  style={{ margin: `${6 + i * 5}%` }}
                />
              ))}
            </div>
          </div>

          <p className="mt-8 font-display text-xl text-mauve">{SONG.title}</p>
          <p className="font-body text-sm text-mauve/50">{SONG.artist}</p>

          <a
            href="https://youtu.be/nBLYHFwIyYA?si=nOpRMGb47Nta9nd_"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="button"
            data-cursor-text="Putar"
            className="mt-8 inline-flex items-center rounded-full border border-rose-deep/40 px-6 py-3 font-body text-xs uppercase tracking-[0.2em] text-rose-deep hover:bg-rose-deep hover:text-paper transition-colors"
          >
            Dengarkan lagu ini
          </a>
        </div>
      </div>
    </section>
  );
}
