import type { Metadata } from "next";
import { Newsreader, Roboto } from "next/font/google";
import BookingBar from "@/components/BookingBar";
import Header from "@/components/Header";
import M3Ripple from "@/components/M3Ripple";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-newsreader",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  // Domaine canonique : les anciens domaines redirigent ici (redirects.mjs)
  alternates: { canonical: "/" },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // `suppressHydrationWarning` ne porte que sur les attributs de <html>
    // lui-même, pas sur ses descendants : les extensions de navigateur (barres
    // de traduction notamment) réécrivent sa classe avant l'hydratation, et
    // React signalait un écart qui n'existe pas dans notre rendu.
    <html
      lang="fr"
      className={`${newsreader.variable} ${roboto.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Sans JavaScript, les sections animées au défilement restent visibles */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important}`}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#contenu"
          className="m3-button m3-filled m3-state sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <BookingBar />
        <M3Ripple />
      </body>
    </html>
  );
}
