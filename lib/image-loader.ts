/**
 * Image loader pre statický export (GitHub Pages): obrázky servuje Pages
 * priamo z `public/`, len s prefixom basePath. `next/image` totiž pri
 * `output: "export"` basePath k `src` sám nepridáva.
 */
export default function imageLoader({ src }: { src: string }): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return src.startsWith("/") ? `${basePath}${src}` : src;
}
