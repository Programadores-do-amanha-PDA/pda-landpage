"use client";
import {
  Column,
  Row,
  Image,
  Text,
  Layout,
  InternalLink,
  Link,
} from "@common/components";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <Row className="w-full items-center justify-center py-8 !pb-0 bg-slate-50 dark:bg-secondary-850">
      <Layout className="w-full max-w-7xl p-6 lg:p-8 relative flex-col gap-12">
        <Column className="w-full justify-between sm:flex-row gap-14 sm:gap-8">
          <Column className="gap-6 items-center sm:items-start">
            <Image
              className="block dark:hidden size-14 w-auto"
              width={300}
              height={100}
              src="/assets/Logo_PDA_Horizontal_FundoBranco.png"
              alt="Programadores do Amanhã"
            />
            <Image
              className="hidden dark:block size-16 w-auto"
              width={300}
              height={100}
              src="/assets/Logo_PDA_Horizontal_FundoRoxo.png"
              alt="Programadores do Amanhã"
            />
            <Column className="gap-4 items-center sm:items-start">
              <Text className="text-gray-900 dark:text-gray-50 font-dela-gothic">
                {t("ourStamps")}
              </Text>
              <Row className="gap-4">
                <Image
                  className="size-20 rounded-full shadow-sm"
                  width={100}
                  height={100}
                  src="/assets/seal/Selo_BTG-Soma_Selo_BTG-Soma_Diversidade_Positivo.png"
                  alt="Selo BTG Pactual"
                />
                <Image
                  className="size-20 bg-slate-50 rounded-full p-px shadow-sm"
                  width={100}
                  height={100}
                  src="/assets/seal/pactoglobal-1024x1024.png"
                  alt="Selo Pacto Global Rede Brasil"
                />
              </Row>
            </Column>
          </Column>

          <Row className="grid grid-cols-1 sm:grid-cols-2 gap-14 sm:gap-20">
            <Column className="flex flex-col gap-4">
              <Text className="text-gray-900 dark:text-gray-50 font-dela-gothic text-center sm:text-start">
                {t("links.title")}
              </Text>
              <Column className="gap-2 items-center sm:items-start">
                <Link
                  className="font-normal no-underline cursor-pointer text-gray-900 dark:text-gray-50 hover:text-primary-800 hover:dark:text-primary-500"
                  href={"https://forms.gle/Sf93Zf5QmvASRFLp9"}
                >
                  {t("links.subscribe.title")}
                </Link>
                <Link
                  className="font-normal no-underline cursor-pointer text-gray-900 dark:text-gray-50 hover:text-primary-800 hover:dark:text-primary-500"
                  href={"https://programadoresdoamanha.apoiar.co/"}
                >
                  {t("links.donate.title")}
                </Link>
                <InternalLink
                  className="font-normal no-underline cursor-pointer text-gray-900 dark:text-gray-50 hover:text-primary-800 hover:dark:text-primary-500"
                  href={t("links.hire.href")}
                >
                  {t("links.hire.title")}
                </InternalLink>
                <Link
                  className="font-normal no-underline cursor-pointer text-gray-900 dark:text-gray-50 hover:text-primary-800 hover:dark:text-primary-500"
                  href={
                    "https://docs.google.com/forms/d/e/1FAIpQLSf-MSrs-wAZJnjps0VdvA-fk7oVFwv3c2_ddaA5OZF7gtkT8Q/viewform"
                  }
                >
                  {t("links.voluntary.title")}
                </Link>
                <Link
                  className="font-normal no-underline cursor-pointer text-gray-900 dark:text-gray-50 hover:text-primary-800 hover:dark:text-primary-500"
                  href={
                    "https://docs.google.com/forms/d/e/1FAIpQLSf-MSrs-wAZJnjps0VdvA-fk7oVFwv3c2_ddaA5OZF7gtkT8Q/viewform"
                  }
                >
                  {t("links.workUs.title")}
                </Link>
              </Column>
            </Column>

            <Column className="flex flex-col gap-4">
              <Text className="text-gray-900 dark:text-gray-50 font-dela-gothic text-center sm:text-start">
                {t("socialMedia.title")}
              </Text>
              <Column className="gap-2 items-center sm:items-start">
                <Link
                  className="font-normal no-underline cursor-pointer text-gray-900 dark:text-gray-50 hover:text-primary-800 hover:dark:text-primary-500"
                  href={"https://www.instagram.com/programadoresdoamanha/"}
                >
                  Instagram
                </Link>
                <Link
                  className="font-normal no-underline cursor-pointer text-gray-900 dark:text-gray-50 hover:text-primary-800 hover:dark:text-primary-500"
                  href={
                    "https://www.linkedin.com/company/programadoresdoamanha/"
                  }
                >
                  LinkedIn
                </Link>
                <Link
                  className="font-normal no-underline cursor-pointer text-gray-900 dark:text-gray-50 hover:text-primary-800 hover:dark:text-primary-500"
                  href={"https://medium.com/@programadoresdoamanha"}
                >
                  Blog
                </Link>
              </Column>
            </Column>
          </Row>
        </Column>

        <Column className="w-full max-w-lg items-center sm:flex-row justify-center gap-4">
          <Image
            height={60}
            width={60}
            src="/assets/ods/ods8.gif"
            alt="ODS 8 - Onu"
            className="h-full"
          />
          <Text className="text-center sm:text-start">{t("ods")}</Text>
        </Column>

        <Row className="w-full items-center justify-center">
          <Text className="font-ibm-plex-sans text-center sm:text-start">
            {t("copyright")}
          </Text>
        </Row>
      </Layout>
    </Row>
  );
};

export default Footer;
