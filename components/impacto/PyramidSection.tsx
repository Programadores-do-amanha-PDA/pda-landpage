import { IncomePyramid } from "@/components/charts/IncomePyramid";
import { Container } from "@/components/ui/Container";
import { RichText } from "@/components/ui/RichText";
import { pyramid } from "@/content/impacto";

export function PyramidSection() {
  return (
    <section aria-labelledby="piramide-titulo" className="bg-cream">
      <Container className="flex flex-wrap items-center gap-16 py-20 sm:py-28">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-6">
          <h2
            id="piramide-titulo"
            className="m-0 font-display text-[clamp(40px,5vw,64px)] font-normal uppercase leading-[1.02]"
          >
            {pyramid.title}
          </h2>
          <p className="m-0 text-[18px] leading-[1.6] sm:text-[20px]">
            <RichText segments={pyramid.text} strongClassName="text-purple" />
          </p>
          <div className="flex flex-col gap-3 rounded-[0_48px_0_48px] bg-ink p-7 text-cream sm:p-9">
            <p className="m-0 font-display text-[48px] uppercase leading-none text-yellow sm:text-[56px]">
              {pyramid.stat.value}
            </p>
            <p className="m-0 text-[15px] leading-[1.55]">{pyramid.stat.text}</p>
          </div>
        </div>
        <IncomePyramid
          title={pyramid.chartTitle}
          levels={pyramid.levels}
          note={pyramid.note}
          sources={pyramid.sources}
          className="min-w-0 flex-[1_1_520px]"
        />
      </Container>
    </section>
  );
}
