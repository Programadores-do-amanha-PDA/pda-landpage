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
      <Row className="h-screen w-full justify-center">
        <Layout className="justify-center items-center relative max-w-7xl p-2 sm:p-4 md:p-6 lg:p-8 overflow-x-hidden">
          <Column className="w-full relative justify-between items-center h-full">
            <Text className="text-xl sm:text-2xl xl:text-3xl lg:max-w-3xl font-dela-gothic dark:text-gray-50 text-gray-900 text-center max-w-2xl">
              <Text className="text-yellow-400  font-ibm-plex">{"</"}</Text>
              MULTIPLICAMOS OPORTUNIDADES <br /> PARA A JUVENTUDE{" "}
              <br className="block sm:hidden" />
              <Marker className="bg-transparent dark:text-gray-50 text-gray-900 underline decoration-wavy decoration-yellow-400">
                NEGRA E INDÍGENA
              </Marker>{" "}
              <br />
              NO MERCADO DA TECNOLOGIA
              <Text className="text-yellow-400  font-ibm-plex">{">"}</Text>
            </Text>

            <Column className="w-full gap-4 sm:flex-row items-center justify-center">
              <Button
                className={`p-1 h-10 px-2 w-full relative flex items-center justify-between bg-yellow-400 text-gray-900 rounded-3xl gap-2 font-roboto font-semibold sm:max-w-xs`}
                onClick={handleSubscribe}
              >
                Inscreva-se para a próxima turma
                <ArrowRightIcon
                  className="size-7 bg-gray-50 dark:bg-gray-900 rounded-2xl text-gray-900 dark:text-gray-50 p-1 -rotate-12"
                  strokeWidth={3}
                />
              </Button>
              <Button
                className={`p-1 h-10 px-2 w-full relative flex items-center justify-between dark:bg-purple-900 bg-purple-400 text-gray-900 dark:text-gray-50 rounded-3xl gap-2 font-roboto font-semibold sm:max-w-52`}
                onClick={handleSubscribe}
              >
                Doe Aqui!
                <HeartIcon
                  className="size-7 rounded-2xl text-gray-900 dark:text-gray-50 p-1 "
                  strokeWidth={3}
                />
              </Button>
            </Column>
          </Column>

          <Row className="w-40 absolute -left-14 bottom-32 block sm:hidden">
            <Image
              src={"/assets/mobile_man_home.png"}
              width={100}
              height={100}
              alt=""
              className="w-full block dark:hidden"
            />
            <Image
              src={"/assets/mobile_man_home_dark.png"}
              width={100}
              height={100}
              alt=""
              className="w-full hidden dark:block"
            />
          </Row>

          <Row className="w-36 absolute -right-10 bottom-36 block sm:hidden">
            <Image
              src={"/assets/mobile_woman_home.png"}
              width={100}
              height={100}
              alt=""
              className="w-full block dark:hidden"
            />
            <Image
              src={"/assets/mobile_woman_home_dark.png"}
              width={100}
              height={100}
              alt=""
              className="w-full hidden dark:block"
            />
          </Row>

          <Row className="w-64 absolute -left-16 bottom-24 md:left-0 sm:block hidden">
            <Image
              src={"/assets/man_home.png"}
              width={100}
              height={100}
              alt=""
              className="w-full block dark:hidden"
            />
            <Image
              src={"/assets/man_home_dark.png"}
              width={100}
              height={100}
              alt=""
              className="w-full hidden dark:block"
            />
          </Row>

          <Row className="w-60 absolute -right-10 md:right-0 bottom-20 hidden sm:block">
            <Image
              src={"/assets/woman_home.png"}
              width={100}
              height={100}
              alt=""
              className="w-full block dark:hidden"
            />
            <Image
              src={"/assets/woman_home_dark.png"}
              width={100}
              height={100}
              alt=""
              className="w-full hidden dark:block"
            />
          </Row>
        </Layout>
      </Row>

      {/* <Layout
        bg="lightPurple"
        style={{ backgroundImage: 'url("/assets/dotted-grid.png")' }}
        height={["80vh", "60vh", "90vh"]}
        minHeight={["800px", "816px", "816px"]}
        alignItems="center"
        position="relative"
      >
        <SecondaryImage
          maxHeight={["80vh", "50vh", "100vh"]}
          position={["absolute"]}
          mx="auto"
          left={0}
          right={0}
          zIndex={1}
        >
          <Image src="/assets/Arrow.png" className="ArrowDesktop" alt="" />
          <Image
            src="/assets/Arrow-tablet.png"
            className="ArrowTablet"
            alt=""
          />
          <Image
            src="/assets/Arrow-mobile.png"
            className="ArrowMobile"
            alt=""
          />
        </SecondaryImage>
        <Column
          zIndex={3}
          flex={1}
          justifyContent="space-between"
          width="100%"
          maxWidth="1920px"
          height={["70%", "440px", "480px"]}
        >
          <Row
            bg="black"
            py="10px"
            px={10}
            alignItems="center"
            maxWidth={["100%", "600px", "800px"]}
            borderRadius="10px"
            flexWrap={["wrap", "nowrap", "nowrap"]}
            alignSelf={["center", "flex-end", "flex-end"]}
          >
            <PercentageText ml={[0, 12, 15]} mb={[10, 0, 0]}>
              +300
            </PercentageText>
            <Text fontSize="h6" minWidth={["auto", "auto", 400]}>
              Jovens de todo o Brasil já foram selecionados
            </Text>
          </Row>
          <Row
            bg="black"
            py="10px"
            px={10}
            alignItems="center"
            maxWidth={["100%", "600px", "800px"]}
            borderRadius="10px"
            flexWrap={["wrap", "nowrap", "nowrap"]}
            alignSelf={"center"}
          >
            <PercentageText ml={[0, 15, 15]} mb={[10, 0, 0]}>
              +2
            </PercentageText>
            <Text fontSize={["18px", "18px", "20px"]}>
              Milhões de reais gerado em renda por nossos estudantes ao se
              empregarem na área de tecnologia
            </Text>
          </Row>
          <Row
            bg="black"
            py="10px"
            px={10}
            alignItems="center"
            maxWidth={["100%", "600px", "800px"]}
            borderRadius="10px"
            flexWrap={["wrap", "nowrap", "nowrap"]}
            alignSelf={["center", "flex-start", "flex-start"]}
          >
            <PercentageText ml={[0, 15, 15]} mb={[10, 0, 0]}>
              250%
            </PercentageText>
            <Text fontSize={["18px", "18px", "20px"]}>
              Aumento em média na renda familiar ao se empregar
            </Text>
          </Row>
        </Column>
      </Layout> */}
    </>
  );
};

// const PercentageText = ({ children, ...props }) => (
//   <Text
//     color="yellow"
//     bg="black"
//     fontSize="h4"
//     mr={[36, 12, 36]}
//     px="5px"
//     {...props}
//   >
//     {children}
//   </Text>
// );

// const BannerLayout = styled(Layout)`
//   @media (max-height: 700px) and (min-width: 1279px) {
//     align-items: flex-end !important;
//     padding-top: 80px;
//     padding-bottom: 5px;

//     .BannerText {
//       div {
//         min-width: 105%;

//         p,
//         span {
//           font-size: 35px;
//         }
//       }
//     }
//   }
// // `;

// const MainImage = styled(Row)`
//   z-index: 2;
//   img {
//     width: 100%;
//     max-width: 800px;
//     border-radius: 0 0 30px 30px;
//   }

//   @media (max-width: 1279px) {
//     z-index: 1;
//     width: 100%;
//     max-width: 100%;
//     height: 100%;
//     max-height: 100%;
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     margin: auto;
//     border-radius: 0;

//     img {
//       max-width: 100%;
//       border-radius: 0;
//       filter: saturate(98%);
//     }
//   }

//   @media (max-width: 767px) {
//     z-index: 1;
//     img {
//       max-width: 100%;
//       min-width: auto;
//     }
//     max-width: 100%;
//     max-height: 100%;
//   }
// `;

// const SecondaryImage = styled(Row)`
//   object-fit: contain;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   .ArrowTablet,
//   .ArrowMobile {
//     display: none;
//   }

//   .ArrowDesktop {
//     display: block;
//   }

//   @media (max-width: 1279px) {
//     min-width: auto;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     max-height: 85%;
//     margin: auto;

//     .ArrowDesktop,
//     .ArrowMobile {
//       display: none;
//     }

//     .ArrowTablet {
//       display: block;
//       object-fit: contain;
//     }
//   }

//   @media (max-width: 767px) {
//     max-width: 85%;
//     max-height: 95%;
//     height: 90%;

//     .ArrowDesktop,
//     .ArrowTablet {
//       display: none;
//     }

//     .ArrowMobile {
//       display: block;
//       width: 100%;
//       height: 100%;
//       object-fit: contain;
//     }
//   }
// `;

export default MainHighlight;
