import {
  Button,
  Column,
  InternalLink,
  Layout,
  Marker,
  Row,
  Text,
} from "@/common/components";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const WhoWeAre = () => (
  <Row className="justify-center py-8   items-center w-full overflow-x-hidden bg-primary-500 relative">
    <Layout className="w-full max-w-7xl flex-col  gap-6 !justify-center items-center  flex-wrap">
      <Column className="p-4 md:lg:max-w-2xl lg:max-w-3xl xl:max-w-5xl font-dela-gothic text-secondary-900 text-center items-center max-w-2xl prose gap-10">
        <Text className="text-lg sm:text-xl md:text-2xl xl:text-3xl md:lg:max-w-2xl lg:max-w-3xl xl:max-w-5xl">
          <Text className="text-gray-50  font-ibm-plex font-black text-center">
            {"</"}
          </Text>
          O Instituto Programadores do Amanhã nasceu em 2021 com o{" "}
          <Marker className="bg-gray-50/55 px-2 rounded-lg">
            objetivo de formar e empregar jovens pretos, pardos e indígenas
          </Marker>{" "}
          no mercado de tecnologia.
          <Text className="text-gray-50  font-ibm-plex font-black text-center">
            {">"}
          </Text>
        </Text>

        {/* <Text className="text-lg md:text-xl">
          Em parceria com algumas das maiores empresas de tecnologia do Brasil e
          Institutos filantrópicos, o Programadores do Amanhã apoiou no processo
          de conquista da primeira vaga de emprego de jovens de todas as regiões
          do Brasil, gerando mais de 2 milhões de reais em renda agregada.
        </Text> */}

        <InternalLink
          href="/sobre-nos"
          className="w-max h-10 p-1 px-3 gap-3 relative flex items-center justify-center transition-all text-gray-50 bg-gray-400/50 hover:bg-gray-500/50 rounded-xl text-lg font-roboto sm:max-w-52"
        >
          Ver mais
          <ArrowRightIcon className="size-4 -rotate-12" />
        </InternalLink>
      </Column>
    </Layout>
  </Row>
);

export default WhoWeAre;
