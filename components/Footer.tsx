import Image from "next/image";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import { footer, site } from "@/lib/content";

/**
 * Pied de page en quatre colonnes : la maison (logo et devise), les trois
 * univers, les instants à composer, puis les coordonnées. Les mentions
 * légales et le classement ferment la page sur une ligne.
 */

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="eyebrow text-[0.625rem] text-brand">{children}</h2>;
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const className =
    "inline-flex min-h-10 items-center text-stone transition-colors duration-500 hover:text-brand";
  return href.startsWith("http") ? (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-sand">
      <Newsletter />

      <div className="container-latour grid gap-12 border-t border-hairline py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:gap-10">
        <div>
          <Image
            src="/images/logo-latour.svg"
            alt={site.name}
            width={140}
            height={68}
            className="h-16 w-auto"
          />
          <p className="mt-6 text-stone">
            {footer.tagline[0]}
            <br />
            <span className="italic">{footer.tagline[1]}</span>
          </p>
        </div>

        {footer.columns.map((column) => (
          <div key={column.title}>
            <ColumnTitle>{column.title}</ColumnTitle>
            <ul className="mt-4">
              {column.links.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <ColumnTitle>Retrouvons-nous</ColumnTitle>
          <address className="mt-5 not-italic text-stone">
            {site.address.street}
            <br />
            {site.address.city}
          </address>
          <ul className="mt-3">
            <li>
              <FooterLink href={site.phoneHref}>{site.phone}</FooterLink>
            </li>
            <li>
              <FooterLink href={site.mapUrl}>Itinéraire</FooterLink>
            </li>
          </ul>
          <div className="mt-4 flex gap-2">
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="container-latour flex flex-col items-center justify-between gap-3 py-6 pb-24 text-sm text-mist sm:flex-row sm:pb-6">
          <p className="flex items-center gap-3">
            <Image
              src="/images/logo-monument-historique.webp"
              alt=""
              width={512}
              height={512}
              sizes="28px"
              className="h-7 w-auto opacity-70"
            />
            © {new Date().getFullYear()} {site.name} · {site.heritage}
          </p>
          <Link href="/mentions-legales" className="inline-flex min-h-10 items-center hover:text-brand">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
