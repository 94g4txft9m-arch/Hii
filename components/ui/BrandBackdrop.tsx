/**
 * Sekčný podklad — čistý navy / light. Bez diagonálneho šumu cez text.
 */

type BrandBackdropProps = {
  variant: "navy" | "light";
};

export function BrandBackdrop({ variant }: BrandBackdropProps) {
  if (variant === "light") {
    return (
      <div className="brand-backdrop brand-backdrop--light" aria-hidden>
        <div className="brand-backdrop__scrim brand-backdrop__scrim--light" />
      </div>
    );
  }

  return (
    <div className="brand-backdrop brand-backdrop--navy" aria-hidden>
      <div className="brand-backdrop__scrim" />
    </div>
  );
}
