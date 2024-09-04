import { FC } from "react";

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ButtonComponent: FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      type="button"
      className={`flex flex-row ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
