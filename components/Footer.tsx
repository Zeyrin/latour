import Image from "next/image";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import { footerLinks, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-sand">
      <Newsletter />

      <div className="container-latour grid gap-12 border-t border-line py-16 md:grid-cols-3">
        <div>
          <Image
            src="/images/LOGO_LATOUR.svg"
            alt={site.name}
            width={140}
            height={68}
            className="h-16 w-auto"
          />
          <address className="mt-6 not-italic text-stone">
            {site.name} – Suites &amp; Spa
            <br />
            {site.address.street}
            <br />
            {site.address.city}
          </address>
          <a
            href={site.phoneHref}
            className="mt-3 inline-block text-brand transition-opacity hover:opacity-70"
          >
            {site.phone}
          </a>
        </div>

        <div>
          <h2 className="eyebrow text-brand">Laissez-nous vous aider</h2>
          <ul className="mt-5 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-stone transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-5">
            <a
              href={site.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="eyebrow text-brand underline underline-offset-4"
            >
              Nous localiser
            </a>
            <Link href="/contact" className="eyebrow text-brand underline underline-offset-4">
              Nous laisser un mot
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 md:items-end">
          <Image
            src="/images/footer_monumentdefrance.png"
            alt="Monument historique de France"
            width={110}
            height={110}
            className="h-24 w-auto"
          />
          <p className="max-w-56 text-sm text-stone md:text-right">{site.heritage}</p>
          <div className="flex gap-4">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand text-brand transition-colors hover:bg-brand hover:text-white"
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
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand text-brand transition-colors hover:bg-brand hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.25.07 1.63.07 4.81s0 3.56-.07 4.81c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.25.06-1.63.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.56 2.2 15.18 2.2 12s0-3.56.07-4.81c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.44 2.21 8.82 2.2 12 2.2Zm0 1.8c-3.13 0-3.49.01-4.72.07-.9.04-1.39.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71-.06 1.23-.07 1.59-.07 4.72s.01 3.49.07 4.72c.04.9.19 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.23.06 1.59.07 4.72.07s3.49-.01 4.72-.07c.9-.04 1.39-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.06-1.23.07-1.59.07-4.72s-.01-3.49-.07-4.72c-.04-.9-.19-1.39-.32-1.71a2.9 2.9 0 0 0-.69-1.06 2.9 2.9 0 0 0-1.06-.69c-.32-.13-.81-.28-1.71-.32-1.23-.06-1.59-.07-4.72-.07Zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88Zm0 8.15a3.21 3.21 0 1 0 0-6.42 3.21 3.21 0 0 0 0 6.42Zm6.29-8.35a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="container-latour py-6 text-center text-sm text-mist">
          © {new Date().getFullYear()} {site.name} – Suites &amp; Spa
        </p>
      </div>
    </footer>
  );
}
