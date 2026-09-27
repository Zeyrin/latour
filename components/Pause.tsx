import Media from "@/components/Media";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { pause } from "@/lib/content";

/** Respiration entre deux sections : une phrase sur une photo du domaine. */
export default function Pause() {
  return (
    <section aria-labelledby="pause-titre" className="on-dark relative isolate overflow-hidden bg-brand text-center text-white">
      <div className="parallax -z-10">
        <div className="left-half">
          <Media asset={pause.media} sizes="200vw" quality={65} />
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-black/45" />

      <Reveal className="container-latour py-28 md:py-40">
        <p className="eyebrow text-white/80">{pause.eyebrow}</p>
        <h2 id="pause-titre" className="title-section mx-auto mt-6 max-w-4xl text-white">
          <SplitText text={pause.title} />
        </h2>
        <span aria-hidden className="mx-auto mt-10 block h-12 w-px bg-white/60" />
      </Reveal>
    </section>
  );
}
