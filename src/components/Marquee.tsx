const items = ["Corte de precisión", "Balayage", "Mechas", "Keratina", "Recogidos", "Brillo gloss", "Ritual capilar"];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-cream-50/10 bg-ink-900 py-4">
      <div className="animate-marquee flex w-max items-center gap-8 pr-8">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 text-[12px] font-bold tracking-[0.3em] whitespace-nowrap text-cream-50/55 uppercase">
            {t}
            <span className="text-gold-500">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
