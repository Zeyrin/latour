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
        className="mx-auto mt-8 flex max-w-xl flex-col items-stretch gap-4 sm:flex-row sm:items-start"
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: brancher sur le prestataire d'emailing (Brevo / Mailchimp)
          setStatus("sending");
          window.setTimeout(() => setStatus("sent"), 400);
        }}
      >
        {/* Champ « outlined » M3 : l'étiquette flotte et vient interrompre le
            trait du contour. Le placeholder d'un seul espace n'est là que pour
            que `:placeholder-shown` sache si le champ est vide. */}
        <div className="m3-field flex-1 text-left">
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            disabled={status !== "idle"}
            className="m3-field-input"
          />
          <label htmlFor="newsletter-email" className="m3-field-label">
            Adresse email
          </label>
        </div>

        <button
          type="submit"
          disabled={status !== "idle"}
          className="m3-button m3-filled m3-state sm:mt-2"
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
