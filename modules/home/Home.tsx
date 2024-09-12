// import WannaSupportModal from "@forms/WannaSupportModal";

import Header from "./Header";
import MainHighlight from "./MainHighlight";
import WhoWeAre from "./WhoWeAre";
import AboutFormation from "./AboutFormation";

import OurNews from "./OurNews";
import OurPartners from "./OurPartners";
// import Footer from "./Footer";
import { Column } from "@/common/components";

const Home = () => {
  return (
    <Column className="flex w-full h-full items-center justify-start bg-gray-50 dark:bg-secondary-900">
      <Header />
      <MainHighlight />
      <WhoWeAre />
      <AboutFormation />

      <OurNews />
      <OurPartners />

      {/*
      <WhoAlreadyDone ref={whoAlreadyDoneRef} />

      <WantToSupport ref={wantToSupportRef} />



      <Footer sectionsRefs={refs} />

      <WannaSupportModal /> */}
    </Column>
  );
};

export default Home;
