import FacetPanel from "@/components/FacetPanel";
import { business } from "@/lib/content";

/**
 * Séminaires & Entreprises, à part des suites et du spa : autre public,
 * autre parcours (un devis, pas une réservation). Fond sable pour la
 * détacher visuellement de la section Suites & Spa en blanc juste au-dessus.
 */
export default function Business() {
  return (
    <section id="entreprises" className="bg-sand section-y">
      <div className="container-latour">
        <FacetPanel facet={business} />
      </div>
    </section>
  );
}
