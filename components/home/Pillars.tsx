import { Container } from "@/components/ui/Container";
import { pillars } from "@/content/home";

export function Pillars() {
  return (
    <section aria-labelledby="fazemos-titulo" className="bg-white">
      <Container className="flex flex-col gap-8 py-20 sm:py-28">
        <h2
          id="fazemos-titulo"
          className="m-0 max-w-[760px] font-mono text-[18px] font-bold leading-[1.55] sm:text-[20px]"
        >
          {pillars.lead}
        </h2>
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-6 p-0">
          {pillars.items.map((item) => (
            <li
              key={item.number}
              className="flex flex-col gap-4 rounded-2xl bg-ink p-8 text-cream sm:p-10"
            >
              <span
                aria-hidden="true"
                className="font-display text-[40px] leading-none text-yellow"
              >
                {item.number}
              </span>
              <h3 className="m-0 font-display text-[32px] font-normal uppercase leading-none sm:text-[36px]">
                {item.title}
              </h3>
              <p className="m-0">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
