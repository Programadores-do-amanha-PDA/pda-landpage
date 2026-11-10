import { SmartLink } from "@/components/ui/SmartLink";
import { footer } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink text-[14px] text-cream">
      <div className="mx-auto flex max-w-site flex-col gap-10 px-5 pb-10 pt-16 sm:px-8">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex flex-[1_1_260px] flex-col gap-2">
            <span className="font-display text-[28px] uppercase leading-[1.05]">
              {footer.name}
            </span>
            <span>{footer.tagline}</span>
          </div>
          {footer.columns.map((col) => (
            <div
              key={col.title}
              className={
                col.title === "Contato"
                  ? "flex min-w-0 flex-[1_1_220px] flex-col gap-2"
                  : "flex flex-[1_1_140px] flex-col gap-2"
              }
            >
              <h2 className="m-0 font-mono text-[14px] font-bold text-yellow">
                {col.title}
              </h2>
              <ul className="m-0 flex list-none flex-col gap-2 p-0">
                {col.links.map((link) => (
                  <li key={link.label} className="break-words">
                    <SmartLink
                      href={link.href}
                      className="text-cream underline hover:text-yellow"
                    >
                      {link.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-cream/25 pt-6 text-[13px]">
          <span>{footer.seals}</span>
          <span>{footer.legal}</span>
        </div>
      </div>
    </footer>
  );
}
