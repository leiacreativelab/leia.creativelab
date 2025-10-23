"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 transition-all duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur shadow-lg" : "bg-black/40 backdrop-blur"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-5 h-16 flex items-center justify-between">
        <a className="tracking-widest font-extrabold text-white">LEÏA CREATIVE LAB</a>
        <nav className="hidden sm:flex items-center gap-4">
          <a href="/skills" className="opacity-85 hover:opacity-100">Compétences</a>
          <a href="/portfolio" className="opacity-85 hover:opacity-100">Portfolio</a>
          <a href="/contact" className="btn btn-ghost">Contact</a>
          <a href="/contact" className="btn">Parler d&apos;un projet</a>
        </nav>
      </div>
    </header>
  );
}
