"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  /** Décalage en secondes pour échelonner plusieurs éléments d'une même rangée */
  delay?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Pas de cas particulier pour prefers-reduced-motion : globals.css ramène
    // la durée de l'animation à zéro, la section apparaît alors d'un coup.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal=""
      className={`${shown ? "animate-reveal" : "opacity-0"} ${className}`}
      style={shown && delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
