import { useCallback, useEffect, useState } from "react";
import { BEAT_LABEL, beat } from "../audio/beat";

/**
 * Pastilla flotante con mini-vinilo: gira solo mientras suena.
 * Opt-in: nunca suena solo (política autoplay de los navegadores).
 */
export default function BeatToggle() {
  const [on, setOn] = useState(false);

  const toggle = useCallback(async () => {
    const next = await beat.toggle();
    setOn(next);
  }, []);

  // Pausa al ocultar la pestaña o salir
  useEffect(() => {
    const hide = () => {
      if (beat.playing) {
        beat.pause();
        setOn(false);
      }
    };
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) hide();
    });
    window.addEventListener("pagehide", hide);
    return () => {
      document.removeEventListener("visibilitychange", hide);
      window.removeEventListener("pagehide", hide);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? "Parar la música de fondo" : "Activar música de fondo (beat de la casa)"}
      title={BEAT_LABEL}
      className={`fixed right-4 bottom-4 z-[70] flex items-center gap-2.5 rounded-full border-2 py-2 pr-4 pl-2 font-sans text-[11px] font-bold tracking-[0.22em] uppercase transition-all duration-200 sm:right-6 sm:bottom-6 ${
        on
          ? "border-ink-950 bg-gold-400 text-ink-950 shadow-[4px_4px_0_0_rgb(244_241_234/0.9)]"
          : "border-cream-50/20 bg-ink-950/85 text-cream-50 backdrop-blur hover:border-gold-400/60 hover:text-gold-300"
      }`}
    >
      <span
        aria-hidden="true"
        className={`vinyl inline-flex h-7 w-7 items-center justify-center rounded-full border border-cream-50/25 ${
          on ? "animate-[spin_2.5s_linear_infinite]" : ""
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
      </span>
      Beat&nbsp;{on ? "On" : "Off"}
    </button>
  );
}
