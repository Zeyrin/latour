import Chapter from "@/components/Chapter";
import Closing from "@/components/Closing";
import Domaine from "@/components/Domaine";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Marquee from "@/components/Marquee";
import SeoBlock from "@/components/SeoBlock";
import Testimonials from "@/components/Testimonials";
import Triptych from "@/components/Triptych";
import { chapters, site } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BedAndBreakfast",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: "Lussac Saint-Émilion",
    postalCode: "33570",
    addressCountry: "FR",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Spa", value: true },
    { "@type": "LocationFeatureSpecification", name: "Piscine extérieure chauffée", value: true },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Highlights />
      <Domaine />
      {/* Suites, spa, séminaires : trois facettes de même rang. Le triptyque
          les présente côte à côte, puis chacune a son chapitre, bâti sur le
          même gabarit. */}
      <Triptych />
      {chapters.map((chapter, index) => (
        <Chapter key={chapter.id} chapter={chapter} index={index} />
      ))}
      <Marquee />
      {/* Témoignages (aplat sombre) avant la galerie (blanc), pour que la
          clôture, sombre elle aussi, ne leur soit pas accolée. */}
      <Testimonials />
      <Gallery />
      {/* La conversion passe avant le texte de référencement, qui ferme la
          page en note discrète. */}
      <Closing />
      <SeoBlock />
    </>
  );
}
