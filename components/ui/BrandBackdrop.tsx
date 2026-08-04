/**
 * Sekčný podklad — navy pásy nesú pruhovú brand grafiku pod tmavým závojom
 * (dodaný dizajn, raster `/brand/brand-stripes.png`); light ostáva čistý.
 */

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
      <div
        className="brand-backdrop__stripes"
        style={{
          backgroundImage: `url(${BASE_PATH}/brand/brand-stripes.png)`,
        }}
      />
      <div className="brand-backdrop__scrim" />
    </div>
  );
}
