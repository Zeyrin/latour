import type { Metadata } from "next";
import { contact, legal, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales et politique de confidentialité du site ${site.name}.`,
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

/**
 * Mentions légales (art. 6 LCEN) et confidentialité (RGPD). Le site ne pose
 * aucun cookie, ne charge aucun script tiers et ne stocke aucune donnée : le
 * formulaire de contact passe par la messagerie du visiteur. La politique
 * tient donc en quelques lignes, ce qui est vrai et vérifiable.
 */
export default function MentionsLegalesPage() {
  return (
    <article className="container-latour section-y">
      <header className="max-w-2xl">
        <p className="eyebrow text-stone">Informations légales</p>
        <h1 className="title-section mt-3">Mentions légales</h1>
      </header>

      <div className="mt-10 grid max-w-3xl gap-10 text-stone md:mt-14">
        <section aria-labelledby="editeur">
          <h2 id="editeur" className="text-2xl text-brand">
            Éditeur du site
          </h2>
          <dl className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-[10rem_1fr]">
            <dt className="eyebrow pt-1">Société</dt>
            <dd>
              {legal.company.name}, exploitant sous l&apos;enseigne {legal.company.tradeName}
            </dd>
            <dt className="eyebrow pt-1">Forme</dt>
            <dd>{legal.company.form}</dd>
            <dt className="eyebrow pt-1">Immatriculation</dt>
            <dd>
              {legal.company.rcs}
              <br />
              SIREN {legal.company.siren} — APE {legal.company.ape}
            </dd>
            <dt className="eyebrow pt-1">Siège</dt>
            <dd>
              {site.address.street}, {site.address.city}, France
            </dd>
            <dt className="eyebrow pt-1">Contact</dt>
            <dd>
              <a href={site.phoneHref} className="underline underline-offset-4">
                {site.phone}
              </a>
              <br />
              <a href={`mailto:${contact.email}`} className="underline underline-offset-4">
                {contact.email}
              </a>
            </dd>
            <dt className="eyebrow pt-1">Direction</dt>
            <dd>{legal.company.manager}</dd>
            <dt className="eyebrow pt-1">Publication</dt>
            <dd>Directrice de la publication : {legal.company.publisher}</dd>
          </dl>
        </section>

        <section aria-labelledby="hebergeur">
          <h2 id="hebergeur" className="text-2xl text-brand">
            Hébergement
          </h2>
          <p className="mt-4">
            {legal.host.name}
            <br />
            {legal.host.address}
          </p>
        </section>

        <section aria-labelledby="donnees">
          <h2 id="donnees" className="text-2xl text-brand">
            Données personnelles
          </h2>
          <p className="mt-4">
            Ce site ne dépose aucun cookie, n&apos;utilise aucun outil de mesure d&apos;audience et
            ne charge aucun service tiers. Aucune donnée n&apos;est collectée lors de votre
            navigation.
          </p>
          <p className="mt-3">
            Le formulaire de contact ouvre votre propre messagerie : les informations que vous
            nous adressez (nom, coordonnées, dates de séjour) nous parviennent par e-mail et ne
            servent qu&apos;à répondre à votre demande et, le cas échéant, à gérer votre
            réservation. Elles sont conservées le temps de la relation commerciale et des
            obligations comptables, puis supprimées.
          </p>
          <p className="mt-3">
            Conformément au Règlement général sur la protection des données (RGPD) et à la loi
            Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification,
            d&apos;effacement, d&apos;opposition et de portabilité de vos données. Pour l&apos;exercer,
            écrivez à{" "}
            <a href={`mailto:${contact.email}`} className="underline underline-offset-4">
              {contact.email}
            </a>{" "}
            ou par courrier au siège. Vous pouvez également saisir la CNIL (cnil.fr).
          </p>
          <p className="mt-3">
            Les bons cadeaux sont vendus par Secret Box sur un site distinct
            (chateaulatoursegur.secretbox.fr), soumis à ses propres conditions et à sa propre
            politique de confidentialité.
          </p>
        </section>

        <section aria-labelledby="propriete">
          <h2 id="propriete" className="text-2xl text-brand">
            Propriété intellectuelle
          </h2>
          <p className="mt-4">
            L&apos;ensemble des textes, photographies, logos et éléments graphiques de ce site est
            la propriété de {legal.company.name} ou de ses partenaires, et protégé par le Code de
            la propriété intellectuelle. Toute reproduction ou représentation, totale ou
            partielle, sans autorisation écrite préalable est interdite. TerreHappy® est une
            marque déposée.
          </p>
        </section>

        <section aria-labelledby="droit">
          <h2 id="droit" className="text-2xl text-brand">
            Droit applicable
          </h2>
          <p className="mt-4">
            Le présent site et ses mentions légales sont soumis au droit français. En cas de
            litige, et à défaut de résolution amiable, les tribunaux français sont seuls
            compétents.
          </p>
        </section>
      </div>
    </article>
  );
}
