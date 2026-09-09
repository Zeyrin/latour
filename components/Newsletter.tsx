"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="container-latour py-16 text-center">
      <h2 className="mx-auto max-w-2xl text-2xl md:text-3xl">
        Inscrivez-vous à notre newsletter pour recevoir des offres personnalisées.
      </h2>

      <form
        className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: brancher sur le prestataire d'emailing (Brevo / Mailchimp)
          setSent(true);
        }}
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="flex-1 border border-line bg-white px-4 py-3 outline-none focus:border-brand"
        />
        <button
          type="submit"
          className="eyebrow border border-brand bg-brand px-8 py-3 text-white transition-colors hover:bg-transparent hover:text-brand"
        >
          S&apos;inscrire
        </button>
      </form>

      {sent ? (
        <p className="mt-4 text-brand">Merci, votre inscription a bien été prise en compte.</p>
      ) : null}

      <p className="mx-auto mt-5 max-w-xl text-sm text-stone">
        En cliquant sur «&nbsp;s&apos;inscrire&nbsp;», vous acceptez de recevoir des informations
        sur les nouvelles, les événements et les services du Château Latour Ségur.
      </p>
    </section>
  );
}
