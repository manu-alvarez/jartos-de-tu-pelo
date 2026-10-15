import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { business, displayOrPending } from "../config/business";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { FacebookIcon, InstagramIcon } from "./icons";

export default function Contact() {
  const waHref = business.whatsappHref
    ? `https://wa.me/${business.whatsappHref}?text=${encodeURIComponent(business.whatsappMessage)}`
    : null;

  const cards = [
    {
      icon: MapPin,
      title: "Dirección",
      lines: [
        displayOrPending(business.address),
        displayOrPending([business.neighborhood, business.city].filter((v) => v.trim() !== "").join(" · ")),
      ],
      action: business.mapsUrl
        ? { label: "Cómo llegar", href: business.mapsUrl, external: true }
        : null,
    },
    {
      icon: Phone,
      title: "Teléfono / WhatsApp",
      lines: [displayOrPending(business.phone), displayOrPending(business.whatsapp, "WhatsApp: a confirmar")],
      action: waHref ? { label: "Escríbenos", href: waHref, external: true } : null,
    },
    {
      icon: Mail,
      title: "Email / Instagram",
      lines: [displayOrPending(business.email), displayOrPending(business.instagramUrl)],
      action: business.instagramUrl
        ? { label: "Ver Instagram", href: business.instagramUrl, external: true }
        : null,
    },
  ];

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="scroll-mt-24 bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contacto y horarios"
          title="Encuéntranos. Te esperamos."
          copy="Todos los datos de contacto están centralizados en src/config/business.ts. Los campos pendientes se muestran como «A confirmar» hasta recibir la información real."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {cards.map(({ icon: Icon, title, lines, action }, i) => (
              <Reveal key={title} delay={i * 0.07}>
                <article className="hairline h-full rounded-2xl bg-ink-900/60 p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/12 text-gold-300">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-4 text-xl text-cream-50">{title}</h3>
                  <div className="mt-2 space-y-1 text-sm text-cream-50/70">
                    {lines.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </div>
                  {action ? (
                    <a
                      href={action.href}
                      {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="mt-4 inline-block text-[13px] font-bold tracking-wide text-gold-300 uppercase underline-offset-4 hover:underline"
                    >
                      {action.label} →
                    </a>
                  ) : (
                    <p className="mt-4 text-xs text-cream-50/40">Enlace pendiente de configurar.</p>
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <article className="hairline h-full rounded-2xl bg-ink-900/60 p-6 sm:p-8" aria-label="Horario de apertura">
              <h3 className="flex items-center gap-2 text-[12px] font-bold tracking-[0.28em] text-gold-400 uppercase">
                <Clock size={15} aria-hidden="true" /> Horario
              </h3>
              <dl className="mt-5 divide-y divide-cream-50/8">
                {business.openingHours.map((d) => (
                  <div key={d.day} className="flex items-center justify-between py-2.5 text-sm">
                    <dt className="text-cream-50/70">{d.day}</dt>
                    <dd className={`font-bold ${d.hours === "Cerrado" ? "text-cream-50/35" : "text-cream-50"}`}>
                      {d.hours}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs leading-relaxed text-cream-50/45">{business.openingNote}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {business.instagramUrl && (
                  <a
                    href={business.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram del salón"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/15 text-cream-50/80 transition-colors hover:border-gold-400/60 hover:text-gold-300"
                  >
                    <InstagramIcon size={18} />
                  </a>
                )}
                {business.facebookUrl && (
                  <a
                    href={business.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook del salón"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/15 text-cream-50/80 transition-colors hover:border-gold-400/60 hover:text-gold-300"
                  >
                    <FacebookIcon size={18} />
                  </a>
                )}
                {waHref && (
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp del salón"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/15 text-cream-50/80 transition-colors hover:border-gold-400/60 hover:text-gold-300"
                  >
                    <MessageCircle size={18} />
                  </a>
                )}
                {business.phoneHref && (
                  <a
                    href={`tel:${business.phoneHref}`}
                    aria-label="Llamar al salón"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/15 text-cream-50/80 transition-colors hover:border-gold-400/60 hover:text-gold-300"
                  >
                    <Phone size={18} />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
