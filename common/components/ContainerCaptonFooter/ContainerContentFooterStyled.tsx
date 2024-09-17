import React from "react";

export const ContainerContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <ul className={`flex flex-col gap-4 ${className}`}>{children}</ul>;
};

export const ContentFooter = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <li className={`font-normal block list-none ${className}`}>{children}</li>
  );
};
