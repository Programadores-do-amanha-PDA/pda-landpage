import { Column, Text, Row, Layout, Image } from "@common/components";

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

const WhoAlreadyDone = () => (
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

      <Column className="w-full items-start gap-8 md:flex-row">
        <Image
          src="/assets/quotation_mark.svg"
          alt=""
          width={100}
          height={100}
          className="size-14"
        />

        <Column className="w-full gap-6 justify-center items-start md:p-4">
          {studentsFeedback.map((feedback, index) => (
            <Column
              key={index}
              className="w-full max-w-xl bg-gray-50/35 dark:bg-gray-900/35 shadow-sm rounded-xl overflow-hidden p-4 gap-6 even:self-end"
            >
              <Text className="text-base font-ibm-plex-sans text-gray-900 dark:text-gray-50">
                {feedback.text}
              </Text>

              <Column className="w-full">
                <Text className="font-bold text-gray-900 dark:text-gray-50">
                  {feedback.name}
                </Text>
                <Text className="text-gray-900 dark:text-gray-50 font-semibold">
                  {feedback.description}
                </Text>
              </Column>
            </Column>
          ))}
        </Column>

        <Image
          src="/assets/quotation_mark.svg"
          alt=""
          width={100}
          height={100}
          className="size-14 self-end rotate-180"
        />
      </Column>
    </Layout>
  </Row>
);

export default WhoAlreadyDone;
