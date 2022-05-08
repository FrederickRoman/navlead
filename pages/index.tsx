import HeroBanner from "@/components/banner/HeroBanner";
import PageBriefIntro from "@/components/content/home/PageBriefIntro";
import NavGuidance from "@/components/guidance/NavGuidance";
import PageLongIntro from "@/components/content/home/PageLongIntro";
import LearnMoreSection from "@/components/content/home/LearnMoreSection";
import PageHead from "@/components/seo/PageHead";

import type { NextPage } from "next";
import ObservationContextProvider from "contexts/ObservationContext";

const Home: NextPage = () => (
  <>
    <PageHead
      title="Navlead"
      description="Navlead: 3D Navigation Assistance Chatbot. Get AI-powered guidance in 3D simulated enviroments."
    />
    <main>
      <HeroBanner />
      <PageBriefIntro />
      <ObservationContextProvider>
        <NavGuidance />
      </ObservationContextProvider>
      <PageLongIntro />
      <LearnMoreSection />
    </main>
  </>
);

export default Home;
