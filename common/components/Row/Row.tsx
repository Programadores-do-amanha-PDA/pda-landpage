import { FC, PropsWithChildren } from "react";

export interface RowComponentProps
  extends PropsWithChildren<{}>,
    React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  ref?: React.RefObject<HTMLDivElement>;
}

const RowComponent: FC<RowComponentProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={`flex flex-row ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default RowComponent;
