import { useState } from "react";
import HeroBanner from "@/components/banner/HeroBanner";
import PageBriefIntro from "@/components/content/home/PageBriefIntro";
import NavGuidance from "@/components/guidance/NavGuidance";
import PageLongIntro from "@/components/content/home/PageLongIntro";
import LearnMoreSection from "@/components/content/home/LearnMoreSection";
import PageHead from "@/components/seo/PageHead";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [demoSeenBefore, setDemoSeenBefore] = useState<boolean>(false);
  return (
    <>
      <PageHead
        title="Navlead"
        description="Navlead: 3D Navigation Assistance Chatbot. Get AI-powered guidance in 3D simulated enviroments."
      />
      <main>
        <HeroBanner />
        <PageBriefIntro />
        <NavGuidance
          demoSeenBefore={demoSeenBefore}
          setDemoSeenBefore={setDemoSeenBefore}
        />
        <PageLongIntro />
        <LearnMoreSection />
      </main>
    </>
  );
};

export default Home;
