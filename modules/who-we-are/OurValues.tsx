import { Column, Layout, Row, Text } from "@common/components";
import { useTranslations } from "next-intl";

const OurValues = () => {
  const t = useTranslations("who-we-are.OurValues");

  const ourValues = [
    {
      label: t("cards.0.label"),
      content: t("cards.0.content"),
    },
    {
      label: t("cards.1.label"),
      content: t("cards.1.content"),
    },
    {
      label: t("cards.2.label"),
      content: t("cards.2.content"),
    },
    {
      label: t("cards.3.label"),
      content: t("cards.3.content"),
    },
  ];

  return (
    <Row className="w-full items-center justify-center py-8 bg-secondary-630/55 dark:bg-secondary-630">
      <Layout className="w-full max-w-7xl p-6 lg:p-8 relative flex-col gap-28">
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
          <Text className="font-semibold">{t("description")}</Text>
        </Column>

        <Row className="w-full flex-wrap gap-x-8 gap-y-16 items-center md:items-start justify-center md:justify-start">
          {ourValues.map((value, index) => (
            <Column
              key={index}
              className="gap-2 max-w-96 bg-secondary-50/75 dark:bg-secondary-700/90  p-4 rounded-xl"
            >
              <Text className="font-dela-gothic">{value.label}</Text>
              <Text className="">{value.content}</Text>
            </Column>
          ))}
        </Row>
      </Layout>
    </Row>
  );
};

export default OurValues;
