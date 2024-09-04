import { FC, PropsWithChildren } from "react";

export interface RowComponentProps extends PropsWithChildren<{}> {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const RowComponent: FC<RowComponentProps> = ({ children, className }) => {
  return <div className={`flex flex-row ${className}`}>{children}</div>;
};

export default RowComponent;
