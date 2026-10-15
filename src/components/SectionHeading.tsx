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
        className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] ${
          dark ? "text-stone-500" : "text-gold-400"
        }`}
      >
        <span aria-hidden="true" className={`h-px w-10 ${dark ? "bg-stone-300" : "bg-gold-500/70"}`} />
        {eyebrow}
      </p>
      <h2
        className={`font-display max-w-3xl text-balance text-4xl leading-[1.05] font-light tracking-tight text-cream-50 sm:text-5xl ${
          dark ? "text-stone-900" : ""
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
