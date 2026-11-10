/** Tag de seção no formato </NOME DA SEÇÃO>, em mono amarelo. */
export function SectionTag({ children }: { children: string }) {
  return (
    <p className="m-0 font-mono text-[16px] font-bold tracking-[0.08em] text-yellow sm:text-[18px]">
      {children}
    </p>
  );
}
