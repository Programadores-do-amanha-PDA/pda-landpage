import { Column, Layout, Row, Text } from "@common/components";

const OurValues = () => {
  const ourValues = [
    {
      label: "Impacto em primeiro lugar",
      content:
        "A Programadores do Amanhã existe para gerar renda e perspectiva de futuro para a juventude negra e indígena. Todas as nossas ações são focadas em qualificar e preparar os jovens para o mercado de trabalho de tecnologia. Pois sabemos que quando uma pessoa estudante se emprega, toda a sua estrutura familiar é impactada, contribuindo assim para o encerramento da pobreza geracional.",
    },
    {
      label: "Fazemos juntos",
      content:
        "A Programadores do Amanhã entende que os desafios são coletivos e que juntos somos mais capazes. Por isso nos apoiamos porque nos importamos com cada pessoa que compartilha a jornada conosco. Sabemos que nossos desafios são grandes, mas juntos podemos tornar a jornada individual mais leve e prazerosa.",
    },
    {
      label: "Genuinamente apaixonados",
      content:
        "Todos nós da Programadores do Amanhã somos genuinamente apaixonados pelo que fazemos porque entendemos que somos os meios para a mudança social que queremos ver para toda juventude negra e indígena no Brasil.",
    },
    {
      label: "Responsabilidade com os resultados",
      content:
        "Todos nós da  Programadores do Amanhã sempre buscamos criar novas soluções e formas de aumentar nosso impacto. Testamos e aprendemos com os resultados, nos apoiando em dados e indicadores para entender como evoluir.",
    },
  ];

  return (
    <Row className="w-full items-center justify-center py-8 bg-secondary-630/55 dark:bg-secondary-630">
      <Layout className="w-full max-w-7xl p-6 lg:p-8 relative flex-col gap-28">
        <Column className="w-full text-start gap-4">
          <Text className="text-xl sm:text-2xl font-dela-gothic uppercase">
            <Text className="text-primary-500  font-ibm-plex-sans font-black text-center">
              {"</"}
            </Text>
            Nossos valores
            <Text className="text-primary-500  font-ibm-plex-sans font-black text-center">
              {">"}
            </Text>
          </Text>
          <Text className="font-semibold">
            Conheça os nossos valores que nos guiam em nossa missão de empregar
            jovens negros e indígenas no mercado de tecnologia.
          </Text>
        </Column>

        <Row className="w-full flex-wrap gap-x-8 gap-y-16 items-center md:items-start justify-center md:justify-start">
          {ourValues.map((value, index) => (
            <Column
              key={index}
              className="gap-2 max-w-96 bg-secondary-50/75 dark:bg-secondary-700/90  p-4 rounded-xl"
            >
              <Text className="font-dela-gothic">{value.label}</Text>
              <Text className="">{value.content}</Text>
            </Column>
          ))}
        </Row>
      </Layout>
    </Row>
  );
};

export default OurValues;
