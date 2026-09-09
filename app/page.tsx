import Business from "@/components/Business";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import SeoBlock from "@/components/SeoBlock";
import Spa from "@/components/Spa";
import Suites from "@/components/Suites";
import Testimonials from "@/components/Testimonials";
import Traditions from "@/components/Traditions";
import Welcome from "@/components/Welcome";
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
      <Welcome />
      <Traditions />
      <Suites />
      <Gallery />
      <Testimonials />
      <Spa />
      <Business />
      <SeoBlock />
    </>
  );
}
