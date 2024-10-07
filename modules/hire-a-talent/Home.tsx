import Head from "next/head";

import { Column, Header } from "@/common/components";
import StudentsCards from "./StudentsCardsContainer";
import { Student } from "@/app/api/student/_studentModel";

const Home = ({ students }: { students: Student[] }) => {
  const metaProps = {
    author: "Programadores do Amanhã",
    description:
      "Uma ponte que dá acesso a jovens negros e negras que desejam ingressar no mercado da tecnologia. Uma ponte contruída de maneira muito especial. Por pessoas que já estiveram do lado de lá, no lugar em que conquistar a carreira dos sonhos parecia algo muito distante. Então estamos aqui principalmente para mudar essa lógica, para trazer o emprego dos sonhos para perto da periferia. Dando as ferramentas para que pretos e pretas sejam protagonistas nessa revolução tecnológica que todos nós estamos vivendo.",
    ogImage: "/assets/share/support.png",
    ogTitle:
      "Programadores do Amanhã. Nós somos escola, mas também somos ponte.",
    ogUrl: "https://www.programadoresdoamanha.org/apoie-um-aluno",
    ogType: "Article",
  };

  return (
    <Column className="flex w-full h-screen items-center justify-center md:justify-start bg-gray-50 dark:bg-secondary-900 relative">
      <Head>
        <title>Programadores do Amanhã</title>
        <link rel="icon" href="/static/favicon.ico" />
        <meta name="description" content={metaProps.description} />
        <meta name="og:description" content={metaProps.description} />
        <meta property="og:title" content={metaProps.ogTitle} />
        <meta property="og:image" content={metaProps.ogImage} />
        <meta property="og:type" content={metaProps.ogType} />
        <meta name="author" content={metaProps.author} />
        <meta property="og:url" content={metaProps.ogUrl} />
      </Head>
      <Header />

      <StudentsCards students={students} />
    </Column>
  );
};

export default Home;
