"use client";

import { Column, Layout, Row, Text } from "@/common/components";
import { useTranslations } from "next-intl";

const ImpactStatus = () => {
  const t = useTranslations("home.ImpactStatus");

  const statusItem = [
    {
      data: t("statusItem.0.data"),
      label: t("statusItem.0.label"),
      description: t("statusItem.0.description"),
    },
    {
      data: t("statusItem.1.data"),
      label: t("statusItem.1.label"),
      description: t("statusItem.1.description"),
    },
    {
      data: t("statusItem.2.data"),
      label: t("statusItem.2.label"),
      description: t("statusItem.2.description"),
    },
  ];

  return (
    <Row className="justify-center p-6 md:p-10 items-center w-full overflow-x-hidden bg-primary-500 relative">
      <Layout className="w-full max-w-7xl min-h-[300px] flex-col md:flex-row gap-4 !justify-center items-center flex-wrap">
        {statusItem.map((item, i) => (
          <Column
            key={i}
            className="w-full md:w-80 h-56 p-4 bg-slate-50 dark:bg-secondary-900 gap-2 rounded-xl shadow-sm"
          >
            <Text className="text-lg sm:text-xl md:text-2xl text-primary-500 font-dela-gothic prose-lg uppercase">
              {item.data}
            </Text>
            <Column className="gap-2">
              <Text className="text-gray-900 dark:text-gray-50 text-lg font-semibold">
                {item.label}
              </Text>
              <Text className="text-gray-900 dark:text-gray-50">
                {item.description}
              </Text>
            </Column>
          </Column>
        ))}
      </Layout>
    </Row>
  );
};

export default ImpactStatus;
