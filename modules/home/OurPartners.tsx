"use client";

import { Column, Text, Layout, Image, Row, Link } from "@common/components";
import { useTranslations } from "next-intl";

const maintainers = [
  {
    logo: "/assets/maintainers/meliuz.png",
    name: "Melíuz",
    link: "https://www.meliuz.com.br/",
  },
  {
    logo: "/assets/maintainers/inter.png",
    name: "Inter",
    link: "https://contadigital.inter.co/",
  },
];

const partners = [
  {
    logo: "/assets/partners/dito.png",
    name: "Dito",
    link: "https://dito.com.br/",
    width: 482,
    height: 213,
  },
  {
    logo: "/assets/partners/eurofarma.png",
    name: "Instituto Eurofarma",
    link: "https://eurofarma.com.br/instituto-eurofarma/",
    width: 640,
    height: 179,
  },
  {
    logo: "/assets/partners/ifood.jpg",
    name: "Ifood",
    link: "https://www.ifood.com.br/",
    width: 644,
    height: 602,
  },
  {
    logo: "/assets/partners/instituto_syn.png",
    name: "Instituto SYN",
    link: "https://www.institutosyn.org.br/",
    width: 640,
    height: 640,
  },
  {
    logo: "/assets/partners/keeggo.png",
    name: "Keeggo",
    link: "https://keeggo.com/",
    width: 106,
    height: 52,
  },
  {
    logo: "/assets/partners/localiza.png",
    name: "Instituto Localiza",
    link: "https://www.institutolocaliza.org/",
    width: 640,
    height: 229,
  },
  {
    logo: "/assets/partners/machado_meyer.png",
    name: "Instituto Machado Meyer",
    link: "https://www.institutomachadomeyer.com.br/pt/",
    width: 640,
    height: 229,
  },
  {
    logo: "/assets/partners/onfly.png",
    name: "Onfly",
    link: "https://www.onfly.com.br/",
    width: 256,
    height: 102,
  },
];

const OurPartners = () => {
  const t = useTranslations("home.OurPartners");

  return (
    <Row className="justify-center p-6 lg:p-8 items-center w-full overflow-x-hidden bg-primary-500 dark:bg-primary-700 relative">
      <Layout className="w-full max-w-7xl py-8 flex-col gap-20 !justify-start flex-wrap">
        <Column className="w-full text-center md:text-start gap-4">
          <Text className="text-xl sm:text-2xl font-dela-gothic uppercase">
            <Text className="text-gray-50 dark:text-primary-900 font-ibm-plex-sans font-black text-center">
              {"</"}
            </Text>
            {t("title")}
            <Text className="text-gray-50 dark:text-primary-900 font-ibm-plex-sans font-black text-center">
              {">"}
            </Text>
          </Text>
          <Text className="font-ibm-plex-sans-sans font-semibold text-lg">
            {t("description")}
          </Text>
        </Column>
        <Column className="gap-16 w-full">
          <Column className="gap-8">
            <Row className="items-center px-4 justify-center md:justify-start">
              <Text className="font-dela-gothic text-xl prose text-gray-900 dark:text-gray-50">
                {t("maintainersLabel")}
              </Text>
            </Row>
            <Row className="flex-wrap w-full gap-4 justify-center md:justify-start">
              {maintainers.map((maintainer, i) => (
                <Link
                  key={i}
                  className="flex-shrink-0 size-28 sm:size-36 mx-4 bg-gray-50 rounded-xl p-1"
                  href={maintainer.link}
                >
                  <Image
                    src={maintainer.logo}
                    alt={maintainer.name}
                    width={300}
                    height={100}
                    className="object-contain w-full h-full"
                  />
                </Link>
              ))}
            </Row>
          </Column>

          <Column className="gap-8">
            <Row className="items-center px-4 justify-center md:justify-start">
              <Text className="font-dela-gothic text-xl prose text-gray-900 dark:text-gray-50">
                {t("partnersLabel")}
              </Text>
            </Row>
            <Row className="flex-wrap w-full gap-4 justify-center md:justify-start">
              {partners.map((partner, k) => (
                <Link
                  key={k}
                  className="flex-shrink-0 size-28 sm:size-36 mx-4 bg-gray-50 rounded-xl p-1"
                  href={partner.link}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className="object-contain w-full h-full "
                  />
                </Link>
              ))}
            </Row>
          </Column>
        </Column>
      </Layout>
    </Row>
  );
};

export default OurPartners;
