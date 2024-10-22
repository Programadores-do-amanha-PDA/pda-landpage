"use client";
import { Column, Layout, Link, Text } from "@common/components";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

const ActivityReport = () => {
  const t = useTranslations("transparency.ActivityReport");

  const activityReportsDocuments = [
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
    <Layout className="w-full max-w-7xl min-h-[300px] py-8 flex-col gap-20 !justify-between items-start flex-wrap">
      <Column className="w-full text-start gap-4">
        <Text className="text-xl sm:text-2xl font-dela-gothic uppercase text-gray-900 dark:text-gray-50">
          <Text className="dark:text-gray-900 text-gray-50 font-ibm-plex-sans font-black text-center">
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
        {activityReportsDocuments.map((reportDocument, i) => (
          <Link
            key={i}
            className="group h-10 px-2 w-full md:w-max relative flex items-center justify-center sm:justify-between last:dark:bg-primary-400 last:bg-primary-50 last:dark:hover:bg-primary-300 last:hover:bg-primary-100 bg-transparent border-2 last:border-transparent border-primary-50 dark:border-primary-500 hover:bg-primary-100/55 dark:hover:bg-primary-300/55 text-gray-900 dark:text-gray-50 last:dark:text-gray-900 rounded-xl gap-4 font-roboto font-semibold sm:max-w-sm shadow-md"
            href={reportDocument.url}
          >
            {reportDocument.title}
            <DocumentTextIcon className="size-5 rounded-2xl text-gray-900 dark:text-gray-50 -rotate-12 group-last:dark:text-gray-900" />
          </Link>
        ))}
      </Column>
    </Layout>
  );
};

export default ActivityReport;
