import { Layout, Row, Text } from "@/common/components";

const WhoWeAre = () => (
  <Row className="justify-center p-6 lg:p-8 items-center w-full overflow-x-hidden bg-yellow-400/75 relative">
    <Layout className="w-full max-w-7xl flex-col gap-6 !justify-center items-center  flex-wrap">
      <Text className="text-base sm:text-lg md:text-xl xl:text-2xl md:lg:max-w-2xl lg:max-w-3xl xl:max-w-5xl font-ibm-plex dark:text-gray-50 text-gray-900 text-center max-w-2xl prose lg:prose-xl">
        O Instituto Programadores do Amanhã nasceu em 2021 com{" "}
        <Text>
          o objetivo de formar e empregar jovens pretos, pardos e indígenas no
          mercado de tecnologia.
        </Text>{" "}
        Em parceria com algumas das maiores empresas de tecnologia do Brasil e
        Institutos filantrópicos, o Programadores do Amanhã apoiou no processo
        de <Text>conquista da primeira vaga de emprego</Text> de jovens de todas
        as regiões do Brasil, gerando mais de{" "}
        <Text>2 milhões de reais em renda agregada.</Text>
      </Text>
    </Layout>
  </Row>
);

export default WhoWeAre;
