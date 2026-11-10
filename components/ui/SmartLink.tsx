import type { AnchorHTMLAttributes } from "react";

import { Link } from "@/i18n/routing";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/**
 * Rotas internas usam o Link do next-intl (mantém o prefixo /pt ou /en).
 * Links externos, mailto e âncoras usam <a>.
 */
export function SmartLink({ href, children, ...rest }: Props) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
