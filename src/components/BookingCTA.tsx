import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { business, getBookingHref } from "../config/business";
import Reveal from "./Reveal";

export default function BookingCTA() {
  const href = getBookingHref();
  const external = href.startsWith("http");
  const waHref = business.whatsappHref
    ? `https://wa.me/${business.whatsappHref}?text=${encodeURIComponent(business.whatsappMessage)}`
    : null;

  return (
    <section aria-labelledby="reserva-title" className="relative overflow-hidden bg-cream-50 py-24 text-stone-900 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 left-0 mx-auto h-72 max-w-4xl rounded-full bg-gold-400/25 blur-[120px]"
      />
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-[11px] font-bold tracking-[0.32em] text-gold-700 uppercase">
            Reserva — fácil y sin compromiso
          </p>
          <h2 id="reserva-title" className="font-display mx-auto mt-4 max-w-3xl text-balance text-4xl leading-[1.02] font-light tracking-tight sm:text-6xl">
            Tu mejor versión empieza con una <em className="italic">cita</em>.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-stone-600">
            {business.bookingUrl
              ? "Reserva online en segundos con nuestro sistema de citas."
              : "Sin sistema online todavía: escríbenos por WhatsApp o llámanos y te proponemos hueco en minutos. Nada de formularios que nadie lee."}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-stone-900 px-9 py-4 text-sm font-bold tracking-[0.12em] text-cream-50 uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-14px_rgb(0_0_0/0.5)] sm:w-auto"
            >
              <CalendarCheck size={18} aria-hidden="true" />
              Reserva tu cita
            </a>
            {waHref && (
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-stone-900/20 px-9 py-4 text-sm font-bold tracking-[0.12em] uppercase transition-colors hover:border-stone-900 sm:w-auto"
              >
                <MessageCircle size={17} aria-hidden="true" />
                WhatsApp
              </a>
            )}
            {business.phoneHref && (
              <a
                href={`tel:${business.phoneHref}`}
                className="inline-flex items-center gap-2 px-2 py-2 text-sm font-bold text-stone-900 underline-offset-4 hover:underline"
              >
                <Phone size={15} aria-hidden="true" />
                {business.phone || "Llamar"}
              </a>
            )}
          </div>
          <p className="mt-6 text-xs text-stone-500">
            Estado de reservas:{" "}
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
