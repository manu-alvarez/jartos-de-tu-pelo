import { AnimatePresence, motion } from "framer-motion";
import { Expand, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { business } from "../config/business";
import { galleryImages } from "../config/services";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setLightbox((v) => (v === null ? v : (v + dir + galleryImages.length) % galleryImages.length)),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, step]);

  return (
    <section id="galeria" aria-labelledby="galeria-title" className="scroll-mt-24 bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Galería"
          title="Texturas, luz y acabado."
          copy={
            business.hasRealPhotos
              ? "Trabajos realizados en el salón."
              : "Imágenes de demostración (Unsplash) — pendientes de sustituir por fotografías reales del salón. No se presentan como trabajos propios."
          }
        />

        {!business.hasRealPhotos && (
          <Reveal className="mt-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2 text-xs font-bold tracking-[0.18em] text-gold-300 uppercase">
              Galería demo — fotos reales pendientes
            </p>
          </Reveal>
        )}

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {galleryImages.map((img, i) => (
            <Reveal key={img.src} delay={(i % 3) * 0.07}>
              <button
                type="button"
                onClick={() => setLightbox(i)}
                aria-label={`Ampliar imagen: ${img.alt}`}
                className="group relative block w-full overflow-hidden rounded-2xl border border-cream-50/10 bg-ink-800"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className={`aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    i % 3 === 1 ? "lg:aspect-[4/5]" : ""
                  }`}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 rounded-full bg-ink-950/70 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-cream-50 uppercase backdrop-blur">
                  {img.tag}
                </span>
                <span className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/60 text-cream-50 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Expand size={16} aria-hidden="true" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox accesible */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Vista ampliada: ${galleryImages[lightbox].alt}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-950/92 p-4 backdrop-blur"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar vista ampliada"
              className="absolute top-5 right-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/20 text-cream-50 hover:bg-cream-50/10"
            >
              <X size={20} />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); step(-1); }}
              aria-label="Imagen anterior"
              className="absolute left-3 rounded-full border border-cream-50/20 px-4 py-3 text-cream-50 hover:bg-cream-50/10 sm:left-8"
            >
              ←
            </button>
            <figure onClick={(e) => e.stopPropagation()} className="max-h-[86vh] max-w-3xl">
              <img
                src={galleryImages[lightbox].src}
                alt={galleryImages[lightbox].alt}
                className="max-h-[76vh] w-auto rounded-2xl object-contain"
              />
              <figcaption className="mt-3 text-center text-sm text-cream-50/70">
                {galleryImages[lightbox].tag} · {lightbox + 1} / {galleryImages.length}
              </figcaption>
            </figure>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); step(1); }}
              aria-label="Imagen siguiente"
              className="absolute right-3 rounded-full border border-cream-50/20 px-4 py-3 text-cream-50 hover:bg-cream-50/10 sm:right-8"
            >
              →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
