import { Container } from "@/components/ui/Container";
import { RichText } from "@/components/ui/RichText";
import { SectionTag } from "@/components/ui/SectionTag";
import { opening } from "@/content/impacto";

export function Opening() {
  return (
    <section
      aria-labelledby="impacto-titulo"
      className="bg-ink bg-dots text-cream"
    >
      <Container className="flex flex-col gap-10 py-20 sm:py-28">
        <SectionTag>{opening.tag}</SectionTag>
        <h1
          id="impacto-titulo"
          className="m-0 flex flex-col items-start gap-[0.12em] font-display text-[clamp(56px,10vw,160px)] font-normal uppercase leading-[1.08]"
        >
          {opening.title.map((line, i) => (
            <span
              key={i}
              className="flex flex-wrap items-center gap-x-[0.22em] gap-y-[0.12em]"
            >
              <RichText segments={line} />
            </span>
          ))}
        </h1>
        <div className="flex flex-wrap items-end gap-10">
          <p className="m-0 min-w-0 max-w-[720px] flex-[1_1_420px] text-[18px] leading-[1.6] sm:text-[20px]">
            <RichText segments={opening.lead} />
          </p>
          <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-3 border border-cream/[0.18] bg-card-dark p-7 sm:max-w-[440px] sm:p-9">
            <p className="m-0 font-display text-[48px] uppercase leading-none text-yellow sm:text-[56px]">
              {opening.stat.value}
            </p>
            <p className="m-0 text-[15px] leading-[1.55]">{opening.stat.text}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
