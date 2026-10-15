import { ArrowUpRight, Clock } from "lucide-react";
import { useState } from "react";
import { getBookingHref } from "../config/business";
import { serviceCategories } from "../config/services";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  const [active, setActive] = useState(serviceCategories[0].id);
  const category = serviceCategories.find((c) => c.id === active) ?? serviceCategories[0];

  return (
    <section id="servicios" aria-labelledby="servicios-title" className="scroll-mt-24 bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Cortes & precios"
            title="MENÚ CLARO. SIN LETRA PEQUEÑA."
            copy="Precios y duraciones marcados como «A confirmar» son provisionales: cerramos el importe contigo antes de enchufar la máquina. Sin sorpresas."
          />
        </div>

        {/* Tabs por categoría */}
        <Reveal className="mt-10">
          <div role="tablist" aria-label="Categorías de servicios" className="flex flex-wrap gap-2">
            {serviceCategories.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={active === c.id}
                aria-controls={`panel-${c.id}`}
                id={`tab-${c.id}`}
                onClick={() => setActive(c.id)}
                className={`rounded-lg px-5 py-2.5 font-sans text-[12px] font-bold tracking-[0.14em] uppercase transition-all duration-200 ${
                  active === c.id
                    ? "bg-gold-400 text-ink-950 shadow-[3px_3px_0_0_rgb(244_241_234/0.85)]"
                    : "border border-cream-50/15 text-cream-50/65 hover:border-gold-400/50 hover:text-cream-50"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          role="tabpanel"
          id={`panel-${category.id}`}
          aria-labelledby={`tab-${category.id}`}
          className="mt-8"
        >
          <Reveal key={category.id}>
            <p className="font-display text-xl tracking-wide text-gold-300 uppercase">{category.tagline}</p>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {category.services.map((s, i) => {
                const href = getBookingHref(s.name);
                const external = href.startsWith("http");
                return (
                  <li
                    key={s.id}
                    className="group rounded-lg border-2 border-cream-50/12 bg-ink-900/60 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gold-400 hover:shadow-[6px_6px_0_0_rgb(215_255_63/0.9)] sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p aria-hidden="true" className="font-sans text-xs font-bold tracking-[0.2em] text-gold-400">
                          #{String(i + 1).padStart(2, "0")}
                        </p>
                        <h3 className="font-display mt-1 text-2xl tracking-wide text-cream-50 uppercase">{s.name}</h3>
                      </div>
                      <p className="shrink-0 rounded-md bg-gold-400 px-3.5 py-1.5 font-sans text-sm font-bold text-ink-950">
                        {s.price ?? "Consultar"}
                      </p>
                    </div>
                    <p className="mt-3 text-[15px] leading-relaxed text-cream-50/65">{s.description}</p>
                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      {s.durationMin ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cream-50/55">
                          <Clock size={13} aria-hidden="true" />≈ {s.durationMin} min
                        </span>
                      ) : null}
                      {s.provisional ? (
                        <span className="rounded-full bg-gold-500/12 px-2.5 py-1 text-[11px] font-bold tracking-wide text-gold-300 uppercase">
                          Precio a confirmar
                        </span>
                      ) : null}
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="ml-auto inline-flex items-center gap-1.5 text-[13px] font-bold tracking-wide text-cream-50 uppercase underline-offset-4 transition-colors group-hover:text-gold-300 hover:underline"
                        aria-label={`Reservar ${s.name}`}
                      >
                        Reservar <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
