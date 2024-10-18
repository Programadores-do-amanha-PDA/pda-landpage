import {
  Column,
  InternalLink,
  Layout,
  Marker,
  Row,
  Text,
} from "@/common/components";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

const WhoWeAre = () => {
  const t = useTranslations("home.WhoWeAre");

  return (
    <Row className="justify-center py-8 items-center w-full overflow-x-hidden bg-primary-500 relative">
      <Layout className="w-full max-w-7xl flex-col  gap-6 !justify-center items-center  flex-wrap">
        <Column className="p-4 md:lg:max-w-2xl lg:max-w-3xl xl:max-w-5xl  text-secondary-900 text-center items-center max-w-2xl prose gap-10">
          <Text className="text-lg sm:text-xl md:text-2xl md:lg:max-w-2xl lg:max-w-3xl xl:max-w-5xl font-dela-gothic uppercase">
            <Text className="text-gray-50  font-ibm-plex-sans font-black text-center">
              {"</"}
            </Text>
            {t("descriptionText.start")}{" "}
            <Marker className="bg-gray-50/55 px-2 rounded-lg">
              {t("descriptionText.highlight")}
            </Marker>{" "}
            {t("descriptionText.final")}
            <Text className="text-gray-50  font-ibm-plex-sans font-black text-center">
              {">"}
            </Text>
          </Text>

          <InternalLink
            href="/quem-somos"
            className="w-max h-10 p-1 px-3 gap-3 relative flex items-center justify-center transition-all text-gray-900 font-semibold bg-gray-50/55 hover:bg-gray-50/85 rounded-xl sm:max-w-52 shadow-sm"
          >
            {t("buttonLearnMore")}
            <ArrowRightIcon className="size-4 -rotate-12 stroke-2" />
          </InternalLink>
        </Column>
      </Layout>
    </Row>
  );
};

export default WhoWeAre;
