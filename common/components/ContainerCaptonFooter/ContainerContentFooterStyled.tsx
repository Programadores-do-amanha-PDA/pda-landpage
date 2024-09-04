import React from "react";

export const ContainerContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ul className="flex flex-col gap-3">{children}</ul>;
};

export const ContentFooter = ({ children }: { children: React.ReactNode }) => {
  return <li className="font-normal block list-none">{children}</li>;
};
