import Reveal from "./Reveal";

interface Props {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({ eyebrow, title, copy, align = "left", dark = false }: Props) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <Reveal className={`flex flex-col gap-4 ${alignCls}`}>
      <p
        className={`font-sans text-[11px] font-bold tracking-[0.32em] uppercase ${
          dark ? "text-stone-500" : "text-gold-400"
        }`}
      >
        <span aria-hidden="true" className="mr-2 inline-block h-2.5 w-2.5 bg-current" />
        [{eyebrow}]
      </p>
      <h2
        className={`font-display max-w-3xl text-balance text-5xl leading-[0.95] tracking-tight uppercase sm:text-6xl ${
          dark ? "text-stone-900" : "text-cream-50"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p className={`max-w-2xl text-base leading-relaxed ${dark ? "text-stone-600" : "text-cream-50/65"}`}>
          {copy}
        </p>
      ) : null}
    </Reveal>
  );
}
