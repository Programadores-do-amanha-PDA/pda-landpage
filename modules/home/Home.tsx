// import WannaSupportModal from "@forms/WannaSupportModal";

import Header from "./Header";
import MainHighlight from "./MainHighlight";
import WhoWeAre from "./WhoWeAre";
// import AboutFormation from "./AboutFormation";
// import WhoAlreadyDone from "./WhoAlreadyDone";
// import WantToSupport from "./WantToSupport";
import OurPartners from "./OurPartners";
// import Footer from "./Footer";
// import OurNews from "./OurNews";
import { Column } from "@/common/components";

const Home = () => {
  return (
    <Column className="flex w-full h-full items-center justify-start bg-gray-50 dark:bg-gray-900">
      <Header />
      <MainHighlight />
      <WhoWeAre />

      <OurPartners />
      {/* 

      <AboutFormation ref={aboutFormationRef} />

      <WhoAlreadyDone ref={whoAlreadyDoneRef} />

      <WantToSupport ref={wantToSupportRef} />

      <OurNews ref={ourNewsRef} />


      <Footer sectionsRefs={refs} />

      <WannaSupportModal /> */}
    </Column>
  );
};

export default Home;
