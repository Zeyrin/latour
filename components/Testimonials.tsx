"use client";

import { useState } from "react";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.items.length;

  const go = (next: number) => setIndex((next + total) % total);

  return (
    <section className="bg-brand py-20 text-white md:py-28">
      <div className="container-latour">
        <h2 className="text-center text-3xl uppercase text-white md:text-4xl">
          {testimonials.title}
        </h2>

        <div className="relative mx-auto mt-12 max-w-3xl text-center">
          {testimonials.items.map((item, i) => (
            <blockquote
              key={item.author}
              hidden={i !== index}
              className="space-y-5"
            >
              <p className="text-xl italic md:text-2xl">{item.heading}</p>
              <p className="text-white/85">« {item.quote} »</p>
              <footer className="eyebrow text-white/70">{item.author}</footer>
            </blockquote>
          ))}

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Témoignage précédent"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 transition-colors hover:bg-white hover:text-brand"
            >
              ‹
            </button>

            <ul className="flex gap-2">
              {testimonials.items.map((item, i) => (
                <li key={item.author}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Témoignage ${i + 1}`}
                    aria-current={i === index}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      i === index ? "bg-white" : "bg-white/40"
                    }`}
                  />
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Témoignage suivant"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 transition-colors hover:bg-white hover:text-brand"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
