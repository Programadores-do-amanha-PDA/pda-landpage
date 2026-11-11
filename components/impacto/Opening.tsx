import { Container } from "@/components/ui/Container";
import { RichText } from "@/components/ui/RichText";
import { opening } from "@/content/impacto";

export function Opening() {
  return (
    <section
      aria-labelledby="impacto-titulo"
      className="bg-ink bg-dots text-cream"
    >
      <Container className="flex flex-col gap-10 py-20 sm:py-28">
        <h1
          id="impacto-titulo"
          className="m-0 flex flex-col items-start gap-[0.12em] font-display text-[clamp(56px,10vw,160px)] font-normal uppercase leading-[1.08]"
        >
          {opening.title.map((line, i) => (
            <span
              key={i}
              className="flex flex-wrap items-center gap-x-[0.22em] gap-y-[0.12em]"
            >
              <RichText segments={line} barClassName="!pt-[0.16em]" />
            </span>
          ))}
        </h1>
        <p className="m-0 max-w-[720px] text-[18px] leading-[1.6] sm:text-[20px]">
          <RichText segments={opening.lead} />
        </p>
      </Container>
    </section>
  );
}
