"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Le header d'origine passe en fond opaque dès le premier défilement
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Le menu mobile se referme au changement de page. Ajustement pendant le
  // rendu plutôt que dans un effet : pas de rendu en cascade.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Échap pour fermer, et blocage du défilement de fond quand le panneau est ouvert
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        solid ? "bg-white/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
      } ${solid ? "" : "on-dark"}`}
    >
      <div className="container-latour flex items-center justify-between gap-4 py-3 xl:gap-8">
        <Link
          href="/"
          className="m3-state m3-corner-medium flex shrink-0 items-center p-1"
          aria-label={`${site.name}, retour à l'accueil`}
        >
          <Image
            src="/images/logo-latour.svg"
            alt={`${site.name} — ${site.tagline}`}
            width={132}
            height={64}
            priority
            className={`h-11 w-auto transition-[filter,height] duration-300 md:h-14 ${
              solid ? "" : "brightness-0 invert"
            }`}
          />
        </Link>

        {/* Les libellés sont longs : la barre complète n'apparaît qu'à partir de xl */}
        <nav
          className="hidden items-center gap-6 xl:flex"
          aria-label="Navigation principale"
        >
          {nav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`m3-button m3-text-button m3-state relative whitespace-nowrap ${
                    solid ? "text-ink" : "text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-3 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-current transition-transform duration-300 group-hover:scale-x-100 ${
                      active ? "scale-x-100" : ""
                    }`}
                  />
                </Link>

                {"children" in item && item.children ? (
                  <div className="invisible absolute left-1/2 top-full z-10 w-64 -translate-x-1/2 translate-y-1 pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <ul className="m3-menu">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="m3-menu-item m3-state text-stone"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={site.giftUrl}
            target="_blank"
            rel="noreferrer"
            className="m3-button m3-filled m3-state hidden sm:inline-flex"
          >
            Bon cadeau
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className={`m3-icon-button m3-state -mr-2 flex-col gap-[5px] xl:hidden ${
              solid ? "text-brand" : "text-white"
            }`}
          >
            <span
              className={`block h-px w-6 bg-current transition-transform duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-current transition-transform duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Panneau mobile : défilable si la liste dépasse la hauteur d'écran */}
      <nav
        id="menu-mobile"
        aria-label="Navigation mobile"
        hidden={!open}
        className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-line bg-white xl:hidden"
      >
        <ul className="container-latour flex flex-col py-3">
          {nav.map((item) => (
            <li key={item.href} className="border-b border-line/60 last:border-0">
              <Link href={item.href} className="m3-menu-item m3-state text-ink">
                {item.label}
              </Link>

              {"children" in item && item.children ? (
                <ul className="pb-3 pl-4">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="m3-menu-item m3-state text-stone"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}

          <li className="py-4">
            <a
              href={site.giftUrl}
              target="_blank"
              rel="noreferrer"
              className="m3-button m3-filled m3-state w-full"
            >
              Bon cadeau
            </a>
          </li>

          <li className="pb-6 text-center">
            <a href={site.phoneHref} className="m3-button m3-text-button m3-state">
              {site.phone}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
