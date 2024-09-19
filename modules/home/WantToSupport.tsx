"use client";
import {
  Layout,
  Text,
  Row,
  Button,
  Link,
  Column,
  InternalLink,
} from "@common/components";
import {
  ArrowRightIcon,
  DocumentTextIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import { useModal } from "@common/context/modal-context";

const WantToSupport = () => {
  const { setIsOpen } = useModal();

  const handleOpenForms = () => {
    setIsOpen(true);
  };

  return (
    <Row className="justify-center py-8 items-center w-full overflow-x-hidden relative">
      <Layout className="w-full max-w-7xl p-6 md:p-8 flex-col gap-14 !justify-center items-center flex-wrap">
        <Column className="w-full text-start gap-4">
          <Text className="text-xl sm:text-2xl font-dela-gothic uppercase">
            <Text className="text-primary-500  font-ibm-plex-sans font-black text-center">
              {"</"}
            </Text>
            Nos Apoie
            <Text className="text-primary-500  font-ibm-plex-sans font-black text-center">
              {">"}
            </Text>
          </Text>
          <Text className="font-ibm-plex-sans-sans font-semibold text-lg">
            Nos apoie a multiplicar as oportunidades para jovens negros e
            indígenas de todo o Brasil!
          </Text>
        </Column>

        <Column className="w-full lg:flex-row rounded-xl overflow-hidden">
          <Column className="w-full lg:w-1/2 bg-primary-500 p-4 py-6 md:py-10 gap-10 justify-between">
            <Column className="gap-2">
              <Text className="font-dela-gothic uppercase text-gray-900">
                APOIE COMO PESSOA FÍSICA
              </Text>
              <Text className="font-ibm-plex-sans text-gray-900">
                Nos ajude através de doações ou sendo mentor de um dos nossos
                estudantes para que possamos juntos continuar a impactar as
                vidas de jovens negros e indígenas!
              </Text>
            </Column>

            <Column className="gap-6 sm:flex-row">
              <Link
                className="w-full md:w-max h-10 p-1 px-3 gap-4 relative flex items-center justify-center transition-all font-semibold text-gray-900 bg-gray-50/55 hover:bg-gray-50/80 dark:bg-primary-700/55 dark:hover:bg-primary-700/80 rounded-xl sm:max-w-52 shadow-md"
                href="https://programadoresdoamanha.apoiar.co/"
              >
                Doe Aqui
                <ArrowRightIcon className="size-5 text-gray-900 stroke-2 -rotate-12" />
              </Link>

              <Link
                className="w-full md:w-max h-10 p-1 px-3 gap-4 relative flex items-center justify-center transition-all font-semibold text-gray-900 border-2 border-gray-50/55 hover:bg-gray-50/80 dark:border-primary-700/50 dark:hover:bg-primary-700/50 rounded-xl hover:shadow-md"
                href="https://forms.gle/pFCB42A7FJ7L31Fd8"
              >
                Quero Ser Mentor/a
                <DocumentTextIcon className="size-5 text-gray-900  -rotate-12" />
              </Link>
            </Column>
          </Column>

          <Column className="w-full lg:w-1/2 bg-secondary-630 p-4 py-6 md:py-10 gap-10 justify-between">
            <Column className="gap-2">
              <Text className="font-dela-gothic uppercase text-gray-50">
                APOIE COMO EMPRESA OU INSTITUIÇÃO
              </Text>
              <Text className="font-ibm-plex-sans text-gray-50">
                Nos apoie a continuar a impactar as vidas de jovens negros e
                indígenas ou contrate um dos nossos talentos e mude uma vida!
              </Text>
            </Column>

            <Column className="gap-6 sm:flex-row">
              <Button
                className="w-full md:w-max h-10 p-1 px-3 gap-4 relative flex items-center justify-center transition-all font-semibold text-gray-50 bg-gray-50/55 hover:bg-gray-50/80 dark:bg-secondary-800/55 dark:hover:bg-secondary-800/80 rounded-xl sm:max-w-52 shadow-md"
                onClick={handleOpenForms}
              >
                Quero Apoiar
                <ArrowRightIcon className="size-5 text-gray-50 stroke-2 -rotate-12" />
              </Button>

              <InternalLink
                className="w-full md:w-max h-10 p-1 px-3 gap-4 relative flex items-center justify-center transition-all font-semibold text-gray-50 border-2 border-gray-50/50 hover:bg-gray-50/50 dark:border-secondary-800/50 dark:hover:bg-secondary-800/50 rounded-xl hover:shadow-md"
                href="/contrate-um-talento"
              >
                Contrate um Talento
                <TrophyIcon className="size-5 text-gray-50 -rotate-12" />
              </InternalLink>
            </Column>
          </Column>
        </Column>
      </Layout>
    </Row>
  );
};

export default WantToSupport;
