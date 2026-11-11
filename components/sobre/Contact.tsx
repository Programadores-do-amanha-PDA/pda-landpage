import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { contact } from "@/content/sobre";

/** Fechamento da página com o CTA de contato. */
export function Contact() {
  return (
    <section aria-labelledby="contato-titulo" className="bg-purple text-cream">
      <Container className="flex flex-col items-start gap-8 py-20 sm:py-24">
        <h2
          id="contato-titulo"
          className="m-0 font-display text-[clamp(40px,5vw,72px)] font-normal uppercase leading-[1.02]"
        >
          {contact.title}
        </h2>
        <Button
          link={contact.cta}
          variant="pill-yellow"
          className="max-w-full break-all text-[14px] sm:text-[16px]"
        />
      </Container>
    </section>
  );
}
