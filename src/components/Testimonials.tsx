import { MessageSquareHeart, Star } from "lucide-react";
import { business } from "../config/business";
import { testimonials } from "../config/services";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Solo muestra reseñas REALES y autorizadas.
 * Si no hay (estado actual), la sección se oculta salvo que
 * `showTestimonialsSection` sea true, mostrando entonces un
 * elegante estado "próximamente" — nunca reseñas inventadas.
 */
export default function Testimonials() {
  const hasReal = business.hasRealReviews && testimonials.length > 0;

  if (!business.showTestimonialsSection && !hasReal) return null;

  return (
    <section aria-labelledby="opiniones-title" className="bg-ink-900 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Opiniones"
          title="Lo que dicen nuestras clientas."
          copy={
            hasReal
              ? "Reseñas verificadas de clientas del salón."
              : "Esta sección mostrará aquí únicamente reseñas reales y verificadas cuando el salón las autorice. De momento, ningún testimonio inventado."
          }
        />

        {hasReal ? (
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <Reveal key={t.name}>
                <figure className="hairline h-full rounded-2xl bg-ink-950/60 p-7">
                  <div className="flex gap-1 text-gold-400" aria-label={`${t.rating} de 5 estrellas`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="mt-4 leading-relaxed text-cream-50/85">“{t.text}”</blockquote>
                  <figcaption className="mt-5 text-sm font-bold text-cream-50">
                    {t.name} <span className="font-normal text-cream-50/50">· {t.source}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-10">
            <div className="hairline flex flex-col items-center gap-4 rounded-3xl bg-ink-950/60 px-8 py-14 text-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/12 text-gold-300">
                <MessageSquareHeart size={24} aria-hidden="true" />
              </span>
              <h3 id="opiniones-title" className="font-display text-2xl text-cream-50">
                Opiniones verificadas — próximamente
              </h3>
              <p className="max-w-xl text-[15px] leading-relaxed text-cream-50/60">
                Estamos preparando este espacio para mostrar reseñas reales de Google e Instagram
                con autorización de las clientas. Cómo activarlo: ver{" "}
                <code className="rounded bg-cream-50/10 px-1.5 py-0.5 text-[13px] text-gold-300">
                  docs/DATOS-A-RELLENAR.md → TODO-DATO-21
                </code>
                .
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
