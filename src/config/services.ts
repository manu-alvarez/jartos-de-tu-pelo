/**
 * Catálogo de servicios — CENTRALIZADO y PROVISIONAL.
 *
 * ⚠️  TODO-DATO-20 · Sustituir por el catálogo real del salón.
 * Ningún precio ni duración de este archivo es real: todos llevan
 * `provisional: true` y la UI muestra "A confirmar" / "Consultar".
 *
 * Cómo completar:
 *  1. Cambia nombre/descripción de cada servicio.
 *  2. Si el precio es real → pon `price: "32 €"` y `provisional: false`.
 *     Si NO es real → deja `price: null` (la UI mostrará "Consultar").
 *  3. Igual con `durationMin` (null = no mostrar duración).
 *  4. Añade/elimina servicios libremente dentro de cada categoría.
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
    id: "cortes",
    label: "Cortes",
    tagline: "Precisión, textura y movimiento a medida.",
    services: [
      {
        id: "corte-mujer",
        name: "Corte signature",
        description: "Diagnóstico, corte de precisión, lavado ritual y acabado peinado.",
        price: null,
        durationMin: null,
        provisional: true,
      },
      {
        id: "corte-hombre",
        name: "Corte + perfilado",
        description: "Corte con máquina/tijera, contornos definidos y acabado mate o pulido.",
        price: null,
        durationMin: null,
        provisional: true,
      },
      {
        id: "flequillo",
        name: "Flequillo / retoque de puntas",
        description: "Mantenimiento exprés entre cortes para conservar la forma.",
        price: null,
        durationMin: null,
        provisional: true,
      },
    ],
  },
  {
    id: "color",
    label: "Coloración",
    tagline: "Balayage, mechas y color sólido con diagnóstico previo.",
    services: [
      {
        id: "balayage",
        name: "Balayage luminoso",
        description: "Aclarado artesanal fundido, matiz personalizado y tratamiento sellante.",
        price: null,
        durationMin: null,
        provisional: true,
      },
      {
        id: "mechas",
        name: "Mechas / babylights",
        description: "Luz natural o contraste definido según tu base y objetivo.",
        price: null,
        durationMin: null,
        provisional: true,
      },
      {
        id: "color-raiz",
        name: "Color de raíz + brillo",
        description: "Cobertura uniforme y baño de brillo para medios y puntas.",
        price: null,
        durationMin: null,
        provisional: true,
      },
      {
        id: "matiz",
        name: "Matiz / gloss",
        description: "Corrección de tono y extra de brillo sin aclarar.",
        price: null,
        durationMin: null,
        provisional: true,
      },
    ],
  },
  {
    id: "tratamientos",
    label: "Tratamientos",
    tagline: "Salud capilar: hidratación, fuerza y brillo.",
    services: [
      {
        id: "keratina",
        name: "Alisado / keratina",
        description: "Disciplina anti-encrespamiento con acabado suave. Diagnóstico previo.",
        price: null,
        durationMin: null,
        provisional: true,
      },
      {
        id: "hidratacion",
        name: "Ritual hidratante",
        description: "Higiene profunda, mascarilla profesional y sellado de cutícula.",
        price: null,
        durationMin: null,
        provisional: true,
      },
      {
        id: "cuero-cabelludo",
        name: "Detox cuero cabelludo",
        description: "Exfoliación suave y equilibrio para raíces sanas.",
        price: null,
        durationMin: null,
        provisional: true,
      },
    ],
  },
  {
    id: "peinados",
    label: "Peinados & ocasiones",
    tagline: "Recogidos, ondas y styling para tu día señalado.",
    services: [
      {
        id: "peinado-evento",
        name: "Peinado de evento",
        description: "Ondas, trenzas o pulidos con fijación flexible y prueba previa opcional.",
        price: null,
        durationMin: null,
        provisional: true,
      },
      {
        id: "recogido-novia",
        name: "Recogido novia + prueba",
        description: "Diseño personalizado con prueba anticipada y coordinación del día.",
        price: null,
        durationMin: null,
        provisional: true,
      },
      {
        id: "brushing",
        name: "Brushing / styling",
        description: "Acabado liso, con volumen o wavy para el día a día.",
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
 * Añade objetos SOLO con opiniones verificadas y autorizadas:
 *   { name: "María G.", text: "...", source: "Google", rating: 5 }
 */
export interface Testimonial {
  name: string;
  text: string;
  source: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export const testimonials: Testimonial[] = [];

/**
 * Galería de demostración (Unsplash). NO son trabajos del salón.
 * ⚠️  TODO-DATO-22 · Sustituir por fotografías propias.
 * Cuando `hasRealPhotos = true`, cambia `demo: false` y usa /public/galeria/*.
 */
export interface GalleryImage {
  src: string;
  alt: string;
  tag: string;
  demo: boolean;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    alt: "Interior luminoso de salón de peluquería (imagen de demostración)",
    tag: "Salón",
    demo: true,
  },
  {
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80",
    alt: "Estilista peinando melena larga (imagen de demostración)",
    tag: "Styling",
    demo: true,
  },
  {
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80",
    alt: "Retrato con peinado de ondas (imagen de demostración)",
    tag: "Peinado",
    demo: true,
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
    alt: "Detalle de maquillaje y cabello (imagen de demostración)",
    tag: "Detalle",
    demo: true,
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80",
    alt: "Lavado capilar en salón (imagen de demostración)",
    tag: "Ritual",
    demo: true,
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
    alt: "Melena rubia con movimiento (imagen de demostración)",
    tag: "Color",
    demo: true,
  },
];
