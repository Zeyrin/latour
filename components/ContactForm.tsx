"use client";

import { useState } from "react";
import { contact, site } from "@/lib/content";

/**
 * Formulaire de demande sans serveur : à l'envoi, il ouvre le client mail du
 * visiteur avec un message déjà rédigé. Rien n'est stocké, rien ne transite
 * par nous — c'est le compromis honnête tant qu'il n'y a ni back-end ni
 * prestataire d'e-mailing. Sur mobile, ça ouvre directement l'app Mail.
 *
 * Les champs restent peu nombreux : nom, dates, ce que l'on souhaite, un mot.
 * Le téléphone est facultatif ; l'e-mail du visiteur est celui du client mail.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [stay, setStay] = useState(contact.stays[0]);
  const [message, setMessage] = useState("");

  const subject = `Demande de réservation — ${stay}`;
  const body = [
    `Bonjour Corinne,`,
    ``,
    `Je souhaite réserver : ${stay}`,
    arrival || departure ? `Dates : du ${arrival || "?"} au ${departure || "?"}` : null,
    ``,
    message,
    ``,
    name,
    phone ? `Tél. : ${phone}` : null,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <form
      className="grid gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = href;
      }}
    >
      <div className="m3-field">
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder=" "
          className="m3-field-input"
        />
        <label htmlFor="contact-name" className="m3-field-label">
          Votre nom
        </label>
      </div>

      <div className="m3-field">
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder=" "
          className="m3-field-input"
        />
        <label htmlFor="contact-phone" className="m3-field-label">
          Téléphone (facultatif)
        </label>
      </div>

      {/* Les dates natives : sur mobile, le sélecteur du système est bien plus
          efficace qu'un calendrier maison. */}
      <div className="grid grid-cols-2 gap-3">
        <div className="m3-field">
          <input
            id="contact-arrival"
            name="arrival"
            type="date"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
            placeholder=" "
            className="m3-field-input"
          />
          <label htmlFor="contact-arrival" className="m3-field-label">
            Arrivée
          </label>
        </div>
        <div className="m3-field">
          <input
            id="contact-departure"
            name="departure"
            type="date"
            min={arrival || undefined}
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            placeholder=" "
            className="m3-field-input"
          />
          <label htmlFor="contact-departure" className="m3-field-label">
            Départ
          </label>
        </div>
      </div>

      <div className="m3-field">
        <select
          id="contact-stay"
          name="stay"
          value={stay}
          onChange={(e) => setStay(e.target.value)}
          className="m3-field-input appearance-none"
        >
          {contact.stays.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label htmlFor="contact-stay" className="m3-field-label -translate-y-6 scale-75">
          Votre demande
        </label>
      </div>

      <div className="m3-field">
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder=" "
          className="m3-field-input resize-y"
        />
        <label htmlFor="contact-message" className="m3-field-label">
          Un mot sur votre séjour (facultatif)
        </label>
      </div>

      <button type="submit" className="m3-button m3-filled m3-state w-full sm:w-auto">
        Envoyer ma demande
      </button>

      <p className="text-sm text-stone">
        Le bouton ouvre votre messagerie avec la demande pré-remplie, à envoyer à{" "}
        <a href={`mailto:${contact.email}`} className="underline underline-offset-4">
          {contact.email}
        </a>
        . Pour une réponse immédiate :{" "}
        <a href={site.phoneHref} className="whitespace-nowrap underline underline-offset-4">
          {site.phone}
        </a>
        .
      </p>
    </form>
  );
}
