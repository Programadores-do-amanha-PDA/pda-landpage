import { cx } from "@/components/ui/cx";
import { formsPendente } from "@/content/empresas";

/** Aviso visível enquanto o Google Forms de empresas não existe (some quando o link entrar). */
export function PendingNote({ className }: { className?: string }) {
  if (!formsPendente) return null;
  return (
    <p className={cx("m-0 font-mono text-[13px] font-bold", className)}>
      {formsPendente}
    </p>
  );
}
