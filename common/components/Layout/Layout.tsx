"use client";

import { Row, RowComponentProps } from "../Row";

export type LayoutProps = RowComponentProps;

const LayoutComponent: React.FC<RowComponentProps> = ({
  className,
  ...rest
}) => (
  <Row
    className={`justify-center max-w-5xl w-full relative ${className}`}
    {...rest}
  />
);

LayoutComponent.displayName = "LayoutComponent";
export default LayoutComponent;
