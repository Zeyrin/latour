"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

/**
 * Barre d'action mobile : sur petit écran, réserver et appeler doivent rester
 * à portée de pouce sans remonter au header. Elle n'apparaît qu'une fois le
 * hero dépassé, pour ne pas concurrencer l'appel à l'action principal.
 */
export default function BookingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={
        "fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 backdrop-blur-sm transition-transform duration-300 sm:hidden " +
        (visible ? "translate-y-0" : "translate-y-full")
      }
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-hidden={!visible}
    >
      <div className="flex items-stretch gap-2 p-2">
        <a
          href={site.phoneHref}
          tabIndex={visible ? undefined : -1}
          className="m3-button m3-outlined m3-state flex-1"
        >
          Appeler
        </a>
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noreferrer"
          tabIndex={visible ? undefined : -1}
          className="m3-button m3-filled m3-state flex-1"
        >
          Réserver
        </a>
      </div>
    </div>
  );
}
