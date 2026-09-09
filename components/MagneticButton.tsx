"use client";

import { useRef, type MouseEvent as ReactMouseEvent, type ReactNode } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  cursorText?: string;
  className?: string;
}

export default function MagneticButton({
  children,
  onClick,
  cursorText = "Klik",
  className = "",
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMove = (e: ReactMouseEvent<HTMLButtonElement>) => {
    const el = btnRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;

    gsap.to(el, {
      x: relX * 0.35,
      y: relY * 0.35,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    const el = btnRef.current;
    if (!el) return;
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-cursor="button"
      data-cursor-text={cursorText}
      className={`relative inline-flex items-center justify-center rounded-full bg-rose-deep text-paper px-8 py-4 font-body text-xs uppercase tracking-[0.2em] ${className}`}
    >
      {children}
    </button>
  );
}
