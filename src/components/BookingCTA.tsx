import { CalendarCheck, Disc3, MessageCircle, Phone } from "lucide-react";
import { business, getBookingHref, getDjHref } from "../config/business";
import Reveal from "./Reveal";

export default function BookingCTA() {
  const href = getBookingHref();
  const external = href.startsWith("http");
  const djHref = getDjHref();
  const djExternal = djHref.startsWith("http");
  const waHref = business.whatsappHref
    ? `https://wa.me/${business.whatsappHref}?text=${encodeURIComponent(business.whatsappMessage)}`
    : null;

  return (
    <section aria-labelledby="reserva-title" className="relative overflow-hidden border-y-4 border-ink-950 bg-gold-400 py-24 text-ink-950 sm:py-28">
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-sans text-[11px] font-bold tracking-[0.32em] uppercase">
            [ Reserva — fácil y sin compromiso ]
          </p>
          <h2 id="reserva-title" className="font-display mx-auto mt-4 max-w-3xl text-balance text-5xl leading-[0.95] tracking-tight uppercase sm:text-7xl">
            Pilla tu hueco. Sal fresco.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink-950/70">
            {business.bookingUrl
              ? "Reserva online en segundos con nuestro sistema de citas."
              : "Sin sistema online todavía: escríbenos por WhatsApp o llámanos y te proponemos hueco en minutos."}{" "}
            ¿Organizas algo? También contratamos el DJ set.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg border-2 border-ink-950 bg-ink-950 px-9 py-4 font-sans text-sm font-bold tracking-[0.12em] text-cream-50 uppercase shadow-[5px_5px_0_0_rgb(10_10_11/0.3)] transition-all duration-200 hover:-translate-y-0.5 sm:w-auto"
            >
              <CalendarCheck size={18} aria-hidden="true" />
              Reservar corte
            </a>
            <a
              href={djHref}
              {...(djExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-ink-950 bg-transparent px-9 py-4 font-sans text-sm font-bold tracking-[0.12em] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-950 hover:text-cream-50 sm:w-auto"
            >
              <Disc3 size={17} aria-hidden="true" />
              Contratar DJ
            </a>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm font-bold">
            {waHref && (
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline">
                <MessageCircle size={15} aria-hidden="true" /> WhatsApp
              </a>
            )}
            {business.phoneHref && (
              <a href={`tel:${business.phoneHref}`} className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline">
                <Phone size={15} aria-hidden="true" /> {business.phone || "Llamar"}
              </a>
            )}
          </div>
          <p className="mt-6 font-sans text-xs text-ink-950/60">
            Estado:{" "}
            {business.bookingUrl
              ? "sistema online conectado."
              : business.whatsappHref || business.phoneHref
                ? "vía WhatsApp / teléfono (sistema online pendiente — TODO-DATO-08)."
                : "pendiente de configurar (TODO-DATO-07/08)."}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
