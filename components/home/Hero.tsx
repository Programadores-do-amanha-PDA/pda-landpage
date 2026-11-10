import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { RichText } from "@/components/ui/RichText";
import { SectionTag } from "@/components/ui/SectionTag";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section
      id="topo"
      aria-labelledby="hero-titulo"
      className="overflow-hidden bg-ink bg-dots text-cream"
    >
      <div className="flex flex-wrap items-stretch">
        <div className="flex min-w-0 flex-[999_1_600px] flex-col justify-center gap-10 py-20 pl-5 pr-5 sm:py-28 sm:pl-[max(32px,calc((100vw-1280px)/2+32px))] sm:pr-12">
          <SectionTag>{hero.tag}</SectionTag>
          <h1
            id="hero-titulo"
            className="m-0 flex flex-col items-start gap-[0.1em] font-display text-[clamp(48px,8.5vw,150px)] font-normal uppercase leading-[1.08]"
          >
            {hero.title.map((line, i) => (
              <span
                key={i}
                className="flex flex-wrap items-center gap-x-[0.22em] gap-y-[0.1em]"
              >
                <RichText segments={line} />
              </span>
            ))}
          </h1>
          <p className="m-0 max-w-[640px] text-[18px] leading-[1.6] sm:text-[20px]">
            <RichText segments={hero.lead} />
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Button link={hero.primaryCta} variant="primary" />
            <Button link={hero.secondaryCta} variant="outline" />
          </div>
        </div>
        <div className="relative min-h-[380px] min-w-0 flex-[1_1_420px] pr-4 sm:min-h-[520px]">
          <div className="relative h-full min-h-[380px] shadow-[16px_0_0_#EDDC12] sm:min-h-[520px]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
