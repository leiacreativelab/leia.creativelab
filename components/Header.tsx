"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header(){
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b border-white/10 ${scrolled ? "backdrop-blur bg-[#141514]/70" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-black tracking-widest uppercase bg-gradient-to-r from-white to-beige bg-clip-text text-transparent">
          LEÏA CREATIVE LAB
        </Link>
        <nav className="hidden sm:flex items-center gap-4">
          <Link href="/skills" className="opacity-90 hover:opacity-100 font-semibold">Compétences</Link>
          <Link href="/portfolio" className="opacity-90 hover:opacity-100 font-semibold">Portfolio</Link>
          <Link href="/offres" className="opacity-90 hover:opacity-100 font-semibold">Offres</Link>
          <Link href="/contact" className="btn">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
