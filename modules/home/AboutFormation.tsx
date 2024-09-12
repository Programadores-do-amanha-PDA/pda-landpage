"use client";
import { Expensive } from "@/common/components/Card";
import useIsScreenSmall from "@/hooks/useIsScreenSmall";
import { Text, Column, Layout, Row } from "@common/components";

const AboutFormation = () => {
  const isSmallScreen = useIsScreenSmall();

  const formationCards = [
    {
      label: "Programação Front-End",
      expandedText:
        "Oferecemos aulas, materiais e desafios para que os estudantes possam aprender a desenvolver front-ends modernos.",
      isExpendPrevious: !isSmallScreen === false ? true : true,
      tagSection: {
        tagLabel: "Tecnologias:",
        tags: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "EcmaScript 6",
          "Node.js",
          "React.js",
        ],
      },
    },
    {
      label: "Programação Back-End",
      expandedText:
        "Oferecemos aulas,materiais e desafios para que os estudantes possam aprender a criar back-ends para aplicações reais.",
      isExpendPrevious: !isSmallScreen,
      tagSection: {
        tagLabel: "Tecnologias:",
        tags: [
          "JavaScript",
          "EcmaScript 6",
          "Node.js",
          "Express",
          "MySQL",
          "Sequelize",
        ],
      },
    },
    {
      label: "Imersão em Inglês",
      expandedText:
        "Oferecemos aulas de inglês para que você possa explorar o universo tecnológico sem limites.",
      isExpendPrevious: !isSmallScreen,
      tagSection: {
        tagLabel: "Tecnologias:",
        tags: ["HTML5"],
      },
    },
    {
      label: "Educação financeira",
      expandedText:
        "Oferecemos uma trilha de educação financeira para os estudantes aprenderem a gerenciar seu dinheiro eficientemente.",
      isExpendPrevious: !isSmallScreen,
      tagSection: {
        tagLabel: "Tecnologias:",
        tags: ["HTML5"],
      },
    },
  ];

  return (
    <Row className="w-full items-center justify-center py-8">
      <Layout className="w-full max-w-7xl p-6 lg:p-8 relative flex-col gap-20">
        <Column className="w-full text-start gap-4">
          <Text className="text-xl sm:text-2xl font-dela-gothic">
            <Text className="text-primary-500  font-ibm-plex font-black text-center">
              {"</"}
            </Text>
            Nossa Formação
            <Text className="text-primary-500  font-ibm-plex font-black text-center">
              {">"}
            </Text>
          </Text>
          <Text className="font-roboto-mono font-semibold">
            Nossa formação é gamificada e baseada em aprendizagem por meio de
            projetos, o que nos permite replicar dinâmicas de aprendizado
            colaborativo, como aprendizagem em pares (peer-to-peer) e em squads.
          </Text>
        </Column>

        <Column className="w-full gap-4 md:flex-row md:flex-wrap">
          {formationCards.map((card, i) => (
            <Expensive key={i} {...card} />
          ))}
        </Column>
      </Layout>
    </Row>
  );
};

export default AboutFormation;
