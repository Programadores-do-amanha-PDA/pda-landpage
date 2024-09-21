"use client";
import { Button, Column, Layout, Link, Row, Text } from "@common/components";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

const activityReportsDocuments = [
  {
    title: "Relatório de atividades de 2023",
    url: "",
  },
  {
    title: "Relatório de atividades de 2024",
    url: "",
  },
];

const ActivityReport = () => {
  return (
    <Row className="justify-center p-6 md:p-10 items-center overflow-x-hidden w-full h-full bg-primary-500 dark:bg-primary-700">
      <Layout className="w-full max-w-7xl min-h-[300px] flex-col gap-20 !justify-between items-start flex-wrap">
        <Column className="w-full text-start gap-4">
          <Text className="text-xl sm:text-2xl font-dela-gothic uppercase text-gray-900 dark:text-gray-50">
            <Text className="dark:text-gray-900 text-gray-50 font-ibm-plex-sans font-black text-center">
              {"</"}
            </Text>
            Relatórios de atividades
            <Text className="dark:text-gray-900 text-gray-50 font-ibm-plex-sans font-black text-center">
              {">"}
            </Text>
          </Text>
          <Text className="font-ibm-plex-sans-sans font-semibold text-lg text-gray-900 dark:text-gray-50">
            Apresentamos nossos relatórios de atividades, onde você pode
            acompanhar de perto o impacto do seu apoio e do trabalho que
            realizamos.
          </Text>
        </Column>
        <Column className="gap-4 w-full">
          {activityReportsDocuments.map((reportDocument, i) => (
            <Link
              key={i}
              className="group h-10 px-2 w-full md:w-max relative flex items-center justify-center sm:justify-between last:dark:bg-primary-400 last:bg-primary-50 last:dark:hover:bg-primary-300 last:hover:bg-primary-100 bg-transparent border-2 last:border-transparent border-primary-50 dark:border-primary-500 hover:bg-primary-100/55 dark:hover:bg-primary-300/55 text-gray-900 dark:text-gray-50 last:dark:text-gray-900 rounded-xl gap-4 font-roboto font-semibold sm:max-w-sm shadow-md"
              href={reportDocument.url}
            >
              {reportDocument.title}
              <DocumentTextIcon className="size-5 rounded-2xl text-gray-900 dark:text-gray-50 -rotate-12 group-last:dark:text-gray-900" />
            </Link>
          ))}
        </Column>
      </Layout>
    </Row>
  );
};

export default ActivityReport;
