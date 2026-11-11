import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { cx } from "@/components/ui/cx";
import { media } from "@/content/sobre";

export function Media() {
  return (
    <section
      id="na-midia"
      aria-labelledby="midia-titulo"
      className="scroll-mt-24 bg-ink text-cream"
    >
      <Container className="flex flex-col gap-10 py-20 sm:py-28">
        <h2
          id="midia-titulo"
          className="m-0 font-display text-[clamp(40px,5vw,72px)] font-normal uppercase leading-[1.02]"
        >
          {media.title}
        </h2>
        <ul className="m-0 grid list-none grid-cols-2 gap-4 p-0 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          {media.items.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cx(
                  "relative block h-[96px] rounded-lg border-2 transition-colors hover:border-yellow",
                  item.onDark
                    ? "border-card-dark bg-card-dark"
                    : "border-white bg-white",
                )}
              >
                <Image
                  src={item.src}
                  alt={`${item.name} (abre a matéria em nova aba)`}
                  fill
                  sizes="220px"
                  className="object-contain p-5"
                />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
