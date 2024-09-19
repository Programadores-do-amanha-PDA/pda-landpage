import React from "react";
import {
  ContainerContent,
  ContentFooter,
} from "./ContainerContentFooterStyled";
import { Text } from "../Text";
import { Column } from "../Column";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

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
    <ContainerContent className="items-center sm:items-start">
      <Text className="text-gray-900 dark:text-gray-50 font-dela-gothic">
        {title}
      </Text>
      <Column className="gap-2 items-center sm:items-start">
        {description.map((item, index) => (
          <ContentFooter key={index}>
            <a
              className="font-normal no-underline cursor-pointer text-gray-900 dark:text-gray-50 hover:text-primary-800 hover:dark:text-primary-500"
              onClick={item.onclick}
              href={item.redirect}
            >
              {item.content}
            </a>
          </ContentFooter>
        ))}
      </Column>
    </ContainerContent>
  );
}
