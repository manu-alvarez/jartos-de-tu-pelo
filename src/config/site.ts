/** Navegación y metadatos del sitio. */

export const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#salon", label: "El salón" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const legalLinks = [
  { to: "/aviso-legal", label: "Aviso legal" },
  { to: "/privacidad", label: "Privacidad" },
  { to: "/cookies", label: "Cookies" },
] as const;

export const siteMeta = {
  language: "es",
  themeColor: "#0c0a09",
} as const;
