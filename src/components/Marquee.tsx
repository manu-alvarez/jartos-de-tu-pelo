const items = ["Fresh Fade", "Taper", "Barba a navaja", "Diseños", "Boom Bap", "DJ Set", "Toalla caliente", "Hip Hop"];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div aria-hidden="true" className="overflow-hidden border-y-4 border-ink-950 bg-gold-400 py-3">
      <div className="animate-marquee flex w-max items-center gap-8 pr-8">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 font-sans text-[13px] font-bold tracking-[0.24em] whitespace-nowrap text-ink-950 uppercase">
            {t}
            <span>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
