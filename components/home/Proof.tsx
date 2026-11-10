import { SalaryChart } from "@/components/charts/SalaryChart";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { proof, salaryCurve } from "@/content/home";

/** "A prova": texto da curva salarial e o gráfico. */
export function Proof() {
  return (
    <section aria-labelledby="prova-titulo" className="bg-cream">
      <Container className="flex flex-wrap items-center gap-16 py-20 sm:py-28">
        <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-6">
          <h2
            id="prova-titulo"
            className="m-0 font-display text-[clamp(40px,5vw,64px)] font-normal uppercase leading-[0.95]"
          >
            {proof.title}
          </h2>
          <p className="m-0 text-[18px]">{proof.text}</p>
          <p className="m-0 text-[18px]">
            <strong className="font-display text-[28px] font-normal text-purple">
              {proof.highlight.value}
            </strong>
            {proof.highlight.text}
          </p>
          <div>
            <Button link={proof.cta} variant="pill-purple" />
          </div>
        </div>
        <SalaryChart {...salaryCurve} className="min-w-0 flex-[1_1_520px]" />
      </Container>
    </section>
  );
}
