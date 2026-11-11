import { Container } from "@/components/ui/Container";
import { numbers } from "@/content/home";

export function NumbersStrip() {
  return (
    <section aria-label={numbers.label} className="bg-purple text-cream">
      <Container className="pb-6 pt-14">
        <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
          {numbers.items.map((item) => (
            <div key={item.caption} className="flex flex-col-reverse gap-1">
              <dt className="text-[15px]">{item.caption}</dt>
              <dd className="m-0 font-display text-[56px] leading-none sm:text-[64px]">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mb-0 mt-14 text-[12px] opacity-75">{numbers.note}</p>
      </Container>
    </section>
  );
}
