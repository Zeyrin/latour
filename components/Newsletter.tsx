"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  return (
    <section className="container-latour section-y text-center">
      <h2 className="mx-auto max-w-2xl text-2xl md:text-3xl">
        Inscrivez-vous à notre newsletter pour recevoir des offres personnalisées.
      </h2>

      <form
        className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: brancher sur le prestataire d'emailing (Brevo / Mailchimp)
          setStatus("sending");
          window.setTimeout(() => setStatus("sent"), 400);
        }}
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Adresse email
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          disabled={status !== "idle"}
          className="min-h-11 flex-1 border border-line bg-white px-4 py-3 outline-none transition-colors placeholder:text-mist focus:border-brand disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status !== "idle"}
          className="eyebrow tap border border-brand bg-brand px-8 text-white transition-colors duration-300 hover:bg-transparent hover:text-brand disabled:opacity-60 disabled:hover:bg-brand disabled:hover:text-white"
        >
          {status === "sent" ? "Inscrit" : "S'inscrire"}
        </button>
      </form>

      <p role="status" className="mt-4 min-h-6 text-brand">
        {status === "sent" ? "Merci, votre inscription a bien été prise en compte." : ""}
      </p>

      <p className="mx-auto max-w-xl text-sm text-stone">
        En cliquant sur «&nbsp;s&apos;inscrire&nbsp;», vous acceptez de recevoir des informations
        sur les nouvelles, les événements et les services du Château Latour Ségur.
      </p>
    </section>
  );
}
