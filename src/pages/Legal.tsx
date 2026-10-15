import { Link } from "react-router-dom";
import { business, displayOrPending } from "../config/business";

function LegalShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="bg-ink-950 pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="text-[11px] font-bold tracking-[0.3em] text-gold-400 uppercase">
          {business.name} · Texto provisional
        </p>
        <h1 className="font-display mt-3 text-4xl font-light text-cream-50 sm:text-5xl">{title}</h1>
        <div className="prose-legal mt-8 space-y-5 text-[15px] leading-relaxed text-cream-50/75">
          {children}
        </div>
        <div className="mt-10 rounded-2xl border border-gold-500/25 bg-gold-500/8 p-5 text-sm text-gold-200">
          Documento provisional generado como plantilla. Debe revisarse y completarse con los datos
          reales del titular (TODO-DATO-30/31/32 en <code>docs/DATOS-A-RELLENAR.md</code>) antes de
          su publicación definitiva. No constituye asesoramiento jurídico.
        </div>
        <Link to="/" className="mt-8 inline-block font-bold text-gold-300 underline-offset-4 hover:underline">
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}

export function AvisoLegal() {
  return (
    <LegalShell title="Aviso legal">
      <p><strong className="text-cream-50">1. Titular del sitio.</strong> [RAZÓN SOCIAL / NOMBRE] · NIF [···] · Domicilio: {displayOrPending(business.address)} · Email: {displayOrPending(business.email)} · Teléfono: {displayOrPending(business.phone)}.</p>
      <p><strong className="text-cream-50">2. Objeto.</strong> Este sitio presenta los servicios de barbería y DJ del titular y ofrece vías de contacto y reserva (teléfono / WhatsApp / sistema externo cuando esté conectado).</p>
      <p><strong className="text-cream-50">3. Propiedad intelectual.</strong> Los contenidos propios (textos, diseño, fotografías propias cuando se incorporen) pertenecen al titular. Las imágenes de demostración actuales pertenecen a sus autores (Unsplash) y serán sustituidas.</p>
      <p><strong className="text-cream-50">4. Responsabilidad.</strong> Los precios, horarios y disponibilidad mostrados como «A confirmar / Consultar» son provisionales hasta su confirmación directa con el salón.</p>
      <p><strong className="text-cream-50">5. Legislación.</strong> Este aviso se rige por la legislación española, en particular la LSSI 34/2002.</p>
    </LegalShell>
  );
}

export function Privacidad() {
  return (
    <LegalShell title="Política de privacidad">
      <p><strong className="text-cream-50">1. Responsable.</strong> [RAZÓN SOCIAL] · Email: {displayOrPending(business.email)}.</p>
      <p><strong className="text-cream-50">2. Datos que tratamos.</strong> Esta web no incluye formularios propios: si nos contactas por teléfono, WhatsApp o email, trataremos únicamente los datos que nos facilites para gestionar tu solicitud o cita.</p>
      <p><strong className="text-cream-50">3. Base jurídica y conservación.</strong> Ejecución de la relación precontractual/contractual y consentimiento. Conservamos los datos el tiempo necesario para la finalidad y los plazos legales.</p>
      <p><strong className="text-cream-50">4. Derechos.</strong> Acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a {displayOrPending(business.email)}; reclamación ante la AEPD (aepd.es).</p>
      <p><strong className="text-cream-50">5. Terceros.</strong> Al usar WhatsApp, teléfono o el sistema externo de reservas, se aplican sus propias políticas de privacidad.</p>
    </LegalShell>
  );
}

export function Cookies() {
  return (
    <LegalShell title="Política de cookies">
      <p><strong className="text-cream-50">1. Uso actual.</strong> Esta web no instala cookies propias de seguimiento ni muestra banners ficticios. Solo utiliza almacenamiento técnico imprescindible si el navegador lo requiere, y enlaces a terceros (Google Fonts, Unsplash, WhatsApp, mapas).</p>
      <p><strong className="text-cream-50">2. Terceros.</strong> Al cargar fuentes de Google o imágenes externas pueden intervenir sus políticas de cookies. Si en el futuro se activa analítica (TODO-DATO-33), se actualizará esta política y se solicitará el consentimiento cuando proceda.</p>
      <p><strong className="text-cream-50">3. Gestión.</strong> Puedes bloquear o eliminar cookies desde la configuración de tu navegador.</p>
    </LegalShell>
  );
}
