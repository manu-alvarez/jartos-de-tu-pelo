import { Link } from "react-router-dom";
import { business, displayOrPending } from "../config/business";
import { legalLinks, navLinks } from "../config/site";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-cream-50/10 bg-ink-950 pt-16 pb-8" aria-label="Pie de página">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl tracking-[0.14em] text-cream-50">
              {business.name}{" "}
              <span className="text-xs font-sans font-bold tracking-[0.3em] text-gold-400 uppercase">
                {business.tagline}
              </span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-50/60">
              {business.shortDescription}
            </p>
            <address className="mt-5 text-sm leading-relaxed text-cream-50/60 not-italic">
              {displayOrPending(business.address)}
              <br />
              {displayOrPending(business.phone)}
              {business.email ? (
                <>
                  <br />
                  <a href={`mailto:${business.email}`} className="hover:text-gold-300">
                    {business.email}
                  </a>
                </>
              ) : null}
            </address>
          </div>

          <nav aria-label="Navegación secundaria">
            <h2 className="text-[11px] font-bold tracking-[0.3em] text-cream-50/45 uppercase">Explorar</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-cream-50/70 transition-colors hover:text-gold-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[11px] font-bold tracking-[0.3em] text-cream-50/45 uppercase">Legal</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {legalLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-cream-50/70 transition-colors hover:text-gold-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-cream-50/40">
              Textos legales provisionales — deben revisarse con el titular antes de publicar.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-cream-50/10 pt-6 text-xs text-cream-50/40 sm:flex-row">
          <p>© {CURRENT_YEAR} {business.name} {business.tagline}. Todos los derechos reservados.</p>
          <p>
            Precios y horarios pendientes de confirmación ·{" "}
            <a href="#contacto" className="underline-offset-4 hover:underline">
              Contacto
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
