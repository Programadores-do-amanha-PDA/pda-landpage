import { Column, Footer, Header, PageViewComponent } from "@/common/components";

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
      <Column className="w-full items-center justify-center py-8 px-6 lg:px-8 bg-gradient-to-b from-primary-500 to-secondary-630 dark:from-primary-600 dark:to-secondary-750 gap-10">
        <ActivityReport />
        <FinancialStatements />
      </Column>
      <Footer />
      <PageViewComponent pageName="Who We Are" />
    </Column>
  );
};

export default Home;
