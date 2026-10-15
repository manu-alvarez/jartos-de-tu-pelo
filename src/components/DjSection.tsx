import { CalendarX2, Disc3, Megaphone, PartyPopper } from "lucide-react";
import { business, displayOrPending, getDjHref } from "../config/business";
import { djDates } from "../config/services";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const formats = [
  {
    icon: Disc3,
    title: "Sesiones en el local",
    copy: "El sillón con banda sonora: sets de rap en tienda mientras te cortas. La barbería también suena.",
  },
  {
    icon: PartyPopper,
    title: "Eventos & bolos",
    copy: "Bares, salas, fiestas y streetwear events. Set adaptado al público y al horario.",
  },
  {
    icon: Megaphone,
    title: "Colabos & aperturas",
    copy: "Inauguraciones, pop-ups y marcas que quieren ambiente hip hop real, no playlist.",
  },
];

export default function DjSection() {
  const href = getDjHref();
  const external = href.startsWith("http");
  const alias = business.djAlias.trim();

  return (
    <section id="dj" aria-labelledby="dj-title" className="scroll-mt-24 border-y-4 border-gold-400 bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Modo DJ · Hip Hop / Rap"
              title="DEL SILLÓN A LA CABINA."
              copy="El barbero también pincha: sesiones de rap clásico y nuevo, del boom-bap al trap. Para tu corte, tu fiesta o tu evento."
            />
            <Reveal delay={0.1} className="mt-8">
              <p className="sticker bg-gold-400 px-4 py-2 font-sans text-xs font-bold tracking-[0.2em] text-ink-950 uppercase">
                <Disc3 size={15} aria-hidden="true" />
                {alias ? alias : "AKA por confirmar"}
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {formats.map(({ icon: Icon, title, copy }, i) => (
                <Reveal key={title} delay={i * 0.07}>
                  <article className="h-full rounded-xl border-2 border-cream-50/12 bg-ink-950 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-gold-400/60">
                    <Icon size={22} aria-hidden="true" className="text-gold-400" />
                    <h3 className="font-display mt-3 text-xl tracking-wide text-cream-50 uppercase">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream-50/60">{copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Próximas fechas */}
          <Reveal delay={0.15}>
            <article className="rounded-xl border-2 border-cream-50/12 bg-ink-950 p-6 sm:p-8" aria-label="Próximas fechas DJ">
              <h3 className="flex items-center gap-2 font-sans text-[12px] font-bold tracking-[0.28em] text-gold-400 uppercase">
                Próximas fechas
              </h3>
              {djDates.length > 0 ? (
                <ul className="mt-5 divide-y divide-cream-50/10">
                  {djDates.map((d) => (
                    <li key={`${d.date}-${d.venue}`} className="flex items-center justify-between gap-3 py-3">
                      <div>
                        <p className="font-display text-lg tracking-wide text-cream-50 uppercase">{d.date}</p>
                        <p className="text-sm text-cream-50/55">{d.venue} · {d.city}</p>
                      </div>
                      {d.url ? (
                        <a href={d.url} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-full bg-gold-400 px-4 py-2 text-xs font-bold tracking-widest text-ink-950 uppercase">
                          Entradas
                        </a>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-5 rounded-lg border border-dashed border-cream-50/20 p-6 text-center">
                  <CalendarX2 size={26} aria-hidden="true" className="mx-auto text-cream-50/40" />
                  <p className="font-display mt-3 text-2xl tracking-wide text-cream-50 uppercase">Fechas por confirmar</p>
                  <p className="mt-2 text-sm leading-relaxed text-cream-50/55">
                    El calendario de bolos se publica aquí en cuanto esté cerrado.
                    Caché orientativo: {displayOrPending(business.djPriceNote, "a consultar")}.
                  </p>
                </div>
              )}
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-cream-50 px-7 py-4 font-sans text-sm font-bold tracking-[0.12em] text-ink-950 uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-400"
              >
                Contratar DJ
              </a>
              <p className="mt-3 text-center text-xs text-cream-50/40">
                Respuesta por WhatsApp · Géneros: {business.djGenres}
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
