import Closing from "@/components/Closing";
import Domaine from "@/components/Domaine";
import Facets from "@/components/Facets";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import SeoBlock from "@/components/SeoBlock";
import Testimonials from "@/components/Testimonials";
import { site } from "@/lib/content";

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
      {/* Les trois facettes (suites, spa, entreprises) dans une seule section
          à onglets, plutôt qu'un résumé suivi de trois sections détaillées :
          la page était trop longue à parcourir pour un contenu qui se
          répétait déjà en partie. */}
      <Facets />
      <Gallery />
      <Testimonials />
      {/* La conversion passe avant le texte de référencement, qui ferme la
          page en note discrète. */}
      <Closing />
      <SeoBlock />
    </>
  );
}
