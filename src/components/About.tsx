import { Award, HeartHandshake, Leaf } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const values = [
  {
    icon: HeartHandshake,
    title: "Diagnóstico antes que tijera",
    copy: "Escuchamos, analizamos tu cabello y proponemos solo lo que necesita. Si algo no te conviene, te lo decimos.",
  },
  {
    icon: Award,
    title: "Técnica y acabado",
    copy: "Corte de precisión y color fundido con matiz personalizado. El acabado en casa debe ser tan bueno como en el salón.",
  },
  {
    icon: Leaf,
    title: "Cuidado consciente",
    copy: "Tratamientos que respetan la fibra y el cuero cabelludo. Te explicamos el mantenimiento sin tecnicismos.",
  },
];

export default function About() {
  return (
    <section id="salon" aria-labelledby="salon-title" className="scroll-mt-24 bg-cream-50 py-24 text-stone-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              dark
              eyebrow="El salón"
              title="Un espacio pequeño, una obsesión grande: tu cabello."
              copy="Contenido provisional: sustitúyelo por la historia real del salón cuando esté disponible (filosofía, especialización y forma de trabajar). No se han inventado nombres, años ni premios."
            />
            <Reveal delay={0.1} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full bg-stone-900 px-7 py-3.5 text-sm font-bold tracking-[0.12em] text-cream-50 uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-800"
              >
                Conócenos
              </a>
              <a
                href="#galeria"
                className="inline-flex items-center justify-center rounded-full border border-stone-900/20 px-7 py-3.5 text-sm font-bold tracking-[0.12em] uppercase transition-colors hover:border-stone-900"
              >
                Ver el ambiente
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {values.map(({ icon: Icon, title, copy }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <article className="h-full rounded-2xl border border-stone-900/10 bg-white/70 p-6 shadow-[0_16px_40px_-24px_rgb(0_0_0/0.25)]">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-stone-900 text-gold-300">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-4 text-xl leading-snug">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Ritual de visita */}
        <Reveal className="mt-16">
          <ol className="grid gap-px overflow-hidden rounded-2xl border border-stone-900/10 bg-stone-900/10 sm:grid-cols-4">
            {[
              ["01", "Bienvenida", "Llegas, te acomodas, hablamos de lo que buscas."],
              ["02", "Diagnóstico", "Analizamos base, textura y objetivo. Precio cerrado."],
              ["03", "Ritual", "Servicio con calma: lavado, técnica y acabado."],
              ["04", "Mantenimiento", "Sales con pauta clara para cuidar el resultado."],
            ].map(([n, t, c]) => (
              <li key={n} className="bg-cream-50 p-6">
                <p aria-hidden="true" className="font-display text-3xl text-gold-600">{n}</p>
                <h3 className="mt-2 font-bold">{t}</h3>
                <p className="mt-1 text-sm text-stone-600">{c}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
