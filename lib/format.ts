import type { Price } from "@/lib/packages";

/** Formát ceny pre SK: „2 247 €". */
export function formatPrice(price: Price): string {
  const amount = new Intl.NumberFormat("sk-SK", {
    maximumFractionDigits: 0,
  }).format(price.amount);
  return `${amount}\u00a0€`;
}

export function priceUnitLabel(unit: Price["unit"]): string {
  return unit === "person" ? "za osobu" : "za firmu";
}
