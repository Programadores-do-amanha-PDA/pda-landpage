import { Container } from "@/components/ui/Container";
import { permanence } from "@/content/impacto";

export function Permanence() {
  return (
    <section aria-labelledby="permanencia-titulo" className="bg-white">
      <Container className="flex flex-col gap-12 py-20 sm:py-28">
        <div className="flex flex-col gap-6">
          <h2
            id="permanencia-titulo"
            className="m-0 max-w-[1000px] font-display text-[clamp(40px,5vw,72px)] font-normal uppercase leading-[1.02]"
          >
            {permanence.title}
          </h2>
          <p className="m-0 max-w-[760px] text-[18px] leading-[1.6] sm:text-[20px]">
            {permanence.lead}
          </p>
        </div>
        <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-6">
          {permanence.items.map((item, i) => (
            <div
              key={item.text}
              className={`flex flex-col-reverse gap-3 rounded-[0_48px_0_48px] p-8 ${
                i % 2 === 0 ? "bg-purple text-cream" : "bg-ink text-cream"
              }`}
            >
              <dd className="m-0 text-[15px]">{item.text}</dd>
              <dt className="font-display text-[40px] leading-none text-yellow sm:text-[48px]">
                {item.value}
              </dt>
            </div>
          ))}
        </dl>
        <p className="m-0 text-[13px]">{permanence.note}</p>
      </Container>
    </section>
  );
}
