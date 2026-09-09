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

  // Le menu mobile se referme au changement de page
  useEffect(() => setOpen(false), [pathname]);

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
          className="flex shrink-0 items-center"
          aria-label={`${site.name}, retour à l'accueil`}
        >
          <Image
            src="/images/LOGO_LATOUR.svg"
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
                  className={`eyebrow relative whitespace-nowrap py-2 transition-colors ${
                    solid ? "text-ink hover:text-brand" : "text-white hover:text-white/70"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100 ${
                      active ? "scale-x-100" : ""
                    }`}
                  />
                </Link>

                {"children" in item && item.children ? (
                  <div className="invisible absolute left-1/2 top-full z-10 w-64 -translate-x-1/2 translate-y-1 pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <ul className="border border-line bg-white py-2 shadow-lg">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-5 py-2.5 text-[0.95rem] text-stone transition-colors hover:bg-sand hover:text-brand"
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
          <Link
            href="/bon-cadeau"
            className="eyebrow tap hidden border border-brand bg-brand px-5 text-white transition-colors hover:bg-transparent hover:text-brand sm:inline-flex"
          >
            Bon cadeau
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className={`-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[5px] transition-colors xl:hidden ${
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
              <Link href={item.href} className="eyebrow tap w-full justify-start py-3 text-ink">
                {item.label}
              </Link>

              {"children" in item && item.children ? (
                <ul className="pb-3 pl-4">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="tap w-full justify-start text-stone transition-colors hover:text-brand"
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
            <Link
              href="/bon-cadeau"
              className="eyebrow tap w-full bg-brand px-5 text-center text-white"
            >
              Bon cadeau
            </Link>
          </li>

          <li className="pb-6 text-center">
            <a href={site.phoneHref} className="tap text-brand">
              {site.phone}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
