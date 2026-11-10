import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { closing } from "@/content/home";

export function ClosingCta() {
  return (
    <section
      aria-labelledby="fechamento-titulo"
      className="bg-purple text-cream"
    >
      <Container
        size="narrow"
        className="flex flex-col items-start gap-8 py-20 sm:py-28"
      >
        <p
          aria-hidden="true"
          className="m-0 font-display text-[40px] leading-none tracking-[-0.05em] text-yellow"
        >
          {closing.symbol}
        </p>
        <h2
          id="fechamento-titulo"
          className="m-0 font-display text-[clamp(32px,4vw,56px)] font-normal uppercase leading-none"
        >
          {closing.statement}
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button link={closing.primaryCta} variant="pill-yellow" />
          <Button link={closing.secondaryCta} variant="pill-outline" />
        </div>
      </Container>
    </section>
  );
}
