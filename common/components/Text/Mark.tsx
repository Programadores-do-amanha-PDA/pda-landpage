import { FC, ReactNode } from "react";

interface TextProps {
  children?: ReactNode;
  className?: string;
}

const MarkComponent: FC<TextProps> = ({ children, className }) => {
  return <mark className={` ${className}`}>{children}</mark>;
};

export default MarkComponent;
