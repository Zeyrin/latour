import { Fragment, type CSSProperties } from "react";

type Props = {
  /** Une ligne, ou deux : la seconde passe en italique, à la ligne */
  text: string | readonly [string, string];
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
  const lines = typeof text === "string" ? [text] : text;
  let index = 0;

  return (
    <>
      <span className="sr-only">{lines.join(" ")}</span>
      <span aria-hidden>
        {lines.map((line, l) => {
          const words = line.split(" ");
          return (
            <span key={line} className={l === 1 ? "block italic" : "block"}>
              {words.map((word, i) => (
                <Fragment key={`${word}-${i}`}>
                  <span className="split-word">
                    <span style={{ "--i": index++, "--d": `${delay}ms` } as CSSProperties}>
                      {word}
                    </span>
                  </span>
                  {i < words.length - 1 ? " " : null}
                </Fragment>
              ))}
            </span>
          );
        })}
      </span>
    </>
  );
}
