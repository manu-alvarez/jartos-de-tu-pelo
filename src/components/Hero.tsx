import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, CalendarCheck, Disc3, MapPin, Scissors } from "lucide-react";
import { business, displayOrPending, getBookingHref, getDjHref } from "../config/business";
import HeroEmblem from "./HeroEmblem";

const HERO_IMG = `${import.meta.env.BASE_URL}portada.jpg`;

export default function Hero() {
  const reduce = useReducedMotion();
  const bookingHref = getBookingHref();
  const djHref = getDjHref();
  const external = bookingHref.startsWith("http");
  const location = [business.neighborhood, business.city].filter((v) => v.trim() !== "").join(" · ");

  return (
    <section aria-labelledby="hero-title" className="grain relative bg-ink-950">
      {/* Póster: el graffiti completo, sin texto encima */}
      <div className="relative">
        <img
          src={HERO_IMG}
          alt="Mural de graffiti en verde neón con letras de estilo hip hop"
          fetchPriority="high"
          width={1408}
          height={768}
          className="h-[54svh] w-full object-cover object-center sm:h-[70svh] lg:h-[78svh]"
        />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-ink-950/85 to-transparent" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      {/* Contenido: debajo del póster, sobre tinta */}
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pt-10 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-12 lg:pb-20">
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2"
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
          className="font-display mt-6 max-w-4xl text-5xl leading-[0.92] tracking-tight text-cream-50 uppercase sm:text-7xl"
        >
          Fresh cut. <span className="gold-gradient-text">Fresh beats.</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-5 max-w-xl text-lg leading-relaxed text-cream-50/70"
        >
          {business.claim} Degradados quirúrgicos, barba a navaja y rap sonando en el local.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
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
          className="ticket-cut mt-10 grid max-w-xl grid-cols-3 gap-6 pt-7"
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

        {/* Emblema: vinilo + tijera + navaja */}
        <motion.aside
          initial={reduce ? false : { opacity: 0, scale: 0.94, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          aria-hidden="true"
          className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md"
        >
          <div className="rotate-2 rounded-2xl border-2 border-cream-50/12 bg-ink-900/60 p-6 shadow-[8px_8px_0_0_rgb(215_255_63/0.9)] sm:p-8">
            <HeroEmblem />
          </div>
          <p className="sticker absolute -top-3 left-6 bg-copper-500 px-3 py-1 font-sans text-[10px] font-bold tracking-[0.24em] text-cream-50 uppercase">
            Barber × DJ
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
