import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { testimonial } from "@/content/home";

export function Testimonial() {
  return (
    <section aria-label="Depoimento" className="bg-ink text-cream">
      <Container
        size="narrow"
        className="flex flex-wrap items-center gap-12 py-20 sm:py-28"
      >
        {testimonial.photo ? (
          <div className="relative h-[260px] w-[220px] flex-none overflow-hidden rounded-[48px_0_48px_0]">
            <Image
              src={testimonial.photo.src}
              alt={testimonial.photo.alt}
              fill
              sizes="220px"
              className="object-cover"
            />
          </div>
        ) : (
          <div
            role="img"
            aria-label={`Espaço para foto de ${testimonial.name}`}
            className="flex h-[260px] w-[220px] flex-none items-center justify-center rounded-[48px_0_48px_0] bg-purple-mid p-4 text-center text-[13px]"
          >
            {testimonial.photoPlaceholder}
          </div>
        )}
        <figure className="m-0 flex min-w-0 flex-[1_1_480px] flex-col gap-6">
          <blockquote className="m-0">
            <p className="m-0 font-display text-[clamp(26px,3.2vw,44px)] uppercase leading-[1.08]">
              “{testimonial.quote}”
            </p>
          </blockquote>
          <figcaption className="text-[15px]">
            <strong className="text-yellow">{testimonial.name}</strong> ·{" "}
            {testimonial.details}
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
