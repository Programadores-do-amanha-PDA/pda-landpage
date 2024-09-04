import Head from "next/head";

// import WannaSupportModal from "@forms/WannaSupportModal";

import Header from "./Header";
import MainHighlight from "./MainHighlight";
// import WhoWeAre from "./WhoWeAre";
// import AboutFormation from "./AboutFormation";
// import WhoAlreadyDone from "./WhoAlreadyDone";
// import WantToSupport from "./WantToSupport";
// import OurPartners from "./OurPartners";
// import Footer from "./Footer";
// import OurNews from "./OurNews";
import { Column } from "@/common/components";

const Home = () => {
  return (
    <Column className="flex w-full h-full items-center justify-between bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>Programadores do Amanhã</title>
        <link rel="icon" href="/static/favicon.ico" />
      </Head>

      <Header />
      <MainHighlight />

      {/* 
      <WhoWeAre ref={whoWeAreRef} />

      <AboutFormation ref={aboutFormationRef} />

      <WhoAlreadyDone ref={whoAlreadyDoneRef} />

      <WantToSupport ref={wantToSupportRef} />

      <OurNews ref={ourNewsRef} />

      <OurPartners />

      <Footer sectionsRefs={refs} />

      <WannaSupportModal /> */}
    </Column>
  );
};

export default Home;
