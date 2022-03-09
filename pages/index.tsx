import type { NextPage } from "next";
import Head from "next/head";
import NavGuidance from "../src/components/guidance/NavGuidance";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Navlead</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavGuidance />
      </main>
    </div>
  );
};

export default Home;
