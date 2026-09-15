"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type GalleryItem = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
};

/** Une photo est disponible dès que le manifeste connaît ses dimensions. */
const isReady = (item: GalleryItem) => item.width !== undefined;

function Placeholder({ alt }: { alt: string }) {
  return (
    <div
      role="img"
      aria-label={alt + " — photo à venir"}
      className="flex h-full w-full flex-col items-center justify-center gap-2 bg-white/60 text-mist"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="1" stroke="currentColor" strokeWidth="1" />
        <circle cx="8.5" cy="10" r="1.5" fill="currentColor" />
        <path
          d="m4 17 5-4.5 4 3.5 3-2.5 4 3.5"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="eyebrow text-[0.65rem]">Photo à venir</span>
    </div>
  );
}

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [openAt, setOpenAt] = useState<number | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const touchStart = useRef<number | null>(null);

  const openable = items.filter(isReady);

  const step = useCallback(
    (delta: number) =>
      setOpenAt((current) => {
        if (current === null) return current;
        return (current + delta + openable.length) % openable.length;
      }),
    [openable.length],
  );

  // Échap pour fermer, flèches pour naviguer, défilement de fond bloqué,
  // et retour du focus sur la vignette d'origine à la fermeture.
  useEffect(() => {
    if (openAt === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenAt(null);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };

    const previousOverflow = document.body.style.overflow;
    const returnFocusTo = lastFocused.current;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeButton.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      returnFocusTo?.focus();
    };
    // Volontairement dépendant du seul passage ouvert/fermé : rouvrir sur une
    // autre photo ne doit pas réinitialiser le focus.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openAt === null, step]);

  const current = openAt === null ? null : openable[openAt];

  return (
    <>
      {/* La première vignette occupe deux colonnes : rythme éditorial plutôt
          qu'une grille uniforme, et la mise en page tient dès 2 colonnes. */}
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {items.map((item, index) => {
          const ready = isReady(item);
          const openIndex = openable.findIndex((o) => o.src === item.src);

          return (
            <li key={item.src} className={index === 0 ? "col-span-2 row-span-2" : undefined}>
              <button
                type="button"
                disabled={!ready}
                onClick={(e) => {
                  lastFocused.current = e.currentTarget;
                  setOpenAt(openIndex);
                }}
                aria-label={ready ? "Agrandir : " + item.alt : undefined}
                className="group m3-state m3-corner-medium relative block aspect-square w-full bg-sand text-white disabled:cursor-default"
              >
                {ready ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes={
                      index === 0
                        ? "(min-width: 768px) 50vw, 100vw"
                        : "(min-width: 768px) 25vw, 50vw"
                    }
                    loading="lazy"
                    placeholder={item.blurDataURL ? "blur" : "empty"}
                    blurDataURL={item.blurDataURL}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                ) : (
                  <Placeholder alt={item.alt} />
                )}
              </button>
            </li>
          );
        })}
      </ul>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="on-dark fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 motion-safe:animate-reveal"
          onClick={() => setOpenAt(null)}
          onTouchStart={(e) => {
            touchStart.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const start = touchStart.current;
            if (start === null) return;
            const delta = e.changedTouches[0].clientX - start;
            if (Math.abs(delta) > 50) step(delta < 0 ? 1 : -1);
            touchStart.current = null;
          }}
        >
          <button
            ref={closeButton}
            type="button"
            onClick={() => setOpenAt(null)}
            aria-label="Fermer"
            className="m3-icon-button m3-icon-button-outlined m3-state absolute right-4 top-4 text-xl"
          >
            ×
          </button>

          {openable.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Photo précédente"
                className="m3-icon-button m3-icon-button-outlined m3-state absolute left-2 text-xl sm:left-6"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Photo suivante"
                className="m3-icon-button m3-icon-button-outlined m3-state absolute right-2 text-xl sm:right-6"
              >
                ›
              </button>
            </>
          ) : null}

          <figure className="max-h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width ?? 1600}
              height={current.height ?? 1067}
              sizes="(min-width: 1024px) 1024px, 100vw"
              placeholder={current.blurDataURL ? "blur" : "empty"}
              blurDataURL={current.blurDataURL}
              className="m3-corner-medium mx-auto max-h-[78svh] w-auto object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-white/80">
              {current.alt}
              <span className="ml-3 text-white/50">
                {(openAt ?? 0) + 1} / {openable.length}
              </span>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
