import Chapter from "@/components/Chapter";
import Closing from "@/components/Closing";
import Domaine from "@/components/Domaine";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Pause from "@/components/Pause";
import SeoBlock from "@/components/SeoBlock";
import Stays from "@/components/Stays";
import Testimonials from "@/components/Testimonials";
import Univers from "@/components/Univers";
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
      {/* Suites, spa, séminaires : trois univers de même rang. Les cartes les
          présentent côte à côte, le domaine rappelle leur toit commun, puis
          chacun a son chapitre, bâti sur le même gabarit. */}
      <Univers />
      <Domaine />
      {chapters.map((chapter, index) => (
        <Chapter key={chapter.id} chapter={chapter} index={index} />
      ))}
      <Stays />
      <Pause />
      <Testimonials />
      <Gallery />
      {/* La conversion passe avant le texte de référencement, qui ferme la
          page en note discrète. */}
      <Closing />
      <SeoBlock />
    </>
  );
}
