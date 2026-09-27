"use client";

import { useEffect, useRef } from "react";

/**
 * Chiffre qui défile jusqu'à sa valeur à l'entrée dans l'écran. Le rendu
 * serveur porte la valeur finale : sans JavaScript, ou avec les animations
 * réduites, le chiffre s'affiche tel quel. Les plages (« 28–80 ») défilent
 * nombre par nombre. Le texte est écrit directement dans le DOM : pas de
 * rendu React à chaque image.
 */
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !/\d/.test(value)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const at = (progress: number) =>
      value.replace(/\d+/g, (n) => String(Math.round(Number(n) * progress)));

    // Hors de l'écran au chargement : on part de zéro. Déjà visible : on ne
    // touche à rien, un chiffre qui retombe sous les yeux serait un saut.
    const { top } = el.getBoundingClientRect();
    if (top < window.innerHeight) return;
    el.textContent = at(0);

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const duration = 1800;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          // Même amortissement que les autres mouvements de la page
          el.textContent = at(1 - Math.pow(1 - t, 4));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = value;
    };
  }, [value]);

  return (
    <>
      <span ref={ref} aria-hidden className="tabular-nums">
        {value}
      </span>
      <span className="sr-only">{value}</span>
    </>
  );
}
