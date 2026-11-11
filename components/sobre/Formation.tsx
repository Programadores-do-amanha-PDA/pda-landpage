import { Container } from "@/components/ui/Container";
import { formation } from "@/content/sobre";

export function Formation() {
  return (
    <section aria-labelledby="formacao-titulo" className="bg-white text-ink">
      <Container className="flex flex-col gap-10 py-20 sm:py-28">
        <h2
          id="formacao-titulo"
          className="m-0 font-display text-[clamp(40px,5vw,72px)] font-normal uppercase leading-[1.02]"
        >
          {formation.title}
        </h2>
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-6 p-0">
          {formation.items.map((item, i) => (
            <li
              key={item.title}
              className="flex flex-col gap-4 rounded-2xl bg-ink p-8 text-cream"
            >
              <span
                aria-hidden="true"
                className="font-display text-[40px] leading-none text-yellow"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="m-0 font-display text-[28px] font-normal uppercase leading-[1.02] sm:text-[32px]">
                {item.title}
              </h3>
              <p className="m-0 text-[17px] leading-[1.55]">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
