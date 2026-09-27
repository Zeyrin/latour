import { Fragment, type CSSProperties } from "react";

type Props = {
  text: string;
  /** Décalage de départ, en millisecondes */
  delay?: number;
};

/**
 * Découpe un titre en mots, chacun dans son propre cadre masqué, pour une
 * apparition mot à mot (voir `.split-word` dans globals.css). Le texte entier
 * reste lu d'un bloc par les lecteurs d'écran ; les mots découpés leur sont
 * masqués.
 */
export default function SplitText({ text, delay = 0 }: Props) {
  const words = text.split(" ");

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((word, i) => (
          <Fragment key={`${word}-${i}`}>
            <span className="split-word">
              <span style={{ "--i": i, "--d": `${delay}ms` } as CSSProperties}>{word}</span>
            </span>
            {i < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </span>
    </>
  );
}
