import { Column, Text, Layout, Image, Row, Link } from "@common/components";

const maintainers = [
  { logo: "/assets/maintainers/meliuz.png", name: "Melíuz", link: "" },
  { logo: "/assets/maintainers/inter.png", name: "Inter", link: "" },
];

const partners = [
  {
    logo: "/assets/partners/dito.png",
    name: "Dito",
    link: "",
    width: 482,
    height: 213,
  },
  {
    logo: "/assets/partners/eurofarma.png",
    name: "Instituto Eurofarma",
    link: "",
    width: 640,
    height: 179,
  },
  {
    logo: "/assets/partners/ifood.jpg",
    name: "Ifood",
    link: "",
    width: 644,
    height: 602,
  },
  {
    logo: "/assets/partners/instituto_syn.png",
    name: "Instituto SYN",
    link: "",
    width: 640,
    height: 640,
  },
  {
    logo: "/assets/partners/keeggo.png",
    name: "Keeggo",
    link: "",
    width: 106,
    height: 52,
  },
  {
    logo: "/assets/partners/localiza.png",
    name: "Instituto Localiza",
    link: "",
    width: 640,
    height: 229,
  },
  {
    logo: "/assets/partners/machado_meyer.png",
    name: "Instituto Machado Meyer",
    link: "",
    width: 640,
    height: 229,
  },
  {
    logo: "/assets/partners/onfly.png",
    name: "Onfly",
    link: "",
    width: 256,
    height: 102,
  },
];

const OurPartners = () => (
  <Row className="justify-center p-6 lg:p-8 items-center w-full overflow-x-hidden bg-gray-50 dark:bg-secondary-900 relative">
    <Layout className="w-full max-w-7xl  flex-col gap-20 !justify-start flex-wrap">
      <Column className="w-full text-start gap-4">
        <Text className="text-xl sm:text-2xl font-dela-gothic">
          <Text className="text-primary-500  font-ibm-plex-sans font-black text-center">
            {"</"}
          </Text>
          Apoiadores e Patrocinadores
          <Text className="text-primary-500  font-ibm-plex-sans font-black text-center">
            {">"}
          </Text>
        </Text>
        <Text className="font-ibm-plex-sans-sans font-semibold text-lg">
          Conheçam as empresas e institutos que nos ajudam a causar impacto nas
          vidas dos jovens negros e indígenas de todo o Brasil.
        </Text>
      </Column>
      <Column className="gap-10 w-full">
        <Column className="gap-4">
          <Row className="items-center px-4">
            <Text className="font-dela-gothic text-xl prose text-gray-900 dark:text-gray-50">
              Mantenedores
            </Text>
          </Row>
          <Row className="flex-wrap w-full gap-4">
            {maintainers.map((maintainer, i) => (
              <Link
                key={i}
                className="flex-shrink-0 size-36 mx-4 bg-gray-50 rounded-xl p-1"
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

        <Column className="gap-4">
          <Row className="items-center px-4">
            <Text className="font-dela-gothic text-xl prose text-gray-900 dark:text-gray-50">
              Apoiadores
            </Text>
          </Row>
          <Row className="flex-wrap w-full gap-4">
            {partners.map((partner, k) => (
              <Link
                key={k}
                className="flex-shrink-0 size-36 mx-4 bg-gray-50 rounded-xl p-1"
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

export default OurPartners;
