import { Column, Layout, Marker, Row, Text } from "@/common/components";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import Link from "next/link";

const TransparencyBanner = () => {
  const t = useTranslations("transparency.TransparencyBanner");

  return (
    <Row className="justify-center py-8 items-center w-full min-h-80 overflow-x-hidden bg-[url('/assets/woman_bg_subscribe.png')] bg-cover bg-bottom before:size-full before:absolute before:backdrop-blur-sm before:bg-primary-500/70 relative">
      <Row className="absolute -top-16 size-6 bg-red-400" id="transparency" />
      <Layout className="w-full max-w-7xl p-6 lg:p-8 flex-col gap-14 !justify-center items-center flex-wrap">
        <Column className="md:lg:max-w-2xl lg:max-w-3xl xl:max-w-5xl  text-secondary-900 text-center items-center max-w-2xl prose gap-10">
          <Text className="text-xl sm:text-2xl md:text-3xl md:lg:max-w-2xl lg:max-w-3xl xl:max-w-5xl font-dela-gothic uppercase">
            <Text className="text-gray-50  font-ibm-plex-sans font-black text-center">
              {"</"}
            </Text>
            {t("start")}{" "}
            <Marker className="bg-primary-100/55 px-2 rounded-lg">
            {t("highlight")}
            </Marker>{" "}
            {t("middle")}{" "}
            <Marker className="bg-primary-100/55 px-2 rounded-lg">
            {t("endHighlight")}
            </Marker>
            <Text className="text-primary-100  font-ibm-plex-sans font-black text-center">
              {">"}
            </Text>
          </Text>
        </Column>

        <Column className="w-full gap-4 sm:flex-row items-center justify-center">
          <Link
            className={`p-1 h-12 px-2 w-full relative flex items-center justify-center sm:justify-between border-2 border-primary-50 hover:bg-primary-50/55 text-gray-900 rounded-xl gap-2 font-roboto font-semibold sm:max-w-xs shadow-md`}
            href={""}
          >
            {t("button")}
            <DocumentTextIcon className="sm:block hidden size-7 rounded-2xl text-gray-900 p-1 -rotate-12 stroke-2" />
          </Link>
        </Column>
      </Layout>
    </Row>
  );
};

export default TransparencyBanner;
