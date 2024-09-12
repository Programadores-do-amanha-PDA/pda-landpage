import { Layout, Row, Text } from "@/common/components";

const WhoWeAre = () => (
  <Row className="justify-center py-8  items-center w-full overflow-x-hidden bg-yellow-400/75 relative">
    <Layout className="w-full max-w-7xl flex-col gap-6 p-6 lg:p-8 !justify-center items-center  flex-wrap">
      <Text className="text-lg md:text-xl p-4 md:lg:max-w-2xl lg:max-w-3xl xl:max-w-5xl font-roboto text-gray-900 text-center max-w-2xl prose bg-gray-50/55 backdrop-blur-lg rounded-xl">
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
