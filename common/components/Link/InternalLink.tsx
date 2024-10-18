import { Link } from "@/i18n/routing";
import React, { PropsWithChildren } from "react";

interface LinkProps extends PropsWithChildren {
  target?: string;
  href: string;
  className: string;
}

const InternalLink: React.FC<LinkProps> = ({
  children,
  href,
  target,
  className,
}) => (
  <Link
    className={`font-normal no-underline ${className}`}
    target={target}
    href={href}
  >
    {children}
  </Link>
);

export default InternalLink;
