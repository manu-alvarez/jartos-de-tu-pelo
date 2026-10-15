import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, CalendarCheck, MapPin, Scissors, Sparkles } from "lucide-react";
import { business, displayOrPending, getBookingHref } from "../config/business";

const HERO_IMG =
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80";

export default function Hero() {
  const reduce = useReducedMotion();
  const bookingHref = getBookingHref();
  const external = bookingHref.startsWith("http");
  const location = [business.neighborhood, business.city].filter((v) => v.trim() !== "").join(" · ");

  return (
    <section aria-labelledby="hero-title" className="grain relative overflow-hidden bg-ink-950">
      {/* Fondo editorial */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={HERO_IMG}
          alt=""
          fetchPriority="high"
          className="h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pt-36 pb-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pt-48 lg:pb-28">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2 text-[11px] font-bold tracking-[0.28em] text-gold-300 uppercase"
          >
            <Sparkles size={13} aria-hidden="true" />
            Peluquería · Salon Experience
          </motion.p>

          <motion.h1
            id="hero-title"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display text-balance max-w-3xl text-5xl leading-[0.98] font-light tracking-tight text-cream-50 sm:text-7xl lg:text-[5.4rem]"
          >
            El cabello como{" "}
            <em className="gold-gradient-text font-normal not-italic italic">obra</em>, el salón como{" "}
            <em className="font-normal italic">ritual</em>.
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-cream-50/70"
          >
            {business.claim} Diagnóstico honesto, técnica de precisión y un espacio pensado para
            desconectar.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={bookingHref}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-cream-50 px-8 py-4 text-sm font-bold tracking-[0.12em] text-ink-950 uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-300 hover:shadow-[0_18px_40px_-12px_rgb(198_161_91/0.8)] active:translate-y-0"
            >
              <CalendarCheck size={18} aria-hidden="true" />
              Reserva tu cita
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/25 px-8 py-4 text-sm font-bold tracking-[0.12em] text-cream-50 uppercase transition-all duration-200 hover:border-gold-400/60 hover:text-gold-300"
            >
              Ver servicios
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.dl
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-cream-50/12 pt-7"
          >
            {[
              { icon: Scissors, k: "Corte", v: "Precisión" },
              { icon: Sparkles, k: "Color", v: "Avanzado" },
              { icon: MapPin, k: "Zona", v: displayOrPending(location || business.city, "A confirmar") },
            ].map(({ icon: Icon, k, v }) => (
              <div key={k}>
                <dt className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.22em] text-cream-50/50 uppercase">
                  <Icon size={12} aria-hidden="true" />
                  {k}
                </dt>
                <dd className="font-display mt-1.5 text-lg text-cream-50">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Tarjeta editorial lateral */}
        <motion.aside
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          aria-label="Información práctica"
          className="hidden rounded-3xl border border-cream-50/12 bg-ink-900/70 p-8 shadow-[0_24px_60px_-24px_rgb(0_0_0/0.6)] backdrop-blur-xl lg:block"
        >
          <p className="text-[11px] font-bold tracking-[0.3em] text-gold-400 uppercase">
            Tu visita
          </p>
          <ul className="mt-5 space-y-5 text-sm leading-relaxed text-cream-50/80">
            <li className="flex gap-3">
              <span aria-hidden="true" className="font-display text-gold-400">01</span>
              Diagnóstico personalizado antes de cada servicio. Sin prisas, sin plantillas.
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="font-display text-gold-400">02</span>
              Precio transparente: lo confirmamos contigo antes de empezar.
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="font-display text-gold-400">03</span>
              Reserva en menos de un minuto por WhatsApp o teléfono.
            </li>
          </ul>
          <div className="mt-7 border-t border-cream-50/10 pt-6 text-sm">
            <p className="text-cream-50/50">Horario</p>
            <p className="font-display mt-1 text-xl text-cream-50">
              {displayOrPending(business.openingHours.find((d) => d.day === "Martes")?.hours ?? "", "A confirmar")}
            </p>
            <p className="mt-1 text-xs text-cream-50/50">{business.openingNote}</p>
            <a href="#contacto" className="mt-4 inline-block font-bold text-gold-300 underline-offset-4 hover:underline">
              Cómo llegar →
            </a>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
