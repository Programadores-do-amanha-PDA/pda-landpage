import { Column, Layout, Marker, Row, Text } from "@/common/components";
import { useTranslations } from "next-intl";

const WhoWeAre = () => {
  const t = useTranslations("who-we-are.WhoWeAre");

  return (
    <Row className="justify-center py-8 items-center w-full min-h-80 overflow-x-hidden bg-[url('/assets/woman_bg_subscribe.png')] bg-cover bg-bottom before:size-full before:absolute before:backdrop-blur-sm before:bg-primary-500/70 relative">
      <Layout className="w-full max-w-7xl p-6 lg:p-8 flex-col gap-6 !justify-center items-center flex-wrap">
        <Column className="md:lg:max-w-2xl lg:max-w-3xl xl:max-w-5xl  text-secondary-900 text-center items-center max-w-2xl prose gap-10">
          <Text className="text-xl sm:text-2xl md:text-3xl md:lg:max-w-2xl lg:max-w-3xl xl:max-w-5xl font-dela-gothic uppercase">
            <Text className="text-gray-50  font-ibm-plex-sans font-black text-center">
              {"</"}
            </Text>
            {t("start")}{" "}
            <Marker className="bg-gray-50/55 px-2 rounded-lg">
              {t("highlight")}
            </Marker>{" "}
            {t("end")}
            <Text className="text-gray-50  font-ibm-plex-sans font-black text-center">
              {">"}
            </Text>
          </Text>
        </Column>
      </Layout>
    </Row>
  );
};

export default WhoWeAre;
