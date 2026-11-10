import { SalaryChart } from "@/components/charts/SalaryChart";
import { Container } from "@/components/ui/Container";
import { salaryCurve } from "@/content/home";
import { curve } from "@/content/impacto";

export function CurveSection() {
  return (
    <section aria-labelledby="curva-titulo" className="bg-ink text-cream">
      <Container className="flex flex-col gap-12 py-20 sm:py-28">
        <div className="flex flex-col gap-6">
          <p className="m-0 font-mono text-[16px] font-bold tracking-[0.08em] text-yellow sm:text-[18px]">
            {curve.tag}
          </p>
          <h2
            id="curva-titulo"
            className="m-0 max-w-[960px] font-display text-[clamp(40px,5vw,72px)] font-normal uppercase leading-[1.02]"
          >
            {curve.title}
          </h2>
          <p className="m-0 max-w-[760px] text-[18px] leading-[1.6] sm:text-[20px]">
            {curve.text}
          </p>
        </div>
        <SalaryChart {...salaryCurve} className="text-ink" />
      </Container>
    </section>
  );
}
