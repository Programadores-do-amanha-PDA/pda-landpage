import { FC, PropsWithChildren } from "react";

interface ColumnComponentProps
  extends PropsWithChildren<{}>,
    React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: () => void;
}

const ColumnComponent: FC<ColumnComponentProps> = ({
  children,
  id,
  className,
  onClick,
}) => {
  return (
    <div className={`flex flex-col ${className}`} id={id} onClick={onClick}>
      {children}
    </div>
  );
};

export default ColumnComponent;
