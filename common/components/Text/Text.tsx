import { FC, ReactNode } from "react";

interface TextProps {
  children?: ReactNode;
  className?: string;
}

const TextComponent: FC<TextProps> = ({ children, className }) => {
  return <span className={`font-normal ${className}`}>{children}</span>;
};

export default TextComponent;
