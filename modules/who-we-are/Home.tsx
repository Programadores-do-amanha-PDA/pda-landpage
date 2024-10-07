import { Column, Footer, Header } from "@/common/components";

import WhoWeAre from "./WhoWeAre";
import WhereAreWe from "./WhereAreWe";
import OurValues from "./OurValues";
import OurTeam from "./OurTeam";
import Advice from "./Advice";
import SupervisoryBoard from "./SupervisoryBoard";
import TransparencyBanner from "./TransparencyBanner";
import ActivityReport from "./ActivityReport";
import FinancialStatements from "./FinancialStatements";
import ImpactStatus from "./ImpactStatus";

const Home = () => {
  const metaProps = {
    author: "Programadores do Amanhã",
    description:
      "Uma ponte que dá acesso a jovens negros e negras que desejam ingressar no mercado da tecnologia. Uma ponte construída de maneira muito especial. Por pessoas que já estiveram do lado de lá, no lugar em que conquistar a carreira dos sonhos parecia algo muito distante. Então estamos aqui principalmente para mudar essa lógica, para trazer o emprego dos sonhos para perto da periferia. Dando as ferramentas para que pretos e pretas sejam protagonistas nessa revolução tecnológica que todos nós estamos vivendo.",
    ogImage: "/assets/share/support.png",
    ogTitle:
      "Programadores do Amanhã. Nós somos escola, mas também somos ponte.",
    ogUrl: `https://www.programadoresdoamanha.org`,
    ogType: "Article",
  };

  return (
    <Column className="flex w-full h-full items-center justify-start bg-gray-50 dark:bg-secondary-900 relative">
      <Header />
      <WhoWeAre />
      <WhereAreWe />
      <ImpactStatus />
      <OurValues />
      <OurTeam />
      <Advice />
      <SupervisoryBoard />
      <TransparencyBanner />
      <Column className="w-full items-center justify-center py-8 bg-gradient-to-b from-primary-500 to-secondary-630 dark:from-primary-600 dark:to-secondary-750 gap-10">
      <ActivityReport />
      <FinancialStatements />
      </Column>
      <Footer />
    </Column>
  );
};

export default Home;
