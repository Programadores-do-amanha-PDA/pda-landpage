"use client";
import {
  Button,
  Row,
  Text,
  Column,
  Layout,
  Image,
  Marker,
} from "@common/components";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";

const MainHighlight = () => {
  const handleSubscribe = () => {
    window.open("https://forms.gle/Sf93Zf5QmvASRFLp9");
  };
  return (
    <>
      <Row className="h-screen-minus-80  md:max-h-[530px] w-full justify-center">
        <Layout className="justify-center h-full items-center relative max-w-7xl p-6 lg:p-8 overflow-x-hidden">
          <Column className="w-full relative justify-between items-center h-full">
            <Text className="text-xl sm:text-2xl md:text-3xl xl:text-4xl md:lg:max-w-2xl lg:max-w-3xl xl:max-w-5xl font-dela-gothic dark:text-gray-50 text-gray-900 text-center max-w-2xl prose lg:prose-xl">
              <Text className="text-yellow-400  font-ibm-plex font-black text-center">
                {"</"}
              </Text>
              MULTIPLICAMOS OPORTUNIDADES PARA A JUVENTUDE{" "}
              <Marker className="bg-transparent dark:text-gray-50 text-gray-900 underline decoration-wavy decoration-yellow-400">
                NEGRA E INDÍGENA
              </Marker>{" "}
              NO MERCADO DA TECNOLOGIA
              <Text className="text-yellow-400 font-black font-ibm-plex">
                {">"}
              </Text>
            </Text>

            <Column className="w-full gap-4 sm:flex-row items-center justify-center">
              <Button
                className={`p-1 h-12 px-2 w-full relative flex items-center justify-center sm:justify-between bg-yellow-400 text-gray-900 rounded-3xl gap-2 font-roboto font-semibold sm:max-w-xs`}
                onClick={handleSubscribe}
              >
                Inscreva-se para a próxima turma
                <ArrowRightIcon
                  className="sm:block hidden size-7 bg-gray-50 dark:bg-gray-900 rounded-2xl text-gray-900 dark:text-gray-50 p-1 -rotate-12"
                  strokeWidth={3}
                />
              </Button>
              <Button
                className={`p-1 h-12 px-2 w-full relative flex items-center justify-center sm:justify-between  bg-yellow-900/55 hover:bg-yellow-900/75 dark:bg-yellow-50/55 dark:hover:bg-yellow-100/55 text-gray-900 dark:text-gray-50 rounded-3xl gap-2 font-roboto font-semibold sm:max-w-52`}
                onClick={handleSubscribe}
              >
                Doe Aqui!
                <HeartIcon
                  className="sm:block hidden size-7 rounded-2xl text-gray-900 dark:text-gray-50 p-1 "
                  strokeWidth={3}
                />
              </Button>
            </Column>
          </Column>

          <Row className="w-44 sm:w-64 xl:w-72 absolute -left-16 bottom-36 md:bottom-24 md:left-0">
            <Image
              src={"/assets/man_home.png"}
              width={400}
              height={400}
              alt=""
              className="w-full block dark:hidden"
            />
            <Image
              src={"/assets/man_home_dark.png"}
              width={400}
              height={400}
              alt=""
              className="w-full hidden dark:block object-contain"
            />
          </Row>

          <Row className="w-40 sm:w-60 xl:w-64 absolute -right-10 md:right-0 bottom-40 md:bottom-20">
            <Image
              src={"/assets/woman_home.png"}
              width={400}
              height={400}
              alt=""
              className="w-full block dark:hidden"
            />
            <Image
              src={"/assets/woman_home_dark.png"}
              width={400}
              height={400}
              alt=""
              className="w-full hidden dark:block"
            />
          </Row>
        </Layout>
      </Row>
    </>
  );
};

export default MainHighlight;
