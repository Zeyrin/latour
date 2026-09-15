import Image from "next/image";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import { footerLinks, site } from "@/lib/content";

/**
 * Trois colonnes de même nature : un intitulé, puis son contenu, toutes
 * alignées à gauche. La version précédente mélangeait une liste, une paire de
 * liens soulignés et une colonne alignée à droite — trois traitements pour un
 * seul pied de page.
 */

/** Liens de navigation du pied de page, réunis en une seule liste. */
const links = [
  ...footerLinks,
  { label: "Nous localiser", href: site.mapUrl },
  { label: "Nous laisser un mot", href: "/contact" },
];

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="eyebrow text-brand">{children}</h2>;
}

export default function Footer() {
  return (
    <footer className="bg-sand">
      <Newsletter />

      <div className="container-latour grid gap-12 border-t border-line py-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <div>
          <ColumnTitle>Le domaine</ColumnTitle>

          <Image
            src="/images/logo-latour.svg"
            alt={site.name}
            width={140}
            height={68}
            className="mt-5 h-16 w-auto"
          />

          <address className="mt-5 not-italic text-stone">
            {site.name} – Suites &amp; Spa
            <br />
            {site.address.street}
            <br />
            {site.address.city}
          </address>

          <a href={site.phoneHref} className="m3-button m3-text-button m3-state -ml-3 mt-2">
            {site.phone}
          </a>
        </div>

        <div>
          <ColumnTitle>Laissez-nous vous aider</ColumnTitle>

          {/* Boutons texte M3 dimensionnés au contenu : une ligne pleine
              largeur de 48dp par lien transformait la colonne en pavé. */}
          <ul className="mt-3 flex flex-col items-start">
            {links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="m3-button m3-text-button m3-state -ml-3">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ColumnTitle>Monument historique</ColumnTitle>

          {/* Empilement vertical. Côte à côte, le badge mangeait la largeur de
              la colonne et réduisait le texte à un ruban de quelques mots. */}
          <div className="mt-5">
            <Image
              src="/images/logo-monument-historique.webp"
              alt="Monument historique de France"
              width={512}
              height={512}
              // Sans cet indice, le navigateur retient une variante de 1080px
              // pour un badge affiché à 176 : le fichier source fait 3840px.
              sizes="176px"
              className="h-44 w-auto"
            />

            <div>
              <p className="mt-5 max-w-xs text-sm text-stone">{site.heritage}</p>

              <p className="eyebrow mt-8 text-stone">Nous suivre</p>
              <div className="mt-3 flex gap-2">
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="m3-icon-button m3-icon-button-outlined m3-state"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3 0-1.3-.1-2.45-.1-2.4 0-4.05 1.5-4.05 4.2v2.2H7.5V13h2.7v8h3.3Z" />
                  </svg>
                </a>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="m3-icon-button m3-icon-button-outlined m3-state"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.25.07 1.63.07 4.81s0 3.56-.07 4.81c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.25.06-1.63.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.56 2.2 15.18 2.2 12s0-3.56.07-4.81c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.44 2.21 8.82 2.2 12 2.2Zm0 1.8c-3.13 0-3.49.01-4.72.07-.9.04-1.39.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71-.06 1.23-.07 1.59-.07 4.72s.01 3.49.07 4.72c.04.9.19 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.23.06 1.59.07 4.72.07s3.49-.01 4.72-.07c.9-.04 1.39-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.06-1.23.07-1.59.07-4.72s-.01-3.49-.07-4.72c-.04-.9-.19-1.39-.32-1.71a2.9 2.9 0 0 0-.69-1.06 2.9 2.9 0 0 0-1.06-.69c-.32-.13-.81-.28-1.71-.32-1.23-.06-1.59-.07-4.72-.07Zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88Zm0 8.15a3.21 3.21 0 1 0 0-6.42 3.21 3.21 0 0 0 0 6.42Zm6.29-8.35a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="container-latour py-6 pb-24 text-center text-sm text-mist sm:pb-6">
          © {new Date().getFullYear()} {site.name} – Suites &amp; Spa
        </p>
      </div>
    </footer>
  );
}
