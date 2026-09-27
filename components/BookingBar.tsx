"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";

/**
 * Barre d'action mobile : sur petit écran, réserver doit rester à portée de
 * pouce sans remonter au header. Elle n'apparaît qu'une fois le hero dépassé,
 * pour ne pas concurrencer les trois portes du bandeau d'accueil.
 *
 * Trois actions de même largeur, qui couvrent les trois facettes : appeler
 * (le vrai canal de réservation aujourd'hui), réserver une suite ou un soin,
 * demander un devis de séminaire. Libellés courts : trois boutons M3 doivent
 * tenir sur 360 px sans passer à la ligne.
 */
export default function BookingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tab = visible ? undefined : -1;

  return (
    <div
      className={
        "fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 backdrop-blur-sm transition-transform duration-500 ease-(--ease-editorial) sm:hidden " +
        (visible ? "translate-y-0" : "translate-y-full")
      }
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-hidden={!visible}
    >
      <div className="grid grid-cols-3 gap-2 p-2">
        <a href={site.phoneHref} tabIndex={tab} className="m3-button m3-outlined m3-state px-2">
          Appeler
        </a>
        <Link href={site.bookingUrl} tabIndex={tab} className="m3-button m3-filled m3-state px-2">
          Réserver
        </Link>
        <Link href="/contact" tabIndex={tab} className="m3-button m3-outlined m3-state px-2">
          Devis
        </Link>
      </div>
    </div>
  );
}
