"use client";

import { Layout, Row, Text, Marker as Mark, Column } from "@/common/components";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

// Import the map component dynamically with no SSR
const MapComponent = dynamic(() => import("./WhereAreWeMap"), {
  ssr: false,
  loading: () => <div>Carregando Mapa...</div>,
});

const WhereAreWe = () => {
  const t = useTranslations("who-we-are.WhereAreWe");

  return (
    <Row className="justify-center py-8 items-center w-full min-h-96 overflow-x-hidden">
      <Layout className="w-full p-6 lg:p-8 flex-col gap-20 max-w-7xl">
        <Column className="w-full text-start gap-4">
          <Text className="text-xl sm:text-2xl font-dela-gothic uppercase">
            <Text className="text-primary-500  font-ibm-plex-sans font-black text-center">
              {"</"}
            </Text>
            {t("title")}
            <Text className="text-primary-500  font-ibm-plex-sans font-black text-center">
              {">"}
            </Text>
          </Text>
        </Column>

        <Row className="flex-col-reverse sm:flex-row gap-6 !justify-center items-center">
          <Row className="w-full items-center justify-center">
            <MapComponent />
          </Row>

          <Text className="text-lg lg:text-xl text-gray-900 dark:text-gray-50 w-full text-center sm:text-start">
            {t("description.start")}{" "}
            <Mark className="bg-primary-500/55 px-2 rounded-lg text-gray-900 dark:text-gray-50">
              {t("description.highlight")}
            </Mark>{" "}
            {t("description.middle")}{" "}
            <Mark className="bg-primary-500/55 px-2 rounded-lg text-gray-900 dark:text-gray-50">
              {t("description.endHighlight")}
            </Mark>{" "}
          </Text>
        </Row>
      </Layout>
    </Row>
  );
};

export default WhereAreWe;
