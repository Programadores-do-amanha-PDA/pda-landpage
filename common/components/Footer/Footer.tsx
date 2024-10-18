"use client";
import { Column, Row, Image, Text, Layout } from "@common/components";
import { ContainerContentFooter } from "@common/components/ContainerCaptonFooter/ContainerContentFooter";

const Footer = () => {
  return (
    <Row className="w-full items-center justify-center py-8 !pb-0 bg-slate-50 dark:bg-secondary-850">
      <Layout className="w-full max-w-7xl p-6 lg:p-8 relative flex-col gap-12">
        <Column className="w-full justify-between sm:flex-row gap-8">
          <Column className="gap-6 items-center sm:items-start">
            <Image
              className="block dark:hidden size-14 w-auto"
              width={300}
              height={100}
              src="/assets/Logo_PDA_Horizontal_FundoBranco.png"
              alt="Programadores do Amanhã"
            />
            <Image
              className="hidden dark:block size-16 w-auto"
              width={300}
              height={100}
              src="/assets/Logo_PDA_Horizontal_FundoRoxo.png"
              alt="Programadores do Amanhã"
            />
            <Column className="gap-4 items-center sm:items-start">
              <Text className="text-gray-900 dark:text-gray-50 font-dela-gothic">
                Nossos selos
              </Text>
              <Row className="gap-4">
                <Image
                  className="size-20 rounded-full shadow-sm"
                  width={100}
                  height={100}
                  src="/assets/seal/Selo_BTG-Soma_Selo_BTG-Soma_Diversidade_Positivo.png"
                  alt="Selo BTG Pactual"
                />
                <Image
                  className="size-20 bg-slate-50 rounded-full p-px shadow-sm"
                  width={100}
                  height={100}
                  src="/assets/seal/pactoglobal-1024x1024.png"
                  alt="Selo Pacto Global Rede Brasil"
                />
              </Row>
            </Column>
          </Column>

          <Row className="grid grid-cols-1 sm:grid-cols-2 gap-20">
            <ContainerContentFooter
              title="Recursos"
              description={[
                {
                  content: "Se Inscreva",
                  onclick: () => {
                    window.open("https://forms.gle/Sf93Zf5QmvASRFLp9");
                  },
                },
                {
                  content: "Contrate um Talento",
                  onclick: () => {
                    window.open(
                      "https://programadoresdoamanha.org.br/contrate-um-talento"
                    );
                  },
                },
                {
                  content: "Doe Aqui",
                  onclick: () => {
                    window.open("https://programadoresdoamanha.apoiar.co/");
                  },
                },
                {
                  content: "Seja um Voluntário",
                  onclick: () => {
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSf-MSrs-wAZJnjps0VdvA-fk7oVFwv3c2_ddaA5OZF7gtkT8Q/viewform"
                    );
                  },
                },
                {
                  content: "Trabalhe conosco",
                  onclick: () => {
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSf-MSrs-wAZJnjps0VdvA-fk7oVFwv3c2_ddaA5OZF7gtkT8Q/viewform"
                    );
                  },
                },
              ]}
            />

            <ContainerContentFooter
              title="Social"
              description={[
                {
                  content: "Instagram",
                  onclick: () => {
                    window.open(
                      "https://www.instagram.com/programadoresdoamanha/"
                    );
                  },
                },
                {
                  content: "LinkedIn",
                  onclick: () => {
                    window.open(
                      "https://www.linkedin.com/company/programadoresdoamanha/"
                    );
                  },
                },
                {
                  content: "Blog",
                  onclick: () => {
                    window.open("https://medium.com/@programadoresdoamanha");
                  },
                },
              ]}
            />
          </Row>
        </Column>

        <Column className="w-full max-w-lg items-center sm:flex-row justify-center gap-4">
          <Image
            height={60}
            width={60}
            src="/assets/ods/ods8.gif"
            alt="ODS 8 - Onu"
            className="h-full"
          />
          <Text className="text-center sm:text-start">
            A Programadores do Amanhã apoia ao ODS 8 da ONU focado em Trabalho
            Decente Crescimento Econômico
          </Text>
        </Column>

        <Row className="w-full items-center justify-center">
          <Text className="font-ibm-plex-sans text-center sm:text-start">
            Programadores do Amanhã - CNPJ 44.641.193/0001-35 - Todos os
            direitos reservados.
          </Text>
        </Row>
      </Layout>
    </Row>
  );
};

export default Footer;
