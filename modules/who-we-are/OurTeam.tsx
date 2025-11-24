"use client";

import { Column, Image, Layout, Row, Text } from "@common/components";
import { useTranslations } from "next-intl";

const OurTeam = () => {
  const t = useTranslations("who-we-are.OurTeam");

  const teamMembers = [
    {
      name: "Cleber Guedes",
      role: "CEO",
      image: {
        url: "/assets/team/Cleber_Guedes.jpg",
        alt: "",
      },
    },
    {
      name: "Leticia Santana",
      role: "Gerente de Programas",
      image: {
        url: "/assets/team/Leticia_Silveira.png",
        alt: "",
      },
    },
    {
      name: "Beatriz Meigger",
      role: "Líder de seleção & Empregabilidade",
      image: {
        url: "/assets/team/Beatriz_Meigger.jpg",
        alt: "",
      },
    },
    {
      name: "Karlla Souzza",
      role: "Desenvolvedora FullStack",
      image: {
        url: "/assets/team/Karlla_Souzza.jpg",
        alt: "",
      },
    },
    {
      name: "Bruna Moreira",
      role: "Analista de Aprendizagem",
      image: {
        url: "/assets/team/Bruna_Moreira.jpg",
        alt: "",
      },
    },
    {
      name: "Thauana Miranda",
      role: "Analista de Jornada",
      image: {
        url: "/assets/team/Thauana_Miranda.png",
        alt: "",
      },
    },
    {
      name: "Lúnia Martins",
      role: "Analista de Jornada",
      image: {
        url: "/assets/team/maria-raquel.jpg",
        alt: "",
      },
    },
    {
      name: "Maria Raquel",
      role: "Estagiária de People Analytics",
      image: {
        url: "/assets/team/maria-raquel.jpg",
        alt: "",
      },
    },
    {
      name: "Daniel Mendes",
      role: "Facilitador de Programação",
      image: {
        url: "/assets/team/Daniel.jpg",
        alt: "",
      },
    },
    {
      name: "Tabata Macedo",
      role: "Facilitadora de Programação",
      image: {
        url: "/assets/team/Tabata.jpg",
        alt: "",
      },
    },
    {
      name: "Yasmin",
      role: "Facilitadora de Inglês",
      image: {
        url: "/assets/team/Yasmin_Santana.jpg",
        alt: "",
      },
    },
    {
      name: "Julio César Brito",
      role: "Facilitador de Programação",
      image: {
        url: "/assets/team/julio.jpg",
        alt: "",
      },
    },
  ].sort(
    (a, b) => a.name.localeCompare(b.name) || a.role.localeCompare(b.role)
  );

  return (
    <Row className="justify-center p-6 lg:p-8 items-center w-full overflow-x-hidden bg-gray-50 dark:bg-secondary-900 relative">
      <Layout className="w-full max-w-7xl py-8 flex-col !justify-start gap-28">
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

        <Row className="w-full justify-between sm:justify-start flex-wrap gap-y-4 gap-x-1">
          {teamMembers.map((member, index) => (
            <Column key={index} className="w-36">
              <Image
                src={member.image.url}
                alt={member.image.alt}
                width={300}
                height={300}
                className="size-36 object-cover object-center"
              />
              <Column>
                <Text className="font-bold">{member.name}</Text>
                <Text className="font-normal">{member.role}</Text>
              </Column>
            </Column>
          ))}
        </Row>
      </Layout>
    </Row>
  );
};

export default OurTeam;
