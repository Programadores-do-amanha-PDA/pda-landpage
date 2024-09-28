import { Column, Layout, Row, Text } from "@/common/components";

const ImpactStatus = () => {
  const statusItem = [
    {
      data: "+400",
      label: "Jovens selecionados",
      description:
        "Selecionamos mais de 300 jovens de todo o Brasil para fazer parte das nossas turmas.",
    },
    {
      data: "+R$ 3 milhões",
      label: "Gerados em renda",
      description:
        "Geramos mais de 3 milhões de reais em renda agregada por nossos estudantes ao se empregarem na área de tecnologia.",
    },
    {
      data: "250%",
      label: "Aumento em média na renda",
      description:
        "Em média geramos um aumento de 250% da renda familiar dos nossos estudantes ao se empregarem no mercado de tecnologia.",
    },
  ];

  return (
    <Row className="justify-center p-6 md:p-10 items-center w-full overflow-x-hidden relative">
      <Layout className="w-full max-w-7xl min-h-[300px] flex-col md:flex-row gap-4 !justify-center items-center flex-wrap">
        {statusItem.map((item, i) => (
          <Column
            key={i}
            className="w-full md:w-80 h-56 p-4 bg-primary-500 dark:bg-primary-700 gap-2 rounded-xl shadow-sm"
          >
            <Text className="text-lg sm:text-xl md:text-2xl text-gray-50 dark:text-gray-50 font-dela-gothic prose-lg uppercase">
              {item.data}
            </Text>
            <Column className="gap-2">
              <Text className="text-gray-900 dark:text-gray-50 text-lg font-semibold">
                {item.label}
              </Text>
              <Text className="text-gray-900 dark:text-gray-50">{item.description}</Text>
            </Column>
          </Column>
        ))}
      </Layout>
    </Row>
  );
};

export default ImpactStatus;
