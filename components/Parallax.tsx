"use client";

import { useEffect, useRef } from "react";

export default function Parallax({
  children,
  speed = 0.22,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current!;
    const onScroll = () => {
      const y = window.scrollY;
      el.style.willChange = "transform";
      el.style.transform = `translateY(${y * speed * -0.2}px)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return <div ref={ref} className={className}>{children}</div>;
}
