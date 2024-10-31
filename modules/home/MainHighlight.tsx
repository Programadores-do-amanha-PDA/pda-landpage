"use client";
import { Mixpanel } from "@/utils/Mixpanel";
import {
  Button,
  Row,
  Text,
  Column,
  Layout,
  Image,
  Marker,
  InternalLink,
} from "@common/components";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

const MainHighlight = () => {
  const t = useTranslations("home.MainHighlight");

  const handleSubscribe = () => {
    window.open("https://forms.gle/Sf93Zf5QmvASRFLp9");
    Mixpanel.track("Register");
  };

  return (
    <Row className="h-screen-minus-80  md:max-h-[530px] w-full justify-center">
      <Layout className="justify-center h-full items-center relative max-w-7xl p-6 lg:p-8 overflow-x-hidden">
        <Column className="w-full relative justify-between items-center h-full">
          <Text className="text-xl sm:text-2xl md:text-3xl xl:text-4xl md:lg:max-w-2xl lg:max-w-3xl xl:max-w-5xl font-dela-gothic dark:text-gray-50 text-gray-900 text-center max-w-2xl prose lg:prose-xl z-[5]">
            <Text className="text-primary-500  font-ibm-plex-sans font-black text-center">
              {"</"}
            </Text>
            {t("bannerText.start")}{" "}
            <Marker className=" dark:text-gray-50 text-gray-900 bg-primary-300/55 px-2 rounded-lg">
              {t("bannerText.highlight")}
            </Marker>{" "}
            {t("bannerText.final")}
            <Text className="text-primary-500 font-black font-ibm-plex-sans">
              {">"}
            </Text>
          </Text>

          <Column className="w-full gap-4 sm:flex-row items-center justify-center">
            <Button
              className={`p-1 h-12 px-2 w-full relative flex items-center justify-center sm:justify-between bg-primary-500 text-gray-900 rounded-xl gap-2 font-semibold sm:max-w-xs hover:shadow-md`}
              onClick={handleSubscribe}
            >
              {t("buttonSubscribe")}
              <ArrowRightIcon
                className="sm:block hidden size-7 bg-gray-50 dark:bg-secondary-900 rounded-2xl text-gray-900 dark:text-gray-50 p-1 -rotate-12"
                strokeWidth={3}
              />
            </Button>
            <InternalLink
              href="/contrate-um-talento"
              className={`p-1 h-12 px-2 w-full relative flex items-center justify-center border-2 transition-all border-secondary-500 hover:bg-secondary-500/55 text-gray-900 dark:text-gray-50 rounded-xl gap-2 font-semibold sm:max-w-52 shadow-sm`}
            >
              {t("buttonHireATalent")}
            </InternalLink>
          </Column>
        </Column>

        <Row className="w-40 sm:w-60 xl:w-70 absolute -left-16 bottom-36 md:bottom-24 md:left-0 -z-0">
          <Image
            src={"/assets/man_home.png"}
            width={400}
            height={400}
            alt={t("manImageAlt")}
            className="w-full block dark:hidden"
          />
          <Image
            src={"/assets/man_home_dark.png"}
            width={400}
            height={400}
            alt={t("manImageAlt")}
            className="w-full hidden dark:block object-contain"
          />
        </Row>

        <Row className="w-36 sm:w-56 xl:w-64 absolute -right-10 md:right-0 bottom-40 md:bottom-20 -z-0">
          <Image
            src={"/assets/woman_home.png"}
            width={400}
            height={400}
            alt={t("womanImageAlt")}
            className="w-full block dark:hidden"
          />
          <Image
            src={"/assets/woman_home_dark.png"}
            width={400}
            height={400}
            alt={t("womanImageAlt")}
            className="w-full hidden dark:block"
          />
        </Row>
      </Layout>
    </Row>
  );
};

export default MainHighlight;
