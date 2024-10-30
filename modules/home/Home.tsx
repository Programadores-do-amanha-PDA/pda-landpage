import MainHighlight from "./MainHighlight";
import ImpactStatus from "./ImpactStatus";
import WhoWeAre from "./WhoWeAre";
import AboutFormation from "./AboutFormation";
import HireATalent from "./HireATalent";
import WhoAlreadyDone from "./WhoAlreadyDone";
import Subscribe from "./Subscribe";
import WantToSupport from "./WantToSupport";
import OurNews from "./OurNews";
import OurPartners from "./OurPartners";
import WannaSupportModal from "@forms/WannaSupportModal";

import { Column, Header, Footer, PageViewComponent } from "@/common/components";
import { Suspense } from "react";

const Home = () => {
  return (
    <Column className="flex w-full h-full items-center justify-start bg-gray-50 dark:bg-secondary-900">
      <Header />
      <MainHighlight />
      <ImpactStatus />
      <WhoWeAre />
      <AboutFormation />
      <Column className="w-full items-center justify-center py-8 bg-gradient-to-b from-secondary-630/75 to-secondary-400 dark:from-secondary-630 dark:to-secondary-700 gap-8">
        <WhoAlreadyDone />
        <HireATalent />
      </Column>
      <Subscribe />
      <WantToSupport />
      <OurNews />
      <OurPartners />
      <Footer />
      <Suspense fallback={<div>Loading...</div>}>
        <WannaSupportModal />
      </Suspense>

      <PageViewComponent pageName="Home" />
    </Column>
  );
};

export default Home;
