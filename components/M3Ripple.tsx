"use client";

import { useEffect } from "react";

/**
 * Onde d'appui Material 3.
 *
 * Un seul écouteur délégué au document, plutôt qu'un composant enveloppant
 * chaque bouton : tous les éléments portant `m3-state` en bénéficient, y
 * compris ceux rendus côté serveur, et aucune section n'a besoin de passer
 * cliente pour ça.
 */
export default function M3Ripple() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const host = target.closest<HTMLElement>(".m3-state");
      if (!host) return;
      if (host.matches(":disabled, [aria-disabled='true']")) return;

      const rect = host.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Rayon M3 : du point d'appui jusqu'au coin le plus éloigné, pour que
      // l'onde couvre le conteneur quel que soit l'endroit touché.
      const radius = Math.hypot(
        Math.max(x, rect.width - x),
        Math.max(y, rect.height - y),
      );

      const ripple = document.createElement("span");
      ripple.className = "m3-ripple";
      ripple.style.width = `${radius * 2}px`;
      ripple.style.height = `${radius * 2}px`;
      ripple.style.left = `${x - radius}px`;
      ripple.style.top = `${y - radius}px`;
      ripple.addEventListener("animationend", () => ripple.remove());

      host.appendChild(ripple);
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return null;
}
