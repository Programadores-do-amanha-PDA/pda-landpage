import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { cx } from "@/components/ui/cx";
import { partners } from "@/content/home";

export function Partners() {
  return (
    <section aria-labelledby="parceiros-titulo" className="bg-white">
      <Container className="flex flex-col gap-10 py-20 sm:py-24">
        <h2
          id="parceiros-titulo"
          className="m-0 font-display text-[clamp(32px,4vw,52px)] font-normal uppercase leading-none"
        >
          {partners.title}
        </h2>
        <ul className="m-0 grid list-none grid-cols-2 gap-4 p-0 sm:grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
          {partners.logos.map((logo) => (
            <li
              key={logo.name}
              className={cx(
                "relative h-[88px] rounded-lg border",
                logo.onDark ? "border-ink bg-ink" : "border-ink/[0.12]",
              )}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                sizes="200px"
                className="object-contain p-5"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
