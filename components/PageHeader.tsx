import Media from "@/components/Media";
import type { MediaAsset } from "@/lib/media";

type Props = {
  eyebrow: string;
  title: string;
  text?: string;
  /** Photo de tête, facultative : les pages « utilitaires » s'en passent */
  media?: MediaAsset;
  children?: React.ReactNode;
};

/**
 * En-tête commun aux pages intérieures. Bien plus bas que le hero de
 * l'accueil : on arrive sur ces pages pour une information précise, la photo
 * situe sans faire défiler tout un écran avant le premier mot. Sur mobile,
 * elle passe en 16:10 pour laisser le titre visible dès l'ouverture.
 */
export default function PageHeader({ eyebrow, title, text, media, children }: Props) {
  return (
    <header className="container-latour pt-10 md:pt-16">
      {media ? (
        <div className="m3-corner-large relative mb-8 aspect-16/10 overflow-hidden bg-sand sm:aspect-21/9 md:mb-12">
          <Media asset={media} sizes="(min-width: 1140px) 1076px, 100vw" priority />
        </div>
      ) : null}
      <div className="max-w-2xl">
        <p className="eyebrow text-stone">{eyebrow}</p>
        <h1 className="title-section mt-3">{title}</h1>
        {text ? <p className="mt-5 text-stone md:text-lg">{text}</p> : null}
        {children}
      </div>
    </header>
  );
}
