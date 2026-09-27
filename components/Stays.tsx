import Link from "next/link";
import ArrowLink from "@/components/ArrowLink";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { site, stays } from "@/lib/content";

/** Week-ends et cures : les formules qui combinent les univers. */
export default function Stays() {
  return (
    <section aria-labelledby="sejours-titre" className="section-y">
      <div className="container-latour">
        <Reveal className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow text-stone">{stays.eyebrow}</p>
            <h2 id="sejours-titre" className="title-section mt-4">
              <SplitText text={stays.title} />
            </h2>
          </div>
          <div className="text-stone md:text-right">
            {stays.aside.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-12 md:mt-16 md:grid-cols-3 md:gap-8">
          {stays.items.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * 0.12}>
                <Link href={item.href} className="group block">
                  <div
                    className="reveal-mask relative aspect-3/2 overflow-hidden bg-hairline"
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <div className="reveal-mask-inner zoom-on-hover absolute inset-0">
                      <Media asset={item.media} sizes="(min-width: 768px) 33vw, 100vw" />
                    </div>
                  </div>
                  <p className="eyebrow mt-6 text-[0.5625rem] text-stone">{item.eyebrow}</p>
                  <h3 className="mt-3 text-2xl md:text-3xl">
                    <span className="row-link pb-1">{item.title}</span>
                  </h3>
                  <p className="mt-4 text-stone">{item.text}</p>
                  <span className="eyebrow mt-6 inline-flex items-center gap-4 text-[0.5625rem] text-brand">
                    {stays.cta}
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4 transition-transform duration-700 ease-(--ease-editorial) group-hover:translate-x-1.5">
                      <path d="M4 12h16m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-16 flex flex-col items-center justify-between gap-4 border-y border-hairline py-8 sm:flex-row md:mt-20">
          <p className="text-center text-lg italic text-brand sm:text-left md:text-xl">{stays.gift.text}</p>
          <ArrowLink href={site.giftUrl}>{stays.gift.label}</ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
