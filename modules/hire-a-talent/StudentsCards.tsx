import { Column, Image, Layout, Link, Row, Text } from "@/common/components";
import { ArrowRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const StudentsCards = () => {
  return (
    <Row className="justify-center p-6 md:p-10 items-center w-full overflow-x-hidden relative">
      <Layout className="w-full max-w-7xl h-screen-minus-80 flex-col md:flex-row gap-4 flex-wrap !items-start !justify-start">
        <Column className="max-w-96 h-max dark:bg-gray-50/30 p-2 rounded-2xl gap-8">
          <Row className="w-full gap-4">
            <Image
              className="rounded-xl w-28 object-cover"
              src={"/assets/team/Karlla_Souzza.jpg"}
              width={300}
              height={300}
              alt=""
            />
            <Column className="gap-4">
              <Text className="font-bold text-lg">Karlla Souzza</Text>
              <Column className="gap-3">
                <Text className="text-sm font-roboto font-semibold text-gray-900 dark:text-gray-50">
                  Tecnologias:
                </Text>
                <Row className="flex-wrap gap-2">
                  <Text className="w-max h-max px-2 rounded-full border border-gray-900/55 dark:border-gray-50/55 font-roboto-mono text-sm text-gray-900 dark:text-gray-50">
                    HTML
                  </Text>{" "}
                  <Text className="w-max h-max px-2 rounded-full border border-gray-900/55 dark:border-gray-50/55 font-roboto-mono text-sm text-gray-900 dark:text-gray-50">
                    CSS
                  </Text>{" "}
                  <Text className="w-max h-max px-2 rounded-full border border-gray-900/55 dark:border-gray-50/55 font-roboto-mono text-sm text-gray-900 dark:text-gray-50">
                    JavaScript
                  </Text>{" "}
                  <Text className="w-max h-max px-2 rounded-full border border-gray-900/55 dark:border-gray-50/55 font-roboto-mono text-sm text-gray-900 dark:text-gray-50">
                    React.js
                  </Text>{" "}
                  <Text className="w-max h-max px-2 rounded-full border border-gray-900/55 dark:border-gray-50/55 font-roboto-mono text-sm text-gray-900 dark:text-gray-50">
                    Node.js
                  </Text>{" "}
                  <Text className="w-max h-max px-2 rounded-full border border-gray-900/55 dark:border-gray-50/55 font-roboto-mono text-sm text-gray-900 dark:text-gray-50">
                    Express
                  </Text>{" "}
                </Row>
              </Column>
            </Column>
          </Row>

          {/* <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum
          </Text> */}

          <Column className="gap-4 md:flex-row">
            <Row className="gap-2 w-full justify-between">
              <Link className="font-semibold text-gray-900 dark:text-gray-50 flex flex-row flex-nowrap gap-4 items-center justify-center bg-primary-500/55 w-full p-1 px-2 rounded-xl hover:bg-primary-500/75">
                <Text className="">LinkedIn</Text>
                <ArrowRightIcon className="size-4 -rotate-12" />
              </Link>
              <Link className="font-semibold text-gray-900 dark:text-gray-50 flex flex-row flex-nowrap gap-4 items-center justify-center w-full p-1 px-2 rounded-xl hover:bg-gray-50/35">
                <Text className="">Github</Text>
                <ArrowRightIcon className="size-4 -rotate-12" />
              </Link>
            </Row>
          </Column>
        </Column>
      </Layout>
    </Row>
  );
};

export default StudentsCards;
