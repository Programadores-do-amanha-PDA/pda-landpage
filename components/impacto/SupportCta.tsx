import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { permanence } from "@/content/impacto";

/** Fechamento da página com o CTA "Apoie a próxima turma". */
export function SupportCta() {
  return (
    <section aria-label="Apoie" className="bg-ink bg-dots text-cream">
      <Container className="flex justify-center py-16 sm:py-20">
        <Button link={permanence.cta} variant="primary" />
      </Container>
    </section>
  );
}
