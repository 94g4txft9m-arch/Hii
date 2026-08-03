/**
 * Canva diagonálne pásy (section-panel) — plnofarebný sekčný podklad.
 * Obsah musí byť biely text alebo biela karta (WCAG AA).
 */
export function BrandBands({ className = "" }: { className?: string }) {
  return (
    <div className={`brand-bands ${className}`} aria-hidden>
      <div className="brand-bands__image" />
      <div className="brand-bands__veil" />
    </div>
  );
}
