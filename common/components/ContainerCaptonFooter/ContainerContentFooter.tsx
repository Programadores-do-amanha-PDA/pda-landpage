import React from "react";
import {
  ContainerContent,
  ContentFooter,
} from "./ContainerContentFooterStyled";
import { Text } from "../Text";

interface DescriptionItem {
  content: string;
  redirect?: string;
  onclick?: () => void;
}

interface ContainerContentFooterData {
  title: string;
  description: DescriptionItem[];
}

export function ContainerContentFooter({
  description,
  title,
}: ContainerContentFooterData) {
  return (
    <ContainerContent>
      <Text className="text-gray-900 font-normal">{title}</Text>
      {description.map((item, index) => (
        <ContentFooter key={index}>
          <a
            className="font-normal no-underline"
            onClick={item.onclick}
            href={item.redirect}
          >
            {item.content}
          </a>
        </ContentFooter>
      ))}
    </ContainerContent>
  );
}
