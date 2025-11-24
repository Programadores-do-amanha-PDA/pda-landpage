"use client";

import { Column, Layout, Link, Row, Text } from "@common/components";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

const FinancialStatements = () => {
  const t = useTranslations("transparency.FinancialStatements");

  const financialStatementsDocuments = [
    {
      title: t("cards.0.title"),
      url: t("cards.0.url"),
    },
    {
      title: t("cards.1.title"),
      url: t("cards.1.url"),
    },
  ];

  return (
    <Layout className="w-full max-w-7xl py-8 min-h-[300px] flex-col gap-20 !justify-between items-start flex-wrap">
      <Column className="w-full text-start gap-4">
        <Text className="text-xl sm:text-2xl font-dela-gothic uppercase text-gray-900 dark:text-gray-50">
          <Text className="dark:text-gray-900 text-gray-50  font-ibm-plex-sans font-black text-center">
            {"</"}
          </Text>
          {t("title")}
          <Text className="dark:text-gray-900 text-gray-50 font-ibm-plex-sans font-black text-center">
            {">"}
          </Text>
          <Text className="dark:text-gray-900 text-gray-50 font-ibm-plex-sans font-black text-base italic text-center">
            {"  "} {t("soon")}
          </Text>
        </Text>
        <Text className="font-ibm-plex-sans-sans font-semibold text-lg text-gray-900 dark:text-gray-50">
          {t("description")}
        </Text>
      </Column>
      <Column className="gap-4 w-full">
        {financialStatementsDocuments.map((financialDocument, i) => (
          <Link
            key={i}
            className="group h-10 px-2 w-full md:w-max relative flex items-center justify-center sm:justify-between last:bg-secondary-50 last:dark:bg-secondary-400 last:hover:bg-secondary-100 last:dark:hover:bg-secondary-300 bg-transparent border-2 last:border-transparent border-secondary-50 dark:border-secondary-500 hover:bg-secondary-100/55 dark:hover:bg-secondary-300/55 text-gray-900 dark:text-gray-50 last:dark:text-gray-900 rounded-xl gap-4 font-roboto font-semibold sm:max-w-sm shadow-md"
            href={financialDocument.url}
          >
            {financialDocument.title}
            <DocumentTextIcon className="size-5 rounded-2xl text-gray-900 dark:text-gray-50 -rotate-12 group-last:dark:text-gray-900" />
          </Link>
        ))}
      </Column>
    </Layout>
  );
};

export default FinancialStatements;
