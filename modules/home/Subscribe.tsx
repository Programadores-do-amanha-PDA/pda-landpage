"use client";
import { Button, Column, Row, Text, Layout } from "@/common/components";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

const Subscribe = () => {
  const handleSubscribe = () => {
    window.open("https://forms.gle/Sf93Zf5QmvASRFLp9");
  };

  return (
    <Row className="justify-center p-6 md:p-10 items-center w-full overflow-x-hidden bg-[url('/assets/woman_bg_subscribe.png')] bg-bottom bg-cover relative before:absolute before:bg-primary-500/90 before:w-full before:h-full">
      <Layout className="w-full max-w-7xl min-h-[200px] flex-col gap-10 !justify-between items-start flex-wrap">
        <Column className="gap-4">
          <Text className="text-lg sm:text-xl md:text-2xl md:lg:max-w-2xl lg:max-w-3xl xl:max-w-5xl font-dela-gothic uppercase text-gray-900">
            Inscreva-se para as nossas turmas
          </Text>
          <Text className="font-semibold prose text-gray-800">
            Para se inscrever, basta clicar no botão abaixo e preencher o nosso
            formulário de inscrição com seus dados. Nós entraremos em contato
            com você assim que abrirmos uma nova turma!
          </Text>
        </Column>

        <Button
          className="h-10 px-2 w-full md:w-max relative flex items-center justify-center sm:justify-between bg-slate-50 hover:bg-slate-100 text-gray-900 rounded-xl gap-4 font-roboto font-semibold sm:max-w-sm shadow-md"
          onClick={handleSubscribe}
        >
          Formulário de inscrição
          <DocumentTextIcon className="size-7 rounded-2xl text-gray-900 p-1 -rotate-12" />
        </Button>
      </Layout>
    </Row>
  );
};

export default Subscribe;
