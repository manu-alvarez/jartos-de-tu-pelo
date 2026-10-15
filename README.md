# PROMETHEUS · Barber & Beats

Web de barbería + DJ de hip hop/rap: identidad urbana streetwear (tinta + volt ácido +
hueso, tipografía Anton + Space Grotesk), beat boom-bap generado por código con
activación manual, y doble conversión (reservar corte / contratar DJ).

> **Estado de los datos:** todo el contenido comercial es **provisional y configurable**.
> No hay precios, reseñas, horarios ni direcciones reales inventadas.
> 👉 Para poner la web en producción, sigue **`docs/DATOS-A-RELLENAR.md`**.

## Comandos

| Acción | Comando |
|---|---|
| Iniciar en desarrollo | `npm run dev` |
| Build de producción | `npm run build` |
| Previsualizar el build | `npm run preview` |
| Linter | `npm run lint` |
| Chequeo de tipos | `npx tsc -b` |

Requisitos: Node.js 20+.

## Arquitectura

```
src/
  config/
    business.ts    ← FUENTE ÚNICA: nombre, contacto, reservas, horarios, redes (TODO-DATO-01…13)
    services.ts    ← Catálogo provisional + galería demo + testimonios vacíos (TODO-DATO-20…22)
    site.ts        ← Navegación y enlaces legales
  components/      ← Header, Hero, Marquee, Services, About, Gallery (+lightbox),
                     Testimonials (oculta sin reseñas reales), BookingCTA, Contact,
                     Footer, Reveal, SectionHeading, JsonLd, icons
  pages/           ← Home, Legal (aviso-legal, privacidad, cookies — textos provisionales)
  index.css        ← Design tokens Tailwind v4 (@theme) + reduced-motion + focus visible
```

- **Reservas:** `getBookingHref()` en `business.ts` — prioridad: URL externa → WhatsApp con mensaje pre-rellenado → teléfono → ancla `#contacto`. **DJ:** `getDjHref()` con mensaje propio de contratación. Nunca finge confirmar una cita.
- **Música:** `public/beat.mp3` — beat de la casa en loop (`src/audio/beat.ts`, `src/components/BeatToggle.tsx`). Arranque solo por gesto del usuario (política autoplay), pastilla flotante con ecualizador, pausa al ocultar la pestaña. Para cambiar el tema, sustituye el MP3 manteniendo el nombre (`TODO-DATO-17`).
- **SEO local:** H1 único, jerarquía H2/H3, canonical, OG/Twitter, `robots.txt`, `sitemap.xml`, JSON-LD `HairSalon` generado solo con datos reales, textos `alt` útiles.
- **Accesibilidad:** skip-link, menú móvil con `aria-expanded` + cierre con Escape, lightbox con teclado, `prefers-reduced-motion` (CSS + Framer Motion), foco visible, áreas táctiles ≥44px.
- **Rendimiento:** imágenes con dimensiones + `lazy` (salvo hero con `fetchPriority="high"`), sin mapa embebido pesado (enlace externo), bundle JS ~448 KB / ~143 KB gzip.

## Decisiones y supuestos documentados

1. **Marca provisional** "PROMETHEUS · Salon Experience" hasta recibir el nombre real (`TODO-DATO-01`).
2. **Precios:** todos `null` → la UI muestra "Consultar" + distintivo "Precio a confirmar".
3. **Testimonios:** sección oculta hasta tener reseñas verificadas (cero reseñas inventadas).
4. **Galería:** 6 fotos Unsplash marcadas como demo; sustituir por propias (`TODO-DATO-22`).
5. **Mapa:** enlace externo a Google Maps (sin API key ni secretos expuestos).
6. **Sin cookies ni analítica** de momento; sin banners ficticios.

## Pendiente (ver `docs/DATOS-A-RELLENAR.md` para el detalle)

- [ ] Bloque 🔴 del propietario (nombre, dirección, teléfono/WhatsApp, reservas, horario)
- [ ] Catálogo real con precios y duraciones (`TODO-DATO-20`)
- [ ] Fotografías propias + reseñas verificadas (`TODO-DATO-21/22`)
- [ ] Dominio real en 4 archivos (`TODO-DATO-11`) + revisión legal (`TODO-DATO-30/31/32`)
- [ ] Despliegue según `docs/DESPLIEGUE.md` (con fallback SPA `/* → /index.html`)

## Verificación ejecutada (15-10-2026)

- `npx tsc -b` → ✅ sin errores (tras corregir 1 paréntesis y migrar iconos de marca por su eliminación en lucide-react 1.x).
- `npm run lint` (oxlint) → ✅ 0 errores, 0 avisos.
- `npm run build` → ✅ `dist/` generado.
- `vite preview` + `curl` → ✅ HTTP 200, título/canonical/OG correctos.
- Pendiente de verificación manual: navegación con teclado + lector de pantalla, Lighthouse en dispositivo real, prueba de reserva en móvil.
