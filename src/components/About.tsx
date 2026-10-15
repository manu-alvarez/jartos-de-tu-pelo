import { Disc3, HeartHandshake, Scissors } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const values = [
  {
    icon: Scissors,
    title: "Precisión barbera",
    copy: "Degradados sin marcas, contornos a navaja y acabado que aguanta semanas. Si algo no te favorece, te lo decimos.",
  },
  {
    icon: Disc3,
    title: "Cultura hip hop",
    copy: "Rap sonando en el local, vinilos en la pared y un barbero que también pincha. Aquí el ambiente es parte del servicio.",
  },
  {
    icon: HeartHandshake,
    title: "Trato de barrio",
    copy: "Sin prisas ni poses: te escuchamos, cerramos precio antes de empezar y sales con pauta de mantenimiento clara.",
  },
];

export default function About() {
  return (
    <section id="salon" aria-labelledby="salon-title" className="scroll-mt-24 bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="El local"
              title="SILLÓN, NAVAJA Y PLATOS."
              copy="Contenido provisional: sustitúyelo por la historia real cuando esté disponible (el barbero, la cabina, la forma de trabajar). No se han inventado nombres, años ni premios."
            />
            <Reveal delay={0.1} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-lg border-2 border-ink-950 bg-gold-400 px-7 py-3.5 font-sans text-sm font-bold tracking-[0.12em] text-ink-950 uppercase shadow-[5px_5px_0_0_rgb(244_241_234/0.9)] transition-all duration-200 hover:-translate-y-0.5"
              >
                Ven a verlo
              </a>
              <a
                href="#dj"
                className="inline-flex items-center justify-center rounded-lg border-2 border-cream-50/25 px-7 py-3.5 font-sans text-sm font-bold tracking-[0.12em] text-cream-50 uppercase transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                Modo DJ
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {values.map(({ icon: Icon, title, copy }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <article className="h-full rounded-lg border-2 border-cream-50/12 bg-ink-900 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-[5px_5px_0_0_rgb(215_255_63/0.9)]">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-gold-400 text-ink-950">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-4 text-xl leading-tight tracking-wide text-cream-50 uppercase">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-50/60">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Ritual de visita */}
        <Reveal className="mt-16">
          <ol className="grid gap-px overflow-hidden rounded-lg border-2 border-cream-50/12 bg-cream-50/10 sm:grid-cols-4">
            {[
              ["01", "Siéntate", "Te acomodas, suena rap, hablamos de lo que buscas."],
              ["02", "Diagnóstico", "Analizamos pelo y forma. Precio cerrado antes de empezar."],
              ["03", "Ejecución", "Máquina, tijera, navaja y toalla caliente. Sin prisas."],
              ["04", "Sal fresco", "Acabado con producto y pauta para mantenerlo en casa."],
            ].map(([n, t, c]) => (
              <li key={n} className="bg-ink-900 p-6">
                <p aria-hidden="true" className="font-display text-3xl text-gold-400">{n}</p>
                <h3 className="font-display mt-2 tracking-wide text-cream-50 uppercase">{t}</h3>
                <p className="mt-1 text-sm text-cream-50/55">{c}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
