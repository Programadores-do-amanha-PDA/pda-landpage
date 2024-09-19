import { Column, Layout, Marker, Row, Text } from "@/common/components";

const TransparencyBanner = () => (
  <Row className="justify-center py-8 items-center w-full min-h-80 overflow-x-hidden bg-[url('/assets/woman_bg_subscribe.png')] bg-cover bg-bottom before:size-full before:absolute before:backdrop-blur-sm before:bg-primary-500/70 relative">
    <Layout className="w-full max-w-7xl p-6 lg:p-8 flex-col gap-6 !justify-center items-center flex-wrap">
      <Column className="md:lg:max-w-2xl lg:max-w-3xl xl:max-w-5xl  text-secondary-900 text-center items-center max-w-2xl prose gap-10">
        <Text className="text-xl sm:text-2xl md:text-3xl md:lg:max-w-2xl lg:max-w-3xl xl:max-w-5xl font-dela-gothic uppercase">
          <Text className="text-gray-50  font-ibm-plex-sans font-black text-center">
            {"</"}
          </Text>
          No Instituto Programadores do Amanhã, acreditamos que a{" "}
          <Marker className="bg-gray-50/55 px-2 rounded-lg">
            transparência é fundamental
          </Marker>{" "}
          para construir{" "}
          <Marker className="bg-gray-50/55 px-2 rounded-lg">
            confiança e fortalecer nossos laços com nossos apoiadores.
          </Marker>
          <Text className="text-gray-50  font-ibm-plex-sans font-black text-center">
            {">"}
          </Text>
        </Text>
      </Column>
    </Layout>
  </Row>
);

export default TransparencyBanner;
