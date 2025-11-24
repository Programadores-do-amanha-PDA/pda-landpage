"use client";

import { Expensive } from "@/common/components/Card";
import { Text, Column, Layout, Row } from "@common/components";
import { useTranslations } from "next-intl";

const AboutFormation = () => {
  const t = useTranslations("home.AboutFormation");

  const formationCards = [
    {
      label: t("formationCards.0.label"),
      expandedText: t("formationCards.0.expandedText"),
      tagSection: {
        tagLabel: t("formationCards.0.tagLabel"),
        tags: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "EcmaScript 6",
          "Node.js",
          "React.js",
        ],
      },
    },
    {
      label: t("formationCards.1.label"),
      expandedText: t("formationCards.1.expandedText"),
      tagSection: {
        tagLabel: t("formationCards.1.tagLabel"),
        tags: [
          "JavaScript",
          "EcmaScript 6",
          "Node.js",
          "Express",
          "MySQL",
          "Sequelize",
        ],
      },
    },
    {
      label: t("formationCards.2.label"),
      expandedText: t("formationCards.2.expandedText"),
      tagSection: {
        tagLabel: t("formationCards.2.tagLabel"),
        tags: t("formationCards.2.tags").split("-"),
      },
    },
    {
      label: t("formationCards.3.label"),
      expandedText: t("formationCards.3.expandedText"),
      tagSection: {
        tagLabel: t("formationCards.3.tagLabel"),
        tags: t("formationCards.3.tags").split(" - "),
      },
    },
    {
      label: t("formationCards.4.label"),
      expandedText: t("formationCards.4.expandedText"),
      tagSection: {
        tagLabel: t("formationCards.4.tagLabel"),
        tags: [""],
      },
    },
  ];

  return (
    <Row className="w-full items-center justify-center py-8">
      <Layout className="w-full max-w-7xl p-6 lg:p-8 relative flex-col gap-20">
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
          <Text className="font-ibm-plex-sans-sans font-semibold text-lg">
            {t("description")}
          </Text>
        </Column>

        <Row className="w-full gap-4 justify-center items-center md:items-start md:justify-start flex-wrap">
          {formationCards.map((card, i) => (
            <Expensive key={i} index={i} {...card} />
          ))}
        </Row>
      </Layout>
    </Row>
  );
};

export default AboutFormation;
