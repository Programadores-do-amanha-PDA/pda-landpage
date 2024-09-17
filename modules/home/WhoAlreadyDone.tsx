"use client";
import { Column, Text, Row, Layout, Image, Button } from "@common/components";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const studentsFeedback = [
  {
    text: "Nunca me imaginei em Programação, era uma coisa muito longe pra mim, mas o Programadores do Amanhã veio na minha vida e sou muito grata por isso. Mais do que Programação e Inglês são muitas pessoas envolvidas em nos ajudar. Esse curso é diferente e nos ajuda a crescer tanto profissionalmente como pessoalmente.",
    name: "Ingrid Paulino",
    description:
      "Aluna da primeira turma e Engenheira de software no Mercado Livre",
  },
  {
    text: "Nunca me imaginei em Programação, era uma coisa muito longe pra mim, mas o Programadores do Amanhã veio na minha vida e sou muito grata por isso. Mais do que Programação e Inglês são muitas pessoas envolvidas em nos ajudar. Esse curso é diferente e nos ajuda a crescer tanto profissionalmente como pessoalmente.",
    name: "Ingrid Paulino",
    description:
      "Aluna da primeira turma e Engenheira de software no Mercado Livre",
  },
  {
    text: "Nunca me imaginei em Programação, era uma coisa muito longe pra mim, mas o Programadores do Amanhã veio na minha vida e sou muito grata por isso. Mais do que Programação e Inglês são muitas pessoas envolvidas em nos ajudar. Esse curso é diferente e nos ajuda a crescer tanto profissionalmente como pessoalmente.",
    name: "Ingrid Paulino",
    description:
      "Aluna da primeira turma e Engenheira de software no Mercado Livre",
  },
];

const WhoAlreadyDone = () => {
  const [feedbackGroupIndex, setFeedbackGroupIndex] = useState<number>(0);

  const makeGroups = () => {
    let groups = [];
    for (var i = 0; i < studentsFeedback.length; i += 2) {
      groups.push(studentsFeedback.slice(i, i + 2));
    }
    return groups;
  };

  const newsGroups = makeGroups();

  return (
    <Row className="w-full items-center justify-center py-8 bg-secondary-630/55 dark:bg-secondary-630">
      <Layout className="w-full max-w-7xl p-6 lg:p-8 relative flex-col gap-20">
        <Column className="w-full text-start gap-4">
          <Text className="text-xl sm:text-2xl font-dela-gothic uppercase">
            <Text className="text-primary-500  font-ibm-plex-sans font-black text-center">
              {"</"}
            </Text>
            Quem já fez
            <Text className="text-primary-500  font-ibm-plex-sans font-black text-center">
              {">"}
            </Text>
          </Text>
          <Text className="font-ibm-plex-sans-sans font-semibold text-lg">
            Conheçam alguns dos ex-estudantes que já passaram pela Programadores
            do Amanhã e o que eles tem a dizer sobre nós. Eles estão fazendo
            incríveis coisas no mundo da tecnologia!
          </Text>
        </Column>

        <Column className="w-full items-start gap-8">
          <Column className="w-full gap-8 justify-center items-center md:items-start md:justify-start md:p-4">
            <Column className="gap-6 md:flex-row flex-wrap justify-center md:justify-start items-center md:items-start">
              {newsGroups[feedbackGroupIndex].map((feedback, index) => (
                <Column
                  key={index}
                  className="w-full md:w-5/12 xl:w-full max-w-xl bg-gray-50/35 dark:bg-gray-900/35 shadow-sm rounded-xl overflow-hidden p-4 gap-6"
                >
                  <Text className="text-base font-ibm-plex-sans text-gray-900 dark:text-gray-50">
                    {feedback.text}
                  </Text>

                  <Column className="w-full">
                    <Text className="font-bold font-ibm-plex-sans text-gray-900 dark:text-gray-50">
                      {feedback.name}
                    </Text>
                    <Text className="text-gray-900 dark:text-gray-50 font-semibold">
                      {feedback.description}
                    </Text>
                  </Column>
                </Column>
              ))}
            </Column>

            <Row className="w-full h-10 gap-4 items-center justify-center lg:justify-start">
              <Button
                className="size-10 bg-gray-50/35 dark:bg-gray-900/35 rounded-lg items-center justify-center"
                onClick={() =>
                  setFeedbackGroupIndex(
                    feedbackGroupIndex > 0
                      ? feedbackGroupIndex - 1
                      : feedbackGroupIndex
                  )
                }
              >
                <ChevronLeftIcon
                  className="text-gray-900 dark:text-gray-50 size-8 stroke-2"
                  strokeWidth={1}
                />
              </Button>
              <Row className="w-28 items-center gap-4 justify-center">
                {newsGroups.map((_, i) =>
                  i === feedbackGroupIndex ? (
                    <SunIcon
                      key={i}
                      className="size-8 text-secondary-500"
                      strokeWidth={2}
                    />
                  ) : (
                    <SunIcon
                      key={i}
                      className="size-6 text-gray-50/35 dark:text-gray-900/35 "
                      strokeWidth={2}
                    />
                  )
                )}
              </Row>
              <Button
                className="size-10 bg-gray-50/35 dark:bg-gray-900/35 rounded-lg items-center justify-center"
                onClick={() =>
                  setFeedbackGroupIndex(
                    feedbackGroupIndex !== newsGroups.length - 1
                      ? feedbackGroupIndex + 1
                      : feedbackGroupIndex
                  )
                }
              >
                <ChevronRightIcon
                  className="text-gray-900 dark:text-gray-50 size-8 stroke-2"
                  strokeWidth={1}
                />
              </Button>
            </Row>
          </Column>
        </Column>
      </Layout>
    </Row>
  );
};

export default WhoAlreadyDone;
