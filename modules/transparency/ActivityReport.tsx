"use client";
import { Button, Column, Layout, Row, Text } from "@common/components";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

const ActivityReport = () => {
  const handleSubscribe = () => {
    window.open("");
  };

  return (
    <Row className="justify-center p-6 md:p-10 items-center overflow-x-hidden bg-primary-500/90 w-full h-full">
      <Layout className="w-full max-w-7xl min-h-[200px] flex-col gap-10 !justify-between items-start flex-wrap">
        <Column className="w-full text-start gap-4">
          <Text className="text-xl sm:text-2xl font-dela-gothic uppercase text-gray-900">
            <Text className="text-gray-50  font-ibm-plex-sans font-black text-center">
              {"</"}
            </Text>
            Relatório de atividade
            <Text className="text-gray-50  font-ibm-plex-sans font-black text-center">
              {">"}
            </Text>
          </Text>
          <Text className="font-ibm-plex-sans-sans font-semibold text-lg text-gray-900">
            Apresentamos nossos relatórios de atividades, onde você pode
            acompanhar de perto o impacto do seu apoio e do trabalho que
            realizamos.
          </Text>
        </Column>

        <Button
          className="h-10 px-2 w-full md:w-max relative flex items-center justify-center sm:justify-between bg-slate-50 hover:bg-slate-100 text-gray-900 rounded-xl gap-4 font-roboto font-semibold sm:max-w-sm shadow-md"
          onClick={handleSubscribe}
        >
          Relatório de atividades de 2024
          <DocumentTextIcon className="size-7 rounded-2xl text-gray-900 p-1 -rotate-12" />
        </Button>
      </Layout>
    </Row>
  );
};

export default ActivityReport;
