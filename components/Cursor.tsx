"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "cursor";
    document.body.appendChild(cursor);

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const growTargets = "a, button, .btn, input, textarea, .case";
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest(growTargets)) cursor.classList.add("grow");
    };
    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest(growTargets)) cursor.classList.remove("grow");
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      cursor.style.display = "none";

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cursor.remove();
    };
  }, []);

  return null;
}
