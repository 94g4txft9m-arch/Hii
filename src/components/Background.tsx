import { useEffect, useRef } from "react";

/**
 * Ambientné pozadie 2026: aurora blobs + jemný šum (grain) + kurzorový glow.
 */
export function Background() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${e.clientX - 300}px, ${
          e.clientY - 300
        }px)`;
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-navy-950"
    >
      <div className="absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full bg-magenta-500/30 blur-[120px] animate-[aurora_18s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-navy-600/50 blur-[120px] animate-[aurora_22s_ease-in-out_infinite_reverse]" />
      <div className="absolute bottom-0 left-1/4 h-[30rem] w-[30rem] rounded-full bg-magenta-400/20 blur-[130px] animate-[float_9s_ease-in-out_infinite]" />

      <div
        ref={glowRef}
        className="absolute h-[600px] w-[600px] rounded-full bg-magenta-500/10 blur-[100px] transition-transform duration-300 ease-out"
      />

      <div className="noise-overlay absolute inset-0 opacity-[0.06]" />
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />
    </div>
  );
}
