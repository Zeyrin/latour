import Business from "@/components/Business";
import Closing from "@/components/Closing";
import Domaine from "@/components/Domaine";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import SeoBlock from "@/components/SeoBlock";
import SuitesSpa from "@/components/SuitesSpa";
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
      {/* Suites et spa ensemble (même promesse, deux onglets) ; les
          séminaires dans leur propre section, autre public, autre parcours. */}
      <SuitesSpa />
      <Business />
      <Gallery />
      <Testimonials />
      {/* La conversion passe avant le texte de référencement, qui ferme la
          page en note discrète. */}
      <Closing />
      <SeoBlock />
    </>
  );
}
