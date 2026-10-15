import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, CalendarCheck, Disc3, MapPin, Scissors, Zap } from "lucide-react";
import { business, displayOrPending, getBookingHref, getDjHref } from "../config/business";

const HERO_IMG =
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1600&q=80";

export default function Hero() {
  const reduce = useReducedMotion();
  const bookingHref = getBookingHref();
  const djHref = getDjHref();
  const external = bookingHref.startsWith("http");
  const location = [business.neighborhood, business.city].filter((v) => v.trim() !== "").join(" · ");

  return (
    <section aria-labelledby="hero-title" className="grain relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={HERO_IMG}
          alt=""
          fetchPriority="high"
          className="h-full w-full object-cover object-center opacity-35 grayscale-[35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pt-36 pb-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pt-48 lg:pb-28">
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex flex-wrap gap-2"
          >
            <span className="sticker bg-gold-400 px-4 py-1.5 font-sans text-[11px] font-bold tracking-[0.24em] text-ink-950 uppercase">
              <Scissors size={13} aria-hidden="true" />
              Barbería
            </span>
            <span className="sticker bg-cream-50 px-4 py-1.5 font-sans text-[11px] font-bold tracking-[0.24em] text-ink-950 uppercase" style={{ transform: "rotate(1.5deg)" }}>
              <Disc3 size={13} aria-hidden="true" />
              DJ · Hip Hop / Rap
            </span>
          </motion.div>

          <motion.h1
            id="hero-title"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display max-w-3xl text-6xl leading-[0.92] tracking-tight text-cream-50 uppercase sm:text-8xl lg:text-[6.5rem]"
          >
            Fresh cut.<br />
            <span className="gold-gradient-text">Fresh beats.</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-cream-50/70"
          >
            {business.claim} Degradados quirúrgicos, barba a navaja y rap sonando en el local.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={bookingHref}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex items-center justify-center gap-2.5 rounded-lg border-2 border-ink-950 bg-gold-400 px-8 py-4 font-sans text-sm font-bold tracking-[0.12em] text-ink-950 uppercase shadow-[5px_5px_0_0_rgb(244_241_234/0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_rgb(244_241_234/0.9)] active:translate-y-0 active:shadow-none"
            >
              <CalendarCheck size={18} aria-hidden="true" />
              Reservar corte
            </a>
            <a
              href={djHref}
              {...(djHref.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-cream-50/25 px-8 py-4 font-sans text-sm font-bold tracking-[0.12em] text-cream-50 uppercase transition-all duration-200 hover:border-gold-400 hover:text-gold-300"
            >
              Contratar DJ
              <ArrowDown size={16} aria-hidden="true" className="rotate-[-90deg]" />
            </a>
          </motion.div>

          <motion.dl
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="ticket-cut mt-12 grid max-w-xl grid-cols-3 gap-6 pt-7"
          >
            {[
              { icon: Scissors, k: "Especialidad", v: "Fade & Barba" },
              { icon: Disc3, k: "En cabina", v: displayOrPending(business.djGenres, "Hip Hop") },
              { icon: MapPin, k: "Zona", v: displayOrPending(location || business.city, "A confirmar") },
            ].map(({ icon: Icon, k, v }) => (
              <div key={k}>
                <dt className="flex items-center gap-1.5 font-sans text-[11px] font-bold tracking-[0.22em] text-cream-50/50 uppercase">
                  <Icon size={12} aria-hidden="true" />
                  {k}
                </dt>
                <dd className="font-display mt-1.5 text-xl tracking-wide text-cream-50 uppercase">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Vinilo decorativo + tarjeta */}
        <motion.aside
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          aria-label="En los platos"
          className="relative mx-auto hidden w-full max-w-sm lg:block"
        >
          <div
            aria-hidden="true"
            className={`vinyl relative aspect-square w-full rounded-full border-2 border-cream-50/15 shadow-[0_24px_60px_-24px_rgb(0_0_0/0.8)] ${reduce ? "" : "animate-[spin_16s_linear_infinite]"}`}
          >
            <span className="absolute inset-[31%] flex flex-col items-center justify-center rounded-full bg-gold-400 text-center">
              <Zap size={22} aria-hidden="true" className="text-ink-950" />
              <span className="font-display mt-1 text-sm tracking-widest text-ink-950 uppercase">Side A</span>
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-ink-950/70 uppercase">92 BPM</span>
            </span>
          </div>
          <p className="mt-5 text-center font-sans text-xs tracking-[0.3em] text-cream-50/45 uppercase">
            Pulsa “Beat Off” para oír el loop de la casa →
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
