"use client";

import { useRef } from "react";

export default function Tilt({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const damp = 20;
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -damp;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * damp;
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const reset = () => { if (ref.current) ref.current.style.transform = ""; };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className={className}>
      {children}
    </div>
  );
}
