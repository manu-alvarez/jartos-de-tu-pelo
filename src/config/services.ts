/**
 * Catálogo de servicios — CENTRALIZADO y PROVISIONAL.
 *
 * ⚠️  TODO-DATO-20 · Sustituir por el catálogo real de la barbería.
 * Ningún precio ni duración de este archivo es real: todos llevan
 * `provisional: true` y la UI muestra "A confirmar" / "Consultar".
 *
 * Cómo completar:
 *  1. Cambia nombre/descripción de cada servicio.
 *  2. Si el precio es real → pon `price: "15 €"` y `provisional: false`.
 *     Si NO es real → deja `price: null` (la UI mostrará "Consultar").
 *  3. Igual con `durationMin` (null = no mostrar duración).
 */

export interface SalonService {
  id: string;
  name: string;
  description: string;
  /** null = precio no confirmado → UI muestra "Consultar" */
  price: string | null;
  /** null = duración no confirmada → no se muestra */
  durationMin: number | null;
  provisional: boolean;
}

export interface ServiceCategory {
  id: string;
  label: string;
  tagline: string;
  services: SalonService[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "degradados",
    label: "Degradados",
    tagline: "Fades limpios, transiciones sin marcas.",
    services: [
      {
        id: "fade-signature",
        name: "Degradado signature",
        description: "Fade alto, medio o bajo a máquina y tijera, contornos a navaja y acabado.",
        price: null,
        durationMin: null,
        provisional: true,
      },
      {
        id: "taper",
        name: "Taper + textura",
        description: "Limpieza de nuca y patillas con largo arriba trabajado a tijera.",
        price: null,
        durationMin: null,
        provisional: true,
      },
      {
        id: "clasico",
        name: "Clásico a tijera",
        description: "Corte atemporal, peinado y acabado con producto según tu estilo.",
        price: null,
        durationMin: null,
        provisional: true,
      },
    ],
  },
  {
    id: "barba",
    label: "Barba & Ritual",
    tagline: "Navaja, toalla caliente y línea definida.",
    services: [
      {
        id: "barba-completa",
        name: "Arreglo de barba completo",
        description: "Diseño de línea, navaja, toalla caliente y aceites de acabado.",
        price: null,
        durationMin: null,
        provisional: true,
      },
      {
        id: "afeitado",
        name: "Afeitado a navaja",
        description: "Apurado clásico con toalla caliente y bálsamo calmante.",
        price: null,
        durationMin: null,
        provisional: true,
      },
      {
        id: "perfilado",
        name: "Perfilado exprés",
        description: "Contornos, patillas y cuello para aguantar el corte entre visitas.",
        price: null,
        durationMin: null,
        provisional: true,
      },
    ],
  },
  {
    id: "disenos",
    label: "Diseños & Color",
    tagline: "Líneas, freestyle y color con actitud.",
    services: [
      {
        id: "diseno-freestyle",
        name: "Diseño freestyle",
        description: "Líneas y dibujos a máquina. Trae tu referencia o lo creamos aquí.",
        price: null,
        durationMin: null,
        provisional: true,
      },
      {
        id: "tinte",
        name: "Tinte / pigmentación",
        description: "Negro, platino o fantasía con diagnóstico previo del cabello.",
        price: null,
        durationMin: null,
        provisional: true,
      },
      {
        id: "mechas-barber",
        name: "Mechas & reflejos",
        description: "Contraste arriba para coronar el corte.",
        price: null,
        durationMin: null,
        provisional: true,
      },
    ],
  },
  {
    id: "packs",
    label: "Packs & Extras",
    tagline: "Sal del sillón redondo, de una sentada.",
    services: [
      {
        id: "pack-completo",
        name: "Pack corte + barba",
        description: "El servicio completo: fade, barba ritual y acabado total.",
        price: null,
        durationMin: null,
        provisional: true,
      },
      {
        id: "cejas",
        name: "Cejas & detalles",
        description: "Limpieza de cejas, vello de orejas y retoques de precisión.",
        price: null,
        durationMin: null,
        provisional: true,
      },
      {
        id: "infantil",
        name: "Corte infantil",
        description: "Primeros cortes con paciencia y estilo desde peques.",
        price: null,
        durationMin: null,
        provisional: true,
      },
    ],
  },
];

/**
 * ⚠️  TODO-DATO-21 · Testimonios REALES.
 * Vacío por defecto para NO inventar reseñas.
 */
export interface Testimonial {
  name: string;
  text: string;
  source: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export const testimonials: Testimonial[] = [];

/**
 * ⚠️  TODO-DATO-16 · Próximas fechas DJ.
 * Vacío por defecto: la sección muestra "Fechas por confirmar".
 * Formato: { date: "Sáb 24 MAY", venue: "Sala X", city: "Madrid", url: "https://..." }
 */
export interface DjDate {
  date: string;
  venue: string;
  city: string;
  url?: string;
}

export const djDates: DjDate[] = [];

/**
 * Galería de demostración (Unsplash). NO son trabajos del local.
 * ⚠️  TODO-DATO-22 · Sustituir por fotografías propias.
 */
export interface GalleryImage {
  src: string;
  alt: string;
  tag: string;
  demo: boolean;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
    alt: "Barbero recortando degradado (imagen de demostración)",
    tag: "Fade",
    demo: true,
  },
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80",
    alt: "Interior de barbería con sillones clásicos (imagen de demostración)",
    tag: "Shop",
    demo: true,
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80",
    alt: "Detalle de corte a máquina (imagen de demostración)",
    tag: "Detalle",
    demo: true,
  },
  {
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=80",
    alt: "Mezclador DJ en cabina (imagen de demostración)",
    tag: "Cabina",
    demo: true,
  },
  {
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80",
    alt: "Micrófono sobre escenario (imagen de demostración)",
    tag: "Directo",
    demo: true,
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80",
    alt: "Perfilado de barba con navaja (imagen de demostración)",
    tag: "Barba",
    demo: true,
  },
];
