"use client";

import React from "react";

export interface LinkProps extends React.LinkHTMLAttributes<HTMLLinkElement> {
  target?: string;
}

const LinkComponent: React.FC<LinkProps> = ({
  children,
  href,
  target,
  className,
}) => (
  <a
    className={`font-normal no-underline ${className}`}
    target={target}
    href={href}
  >
    {children}
  </a>
);

export default LinkComponent;
