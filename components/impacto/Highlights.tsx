import { Container } from "@/components/ui/Container";
import { highlights } from "@/content/impacto";

export function Highlights() {
  return (
    <section aria-label={highlights.label} className="bg-purple text-cream">
      <Container className="pb-12 pt-16 sm:pt-20">
        <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-x-8 gap-y-10">
          {highlights.items.map((item) => (
            <div key={item.value} className="flex flex-col-reverse gap-3">
              <dd className="m-0 text-[15px] leading-[1.55]">
                {item.text}
                {item.placeholder && (
                  <>
                    {" "}
                    <span className="font-bold text-yellow">
                      {item.placeholder}
                    </span>
                  </>
                )}
              </dd>
              <dt
                className={`font-display text-[44px] uppercase leading-none sm:text-[52px] ${
                  item.accent ? "text-yellow" : ""
                }`}
              >
                {item.value}
              </dt>
            </div>
          ))}
        </dl>
        <p className="mb-0 mt-10 text-[13px] opacity-90">{highlights.note}</p>
      </Container>
    </section>
  );
}
