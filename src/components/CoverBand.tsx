import Reveal from "./Reveal";

const COVER = `${import.meta.env.BASE_URL}portada.jpg`;

/** Banda-póster a sangre: el graffiti al 100 %, sin texto encima. */
export default function CoverBand() {
  return (
    <section aria-label="Mural de graffiti de la casa" className="relative bg-ink-950">
      <Reveal y={0}>
        <img
          src={COVER}
          alt="Mural de graffiti en verde neón con letras de estilo hip hop"
          loading="lazy"
          width={1408}
          height={768}
          className="aspect-[4/3] w-full object-cover sm:aspect-[21/9]"
        />
      </Reveal>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 border-y border-cream-50/10" />
    </section>
  );
}
