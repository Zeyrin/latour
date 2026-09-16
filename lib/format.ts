const euroFormat = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

/** « 1 350 € » — espace insécable et symbole après, à la française */
export const euro = (value: number) => euroFormat.format(value);
