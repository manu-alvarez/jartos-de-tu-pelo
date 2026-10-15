# DATOS A RELLENAR — Checklist del propietario

> ** Lee este documento y completa los `TODO-DATO-XX` por orden.
> La web funciona sin ellos, pero muestra estados elegantes de
> **"A confirmar / Consultar / Próximamente"** hasta que los completes.
> **No se ha inventado ningún dato comercial, precio, reseña ni horario real.**

Todos los datos viven en **`src/config/business.ts`** y **`src/config/services.ts`**.
No hay que tocar ningún componente: toda la web bebe de esos dos archivos.

---

## 🔴 BLOQUEANTES (sin esto, la web no puede captar citas reales)

| Código | Dónde | Qué poner | Ejemplo |
|---|---|---|---|
| `TODO-DATO-01` | `business.ts → name` | Nombre comercial exacto del salón | `"Lumina Hair Studio"` |
| `TODO-DATO-04` | `business.ts → city, neighborhood, address, mapsUrl` | Ciudad, barrio/zona, dirección completa y enlace "Cómo llegar" de Google Maps (abre Google Maps → Compartir → Copiar enlace; **no necesita API key**) | `"Madrid"`, `"Malasaña"`, `"Calle del Pez 21, Bajo — 28004 Madrid"` |
| `TODO-DATO-07` | `business.ts → phone, phoneHref, whatsapp, whatsappHref, email` | Teléfono visible + versión `tel:` (solo dígitos con prefijo, sin espacios), WhatsApp visible + versión `wa.me` (solo dígitos con prefijo país, sin `+` ni espacios), email | visible `"910 123 456"`, `phoneHref: "+34910123456"` … espera, formato: ver nota ⬇ |
| `TODO-DATO-08` | `business.ts → bookingUrl, bookingMode` | URL del sistema de reservas si existe (Fresha, Treatwell, Booksy, Calendly…). Si se deja vacía, la web reserva automáticamente por **WhatsApp → teléfono** | `"https://www.fresha.com/..."` |
| `TODO-DATO-10` | `business.ts → openingHours` | Horario real día por día (`"10:00 – 19:00"` o `"Cerrado"`) | — |

**Nota formato teléfono/WhatsApp** (importante para que los botones funcionen):
```ts
phone: "+34 910 123 456",   // visible, formato libre
phoneHref: "+34910123456",   // para tel: — sin espacios
whatsapp: "+34 600 123 456", // visible, formato libre
whatsappHref: "34600123456", // para wa.me — SOLO dígitos, con prefijo país, SIN "+"
email: "hola@tudominio.es",
```

---

## 🟡 CATÁLOGO Y CONTENIDO (convierten visitas en reservas)

| Código | Dónde | Qué poner |
|---|---|---|
| `TODO-DATO-20` | `services.ts → serviceCategories` | Catálogo real de barbería: por cada servicio, nombre, descripción corta (1 línea, con actitud), **precio real o `null`** (= la web muestra "Consultar"), **duración real en minutos o `null`** (= no se muestra). Si el precio es real, pon también `provisional: false` |
| `TODO-DATO-02/03` | `business.ts → claim, shortDescription` | Frase de propuesta de valor + descripción de 140–160 caracteres (se usa en el hero y en el SEO) |
| `TODO-DATO-09` | `business.ts → instagramUrl, facebookUrl, tiktokUrl` | URLs completas de perfiles (con `https://`). Los iconos aparecen solo cuando hay URL |
| `TODO-DATO-12/13` | `business.ts → targetAudience, differentiators` | Público objetivo y 2–4 diferenciadores reales (ej. "Diagnóstico gratuito") para afinar textos |
| `TODO-DATO-05/06` | `business.ts → latitude, longitude` | Coordenadas decimales (opcionales; completan el SEO local avanzado) |

---

## 🟢 FOTOGRAFÍA Y REPUTACIÓN (solo contenido real y autorizado)

| Código | Dónde | Qué poner |
|---|---|---|
| `TODO-DATO-22` | `services.ts → galleryImages` + `business.ts → hasRealPhotos: true` | Sustituir las 6 fotos de demostración (Unsplash, marcadas como "demo") por fotografías propias: súbelas a `public/galeria/` y apunta `src` a `/galeria/nombre.jpg`. Después pon `hasRealPhotos: true` |
| `TODO-DATO-21` | `services.ts → testimonials` + `business.ts → hasRealReviews: true, showTestimonialsSection: true` | Añadir reseñas **reales y autorizadas** con formato `{ name: "María G.", text: "...", source: "Google", rating: 5 }`. **Prohibido inventar reseñas.** Sin esto, la sección permanece oculta por diseño |

---

## 🎧 FACETA DJ (confirmada: hip hop/rap)

| Código | Dónde | Qué poner |
|---|---|---|
| `TODO-DATO-14` | `business.ts → djAlias` | Nombre artístico en cabina (ej. `"DJ Prometeo"`). Sin esto se muestra "AKA por confirmar" |
| `TODO-DATO-15` | `business.ts → djPriceNote` | Caché orientativo real (ej. `"Desde 150 € por sesión"`) o dejar pendiente (= "a consultar") |
| `TODO-DATO-16` | `services.ts → djDates` | Próximas fechas con `{ date, venue, city, url? }`. Vacío = la web muestra "Fechas por confirmar" |

## ⚪ SEO, LEGAL Y MEDICIÓN (antes de publicar)

| Código | Dónde | Qué poner |
|---|---|---|
| `TODO-DATO-11` | `business.ts → domain`, `index.html` (canonical + og:url), `public/robots.txt`, `public/sitemap.xml` | Dominio real (ej. `https://www.tusalon.es`). Estado actual: apunta a la URL provisional de GitHub Pages (`https://manu-alvarez.github.io/prometheus-salon`). Al tener dominio propio, buscar esa URL en el proyecto y sustituir en esos 4 sitios, más `base` en `vite.config.ts` y `basename` en `src/App.tsx` |
| `TODO-DATO-30/31/32` | `src/pages/Legal.tsx` | Razón social, NIF, domicilio y email del titular en Aviso legal / Privacidad / Cookies. Textos marcados como **provisionales**: revisarlos con el titular antes de publicar |
| `TODO-DATO-33` | (futuro) | Analítica: si se quiere medir visitas, decidir herramienta (Plausible/Umami/GA4) y se integrará con aviso de cookies real. Hoy: **cero cookies de seguimiento, cero banners ficticios** |

---

## ✅ Verificación después de completar

1. `npm run dev` → revisa que tu teléfono, dirección, horario y precios aparecen donde toca.
2. Pulsa **"Reserva tu cita"** en hero, servicios y contacto → debe abrir tu WhatsApp / sistema de reservas.
3. `npm run build` → debe compilar sin errores.
4. Cuando cambies el dominio, vuelve a pedir a Google que reindexe (Search Console).
