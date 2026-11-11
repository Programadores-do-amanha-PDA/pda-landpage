import { Container } from "@/components/ui/Container";
import { history } from "@/content/sobre";

export function History() {
  return (
    <section aria-labelledby="historia-titulo" className="bg-cream text-ink">
      <Container className="flex flex-col gap-6 py-20 sm:py-28">
        <h2
          id="historia-titulo"
          className="m-0 font-display text-[clamp(40px,5vw,72px)] font-normal uppercase leading-[1.02]"
        >
          {history.title}
        </h2>
        <p className="m-0 max-w-[820px] text-[18px] leading-[1.6] sm:text-[20px]">
          {history.text}
        </p>
      </Container>
    </section>
  );
}
