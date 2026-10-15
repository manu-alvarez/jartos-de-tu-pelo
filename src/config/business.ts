/**
 * FUENTE ÚNICA DE VERDAD — Datos del negocio.
 *
 * ⚠️  PENDIENTE DE COMPLETAR POR EL PROPIETARIO.
 * Todos los campos marcados con `TODO-DATO` deben sustituirse por información real.
 * La web está diseñada para NO inventar datos: si un campo está vacío,
 * los componentes muestran un estado "A confirmar" elegante en lugar de datos falsos.
 *
 * 👉 GUÍA RÁPIDA: abre `docs/DATOS-A-RELLENAR.md` y sigue la checklist.
 */

// Helper: campo pendiente. Cadena vacía = pendiente.
const PENDIENTE = "";

export interface OpeningDay {
  day: string;
  hours: string; // ej. "10:00 – 19:00" o "Cerrado"
}

export const business = {
  // ── TODO-DATO-01 · Nombre comercial exacto ──────────────────────────────
  // Ej.: "Lumina Hair Studio". Provisional visible en la web.
  name: "PROMETHEUS",
  tagline: "Salon Experience",
  // TODO-DATO-02 · Claim / propuesta de valor (1 frase)
  claim: "Corte de precisión, color con intención y ritual de cuidado.",
  // TODO-DATO-03 · Descripción corta para SEO y hero (140–160 caracteres)
  shortDescription:
    "Salón especializado en corte de precisión, coloración avanzada y tratamientos capilares. Reserva tu cita.",

  // ── TODO-DATO-04 · Localización ─────────────────────────────────────────
  city: PENDIENTE, // Ej.: "Madrid"
  neighborhood: PENDIENTE, // Ej.: "Malasaña"
  address: PENDIENTE, // Ej.: "Calle del Pez 21, Bajo — 28004 Madrid"
  mapsUrl: PENDIENTE, // Ej.: "https://maps.google.com/?q=..." (sin API key)
  // Coordenadas solo si se quieren datos estructurados completos (opcionales)
  latitude: null as number | null, // TODO-DATO-05 · Ej.: 40.4252
  longitude: null as number | null, // TODO-DATO-06 · Ej.: -3.7043

  // ── TODO-DATO-07 · Contacto ─────────────────────────────────────────────
  phone: PENDIENTE, // Ej.: "+34 910 123 456" (formato visible)
  phoneHref: PENDIENTE, // Ej.: "+34910123456" (formato tel:, sin espacios)
  whatsapp: PENDIENTE, // Ej.: "+34 600 123 456"
  whatsappHref: PENDIENTE, // Ej.: "34600123456" (solo dígitos, con prefijo país, sin +)
  email: PENDIENTE, // Ej.: "hola@tudominio.es"

  // ── TODO-DATO-08 · Reservas ─────────────────────────────────────────────
  // Prioridad: 1) URL externa (Fresha/Treatwell/Booksy/Calendly) 2) WhatsApp 3) teléfono.
  // Deja bookingUrl vacío para usar automáticamente WhatsApp/teléfono.
  bookingUrl: PENDIENTE, // Ej.: "https://www.fresha.com/..."
  bookingMode: "whatsapp" as "external" | "whatsapp" | "phone",
  // Mensaje pre-rellenado de WhatsApp (se codifica automáticamente)
  whatsappMessage:
    "Hola, me gustaría reservar una cita. ¿Qué huecos tenéis disponibles?",

  // ── TODO-DATO-09 · Redes sociales ───────────────────────────────────────
  instagramUrl: PENDIENTE, // Ej.: "https://instagram.com/tu_salon"
  facebookUrl: PENDIENTE, // Ej.: "https://facebook.com/tu_salon"
  tiktokUrl: PENDIENTE, // Opcional

  // ── TODO-DATO-10 · Horario real ─────────────────────────────────────────
  openingHours: [
    { day: "Lunes", hours: "Cerrado" },
    { day: "Martes", hours: "10:00 – 19:00" },
    { day: "Miércoles", hours: "10:00 – 19:00" },
    { day: "Jueves", hours: "10:00 – 20:00" },
    { day: "Viernes", hours: "10:00 – 20:00" },
    { day: "Sábado", hours: "10:00 – 15:00" },
    { day: "Domingo", hours: "Cerrado" },
  ] as OpeningDay[],
  openingNote: "Horario provisional — pendiente de confirmar por el salón.",

  // ── TODO-DATO-11 · Dominio web real (para canonical y SEO) ───────────────
  // Provisional: URL de GitHub Pages. Al tener dominio propio, sustituir aquí,
  // en index.html, public/robots.txt y public/sitemap.xml.
  domain: "https://manu-alvarez.github.io/prometheus-salon",

  // ── Marca / posicionamiento (completar para afinar copy) ────────────────
  // TODO-DATO-12
  targetAudience: PENDIENTE, // Ej.: "Mujeres 25–45 que buscan color premium"
  differentiators: [] as string[], // TODO-DATO-13 · Ej.: ["Diagnóstico gratuito", ...]
  priceRange: "€€",

  // ── Flags de contenido real ─────────────────────────────────────────────
  // Pon en true SOLO cuando tengas el contenido real y autorizado.
  hasRealPhotos: false, // true → la galería son trabajos propios
  hasRealReviews: false, // true → se muestran testimonios (ver services.ts)
  showTestimonialsSection: false, // Recomendado: false hasta tener reseñas verificadas
} as const;

export type Business = typeof business;

/** ¿Hay un dato de contacto utilizable? */
export function hasContactData(): boolean {
  return Boolean(business.phone || business.whatsapp || business.email);
}

/** URL principal de reserva según disponibilidad real. */
export function getBookingHref(serviceName?: string): string {
  const msg = serviceName
    ? `Hola, me gustaría reservar: ${serviceName}. ¿Qué huecos tenéis?`
    : business.whatsappMessage;
  if (business.bookingUrl) return business.bookingUrl;
  if (business.whatsappHref)
    return `https://wa.me/${business.whatsappHref}?text=${encodeURIComponent(msg)}`;
  if (business.phoneHref) return `tel:${business.phoneHref}`;
  return "#contacto";
}

/** ¿El enlace de reserva es real o provisional? */
export function isBookingConfigured(): boolean {
  return Boolean(business.bookingUrl || business.whatsappHref || business.phoneHref);
}

/** Texto visible de contacto o marcador de pendiente. */
export function displayOrPending(value: string, pendingLabel = "A confirmar"): string {
  return value.trim() === "" ? pendingLabel : value;
}
