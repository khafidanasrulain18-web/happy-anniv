"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type CursorVariant = "default" | "button" | "view";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const hasMoved = useRef(false);
  const [visible, setVisible] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [label, setLabel] = useState("");

  useEffect(() => {
    const isFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    if (!isFinePointer) return;

    document.documentElement.classList.add("has-custom-cursor");

    const dotX = gsap.quickTo(dotRef.current, "x", { duration: 0.12, ease: "power3" });
    const dotY = gsap.quickTo(dotRef.current, "y", { duration: 0.12, ease: "power3" });
    const ringX = gsap.quickTo(ringRef.current, "x", { duration: 0.45, ease: "power3" });
    const ringY = gsap.quickTo(ringRef.current, "y", { duration: 0.45, ease: "power3" });

    const handleMove = (e: MouseEvent) => {
      if (!hasMoved.current) {
        hasMoved.current = true;
        setVisible(true);
      }
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const handleOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>("[data-cursor]");
      if (!target) return;
      const kind = target.getAttribute("data-cursor") as CursorVariant | null;
      setVariant(kind ?? "default");
      setLabel(target.getAttribute("data-cursor-text") ?? "");
    };

    const handleOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>("[data-cursor]");
      if (!target) return;
      setVariant("default");
      setLabel("");
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, []);

  const isActive = variant !== "default";

  return (
    <>
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 z-[200] w-1.5 h-1.5 rounded-full bg-rose-deep pointer-events-none -translate-x-1/2 -translate-y-1/2 will-change-transform transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 z-[200] pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border transition-[width,height,background-color,border-color,opacity] duration-300 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        } ${
          variant === "button"
            ? "w-16 h-16 bg-rose border-rose"
            : variant === "view"
            ? "w-20 h-20 bg-mauve border-mauve"
            : "w-8 h-8 bg-transparent border-mauve/40"
        }`}
      >
        <span
          className={`font-body text-[10px] uppercase tracking-widest text-paper transition-opacity duration-200 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          {label}
        </span>
      </div>
    </>
  );
}
