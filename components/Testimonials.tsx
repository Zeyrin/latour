"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/content";

const AUTOPLAY_MS = 7000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);
  const total = testimonials.items.length;

  const go = useCallback(
    (next: number) => setIndex((next + total) % total),
    [total],
  );

  // Défilement automatique, suspendu au survol, au focus clavier et hors écran
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => go(index + 1), AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [index, paused, go]);

  return (
    <section
      className="on-dark bg-brand section-y text-white"
      aria-roledescription="carrousel"
      aria-label={testimonials.title}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="container-latour">
        <h2 className="title-section text-center uppercase text-white">
          {testimonials.title}
        </h2>

        <div
          className="mx-auto mt-10 max-w-3xl md:mt-12"
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") go(index - 1);
            if (e.key === "ArrowRight") go(index + 1);
          }}
          onTouchStart={(e) => {
            touchStart.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const start = touchStart.current;
            if (start === null) return;
            const delta = e.changedTouches[0].clientX - start;
            if (Math.abs(delta) > 50) go(index + (delta < 0 ? 1 : -1));
            touchStart.current = null;
          }}
        >
          {/* Les témoignages sont superposés dans une même cellule de grille :
              la hauteur reste celle du plus long, donc aucun saut au changement */}
          <div className="grid" aria-live="polite">
            {testimonials.items.map((item, i) => (
              <blockquote
                key={item.author}
                aria-hidden={i !== index}
                className={`col-start-1 row-start-1 space-y-5 text-center transition-opacity duration-500 ${
                  i === index ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                <p className="text-xl italic md:text-2xl">{item.heading}</p>
                <p className="text-white/85">«&nbsp;{item.quote}&nbsp;»</p>
                <footer className="eyebrow text-white/70">{item.author}</footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Témoignage précédent"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-lg transition-colors hover:bg-white hover:text-brand"
            >
              ‹
            </button>

            <ul className="flex items-center gap-1">
              {testimonials.items.map((item, i) => (
                <li key={item.author}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Témoignage ${i + 1} sur ${total}`}
                    aria-current={i === index}
                    className="flex h-11 w-6 items-center justify-center"
                  >
                    <span
                      className={`block h-2 rounded-full transition-all duration-300 ${
                        i === index ? "w-5 bg-white" : "w-2 bg-white/40"
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Témoignage suivant"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-lg transition-colors hover:bg-white hover:text-brand"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
