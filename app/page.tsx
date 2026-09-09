"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import CustomCursor from "@/components/CustomCursor";
import MusicPlayer from "@/components/MusicPlayer";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import LoveLetter from "@/components/LoveLetter";
import Reasons from "@/components/Reasons";
import Playlist from "@/components/Playlist";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      <MusicPlayer ready={!loading} />
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <main className="bg-blush text-mauve">
        <Hero ready={!loading} />
        <Timeline />
        <Gallery />
        <LoveLetter />
        <Reasons />
        <Playlist />
        <Footer />
      </main>
    </>
  );
}