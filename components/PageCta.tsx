import Link from "next/link";
import { site } from "@/lib/content";

type Props = {
  title: string;
  text?: string;
  /** Libellé du bouton principal, qui mène à la page contact */
  primary?: string;
  /** Second bouton : par défaut le bon cadeau, sinon un lien interne */
  secondary?: { label: string; href: string };
};

/**
 * Fin de page intérieure : chaque page se termine par une sortie concrète.
 * Sur mobile la barre du bas est déjà là, mais un visiteur qui vient de lire
 * une page entière mérite une invitation qui parle de ce qu'il vient de lire.
 */
export default function PageCta({
  title,
  text,
  primary = "Réserver ou poser une question",
  secondary = { label: "Offrir un bon cadeau", href: site.giftUrl },
}: Props) {
  const external = secondary.href.startsWith("http");
  return (
    <section className="bg-sand">
      <div className="container-latour section-y text-center">
        <h2 className="title-section mx-auto max-w-2xl">{title}</h2>
        {text ? <p className="mx-auto mt-5 max-w-xl text-stone">{text}</p> : null}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link href="/contact" className="m3-button m3-filled m3-state w-full max-w-xs sm:w-auto">
            {primary}
          </Link>
          {external ? (
            <a
              href={secondary.href}
              target="_blank"
              rel="noreferrer"
              className="m3-button m3-outlined m3-state w-full max-w-xs sm:w-auto"
            >
              {secondary.label}
            </a>
          ) : (
            <Link
              href={secondary.href}
              className="m3-button m3-outlined m3-state w-full max-w-xs sm:w-auto"
            >
              {secondary.label}
            </Link>
          )}
        </div>
        <a href={site.phoneHref} className="m3-button m3-text-button m3-state mt-3">
          {site.phone}
        </a>
      </div>
    </section>
  );
}
