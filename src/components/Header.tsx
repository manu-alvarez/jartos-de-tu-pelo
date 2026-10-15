import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { business, getBookingHref, isBookingConfigured } from "../config/business";
import { navLinks } from "../config/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  // Cierra con Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const bookingHref = getBookingHref();
  const external = bookingHref.startsWith("http");

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Barra de aviso provisional si faltan datos — visible pero discreta */}
      {!isBookingConfigured() && (
        <p className="bg-gold-500 px-4 py-1.5 text-center text-[11px] font-bold tracking-wide text-ink-950 uppercase">
          Reservas por WhatsApp / teléfono — sistema online pendiente de conectar
        </p>
      )}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-cream-50/10 bg-ink-950/85 shadow-[0_12px_40px_-16px_rgb(0_0_0/0.7)] backdrop-blur-xl"
            : "border-transparent bg-gradient-to-b from-ink-950/80 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
          <Link to="/" className="group flex items-baseline gap-2" aria-label={`${business.name} — inicio`}>
            <span className="font-display text-2xl tracking-wide text-cream-50 uppercase sm:text-3xl">
              {business.name}
            </span>
            <span className="hidden bg-gold-400 px-2 py-0.5 font-sans text-[10px] font-bold tracking-[0.2em] text-ink-950 uppercase sm:inline">
              {business.tagline}
            </span>
          </Link>

          <nav aria-label="Navegación principal" className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-[13px] font-semibold tracking-[0.14em] text-cream-50/75 uppercase transition-colors hover:text-cream-50"
              >
                {l.label}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full"
                />
              </a>
            ))}
            <a
              href={bookingHref}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-ink-950 bg-gold-400 px-5 py-2.5 font-sans text-[13px] font-bold tracking-wide text-ink-950 uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_rgb(244_241_234/0.9)] active:translate-y-0 active:shadow-none"
            >
              <CalendarCheck size={16} strokeWidth={2.5} aria-hidden="true" />
              Reservar
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/15 text-cream-50 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-movil"
            aria-label="Menú móvil"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="border-b border-cream-50/10 bg-ink-950/97 backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-1 px-5 py-6">
              {navLinks.map((l, i) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-lg border border-cream-50/10 px-4 py-3.5 font-sans text-lg font-bold text-cream-50 uppercase transition-colors hover:bg-cream-50/5"
                  >
                    {l.label}
                    <span aria-hidden="true" className="font-sans text-xs font-bold text-gold-400">
                      0{i + 1}
                    </span>
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href={bookingHref}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-5 py-4 font-sans text-sm font-bold tracking-wide text-ink-950 uppercase"
                >
                  <CalendarCheck size={18} aria-hidden="true" />
                  Reservar corte
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
