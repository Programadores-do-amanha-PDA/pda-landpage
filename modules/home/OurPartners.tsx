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
    logo: "/assets/partners/ifood.png",
    name: "Ifood",
    link: "",
    width: 644,
    height: 602,
  },
  {
    logo: "/assets/partners/instituto_syn.webp",
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
  <Row className="justify-center p-6 lg:p-8 items-center w-full overflow-x-hidden bg-yellow-400/75 relative">
    <Layout className="w-full max-w-7xl  flex-col gap-6 !justify-start flex-wrap">
      <Column className="gap-4">
        <Row className="items-center px-4">
          <Text className="font-ibm-plex">Mantenedores</Text>
        </Row>
        <Row className="flex-wrap w-full gap-4">
          {maintainers.map((maintainer, i) => (
            <Link
              key={i}
              className="flex-shrink-0 w-20 mx-4"
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

      <hr className="w-full border-r border-gray-900/55 dark:border-gray-50/55 h-px" />
      <Column className="gap-4">
        <Row className="items-center px-4">
          <Text className="font-ibm-plex">Apoiadores</Text>
        </Row>
        <Row className="flex-wrap w-full gap-4">
          {partners.map((partner, k) => (
            <Link
              key={k}
              className="flex-shrink-0 w-20 mx-4"
              href={partner.link}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="object-contain w-full h-full"
              />
            </Link>
          ))}
        </Row>
      </Column>
    </Layout>
  </Row>
);

export default OurPartners;
