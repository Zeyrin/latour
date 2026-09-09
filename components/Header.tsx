"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Le header d'origine passe en fond opaque dès le premier défilement
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-latour flex items-center justify-between gap-6 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label={site.name}>
          <Image
            src="/images/LOGO_LATOUR.svg"
            alt={`${site.name} — ${site.tagline}`}
            width={132}
            height={64}
            priority
            className={`h-14 w-auto transition ${
              scrolled || open ? "" : "brightness-0 invert"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {nav.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={`eyebrow whitespace-nowrap transition-colors hover:text-brand ${
                  scrolled ? "text-ink" : "text-white"
                }`}
              >
                {item.label}
              </Link>
              {"children" in item && item.children ? (
                <div className="invisible absolute left-1/2 top-full z-10 w-64 -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="border border-line bg-white py-2 shadow-lg">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-5 py-2 text-[0.95rem] text-stone transition-colors hover:bg-sand hover:text-brand"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/bon-cadeau"
            className="eyebrow hidden border border-brand bg-brand px-5 py-3 text-white transition-colors hover:bg-transparent hover:text-brand md:inline-block"
          >
            Bon cadeau
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden ${
              scrolled || open ? "text-brand" : "text-white"
            }`}
          >
            <span className="block h-px w-6 bg-current" />
            <span className="block h-px w-6 bg-current" />
            <span className="block h-px w-6 bg-current" />
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="border-t border-line bg-white lg:hidden"
          aria-label="Navigation mobile"
        >
          <ul className="container-latour flex flex-col py-4">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-line/60 last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="eyebrow block py-3 text-ink"
                >
                  {item.label}
                </Link>
                {"children" in item && item.children ? (
                  <ul className="pb-3 pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-1.5 text-stone"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="/bon-cadeau"
                onClick={() => setOpen(false)}
                className="eyebrow block bg-brand px-5 py-3 text-center text-white"
              >
                Bon cadeau
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
