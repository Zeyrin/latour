import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { contact, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact & réservation",
  description:
    "Réservez une suite, un week-end, une cure ou un soin au Château Latour Ségur, à Lussac Saint-Émilion. Réponse directe par téléphone ou e-mail.",
  alternates: { canonical: "/contact" },
};

/**
 * Page de conversion. Sur mobile, l'appel vient en premier et en plein bouton
 * avant tout formulaire : c'est le canal qui convertit, le formulaire est
 * l'option pour ceux qui préfèrent écrire. Pas de hero : on arrive ici pour
 * agir, pas pour découvrir.
 */
export default function ContactPage() {
  return (
    <article className="container-latour section-y">
      <header className="max-w-2xl">
        <p className="eyebrow text-stone">{contact.eyebrow}</p>
        <h1 className="title-section mt-3">{contact.title}</h1>
        <p className="mt-5 text-stone">{contact.text}</p>
      </header>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href={site.phoneHref} className="m3-button m3-filled m3-state">
          {site.phone}
        </a>
        <a href={`mailto:${contact.email}`} className="m3-button m3-outlined m3-state">
          {contact.email}
        </a>
      </div>
      <p className="mt-3 text-sm text-stone">{contact.hours}</p>

      <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-[3fr_2fr] md:gap-16">
        <section aria-labelledby="demande-titre">
          <h2 id="demande-titre" className="text-2xl">
            Votre demande par écrit
          </h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </section>

        <aside className="grid content-start gap-10">
          <section aria-labelledby="adresse-titre">
            <h2 id="adresse-titre" className="eyebrow text-stone">
              Nous trouver
            </h2>
            <address className="mt-3 not-italic">
              {site.name}
              <br />
              {site.address.street}
              <br />
              {site.address.city}
            </address>
            <a
              href={site.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="m3-button m3-text-button m3-state -ml-3 mt-2"
            >
              Ouvrir dans Google Maps
            </a>
          </section>

          <section aria-labelledby="acces-titre">
            <h2 id="acces-titre" className="eyebrow text-stone">
              Accès
            </h2>
            <ul className="mt-3 grid gap-2 text-stone">
              {contact.access.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="cadeau-titre">
            <h2 id="cadeau-titre" className="eyebrow text-stone">
              Offrir un séjour ou un soin
            </h2>
            <p className="mt-3 text-stone">
              Les bons cadeaux s&apos;achètent en ligne et se reçoivent par e-mail.
            </p>
            <a
              href={site.giftUrl}
              target="_blank"
              rel="noreferrer"
              className="m3-button m3-outlined m3-state mt-4"
            >
              Bon cadeau
            </a>
          </section>
        </aside>
      </div>
    </article>
  );
}
