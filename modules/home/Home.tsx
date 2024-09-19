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

import { Column, Header, Footer } from "@/common/components";

const Home = () => {
  return (
    <Column className="flex w-full h-full items-center justify-start bg-gray-50 dark:bg-secondary-900">
      <Header />
      <MainHighlight />
      <ImpactStatus />
      <WhoWeAre />
      <HireATalent />
      <AboutFormation />
      <WhoAlreadyDone />
      <Subscribe />
      <WantToSupport />
      <OurNews />
      <OurPartners />
      <Footer />
      <WannaSupportModal />
    </Column>
  );
};

export default Home;
