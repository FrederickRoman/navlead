import Head from "next/head";
import HeroBanner from "@/components/banner/HeroBanner";
import PageBriefIntro from "@/components/content/home/PageBriefIntro";
import NavGuidance from "../src/components/guidance/NavGuidance";
import PageLongIntro from "@/components/content/home/PageLongIntro";
import type { NextPage } from "next";

const PageHead = (): JSX.Element => (
  <Head>
    <title>Navlead</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

const Home: NextPage = () => (
  <div>
    <PageHead />
    <main>
      <HeroBanner />
      <PageBriefIntro />
      <NavGuidance />
      <PageLongIntro />
    </main>
  </div>
);

export default Home;
